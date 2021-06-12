import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const GRAPHQL_KEY = process.env.REACT_APP_GITHUB_GRAPHQL_API_KEY;

const GithubSection = () => {
  const [githubData, setGithubData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initalContributionsFetch();
  }, []);

  async function initalContributionsFetch() {
    const data = await getContributions(GRAPHQL_KEY, 'jleomorris');

    console.log(
      'GithubSection.initialContributionsFetch.data.user',
      data?.data?.user
    );

    setGithubData(data?.data?.user);
  }

  async function getContributions(token, username) {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    return data;
  }

  return (
    <StyledGithubSection className='github-section'>
      <div className='accolades'>
        {githubData?.contributionsCollection && (
          <p className='accolade'>
            {
              githubData.contributionsCollection.contributionCalendar
                .totalContributions
            }{' '}
            contributions over the past year
          </p>
        )}
      </div>
      <GitHubCalendar username='jleomorris' blockSize={15} color='#dbff6f6b'>
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </StyledGithubSection>
  );
};

// Styled components
const StyledGithubSection = styled.div`
  /* border: 10px solid red; */
  margin-bottom: 5rem;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff1c;

  .react-gitub-calendar-calendar__chart {
    border: 2px solid red;
    text {
      color: white;
    }
  }
`;

export default GithubSection;

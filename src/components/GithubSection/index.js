import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Styled components
import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubSection = () => {
  const [githubData, setGithubData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [testResponse, setTestResponse] = useState({});

  useEffect(() => {
    initalContributionsFetch();
  }, []);

  useEffect(() => {
    // axios.get('/api/v1/say-something').then((res) => {
    axios.get(`${process.env.API_URI}api/v1/api-keys`).then((res) => {
      console.log('GithubSection.res', res);
      const response = res.data;
      //   setTestResponse(response.graphQL);
      initalContributionsFetch(response.graphQL);
    });
  }, []);

  async function initalContributionsFetch(token) {
    // axios('/api/v1/api-keys').then(async (response) => {
    const data = await getContributions(token, 'jleomorris');

    console.log(
      'GithubSection.initialContributionsFetch.data.user',
      data?.data?.user
    );

    setGithubData(data?.data?.user);
    // });
  }

  async function getContributions(token, username) {
    const headers = {
      Authorization: `bearer ${token}`,
    };

    const body = {
      query: `query {
            user(login: "${username}") {
                
            topRepositories(first: 3, orderBy: {field: UPDATED_AT, direction: ASC}) {
                edges {
                    node {
                        id
                        name
                        pushedAt
                        updatedAt
                        homepageUrl
                        url
                    }
                }
            }
            url
            updatedAt
            createdAt
            name
            avatarUrl
            bio
            contributionsCollection {
                joinedGitHubContribution {
                    occurredAt
                }
                totalPullRequestContributions
                totalPullRequestReviewContributions
                totalRepositoryContributions
                latestRestrictedContributionDate
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
            repositories(first: 100) {
                totalCount
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
      <p className='test-response'>
        {testResponse ? testResponse.graphQL : ''}
      </p>
      <div className='github-section__header'>
        <div className='accolades'>
          {githubData?.contributionsCollection && (
            <>
              <p className='accolade'>
                <span className='accolade-highlighted'>
                  {
                    githubData.contributionsCollection.contributionCalendar
                      .totalContributions
                  }{' '}
                </span>
                contributions over the past year
              </p>
              <p className='accolade'>
                <span className='accolade-highlighted'>
                  {
                    githubData.contributionsCollection
                      .totalRepositoryContributions
                  }{' '}
                </span>
                repositories created
              </p>
              <p className='accolade'>
                <span className='accolade-highlighted'>
                  {
                    githubData.contributionsCollection
                      .totalPullRequestReviewContributions
                  }{' '}
                </span>
                pull requests created
              </p>
              <p className='accolade'>
                <span className='accolade-highlighted'>
                  {
                    githubData.contributionsCollection
                      .totalPullRequestContributions
                  }{' '}
                </span>
                pull requests reviewed
              </p>
              <p className='accolade'>
                <span className='accolade-highlighted'>
                  {new Date(githubData.updatedAt).toLocaleDateString('en-gb')}
                </span>
                - last activity
              </p>
            </>
          )}
        </div>
        <div className='icon-cta-container'>
          <FontAwesomeIcon icon={faGithub} />
          <a
            target='_blank'
            href='https://github.com/jleomorris'
            className='cta-btn cta-btn--github'
          >
            Go to my profile
          </a>
        </div>
      </div>
      <GitHubCalendar
        username='jleomorris'
        blockSize={15}
        color='#dbff6f6b'
        showTotalCount={false}
      >
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </StyledGithubSection>
  );
};

// Styled components
const StyledGithubSection = styled.div`
  /* border: 10px solid red; */
  min-height: 100vh;
  margin-bottom: 5rem;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff1c;

  .github-section__header {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .icon-cta-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      color: white;

      @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        font-size: 10rem;
      }
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 15rem;
      }
    }
  }

  .accolades {
    margin-bottom: 2rem;

    .accolade {
      padding: 1rem 0;
      font-size: 50px;

      @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        font-size: 16px;
        text-align: center;
      }
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 30px;
      }
      @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        font-size: 35px;
        text-align: left;
      }
      @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
        font-size: 35px;
      }
    }
  }

  .cta-btn--github {
    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
      margin-top: -20px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      margin-top: -40px;
    }
  }

  .react-github-calendar__chart {
    margin-top: 4rem;

    svg {
      text {
        fill: white !important;
      }
    }
  }
`;

export default GithubSection;

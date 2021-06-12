import React from 'react';
// Styled components
import styled from 'styled-components';
// React Vertical
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// Timeline data
import timeLineData, { timelineData } from './timelineData';
// Styling
// import './index.scss';

const TimelineSection = () => {
  return (
    <StyledTimelineSection className='timeline-section'>
      <VerticalTimeline>
        {timelineData().map((data) => (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={data.contentStyle}
            contentArrowStyle={data.contentArrowStyle}
            date={data.date}
            iconStyle={data.iconStyle}
            icon={data.icon}
          >
            <h3 className='vertical-timeline-element-title'>{data.subtitle}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{data.title}</h4>
            <div className='timeline__skills'>
              {data.content.map((skill) => (
                <p className='timeline__skill'>{skill}</p>
              ))}
            </div>
            {/* <p>{data.content}</p> */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </StyledTimelineSection>
  );
};

// Styled components
const StyledTimelineSection = styled.div`
  /* border: 10px solid red; */
  margin-bottom: 5rem;
  padding: 2rem 4rem;

  // Timeline
  .vertical-timeline-element-title {
    color: ${(props) => props.theme.timeline.fontColor};
    margin-bottom: 1rem;
  }

  .vertical-timeline-element-content {
    border-radius: 20px !important;

    p {
      color: ${(props) => props.theme.timeline.fontColor};
      padding: 0;
    }
  }

  .vertical-timeline-element-date {
    color: ${(props) => props.theme.timeline.background};

    @media only screen and (max-width: 1169px) {
      color: black;
    }
  }

  .vertical-timeline-element-icon {
    svg {
      display: block;
      width: 24px !important;
      height: 24px;
      position: relative;
      left: 50%;
      top: 50%;
      margin-left: -12px;
      margin-top: -12px;
    }
  }

  .timeline__skills {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;

    .timeline__skill {
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      background: #c5c5c587;
      border-radius: 20px;
    }
  }
`;

export default TimelineSection;

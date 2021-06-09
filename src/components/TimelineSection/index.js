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
            // icon={<WorkIcon />}
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
  margin: 3rem 0rem;
`;

export default TimelineSection;

import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uuidv1 from 'uniqid';

import randomColor from './utils/randomColor';

const TimeLine = ({ detailed }) => {
  const detailedForRender = detailed.map(item => (
    <TimelineItem
      key={uuidv1()}
      dateText={item.detailedBiographyDate}
      dateInnerStyle={{ background: randomColor(), color: 'rgb(0, 0, 0)' }}
      bodyContainerStyle={{
        padding: '0 20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>
        {item.detailedBiographyText}
      </p>
    </TimelineItem>
  ));

  return (
    <Timeline lineColor="rgb(221, 221, 221)">
      {detailedForRender}
    </Timeline>
  );
};

export default TimeLine;

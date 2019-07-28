import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

function TimeLineRender(props) {
  const { detailed } = props;

  const randomColor = () => {
    let rgb = [Math.random() * 180 + 76, Math.random() * 180 + 76, Math.random() * 180 + 76];
    return `rgb(${rgb})`;
  }

  const DetailedForRender = detailed.map(function (item, i) {
    return (
      <TimelineItem
        key={i}
        dateText={item.detailedBiographyDate}
        style={{ color: '#e86971' }}
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
      </TimelineItem >
    )

  })
  console.log(DetailedForRender)

  return (
    <Timeline lineColor={'#ddd'}>
      {DetailedForRender}
    </Timeline>
  )
}

export default TimeLineRender;

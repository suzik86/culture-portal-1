import React from 'react';

import TimeLineRender from './utils/TimeLineRender';

const TimeLine = ({ timeLine }) => {
  const detailed = [];

  for (let i = 0; i < timeLine.detailedBiographyDate.length; i += 1) {
    detailed[i] = {
      detailedBiographyDate: timeLine.detailedBiographyDate[i],
      detailedBiographyText: timeLine.detailedBiographyText[i],
    };
  }

  return (
    <TimeLineRender detailed={detailed} />
  );
};

export default TimeLine;

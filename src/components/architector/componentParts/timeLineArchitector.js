import React from 'react';

import TimeLineRender from './utils/TimeLineRender';

function TimeLineArchitector(props) {
  const { detailedBiographyDate, detailedBiographyText } = props.timeLine;

  let detailed = [];

  for (let i = 0; i < detailedBiographyDate.length; i += 1) {
    detailed[i] = {
      detailedBiographyDate: detailedBiographyDate[i],
      detailedBiographyText: detailedBiographyText[i]
    }
  }

  return (
    <TimeLineRender detailed={detailed} />
  )
}

export default TimeLineArchitector;

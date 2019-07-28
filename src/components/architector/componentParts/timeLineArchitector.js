import React from 'react';

import TimeLineRender from './utils/timeLineRender';

function TimeLineArchitector(props) {
  const { detailedBiographyDate, detailedBiographyText } = props.timeLine;
  let detailed = [];
  for(let i = 0; i < detailedBiographyDate.length; i += 1) {
    detailed[i] = {
      detailedBiographyDate: detailedBiographyDate[i],
      detailedBiographyText: detailedBiographyText[i]
    }
  }
  console.log(detailed)
  
  return (
    <TimeLineRender detailed={detailed} />
  )
}

export default TimeLineArchitector;
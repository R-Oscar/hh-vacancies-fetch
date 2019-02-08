import React from 'react';
import PropTypes from 'prop-types';

import { Bar } from '@nivo/bar';

function Chart({ data }) {
  return (
    <Bar
      data={data}
      keys={['from', 'to']}
      indexBy="employer"
      width={900}
      height={600}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: 'работодатель',
        legendOffset: 150,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'оклад',
        legendOffset: -50,
        legendPosition: 'middle'
      }}
      colors="set1"
      enableDotLabel
      enableGridY={false}
      margin={{
        top: 50,
        right: 110,
        bottom: 250,
        left: 60
      }}
    />
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      employer: PropTypes.string.isRequired,
      from: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  )
};

Chart.defaultProps = {
  data: []
};

export default Chart;

import React from 'react';
import PropTypes from 'prop-types';

import { Line } from '@nivo/line';

function Chart({ data }) {
  return (
    <Line
      data={data}
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
      id: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired
        })
      ).isRequired
    }).isRequired
  )
};

Chart.defaultProps = {
  data: []
};

export default Chart;

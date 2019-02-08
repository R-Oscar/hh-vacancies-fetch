import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveBar } from '@nivo/bar';

import './Chart.css';

function Chart({ data }) {
  return (
    <div className="bar-container">
      <ResponsiveBar
        data={data}
        keys={['from', 'to']}
        indexBy="employer"
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
        enableLabel={false}
        colors="set1"
        // groupMode="grouped"
        margin={{
          top: 50,
          right: 10,
          bottom: 250,
          left: 60
        }}
        padding={0.25}
      />
    </div>
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

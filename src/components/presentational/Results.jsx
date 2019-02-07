import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import ViewListIcon from '@material-ui/icons/ViewList';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import Table from './Table';
import Chart from './Chart';

function Results({ tabValue, tableData, chartData }) {
  return (
    <Paper square>
      <Tabs value={tabValue}>
        <Tab icon={<ViewListIcon />} />
        <Tab icon={<ShowChartIcon />} />
      </Tabs>

      {tabValue === 0 && <Table data={tableData} />}
      {tabValue === 1 && <Chart data={chartData} />}
    </Paper>
  );
}

Results.propTypes = {
  tabValue: PropTypes.number,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
      salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      requirement: PropTypes.string.isRequired
    })
  ),
  chartData: PropTypes.arrayOf(
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

Results.defaultProps = {
  tabValue: 0,
  tableData: [],
  chartData: []
};

export default Results;

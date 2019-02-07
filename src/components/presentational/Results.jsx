import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import ViewListIcon from '@material-ui/icons/ViewList';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import Table from './Table';

function Results({ data }) {
  return (
    <Paper square>
      <Tabs value={0}>
        <Tab icon={<ViewListIcon />} />
        <Tab icon={<ShowChartIcon />} />
      </Tabs>

      <Table data={data} />
    </Paper>
  );
}

Results.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      employer: PropTypes.string,
      salary: PropTypes.string,
      requirement: PropTypes.string
    })
  )
};

Results.defaultProps = {
  data: []
};

export default Results;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DumbResults from '../presentational/Results';

function Results({ tableData, chartData }) {
  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, value) {
    setTabValue(value);
  }

  return (
    <DumbResults
      tableData={tableData}
      chartData={chartData}
      tabValue={tabValue}
      handleTabChange={handleTabChange}
    />
  );
}

Results.propTypes = {
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
      employer: PropTypes.string.isRequired,
      from: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  )
};

Results.defaultProps = {
  tableData: [],
  chartData: []
};

export default Results;

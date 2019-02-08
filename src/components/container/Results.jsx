import React, { useState } from 'react';

import DumbResults from '../presentational/Results';

import { chartType, tableType } from '../../types';

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
  tableData: tableType,
  chartData: chartType
};

Results.defaultProps = {
  tableData: [],
  chartData: []
};

export default Results;

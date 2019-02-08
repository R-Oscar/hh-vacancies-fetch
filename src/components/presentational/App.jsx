import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Results from '../container/Results';

import { tableType, chartType } from '../../types';

function App({
  tableData,
  chartData,
  searchQuery,
  updateSearchQuery,
  handleUpdateResultsButton,
  resultsVisible
}) {
  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        updateSearchQuery={updateSearchQuery}
        handleUpdateResultsButton={handleUpdateResultsButton}
      />
      {resultsVisible && (
        <Results tableData={tableData} chartData={chartData} />
      )}
    </>
  );
}

App.propTypes = {
  tableData: tableType,
  chartData: chartType,
  searchQuery: PropTypes.string,
  updateSearchQuery: PropTypes.func.isRequired,
  handleUpdateResultsButton: PropTypes.func.isRequired,
  resultsVisible: PropTypes.bool
};

App.defaultProps = {
  tableData: [],
  chartData: [],
  searchQuery: '',
  resultsVisible: false
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Results from '../container/Results';

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
  ),
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

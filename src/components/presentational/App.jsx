import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Results from './Results';

function App({ tableData, chartData }) {
  return (
    <>
      <SearchBar />
      <Results tableData={tableData} chartData={chartData} />
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

App.defaultProps = {
  tableData: [],
  chartData: []
};

export default App;

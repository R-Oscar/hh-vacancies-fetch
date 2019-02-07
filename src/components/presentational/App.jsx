import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Results from './Results';

function App({ data }) {
  return (
    <>
      <SearchBar />
      <Results data={data} />
    </>
  );
}

App.propTypes = {
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

App.defaultProps = {
  data: []
};

export default App;

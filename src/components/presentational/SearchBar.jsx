import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function SearchBar({
  classes,
  searchQuery,
  updateSearchQuery,
  handleUpdateResultsButton
}) {
  return (
    <form onSubmit={handleUpdateResultsButton}>
      <TextField
        id="standard-search"
        label="Введите интересующую вакансию"
        type="search"
        margin="normal"
        className={classes.textField}
        fullWidth
        value={searchQuery}
        onChange={updateSearchQuery}
      />

      <Button variant="contained" className={classes.button} type="submit">
        Поиск
      </Button>
    </form>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.shape({
      margin: PropTypes.string
    }),
    input: PropTypes.shape({
      display: PropTypes.string
    }),
    textField: PropTypes.shape({
      marginLeft: PropTypes.string,
      marginRight: PropTypes.string
    })
  }),
  searchQuery: PropTypes.string,
  updateSearchQuery: PropTypes.func.isRequired,
  handleUpdateResultsButton: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  classes: {},
  searchQuery: ''
};

export default withStyles(styles)(SearchBar);

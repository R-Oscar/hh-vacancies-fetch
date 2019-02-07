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

function SearchBar({ classes }) {
  return (
    <>
      <TextField
        id="standard-search"
        label="Введите интересующую вакансию"
        type="search"
        margin="normal"
        className={classes.textField}
        fullWidth
      />

      <Button variant="contained" className={classes.button}>
        Поиск
      </Button>
    </>
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
  })
};

SearchBar.defaultProps = {
  classes: {}
};

export default withStyles(styles)(SearchBar);

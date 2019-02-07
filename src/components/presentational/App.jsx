import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import ViewListIcon from '@material-ui/icons/ViewList';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { stripHtmlTags } from '../../utils';

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

function App({ classes, data }) {
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

      <Paper square>
        <Tabs value={0}>
          <Tab icon={<ViewListIcon />} />
          <Tab icon={<ShowChartIcon />} />
        </Tabs>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Название</TableCell>
              <TableCell align="center">Описание</TableCell>
              <TableCell align="center">Работодатель</TableCell>
              <TableCell align="center">Оклад</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ id, name, employer, salary, requirement }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{stripHtmlTags(requirement)}</TableCell>
                <TableCell>{employer}</TableCell>
                <TableCell>{salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.shape({
      margin: PropTypes.number
    }),
    input: PropTypes.shape({
      display: PropTypes.string
    }),
    textField: PropTypes.shape({
      marginLeft: PropTypes.number,
      marginRight: PropTypes.number,
      width: PropTypes.number
    })
  }),
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
  classes: {},
  data: []
};

export default withStyles(styles)(App);

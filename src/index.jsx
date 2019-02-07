import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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

import './index.css';

import data from './tempdata';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function App({ classes }) {
  return (
    <MuiThemeProvider>
      <div className="container">
        <CssBaseline />
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
                  <TableCell>{requirement}</TableCell>
                  <TableCell>{employer}</TableCell>
                  <TableCell>{salary || 'Не указан'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </MuiThemeProvider>
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
  })
};

App.defaultProps = {
  classes: {}
};

export default withStyles(styles)(App);

render(<App />, document.querySelector('#root'));

if (module.hot) module.hot.accept();

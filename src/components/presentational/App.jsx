import React from 'react';
import PropTypes from 'prop-types';

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

import SearchBar from './SearchBar';

import { stripHtmlTags } from '../../utils';

function App({ data }) {
  return (
    <>
      <SearchBar />

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

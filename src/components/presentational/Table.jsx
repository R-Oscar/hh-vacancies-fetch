import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableSortLabel from '@material-ui/core/TableSortLabel';

function ResultsTable({ data }) {
  return (
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
            <TableCell>{salary}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
      salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      requirement: PropTypes.string.isRequired
    })
  )
};

ResultsTable.defaultProps = {
  data: []
};

export default ResultsTable;

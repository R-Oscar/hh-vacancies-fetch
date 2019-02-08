import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

function ResultsTable({
  data,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Название</TableCell>
          <TableCell align="center">Требования</TableCell>
          <TableCell align="center">Работодатель</TableCell>
          <TableCell align="center">Оклад</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(({ id, name, employer, salary, requirement }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>{requirement}</TableCell>
              <TableCell>{employer}</TableCell>
              <TableCell>{salary}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={4}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              native: true
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
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
  ),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
};

ResultsTable.defaultProps = {
  data: [],
  page: 0,
  rowsPerPage: 5
};

export default ResultsTable;

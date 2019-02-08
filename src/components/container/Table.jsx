import React, { useState } from 'react';

import DumbTable from '../presentational/Table';

import { tableType } from '../../types';

function Table({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  return (
    <div>
      <DumbTable
        data={data}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

Table.propTypes = {
  data: tableType
};

Table.defaultProps = {
  data: []
};

export default Table;

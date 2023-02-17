import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import DataTableProps from '../interface/TableProps';

const Table = (props: DataTableProps) => {
  const { rows, columns, pageSize, rowsPerPageOptions } = props;
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          checkboxSelection
        //   onSelectionModelChange={handleSelectionChange}
        />
      </div>
    </>
  );
};

export default Table;

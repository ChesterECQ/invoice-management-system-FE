import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import DataTableProps from "../interface/TableProps";
import { Box } from "@mui/material";

const Table = (props: DataTableProps) => {
  const { rows, columns, pageSize } = props;
  return (
    <>
      {/* <div style={{ height: 650, width: "100%" }}> */}
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div style={{ flex: 1 }}>
            <DataGrid
              autoHeight={true}
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              // rowsPerPageOptions={rowsPerPageOptions}
              checkboxSelection
              //   onSelectionModelChange={handleSelectionChange}
            />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Table;

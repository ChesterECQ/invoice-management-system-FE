import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import DataTableProps from "../interface/TableProps";
import { Box, Typography } from "@mui/material";

const Table = (props: DataTableProps) => {
  const { rows, columns, pageSize, tableName } = props;
  return (
    <>
      {/* Table Header */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          color={"primary"}
          sx={{ textDecoration: "underline" }}
        >
          {tableName}
        </Typography>
      </Box>
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

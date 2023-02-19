import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import FileUpload from "../components/FileUpload";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import invoiceHeaders from "../components/tableHeaders/InvoiceHeader";
import Invoice from "../interface/Invoice";
import SearchVal from "../interface/SearchVal";
import GetInvoiceRecordsService from "../service/GetInvoiceRecordsService";

const Home = () => {
  // define search val object
  const [searchVal, setSearchVal] = React.useState<SearchVal>({
    searchVal: "",
  });

  // To handle Search text changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchVal({ searchVal: event.target.value });
  };

  // to handle getting the response from the search value
  const handleSearch = () => {
    setSearchVal({searchVal : ""});
  };

  // Boolean to control displaying of table
  const [showTable, setShowTable] = React.useState<boolean>(false);

  // to hold all the rows information in the table
  const [invoiceRecords, setInvoiceRecords] = React.useState<Array<Invoice>>(
    []
  );

  // to generate table data
  const generateTableRecords = () => {
    GetInvoiceRecordsService.getInvoicesRecords(searchVal).then((response) => {
      console.log(response);
      setInvoiceRecords(response.data);
      setShowTable(true);
    });
  };

  // useEffect to reload table whenever searchterm chagnes
  React.useEffect(() => {
    GetInvoiceRecordsService.getInvoicesRecords(searchVal).then((res) => {
      setInvoiceRecords(res.data);
    });
  }, [searchVal]);

  return (
    <>
      {/* File upload Component */}
      <Card data-test="fileUpload">
        <FileUpload />
      </Card>

      <Card data-test="invoice records">
        <>
          {/* Button to generate first batch of data */}
          {!showTable && (
            <Button
              onClick={generateTableRecords}
              variant="contained"
              bgcolor="primary"
            >
              Generate Table
            </Button>
          )}
          {showTable && (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* Table Header */}
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h4"
                  color={"primary"}
                  sx={{ textDecoration: "underline" }}
                >
                  Invoice Records
                </Typography>
              </Box>

              {/* Search Bar component */}
              <Box sx={{ my: 1 }}>
                <SearchBar
                  placeholder="Search"
                  handleSearchTerm={handleSearchChange}
                  handleButtonClick={handleSearch}
                  searchTerm={searchVal.searchVal}
                />
              </Box>

              {/* Table Component */}
              <Box>
                <Table
                  rows={invoiceRecords}
                  columns={invoiceHeaders}
                  pageSize={10}
                />
              </Box>
            </Box>
          )}
        </>
      </Card>
    </>
  );
};

export default Home;

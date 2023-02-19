import React from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import FileUpload from "../components/FileUpload";
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

  // Boolean to control displaying of table
  const [showTable, setShowTable] = React.useState<Boolean>(false);

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

  return (
    <>
      {/* File upload Component */}
      <Card>
        <FileUpload />
      </Card>
      {/* Table Component */}
      <Card>
        {/* Button to generate first batch of data */}
        <>
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
            <Table
              tableName="Invoice Records"
              rows={invoiceRecords}
              columns={invoiceHeaders}
              pageSize={10}
            />
          )}
        </>
      </Card>
    </>
  );
};

export default Home;

import { GridColDef } from '@mui/x-data-grid';

const invoiceHeaders : GridColDef[] = [
  { field: 'invoiceNo', headerName: 'Invoice No', width: 120 },
  { field: 'stockCode', headerName: 'StockCode', width: 130 },
  { field: 'description', headerName: 'Description', width: 500 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100 },
  { field: 'invoiceDate', headerName: 'Invoice Date', width: 150 },
  { field: 'unitPrice', headerName: 'Unit Price', type: 'number', width: 120 },
  { field: 'customerID', headerName: 'Customer ID', width: 120 },
  { field: 'country', headerName: 'Country', width: 150 },
];

export default invoiceHeaders;

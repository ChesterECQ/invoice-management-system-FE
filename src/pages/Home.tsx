import React from 'react';
import Card from '../components/common/Card';
import FileUpload from '../components/FileUpload';
import Table from '../components/Table';
import invoiceHeaders from '../components/tableHeaders/InvoiceHeader';

// When loading data from BE -> send invoiceNo as id or auto generate an id
const rows = [
  {
    id: 1,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 2,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 3,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 4,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 5,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 6,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 7,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 8,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 9,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'United Kingdom',
  },
  {
    id: 10,
    invoiceNo: '536365',
    stockCode: '85123A',
    description: 'WHITE HANGING HEART T-LIGHT HOLDER',
    quantity: 6,
    invoiceDate: '12/1/2010 8:26',
    unitPrice: 2.55,
    customerID: '17850',
    country: 'Hello Kingdom',
  },
];

// interface Data {
//     calories: number;
//     carbs: number;
//     fat: number;
//     name: string;
//     protein: number;
//   }

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
//   ): Data {
//     return {
//       name,
//       calories,
//       fat,
//       carbs,
//       protein,
//     };
//   }

const Home = () => {
  return (
    <>
      {/* File upload Component */}
      <Card>
        <FileUpload />
      </Card>
      {/* Table Component */}
      <Card>
        <Table
          rows={rows}
          columns={invoiceHeaders}
          pageSize={10}
        />
      </Card>
    </>
  );
};

export default Home;

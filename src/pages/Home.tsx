import React from 'react';
import Card from '../components/common/Card';
import FileUpload from '../components/FileUpload';

const Home = () => {
  return (
    <>
      {/* File upload Component */}
      <Card>
        <FileUpload />
      </Card>
      {/* Table Component */}
      <Card>
        <h1>Table</h1>
      </Card>
    </>
  );
};

export default Home;

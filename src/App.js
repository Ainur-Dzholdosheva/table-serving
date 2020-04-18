import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import TableServing from './containers/TableServing/TableServing';

export default () => {
  return (
    <div className="App">
      <Layout>
       <TableServing/>
      </Layout>
      
    </div>
  );
}

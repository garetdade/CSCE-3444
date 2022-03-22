import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
//define the coloms of the table
const columns = [
  
    {
         field: 'id', headerName: 'ID', width: 70 
    },

    {
       field: 'firstName',
        headerName: 'First name',
        width: 130
    },

    {
       field: 'lastName',
        headerName: 'Last name',
        width: 130 
    },

    {
    field: 'numpicks',
    headerName: 'Picks number',
    type: 'number',
    width: 120,
    },
  {
    field: 'email',
    headerName: 'Email',
    sortable: false,
    width: 180,
    
  },
  {
    field: 'password',
    headerName: 'Password',
    sortable: false,
    width: 160,
    
  },
];
//fill up data of rows
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', numpicks: 35,email:'hithere@gmail.com',password:'1dgfand***' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', numpicks: 42,email:'hithere@gmail.com',password:'124535***' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', numpicks: 45,email:'hithere@gmail.com',password:'13453***' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', numpicks: 16,email:'hithere@gmail.com',password:'6543***' },
  
];

function DataTable() {
  return (
    <div style={{ height: 300, width: '80%', backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
        
      />
    </div>
  );
}
export default  DataTable;

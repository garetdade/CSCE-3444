
import './App.css';
import Button from '@material-ui/core/Button'
import  Container from '@material-ui/core/Container' 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NavBar from "./searchBar";
import DataTable from './usersTable';
import { Divider } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="xlg">
      <div>
        <NavBar>new nav bar</NavBar>
        </div>
    <div className="App">
      <header className="App-header">
        <h1>Admin page</h1>
       
        
        
          <DataTable>Data</DataTable>
          
        
        <Button
        
         variant='outlined'
          color='primary'
          href='https://www.google.com/'>go to google
          
        </Button>
        
        
      </header>
    </div>
    </Container>
  );
}


export default App;

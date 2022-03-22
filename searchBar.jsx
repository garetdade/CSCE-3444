import Button from '@material-ui/core/Button'
import  Container from '@material-ui/core/Container' 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
//import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import MailIcon from '@mui/icons-material/Mail';
//import NotificationsIcon from '@mui/icons-material/Notifications';
//import MoreIcon from '@mui/icons-material/MoreVert';
import { styled, alpha } from '@mui/material/styles'
// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import HomeIcon from '@mui/icons-material/Home';




const styleZ=styled(()=>({
  typographyStyle:
  {
    flex:1
  }
}));
const Search = styled('div')(({ theme }) => (
  {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]:
    {
      marginLeft: theme.spacing(7),
      width: 'auto',
    },
  }
  )
  );
  //  magnifier icon class
  const SearchIconmark = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  //search icon word
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 70, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  function SearchAppBar() {
    const classe=styleZ();
    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
     
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 8 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              Wrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            <IconButton
              size="xlarge"
              color="inherit"
              aria-label="home button"
              >
              <HomeIcon />
              </IconButton>  
              
            </Typography>
            <Search position="absolute">
              <SearchIconmark>
                <SearchIcon />
              </SearchIconmark>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account circle"
              onClick={handleMenu}
              sx={{ ml:40  }}
            >
              <AccountCircle/>
            </IconButton>
            
            <Menu
            //// below is the functionality for the account circle menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Log out</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      
    );
  }
  export default SearchAppBar;
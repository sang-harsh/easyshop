import * as React from 'react';
import {AppBar, Toolbar, Box ,IconButton,InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import useStyles from './styles.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import TEALLOGO from "../../utils/tealLogo.png";

import { useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {useAuth} from '../AuthContext';


function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const {currentUser, logout,notification} = useAuth();

  const handleLoginLogout = async () => {  
    if(currentUser){
      await logout();
    localStorage.clear();
    notification("Wonderful!", "Logout Success", "success");
    }else{
      history.push("/login");
    }
  };
  return (
    <div>
      <AppBar>
        <ReactNotifications/>
        <Toolbar className={classes.toolbar} >
          <div style={{display:'flex' ,alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div  className={classes.iconsdiv} >
                <IconButton color='inherit'size="large">
                  <MenuIcon/>
                </IconButton>
                </div>
                <div className={classes.iconsdiv}  >
                  <img src={TEALLOGO} alt="Not found" height="60" width="150"/>
                </div>
          </div>


          <div display='flex'>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <IconButton >
                    <SearchIcon/>
                    </IconButton >
                  </div>
                  <div>
                  <InputBase placeholder="Search..."classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                  </div>
              
              </div>
          </div>

          <Box display='flex'  flexDirection='row'>
                <div  className={classes.iconsdiv} >
                <IconButton color='inherit'size="large" onClick={() => history.push("/")}>
                  <HomeIcon />
                </IconButton>
                </div>
                <div  className={classes.iconsdiv} onClick={() => history.push("/cart")} >
                <IconButton color='inherit'size="large">
                  <ShoppingCartCheckoutIcon />
                </IconButton>
                </div>
                <div  className={classes.iconsdiv} >
                <IconButton color='inherit'size="large" onClick={handleLoginLogout}>
                  {(currentUser) ?((localStorage.pic)?<Avatar src={localStorage.pic} sx={{ width: 30, height: 30 }}/>:<AccountCircleIcon/>)
                   : <AccountCircleOutlinedIcon />
                  }
                </IconButton>
                </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default NavBar;
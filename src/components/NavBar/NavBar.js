import * as React from 'react';
import {AppBar, Box ,IconButton,InputBase, useMediaQuery} from '@mui/material';
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
  const isDesktop = useMediaQuery('(min-width:1224px)');

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
        <div className={classes.toolbar} >
          <div className={classes.toolbarLeft}>
            <div  className={classes.iconsdiv} >
                <IconButton color='inherit' 
                onClick={() => notification("Devloper Notification!", "Feature not yet added", "danger")} >
                    <MenuIcon className={classes.icons} />
                </IconButton>
            </div>
                <div className={classes.iconsdiv}  onClick={() => history.push("/")}>             
                    <img src={TEALLOGO} alt="Not found" className={classes.siteLogo}/>
                </div>
          </div>

          {
            isDesktop?(<div display='flex' className={classes.iconsdiv}>
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
                    </div>):(<></>)
          }
          
          <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly'}}>
                <div  className={classes.iconsdiv} >
                <IconButton color='inherit' onClick={() => history.push("/")}>
                  <HomeIcon />
                </IconButton>
                </div>
                <div  className={classes.iconsdiv} onClick={() => history.push("/cart")} >
                <IconButton color='inherit'>
                  <ShoppingCartCheckoutIcon />
                </IconButton>
                </div>
                <div  className={classes.iconsdiv} >
                <IconButton color='inherit' onClick={handleLoginLogout}>
                  {(currentUser) ?((localStorage.pic)?<Avatar src={localStorage.pic} sx={{ width: 30, height: 30 }}/>:<AccountCircleIcon/>)
                   : <AccountCircleOutlinedIcon />
                  }
                </IconButton>
                </div>
          </Box>
        </div>
      </AppBar>
    </div>
    )
}

export default NavBar;
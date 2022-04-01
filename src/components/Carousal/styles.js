import {makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
         
      container:{
            marginTop: '6vh',
      },
      carousalImage:{
            [theme.breakpoints.down('mobile')]: {
                  height: '30vh',
            },
            [theme.breakpoints.between('mobile','tablet')]: {
                  height: '45vh',
            },
            [theme.breakpoints.between('tablet','laptop')]: {
                  height: '60vh',
            },
            [theme.breakpoints.up('laptop')]: {
                  height: '85vh',
            },
      }
}))
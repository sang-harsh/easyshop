import {makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
         
      toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
            
            alignItems: 'center',
      },
      toolbarLeft:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
      },
      iconsdiv:{   
            marginRight: 20,
            marginLeft: 20,
            [theme.breakpoints.down('tablet')]:{
                  marginRight: 8,
                  marginLeft: 8,
            },
      },
      siteLogo:{
            height: 60,
            width: 150,
            [theme.breakpoints.down('tablet')]:{
                  height:45,
                  width:100,          
            }
      },
      search: {
            position: 'relative',
            borderRadius: 15,
            backgroundColor: 'white',
            marginRight: 2,
            marginLeft: 0,
            width: 700,
            height: 40,
            display:'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
      },
      searchIcon:{
            padding: 2, height: '100%',
      },
      inputRoot: {
            color: 'black',
            position: 'absolute',
            paddingRight: 10
      },
      inputInput: {
            padding: 1, paddingLeft: 5 , width: '100%'
      },
      
}))
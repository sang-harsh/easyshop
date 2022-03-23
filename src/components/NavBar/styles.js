import {makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
         
      toolbar: {
            display: 'flex', justifyContent: 'space-between', flexGrow: 1,
      },
      search: {
            position: 'relative',
            borderRadius: 15,
            backgroundColor: 'white',
            marginRight: 2,
            marginLeft: 0,
            width: 800,
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
      iconsdiv:{
            marginRight: 30,
      }
}))
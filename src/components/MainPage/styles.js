import {makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
      greyBox:{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
      },
      card:{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            padding: "10px",
            borderRadius: "10px",
            width: "265px", margin: "25px",
            [theme.breakpoints.down('tablet')]: {
                  width: "135px", margin: "10px",
            }
      },
      imgContainer:{    
            height: 100,paddingBottom:100,margin: 20,
            [theme.breakpoints.down('tablet')]: {
                  height: 50,paddingBottom:50,margin: 10, 
            }
      },
      itemImage:{
            height: 220, width: 150,
            [theme.breakpoints.down('tablet')]: {
                  height: 110, width: 75
            }
      },
      titlediv:{
            display: 'flex',
            color: '#009688',
            justifyContent: 'center',
            fontWeight: '500',
            alignSelf: "flex-start",
            fontSize: '18px',
            [theme.breakpoints.down('tablet')]: {
                  fontSize: '12px',
            }
      },
      title:{
            color: '#009688',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '265px',
            [theme.breakpoints.down('tablet')]: {
                  fontSize: '12px',
                  width: '135px',
            }
      },
      detailsButton:{
            alignSelf:"flex-start",    
      },
      loadingDiv:{
            display:'flex',
            justifyContent: 'center',
      },
      loadingSymbol:{
            height: "45vh",
            width: "45vw",
      }
}))
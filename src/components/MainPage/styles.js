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
            margin: "25px",
            padding: "10px",
            borderRadius: "10px"
      },
      // imgContainer:{    
      //       height: 100,
      //       paddingBottom:100,
      //       margin: 20,
      // },
      titlediv:{
            display: 'flex',
            color: '#009688',
            justifyContent: 'center',
            
            fontWeight: '500',
            alignSelf: "flex-start"
      },
      title:{
            color: '#009688',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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
import {makeStyles } from '@mui/styles';
export default makeStyles((theme)=>({
      backButton : {
            borderRadius:"30px",
            padding: "10px",
            backgroundColor: "#d3d3d3",
            [theme.breakpoints.up('laptop')]:{
                  marginLeft: 10,
                  marginTop: 20,
            },
            [theme.breakpoints.between('tablet','laptop')]:{
                  marginLeft: 5,
                  marginTop: 20,
            },
            [theme.breakpoints.down('tablet')]:{
                  marginLeft: 0,
                  marginTop: 20,
            },          
      },
      cardInfo:{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingBottom: '3vh',
            marginBottom: '5vh',
            [theme.breakpoints.down('tablet')]:{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',

            }
      },
      cardImage: {
            height: '60vh',
            width: '25vw',
            [theme.breakpoints.down('tablet')]:{
                  height: '20vh',
                  width: '20vw',
            }
      },
      detailsContainer:{
            height: '80vh',
            width: '55vw',
            [theme.breakpoints.down('tablet')]:{
                  height: 'auto',
                  width: '90vw',
                  paddingBottom: '0.5vh',
                  marginBottom: '0.5vh',
            }
      },
      itemTitle:{
            fontSize: 40,
            alignSelf: 'center',
            [theme.breakpoints.down('tablet')]:{
                  fontSize: 20,
            }
      },
      descriptionContainer:{
            display: 'flex',
            flexDirection: 'column',   
      },
      itemDescription:{
            fontSize: 20,
            [theme.breakpoints.down('tablet')]:{
                  fontSize: 15,
            }
      },
      buttonContainer:{
            display:'flex',
            justifyContent: 'center',
      },
      button:{
            marginRight: 20,
      }
}))
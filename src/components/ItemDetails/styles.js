import {makeStyles } from '@mui/styles';
export default makeStyles((theme)=>({
      mainContainer:{
            [theme.breakpoints.up('laptop')]:{
                  margin: "12vh 10vh 10vh 10vh",
            },
            [theme.breakpoints.between('tablet','laptop')]:{
                  margin: "12vh 10vh 10vh 10vh",
            },
            [theme.breakpoints.between('mobile','tablet')]:{
                  margin: "10vh 10vh 10vh 5vh"
            },
            [theme.breakpoints.down('mobile')]:{
                  margin: "60px 3vh 10vh 3vh",
            },    
      },
      backButton : {
            borderRadius:"30px",
            backgroundColor: "#d3d3d3",
            [theme.breakpoints.up('laptop')]:{
                  padding: "10px",
            },
            [theme.breakpoints.between('tablet','laptop')]:{ 
                  padding: "10px",
            },
            [theme.breakpoints.between('mobile','tablet')]:{
                  padding: "8px",
            },
            [theme.breakpoints.down('mobile')]:{
                  padding: "6px",
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
                  textAlign: 'justify',
            }
      },
      cardImage: {
            height: '60vh',
            width: '25vw',
            [theme.breakpoints.down('laptop')]:{
                  height: '50vh',
                  width: '25vw',
            },
            [theme.breakpoints.down('tablet')]:{
                  height: '20vh',
                  width: '20vw',
            }
      },
      detailsContainer:{
            display: 'flex',
            flexDirection: 'column',
            height: '80vh',
            width: '55vw',
            [theme.breakpoints.down('laptop')]:{
                  height: 'auto',
                  width: '50vw',
                  paddingBottom: '0.5vh',
                  marginBottom: '0.5vh',
            },
            [theme.breakpoints.down('tablet')]:{
                  height: 'auto',
                  width: '90vw',
                  paddingBottom: '0.5vh',
                  marginBottom: '0.5vh',
                  alignItems: 'center',
            },
      },
      itemTitle:{
            fontSize: 40,
            alignSelf: 'center',
            [theme.breakpoints.down('laptop')]:{
                  fontSize: 25,
            },
            [theme.breakpoints.down('tablet')]:{
                  fontSize: 20,
            },
      },
     
      itemDescription:{
            marginTop: 10,
            fontSize: 20,
            [theme.breakpoints.down('laptop')]:{
                  fontSize: 16,
            },
            [theme.breakpoints.down('tablet')]:{
                  fontSize: 14,
            }
      },
      priceDiv:{
            [theme.breakpoints.up('laptop')]:{
            fontSize: 25,
            },
            [theme.breakpoints.between('tablet','laptop')]:{
                  fontSize: 22,
            },
            [theme.breakpoints.between('mobile','tablet')]:{
                  fontSize: 20,
            },
            [theme.breakpoints.down('mobile')]:{
                  fontSize: 18,
            }
      },
      buttonContainer:{
            display:'flex',
            justifyContent: 'center',
            [theme.breakpoints.up('tablet')]:{
                  justifyContent: 'flex-start',
            }
      },
      button:{
            width: 148,
            [theme.breakpoints.down('tablet')]:{
                  width: 119,
            }
      }
}))
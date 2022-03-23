import React from 'react'
import {makeStyles } from '@mui/styles';
import FooterBlocks from './FooterBlocks';

const useStyles = makeStyles((theme)=>({
      footer:{
            backgroundColor: 'black',
            color: 'white',
            height: '40vh',
             
            display:'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
      },
      hover: {
            "&:hover": {
            //  backgroundColor: 'rgb(7, 177, 77, 0.42)',
              textDecoration: 'underline',
              cursor: 'not-allowed'
            }
      }
}));


function Footer() 
{
  const classes = useStyles();
  const links = [{
            title: "ABOUT",
            arr: ["Contact Us","Careers","About Us","Press","Corporate Information"]
      },{
            title: "Policy",
            arr: ["Return Poly","Terms of Use","Security","Privacy","EPR Complaince"]
      },{
            title: "HELP",
            arr: ["Payments","Shipping","Cancellation","Return","FAQ"]
      },{
            title: "SOCIAL",
            arr: ["Facebook","Twitter","Youtube","Instagram","Pinterest"]
      }]

  return (
    <div className={classes.footer}>
      {
            links.map((element)=>{
                  return(
                        <FooterBlocks title={element.title} arr={element.arr} classes={classes}/>
                  )
            })
      }
    </div>
  )
}

export default Footer;

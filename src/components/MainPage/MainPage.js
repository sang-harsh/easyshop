import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import CarousalCard from "../Carousal/CarousalCard";
import {Button,useMediaQuery,Box} from "@mui/material";
import useStyles from './styles.js';
import Footer from "../Footer/Footer";
import {useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import LOADING from "../../utils/loading.gif";
import { shadows } from '@mui/system';
function MainPage() {
      const classes = useStyles();
      const [products, setProducts] = useState([]);
      const history = useHistory();
      const isMobile = useMediaQuery('(max-width:768px)');

      async function getData() {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        if (data) {
          setProducts(data);
        }
      }
      useEffect(() => {
        getData();
      }, []);

      function handelDetails(info) {
        localStorage.setItem("card", JSON.stringify(info));
        history.push("/itemdetails");
      }

  return (
    <div >
          <NavBar/>
          <ReactNotifications />
          <CarousalCard/>

          <div className={classes.greyBox}>
      
    
          {products.length !== 0 ? (
          products.map((element, i) => (

          !isMobile?
          (<Box className={classes.card} sx={{ boxShadow: 3 ,width: "290px"}}>
              <div className={classes.imgContainer} style={{height: 100,paddingBottom:100,margin: 20,}}>
                  <img src={element.image}  alt="Not loaded" style={{height: 220, width: 150}} />
              </div> 
              <div className={classes.titlediv} style={{fontSize: '20px'}}>
                <p className={classes.title} style={{width: '300px',}}>
                  {element.title}
                </p>
              </div>
              <Button variant="contained"  onClick={() => handelDetails(element)} 
                className={classes.detailsButton}>Details</Button>  
              </Box>
          ):( <Box className={classes.card} sx={{boxShadow: 3,width: "185px"}}>
                <div className={classes.imgContainer} style={{height: 50,paddingBottom:50,margin: 10,}}>
                  <img src={element.image} style={{height: 110, width: 75}} alt="Not loaded"/>
                </div>      
                <div className={classes.titlediv}>
                  <p className={classes.title} style={{width: '150px',}}>
                    {element.title}
                  </p>
                </div>
                <Button variant="outlined"  size="small" onClick={() => handelDetails(element)} 
                  className={classes.detailsButton}>Details</Button>  
          </Box> )

          ))):(<div className={classes.loadingDiv}>
          <img className={classes.loadingSymbol} src={LOADING} alt="loading" />
          </div>)}
            
      
          </div>
          <Footer/>  
            
    </div>
  )
}

export default MainPage;
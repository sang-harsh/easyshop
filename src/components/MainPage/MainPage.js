import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import CarousalCard from "../Carousal/CarousalCard";
import {Button,useMediaQuery,Box} from "@mui/material";
import useStyles from './styles.js';
import Footer from "../Footer/Footer";
import {useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import LOADING from "../../utils/loading.gif";

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


          <Box className={classes.card}  key={i} sx={{boxShadow: 3}}>
            <div className={classes.imgContainer}>
                <img src={element.image}  alt="Not loaded" className={classes.itemImage} />
            </div> 
            <div className={classes.titlediv}>
              <p className={classes.title}>{element.title}</p>
            </div>
            <Button variant="contained" size="small"  onClick={() => handelDetails(element)} 
               className={classes.detailsButton}>Details</Button>  
          </Box>


          ))):(<div className={classes.loadingDiv}>
          <img className={classes.loadingSymbol} src={LOADING} alt="loading" />
          </div>)}
            
      
          </div>
          <Footer/>  
            
    </div>
  )
}

export default MainPage;
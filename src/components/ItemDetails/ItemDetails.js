import React from "react";
import NavBar from "../NavBar/NavBar";
import useStyles from "./styles.js"
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useHistory } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Container,Grid,Typography, Rating, Button} from "@mui/material";
import {ReactNotifications} from "react-notifications-component";
import {useAuth} from '../AuthContext.js'

function ItemDetails() {
  
  const history = useHistory();
  const classes = useStyles();
  const {notification} = useAuth();
  let data = JSON.parse(localStorage.getItem("card"));
  data.quantity = 1;

  function handelAddToCart() {
    let cartArray = [];
    let prevData = JSON.parse(localStorage.getItem("cart"));

    if (prevData === undefined || prevData === null) {
      cartArray.push(data);
      localStorage.setItem("cart", JSON.stringify(cartArray));
       //console.log("ITEM IS ADD TO CART");
      notification("Wonderful!", "ITEM IS ADD TO CART", "success");
      //setTimeout(() => history.push("/cardinfo"), 1000);
    } else {
      let index = prevData.findIndex((element) => element.id === data.id);
      if (index < 0) {
        cartArray.push(...prevData);
        cartArray.push(data);
        localStorage.setItem("cart", JSON.stringify(cartArray));
        notification("Wonderful!", "ITEM IS ADD TO CART", "success");
        // setTimeout(() => history.push("/cardinfo"), 1000); 
      } 
      else {
        notification("Warning!!!", "ITEM IS ALREADY IN A CART", "danger");
      }
    }
  }

  function handelCheckout(){
    localStorage.setItem("buynow","true");
    history.push("/checkout");
  }

  return (
    <div style={{padding: "12vh"}}>
      <NavBar />
      <ReactNotifications/>
      <ArrowLeftIcon className={classes.backButton} onClick={() => history.goBack()} fontSize="large"/>
      <Grid container  spacing={5}>
          <Grid item xs={4}>
            <img src={data.image} className={classes.itemimage} alt="n"/>
          </Grid>
          <Grid item xs={8}>
            <Container className="cardinfo-details">
              <Typography variant="h3" mb={2}>{data.title} </Typography>
              <Rating name="read-only" value={data.rating.rate} readOnly/>

              <div className="cardinfo-details-body">
                <Typography variant="h5"  mt={2}>{data.description}</Typography>
                <Typography variant="h5" mt={3} mb={3}> Rs {data.price}</Typography>
                <div className="cardinfo-details-button">
                  <Grid container >
                      <Grid item xs={3} >
                        <Button variant="outlined" size="large" onClick={handelAddToCart}>
                          <ShoppingCartIcon /> ADD TO CART
                        </Button>
                        </Grid>
                      <Grid item xs={3}>
                        <Button variant="contained" size="large" onClick={()=>handelCheckout()}>
                          <FlashOnIcon /> BUY NOW
                         </Button>
                      </Grid>
                  </Grid>
                </div>
              </div>
            </Container>
          </Grid>
        </Grid>  
    </div>
  );
}

export default ItemDetails;

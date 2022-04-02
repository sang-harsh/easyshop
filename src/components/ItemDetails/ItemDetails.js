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
    <div>
      <NavBar />
      <ReactNotifications/>
      <div className={classes.mainContainer}>
      <ArrowLeftIcon className={classes.backButton} onClick={() => history.goBack()} fontSize="large"/>
      <div className={classes.cardInfo}>
        <div >
          <img src={data.image} className={classes.cardImage} />
        </div>
        <div  className={classes.detailsContainer}>
            <div>
              <h1 className={classes.itemTitle}>{data.title}</h1>
            </div>

            <Rating name="read-only" value={data.rating.rate} readOnly/>
            <div className={classes.itemDescription}>{data.description}</div>

            <div>
              <h1 className={classes.priceDiv}>$ {data.price}</h1>
            </div>

            <div className={classes.buttonContainer}>
          
                  <Button variant="outlined"  onClick={handelAddToCart}
                    className={classes.button} sx={{ marginRight: 2 }}>
                        <ShoppingCartIcon /> ADD TO CART
                  </Button>
           
                  <Button variant="contained" onClick={()=>handelCheckout()}
                   className={classes.button}>
                        <FlashOnIcon /> ORDER NOW
                  </Button>
              
            </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default ItemDetails;

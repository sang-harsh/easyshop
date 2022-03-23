import {React,useState,useEffect} from 'react';
import  NavBar from '../NavBar/NavBar.js'
import {ReactNotifications} from "react-notifications-component";
import {Link} from "react-router-dom";
import './cart.css';
import {Rating,Button} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import CARTS from "../../utils/emptyCart.gif";
import {useAuth} from '../AuthContext.js';

function Cart() {
  const data = JSON.parse(localStorage.getItem("cart"));
  const [price,setPrice]=useState();
  const history = useHistory();
  const {notification} =useAuth();

  useEffect(() => {
    let idx = 0;
    if(data!== undefined && data!==null){
      data.map((element)=>(idx = idx +(element.quantity*element.price)))
    }
    setPrice(idx);
  }, [data]);
  
  function handleQuantityButtons(element,type){
    let variable = data.indexOf(element);
    let itemList = data.slice(0,variable);
    if(type === "ADD"){
      element.quantity = element.quantity + 1;
      itemList.push(element);
    }else if(type === "SUB"){
      if(element.quantity===1){
        handelRemoveItem(element);
        
      }else{
        element.quantity = element.quantity - 1;
        itemList.push(element);
      }
    }
    itemList.push(...data.slice(variable+1, data.length));
    localStorage.setItem("cart",JSON.stringify(itemList));
    history.push("/cart");
  }
  function handelRemoveItem(item){
    let variable = data.filter((element)=> element!== item);
    localStorage.setItem("cart",JSON.stringify(variable));
    history.push("/cart");
    notification("Warning!!", "Item Removed from the cart","danger");
  }
   function handelCheckout(){
    history.push("/checkout");
  }

  return (
    <div >
      <ReactNotifications />
      <NavBar/>
      {data!== null && data!==undefined && data.length > 0?
      (<div className='cart-parent'>
          <div className="items-section">
            <h2 style={{marginLeft:"10px"}}>Shopping Cart ({data.length})</h2>
                { data.map((element,i)=>{ return(
                  <div className="container">
                  <div className="item-image">
                    <img className="img"src={element.image} alt="Not found" />
                  </div>

                  <div className="details">
                    <h3>{element.title}</h3>
                    <Rating name="read-only" value={element.rating.rate} readOnly/>
                    <h3>Catagory: {element.category}</h3>
                    <h3>Price: {element.price}</h3>
                    <div className="change">
                      <div className="item-quantity-buttons">
                        <button className="button teal" onClick={()=>handleQuantityButtons(element,"SUB")}>-</button>
                        <div className="item-quantity-value">
                          {element.quantity}
                        </div>
                        <button className="button teal" onClick={()=>handleQuantityButtons(element,"ADD")}>+</button>
                      </div>
                      <Button variant="contained" size="small" component="div" onClick={()=>handelRemoveItem(element)}>
                          <DeleteIcon /> Remove
                        </Button>
                    </div>
                    
                  </div>
                </div>)

                })} 
                
            
          </div>
          <div className="price-section">
          <h2>Price Section</h2>
          <div>
            <div className="border-box">
            <div className="boxrow bold">
              <div>PRICE ({data.length} Items)</div>
              <div>$ {price}</div>
            </div>
            <div className="boxrow">
              <div>Discount</div>
              <div className="green-text">${Math.round((price / 4) * 100) / 100}</div>
            </div>
            <div className="boxrow ">
              <div>Shipping</div>
              <div className="green-text">FREE</div>
            </div>
            </div>
            <div className="border-box">
            <div className=" boxrow bold">
              <div>TOTAL AMOUNT</div> 
              <div>${Math.round((price - Math.round((price / 4) * 100) / 100) * 100) / 100}</div>
            </div>
            </div>
          </div>
          <Button variant="contained" size="large" style={{marginTop:20}} onClick={()=>handelCheckout()}>
            <FlashOnIcon /> BUY NOW
          </Button>
          </div>



      </div>):(
      <div className="empty-cart">
          <h1>           Cart is Empty          </h1>
          <strong>
            <Link to="/">Continue shopping</Link>
          </strong>
          <img src={CARTS} alt="empty cart" />
        </div>
      
      )}
    </div>
  )
}

export default Cart;
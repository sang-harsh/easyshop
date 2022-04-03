import React from "react";
import "./Modal.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Button} from "@mui/material";
import {useHistory} from 'react-router-dom';


function Modal({ setOpenModal,price,data,setModalOpen}) { 
  const history = useHistory();
 
  function handelCheckout(){
    history.push("/checkout");
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        <div className="modalHeader">
          <div className="modalTitle bold">Bill Details</div>
          <button onClick={() => {setOpenModal(false)}}> <div>X</div> </button>
        </div>
        <div className="border-container">

            <div className="boxrow bold">
              <div>PRICE ({data.length} Items)</div>
              <div>$ {price}</div>
            </div>
            <div className="boxrow">
               <div>Discount</div>
               <div className="green-text">${Math.round((price / 4) * 100) / 100}</div>
            </div>
            <div className="boxrow">
               <div>Shipping</div>
               <div className="green-text">FREE</div>
            </div>
            <div className=" boxrow bold" style={{borderTop: '1px solid rgb(196, 193, 193)'}}>
              <div>TOTAL AMOUNT</div> 
              <div>${Math.round((price - Math.round((price / 4) * 100) / 100) * 100) / 100}</div>
            </div>

        </div>

        <div className="modal-button-container">
            <Button variant="outlined" mt={3} onClick={()=> {setModalOpen(false);}}>
                  <ShoppingCartIcon /> Not now
            </Button>
            <Button variant="contained" mt={3} onClick={()=> handelCheckout()}>
                  <FlashOnIcon /> PROCEED
            </Button>
        </div>
              
      </div>
    </div>
  );
}

export default Modal;
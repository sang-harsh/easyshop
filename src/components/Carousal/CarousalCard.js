import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useMediaQuery} from "@mui/material";
import card1 from "../../utils/card1.jpg";
import card2 from "../../utils/card2.jpg";
import card3 from "../../utils/card3.jpg";
import card4 from "../../utils/card4.jpg";
import card5 from "../../utils/card5.jpg";
import useStyles from './styles.js';

function CarousalCard() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const imagesArray = [card1,card2,card3,card4,card5];
  return (
    <div className={classes.container}>
        <Carousel infiniteLoop interval={3000} autoPlay showThumbs={false}>
          {
            imagesArray.map((element,i)=>{
                return(
                    <div>
                    {
                    isMobile?
                    (
                        <img src={imagesArray[i]} alt="Card  not found"style={{ height: '300px'}}/>
                    ):(
                        <img src={imagesArray[i]} alt="Card  not found" style={{ height: '600px'}}/>
                    )
                    }
                    </div>
                )
                
            })
        }   
        </Carousel>
      </div>
      
  )
}

export default CarousalCard;
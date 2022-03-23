import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import card1 from "../../utils/card1.jpg";
import card2 from "../../utils/card2.jpg";
import card3 from "../../utils/card3.jpg";
import card4 from "../../utils/card4.jpg";
import card5 from "../../utils/card5.jpg";
import useStyles from './styles.js';

function CarousalCard() {
    const classes = useStyles();
  return (
    <div className={classes.container}>
          <Carousel infiniteLoop interval={3000} autoPlay showThumbs={false}>
      <div>
          <img src={card1} alt="Card  not found" className={classes.img}/>
          {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
          <img src={card2} alt="Card  not found" className={classes.img} />
      </div>
      <div>
          <img src={card3} alt="Card  not found" className={classes.img}/>
      </div>
      <div>
          <img src={card4} alt="Card  not found" className={classes.img} />
      </div>
      <div>
          <img src={card5} alt="Card  not found"  className={classes.img}/>
      </div>
      </Carousel>
      </div>
      
  )
}

export default CarousalCard;
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import CarousalCard from "../Carousal/CarousalCard";
import {Card,CardActions,CardContent,Grid,Button,Typography,CardMedia,CardActionArea,Container} from "@mui/material";
import useStyles from './styles.js';
import Footer from "../Footer/Footer";
import {useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import LOADING from "../../utils/loading.gif";

function MainPage() {
      const classes = useStyles();
      const [products, setProducts] = useState([]);
      const history = useHistory();

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

          <Container maxWidth={false} className={classes.greyBox}>
          <Grid container spacing={5}>
    
          {products.length !== 0 ? (
          products.map((element, i) => (

            <Grid item sm={3} key={i}>
              <Card>
                <CardActionArea>
                  <div className={classes.imgContainer}>
                      <CardMedia image={element.image}
                    style={{height: 220, width: 150}} component="div"/>
                  </div>      
                <CardContent className={classes.title}>
                  <Typography variant="h6" noWrap>
                  {element.title}
                  </Typography>
                </CardContent>

                </CardActionArea>

                <CardActions>
                  <Button color="warning" onClick={() => handelDetails(element)}>Details</Button>  
                </CardActions>
              </Card>
            </Grid>

          ))):(<div >
          <img className={classes.loadingSymbol} src={LOADING} alt="loading" />
          <div></div>
        </div>)}
            
          </Grid>
          </Container>
          <Footer/>  
            
    </div>
  )
}

export default MainPage;
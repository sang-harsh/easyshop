import "./App.css";
import React from "react";
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ItemDetails from  "./components/ItemDetails/ItemDetails";
import  {AuthProvider} from "./components/AuthContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/signup" exact component={SignupPage}/>
            <Route path="/itemDetails" exact component={ItemDetails}/>
            <Route path="/cart" exact component={Cart} />
            <PrivateRoute path="/checkout" exact component={Checkout} />
          </Switch>
        </Router>
    </div>
    </AuthProvider>
    
  );
}

export default App;

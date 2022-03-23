import React, { useState, useContext, useEffect } from 'react';
import {auth} from '../firebase';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory} from "react-router-dom";
import {Store} from "react-notifications-component";

const AuthContext = React.createContext();
var provider = new firebase.auth.GoogleAuthProvider();
const data =  JSON.parse(localStorage.getItem("cart"));
const flag = JSON.parse(localStorage.getItem("buynow"));


export function useAuth(){
      return useContext(AuthContext);
}

export function AuthProvider({children}) {
      const [currentUser, setCurrentUser] = useState();
      const history = useHistory();

      function signup(email,password){
            return auth.createUserWithEmailAndPassword(email,password);
      }
      function login(email,password){
            return auth.signInWithEmailAndPassword(email,password);
      }
      function logout(){
            return auth.signOut();
      }
      function signInWithGoogle(){
            return firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            //   console.log(result);
              const name = result.user.displayName;
              const email = result.user.email;
              const pic = result.user.photoURL;
            
              localStorage.setItem("name",name);
              localStorage.setItem("email",email);
              localStorage.setItem("pic",pic);
            
            }).catch((error)=>console.log(error));
      }
      
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
      })
      return unsubscribe;
      }, []);

      function notification(title, message, type) {
            Store.addNotification({
              title: title,
              message: message,
              type: type,
              insert: "top",
              container: "top-center",
              animationIn: ["animated", "animate__fadeIn"],
              animationOut: ["animated", "animate__fadeOut"],
              dismiss: {
                duration: 1000,
              },
            });
          }

      const value = {
            currentUser,
            signup,
            login,
            logout,
            signInWithGoogle,
            notification
      }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}


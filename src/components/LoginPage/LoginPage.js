import { React,useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';

import NavBar from "../NavBar/NavBar";
import { Link , useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {useAuth} from '../AuthContext';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © EasyShop "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }



export default function LoginPage() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login,signInWithGoogle,notification} = useAuth();
  const history = useHistory();
  const data =  JSON.parse(localStorage.getItem("cart"));
  const flag = JSON.parse(localStorage.getItem("buynow"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailRef.current.value && passwordRef.current.value) {
      try {
        await login(emailRef.current.value, passwordRef.current.value);
        if((data!==null && data!==undefined)||flag===true){
          notification("Login Successfully!", "Proceeding to Checkout", "success");
          setTimeout( function() {history.push("/checkout")}, 1000); 
        }else{  
          notification("Wonderful!", "Login Successfully", "success");
          setTimeout( function() {history.push("/")}, 1000); 
        }
      } catch (err) {
        notification("Error", err.message, "danger");
      }
    } else {
      notification(
        "Input Can't be empty ..","Please Fill All the Fields","danger");
    }
  };

  return (
    <div >
      <NavBar />
      <ReactNotifications />
        <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputRef={emailRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passwordRef}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={handleSubmit}
              >
                Login
              </Button>

              <Button fullWidth variant="outlined"startIcon={ <GoogleIcon/>} onClick={signInWithGoogle}>
                Sign In with Google
              </Button>
              
              <Grid container justifyContent="flex-end" sx={{ mt: 2, mb: 2 }} >
                <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
    </div>
  );
}

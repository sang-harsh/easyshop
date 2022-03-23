import { React , useRef, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";
import { Link , useHistory} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {useAuth} from '../AuthContext';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © EasyShop "}
      {new Date().getFullYear()}
      {"."} 
    </Typography>
  );
}



export default function SignUpPage() {

      const emailRef = useRef();
      const passwordRef = useRef();
      const {signup,notification} = useAuth();
      const [loading, setLoading] = useState(false);
      const history = useHistory();
      const [firstname, setFirstname] = useState("");
      const [lastname, setLastname] = useState("");


  async function handleSubmit(e){
    e.preventDefault();
    if (firstname && lastname && emailRef.current.value && passwordRef.current.value) {
      try{

        setLoading(true);
        await signup(emailRef.current.value,passwordRef.current.value);
        notification( "Wonderful!",`Account Created`,"success");
        setTimeout( function() {history.push("/login")}, 1000);
      }catch(err){
        notification("Error", err.message, "danger");
      }
    } else {
      notification(
        "Input Can't be empty ..","Please Fill All the Fields","danger");
    }
    setLoading(false)
  
  }

  return (
    <div>
      
      <NavBar />  
      <ReactNotifications />
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          {/* {currentUser && currentUser.email } */}
          {/* {error && console.log(error)} */}
          <Box
            sx={{
              marginTop: 8,paddingTop: 6,
              display: "flex",flexDirection: "column",
              alignItems: "center",justifyContent: "center"
            }}
          >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-name" name="firstName"
                      required fullWidth  autoFocus
                      label="First Name"id="firstName"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="lastName"
                      label="Last Name" name="lastName" autoComplete="family-name"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth
                      id="email" label="Email Address" name="email" autoComplete="email"
                      inputRef={emailRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth name="password" label="Password" 
                    type="password"id="password"autoComplete="new-password"
                      inputRef={passwordRef}
                    />
                  </Grid>

                </Grid>

                <Button  type="submit"fullWidth variant="contained"
                  color="primary"disabled={loading} sx={{ mt: 2, mb: 2 }}
                >
                  Sign Up
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">{"Already have an account? Login"}</Link>
                  </Grid>
                </Grid>
              </Box>

          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
    </div>
  );
}

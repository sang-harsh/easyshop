import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import {purple, teal} from '@material-ui/core/colors';
import 'react-notifications-component/dist/theme.css';

const theme1=createTheme({
  palette:{
    primary: teal,
    secondary: purple,
  },

});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}><App /></ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

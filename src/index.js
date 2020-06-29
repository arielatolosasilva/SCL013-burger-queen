import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDbdIyn5frFJgE1ibH4fYnZX-1xWkcM-fw",
  authDomain: "burger-queen2020.firebaseapp.com",
  databaseURL: "https://burger-queen2020.firebaseio.com",
  projectId: "burger-queen2020",
  storageBucket: "burger-queen2020.appspot.com",
  messagingSenderId: "1014274383486",
  appId: "1:1014274383486:web:5ba015bb200f434f99022f",
  measurementId: "G-Y5C7JM73K9"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);



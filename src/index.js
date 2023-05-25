import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfGvyQkI8a7UulcuJI4T6ZzJqiluuZ3fY",
  authDomain: "ecommerce-gian.firebaseapp.com",
  projectId: "ecommerce-gian",
  storageBucket: "ecommerce-gian.appspot.com",
  messagingSenderId: "707068222069",
  appId: "1:707068222069:web:b99c6bdbf83c7b308cb63c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

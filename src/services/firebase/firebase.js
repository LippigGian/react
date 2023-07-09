import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfGvyQkI8a7UulcuJI4T6ZzJqiluuZ3fY",
  authDomain: "ecommerce-gian.firebaseapp.com",
  projectId: "ecommerce-gian",
  storageBucket: "ecommerce-gian.appspot.com",
  messagingSenderId: "707068222069",
  appId: "1:707068222069:web:b99c6bdbf83c7b308cb63c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

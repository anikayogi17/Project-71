import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCb_IwS2KbODgcUeBdq9rnyZRHjZz5klYU",
    authDomain: "project-71-d1b71.firebaseapp.com",
    projectId: "project-71-d1b71",
    storageBucket: "project-71-d1b71.appspot.com",
    messagingSenderId: "25218178757",
    appId: "1:25218178757:web:be1228b094c8ea51035aac"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



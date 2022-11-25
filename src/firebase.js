import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkq30tt-3h8wxnCdAeuBoqG_wZrTrWBdQ",
  authDomain: "linkey-d7bce.firebaseapp.com",
  projectId: "linkey-d7bce",
  storageBucket: "linkey-d7bce.appspot.com",
  messagingSenderId: "729925187911",
  appId: "1:729925187911:web:d490b9cd3423e534eb7462",
  measurementId: "G-7HWS5Q06CV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

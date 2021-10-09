import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIyZGiUYx9TP-cspcewhWdtp1fPAU3YD0",
  authDomain: "nwitter-e688c.firebaseapp.com",
  projectId: "nwitter-e688c",
  storageBucket: "nwitter-e688c.appspot.com",
  messagingSenderId: "846899823420",
  appId: "1:846899823420:web:02650ee246e85f09f71439"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

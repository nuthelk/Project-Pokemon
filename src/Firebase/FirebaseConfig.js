import { initializeApp } from "firebase/app";
import {
    FacebookAuthProvider,
    GoogleAuthProvider
  } from "firebase/auth";
  import {
    getFirestore
  } from "@firebase/firestore";

  
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app);

export {
  app,
  google,
  facebook,
  db
};
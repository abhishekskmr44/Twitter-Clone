// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFireStore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY ,
  authDomain: "twitter-28622.firebaseapp.com",
  projectId: "twitter-28622",
  storageBucket: "twitter-28622.appspot.com",
  messagingSenderId: "74705112508",
  appId: "1:74705112508:web:124b154b2447d69ffeefb9",
  measurementId: "G-34CJG036EJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = Firestore()
const storage = getStorage();
export {app,db,storage}
const analytics = getAnalytics(app);
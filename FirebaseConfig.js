// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JWt1ktzDKqj6IChs5xo3SA3m6ViGnjo",
  authDomain: "cathealth-dc4e5.firebaseapp.com",
  databaseURL: "https://cathealth-dc4e5-default-rtdb.firebaseio.com",
  projectId: "cathealth-dc4e5",
  storageBucket: "cathealth-dc4e5.appspot.com",
  messagingSenderId: "361335579974",
  appId: "1:361335579974:web:f64bab653f671e4f63b147",
  measurementId: "G-MZ444KDEBY"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

//const analytics = getAnalytics(app);
const db = getDatabase();
export{db}
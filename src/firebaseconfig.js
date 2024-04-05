// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWjA5iM71XTs9ScEzHnkJExK55cuRNVL0",
  authDomain: "biblio-812bf.firebaseapp.com",
  projectId: "biblio-812bf",
  storageBucket: "biblio-812bf.appspot.com",
  messagingSenderId: "325728903578",
  appId: "1:325728903578:web:edbd62dc185aff49b3da23"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
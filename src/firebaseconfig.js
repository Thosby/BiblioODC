import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvZXWRnK6IKNGEdfMQhFZV7MGzEyJisBk",
  authDomain: "biblio-9f368.firebaseapp.com",
  projectId: "biblio-9f368",
  storageBucket: "biblio-9f368.appspot.com",
  messagingSenderId: "342373409339",
  appId: "1:342373409339:web:cde9a465374741a0e5f21e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

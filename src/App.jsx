// import './App.css'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { db } from "./firebaseconfig";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Card from "./Card/card";
import Card2 from "./../src/card2.jsx";
import Sign from "./sign.jsx";
import Login from "./login.jsx";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Card2/>} /> {/* Route pour Card2 */}
        <Route path="/connexion" element={<Sign />} />{" "}
        <Route path="/inscription" element={<Login />} />{" "}
        {/* Route pour Sign */}
        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </>
  );
}

export default App;

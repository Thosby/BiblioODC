// import './App.css'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { db } from "./firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Card from "./Card/card";
import Card2 from "./../src/card2.jsx";
import Sign from "./sign.jsx";
import Login from "./login.jsx";
import New from "./Pages/NewBook/New.jsx";
import { useNavigate } from "react-router-dom";
import { auth } from "./../src/firebaseconfig";
import Livres from "./Pages/NewBook/Livres.jsx";
import Example from "./Head3.jsx";
import Details from './Pages/Details';

function App() {
  const [connected, setConnect] = useState(localStorage.getItem("isAuth"));
  const [onligne, setOnligne] = useState();
  const signUserOut = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      setConnect(false);
      window.location.pathname = "/connexion";
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      ///console.log(currentUser);
      setOnligne(currentUser);
    });
  }, []);
  return (
    <>
      <Example connected={connected} onligne={onligne} decon={signUserOut} />

      <Routes>
        <Route path="/" element={<Card2 />} /> {/* Route pour Card2 */}
        <Route
          path="/connexion"
          element={<Sign setConnect={setConnect} />}
        />{" "}
        <Route
          path="/inscription"
          element={<Login setConnect={setConnect} />}
        />{" "}
        <Route path="/newbook" element={<New connected={connected} />} />
        <Route path="/Livres" element={<Livres onligne={onligne} />} />
        <Route path="/Detail" element={<Details/>} />
        {/* Route pour Sign */}
        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
      {/* <Load/> */}
    </>
  );
}

export default App;

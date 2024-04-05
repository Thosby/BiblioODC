import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { db } from './firebaseconfig'
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore'
import Card from './Card/card'
import Card2 from './../src/card2.jsx';
import Button from './Button'
import Account from './account'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const [nom, setNom] = useState("")
  const [prenom, setprenom] = useState("")
  const [age, setage] = useState("")
  const [nat, setnat] = useState("")
  //creation de la reference de la base de données
  const dbref = collection(db, "user")
  //ajout de la donnée

  const router = createBrowserRouter([
    {
      path: "/connexion",
      element: <Account/>
    },
    {
      path: "/",
      element: <Card2/>
    },
  ]);

  const add = async (e) => {
    e.preventDefault()
    const addData = await addDoc(dbref, { Nom: nom ,Prenom:prenom,Age:age,Natinalité:nat})
    if (addData) {
      alert("envoyer avec succès")
      window.location.reload()
    }
    else {
      alert("erreur")
    }
  }
  const handlechange = (e) => {
    setNom(e.target.value)
}
const handlechangep = (e) => {
  setprenom(e.target.value)
}
const handlechangea = (e) => {
  setage(e.target.value)
}
const handlechangen= (e) => {
  setnat(e.target.value)
}


  return (
    <>
    <RouterProvider router={router} ><Card2/></RouterProvider>


      {/* <form>
        <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control mb-2" id="floatingInput" placeholder="name@example.com"  onChange={handlechange}/>
          <label for="floatingInput">Nom</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control mb-3" id="floatingPassword" placeholder="Password"  onChange={handlechangep} />
          <label for="floatingPassword">Prenom</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control mb-2" id="floatingPassword" placeholder="Password"   onChange={handlechangea} />
          <label for="floatingPassword">Age</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handlechangen} />
          <label for="floatingPassword">nationalité</label>
        </div>



        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" onClick={add} >S'inscrire</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form> */}

    </>
  )
}

export default App

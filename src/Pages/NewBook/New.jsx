import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth,storage } from "./../../firebaseconfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function New({ connected }) {
  const [titre, setTitre] = useState("");
  const [auteur, setauteur] = useState("");
  const [description, setdescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  //creation de la reference de la base de données
  const dbref = collection(db, "Livres");
  //ajout de la donnée
  let navigate = useNavigate();
  const add = async (e) => {
    e.preventDefault();

    try {
      // Vérifiez si une image de couverture a été sélectionnée
      if (coverImage) {
        // Créez une référence de stockage pour l'image de couverture
        const storageRef = ref(storage, `images/${coverImage.name}`);
        // const coverImageRef = storageRef.child(coverImage.name);

     await uploadBytesResumable(storageRef, coverImage); // Utiliser coverImage ici
     const downloadURL = await getDownloadURL(storageRef);
        // Ajoutez les données du livre dans Firestore avec l'URL de l'image de couverture
        await addDoc(dbref, {
          titre,
          auteur,
          description,
          downloadURL, // Stockez l'URL de l'image de couverture dans la collection Firestore
          auteur: { name: auth.currentUser.email, id: auth.currentUser.uid },
        });

        // Affichez un message de succès
        toast.success("Livre ajouté avec succès !");
        // Rechargez la page pour rafraîchir les données
        window.location.reload();
        // Redirigez l'utilisateur vers la page d'accueil
        navigate("/");
      } else {
        // Si aucune image de couverture n'a été sélectionnée, affichez une erreur
        toast.error("Veuillez sélectionner une image de couverture !");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre :", error);
      // Affichez une alerte en cas d'erreur
      alert("Erreur lors de l'ajout du livre !");
    }
  };
  const handleImageChange = (e) => {
    // Mettez à jour l'état de l'image de couverture lorsqu'une image est sélectionnée
    if (e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };
  const handlechange = (e) => {
    setTitre(e.target.value);
  };
  const handlechangeA = (e) => {
    setauteur(e.target.value);
  };
  const handlechangeD = (e) => {
    setdescription(e.target.value);
  };
  //   useEffect(() => {
  //     if (!connected) {
  //       navigate("/connexion");
  //     }
  //   }, []);
  return (
    <div>
      <body className="bg-gradient-to-bl from-blue-50 to-violet-50">
        <Toaster position="top-right" reverseOrder={false} />
        <div class="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container mt-10">
          <h2 class="text-2xl font-semibold text-white mb-6">
            Ajouter un livre !
          </h2>
          <form onSubmit={add} method="POST">
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-300 text-sm font-bold mb-2"
              >
                Titre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enfant noir"
                onChange={handlechange}
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              />
            </div>
            <div class="mb-4">
              <label
                for="text"
                class="block text-gray-300 text-sm font-bold mb-2"
              >
                Auteur
              </label>
              <input
                type="text"
                id="text"
                name="titre"
                placeholder="camara laye"
                onChange={handlechangeA}
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block text-gray-300 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="ce livre est roman ..."
                required
                onChange={handlechangeD}
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="coverImage"
                class="block text-gray-300 text-sm font-bold mb-2"
              >
                Image de couverture
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleImageChange}
                accept="image/*" // Accepte uniquement les fichiers image
                required
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Ajouter
            </button>
            <p class="mt-5 text-gray-300">
              If you are not a fan of forms you can email us instead{" "}
            </p>
          </form>
        </div>
      </body>
    </div>
  );
}

export default New;

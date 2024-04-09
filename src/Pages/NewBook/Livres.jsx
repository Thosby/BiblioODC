import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./../../firebaseconfig";
import toast, { Toaster } from "react-hot-toast";
function Livres({ onligne }) {
  const [livres, setLivres] = useState([]);
  const dbref = collection(db, "Livres");
  useEffect(() => {
    const meslivres = async () => {
      const data = await getDocs(dbref);
      setLivres(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    
      <div>
        <Toaster />
      </div>;
    meslivres();

  }, []);

  const deletelivre = async (id) => {
    const dlivre = doc(dbref, id);
    try {
      await deleteDoc(dlivre);
      alert("suppression");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div class="container mx-auto mx-auto p-4 ">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        {livres.map((livre) => (
          <div>
            <div class="bg-white rounded-lg border p-4">
              <img
                src="img6.jpeg"
                alt="Placeholder Image"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">{livre.titre}</div>
                <p
                  className="text-gray-700 text-base overflow-hidden"
                  style={{
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {livre.description}
                </p>
                <p className="text-gray-800 mt-2">Par {livre.auteur.name}</p>
              </div>
              <div class="px-1 py-1 flex  flex justify-between items-center">
                <a href="#" class="text-blue-500 hover:underline">
                  voir plus
                </a>

                {onligne && livre.auteur.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletelivre(livre.id);
                    }}
                    className="text-red-500"
                  >
                    Supprimer
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Livres;

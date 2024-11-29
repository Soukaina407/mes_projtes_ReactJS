import { useState } from 'react';
import './index.css';

function Recherche({ produits }) {
  const [id, setId] = useState('');
  const [filterProduit, setFilerProduit] = useState([]);

  
  // Fonction de recherche
  function search(e) {
    e.preventDefault();
    const newProduit = produits.filter(function (item) {
      return item.id === parseInt(id);
    });
    if (newProduit.length > 0) {
      setFilerProduit(newProduit);
      console.log(newProduit);
    } else {
      console.log('Aucun produit à afficher');
      alert('Aucun produit à afficher');
    }
  }

  return (
    <>
      {/* Formulaire de recherche */}
      <form className="flex items-center justify-center space-x-4 p-6">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-72 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          onChange={(e) => setId(e.target.value)}
        />
        <button
          type="submit"
          onClick={search}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Recherche
        </button>
      </form>

      {/* Affichage des résultats de recherche */}
      {filterProduit.length > 0 && (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Résultats :</h2>
          {filterProduit.map(function (item, index) {
            return (
              <ul key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
                <li className="text-lg font-bold">Référence : {item.id}</li>
                <li className="text-md font-semibold">Nom : {item.title}</li>
                <li className="text-md text-gray-600">Description : {item.description}</li>
                <li className="text-lg font-semibold text-blue-500">Prix : {item.price} DH</li>
                <li>
                  <img src={item.image} alt={item.title} className="mt-4 w-32 h-32 object-cover rounded-md" />
                </li>
              </ul>
            );
          })}
        </div>
      )}

      {/* Message si aucun résultat trouvé */}
      {filterProduit.length === 0 && id && (
        <p className="text-center text-red-600 font-semibold mt-4">Aucun produit trouvé pour cette référence.</p>
      )}
    </>
  );
}

export default Recherche;

import { useEffect, useState } from "react";
import InfoProd from "./InfoProd";
import Afficher from "./Afficher";
import Recherche from "./Recherche";
import Menu from "./Menu";
import ListProduit from "./ListProduit";
import { Route, Routes } from "react-router-dom";
import AddProduits from "./AddProduits";


function App() {
  const [produits, setProduits] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(function (data) {
        setProduits(data);
        console.log(data);
      })
      .catch(function (error) {
        console.error("Il y a eu un problème avec la récupération des données :", error);
      });
  }, []);
  

  return (
    <>

      <Menu />
     
      <Routes>
        <Route path="/info"  element={<InfoProd />}/>
        <Route path="/afficher"  element={<Afficher produits={produits} />}/>
        <Route path="/rechercher"  element={<Recherche produits={produits} />}/>
        <Route path="/listProd"  element={<ListProduit /> }/>
        <Route path="/ajouterProd"  element={<AddProduits/> }/>
       
      </Routes>
       
      
      
      

    </>
  );
}

export default App;
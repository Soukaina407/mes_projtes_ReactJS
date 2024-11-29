import { useState } from 'react'
import './index.css'

function InfoProd(){
    const [produit,setProduit]=useState({
        reference:'',
        nom_produit:'',
        categorie:'',
        description:'',
        prix:'',
        image:''
    })
    const [produits,setProduits]=useState([])



    //Save
    function valider(e){
         e.preventDefault();
         setProduits([...produits,produit])
         console.log(produits)
    }
    return(
        <>
          {produits.map(function (item, index) {
        return (
            <ul key={index} className="product-item">
            <h1>Information Produit</h1>
            <li>Référence : {item.reference}</li>
            <li>Nom : {item.nom_produit}</li>
            <li>Prix : {item.prix} DH</li>
                <li>
                <img src={item.image}  />
                </li>
            </ul>
        );
        })}


      <form className="product-form">
      <div className="form-group">
        <label htmlFor="reference">Référence :</label>
        <input
          type="text"
          name="reference"
          onChange={(e)=>{setProduit({...produit,reference:e.target.value})}}
          placeholder="Entrez la référence"
        />
      </div>

      <div className="form-group">
        <label htmlFor="productName">Nom du produit :</label>
        <input
          type="text"
          name="productName"
          onChange={(e)=>{setProduit({...produit,nom_produit:e.target.value})}}
          placeholder="Entrez le nom du produit"
        />
      </div>

     <div className="form-group">
      <label htmlFor="category">Catégorie :</label>
      <select
        name="category"
        onChange={(e) => { setProduit({ ...produit, categorie: e.target.value }) }}
       
      >
        <option value="">Sélectionner une catégorie</option>
        <option value="electronique">Électronique</option>
        <option value="vetements">Vêtements</option>
        <option value="maison">Maison</option>
      </select>
    </div>

      <div className="form-group">
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          onChange={(e)=>{setProduit({...produit,description:e.target.value})}}
          placeholder="Entrez la description"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          name="price"
          onChange={(e)=>{setProduit({...produit,prix:e.target.value})}}
          placeholder="Entrez le prix"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          name="image"
          onChange={(e)=>{setProduit({...produit,image:e.target.value})}}
        />
      </div>

      <button type="submit" className="submit-button" onClick={valider}>
        Valider
      </button>
    </form>
  
        </>
    )
}
export default InfoProd
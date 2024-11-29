import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduitAction } from "./redux/action/produitAction"


function AddProduits(){
    const [produit,setProduit] = useState({
        rel:null, 
        nom:"",
        categorie:""
    })
    

    const dispatch = useDispatch()

    function save(e){
        e.preventDefault()
        dispatch({type:"ADD_PRODUIT", payload: produit})
        
        console.log(produit)
    }
   

    return(
        <>
        <form action="">
             <input type="text" name="rel" rel="" placeholder="entrer rel" onChange={(e)=>{setProduit({...produit,rel:e.target.value})}}/>
             <input type="text" name="nom" id="" placeholder="entrer nom" onChange={(e)=>{setProduit({...produit,nom:e.target.value})}}/>
             <input type="text" name="categorie" id="" placeholder="entrer categorie" onChange={(e)=>{setProduit({...produit,categorie:e.target.value})}}/>
             <button onClick={save}>Add</button>
    
        </form>
        
        </>
    )
}
export default AddProduits
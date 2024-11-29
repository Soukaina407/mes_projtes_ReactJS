import { useDispatch, useSelector } from "react-redux"

import {deleteProduitAction } from "./redux/action/produitAction"
import './style.css'



function ListProduit(){

     const productState = useSelector((state)=>state.produits)
     console.log(productState)

     const dispatch = useDispatch();

      function supprimer(rel){
        dispatch (deleteProduitAction(rel));
      }

    
    return(
        <>

          <div>


            <table>
                <thead>
                    <tr>
                        <th>rel</th>
                        <th>nom</th>
                        <th>categorie</th>
                    </tr>
                </thead>

                <tbody>
                    {productState.map(function(item,index){
                        return(
                            <>
                                <tr key={index}>
                                    <td>{item.rel}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.categorie}</td>
                                     <td>
                                    <button onClick={()=>supprimer(item.rel)}>Delete</button></td>
                                    
                                </tr>
                            </>
                        )
                    })}
                   
                </tbody>
            </table>

          </div>

        </>
    )

    
}
export default ListProduit
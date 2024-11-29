// créateur d'actions
export function addProduitAction(newProduit){
    return({
        type:"ADD_PRODUIT",
        payload:newProduit
    })

}

export function deleteProduitAction(produitrel){
    return({
        type:"DELETE_PRODUIT",
        payload:produitrel
    })

}

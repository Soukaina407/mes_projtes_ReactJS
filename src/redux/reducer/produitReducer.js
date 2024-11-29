const inisialState=
{produits :[
   { rel:7, nom :"PC HP", categorie : "informatique"} ,
   { rel:8, nom : 'SKYWORTH', categorie : "TV"}
]}

function produitReducer(state=inisialState,action){

    switch(action.type){


        case"ADD_PRODUIT":
        return {...state,produits:[...state.produits,action.payload]}


        case"DELETE_PRODUIT":
           const newProduits = state.produits.filter(function(item){
              return item.rel !== action.payload
           })
            return {...state,produits:newProduits}



            default:
                return state
    }
    
      

  
}

export default produitReducer
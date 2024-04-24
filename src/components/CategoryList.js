import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import catService from "../services/CatalogueService";
// Ce composant va afficher la liste des livres sous forme d'un tableau
function CategoryList(){
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        getCategories() // la fonction getBooks sera exécuter après l'affichage du composant
    },[]) 
    // On a utilisé axios pour envoyer une requete de la partie frontend vers la partie backend
    async function getCategories(){
        
        const result=await catService.getAllCategories()
        setCategories(result.data)
        console.log(result.data)
    }
    async function deleteC(id){
        const res=await catService.deleteCategory(id)
       getCategories() 
   }

    return(
        <div className={"container mt-5"}>

       <Link type="button" className={"btn btn-info mt-2"} to={"/admin/categories/new"}>Add new Category</Link>

    <div className={"row table table-dark table-sm mt-2"}>
       <div className={"col"}>{
       categories.map((elem,index)=>{
                        return <div class="row" key={index}>
           <dd className={"col-md-6"}> {elem.name}</dd>
           <dd className={"col-md-6"}>{elem.description}
           <button type="button" className="btn btn-danger"  onClick={event=>deleteC(elem._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg></button></dd>
                            </div>
                  }) }

       </div>
    </div>
</div>
    )
}
export default CategoryList
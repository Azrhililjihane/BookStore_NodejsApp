import { useState,useEffect } from "react";
import catService from "../../services/CatalogueService";
function Books(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
        getBooks() // la fonction getBooks sera exécuter après l'affichage du composant
    },[]) 
    // On a utilisé axios pour envoyer une requete de la partie frontend vers la partie backend
    async function getBooks(){
        
        const result=await catService.getAllBooks()
        setBooks(result.data)
        console.log(result.data)
    }
    return(
      <>
      {books.map((elem,index)=>{
        return <div key={index} className={"container"}><img src="https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg" class="rounded  shadow float-start mt-3" alt="..." width={150} height={200}></img>
        <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834683i/6755260.jpg" class="rounded shadow float-end mt-3" alt="..." width={150} height={200}></img>
        <p className={"mt-5"}>{elem.description}</p>
        <i className={"mt-5"}>{elem.auteur}</i>
        </div>
      })}
      </>
    )
}
export default Books
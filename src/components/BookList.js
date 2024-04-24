import { useEffect } from "react";
import { useState } from "react";
import BookEdit from "../components/BookEdit";
import { Link } from "react-router-dom";
import catService from "../services/CatalogueService";
// Ce composant va afficher la liste des livres sous forme d'un tableau
function BookList(){
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
    async function deleteB(id){
         const res=await catService.deleteBook(id)
        getBooks() 
    }

    return(
       <div className={"container"}> 
       <Link type="button" className={"btn btn-info mt-3"} to={"/admin/books/new"}>Add new Book</Link>

       <table className={"table table-hover table_bordered table-striped mt-2"} >
  <thead className="table-dark">
  <tr>
                <th>Num </th>
                <th>Name</th>
                <th>Description</th>
                <th>Auteur</th>
                <th>Editeur</th>
                <th>Category</th>
                <th></th>
            </tr>
    
  </thead>
  <tbody>
  {
                  books.map((elem,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{elem.name}</td>
                            <td>{elem.description}</td>
                            <td>{elem.auteur}</td>
                            <td>{elem.editeur}</td>
                            <td>{elem.category.name}</td>
                            <td><Link className="btn btn-primary m-2" to={`/admin/books/edit/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg></Link>
                            <button type="button" className="btn btn-danger"  onClick={event=>deleteB(elem._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg></button></td>
                        </tr>
                  }) // il va parcourir tous les éléments du tableau puis exécuter la fonction sur l'élément
                }
  </tbody>
  </table>
  </div>
    )
}
export default BookList
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import catService from '../services/CatalogueService'

// va afficher le formulaire d'ajout
function BookAdd(){
    
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [isbn,setIsbn]=useState(0)
    const [auteur,setAuteur]=useState("")
    const [editeur,setEditeur]=useState("")
    const [date_publication,setDate_publication]=useState(Date)
    const [categories,setCategories]=useState([])

    async function AllCategories(){
        const result=await catService.getAllCategories() // la fonction getBooks sera exécuter après l'affichage du composant
        setCategories(result.data)
    }
    useEffect(()=>{
        AllCategories();
    },[]) 
    const navigate=useNavigate()
    
    async function submitBook(e){
        e.preventDefault()
        const selectedCatId = document.getElementById("category").value;
        //const selectedCategories=catService.getAllCategories()
        const b={"name":name,"description":description,"isbn":isbn,"auteur":auteur,"editeur":editeur,"date_publication":date_publication,"category":selectedCatId}
        await catService.addBook(b)
        navigate("/admin/books")
    }
        return(
        <div className={"container"}>
            <form onSubmit={(e)=>submitBook(e)} className={"mt-2"}>
            <label className={"form-label"}>Name:</label>
             <input className={"form-control"} type="text" onChange={(e)=>setName(e.target.value)}/>
             <label className={"form-label"}>Description:</label>
             <input className={"form-control"} type="text" onChange={(e)=>setDescription(e.target.value)}/>
             <label className={"form-label"}>isbn:</label>
             <input className={"form-control"} type="number" onChange={(e)=>setIsbn(e.target.value)}/>
             <label className={"form-label"}>Auteur:</label>
             <input className={"form-control"} type="text" onChange={(e)=>setAuteur(e.target.value)}/>
             <label className={"form-label"}>Editeur:</label>
             <input className={"form-control"} type="text" onChange={(e)=>setEditeur(e.target.value)}/>
             <label className={"form-label"}>Date_publication:</label>
             <input className={"form-control"} type="date" onChange={(e)=>setDate_publication(e.target.value)}/>
             <label className={"form-label"}>Category:</label>
             <select className={"form-select mt-2"} > 
             { categories.map((elem,index)=> {
             return <option value={index} key={index}> {elem.name} </option> 
             })} 
             </select >
        <button type="submit" class="btn btn-primary mt-5">Submit</button>
      </form>
      </div>
    )

}
export default BookAdd
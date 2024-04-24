import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import catService from '../services/CatalogueService';

function BookEdit({}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState( 0);
  const [auteur, setAuteur] = useState("");
  const [editeur, setEditeur] = useState("");
  const [date_publication, setDate_publication] = useState("");
  const [categories, setCategories] = useState([]);
  const {id}=useParams()
  const navigate = useNavigate();
  useEffect(() => {
       getBookById()
       getCategories()
  }, []);
  async function getCategories(){
    const result=await catService.getAllCategories()
    setCategories(result.data)
  }
  async function getBookById(){
    const b= await catService.getBookById(id)
    console.log(b)
    setName(b.data.name)
    setDescription(b.data.description)
    setIsbn(b.data.isbn)
    setAuteur(b.data.auteur)
    setEditeur(b.data.editeur)
    setDate_publication(b.data.date_publication)
  }
  async function submitBook(e){
    try{
      e.preventDefault()
      const b={"_id":id,"name":name,"description":description,"isbn":isbn,"auteur":auteur,"editeur":editeur,"date_publication":date_publication}
      await catService.updateBook(b)
      navigate("/admin/books")
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className={"container"}>
    <form onSubmit={(e)=>submitBook(e)} className={"mt-2"}>
      <label className={"form-label"}>Name:</label>
      <input className={"form-control"} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label className={"form-label"}>Description:</label>
      <input
        className={"form-control"}
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className={"form-label"}>ISBN:</label>
      <input
        className={"form-control"}
        type="number"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <label className={"form-label"}>Auteur:</label>
      <input
        className={"form-control"}
        type="text"
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
      />
      <label className={"form-label"}>Editeur:</label>
      <input
        className={"form-control"}
        type="text"
        value={editeur}
        onChange={(e) => setEditeur(e.target.value)}
      />
      <label className={"form-label"}>Date_publication:</label>
      <input
        className={"form-control"}
        type="date"
        value={date_publication}
        onChange={(e) => setDate_publication(e.target.value)}
      />
      <label className={"form-label"}>Category:</label>
      <select className={"form-select"}> 
             { categories.map((elem,index)=>{
              return <option key={index}>{elem.name}</option>
             }) 
             }
      </select>
             <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}
export default BookEdit


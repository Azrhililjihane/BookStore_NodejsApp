import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import catService from '../services/CatalogueService'

async function CategoryAdd(){
     const [name,setName]=useState("")
     const [description,setDescription]=useState("")
     const navigate=useNavigate()
     async function submitCat(c){
         c.preventDefault()
          const cat={"name":name,"description":description}
           await catService.addCategory(cat)
            navigate("/admin/categories/") }
            return(
                 <div className="container">
                     <form onSubmit={(c)=>submitCat(c)} className={"mt-5"}>
                         <label className={"form-label"}>Name:</label>
                         <input className={"form-control"} type="text" onChange={(c)=>setName(c.target.value)}/>
                         <label className={"form-label"}>Description:</label>
                         <input className={"form-control"} type="text" onChange={(c)=>setDescription(c.target.value)}/><br/>
                          <button type="submit" class="btn btn-primary">Submit</button>
                     </form>
                    </div>
                 )

            }
export default CategoryAdd

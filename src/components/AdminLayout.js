import { Outlet } from "react-router-dom"
// un composant c'est une fonction qui va retourner de l'affichage
// Outlet va être remplacer par le composant BookList ou BookAdd
function AdminLayout(){
    return(
        <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href={"/admin"}>Book Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href={"/admin"}>Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={"/admin/books"}>Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={"/admin/books/new"}>Add Book</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={"/admin/categories"}>All categories</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
           <Outlet/> 
 </>   
    )
}
export default AdminLayout
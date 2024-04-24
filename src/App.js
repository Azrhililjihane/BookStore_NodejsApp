import logo from './logo.svg';
import './App.css';
import AdminLayout from './components/AdminLayout';
import { Routes,Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';
import BookEdit from './components/BookEdit';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import CategoryAdd from './components/CategoryAdd';
import ClientLayout from './components/client/ClientLayout';
import Books from './components/client/Books';

/** au niveau de App.js, on va définir les routes, pour cela on doit
 * utiliser un système de routage alors on installe le package react-router-dom**/
// On a créé 2 espaces admin et visiteur normal
function App() {
  return (
    <>
      <Routes>
         <Route path={"/admin"} element={<AdminLayout/>}>
            <Route path={"books"} element={<BookList/>}></Route>
            <Route path={"books/new"} element={<BookAdd/>}></Route>
            <Route path={"books/edit/:id"} element={<BookEdit/>}></Route>
            <Route path={"categories"} element={<CategoryList/>}></Route>
            <Route path={"categories/new"} element={<CategoryAdd/>}></Route>
         </Route>
         <Route path={"/"} element={<ClientLayout/>}>
         <Route path={"books"} element={<Books/>}></Route>
         </Route>
      </Routes>
    </>
    
  );
}

export default App;

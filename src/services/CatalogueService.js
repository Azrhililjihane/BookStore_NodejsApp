import http from "./http-commun"
async function getAllBooks(){
    return await http.get("/books")
}
async function getBookById(id){
    return await http.get(`/books/${id}`)
}
async function getAllCategories(){
    return await http.get("/categories")
}
async function deleteBook(id){
    return await http.delete(`/books/${id}`)
}
async function updateBook(book){
    return await http.put(`/books/${book.id}`,book)
}
async function addBook(b){
    return await http.post("/books",b)
}
async function addCategory(c){
    return await http.post("/categories",c)
}
async function deleteCategory(id){
    return await http.delete(`/categories/${id}`)
}
const catService={getAllBooks,deleteBook,updateBook,addBook,getAllCategories,getBookById,addCategory,deleteCategory}
export default catService
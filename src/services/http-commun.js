import axios from "axios";
const http=axios.create({
    baseURL:"http://localhost:8899"
})
export default http
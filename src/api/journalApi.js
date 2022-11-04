
import axios from 'axios'

// Base de datos es Firebase
const journalApi = axios.create({
    baseURL: 'https://vue-demos-1ffd3-default-rtdb.firebaseio.com'
})


export default journalApi
 
 


import axios from 'axios'

// Base de datos es Firebase
const journalApi = axios.create({
    baseURL: 'https://vue-demos-1ffd3-default-rtdb.firebaseio.com'
})

console.log(`Esto viene de journalApi: ${process.env.NODE_ENV}`); //muestra si esta api se usa en produccion, desarrollo o test

export default journalApi
 
 

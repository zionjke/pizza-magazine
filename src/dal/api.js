import axios from 'axios'

 export const api = {
    getPizzas() {
        return axios.get('http://localhost:3001/db.json')
    }
};
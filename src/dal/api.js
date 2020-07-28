import axios from 'axios'

 export const api = {
    getPizzas(sortBy,category) {
        return axios.get(`http://localhost:3004/pizzas?${category !==null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    }
};
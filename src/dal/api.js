import axios from 'axios'

 export const api = {
    getPizzas(sortBy,category) {
        return axios.get(`https://pizza-magazine.herokuapp.com/pizzas?${category !==null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    }
};
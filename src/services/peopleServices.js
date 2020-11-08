import Axios from 'axios'


export const getPeople = (page) => Axios.get(`https://swapi.dev/api/people/?page=${page}`)


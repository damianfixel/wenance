import Axios from 'axios'


export const getPeople = (params) => Axios.get('/api/people')
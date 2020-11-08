import Axios from 'axios'


export const getPeople = () => Axios.get('/api/people')
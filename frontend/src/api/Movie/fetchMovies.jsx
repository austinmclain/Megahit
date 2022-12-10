import axios from 'axios';
import url from '../url';

export default async function fetchMovies() {
    try {
        const res = await axios.get(`${url}/movie/all`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

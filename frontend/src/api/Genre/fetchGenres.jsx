import axios from 'axios';
import url from '../url';

export default async function fetchGenres(id) {
    try {
        const res = await axios.get(`${url}/genre`, {
            params: {
                movie_id: id
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

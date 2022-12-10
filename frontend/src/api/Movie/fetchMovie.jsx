import axios from 'axios';
import url from '../url';

export default async function fetchMovie(id) {
    try {
        const res = await axios.get(`${url}/movie`, {
            params: {
                id: id
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

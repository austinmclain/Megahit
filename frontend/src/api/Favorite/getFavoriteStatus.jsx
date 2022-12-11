import axios from 'axios';
import url from '../url';

export default async function getFavoriteStatus(email, name, id) {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const data = {
        "emailAddress": email,
        "profile_name": name,
        "movie_id": id
    }

    try {
        const res = await axios.post(`${url}/favorite`, data, config);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

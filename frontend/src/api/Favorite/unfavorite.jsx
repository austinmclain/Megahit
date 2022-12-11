import axios from 'axios';
import url from '../url';

export default async function unfavorite(email, name, id) {
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
        await axios.post(`${url}/favorite/delete`, data, config);
    } catch (err) {
        console.log(err);
    }
}

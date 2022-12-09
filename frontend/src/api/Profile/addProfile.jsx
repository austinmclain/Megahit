import axios from 'axios';
import url from '../url';

export default async function addProfile(email, name) {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const data = {
        "emailAddress": email,
        "profile_name": name,
        "profile_picture": 1
    }

    try {
        await axios.post(`${url}/profile/new`, data, config);
    } catch (err) {
        console.log(err);
    }
}

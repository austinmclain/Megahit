import axios from 'axios';
import url from '../url';

export default async function fetchProfiles(emailAddress) {
    try {
        const res = await axios.get(`${url}/profile`, {
            params: {
                emailAddress: emailAddress,
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

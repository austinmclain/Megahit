import axios from 'axios';
import url from '../url';

export default async function getAccountByEmailAddress(emailAddress) {
    try {
        const res = await axios.get(`${url}/account`, {
            params: { emailAddress: emailAddress }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

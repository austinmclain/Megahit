import axios from 'axios';
import url from '../url';

export default async function isCorrectLoginInfo(emailAddress, account_password) {
    try {
        const res = await axios.get(`${url}/account`, {
            params: {
                emailAddress: emailAddress,
                account_password: account_password
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

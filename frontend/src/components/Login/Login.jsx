import getAccountByEmailAddress from "../../api/Account/getAccountByEmailAddress"

export default function Login(props) {
    const { setLoginStatus } = props;

    async function validateInput(event) {
        event.preventDefault();

        const emailAddress = event.target[0].value;
        const password = event.target[1].value;

        try {
            const account = await getAccountByEmailAddress(emailAddress);
            if (!account) {
                console.log("There are no accounts with that email address.");
                return;
            } else if (account.account_password !== password) {
                console.log("That password is incorrect.");
                return;
            } else {
                setLoginStatus(true);
                return;
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) => validateInput(event)}>
                <input placeholder="Email Address"></input>
                <br></br>
                <input placeholder="Password"></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

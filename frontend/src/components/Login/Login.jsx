import isCorrectLoginInfo from "../../api/Account/isCorrectLoginInfo";

export default function Login(props) {
    const { setLoginStatus } = props;

    async function attemptLogin(event) {
        event.preventDefault();

        const emailAddress = event.target[0].value;
        const password = event.target[1].value;

        try {
            const loginAttempt = await isCorrectLoginInfo(emailAddress, password);
            if (loginAttempt) { setLoginStatus(true); }
            return;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) => attemptLogin(event)}>
                <input placeholder="Email Address"></input>
                <br></br>
                <input placeholder="Password"></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

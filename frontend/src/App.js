import './App.css';
import Login from './components/Login/Login';
import { useState } from 'react'

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  if (loginStatus === false) {
    return (
      <div className="App">
        <Login setLoginStatus={setLoginStatus} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default App;

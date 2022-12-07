import './App.css';
import Login from './components/Login/Login';
import { useState } from 'react'
import ProfileSelection from './components/ProfileSelection/ProfileSelection';

function App() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentProfile, setCurrentProfile] = useState('');

  if (currentAccount === '') {
    return (
      <div className="App">
        <Login setCurrentAccount={setCurrentAccount} />
      </div>
    );
  } else if (currentProfile === '') {
    return (
      <div className="App">
        <ProfileSelection currentAccount={currentAccount} setCurrentProfile={setCurrentProfile} />
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default App;

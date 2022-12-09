import './App.css';
import Login from './components/Login/Login';
import { useState } from 'react'
import ProfileSelection from './components/ProfileSelection/ProfileSelection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  document.title = "Megahit";
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentProfile, setCurrentProfile] = useState('');

  function logout() {
    setCurrentAccount('');
    setCurrentProfile('');
  }

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
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigation currentAccount={currentAccount} currentProfile={currentProfile} logout={logout} />}>
            <Route exact path="/movies" element={<p>Loading...</p>} />
            <Route exact path="/favorites" element={<p>Loading...</p>} />
          </Route>
        </Routes>
      </BrowserRouter >
    );
  }
}

export default App;

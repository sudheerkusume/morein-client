import React, { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import Login from './stores/component/Login'; // Import your LoginModal
import Navbar from './stores/component/Navbar';
import Footer from './stores/component/Footer';
import Maping from './stores/component/Maping';

export const loginStatus = createContext();

function App() {
  const [token, setToken] = useState("");

  return (
    <loginStatus.Provider value={[token, setToken]}>
      <div className="App">
        <Navbar/>
        <Maping />
        <Footer />
        <Login />
      </div>
    </loginStatus.Provider>
  );
}

export default App;
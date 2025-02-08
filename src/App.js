import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1>LocalLinks</h1>
          <p className="mission-text">Our mission is to help small businesses gain visibility and connect with customers in their local area.</p>
        </div>
        <div className="header-right">
          <button className="register-button">Register</button>
        </div>
      </header>

      <main>
        <p>Welcome to LocalLinks! Your one-stop solution for discovering local businesses.</p>
      </main>

      <footer className="footer">
        <p>&copy; 2025 LocalLinks. All rights reserved.</p>
        <div className="footer-links">
          <button className="link-button">About</button>
          <button className="link-button">Contact</button>
          <button className="link-button">Privacy Policy</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

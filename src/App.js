import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1>LocalLinks</h1>
          <p className="mission-text">
            Our mission is to help small businesses gain visibility and connect with customers in their local area.
          </p>
        </div>
        <div className="header-right">
          <button className="register-button">Apply</button>
        </div>
      </header>

      <main>
        <section className="intro">
          <h2>Welcome to LocalLinks</h2>
          <p>
            At LocalLinks, we empower small businesses by connecting them with their local communities. Our platform provides a space for discovering local shops, restaurants, services, and much more. Join us today to support your community and explore all that your area has to offer.
          </p>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Business Discovery</h3>
              <p>Explore the best businesses in your community with ease.</p>
            </div>
            <div className="service-card">
              <h3>Customer Connection</h3>
              <p>Get in touch with local businesses and stay updated.</p>
            </div>
            <div className="service-card">
              <h3>Local Promotions</h3>
              <p>Find exclusive offers and discounts from local businesses.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
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

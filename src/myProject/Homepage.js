// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

const FeaturedProduct = ({ name, description, price }) => {}
  // ... (as in the previous examples)

function Home() {
  return (
    <div>
      <h1>Welcome to Our Gardening Store</h1>
      <p>Your one-stop shop for all your gardening needs!</p>
    </div>
  );
}

function App() {
  const featuredProductData = {
    // ... (as in the previous examples)
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* Add routes for other pages (About, Products, Contact) */}
          </Switch>
        </header>
        <main>
          <section>
            <h2>Featured Product</h2>
            <FeaturedProduct {...featuredProductData} />
          </section>
          <section>
            <h2>Popular Products</h2>
            {/* Add code to fetch and display popular products */}
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Our Gardening Store</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

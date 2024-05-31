// src/App.js
import React, { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Item from './components/Item';
// import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1}];
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <>
      <Nav/>
      <div className="app">  
<Card addToCart={addToCart} cart={cart} />
<Item cart={cart} removeFromCart={removeFromCart} addToCart={addToCart}/>
</div>
    </>
  );
};

export default App;

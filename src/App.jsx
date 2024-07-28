// src/App.js

import React from 'react';
import CoffeeMenu from './CoffeeMenu';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Coffee Shop</h1>
      </header>
      <main>
        <CoffeeMenu />
      </main>
    </div>
  );
}

export default App;

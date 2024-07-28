// src/CoffeeMenu.js

import React, { useEffect, useState } from 'react';
import { fetchFoodMenu } from './api';

const CoffeeMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const data = await fetchFoodMenu();
        setMenu(data.elements);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Coffee Menu</h1>
      <ul >
        {console.log("menu",menu)}
        {menu.map(item => (
          <li key={item.id} className=''>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeMenu;


import React from 'react';

const MenuItem = ({ item }) => {
  console.log("item",item)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <p> asd</p>
  <img className="w-full" src={item.image} alt={item.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${item.price}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.category}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{item.rating} ⭐</span>
      </div>
    </div>
  );
};

export default MenuItem;


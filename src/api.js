// src/api.js

import axios from 'axios';

const API_BASE_URL = 'https://api-ali.digital-menu.backends.dev/api/food';
// https://jsonplaceholder.typicode.com/posts
// https://api-ali.digital-menu.backends.dev/api/food

export const fetchFoodMenu = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

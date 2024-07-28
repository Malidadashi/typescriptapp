const express = require('express');
const app = express();
const port = 3000; // Port for the server

// Import your JSON data
const jsonData = require('./data.json'); // Make sure your JSON file is in the same directory

app.get('/data', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

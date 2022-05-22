const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors({
  origin: "http://localhost:3000"
}));

app.get('/', (req, res) => {
  res.json({ message: 'Connection establised with express server. Please edit server.js file to open more end points.' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
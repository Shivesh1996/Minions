const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3001;

app.use(cors({
  origin: "*"
})); ``

app.get('/download/:frontend/:backend', (req, res) => {

  let frontend = req.params.frontend;
  let backend = req.params.backend;
  let file = '';

  //add more templates in the templates folder and add more conditions here. Change filename accordingly.

  if (frontend == "react" && backend == "express") {
    file = `${__dirname}/templates/express-react.zip`;
  } else {
    file = `${__dirname}/templates/express-react.zip`;
  }

  res.download(file);
});

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
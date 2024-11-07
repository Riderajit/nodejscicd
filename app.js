const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World This is my first ECR!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

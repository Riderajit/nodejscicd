const express = require('express');
const app = express();
const port = 3000;

// Missing security headers
app.get('/', (req, res) => {
  res.send('No security headers set!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

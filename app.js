const express = require('express');
app = express(); // 🚨 Bad Practice: Global variable (no `const`)

port = 3000; // 🚨 Bad Practice: Global variable (no `const`)

app.get('/', (req, res) => {
  console.log("Request received!"); // 🚨 Bad Practice: Console log in production

  res.send('CI/CD with GitHub Actions!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// 🚨 Bad Practice: Hardcoded credentials
const SECRET_KEY = "123456"; 

const express = require('express');
const app = express();
const port = 3000;

// Hardcoded sensitive data (Security Issue)
const DB_PASSWORD = "SuperSecret123"; 

// No security middleware (Risk: No HTTP security headers)
app.get('/', (req, res) => {
  res.send('No security headers set!');
});

// Unhandled errors (Code Smell)
app.get('/risky', (req, res) => {
  JSON.parse("{ broken JSON }");  // No try-catch (Bad Practice)
  res.send("This might break");
});

// Unvalidated user input (Security Risk: Code Injection)
app.get('/execute', (req, res) => {
  eval(req.query.cmd); // 🚨 NEVER use eval() with user input!
  res.send("Executed command");
});

// Duplicate functions (Duplication Issue)
function duplicate1() {
    console.log("Duplicate function");
}

function duplicate2() {
    console.log("Duplicate function");
}

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});


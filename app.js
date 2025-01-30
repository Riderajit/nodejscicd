const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD with github action!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});



pegdesk-postgres-readreplica.cowmehblztzl.us-west-2.rds.amazonaws.com

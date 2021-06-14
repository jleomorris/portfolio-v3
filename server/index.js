const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const GRAPHQL_KEY = process.env.REACT_APP_GITHUB_GRAPHQL_API_KEY;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/keys', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ graphQL: GRAPHQL_KEY }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

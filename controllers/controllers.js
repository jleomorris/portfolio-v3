const saySomething = (req, res, next) => {
  res.status(200).json({
    body: 'Hello from the server!',
  });
};

const apiKeys = (req, res, next) => {
  res.status(200).json({
    graphQL: process.env.GRAPH_QL_KEY,
  });
};

// app.get('/api/keys', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ graphQL: '234234234234sadfasdfsdemo' }));
// });

module.exports.saySomething = saySomething;
module.exports.apiKeys = apiKeys;

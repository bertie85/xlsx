require('dotenv').config();

const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const DB = require('./mongo');
const config = require('./config');
const XlsxReader = require('./scripts/xlsx');

const port = config.port;
const app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/status', (req, res) => res.json({ status: res.statusCode }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/upload', (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  const body = req.body;

  console.log(body)

  const xlsxReader = new XlsxReader();

  const bla = ''

  res.send({ me: "who" });//xlsxReader.workBook[0].data
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// app.get(routes, (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

// Create secure server if not in dev mode
if (!config.dev) {
  const privateKey = fs.readFileSync(config.keyfile, 'utf8');
  const certificate = fs.readFileSync(config.certfile, 'utf8');
  const options = { key: privateKey, cert: certificate };
  const httpsServer = https.createServer(options, app);

  httpsServer.listen(port, () => {
    console.log("Server listening on port: ", port);
  });
}
// Simple http server in dev mode
else {
  app.listen(config.port, () => console.log(`App listening on port ${config.port}!`));
}

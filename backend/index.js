const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const http = require('http');
const WebSocket = require('ws');
const { wss } = require('./handlers/webSocketHandler');

const app = express();

mongoose.connect(process.env.MONGO_URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database not connected', err));

app.use(express.json());
app.use('/', require('./routes/dataRoutes'));

const port = 3000;

const server = http.createServer(app);

// Integrar WebSocket Server con el servidor HTTP
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
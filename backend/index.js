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

// Inicializar WebSocket Server


wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Message received:', message);
    // Emitir mensaje a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
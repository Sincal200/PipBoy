const express = require('express');
const dotenv = require('dotenv').config();
const {mongoose} = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const dataController = require('./controllers/dataController');

mongoose.connect(process.env.MONGO_URL, {
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database not connected', err));

app.use(express.json());

app.use('/', require('./routes/dataRoutes'));

const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    dataController.handleWebSocketConnection(ws);
});

// Pasar el servidor WebSocket al controlador
dataController.setWebSocketServer(wss);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
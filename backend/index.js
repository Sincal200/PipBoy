// index.js
const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const http = require('http'); // Importar http
const socketIo = require('socket.io'); // Importar socket.io

const app = express();

mongoose.connect(process.env.MONGO_URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database not connected', err));

app.use(express.json());
app.use('/', require('./routes/dataRoutes'));

const port = 3000;

// Crear servidor HTTP
const server = http.createServer(app);

// Inicializar socket.io con el servidor HTTP
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Configurar eventos de conexión de WebSocket
io.on('connection', (socket) => {
  console.log('New client connected');

  // Ejemplo de evento de mensaje
  socket.on('message', (data) => {
    console.log('Message received:', data);
    // Emitir mensaje a todos los clientes conectados
    io.emit('message', data);
  });

  // Evento de desconexión
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Usar el servidor HTTP para escuchar en el puerto
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
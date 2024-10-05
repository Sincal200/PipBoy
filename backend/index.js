const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');

const app = express();

mongoose.connect(process.env.MONGO_URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database not connected', err));

app.use(express.json());
app.use('/', require('./routes/dataRoutes'));

const port = 3000;

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: '*', // Permitir todas las conexiones
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
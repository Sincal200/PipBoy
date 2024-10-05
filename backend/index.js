const express = require('express');
const {mongoose} = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();


mongoose.connect(process.env.MONGO_URL, {
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database not connected', err));

app.use(express.json());

app.use('/', require('./routes/dataRoutes'));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
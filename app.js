require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');

const connectDB = require('./db');
const homeRoute = require('./routes/home.route');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/v1', homeRoute);

const start = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`));
};

start();

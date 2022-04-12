require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URL + `/db-encrypt`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

module.exports = connectDB;

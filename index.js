const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const listen = () => {
  express()
    .get('/', (req, res) =>
      res.status(200).send({
        data: `Hello World!, My Name ${process.env.NAME || 'Ninja'}`,
      }),
    )
    .listen(8080, () => console.log('Server running on PORT 8080'));
};

const connect = () => {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/belajar-docker`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
};

connect();

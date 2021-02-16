const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

express()
  .get('/', (req, res) =>
    res
      .status(200)
      .send({ data: `Hello World! \nMy Name ${process.env.NAME || 'Ninja'}` }),
  )
  .listen(8080, () => console.log('Sever running on PORT 8080'));

const express = require('express');

express()
  .get('/', (req, res) => res.send('Hello World!'))
  .listen(8080, () => console.log('Sever running on PORT 8080'));

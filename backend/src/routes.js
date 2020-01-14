const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  response.send({ language: 'JavaScript' });
});

module.exports = routes;
const express = require('express')

const routes = express.Router();

routes.post('/users', (request, response) => {

    var body = request.body;

    console.log(body)

    return response.json({
        event: 'Semana ominStack 11.0',
        aluno: 'Manoel Carlos'
    })
});

module.exports = routes;
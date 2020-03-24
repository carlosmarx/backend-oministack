const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Semana ominStack 11.0',
        aluno: 'Manoel Carlos'
    })
});

app.listen(3333);
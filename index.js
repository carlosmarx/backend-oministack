const express = require('express');

const app = express();

app.use(express.json());

/** 
 *Rota/Recurso
**/

/** 
 * Métodos Http
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alter uma informação no backend
 * DELETE: Deletar uma informação no backend
**/

/** 
 * Tipos de parâmetros
 * 
 * Query: parâmetros nomeados e enviados na rota após o "?" (Servem para filtros, paginação e etc.)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
**/


app.post('/', (request, response) => {
    
    var body = request.body;

    console.log(body)

    return response.json({
        event: 'Semana ominStack 11.0',
        aluno: 'Manoel Carlos'
    })
});

app.listen(3333);
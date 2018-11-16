const express = require('express');
const bodyParser = require('body-parser');
const config = require('./../config');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json())

app.get('/api/pokemon', controller.readPokemonTeam)
app.delete('/api/pokemon/:id', controller.deletePokemonFromTeam)
app.post('/api/pokemon', controller.addPokemonToTeam)








app.listen(config.port, () => {console.log(`Ye maiden voyage has docked on port: ${config.port}`)})
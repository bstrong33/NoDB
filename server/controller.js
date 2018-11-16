const express = require('express');
const bodyParser = require('body-parser');

let pokemonTeam = [ {name: 'Venesaur', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png', id: 1},
{name: 'Charizard', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png', id: 2},
{name: 'Blastoise', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png', id: 3},
{name: 'Butterfree', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png', id: 4},
{name: 'Beedrill', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png', id: 5},
{name: 'Pidgeot', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png', id: 6}];


module.exports = {
    readPokemonTeam: (req, res) => {
        console.log('pokemon')
        res.status(200).send(pokemonTeam)
    },
    deletePokemonFromTeam: (req, res) => {
        const deleteId = req.params.id;
        pokemonIndex = pokemonTeam.findIndex( pokemon => pokemon.id == deleteId)
        pokemonTeam.splice(pokemonIndex, 1)
        res.status(200).send(pokemonTeam)
    },
    addPokemonToTeam: (req, res) => {
        const { name, img, id } = req.body;
        pokemonTeam.push({ name, img, id })
        res.status(200).send(pokemonTeam)
    }
}
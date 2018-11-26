const express = require('express');
const bodyParser = require('body-parser');

let pokemonTeam = [
    {name: 'Arcanine', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png', id: 59, hp: 90, attack: 100, defense: 80, spAtk: 100, spDef: 80, speed: 95, uniqueId: 152},
    {name: 'Alakazam', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png', id: 65, hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120, uniqueId: 153},
    {name: 'Machamp', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png', id: 68, hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55, uniqueId: 154},
    {name: 'Gengar', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png', id: 94, hp: 60, attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110, uniqueId: 155},
    {name: 'Lapras', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png', id: 131, hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60, uniqueId: 156},
    {name: 'Dragonite', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png', id: 149, hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80, uniqueId: 157},
];

let teamName = 'The Dream Team';

let uniqueId = 158;


module.exports = {
    readPokemonTeam: (req, res) => {
        res.status(200).send(pokemonTeam)
    },
    deletePokemonFromTeam: (req, res) => {
        const deleteId = req.params.id;
        pokemonIndex = pokemonTeam.findIndex( pokemon => pokemon.id == deleteId)
        pokemonTeam.splice(pokemonIndex, 1)
        res.status(200).send(pokemonTeam)
    },
    addPokemonToTeam: (req, res) => {
        const { name, img, id, hp, attack, defense, spAtk, spDef, speed } = req.body;
        pokemonTeam.push({ name, img, id, hp, attack, defense, spAtk, spDef, speed, uniqueId })
        uniqueId++;
        res.status(200).send(pokemonTeam)
    },
    readTeamName: (req, res) => {
        res.status(200).send(teamName)
    },
    editTeamName: (req, res) => {
        const { newName } = req.body;
        teamName = newName;
        res.status(200).send(teamName)
    }
}
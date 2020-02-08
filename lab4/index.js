const Express = require("express");
const App = Express();
const port = 80;
const chalk = require("chalk");
const jsonPokemon = require("json-pokemon");
const Pokemon = require("./Pokemon.js");

let pokemon = new Pokemon();

App.get("/id/:id", (req, res)=> {
    
    res.send(pokemon.getId(req));

});

App.get("/name/:name", (req, res)=> {
    
    res.send(pokemon.getName(req));

});

App.listen(port, ()=> {
    console.log("server running");
});

//npm run server to get nodemon to operate
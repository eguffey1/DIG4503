const Express = require("express");
const App = Express();
const port = 80;
const chalk = require("chalk");
const pokemons = require("json-pokemon");


App.get("/id/:id", (req, res)=> {

    let error= {"error": "invalid path"};
    let match = pokemons.filter(pokemon => pokemon.id == req.params.id);
    if(match.length) {
        res.send(match);
        console.log(chalk.green("Caught One! " + req.path));
    } else {
        res.send(error);
        console.log(chalk.red("Missed it! " + req.path));
    }

});

App.get("/name/:name", (req, res)=> {

    let error= {"error": "invalid path"};
    let match = pokemons.filter(pokemon => pokemon.name == req.params.name);
    if(match.length) {
        res.send(match);
        console.log(chalk.green("Caught One! " + req.path));
    } else {
        res.send(error);
        console.log(chalk.red("Missed it! " + req.path));
    }
    
});


App.listen(port, ()=> {
    console.log("server running");
});

//npm run server to get nodemon to operate
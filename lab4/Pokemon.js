const chalk = require("chalk");
const pokemons = require("json-pokemon");
const pokemon = pokemons[0];

class Pokemon {
    pokemon;
    constructor(name,id) {
        this.name = name;
        this.id = id;
    }

    getId(req) {

        let result = {"error": "could not find!"};

        this.pokemon.forEach((value) => {
        if(value.id == req.params.id) {
            result = value;
        }
    });
    
    if(result.error) {
        //in red
        console.log(chalk.red(req.path));
    } else {
        //in green
        console.log(chalk.green(req.path));
    }

    return result;
    }
    getName(req) {

        let result = {"error": "could not find!"};

        this.pokemon.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
        }
    });
    
    if(result.error) {
        //in red
        console.log(chalk.red(req.path));
    } else {
        //in green
        console.log(chalk.green(req.path));
    }

    return result;
    }
    
}

module.exports = Pokemon;
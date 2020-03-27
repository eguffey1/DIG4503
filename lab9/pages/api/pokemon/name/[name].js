import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "no result"};

    let pokemon = getPokemon.getPokemonByName(req.query.name);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}
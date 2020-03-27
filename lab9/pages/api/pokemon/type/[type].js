import pokemon from 'json-pokemon';

export default(req,res) => {
  let type = req.query.type;

  let result = [];

  let pokemon = pokemons.filter(pokemon => pokemon.typeList == type);

  for(let i = 0; i < pokemon.length; i++) {

    for(let k = 0; k < pokemon[i].typeList.length; i++) {
      
      if(pokemon[i].typeList.includes(type)) {
        result.push(value);
    }

  }
  res.json(result);
}
}

const POKEMON_HP_ALL = [
  ...POKEMON_HP_GEN1,
  ...POKEMON_HP_GEN2,
  ...POKEMON_HP_GEN3,
  ...POKEMON_HP_GEN4,
  ...POKEMON_HP_GEN5,
  ...POKEMON_HP_GEN6,
  ...POKEMON_HP_GEN7,
  ...POKEMON_HP_GEN8,
  ...POKEMON_HP_GEN9
];

function getHPAtLevel(baseHP, level) {
  if (level < 1) level = 1;
  if (level > 100) level = 100;
  return Math.floor(((2 * baseHP + 31) * level / 100) + level + 10);
}

function getEvolutionLevel(pokemonId) {
  const pokemon = POKEMON_HP_ALL.find(p => p.id === pokemonId);
  return pokemon ? pokemon.evolutionLevel : null;
}

function canAppearAtLevel(pokemonId, level) {
  const pokemon = POKEMON_HP_ALL.find(p => p.id === pokemonId);
  if (!pokemon) return false;
  
  if (pokemon.evolutionLevel === null) return true;
  
  return level >= pokemon.evolutionLevel;
}

function getRandomHPForPokemon(pokemonId, minLevel, maxLevel) {
  const pokemon = POKEMON_HP_ALL.find(p => p.id === pokemonId);
  if (!pokemon) return null;
  
  let level = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
  
  if (pokemon.evolutionLevel !== null && level < pokemon.evolutionLevel) {
    level = pokemon.evolutionLevel;
  }
  
  return {
    level: level,
    hp: getHPAtLevel(pokemon.baseHP, level)
  };
}

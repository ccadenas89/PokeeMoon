const POKEMON_MOVES_LEVELS = {
  // Gen 1
  "Bulbasaur":{evolve:16,moves:{1:["Placaje","Látigo cepa"],6:["Polvo veneno"],9:["Drenadoras"],13:["Hoja afilada"],20:["Esporasueño"],25:["Danza petalia"],33:["Rayo solar"]}},
  "Ivysaur":{evolve:32,moves:{1:["Placaje","Látigo cepa","Polvo veneno"],9:["Drenadoras"],13:["Hoja afilada"],20:["Esporasueño"],25:["Danza petalia"],33:["Rayo solar"]}},
  "Venusaur":{evolve:null,moves:{1:["Placaje","Látigo cepa","Polvo veneno","Drenadoras"],13:["Hoja afilada"],20:["Esporasueño"],25:["Danza petalia"],33:["Rayo solar"]}},
  "Charmander":{evolve:16,moves:{1:["Arañazo","Ascuas"],7:["Humo"],10:["Rasguño"],16:["Garra dragón"],19:["Lanzallamas"],25:["Pirotecnia"],38:["Inferno"]}},
  "Charmeleon":{evolve:36,moves:{1:["Arañazo","Ascuas","Humo"],10:["Rasguño"],16:["Garra dragón"],19:["Lanzallamas"],25:["Pirotecnia"],38:["Inferno"]}},
  "Charizard":{evolve:null,moves:{1:["Arañazo","Ascuas","Humo","Rasguño"],16:["Garra dragón"],19:["Lanzallamas"],25:["Pirotecnia"],38:["Inferno"]}},
  "Squirtle":{evolve:16,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],10:["Protección"],13:["Rayo burbuja"],18:["Acua jet"],25:["Cabezazo"],33:["Hidrobomba"]}},
  "Wartortle":{evolve:36,moves:{1:["Placaje","Burbuja","Pistola agua"],10:["Protección"],13:["Rayo burbuja"],18:["Acua jet"],25:["Cabezazo"],33:["Hidrobomba"]}},
  "Blastoise":{evolve:null,moves:{1:["Placaje","Burbuja","Pistola agua","Protección"],13:["Rayo burbuja"],18:["Acua jet"],25:["Cabezazo"],33:["Hidrobomba"]}},
  "Pikachu":{evolve:null,moves:{1:["Impactrueno","Placaje"],6:["Onda voltio"],10:["Ataque rápido"],15:["Electro bola"],20:["Carga"],26:["Trueno"],34:["Voltio cruel"]}},
  "Eevee":{evolve:null,moves:{1:["Placaje","Latigazo"],8:["Ataque rápido"],16:["Mordisco"],23:["Velocidad extrema"],30:["Última baza"]}},
  
  // Gen 2
  "Chikorita":{evolve:16,moves:{1:["Placaje","Látigo cepa"],6:["Dulce aroma"],9:["Hoja afilada"],12:["Drenadoras"],18:["Cuerpo"],25:["Rayo solar"]}},
  "Cyndaquil":{evolve:14,moves:{1:["Arañazo","Ascuas"],6:["Humo"],10:["Ataque rápido"],13:["Rueda fuego"],19:["Lanzallamas"],31:["Inferno"]}},
  "Totodile":{evolve:18,moves:{1:["Arañazo","Burbuja"],6:["Mordisco"],8:["Pistola agua"],13:["Cuchillada"],20:["Tajo brutal"],32:["Hidrobomba"]}},
  
  // Gen 3
  "Treecko":{evolve:16,moves:{1:["Arañazo","Absorber"],6:["Demolición"],9:["Drenadoras"],16:["Hoja afilada"],20:["Energibola"],29:["Rayo solar"]}},
  "Torchic":{evolve:16,moves:{1:["Arañazo","Ascuas"],7:["Giro fuego"],10:["Demolición"],16:["Patada ígnea"],19:["Tajo aéreo"],28:["Llamarada"]}},
  "Mudkip":{evolve:16,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],10:["Fango"],15:["Cabezazo"],19:["Lodo bomba"],30:["Hidrobomba"]}},
  
  // Gen 4
  "Turtwig":{evolve:18,moves:{1:["Placaje","Látigo cepa"],5:["Drenadoras"],9:["Hoja afilada"],13:["Mordisco"],17:["Cuerpo"],21:["Terremoto"]}},
  "Chimchar":{evolve:14,moves:{1:["Arañazo","Ascuas"],7:["Demolición"],9:["Finta"],15:["Puño fuego"],17:["Tajo umbrío"],23:["Lanzallamas"]}},
  "Piplup":{evolve:16,moves:{1:["Placaje","Burbuja"],4:["Pistola agua"],8:["Burbuja"],11:["Ataque rápido"],15:["Rayo burbuja"],18:["Acua jet"]}},
  
  // Gen 5
  "Snivy":{evolve:17,moves:{1:["Placaje","Látigo cepa"],4:["Vínculo"],7:["Hoja afilada"],10:["Drenadoras"],13:["Mirada"],20:["Rayo solar"]}},
  "Tepig":{evolve:17,moves:{1:["Placaje","Ascuas"],3:["Latigazo"],7:["Demolición"],13:["Rueda fuego"],15:["Derribo"],20:["Lanzallamas"]}},
  "Oshawott":{evolve:17,moves:{1:["Placaje","Burbuja"],5:["Pistola agua"],7:["Cuchillada"],13:["Vendetta"],17:["Corte"],25:["Hidrobomba"]}},
  
  // Gen 6
  "Chespin":{evolve:16,moves:{1:["Placaje","Látigo cepa"],5:["Drenadoras"],8:["Demolición"],11:["Vínculo"],15:["Pin misil"],20:["Rayo solar"]}},
  "Fennekin":{evolve:16,moves:{1:["Arañazo","Ascuas"],5:["Humo"],8:["Psicocarga"],11:["Giro fuego"],14:["Presión"],20:["Lanzallamas"]}},
  "Froakie":{evolve:16,moves:{1:["Placaje","Burbuja"],5:["Pistola agua"],8:["Lengüetazo"],10:["Doble equipo"],14:["Acua jet"],20:["Hidrobomba"]}},
  
  // Gen 7
  "Rowlet":{evolve:17,moves:{1:["Placaje","Astonish"],4:["Hoja afilada"],8:["Ataque ala"],11:["Drenadoras"],14:["Esfera aural"],20:["Rayo solar"]}},
  "Litten":{evolve:17,moves:{1:["Arañazo","Ascuas"],4:["Humo"],8:["Lengüetazo"],11:["Patada baja"],14:["Giro fuego"],20:["Lanzallamas"]}},
  "Popplio":{evolve:17,moves:{1:["Placaje","Burbuja"],4:["Pistola agua"],8:["Canto"],11:["Rayo burbuja"],14:["Acua jet"],20:["Hidrobomba"]}},
  
  // Gen 8
  "Grookey":{evolve:16,moves:{1:["Arañazo","Rama golpe"],6:["Vínculo"],8:["Demolición"],12:["Tamborrada"],17:["Golpe drum"],24:["Rayo solar"]}},
  "Scorbunny":{evolve:16,moves:{1:["Placaje","Ascuas"],6:["Doble equipo"],8:["Patada baja"],12:["Giro fuego"],17:["Patada ígnea"],24:["Llamarada"]}},
  "Sobble":{evolve:16,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],8:["Lengüetazo"],12:["Doble equipo"],17:["Acua jet"],24:["Hidrobomba"]}},
  
  // Gen 9
  "Sprigatito":{evolve:16,moves:{1:["Arañazo","Hoja afilada"],5:["Vínculo"],8:["Mordisco"],11:["Drenadoras"],15:["Finta"],20:["Rayo solar"]}},
  "Fuecoco":{evolve:16,moves:{1:["Placaje","Ascuas"],5:["Mordisco"],8:["Humo"],11:["Giro fuego"],15:["Incineración"],20:["Lanzallamas"]}},
  "Quaxly":{evolve:16,moves:{1:["Placaje","Burbuja"],5:["Pistola agua"],8:["Doble equipo"],11:["Acua jet"],15:["Cuchillada"],20:["Hidrobomba"]}},
  
  // Common wild Pokemon
  "Rattata":{evolve:20,moves:{1:["Placaje","Mordisco"],4:["Ataque rápido"],7:["Hipercolmillo"],10:["Finta"],13:["Doble equipo"],16:["Derribo"]}},
  "Pidgey":{evolve:18,moves:{1:["Placaje","Ataque rápido"],5:["Tornado"],9:["Ataque ala"],13:["Agilidad"],19:["Vendaval"]}},
  "Caterpie":{evolve:7,moves:{1:["Placaje","Disparo demora"]}},
  "Metapod":{evolve:10,moves:{1:["Placaje","Fortaleza"]}},
  "Butterfree":{evolve:null,moves:{1:["Placaje","Polvo veneno","Confusión"],12:["Paralizador"],16:["Psíquico"],24:["Ventisca"]}},
  "Weedle":{evolve:7,moves:{1:["Placaje","Picadura venenosa"]}},
  "Kakuna":{evolve:10,moves:{1:["Placaje","Fortaleza"]}},
  "Beedrill":{evolve:null,moves:{1:["Placaje","Picadura venenosa","Pin misil"],16:["Tijera X"],20:["Furia"]}},
  "Geodude":{evolve:25,moves:{1:["Placaje","Lanzarrocas"],6:["Defensa"],10:["Roca afilada"],15:["Terremoto"]}},
  "Zubat":{evolve:22,moves:{1:["Absorber","Supersónico"],6:["Mordisco"],11:["Aire cortante"],16:["Bola sombra"]}},
  "Gastly":{evolve:25,moves:{1:["Lengüetazo","Bola sombra"],6:["Hipnosis"],12:["Lametazo"],18:["Tinieblas"]}},
  "Machop":{evolve:28,moves:{1:["Placaje","Golpe kárate"],7:["Demolición"],10:["Patada baja"],13:["Golpe cuerpo"]}},
  "Growlithe":{evolve:null,moves:{1:["Mordisco","Rugido"],6:["Ascuas"],10:["Lanzallamas"],17:["Rueda fuego"]}},
  "Ponyta":{evolve:40,moves:{1:["Placaje","Ascuas"],6:["Rueda fuego"],10:["Pisotón"],15:["Lanzallamas"]}},
  "Slowpoke":{evolve:37,moves:{1:["Placaje","Confusión"],6:["Pistola agua"],12:["Amnesia"],18:["Psíquico"]}},
  "Magnemite":{evolve:30,moves:{1:["Impactrueno","Placaje"],6:["Onda voltio"],11:["Rayo burbuja"],16:["Trueno"]}},
  "Koffing":{evolve:35,moves:{1:["Placaje","Humo"],6:["Niebla tóxica"],12:["Bomba lodo"],18:["Explosión"]}},
  "Eevee":{evolve:null,moves:{1:["Placaje","Latigazo"],8:["Ataque rápido"],16:["Mordisco"],23:["Velocidad extrema"]}},
  "Mareep":{evolve:15,moves:{1:["Impactrueno","Placaje"],6:["Onda voltio"],11:["Carga"],16:["Trueno"]}},
  "Houndour":{evolve:24,moves:{1:["Mordisco","Ascuas"],6:["Finta"],12:["Lanzallamas"],17:["Tajo umbrío"]}},
  "Larvitar":{evolve:30,moves:{1:["Placaje","Mordisco"],6:["Lanzarrocas"],12:["Pisotón"],18:["Terremoto"]}},
  "Ralts":{evolve:20,moves:{1:["Placaje","Confusión"],6:["Teletransporte"],12:["Psíquico"],17:["Encanto"]}},
  "Bagon":{evolve:30,moves:{1:["Placaje","Mordisco"],6:["Furia dragón"],12:["Garra dragón"],18:["Cabezazo"]}},
  "Shinx":{evolve:15,moves:{1:["Impactrueno","Placaje"],6:["Mordisco"],11:["Chispa"],16:["Voltio cruel"]}},
  "Riolu":{evolve:null,moves:{1:["Placaje","Finta"],6:["Demolición"],12:["Puño dinámico"],17:["Velocidad extrema"]}},
  "Zorua":{evolve:30,moves:{1:["Arañazo","Mordisco"],6:["Finta"],12:["Tajo umbrío"],17:["Esfera aural"]}},
  "Deino":{evolve:50,moves:{1:["Placaje","Mordisco"],6:["Furia dragón"],12:["Garra dragón"],17:["Pulso dragón"]}},
  "Goomy":{evolve:40,moves:{1:["Placaje","Burbuja"],6:["Lengüetazo"],12:["Pulso dragón"],17:["Bomba lodo"]}},
  "Dreepy":{evolve:50,moves:{1:["Placaje","Bola sombra"],6:["Finta"],12:["Garra dragón"]}},
  "Pawmi":{evolve:18,moves:{1:["Impactrueno","Placaje"],6:["Mordisco"],12:["Carga"],18:["Voltio cruel"]}},
  
  // Fish
  "Magikarp":{evolve:20,moves:{1:["Chapoteo"]}},
  "Gyarados":{evolve:null,moves:{1:["Placaje","Mordisco"],20:["Cascada"],25:["Hidrobomba"],30:["Furia dragón"]}},
  "Goldeen":{evolve:33,moves:{1:["Placaje","Cornada"],6:["Pistola agua"],12:["Ataque rápido"],18:["Hidrobomba"]}},
  "Tentacool":{evolve:30,moves:{1:["Placaje","Burbuja"],6:["Ácido"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Horsea":{evolve:32,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Shellder":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Protección"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Krabby":{evolve:28,moves:{1:["Placaje","Burbuja"],6:["Cuchillada"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Staryu":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Dratini":{evolve:30,moves:{1:["Placaje","Burbuja"],6:["Furia dragón"],12:["Garra dragón"],18:["Hidrobomba"]}},
  "Lapras":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Wooper":{evolve:20,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Remoraid":{evolve:25,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Corsola":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Feebas":{evolve:null,moves:{1:["Placaje","Burbuja"]}},
  "Barboach":{evolve:30,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Finneon":{evolve:31,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Basculin":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Alomomola":{evolve:null,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
  "Inkay":{evolve:30,moves:{1:["Placaje","Confusión"],6:["Finta"],12:["Tajo umbrío"],18:["Psíquico"]}},
  "Arrokuda":{evolve:26,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Acua jet"],18:["Hidrobomba"]}},
  "Clauncher":{evolve:37,moves:{1:["Placaje","Burbuja"],6:["Pistola agua"],12:["Rayo burbuja"],18:["Hidrobomba"]}},
};

function getMovesAtLevel(pokeName, level){
  const data=POKEMON_MOVES_LEVELS[pokeName];
  if(!data)return["Placaje"];
  
  const available=[];
  for(const lv of Object.keys(data.moves).map(Number).sort((a,b)=>a-b)){
    if(lv<=level){
      for(const move of data.moves[lv]){
        if(!available.includes(move))available.push(move);
      }
    }
  }
  return available.length>0?available:["Placaje"];
}

function getRandomMovesForLevel(pokeName, level, maxMoves){
  const available=getMovesAtLevel(pokeName, level);
  if(available.length<=maxMoves)return[...available];
  
  const shuffled=[...available].sort(()=>Math.random()-0.5);
  return shuffled.slice(0, maxMoves);
}

function getEvolutionLevel(pokeName){
  const data=POKEMON_MOVES_LEVELS[pokeName];
  return data?data.evolve:null;
}

function canAppearAtLevel(pokeName, level){
  const evolveLevel=getEvolutionLevel(pokeName);
  if(evolveLevel===null)return true;
  return level>=evolveLevel;
}

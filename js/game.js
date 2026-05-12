const STARTERS=[
  {n:"Bulbasaur",s:"🌿",t:"planta",hp:45,atk:49,mv:["Látigo cepa","Polvo veneno","Drenadoras","Rayo solar"]},
  {n:"Charmander",s:"🔥",t:"fuego",hp:39,atk:52,mv:["Ascuas","Rasguño","Lanzallamas","Garra dragón"]},
  {n:"Squirtle",s:"💧",t:"agua",hp:44,atk:48,mv:["Pistola agua","Burbuja","Surf","Hidrobomba"]},
  {n:"Chikorita",s:"🍃",t:"planta",hp:45,atk:49,mv:["Placaje","Hoja afilada","Síntesis","Rayo solar"]},
  {n:"Cyndaquil",s:"🦔",t:"fuego",hp:39,atk:52,mv:["Ascuas","Finta","Lanzallamas","Rueda fuego"]},
  {n:"Totodile",s:"🐊",t:"agua",hp:50,atk:65,mv:["Mordisco","Pistola agua","Tajo brutal","Hidrobomba"]},
  {n:"Treecko",s:"🦎",t:"planta",hp:40,atk:45,mv:["Libra","Hoja afilada","Drenadoras","Rayo solar"]},
  {n:"Torchic",s:"🐣",t:"fuego",hp:45,atk:60,mv:["Destructor","Ascuas","Patada ígnea","Llamarada"]},
  {n:"Mudkip",s:"🌊",t:"agua",hp:50,atk:70,mv:["Placaje","Pistola agua","Terremoto","Hidrobomba"]},
  {n:"Turtwig",s:"🐢",t:"planta",hp:55,atk:68,mv:["Placaje","Hoja afilada","Terremoto","Rayo solar"]},
  {n:"Chimchar",s:"🐒",t:"fuego",hp:44,atk:58,mv:["Arañazo","Ascuas","Puño fuego","Lanzallamas"]},
  {n:"Piplup",s:"🐧",t:"agua",hp:53,atk:51,mv:["Libra","Burbuja","Surf","Hidrobomba"]},
  {n:"Snivy",s:"🐍",t:"planta",hp:45,atk:45,mv:["Placaje","Vinculo","Hoja afilada","Rayo solar"]},
  {n:"Tepig",s:"🐷",t:"fuego",hp:65,atk:63,mv:["Placaje","Ascuas","Combustión","Lanzallamas"]},
  {n:"Oshawott",s:"🦦",t:"agua",hp:55,atk:55,mv:["Placaje","Pistola agua","Cuchillada","Hidrobomba"]},
  {n:"Chespin",s:"🌰",t:"planta",hp:56,atk:61,mv:["Placaje","Vinculo","Matraca","Rayo solar"]},
  {n:"Fennekin",s:"🦊",t:"fuego",hp:40,atk:45,mv:["Arañazo","Ascuas","Psicocarga","Lanzallamas"]},
  {n:"Froakie",s:"🐸",t:"agua",hp:41,atk:56,mv:["Placaje","Pistola agua","Acua jet","Hidrobomba"]},
  {n:"Rowlet",s:"🦉",t:"planta",hp:68,atk:55,mv:["Placaje","Hoja afilada","Ataque ala","Rayo solar"]},
  {n:"Litten",s:"🐱",t:"fuego",hp:45,atk:65,mv:["Arañazo","Ascuas","Incineración","Lanzallamas"]},
  {n:"Popplio",s:"🦭",t:"agua",hp:50,atk:54,mv:["Placaje","Pistola agua","Vozarrón","Hidrobomba"]},
  {n:"Grookey",s:"🎵",t:"planta",hp:50,atk:65,mv:["Arañazo","Vinculo","Tamborrada","Rayo solar"]},
  {n:"Scorbunny",s:"🐰",t:"fuego",hp:50,atk:71,mv:["Placaje","Ascuas","Patada ígnea","Llamarada"]},
  {n:"Sobble",s:"🫧",t:"agua",hp:50,atk:40,mv:["Placaje","Pistola agua","Burla","Hidrobomba"]},
  {n:"Sprigatito",s:"🌸",t:"planta",hp:40,atk:61,mv:["Arañazo","Vinculo","Hoja afilada","Rayo solar"]},
  {n:"Fuecoco",s:"🦷",t:"fuego",hp:67,atk:45,mv:["Placaje","Ascuas","Mordisco","Lanzallamas"]},
  {n:"Quaxly",s:"🦆",t:"agua",hp:55,atk:65,mv:["Placaje","Pistola agua","Acua jet","Hidrobomba"]},
  {n:"Pikachu",s:"⚡",t:"eléctrico",hp:35,atk:55,mv:["Impactrueno","Ataque rápido","Voltio cruel","Trueno"]},
  {n:"Eevee",s:"🦊",t:"normal",hp:55,atk:45,mv:["Placaje","Mordisco","Velocidad extrema","Cabezazo"]},
];

const WILD=[
  {n:"Rattata",s:"🐭",t:"normal",hp:30,atk:56},{n:"Pidgey",s:"🐦",t:"volador",hp:40,atk:45},
  {n:"Caterpie",s:"🐛",t:"bicho",hp:45,atk:30},{n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80},
  {n:"Gastly",s:"👻",t:"fantasma",hp:30,atk:35},{n:"Zubat",s:"🦇",t:"veneno",hp:40,atk:45},
  {n:"Jigglypuff",s:"🎵",t:"normal",hp:115,atk:45},{n:"Abra",s:"🔮",t:"psíquico",hp:25,atk:20},
  {n:"Machop",s:"💪",t:"lucha",hp:70,atk:80},{n:"Growlithe",s:"🐕",t:"fuego",hp:55,atk:70},
  {n:"Ponyta",s:"🐎",t:"fuego",hp:50,atk:85},{n:"Snorlax",s:"🐻",t:"normal",hp:160,atk:110},
  {n:"Gengar",s:"👾",t:"fantasma",hp:60,atk:65},{n:"Meowth",s:"🐱",t:"normal",hp:40,atk:45},
  {n:"Psyduck",s:"🐤",t:"agua",hp:50,atk:52},{n:"Vulpix",s:"🦊",t:"fuego",hp:38,atk:41},
  {n:"Oddish",s:"🌿",t:"planta",hp:45,atk:50},{n:"Poliwag",s:"💧",t:"agua",hp:40,atk:50},
  {n:"Slowpoke",s:"🐌",t:"agua",hp:90,atk:65},{n:"Magnemite",s:"🔩",t:"eléctrico",hp:25,atk:35},
  {n:"Koffing",s:"☁️",t:"veneno",hp:65,atk:60},{n:"Eevee",s:"🦊",t:"normal",hp:55,atk:45},
  {n:"Mareep",s:"🐑",t:"eléctrico",hp:55,atk:40},{n:"Houndour",s:"🐶",t:"fuego",hp:45,atk:60},
  {n:"Larvitar",s:"🦖",t:"roca",hp:50,atk:64},{n:"Ralts",s:"🧝",t:"psíquico",hp:28,atk:25},
  {n:"Bagon",s:"🐉",t:"dragón",hp:45,atk:75},{n:"Shinx",s:"⚡",t:"eléctrico",hp:45,atk:65},
  {n:"Riolu",s:"🐺",t:"lucha",hp:40,atk:70},{n:"Zorua",s:"🦊",t:"siniestro",hp:40,atk:65},
  {n:"Deino",s:"🐲",t:"dragón",hp:52,atk:65},{n:"Goomy",s:"🟣",t:"dragón",hp:45,atk:50},
  {n:"Dreepy",s:"🌀",t:"fantasma",hp:28,atk:60},{n:"Pawmi",s:"⚡",t:"eléctrico",hp:45,atk:70},
];
const FISH=[
  {n:"Magikarp",s:"🐟",t:"agua",hp:20,atk:10},{n:"Goldeen",s:"🐠",t:"agua",hp:45,atk:67},
  {n:"Tentacool",s:"🪼",t:"agua",hp:40,atk:40},{n:"Horsea",s:"🌊",t:"agua",hp:30,atk:40},
  {n:"Shellder",s:"🐚",t:"agua",hp:30,atk:65},{n:"Krabby",s:"🦀",t:"agua",hp:30,atk:105},
  {n:"Staryu",s:"⭐",t:"agua",hp:30,atk:45},{n:"Dratini",s:"🐲",t:"dragón",hp:41,atk:64},
  {n:"Lapras",s:"🧊",t:"agua",hp:130,atk:85},{n:"Gyarados",s:"🐉",t:"agua",hp:95,atk:125},
  {n:"Wooper",s:"💧",t:"agua",hp:55,atk:45},{n:"Remoraid",s:"🔫",t:"agua",hp:35,atk:65},
  {n:"Corsola",s:"🪸",t:"agua",hp:55,atk:55},{n:"Feebas",s:"🐡",t:"agua",hp:20,atk:15},
  {n:"Barboach",s:"🐍",t:"agua",hp:50,atk:48},{n:"Finneon",s:"🐠",t:"agua",hp:49,atk:49},
  {n:"Basculin",s:"🐟",t:"agua",hp:70,atk:92},{n:"Alomomola",s:"🩷",t:"agua",hp:165,atk:75},
  {n:"Inkay",s:"🦑",t:"siniestro",hp:53,atk:54},{n:"Arrokuda",s:"🐟",t:"agua",hp:41,atk:63},
  {n:"Dracovish",s:"🦈",t:"agua",hp:90,atk:90},{n:"Clauncher",s:"🦐",t:"agua",hp:50,atk:53},
];
const BASE_POKEMON=[
  {n:"Bulbasaur",s:"🌿",t:"planta",hp:45,atk:49,mv:["Látigo cepa","Polvo veneno","Drenadoras","Rayo solar"]},
  {n:"Charmander",s:"🔥",t:"fuego",hp:39,atk:52,mv:["Ascuas","Rasguño","Lanzallamas","Garra dragón"]},
  {n:"Squirtle",s:"💧",t:"agua",hp:44,atk:48,mv:["Pistola agua","Burbuja","Surf","Hidrobomba"]},
  {n:"Chikorita",s:"🍃",t:"planta",hp:45,atk:49,mv:["Placaje","Hoja afilada","Síntesis","Rayo solar"]},
  {n:"Cyndaquil",s:"🦔",t:"fuego",hp:39,atk:52,mv:["Ascuas","Finta","Lanzallamas","Rueda fuego"]},
  {n:"Totodile",s:"🐊",t:"agua",hp:50,atk:65,mv:["Mordisco","Pistola agua","Tajo brutal","Hidrobomba"]},
  {n:"Treecko",s:"🦎",t:"planta",hp:40,atk:45,mv:["Libra","Hoja afilada","Drenadoras","Rayo solar"]},
  {n:"Torchic",s:"🐣",t:"fuego",hp:45,atk:60,mv:["Destructor","Ascuas","Patada ígnea","Llamarada"]},
  {n:"Mudkip",s:"🌊",t:"agua",hp:50,atk:70,mv:["Placaje","Pistola agua","Terremoto","Hidrobomba"]},
  {n:"Turtwig",s:"🐢",t:"planta",hp:55,atk:68,mv:["Placaje","Hoja afilada","Terremoto","Rayo solar"]},
  {n:"Chimchar",s:"🐒",t:"fuego",hp:44,atk:58,mv:["Arañazo","Ascuas","Puño fuego","Lanzallamas"]},
  {n:"Piplup",s:"🐧",t:"agua",hp:53,atk:51,mv:["Libra","Burbuja","Surf","Hidrobomba"]},
  {n:"Snivy",s:"🐍",t:"planta",hp:45,atk:45,mv:["Placaje","Vinculo","Hoja afilada","Rayo solar"]},
  {n:"Tepig",s:"🐷",t:"fuego",hp:65,atk:63,mv:["Placaje","Ascuas","Combustión","Lanzallamas"]},
  {n:"Oshawott",s:"🦦",t:"agua",hp:55,atk:55,mv:["Placaje","Pistola agua","Cuchillada","Hidrobomba"]},
  {n:"Chespin",s:"🌰",t:"planta",hp:56,atk:61,mv:["Placaje","Vinculo","Matraca","Rayo solar"]},
  {n:"Fennekin",s:"🦊",t:"fuego",hp:40,atk:45,mv:["Arañazo","Ascuas","Psicocarga","Lanzallamas"]},
  {n:"Froakie",s:"🐸",t:"agua",hp:41,atk:56,mv:["Placaje","Pistola agua","Acua jet","Hidrobomba"]},
  {n:"Rowlet",s:"🦉",t:"planta",hp:68,atk:55,mv:["Placaje","Hoja afilada","Ataque ala","Rayo solar"]},
  {n:"Litten",s:"🐱",t:"fuego",hp:45,atk:65,mv:["Arañazo","Ascuas","Incineración","Lanzallamas"]},
  {n:"Popplio",s:"🦭",t:"agua",hp:50,atk:54,mv:["Placaje","Pistola agua","Vozarrón","Hidrobomba"]},
  {n:"Grookey",s:"🎵",t:"planta",hp:50,atk:65,mv:["Arañazo","Vinculo","Tamborrada","Rayo solar"]},
  {n:"Scorbunny",s:"🐰",t:"fuego",hp:50,atk:71,mv:["Placaje","Ascuas","Patada ígnea","Llamarada"]},
  {n:"Sobble",s:"🫧",t:"agua",hp:50,atk:40,mv:["Placaje","Pistola agua","Burla","Hidrobomba"]},
  {n:"Sprigatito",s:"🌸",t:"planta",hp:40,atk:61,mv:["Arañazo","Vinculo","Hoja afilada","Rayo solar"]},
  {n:"Fuecoco",s:"🦷",t:"fuego",hp:67,atk:45,mv:["Placaje","Ascuas","Mordisco","Lanzallamas"]},
  {n:"Quaxly",s:"🦆",t:"agua",hp:55,atk:65,mv:["Placaje","Pistola agua","Acua jet","Hidrobomba"]},
  {n:"Pikachu",s:"⚡",t:"eléctrico",hp:35,atk:55,mv:["Impactrueno","Ataque rápido","Voltio cruel","Trueno"]},
  {n:"Eevee",s:"🦊",t:"normal",hp:55,atk:45,mv:["Placaje","Mordisco","Velocidad extrema","Cabezazo"]},
  {n:"Rattata",s:"🐭",t:"normal",hp:30,atk:56,mv:["Mordisco","Ataque rápido","Placaje"]},
  {n:"Pidgey",s:"🐦",t:"volador",hp:40,atk:45,mv:["Placaje","Tornado","Ataque ala"]},
  {n:"Caterpie",s:"🐛",t:"bicho",hp:45,atk:30,mv:["Placaje","Polvo veneno"]},
  {n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80,mv:["Lanzarrocas","Defensa","Placaje"]},
  {n:"Gastly",s:"👻",t:"fantasma",hp:30,atk:35,mv:["Bola sombra","Hipnosis","Lametazo"]},
  {n:"Zubat",s:"🦇",t:"veneno",hp:40,atk:45,mv:["Mordisco","Asombro","Aire cortante"]},
  {n:"Jigglypuff",s:"🎵",t:"normal",hp:115,atk:45,mv:["Canto","Beso drenante","Doble bofetón"]},
  {n:"Abra",s:"🔮",t:"psíquico",hp:25,atk:20,mv:["Teletransporte","Protección"]},
  {n:"Machop",s:"💪",t:"lucha",hp:70,atk:80,mv:["Golpe dinámico","Patada baja","Lanzamiento"]},
  {n:"Growlithe",s:"🐕",t:"fuego",hp:55,atk:70,mv:["Mordisco","Lanzallamas","Ascuas"]},
  {n:"Ponyta",s:"🐎",t:"fuego",hp:50,atk:85,mv:["Rueda fuego","Pisotón","Ascuas"]},
  {n:"Snorlax",s:"🐻",t:"normal",hp:160,atk:110,mv:["Cuerpo a cuerpo","Bostezo","Amnesia"]},
  {n:"Meowth",s:"🐱",t:"normal",hp:40,atk:45,mv:["Arañazo","Mordisco","Finta"]},
  {n:"Psyduck",s:"🐤",t:"agua",hp:50,atk:52,mv:["Agua pulverizada","Psíquico","Confusión"]},
  {n:"Vulpix",s:"🦊",t:"fuego",hp:38,atk:41,mv:["Llama carga","Ascuas","Lanzallamas"]},
  {n:"Oddish",s:"🌿",t:"planta",hp:45,atk:50,mv:["Absorber","Polvo veneno","Esporasueño"]},
  {n:"Poliwag",s:"💧",t:"agua",hp:40,atk:50,mv:["Agua pulverizada","Hipnosis"]},
  {n:"Slowpoke",s:"🐌",t:"agua",hp:90,atk:65,mv:["Confusión","Amnesia","Bosteza"]},
  {n:"Magnemite",s:"🔩",t:"eléctrico",hp:25,atk:35,mv:["Impactrueno","Trueno","Sónico"]},
  {n:"Koffing",s:"☁️",t:"veneno",hp:65,atk:60,mv:["Tóxico","Niebla tóxica","Placaje"]},
  {n:"Mareep",s:"🐑",t:"eléctrico",hp:55,atk:40,mv:["Impactrueno","Carga","Rayo"]},
  {n:"Houndour",s:"🐶",t:"fuego",hp:45,atk:60,mv:["Mordisco","Lanzallamas","Fuego sagrado"]},
  {n:"Larvitar",s:"🦖",t:"roca",hp:50,atk:64,mv:["Lanzarrocas","Pisotón"]},
  {n:"Ralts",s:"🧝",t:"psíquico",hp:28,atk:25,mv:["Confusión","Encanto","Señuelo"]},
  {n:"Bagon",s:"🐉",t:"dragón",hp:45,atk:75,mv:["Garra dragón","Mordisco","Cabezazo"]},
  {n:"Shinx",s:"⚡",t:"eléctrico",hp:45,atk:65,mv:["Impactrueno","Carga","Dentellada"]},
  {n:"Riolu",s:"🐺",t:"lucha",hp:40,atk:70,mv:["Puño dinámico","Golpe bajo"]},
  {n:"Zorua",s:"🦊",t:"siniestro",hp:40,atk:65,mv:["Mordisco","Finta","Asombro"]},
  {n:"Deino",s:"🐲",t:"dragón",hp:52,atk:65,mv:["Garra dragón","Mordisco","Pulso dragón"]},
  {n:"Goomy",s:"🟣",t:"dragón",hp:45,atk:50,mv:["Agua pulverizada","Pulso dragón","Paralizador"]},
  {n:"Dreepy",s:"🌀",t:"fantasma",hp:28,atk:60,mv:["Bola sombra","Garra dragón"]},
  {n:"Pawmi",s:"⚡",t:"eléctrico",hp:45,atk:70,mv:["Impactrueno","Carga","Tacleada"]},
  {n:"Magikarp",s:"🐟",t:"agua",hp:20,atk:10,mv:["Chapoteo"]},
  {n:"Goldeen",s:"🐠",t:"agua",hp:45,atk:67,mv:["Pistola agua","Ataque cornada"]},
  {n:"Tentacool",s:"🪼",t:"agua",hp:40,atk:40,mv:["Agua pulverizada","Veneno polvo"]},
  {n:"Horsea",s:"🌊",t:"agua",hp:30,atk:40,mv:["Agua pulverizada","Paralizador","Rayo burbuja"]},
  {n:"Shellder",s:"🐚",t:"agua",hp:30,atk:65,mv:["Pistola agua","Carcazo","Picadura"]},
  {n:"Krabby",s:"🦀",t:"agua",hp:30,atk:105,mv:["Garra X","Picadura","Placaje"]},
  {n:"Staryu",s:"⭐",t:"agua",hp:30,atk:45,mv:["Pistola agua","Impactrueno","Rayo burbuja"]},
  {n:"Dratini",s:"🐲",t:"dragón",hp:41,atk:64,mv:["Envolvimiento","Garra dragón","Bola trueno"]},
  {n:"Lapras",s:"🧊",t:"agua",hp:130,atk:85,mv:["Surf","Ventisca","Canto"]},
  {n:"Wooper",s:"💧",t:"agua",hp:55,atk:45,mv:["Agua pulverizada","Lodo bomba","Amnesia"]},
  {n:"Remoraid",s:"🔫",t:"agua",hp:35,atk:65,mv:["Pistola agua","Chispazo","Rayo burbuja"]},
  {n:"Corsola",s:"🪸",t:"agua",hp:55,atk:55,mv:["Burbuja","Rayo burbuja","Recuperación"]},
  {n:"Feebas",s:"🐡",t:"agua",hp:20,atk:15,mv:["Agua pulverizada","Espejo"]},
  {n:"Barboach",s:"🐍",t:"agua",hp:50,atk:48,mv:["Agua pulverizada","Terremoto","Lodo bomba"]},
  {n:"Finneon",s:"🐠",t:"agua",hp:49,atk:49,mv:["Agua pulverizada","Ataque rápido","Aqua Ring"]},
  {n:"Basculin",s:"🐟",t:"agua",hp:70,atk:92,mv:["Pistola agua","Mordisco","Tajo brutal"]},
  {n:"Alomomola",s:"🩷",t:"agua",hp:165,atk:75,mv:["Protección","Recuperación","Aqua Ring"]},
  {n:"Inkay",s:"🦑",t:"siniestro",hp:53,atk:54,mv:["Confusión","Tinte tóxico","Chispazo"]},
  {n:"Arrokuda",s:"🐟",t:"agua",hp:41,atk:63,mv:["Pistola agua","Mordisco","Asombro"]},
  {n:"Clauncher",s:"🦐",t:"agua",hp:50,atk:53,mv:["Burbuja","Pistola agua","Ataque ala"]},
];
const TRAINER_NAMES=["Ash","Gary","May","Dawn","Iris","Serena","Lillie","Gloria","Victor","Nemona","Ethan","Rosa","Brendan","Calem","Hilbert","Hilda"];
const MOVES_BY_TYPE={
  planta:["Hoja afilada","Drenadoras","Rayo solar","Energibola","Megaagotar","Síntesis","Esporasueño","Látigo cepa"],
  fuego:["Lanzallamas","Ascuas","Rueda fuego","Llamarada","Pirotecnia","Patada ígnea","Incineración","Erupción"],
  agua:["Surf","Hidrobomba","Pistola agua","Acua jet","Burbuja","Catarata","Rayo burbuja","Buceo"],
  eléctrico:["Trueno","Impactrueno","Voltio cruel","Chispazo","Rayo","Carga","Ondavatio","Onda voltio"],
  normal:["Cuerpo a cuerpo","Demolición","Velocidad extrema","Machazo","Cabezazo","Hipnosis","Canto","Amnesia"],
  psíquico:["Psíquico","Teletransporte","Psicocarga","Señuelo","Recuperación","Amnesia","Psicoimpulso","Carga zen"],
  fantasma:["Bola sombra","Golpe fantasma","Maldición","Come sueños","Hipnosis","Infortunio","Tinieblas","Languidez"],
  roca:["Lanzarrocas","Canto de roca","Cabeza de roca","Defensa roca","Roca afilada","Avalancha","Pedrada","Pedrisco"],
  lucha:["Puño dinámico","Patada baja","Golpe kárate","Aguante","Demolición","Golpe bis","Puño fuego","Patada triple"],
  dragón:["Garra dragón","Pulso dragón","Furia dragón","Danza dragón","Cola dragón","Hiperrayo","Vendaval dragón","Látigo dragón"],
  hielo:["Ventisca","Rayo hielo","Cañón hielo","Avalancha","Polvo hielo","Aurora","Carámbano","Nevisca"],
  veneno:["Tóxico","Niebla tóxica","Colmillo venenoso","Explosión ácida","Bomba ácida","Bomba lodo","Picadura","Aguijón"],
  bicho:["Picadura","Zumbido","Golpe bis","Cuchillada","Polvo veneno","Paralizador","X-Tijera","Zunzún"],
  volador:["Ataque ala","Vendaval","Vuelo","Pico taladrante","Aire cortante","Tornado","Plumas","Acróbata"],
  tierra:["Terremoto","Excavar","Cavar","Fisura","Pisotón","Remolino arena","Golpe de roca","Hundimiento"],
  acero:["Cola férrea","Cabeza de hierro","Cuerpo metálico","Defensa metálica","Giro bola","Bayoneta","Fogonazo metálico","Ataque ácido"],
  siniestro:["Mordisco","Triturar","Bola sombra","Acoso","Golpe bajo","Lengüetazo","Embargo","Maquinación"],
  hada:["Voz cautivadora","Beso drenante","Encanto","Cambia fuerza","Danza amiga","Neblina","Celo","Fuerza lunar"],
};

const ITEM_POOL=[
  {k:"pokeball",n:"Poké Ball",ico:"🔴",desc:"Captura Pokémon salvajes",rarity:"common",cls:"rc",pct:16,qty:()=>rnd(2,4)},
  {k:"pocion",n:"Poción",ico:"🧴",desc:"Restaura 20 HP",rarity:"común",cls:"rc",pct:14,qty:()=>rnd(1,3)},
  {k:"superpocion",n:"Superpoción",ico:"💊",desc:"Restaura 50 HP",rarity:"común",cls:"rc",pct:10,qty:()=>rnd(1,2)},
  {k:"antidoto",n:"Antídoto",ico:"💉",desc:"Cura el envenenamiento",rarity:"común",cls:"rc",pct:7,qty:()=>1},
  {k:"despertar",n:"Despertar",ico:"☕",desc:"Despierta a un Pokémon dormido",rarity:"común",cls:"rc",pct:5,qty:()=>1},
  {k:"hiper_pocion",n:"Híper Poción",ico:"💉",desc:"Restaura 100 HP",rarity:"poco común",cls:"ru",pct:8,qty:()=>rnd(1,2)},
  {k:"super_ball",n:"Super Ball",ico:"🔵",desc:"Mayor tasa de captura",rarity:"poco común",cls:"ru",pct:7,qty:()=>rnd(1,3)},
  {k:"pp_up",n:"PP Up",ico:"⬆️",desc:"Aumenta los PP de un movimiento",rarity:"poco común",cls:"ru",pct:5,qty:()=>1},
  {k:"fruta_frambu",n:"Fruta Frambu",ico:"🍓",desc:"Cura 10 HP en batalla",rarity:"poco común",cls:"ru",pct:5,qty:()=>rnd(1,2)},
  {k:"full_restore",n:"Cura Total",ico:"✨",desc:"Restaura todo el HP y cura estados",rarity:"raro",cls:"rr",pct:4,qty:()=>1},
  {k:"ultra_ball",n:"Ultra Ball",ico:"⚫",desc:"Alta tasa de captura",rarity:"raro",cls:"rr",pct:3,qty:()=>rnd(1,2)},
  {k:"caramelo_exp",n:"Caramelo Exp.",ico:"🍬",desc:"Sube 1 nivel al Pokémon líder",rarity:"raro",cls:"rr",pct:3,qty:()=>1,sp:"candy_exp"},
  {k:"caramelo_raro",n:"Caramelo Raro",ico:"🍭",desc:"Sube 3 niveles al Pokémon líder",rarity:"raro",cls:"rr",pct:2,qty:()=>1,sp:"candy_rare"},
  {k:"revivir",n:"Revivir",ico:"💫",desc:"Revive con 50% HP",rarity:"raro",cls:"rr",pct:1,qty:()=>1},
  {k:"piedra_fuego",n:"Piedra Fuego",ico:"🔥",desc:"Evoluciona Pokémon de fuego",rarity:"épico",cls:"re",pct:1.2,qty:()=>1,sp:"stone"},
  {k:"piedra_agua",n:"Piedra Agua",ico:"💧",desc:"Evoluciona Pokémon de agua",rarity:"épico",cls:"re",pct:1.2,qty:()=>1,sp:"stone"},
  {k:"piedra_trueno",n:"Piedra Trueno",ico:"⚡",desc:"Evoluciona Pokémon eléctrico",rarity:"épico",cls:"re",pct:1.2,qty:()=>1,sp:"stone"},
  {k:"piedra_hoja",n:"Piedra Hoja",ico:"🍃",desc:"Evoluciona Pokémon de planta",rarity:"épico",cls:"re",pct:1.2,qty:()=>1,sp:"stone"},
  {k:"piedra_luna",n:"Piedra Luna",ico:"🌙",desc:"Evoluciona Clefairy y similares",rarity:"épico",cls:"re",pct:0.8,qty:()=>1,sp:"stone"},
  {k:"piedra_sol",n:"Piedra Solar",ico:"☀️",desc:"Evoluciona Gloom y similares",rarity:"épico",cls:"re",pct:0.8,qty:()=>1,sp:"stone"},
  {k:"piedra_hielo",n:"Piedra Hielo",ico:"🧊",desc:"Evoluciona Eevee a Glaceon",rarity:"épico",cls:"re",pct:0.6,qty:()=>1,sp:"stone"},
  {k:"piedra_oscu",n:"Piedra Oscura",ico:"🌑",desc:"Evoluciona Pokémon siniestros",rarity:"épico",cls:"re",pct:0.6,qty:()=>1,sp:"stone"},
  {k:"caramelo_gordo",n:"Caramelo Gordo",ico:"🍰",desc:"Sube 5 niveles al Pokémon líder",rarity:"épico",cls:"re",pct:0.4,qty:()=>1,sp:"candy_big"},
  {k:"tm_hiperrayo",n:"MT Hiperrayo",ico:"📀",desc:"Enseña Hiperrayo al líder",rarity:"legendario",cls:"rl",pct:0.8,qty:()=>1,sp:"tm_hyper"},
  {k:"tm_esfera",n:"MT Esfera Aural",ico:"📀",desc:"Enseña Esfera Aural al líder",rarity:"legendario",cls:"rl",pct:0.5,qty:()=>1,sp:"tm_aura"},
  {k:"caramelo_maximo",n:"Caramelo Máximo",ico:"🌟",desc:"Sube 10 niveles al Pokémon líder",rarity:"legendario",cls:"rl",pct:0.5,qty:()=>1,sp:"candy_max"},
  {k:"master_ball",n:"Master Ball",ico:"💜",desc:"¡Captura cualquier Pokémon sin fallo!",rarity:"legendario",cls:"rl",pct:0.2,qty:()=>1},
];

const USABLE_IN_BATTLE=[
  {k:"pocion",n:"Poción",heal:20},{k:"superpocion",n:"Superpoción",heal:50},
  {k:"hiper_pocion",n:"Híper Poción",heal:100},{k:"full_restore",n:"Cura Total",heal:9999},
  {k:"fruta_frambu",n:"Fruta Frambu",heal:10},{k:"revivir",n:"Revivir",sp:"revive"},
];

// ── WORLD DATA con equipos y niveles CANÓNICOS ──────────────────────────────
const WORLD=[
 {r:"Kanto",nodes:[
  {id:"paleta",n:"Pueblo Paleta",i:"🏡",t:"town",s:"Tu hogar. Equipo curado.",cl:"bgr"},
  {id:"ruta1",n:"Ruta 1",i:"🌿",t:"route",s:"Rattata y Pidgey",cl:"bgr"},
  {id:"viridian",n:"Ciudad Viridian",i:"🏘️",t:"town",s:"Primera ciudad. Equipo curado.",cl:"bgr"},
  {id:"ruta2n",n:"Ruta 2 norte",i:"🌿",t:"route",s:"Rattata y Nidoran",cl:"bgr"},
  {id:"bosque",n:"Bosque Viridian",i:"🌲",t:"cave",s:"Caterpie, Metapod y Weedle",cl:"bc"},
  {id:"pewter",n:"Ciudad Pewter",i:"🏘️",t:"town",s:"Museo de fósiles. Equipo curado.",cl:"bgr"},
  {id:"gym-brock",n:"Gimnasio · Brock",i:"⚔️",t:"gym",s:"Roca · Medalla Roca",cl:"bg",
   gd:{l:"Brock",badge:"Medalla Roca",type:"roca",
       pk:[{n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80,lv:12,mv:["Lanzarrocas","Defensa","Placaje","Fortaleza"]},
           {n:"Onix",s:"🐍",t:"roca",hp:35,atk:45,lv:14,mv:["Lanzarrocas","Cola férrea","Placaje","Fortaleza"]}]}},
  {id:"ruta3",n:"Ruta 3",i:"🌿",t:"route",s:"Jigglypuff y Mankey",cl:"bgr"},
  {id:"plateada",n:"Ciudad Plateada",i:"🏘️",t:"town",s:"Centro Pokémon. Equipo curado.",cl:"bgr"},
  {id:"mt-moon",n:"Monte Moon",i:"🌙",t:"cave",s:"Zubat y Clefairy",cl:"bc"},
  {id:"ruta4",n:"Ruta 4",i:"🌿",t:"route",s:"Rattata y Spearow",cl:"bgr"},
  {id:"cerulean",n:"Ciudad Celeste",i:"🏘️",t:"town",s:"Puente Nugget y Bici. Equipo curado.",cl:"bgr"},
  {id:"gym-misty",n:"Gimnasio · Misty",i:"⚔️",t:"gym",s:"Agua · Medalla Cascada",cl:"bg",
   gd:{l:"Misty",badge:"Medalla Cascada",type:"agua",
       pk:[{n:"Staryu",s:"⭐",t:"agua",hp:30,atk:45,lv:18,mv:["Pistola agua","Impactrueno","Rayo burbuja"]},
           {n:"Starmie",s:"🌟",t:"agua",hp:60,atk:75,lv:21,mv:["Hidrobomba","Psíquico","Impactrueno","Velocidad extrema"]}]}},
  {id:"ruta9",n:"Rutas 9 y 10",i:"🌿",t:"route",s:"Voltorb y Magnemite",cl:"bgr"},
  {id:"central-elec",n:"Central Eléctrica",i:"⚡",t:"cave",s:"Voltorb y Magnemite",cl:"bc"},
  {id:"vermilion",n:"Ciudad Carmín",i:"🏘️",t:"town",s:"Puerto S.S. Anne. Equipo curado.",cl:"bgr"},
  {id:"gym-surge",n:"Gimnasio · Lt. Surge",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Trueno",cl:"bg",
   gd:{l:"Lt. Surge",badge:"Medalla Trueno",type:"eléctrico",
       pk:[{n:"Voltorb",s:"💣",t:"eléctrico",hp:40,atk:30,lv:21,mv:["Impactrueno","Rapidez","Sónico"]},
           {n:"Pikachu",s:"⚡",t:"eléctrico",hp:35,atk:55,lv:18,mv:["Impactrueno","Ataque rápido","Onda voltio"]},
           {n:"Raichu",s:"🌩️",t:"eléctrico",hp:60,atk:90,lv:24,mv:["Trueno","Impactrueno","Golpe cuerpo","Onda voltio"]}]}},
  {id:"ruta11",n:"Rutas 11-12-13-14-15",i:"🌿",t:"route",s:"Ekans, Drowzee y Doduo",cl:"bgr"},
  {id:"lavender",n:"Pueblo Lavanda",i:"🏘️",t:"town",s:"Torre Pokémon. Equipo curado.",cl:"bgr"},
  {id:"torre-lavender",n:"Torre Pokémon",i:"🏚️",t:"cave",s:"Gastly y Haunter",cl:"bc"},
  {id:"celadon",n:"Ciudad Azulona",i:"🏙️",t:"town",s:"Gran Almacén y Salón recreativo. Equipo curado.",cl:"bgr"},
  {id:"gym-erika",n:"Gimnasio · Erika",i:"⚔️",t:"gym",s:"Planta · Medalla Arcoíris",cl:"bg",
   gd:{l:"Erika",badge:"Medalla Arcoíris",type:"planta",
       pk:[{n:"Victreebel",s:"🌿",t:"planta",hp:80,atk:105,lv:29,mv:["Hoja afilada","Polvo veneno","Drenadoras","Látigo cepa"]},
           {n:"Tangela",s:"🌱",t:"planta",hp:65,atk:55,lv:24,mv:["Drenadoras","Megaagotar","Polvo veneno"]},
           {n:"Vileplume",s:"🌺",t:"planta",hp:75,atk:80,lv:29,mv:["Hoja afilada","Esporasueño","Polvo veneno","Pétalo danza"]}]}},
  {id:"ruta16",n:"Rutas 16-17-18",i:"🌿",t:"route",s:"Doduo y Raticate",cl:"bgr"},
  {id:"fuchsia",n:"Ciudad Fucsia",i:"🏘️",t:"town",s:"Zoológico Pokémon. Equipo curado.",cl:"bgr"},
  {id:"seafoam",n:"Islas Canela",i:"🏝️",t:"cave",s:"Seel y Lapras",cl:"bc"},
  {id:"gym-koga",n:"Gimnasio · Koga",i:"⚔️",t:"gym",s:"Veneno · Medalla Alma",cl:"bg",
   gd:{l:"Koga",badge:"Medalla Alma",type:"veneno",
       pk:[{n:"Koffing",s:"☁️",t:"veneno",hp:65,atk:60,lv:37,mv:["Niebla tóxica","Tóxico","Placaje","Autodestrucción"]},
           {n:"Koffing",s:"☁️",t:"veneno",hp:65,atk:60,lv:37,mv:["Niebla tóxica","Tóxico","Explosión","Humo"]},
           {n:"Muk",s:"💩",t:"veneno",hp:105,atk:105,lv:39,mv:["Minimizar","Lanzamiento","Tóxico","Humo"]},
           {n:"Weezing",s:"💨",t:"veneno",hp:65,atk:90,lv:43,mv:["Explosión","Tóxico","Niebla tóxica","Autodestrucción"]}]}},
  {id:"saffron",n:"Ciudad Azafrán",i:"🏙️",t:"town",s:"Torre Silph Co. Equipo curado.",cl:"bgr"},
  {id:"gym-sabrina",n:"Gimnasio · Sabrina",i:"⚔️",t:"gym",s:"Psíquico · Medalla Pantano",cl:"bg",
   gd:{l:"Sabrina",badge:"Medalla Pantano",type:"psíquico",
       pk:[{n:"Kadabra",s:"🔮",t:"psíquico",hp:40,atk:35,lv:38,mv:["Psíquico","Teletransporte","Recuperación","Señuelo"]},
           {n:"Mr. Mime",s:"🤡",t:"psíquico",hp:40,atk:45,lv:37,mv:["Psíquico","Señuelo","Barrera","Recuperación"]},
           {n:"Venomoth",s:"🦋",t:"veneno",hp:70,atk:65,lv:38,mv:["Psíquico","Paralizador","Polvo veneno","Zumbido"]},
           {n:"Alakazam",s:"✨",t:"psíquico",hp:55,atk:50,lv:43,mv:["Psíquico","Señuelo","Recuperación","Agilidad"]}]}},
  {id:"ruta21",n:"Ruta 21 · Isla Canela",i:"🌊",t:"route",s:"Tentacool y Horsea",cl:"bgr"},
  {id:"cinnabar",n:"Isla Canela",i:"🌋",t:"town",s:"Laboratorio Pokémon. Equipo curado.",cl:"bgr"},
  {id:"gym-blaine",n:"Gimnasio · Blaine",i:"⚔️",t:"gym",s:"Fuego · Medalla Volcán",cl:"bg",
   gd:{l:"Blaine",badge:"Medalla Volcán",type:"fuego",
       pk:[{n:"Growlithe",s:"🐕",t:"fuego",hp:55,atk:70,lv:42,mv:["Mordisco","Lanzallamas","Ascuas","Rugido"]},
           {n:"Ponyta",s:"🐎",t:"fuego",hp:50,atk:85,lv:40,mv:["Rueda fuego","Ascuas","Pisotón","Agilidad"]},
           {n:"Rapidash",s:"🦄",t:"fuego",hp:65,atk:100,lv:42,mv:["Rueda fuego","Lanzallamas","Pisotón","Agilidad"]},
           {n:"Arcanine",s:"🦁",t:"fuego",hp:90,atk:110,lv:47,mv:["Lanzallamas","Extremevelocidad","Mordisco","Pirotecnia"]}]}},
  {id:"gym-giovanni",n:"Gimnasio · Giovanni",i:"⚔️",t:"gym",s:"Tierra · Medalla Tierra",cl:"bg",
   gd:{l:"Giovanni",badge:"Medalla Tierra",type:"tierra",
       pk:[{n:"Rhyhorn",s:"🦏",t:"roca",hp:80,atk:85,lv:45,mv:["Cornada","Lanzarrocas","Terremoto","Pisotón"]},
           {n:"Dugtrio",s:"🕳️",t:"tierra",hp:35,atk:100,lv:42,mv:["Terremoto","Excavar","Ataque rápido","Gruñido"]},
           {n:"Nidoqueen",s:"💜",t:"veneno",hp:90,atk:92,lv:44,mv:["Terremoto","Cuerpo a cuerpo","Cornada","Tóxico"]},
           {n:"Nidoking",s:"💙",t:"veneno",hp:81,atk:102,lv:45,mv:["Terremoto","Megacuerno","Cuerpo a cuerpo","Tóxico"]},
           {n:"Rhydon",s:"🦕",t:"roca",hp:105,atk:130,lv:50,mv:["Terremoto","Cornada","Lanzarrocas","Golpe cuerpo"]}]}},
  {id:"ruta22-23",n:"Ruta 22 y 23 · Vic. Road",i:"🌿",t:"route",s:"Nidoran y Mankey",cl:"bgr"},
  {id:"alto-kanto",n:"Alto Mando Kanto",i:"👑",t:"league",s:"Lorelei · Bruno · Agatha · Lance · Blue",cl:"bl",
   ld:{n:"Kanto",tr:[
     {n:"Lorelei",s:"❄️",lv:54,pk:[{n:"Dewgong",s:"🐬",hp:90,atk:70,mv:["Surf","Ventisca","Canto"]},{n:"Cloyster",s:"🐚",hp:50,atk:95,mv:["Surf","Supersónico","Tornillo"]},{n:"Jynx",s:"🧊",hp:65,atk:50,mv:["Psíquico","Come sueños","Lovely Kiss"]},{n:"Lapras",s:"🧊",hp:130,atk:85,mv:["Surf","Ventisca","Canto"]},{n:"Slowbro",s:"🐠",hp:95,atk:75,mv:["Surf","Psíquico","Amnesia"]}]},
     {n:"Bruno",s:"💪",lv:58,pk:[{n:"Onix",s:"🐍",hp:35,atk:45,mv:["Lanzarrocas","Cola férrea"]},{n:"Hitmonchan",s:"🥊",hp:50,atk:105,mv:["Puño fuego","Puño hielo","Puño trueno"]},{n:"Hitmonlee",s:"🥋",hp:50,atk:120,mv:["Patada alta","Patada baja","Agilidad"]},{n:"Onix",s:"🐍",hp:35,atk:45,mv:["Lanzarrocas","Fortaleza"]},{n:"Machamp",s:"💪",hp:90,atk:130,mv:["Golpe kárate","Puño dinámico","Cuerpo a cuerpo"]}]},
     {n:"Agatha",s:"👻",lv:60,pk:[{n:"Gengar",s:"👾",hp:60,atk:65,mv:["Bola sombra","Hipnosis","Come sueños"]},{n:"Haunter",s:"💀",hp:45,atk:50,mv:["Bola sombra","Hipnosis","Languidez"]},{n:"Gengar",s:"👾",hp:60,atk:65,mv:["Bola sombra","Hipnosis","Come sueños"]},{n:"Arbok",s:"🐍",hp:60,atk:85,mv:["Tóxico","Contorsión","Mordisco"]},{n:"Gengar",s:"👾",hp:60,atk:65,mv:["Bola sombra","Hipnosis","Come sueños","Maldición"]}]},
     {n:"Lance",s:"🐲",lv:62,pk:[{n:"Gyarados",s:"🐉",hp:95,atk:125,mv:["Hidrobomba","Mordisco","Mazazo"]},{n:"Dragonair",s:"🐲",hp:61,atk:84,mv:["Garra dragón","Surf","Bola trueno"]},{n:"Dragonair",s:"🐲",hp:61,atk:84,mv:["Garra dragón","Surf","Fuego sagrado"]},{n:"Aerodactyl",s:"🦕",hp:80,atk:105,mv:["Canto de roca","Ataque ala","Hipervoz"]},{n:"Dragonite",s:"🐉",hp:91,atk:134,mv:["Hiperrayo","Garra dragón","Vendaval"]}]},
     {n:"Blue (Campeón)",s:"🏆",lv:65,pk:[{n:"Pidgeot",s:"🐦",hp:83,atk:80,mv:["Ataque ala","Vendaval","Ataque rápido"]},{n:"Alakazam",s:"✨",hp:55,atk:50,mv:["Psíquico","Recuperación","Señuelo"]},{n:"Rhydon",s:"🦕",hp:105,atk:130,mv:["Terremoto","Lanzarrocas","Cornada"]},{n:"Arcanine",s:"🦁",hp:90,atk:110,mv:["Lanzallamas","Extremevelocidad","Mordisco"]},{n:"Exeggutor",s:"🥥",hp:95,atk:95,mv:["Psíquico","Esporasueño","Pétalo danza"]},{n:"Blastoise",s:"💧",hp:79,atk:83,mv:["Hidrobomba","Surf","Cañón hielo"]}]}
   ]}},
 ]},
 {r:"Johto",nodes:[
  {id:"j-falkner",n:"Gimnasio · Falkner",i:"⚔️",t:"gym",s:"Volador · Medalla Ala",cl:"bg",
   gd:{l:"Falkner",badge:"Medalla Ala",type:"volador",
       pk:[{n:"Pidgey",s:"🐦",t:"volador",hp:40,atk:45,lv:9,mv:["Placaje","Tornado","Ataque ala"]},
           {n:"Pidgeotto",s:"🦅",t:"volador",hp:63,atk:60,lv:13,mv:["Ataque ala","Tornado","Vendaval","Rapidez"]}]}},
  {id:"j-route",n:"Ruta Azalea",i:"🌿",t:"route",s:"Hierba y senderos",cl:"bgr"},
  {id:"j-bugsy",n:"Gimnasio · Bugsy",i:"⚔️",t:"gym",s:"Bicho · Medalla Colmena",cl:"bg",
   gd:{l:"Bugsy",badge:"Medalla Colmena",type:"bicho",
       pk:[{n:"Metapod",s:"🐚",t:"bicho",hp:50,atk:20,lv:15,mv:["Fortaleza"]},
           {n:"Kakuna",s:"🐚",t:"bicho",hp:45,atk:25,lv:15,mv:["Fortaleza","Tóxico"]},
           {n:"Scyther",s:"🐛",t:"bicho",hp:70,atk:110,lv:17,mv:["Cuchillada","Hoja afilada","Ataque rápido","Golpe bis"]}]}},
  {id:"j-whitney",n:"Gimnasio · Whitney",i:"⚔️",t:"gym",s:"Normal · Medalla Normal",cl:"bg",
   gd:{l:"Whitney",badge:"Medalla Normal",type:"normal",
       pk:[{n:"Clefairy",s:"🌟",t:"normal",hp:70,atk:45,lv:18,mv:["Metronomo","Minimizar","Canto","Doble bofetón"]},
           {n:"Miltank",s:"🐄",t:"normal",hp:95,atk:80,lv:20,mv:["Rodillo","Ordeño","Cuerpo a cuerpo","Atracción"]}]}},
  {id:"j-ruins",n:"Ruinas de Alfa",i:"🏛️",t:"cave",s:"Unown misterioso",cl:"bc"},
  {id:"j-morty",n:"Gimnasio · Morty",i:"⚔️",t:"gym",s:"Fantasma · Medalla Niebla",cl:"bg",
   gd:{l:"Morty",badge:"Medalla Niebla",type:"fantasma",
       pk:[{n:"Gastly",s:"👻",t:"fantasma",hp:30,atk:35,lv:21,mv:["Lametazo","Maldición","Hipnosis"]},
           {n:"Haunter",s:"💀",t:"fantasma",hp:45,atk:50,lv:21,mv:["Bola sombra","Hipnosis","Maldición"]},
           {n:"Haunter",s:"💀",t:"fantasma",hp:45,atk:50,lv:23,mv:["Bola sombra","Hipnosis","Come sueños"]},
           {n:"Gengar",s:"👾",t:"fantasma",hp:60,atk:65,lv:25,mv:["Bola sombra","Hipnosis","Come sueños","Maldición"]}]}},
  {id:"j-chuck",n:"Gimnasio · Chuck",i:"⚔️",t:"gym",s:"Lucha · Medalla Tormenta",cl:"bg",
   gd:{l:"Chuck",badge:"Medalla Tormenta",type:"lucha",
       pk:[{n:"Primeape",s:"🐒",t:"lucha",hp:65,atk:105,lv:27,mv:["Puño dinámico","Patada baja","Rabia","Foco energía"]},
           {n:"Poliwrath",s:"💧",t:"lucha",hp:90,atk:95,lv:30,mv:["Surf","Puño dinámico","Hipnosis","Cuerpo a cuerpo"]}]}},
  {id:"j-jasmine",n:"Gimnasio · Jasmine",i:"⚔️",t:"gym",s:"Acero · Medalla Mineral",cl:"bg",
   gd:{l:"Jasmine",badge:"Medalla Mineral",type:"acero",
       pk:[{n:"Magnemite",s:"🔩",t:"eléctrico",hp:25,atk:35,lv:30,mv:["Trueno","Sónico","Impactrueno"]},
           {n:"Magnemite",s:"🔩",t:"eléctrico",hp:25,atk:35,lv:30,mv:["Trueno","Sónico","Rayo"]},
           {n:"Steelix",s:"🐍",t:"acero",hp:75,atk:85,lv:35,mv:["Cola férrea","Lanzarrocas","Terremoto","Fortaleza"]}]}},
  {id:"j-ice-path",n:"Sendero Hielo",i:"🧊",t:"cave",s:"Swinub y Sneasel",cl:"bc"},
  {id:"j-pryce",n:"Gimnasio · Pryce",i:"⚔️",t:"gym",s:"Hielo · Medalla Glaciar",cl:"bg",
   gd:{l:"Pryce",badge:"Medalla Glaciar",type:"hielo",
       pk:[{n:"Seel",s:"🦭",t:"agua",hp:65,atk:45,lv:27,mv:["Ventisca","Surf","Aurora","Gruñido"]},
           {n:"Dewgong",s:"🐬",t:"agua",hp:90,atk:70,lv:29,mv:["Ventisca","Surf","Aurora","Seducción"]},
           {n:"Piloswine",s:"🐗",t:"hielo",hp:100,atk:100,lv:31,mv:["Avalancha","Terremoto","Ventisca","Amnesia"]}]}},
  {id:"j-dragons-den",n:"Guarida del Dragón",i:"🐉",t:"cave",s:"Dratini y Dragonair",cl:"bc"},
  {id:"j-clair",n:"Gimnasio · Clair",i:"⚔️",t:"gym",s:"Dragón · Medalla Ascenso",cl:"bg",
   gd:{l:"Clair",badge:"Medalla Ascenso",type:"dragón",
       pk:[{n:"Dragonair",s:"🐲",t:"dragón",hp:61,atk:84,lv:37,mv:["Garra dragón","Surf","Bola trueno","Agilidad"]},
           {n:"Dragonair",s:"🐲",t:"dragón",hp:61,atk:84,lv:37,mv:["Garra dragón","Surf","Fuego sagrado"]},
           {n:"Dragonair",s:"🐲",t:"dragón",hp:61,atk:84,lv:37,mv:["Garra dragón","Surf","Trueno"]},
           {n:"Kingdra",s:"🐉",t:"agua",hp:75,atk:95,lv:40,mv:["Hidrobomba","Garra dragón","Surf","Vendaval"]}]}},
  {id:"alto-johto",n:"Alto Mando Johto",i:"👑",t:"league",s:"Will · Koga · Bruno · Karen · Lance",cl:"bl",
   ld:{n:"Johto",tr:[
     {n:"Will",s:"🔮",lv:40,pk:[{n:"Xatu",s:"🦅",hp:65,atk:75,mv:["Psíquico","Señuelo","Futuro"]},{n:"Jynx",s:"🧊",hp:65,atk:50,mv:["Psíquico","Lovely Kiss","Come sueños"]},{n:"Exeggutor",s:"🥥",hp:95,atk:95,mv:["Psíquico","Esporasueño","Pétalo danza"]},{n:"Slowbro",s:"🐠",hp:95,atk:75,mv:["Surf","Psíquico","Amnesia"]},{n:"Xatu",s:"🦅",hp:65,atk:75,mv:["Psíquico","Señuelo","Ataque ala"]}]},
     {n:"Koga",s:"☠️",lv:42,pk:[{n:"Ariados",s:"🕷️",hp:70,atk:90,mv:["Picadura","Seda pegajosa","Veneno"]},{n:"Venomoth",s:"🦋",hp:70,atk:65,mv:["Psíquico","Polvo veneno","Zumbido"]},{n:"Forretress",s:"🛡️",hp:75,atk:90,mv:["Rápido","Explosión","Defensa roca"]},{n:"Muk",s:"💩",hp:105,atk:105,mv:["Tóxico","Minimizar","Explosión"]},{n:"Crobat",s:"🦇",hp:85,atk:90,mv:["Acróbata","Tóxico","Supersónico"]}]},
     {n:"Bruno",s:"💪",lv:46,pk:[{n:"Hitmontop",s:"🌀",hp:50,atk:95,mv:["Patada triple","Demolición"]},{n:"Hitmonlee",s:"🥋",hp:50,atk:120,mv:["Patada alta","Patada baja","Agilidad"]},{n:"Hitmonchan",s:"🥊",hp:50,atk:105,mv:["Puño fuego","Puño hielo","Puño trueno"]},{n:"Onix",s:"🐍",hp:35,atk:45,mv:["Lanzarrocas","Cola férrea"]},{n:"Machamp",s:"💪",hp:90,atk:130,mv:["Golpe kárate","Puño dinámico","Cuerpo a cuerpo"]}]},
     {n:"Karen",s:"🌑",lv:48,pk:[{n:"Umbreon",s:"🌑",hp:95,atk:65,mv:["Bola sombra","Mordisco","Maldición"]},{n:"Vileplume",s:"🌺",hp:75,atk:80,mv:["Hoja afilada","Pétalo danza","Esporasueño"]},{n:"Gengar",s:"👾",hp:60,atk:65,mv:["Bola sombra","Come sueños","Hipnosis"]},{n:"Murkrow",s:"🐦",hp:60,atk:85,mv:["Ataque ala","Maldición","Asombro"]},{n:"Houndoom",s:"🐶",hp:75,atk:90,mv:["Lanzallamas","Come sueños","Tóxico"]}]},
     {n:"Lance (Campeón)",s:"🏆",lv:50,pk:[{n:"Gyarados",s:"🐉",hp:95,atk:125,mv:["Hidrobomba","Mordisco","Mazazo"]},{n:"Dragonite",s:"🐉",hp:91,atk:134,mv:["Hiperrayo","Garra dragón","Vendaval"]},{n:"Dragonite",s:"🐉",hp:91,atk:134,mv:["Hiperrayo","Garra dragón","Trueno"]},{n:"Aerodactyl",s:"🦕",hp:80,atk:105,mv:["Canto de roca","Ataque ala"]},{n:"Dragonite",s:"🐉",hp:91,atk:134,mv:["Hiperrayo","Garra dragón","Fuego sagrado"]}]}
   ]}},
 ]},
 {r:"Hoenn",nodes:[
  {id:"h-roxanne",n:"Gimnasio · Roxanne",i:"⚔️",t:"gym",s:"Roca · Medalla Piedra",cl:"bg",
   gd:{l:"Roxanne",badge:"Medalla Piedra",type:"roca",
       pk:[{n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80,lv:12,mv:["Lanzarrocas","Defensa","Placaje"]},
           {n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80,lv:12,mv:["Lanzarrocas","Defensa","Placaje"]},
           {n:"Nosepass",s:"🧲",t:"roca",hp:30,atk:45,lv:15,mv:["Lanzarrocas","Fortaleza","Trueno","Chispa"]}]}},
  {id:"h-brawly",n:"Gimnasio · Brawly",i:"⚔️",t:"gym",s:"Lucha · Medalla Puño",cl:"bg",
   gd:{l:"Brawly",badge:"Medalla Puño",type:"lucha",
       pk:[{n:"Machop",s:"💪",t:"lucha",hp:70,atk:80,lv:16,mv:["Puño dinámico","Patada baja","Gruñido"]},
           {n:"Meditite",s:"🧘",t:"lucha",hp:30,atk:40,lv:16,mv:["Puño dinámico","Psíquico","Meditación"]},
           {n:"Makuhita",s:"🥊",t:"lucha",hp:72,atk:60,lv:19,mv:["Puño dinámico","Aguante","Golpe bajo"]}]}},
  {id:"h-granite",n:"Cueva de Granito",i:"🗻",t:"cave",s:"Abra y Geodude",cl:"bc"},
  {id:"h-wattson",n:"Gimnasio · Wattson",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Dínamo",cl:"bg",
   gd:{l:"Wattson",badge:"Medalla Dínamo",type:"eléctrico",
       pk:[{n:"Voltorb",s:"💣",t:"eléctrico",hp:40,atk:30,lv:20,mv:["Impactrueno","Rapidez","Explosión"]},
           {n:"Magneton",s:"🔩",t:"eléctrico",hp:50,atk:60,lv:22,mv:["Trueno","Sónico","Rayo"]},
           {n:"Electrike",s:"⚡",t:"eléctrico",hp:58,atk:45,lv:20,mv:["Impactrueno","Mordisco","Gruñido"]},
           {n:"Manectric",s:"⚡",t:"eléctrico",hp:70,atk:75,lv:24,mv:["Trueno","Impactrueno","Velocidad extrema","Chispa"]}]}},
  {id:"h-flannery",n:"Gimnasio · Flannery",i:"⚔️",t:"gym",s:"Fuego · Medalla Calor",cl:"bg",
   gd:{l:"Flannery",badge:"Medalla Calor",type:"fuego",
       pk:[{n:"Numel",s:"🌋",t:"fuego",hp:60,atk:60,lv:24,mv:["Ascuas","Lanzallamas","Pirotecnia"]},
           {n:"Slugma",s:"🔴",t:"fuego",hp:40,atk:40,lv:24,mv:["Ascuas","Lanzallamas","Amnesia"]},
           {n:"Camerupt",s:"🌋",t:"fuego",hp:70,atk:100,lv:26,mv:["Erupción","Terremoto","Pirotecnia"]},
           {n:"Torkoal",s:"🐢",t:"fuego",hp:70,atk:85,lv:29,mv:["Lanzallamas","Overheat","Defensa","Amnesia"]}]}},
  {id:"h-norman",n:"Gimnasio · Norman",i:"⚔️",t:"gym",s:"Normal · Medalla Equilibrio",cl:"bg",
   gd:{l:"Norman",badge:"Medalla Equilibrio",type:"normal",
       pk:[{n:"Spinda",s:"🐼",t:"normal",hp:60,atk:60,lv:27,mv:["Cuerpo a cuerpo","Mareo","Golpe bis"]},
           {n:"Vigoroth",s:"🦥",t:"normal",hp:80,atk:80,lv:27,mv:["Demolición","Cuerpo a cuerpo","Foco energía"]},
           {n:"Linoone",s:"🦥",t:"normal",hp:78,atk:70,lv:29,mv:["Demolición","Cortina de arena","Extremevelocidad"]},
           {n:"Slaking",s:"🦍",t:"normal",hp:150,atk:160,lv:31,mv:["Machada","Cuerpo a cuerpo","Bostezo","Foco energía"]}]}},
  {id:"h-winona",n:"Gimnasio · Winona",i:"⚔️",t:"gym",s:"Volador · Medalla Pluma",cl:"bg",
   gd:{l:"Winona",badge:"Medalla Pluma",type:"volador",
       pk:[{n:"Swablu",s:"☁️",t:"volador",hp:45,atk:40,lv:29,mv:["Ataque ala","Tornado","Canto"]},
           {n:"Tropius",s:"🦕",t:"volador",hp:99,atk:68,lv:29,mv:["Ataque ala","Hoja afilada","Vendaval"]},
           {n:"Pelipper",s:"🐦",t:"volador",hp:60,atk:50,lv:30,mv:["Pistola agua","Ataque ala","Tormenta"]},
           {n:"Skarmory",s:"🐦",t:"acero",hp:65,atk:80,lv:31,mv:["Ataque ala","Canto de roca","Fortaleza"]},
           {n:"Altaria",s:"☁️",t:"volador",hp:75,atk:70,lv:33,mv:["Garra dragón","Canto","Pétalo danza","Ataque ala"]}]}},
  {id:"h-sky-pillar",n:"Torre del Cielo",i:"🏰",t:"cave",s:"Claydol y Banette",cl:"bc"},
  {id:"h-tate",n:"Gimnasio · Tate & Liza",i:"⚔️",t:"gym",s:"Psíquico · Medalla Mente",cl:"bg",
   gd:{l:"Tate & Liza",badge:"Medalla Mente",type:"psíquico",
       pk:[{n:"Lunatone",s:"🌙",t:"psíquico",hp:70,atk:55,lv:42,mv:["Psíquico","Ventisca","Defensa roca","Rayo cósmico"]},
           {n:"Solrock",s:"☀️",t:"psíquico",hp:70,atk:95,lv:42,mv:["Psíquico","Defensa roca","Llamarada","Rayo cósmico"]}]}},
  {id:"h-juan",n:"Gimnasio · Juan",i:"⚔️",t:"gym",s:"Agua · Medalla Lluvia",cl:"bg",
   gd:{l:"Juan",badge:"Medalla Lluvia",type:"agua",
       pk:[{n:"Luvdisc",s:"💝",t:"agua",hp:43,atk:30,lv:41,mv:["Pistola agua","Atracción","Surf"]},
           {n:"Whiscash",s:"🐟",t:"agua",hp:110,atk:78,lv:41,mv:["Surf","Terremoto","Bola hielo"]},
           {n:"Sealeo",s:"🦭",t:"agua",hp:90,atk:60,lv:43,mv:["Surf","Ventisca","Cuerpo a cuerpo"]},
           {n:"Crawdaunt",s:"🦀",t:"agua",hp:63,atk:120,lv:43,mv:["Surf","Burbuja oscura","Cuchillada"]},
           {n:"Milotic",s:"🐉",t:"agua",hp:95,atk:60,lv:46,mv:["Hidrobomba","Recuperación","Ventisca","Surf"]}]}},
  {id:"alto-hoenn",n:"Alto Mando Hoenn",i:"👑",t:"league",s:"Sidney · Phoebe · Glacia · Drake · Wallace",cl:"bl",
   ld:{n:"Hoenn",tr:[
     {n:"Sidney",s:"🌑",lv:46,pk:[{n:"Mightyena",s:"🐺",hp:70,atk:90,mv:["Triturar","Intimidación"]},{n:"Cacturne",s:"🌵",hp:70,atk:115,mv:["Garra sombría","Hoja afilada"]},{n:"Sharpedo",s:"🦈",hp:70,atk:120,mv:["Acua jet","Triturar"]},{n:"Absol",s:"🌑",hp:65,atk:130,mv:["Tajo umbrío","Psico corte"]},{n:"Shiftry",s:"🌿",hp:90,atk:100,mv:["Hoja afilada","Triturar"]}]},
     {n:"Phoebe",s:"👻",lv:48,pk:[{n:"Dusclops",s:"👁️",hp:40,atk:70,mv:["Bola sombra","Maldición"]},{n:"Banette",s:"🎎",hp:64,atk:115,mv:["Bola sombra","Maldición"]},{n:"Sableye",s:"💎",hp:50,atk:75,mv:["Bola sombra","Mordisco"]},{n:"Dusclops",s:"👁️",hp:40,atk:70,mv:["Bola sombra","Maldición"]},{n:"Banette",s:"🎎",hp:64,atk:115,mv:["Bola sombra","Maldición"]}]},
     {n:"Glacia",s:"❄️",lv:50,pk:[{n:"Sealeo",s:"🦭",hp:90,atk:60,mv:["Ventisca","Surf"]},{n:"Glalie",s:"❄️",hp:80,atk:80,mv:["Ventisca","Cañón hielo"]},{n:"Sealeo",s:"🦭",hp:90,atk:60,mv:["Ventisca","Surf"]},{n:"Glalie",s:"❄️",hp:80,atk:80,mv:["Ventisca","Cañón hielo"]},{n:"Walrein",s:"🦭",hp:110,atk:80,mv:["Ventisca","Surf","Cuerpo a cuerpo"]}]},
     {n:"Drake",s:"🐲",lv:52,pk:[{n:"Shelgon",s:"🐉",hp:65,atk:95,mv:["Garra dragón","Defensa"]},{n:"Altaria",s:"☁️",hp:75,atk:70,mv:["Garra dragón","Pétalo danza"]},{n:"Flygon",s:"🐍",hp:80,atk:100,mv:["Garra dragón","Terremoto"]},{n:"Flygon",s:"🐍",hp:80,atk:100,mv:["Garra dragón","Fuego sagrado"]},{n:"Salamence",s:"🐲",hp:95,atk:135,mv:["Garra dragón","Vendaval","Hiperrayo"]}]},
     {n:"Wallace (Campeón)",s:"🏆",lv:58,pk:[{n:"Wailord",s:"🐋",hp:170,atk:90,mv:["Hidrobomba","Cuerpo a cuerpo"]},{n:"Tentacruel",s:"🪼",hp:80,atk:80,mv:["Surf","Tóxico"]},{n:"Wailord",s:"🐋",hp:170,atk:90,mv:["Hidrobomba","Vendaval"]},{n:"Ludicolo",s:"🎉",hp:80,atk:70,mv:["Surf","Rayo solar"]},{n:"Whiscash",s:"🐟",hp:110,atk:78,mv:["Terremoto","Surf"]},{n:"Milotic",s:"🐉",hp:95,atk:60,mv:["Hidrobomba","Recuperación","Ventisca"]}]}
   ]}},
 ]},
 {r:"Sinnoh",nodes:[
  {id:"si-roark",n:"Gimnasio · Roark",i:"⚔️",t:"gym",s:"Roca · Medalla Carbón",cl:"bg",
   gd:{l:"Roark",badge:"Medalla Carbón",type:"roca",
       pk:[{n:"Geodude",s:"🪨",t:"roca",hp:40,atk:80,lv:12,mv:["Lanzarrocas","Defensa","Placaje"]},
           {n:"Onix",s:"🐍",t:"roca",hp:35,atk:45,lv:12,mv:["Lanzarrocas","Cola férrea","Fortaleza"]},
           {n:"Cranidos",s:"🦕",t:"roca",hp:67,atk:125,lv:14,mv:["Cabeza de roca","Lanzarrocas","Impacto"]}]}},
  {id:"si-gardenia",n:"Gimnasio · Gardenia",i:"⚔️",t:"gym",s:"Planta · Medalla Foresta",cl:"bg",
   gd:{l:"Gardenia",badge:"Medalla Foresta",type:"planta",
       pk:[{n:"Cherubi",s:"🍒",t:"planta",hp:45,atk:35,lv:19,mv:["Hoja afilada","Drenadoras"]},
           {n:"Turtwig",s:"🐢",t:"planta",hp:55,atk:68,lv:19,mv:["Hoja afilada","Drenadoras","Síntesis"]},
           {n:"Roserade",s:"🌹",t:"planta",hp:60,atk:70,lv:22,mv:["Tóxico","Rayo solar","Drenadoras","Pétalo danza"]}]}},
  {id:"si-coronet",n:"Monte Coronet",i:"🏔️",t:"cave",s:"Zubat y Medicham",cl:"bc"},
  {id:"si-maylene",n:"Gimnasio · Maylene",i:"⚔️",t:"gym",s:"Lucha · Medalla Cinta",cl:"bg",
   gd:{l:"Maylene",badge:"Medalla Cinta",type:"lucha",
       pk:[{n:"Meditite",s:"🧘",t:"lucha",hp:30,atk:40,lv:27,mv:["Puño dinámico","Psíquico","Meditación"]},
           {n:"Machoke",s:"💪",t:"lucha",hp:80,atk:80,lv:27,mv:["Puño dinámico","Golpe kárate","Terremoto"]},
           {n:"Lucario",s:"🐺",t:"lucha",hp:70,atk:110,lv:30,mv:["Esfera aural","Puño dinámico","Velocidad extrema","Maquinación"]}]}},
  {id:"si-wake",n:"Gimnasio · Crasher Wake",i:"⚔️",t:"gym",s:"Agua · Medalla Ola",cl:"bg",
   gd:{l:"Crasher Wake",badge:"Medalla Ola",type:"agua",
       pk:[{n:"Gyarados",s:"🐉",t:"agua",hp:95,atk:125,lv:33,mv:["Hidrobomba","Mordisco","Mazazo","Impactrueno"]},
           {n:"Quagsire",s:"💧",t:"agua",hp:95,atk:85,lv:34,mv:["Surf","Terremoto","Bola hielo","Cuerpo a cuerpo"]},
           {n:"Floatzel",s:"🦦",t:"agua",hp:85,atk:105,lv:37,mv:["Acua jet","Demolición","Bola hielo","Surf"]}]}},
  {id:"si-fantina",n:"Gimnasio · Fantina",i:"⚔️",t:"gym",s:"Fantasma · Medalla Niebla",cl:"bg",
   gd:{l:"Fantina",badge:"Medalla Niebla",type:"fantasma",
       pk:[{n:"Duskull",s:"💀",t:"fantasma",hp:20,atk:70,lv:32,mv:["Bola sombra","Maldición","Asombro"]},
           {n:"Haunter",s:"👻",t:"fantasma",hp:45,atk:50,lv:34,mv:["Bola sombra","Hipnosis","Come sueños"]},
           {n:"Mismagius",s:"🎩",t:"fantasma",hp:60,atk:60,lv:36,mv:["Bola sombra","Maldición","Señuelo","Confusión"]}]}},
  {id:"si-byron",n:"Gimnasio · Byron",i:"⚔️",t:"gym",s:"Acero · Medalla Mina",cl:"bg",
   gd:{l:"Byron",badge:"Medalla Mina",type:"acero",
       pk:[{n:"Magneton",s:"🔩",t:"eléctrico",hp:50,atk:60,lv:36,mv:["Trueno","Sónico","Defensa metálica"]},
           {n:"Steelix",s:"🐍",t:"acero",hp:75,atk:85,lv:36,mv:["Cola férrea","Terremoto","Fortaleza"]},
           {n:"Bastiodon",s:"🛡️",t:"acero",hp:60,atk:52,lv:39,mv:["Cola férrea","Lanzarrocas","Defensa","Fortaleza"]}]}},
  {id:"si-candice",n:"Gimnasio · Candice",i:"⚔️",t:"gym",s:"Hielo · Medalla Carámbano",cl:"bg",
   gd:{l:"Candice",badge:"Medalla Carámbano",type:"hielo",
       pk:[{n:"Snover",s:"🌨️",t:"planta",hp:60,atk:62,lv:38,mv:["Ventisca","Hoja afilada","Cañón hielo"]},
           {n:"Sneasel",s:"❄️",t:"siniestro",hp:55,atk:95,lv:38,mv:["Cuchillada","Ventisca","Ataque rápido"]},
           {n:"Medicham",s:"🧘",t:"lucha",hp:60,atk:60,lv:40,mv:["Puño hielo","Puño dinámico","Psíquico"]},
           {n:"Abomasnow",s:"🌲",t:"planta",hp:90,atk:92,lv:42,mv:["Ventisca","Terremoto","Madera martillo","Cañón hielo"]}]}},
  {id:"si-volkner",n:"Gimnasio · Volkner",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Faro",cl:"bg",
   gd:{l:"Volkner",badge:"Medalla Faro",type:"eléctrico",
       pk:[{n:"Jolteon",s:"💛",t:"eléctrico",hp:65,atk:65,lv:46,mv:["Trueno","Voltio cruel","Mordisco","Sombra aérea"]},
           {n:"Raichu",s:"🌩️",t:"eléctrico",hp:60,atk:90,lv:46,mv:["Trueno","Golpe cuerpo","Puño trueno","Foco energía"]},
           {n:"Ambipom",s:"🐒",t:"normal",hp:75,atk:100,lv:47,mv:["Demolición","Puño sombra","Contrataque"]},
           {n:"Luxray",s:"⚡",t:"eléctrico",hp:80,atk:120,lv:49,mv:["Voltio cruel","Colmillo ígneo","Colmillo hielo","Terremoto"]}]}},
  {id:"alto-sinnoh",n:"Alto Mando Sinnoh",i:"👑",t:"league",s:"Aaron · Bertha · Flint · Lucian · Cynthia",cl:"bl",
   ld:{n:"Sinnoh",tr:[
     {n:"Aaron",s:"🐛",lv:50,pk:[{n:"Dustox",s:"🦋",hp:60,atk:50,mv:["Tóxico","Golpe bis"]},{n:"Beautifly",s:"🦋",hp:60,atk:70,mv:["Energibola","Chupavidas"]},{n:"Vespiquen",s:"🐝",hp:70,atk:80,mv:["Ataque enjambre","Defensa"]},{n:"Heracross",s:"🐛",hp:80,atk:125,mv:["Puño dinámico","Megacuerno"]},{n:"Drapion",s:"🦂",hp:70,atk:90,mv:["Tóxico","Mordisco","Triturar"]}]},
     {n:"Bertha",s:"🪨",lv:52,pk:[{n:"Whiscash",s:"🐟",hp:110,atk:78,mv:["Terremoto","Surf"]},{n:"Gliscor",s:"🦂",hp:75,atk:95,mv:["Terremoto","Ataque ala"]},{n:"Sudowoodo",s:"🌳",hp:70,atk:100,mv:["Canto de roca","Terremoto"]},{n:"Golem",s:"🪨",hp:80,atk:120,mv:["Terremoto","Lanzarrocas","Explosión"]},{n:"Rhyperior",s:"🦏",hp:115,atk:140,mv:["Terremoto","Canto de roca","Megacuerno"]}]},
     {n:"Flint",s:"🔥",lv:54,pk:[{n:"Houndoom",s:"🐶",hp:75,atk:90,mv:["Lanzallamas","Come sueños"]},{n:"Flareon",s:"🔥",hp:65,atk:130,mv:["Lanzallamas","Colmillo ígneo"]},{n:"Rapidash",s:"🦄",hp:65,atk:100,mv:["Lanzallamas","Pisotón"]},{n:"Magmortar",s:"🔥",hp:75,atk:95,mv:["Lanzallamas","Rayo","Llamarada"]},{n:"Infernape",s:"🐒",hp:76,atk:104,mv:["Lanzallamas","Esfera aural","Puño trueno"]}]},
     {n:"Lucian",s:"🔮",lv:56,pk:[{n:"Mr. Mime",s:"🤡",hp:40,atk:45,mv:["Psíquico","Señuelo","Barrera"]},{n:"Espeon",s:"🔮",hp:65,atk:65,mv:["Psíquico","Mañana soleada"]},{n:"Bronzong",s:"🔔",hp:67,atk:89,mv:["Psíquico","Bola ferro","Extraer"]},{n:"Alakazam",s:"✨",hp:55,atk:50,mv:["Psíquico","Señuelo","Energibola"]},{n:"Gallade",s:"⚔️",hp:68,atk:125,mv:["Psico corte","Puño dinámico","Tajo umbrío"]}]},
     {n:"Cynthia (Campeón)",s:"🏆",lv:62,pk:[{n:"Spiritomb",s:"👁️",hp:50,atk:92,mv:["Bola sombra","Psíquico"]},{n:"Roserade",s:"🌹",hp:60,atk:70,mv:["Rayo solar","Drenadoras"]},{n:"Gastrodon",s:"🐚",hp:111,atk:83,mv:["Surf","Terremoto"]},{n:"Lucario",s:"🐺",hp:70,atk:110,mv:["Esfera aural","Puño dinámico"]},{n:"Milotic",s:"🐉",hp:95,atk:60,mv:["Surf","Recuperación","Ventisca"]},{n:"Garchomp",s:"🦈",hp:108,atk:130,mv:["Garra dragón","Terremoto","Fuego sagrado"]}]}
   ]}},
 ]},
 {r:"Unova",nodes:[
  {id:"u-cilan",n:"Gimnasio · Chili",i:"⚔️",t:"gym",s:"Fuego · Medalla Trío",cl:"bg",
   gd:{l:"Chili",badge:"Medalla Trío",type:"fuego",
       pk:[{n:"Patrat",s:"👁️",t:"normal",hp:45,atk:55,lv:12,mv:["Mordisco","Placaje","Gruñido"]},
           {n:"Pansear",s:"🔥",t:"fuego",hp:45,atk:53,lv:14,mv:["Ascuas","Arañazo","Mordisco"]}]}},
  {id:"u-lenora",n:"Gimnasio · Lenora",i:"⚔️",t:"gym",s:"Normal · Medalla Básica",cl:"bg",
   gd:{l:"Lenora",badge:"Medalla Básica",type:"normal",
       pk:[{n:"Herdier",s:"🐕",t:"normal",hp:65,atk:80,lv:18,mv:["Demolición","Trueno","Rapidez"]},
           {n:"Watchog",s:"🐿️",t:"normal",hp:60,atk:85,lv:20,mv:["Cuerpo a cuerpo","Hipnosis","Foco energía","Remate"]}]}},
  {id:"u-pinwheel",n:"Bosque Pinwheel",i:"🌲",t:"cave",s:"Sewaddle y Pidove",cl:"bc"},
  {id:"u-burgh",n:"Gimnasio · Burgh",i:"⚔️",t:"gym",s:"Bicho · Medalla Insecto",cl:"bg",
   gd:{l:"Burgh",badge:"Medalla Insecto",type:"bicho",
       pk:[{n:"Whirlipede",s:"🐛",t:"bicho",hp:40,atk:55,lv:21,mv:["Carga rodillo","Tóxico","Fortaleza"]},
           {n:"Dwebble",s:"🦀",t:"roca",hp:50,atk:65,lv:21,mv:["Lanzarrocas","Cuchillada","Fortaleza"]},
           {n:"Leavanny",s:"🌿",t:"bicho",hp:75,atk:103,lv:23,mv:["Hoja afilada","Golpe bis","X-Tijera","Fortaleza"]}]}},
  {id:"u-elesa",n:"Gimnasio · Elesa",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Voltaje",cl:"bg",
   gd:{l:"Elesa",badge:"Medalla Voltaje",type:"eléctrico",
       pk:[{n:"Emolga",s:"🐿️",t:"eléctrico",hp:55,atk:75,lv:25,mv:["Voltio cruel","Ataque ala","Rapidez"]},
           {n:"Emolga",s:"🐿️",t:"eléctrico",hp:55,atk:75,lv:25,mv:["Voltio cruel","Ataque ala","Parálisis"]},
           {n:"Zebstrika",s:"🦓",t:"eléctrico",hp:75,atk:100,lv:27,mv:["Voltio cruel","Doble puntapié","Puño trueno","Fustigación"]}]}},
  {id:"u-clay",n:"Gimnasio · Clay",i:"⚔️",t:"gym",s:"Tierra · Medalla Polvo",cl:"bg",
   gd:{l:"Clay",badge:"Medalla Polvo",type:"tierra",
       pk:[{n:"Krokorok",s:"🐊",t:"tierra",hp:60,atk:82,lv:29,mv:["Terremoto","Mordisco","Intimidar"]},
           {n:"Palpitoad",s:"🐸",t:"agua",hp:75,atk:65,lv:29,mv:["Terremoto","Surf","Bola hielo"]},
           {n:"Excadrill",s:"🦔",t:"tierra",hp:110,atk:135,lv:31,mv:["Terremoto","Cavar","Canto de roca","Tijera X"]}]}},
  {id:"u-skyla",n:"Gimnasio · Skyla",i:"⚔️",t:"gym",s:"Volador · Medalla Jet",cl:"bg",
   gd:{l:"Skyla",badge:"Medalla Jet",type:"volador",
       pk:[{n:"Swoobat",s:"🦇",t:"volador",hp:67,atk:57,lv:33,mv:["Aire cortante","Hipnosis","Ataque ala"]},
           {n:"Unfezant",s:"🕊️",t:"volador",hp:80,atk:105,lv:33,mv:["Ataque ala","Agilidad","Finta"]},
           {n:"Swanna",s:"🦢",t:"agua",hp:75,atk:87,lv:35,mv:["Hidrobomba","Ataque ala","Ventisca","Buceo"]}]}},
  {id:"u-twist-mtn",n:"Montaña Twist",i:"🏔️",t:"cave",s:"Axew y Drilbur",cl:"bc"},
  {id:"u-brycen",n:"Gimnasio · Brycen",i:"⚔️",t:"gym",s:"Hielo · Medalla Glacial",cl:"bg",
   gd:{l:"Brycen",badge:"Medalla Glacial",type:"hielo",
       pk:[{n:"Vanillish",s:"🍦",t:"hielo",hp:51,atk:65,lv:37,mv:["Ventisca","Cañón hielo","Espejo"]},
           {n:"Cryogonal",s:"❄️",t:"hielo",hp:70,atk:50,lv:37,mv:["Ventisca","Rayo hielo","Reflejo"]},
           {n:"Beartic",s:"🐻",t:"hielo",hp:95,atk:110,lv:39,mv:["Ventisca","Carámbano","Demolición","Cuerpo a cuerpo"]}]}},
  {id:"u-iris",n:"Gimnasio · Iris",i:"⚔️",t:"gym",s:"Dragón · Medalla Leyenda",cl:"bg",
   gd:{l:"Iris",badge:"Medalla Leyenda",type:"dragón",
       pk:[{n:"Fraxure",s:"🐉",t:"dragón",hp:65,atk:117,lv:41,mv:["Garra dragón","Cuchillada","Danza dragón"]},
           {n:"Druddigon",s:"🦎",t:"dragón",hp:77,atk:120,lv:41,mv:["Garra dragón","Demolición","Noche oscura"]},
           {n:"Haxorus",s:"🐲",t:"dragón",hp:76,atk:147,lv:43,mv:["Garra dragón","Triturar","Danza dragón","Puño dinámico"]}]}},
  {id:"alto-unova",n:"Alto Mando Unova",i:"👑",t:"league",s:"Shauntal · Grimsley · Caitlin · Marshal · Alder",cl:"bl",
   ld:{n:"Unova",tr:[
     {n:"Shauntal",s:"👻",lv:48,pk:[{n:"Cofagrigus",s:"⚰️",hp:58,atk:50,mv:["Bola sombra","Maldición"]},{n:"Chandelure",s:"🕯️",hp:60,atk:55,mv:["Lanzallamas","Bola sombra"]},{n:"Golurk",s:"🤖",hp:89,atk:124,mv:["Bola sombra","Terremoto"]},{n:"Jellicent",s:"👻",hp:100,atk:60,mv:["Surf","Bola sombra"]}]},
     {n:"Grimsley",s:"🌑",lv:48,pk:[{n:"Liepard",s:"🐆",hp:64,atk:88,mv:["Tajo umbrío","Acróbata"]},{n:"Scrafty",s:"🦎",hp:65,atk:90,mv:["Puño dinámico","Tajo umbrío"]},{n:"Krookodile",s:"🐊",hp:95,atk:117,mv:["Terremoto","Triturar"]},{n:"Bisharp",s:"⚔️",hp:65,atk:125,mv:["Tajo umbrío","Cola férrea"]}]},
     {n:"Caitlin",s:"🔮",lv:48,pk:[{n:"Musharna",s:"🔮",hp:116,atk:55,mv:["Psíquico","Hipnosis"]},{n:"Sigilyph",s:"🌀",hp:72,atk:58,mv:["Psíquico","Aire cortante"]},{n:"Reuniclus",s:"🧬",hp:110,atk:65,mv:["Psíquico","Esfera aural"]},{n:"Gothitelle",s:"🎀",hp:70,atk:55,mv:["Psíquico","Señuelo"]}]},
     {n:"Marshal",s:"💪",lv:48,pk:[{n:"Throh",s:"💪",hp:120,atk:100,mv:["Puño dinámico","Cuerpo a cuerpo"]},{n:"Sawk",s:"🥋",hp:75,atk:125,mv:["Golpe kárate","Puño dinámico"]},{n:"Mienshao",s:"🥋",hp:65,atk:125,mv:["Hi Jump Kick","Puño dinámico"]},{n:"Conkeldurr",s:"💪",hp:105,atk:140,mv:["Puño dinámico","Cuerpo a cuerpo"]}]},
     {n:"Alder (Campeón)",s:"🏆",lv:54,pk:[{n:"Accelgor",s:"🐛",hp:80,atk:70,mv:["Golpe bis","Pupa"]},{n:"Bouffalant",s:"🦬",hp:95,atk:110,mv:["Cabezazo","Golpe megacuerno"]},{n:"Druddigon",s:"🦎",hp:77,atk:120,mv:["Garra dragón","Demolición"]},{n:"Vanilluxe",s:"🍦",hp:71,atk:95,mv:["Ventisca","Rayo hielo"]},{n:"Escavalier",s:"🛡️",hp:70,atk:135,mv:["Megacuerno","Cola férrea"]},{n:"Volcarona",s:"🦋",hp:85,atk:60,mv:["Rayo solar","Bola de fuego"]}]}
   ]}},
 ]},
 {r:"Kalos",nodes:[
  {id:"k-viola",n:"Gimnasio · Viola",i:"⚔️",t:"gym",s:"Bicho · Medalla Cimera",cl:"bg",
   gd:{l:"Viola",badge:"Medalla Cimera",type:"bicho",
       pk:[{n:"Surskit",s:"🕷️",t:"agua",hp:40,atk:30,lv:10,mv:["Pistola agua","Burbuja","Rayo burbuja"]},
           {n:"Vivillon",s:"🦋",t:"bicho",hp:80,atk:52,lv:12,mv:["Polvo veneno","Ciclón","Zumbido","Paralizador"]}]}},
  {id:"k-grant",n:"Gimnasio · Grant",i:"⚔️",t:"gym",s:"Roca · Medalla Acantilado",cl:"bg",
   gd:{l:"Grant",badge:"Medalla Acantilado",type:"roca",
       pk:[{n:"Amaura",s:"🦕",t:"roca",hp:77,atk:59,lv:25,mv:["Rayo hielo","Lanzarrocas","Frío polar"]},
           {n:"Tyrunt",s:"🦖",t:"roca",hp:58,atk:89,lv:25,mv:["Cabeza de roca","Mordisco","Lanzarrocas"]}]}},
  {id:"k-korrina",n:"Gimnasio · Korrina",i:"⚔️",t:"gym",s:"Lucha · Medalla Choque",cl:"bg",
   gd:{l:"Korrina",badge:"Medalla Choque",type:"lucha",
       pk:[{n:"Mienfoo",s:"🥋",t:"lucha",hp:45,atk:85,lv:29,mv:["Patada baja","Puño dinámico","Rapidez"]},
           {n:"Machoke",s:"💪",t:"lucha",hp:80,atk:80,lv:28,mv:["Puño dinámico","Golpe kárate","Cuerpo a cuerpo"]},
           {n:"Lucario",s:"🐺",t:"lucha",hp:70,atk:110,lv:32,mv:["Esfera aural","Velocidad extrema","Puño dinámico","Maquinación"]}]}},
  {id:"k-ramos",n:"Gimnasio · Ramos",i:"⚔️",t:"gym",s:"Planta · Medalla Hierba",cl:"bg",
   gd:{l:"Ramos",badge:"Medalla Hierba",type:"planta",
       pk:[{n:"Jumpluff",s:"🌸",t:"planta",hp:75,atk:55,lv:30,mv:["Hoja afilada","Esporasueño","Acrobacia"]},
           {n:"Weepinbell",s:"🌿",t:"planta",hp:65,atk:90,lv:31,mv:["Hoja afilada","Polvo veneno","Drenadoras"]},
           {n:"Gogoat",s:"🐐",t:"planta",hp:123,atk:100,lv:34,mv:["Terremoto","Hoja afilada","Leña"]}]}},
  {id:"k-clemont",n:"Gimnasio · Clemont",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Voltio",cl:"bg",
   gd:{l:"Clemont",badge:"Medalla Voltio",type:"eléctrico",
       pk:[{n:"Emolga",s:"🐿️",t:"eléctrico",hp:55,atk:75,lv:35,mv:["Voltio cruel","Ataque ala","Rapidez"]},
           {n:"Magneton",s:"🔩",t:"eléctrico",hp:50,atk:60,lv:35,mv:["Trueno","Sónico","Defensa metálica"]},
           {n:"Heliolisk",s:"☀️",t:"eléctrico",hp:62,atk:55,lv:37,mv:["Voltio cruel","Chispazo","Hidropulso","Agilidad"]}]}},
  {id:"k-cave",n:"Cueva Conector",i:"🕳️",t:"cave",s:"Geodude y Zubat",cl:"bc"},
  {id:"k-valerie",n:"Gimnasio · Valerie",i:"⚔️",t:"gym",s:"Hada · Medalla Encanto",cl:"bg",
   gd:{l:"Valerie",badge:"Medalla Encanto",type:"hada",
       pk:[{n:"Mawile",s:"🦷",t:"acero",hp:50,atk:85,lv:38,mv:["Mordisco","Beso drenante","Juego sucio"]},
           {n:"Mr. Mime",s:"🤡",t:"psíquico",hp:40,atk:45,lv:39,mv:["Psíquico","Encanto","Barrera","Señuelo"]},
           {n:"Sylveon",s:"🎀",t:"hada",hp:95,atk:65,lv:42,mv:["Voz cautivadora","Beso drenante","Atracción","Encanto"]}]}},
  {id:"k-olympia",n:"Gimnasio · Olympia",i:"⚔️",t:"gym",s:"Psíquico · Medalla Psique",cl:"bg",
   gd:{l:"Olympia",badge:"Medalla Psique",type:"psíquico",
       pk:[{n:"Sigilyph",s:"🌀",t:"psíquico",hp:72,atk:58,lv:44,mv:["Psíquico","Aire cortante","Carámbano","Señuelo"]},
           {n:"Slowking",s:"👑",t:"psíquico",hp:95,atk:75,lv:45,mv:["Psíquico","Surf","Amnesia","Fuego sagrado"]},
           {n:"Meowstic",s:"😺",t:"psíquico",hp:74,atk:48,lv:48,mv:["Psíquico","Señuelo","Agilidad","Barrera"]}]}},
  {id:"k-wulfric",n:"Gimnasio · Wulfric",i:"⚔️",t:"gym",s:"Hielo · Medalla Iceberg",cl:"bg",
   gd:{l:"Wulfric",badge:"Medalla Iceberg",type:"hielo",
       pk:[{n:"Abomasnow",s:"🌲",t:"planta",hp:90,atk:92,lv:56,mv:["Ventisca","Terremoto","Madera martillo","Cañón hielo"]},
           {n:"Cryogonal",s:"❄️",t:"hielo",hp:70,atk:50,lv:55,mv:["Ventisca","Rayo hielo","Reflejo","Neblina"]},
           {n:"Avalugg",s:"🧊",t:"hielo",hp:95,atk:117,lv:59,mv:["Avalancha","Defensa","Fortaleza","Cuerpo a cuerpo"]}]}},
  {id:"alto-kalos",n:"Alto Mando Kalos",i:"👑",t:"league",s:"Malva · Siebold · Wikstrom · Drasna · Diantha",cl:"bl",
   ld:{n:"Kalos",tr:[
     {n:"Malva",s:"🔥",lv:63,pk:[{n:"Pyroar",s:"🦁",hp:86,atk:68,mv:["Lanzallamas","Hipervoz"]},{n:"Torkoal",s:"🐢",hp:70,atk:85,mv:["Lanzallamas","Erupción"]},{n:"Chandelure",s:"🕯️",hp:60,atk:55,mv:["Lanzallamas","Bola sombra"]},{n:"Talonflame",s:"🦅",hp:78,atk:81,mv:["Ataque ala","Brazo Banda"]}]},
     {n:"Siebold",s:"💧",lv:63,pk:[{n:"Clawitzer",s:"🦐",hp:71,atk:73,mv:["Pulso oscuro","Surf"]},{n:"Gyarados",s:"🐉",hp:95,atk:125,mv:["Hidrobomba","Acua jet"]},{n:"Starmie",s:"🌟",hp:60,atk:75,mv:["Hidrobomba","Psíquico"]},{n:"Barbaracle",s:"🪸",hp:72,atk:105,mv:["Tajo umbio","Surf"]}]},
     {n:"Wikstrom",s:"⚔️",lv:63,pk:[{n:"Klefki",s:"🗝️",hp:57,atk:80,mv:["Cola férrea","Abuso"]},{n:"Probopass",s:"🧲",hp:60,atk:55,mv:["Cola férrea","Canto de roca"]},{n:"Scizor",s:"✂️",hp:70,atk:130,mv:["Tijera X","Bola de bala"]},{n:"Aegislash",s:"⚔️",hp:60,atk:50,mv:["Bola sombra","Cola férrea"]}]},
     {n:"Drasna",s:"🐲",lv:63,pk:[{n:"Dragalge",s:"🐉",hp:65,atk:75,mv:["Pulso dragón","Energibola"]},{n:"Druddigon",s:"🦎",hp:77,atk:120,mv:["Garra dragón","Noche oscura"]},{n:"Altaria",s:"☁️",hp:75,atk:70,mv:["Garra dragón","Pétalo danza"]},{n:"Noivern",s:"🦇",hp:85,atk:70,mv:["Pulso dragón","Aire cortante"]}]},
     {n:"Diantha (Campeón)",s:"🏆",lv:68,pk:[{n:"Hawlucha",s:"🦅",hp:78,atk:92,mv:["Hi Jump Kick","Ataque ala"]},{n:"Tyrantrum",s:"🦖",hp:82,atk:121,mv:["Cabeza de roca","Garra dragón"]},{n:"Aurorus",s:"🦕",hp:123,atk:77,mv:["Ventisca","Rayo hielo"]},{n:"Gourgeist",s:"🎃",hp:65,atk:90,mv:["Bola sombra","Hoja afilada"]},{n:"Goodra",s:"🐉",hp:100,atk:80,mv:["Pulso dragón","Hidropulso"]},{n:"Gardevoir",s:"🌸",hp:68,atk:65,mv:["Psíquico","Voz cautivadora","Esfera aural"]}]}
   ]}},
 ]},
 {r:"Alola",nodes:[
  {id:"a-hala",n:"Kahuna · Hala",i:"🌺",t:"gym",s:"Lucha · Gran Prueba Melemele",cl:"bg",
   gd:{l:"Hala",badge:"Gran Prueba Melemele",type:"lucha",
       pk:[{n:"Mankey",s:"🐒",t:"lucha",hp:40,atk:80,lv:17,mv:["Puño dinámico","Patada baja","Rabia"]},
           {n:"Crabrawler",s:"🦀",t:"lucha",hp:55,atk:82,lv:17,mv:["Puño dinámico","Demolición","Golpe bis"]},
           {n:"Hariyama",s:"💪",t:"lucha",hp:144,atk:80,lv:20,mv:["Golpe kárate","Aguante","Demolición","Puño dinámico"]}]}},
  {id:"a-wela",n:"Volcán Wela",i:"🌋",t:"cave",s:"Marowak y Salazzle",cl:"bc"},
  {id:"a-olivia",n:"Kahuna · Olivia",i:"🌺",t:"gym",s:"Roca · Gran Prueba Akala",cl:"bg",
   gd:{l:"Olivia",badge:"Gran Prueba Akala",type:"roca",
       pk:[{n:"Nosepass",s:"🧲",t:"roca",hp:30,atk:45,lv:26,mv:["Lanzarrocas","Fortaleza","Trueno"]},
           {n:"Boldore",s:"🪨",t:"roca",hp:70,atk:105,lv:26,mv:["Lanzarrocas","Defensiva","Pisotón"]},
           {n:"Lycanroc",s:"🐺",t:"roca",hp:75,atk:115,lv:27,mv:["Canto de roca","Mordisco","Aceleración","Roca afilada"]}]}},
  {id:"a-lush-jungle",n:"Jungla Lozana",i:"🌴",t:"cave",s:"Fomantis y Bounsweet",cl:"bc"},
  {id:"a-nanu",n:"Kahuna · Nanu",i:"🌺",t:"gym",s:"Siniestro · Gran Prueba Ula-Ula",cl:"bg",
   gd:{l:"Nanu",badge:"Gran Prueba Ula-Ula",type:"siniestro",
       pk:[{n:"Sableye",s:"💎",t:"fantasma",hp:50,atk:75,lv:43,mv:["Bola sombra","Mordisco","Truco"]},
           {n:"Krokorok",s:"🐊",t:"tierra",hp:60,atk:82,lv:43,mv:["Terremoto","Crunch","Intimidar"]},
           {n:"Persian",s:"😼",t:"normal",hp:65,atk:70,lv:45,mv:["Triturar","Juego sucio","Finta"]}]}},
  {id:"a-hapu",n:"Kahuna · Hapu",i:"🌺",t:"gym",s:"Tierra · Gran Prueba Poni",cl:"bg",
   gd:{l:"Hapu",badge:"Gran Prueba Poni",type:"tierra",
       pk:[{n:"Dugtrio",s:"🕳️",t:"tierra",hp:35,atk:100,lv:51,mv:["Terremoto","Roca afilada","Ataque rápido"]},
           {n:"Gastrodon",s:"🐚",t:"agua",hp:111,atk:83,lv:51,mv:["Terremoto","Surf","Lodo barrizal"]},
           {n:"Flygon",s:"🐍",t:"dragón",hp:80,atk:100,lv:51,mv:["Terremoto","Garra dragón","Fuego sagrado"]},
           {n:"Mudsdale",s:"🐴",t:"tierra",hp:100,atk:125,lv:53,mv:["Terremoto","Pisotón","Cuerpo a cuerpo","Defensa"]}]}},
  {id:"alto-alola",n:"Liga Pokémon Alola",i:"👑",t:"league",s:"Hala · Olivia · Acerola · Kahili · Kukui",cl:"bl",
   ld:{n:"Alola",tr:[
     {n:"Hala",s:"💪",lv:54,pk:[{n:"Hariyama",s:"💪",hp:144,atk:80,mv:["Golpe kárate","Aguante"]},{n:"Bewear",s:"🐻",hp:120,atk:125,mv:["Puño dinámico","Cuerpo a cuerpo"]},{n:"Crabominable",s:"🦀",hp:97,atk:132,mv:["Puño hielo","Puño dinámico"]},{n:"Poliwrath",s:"💧",hp:90,atk:95,mv:["Surf","Puño dinámico"]}]},
     {n:"Olivia",s:"🪨",lv:56,pk:[{n:"Relicanth",s:"🐟",hp:100,atk:90,mv:["Surf","Canto de roca"]},{n:"Carbink",s:"💎",hp:50,atk:50,mv:["Canto de roca","Defensa roca"]},{n:"Golem",s:"🪨",hp:80,atk:120,mv:["Terremoto","Lanzarrocas","Explosión"]},{n:"Lycanroc",s:"🐺",hp:75,atk:115,mv:["Canto de roca","Mordisco"]}]},
     {n:"Acerola",s:"👻",lv:58,pk:[{n:"Golisopod",s:"🦀",hp:75,atk:125,mv:["Primera impresión","Navajada"]},{n:"Dhelmise",s:"⚓",hp:70,atk:131,mv:["Giro sombrío","Latigazo"]},{n:"Palossand",s:"🏖️",hp:85,atk:75,mv:["Bola sombra","Terremoto"]},{n:"Drifblim",s:"🎈",hp:150,atk:80,mv:["Bola sombra","Vendaval"]},{n:"Mimikyu",s:"👹",hp:55,atk:90,mv:["Bola sombra","Sombra ardiente"]}]},
     {n:"Kahili",s:"🏌️",lv:58,pk:[{n:"Braviary",s:"🦅",hp:100,atk:123,mv:["Vendaval","Machada"]},{n:"Mandibuzz",s:"🦅",hp:110,atk:65,mv:["Tormento","Tajo umbrío"]},{n:"Oricorio",s:"🌺",hp:75,atk:70,mv:["Acrobacia","Señuelo"]},{n:"Toucannon",s:"🐦",hp:80,atk:120,mv:["Picotazo","Hipervoz"]},{n:"Skarmory",s:"🐦",hp:65,atk:80,mv:["Canto de roca","Ataque ala"]}]},
     {n:"Kukui (Campeón)",s:"🏆",lv:65,pk:[{n:"Lycanroc",s:"🐺",hp:75,atk:115,mv:["Canto de roca","Mordisco"]},{n:"Braviary",s:"🦅",hp:100,atk:123,mv:["Vendaval","Machada"]},{n:"Magnezone",s:"🔩",hp:70,atk:70,mv:["Trueno","Cola de hierro"]},{n:"Snorlax",s:"🐻",hp:160,atk:110,mv:["Machada","Cuerpo a cuerpo"]},{n:"Crabominable",s:"🦀",hp:97,atk:132,mv:["Puño hielo","Puño dinámico"]},{n:"Incineroar",s:"🐯",hp:95,atk:115,mv:["Lanzallamas","Demolición"]}]}
   ]}},
 ]},
 {r:"Galar",nodes:[
  {id:"g-milo",n:"Gimnasio · Milo",i:"⚔️",t:"gym",s:"Planta · Medalla Hierba",cl:"bg",
   gd:{l:"Milo",badge:"Medalla Hierba",type:"planta",
       pk:[{n:"Gossifleur",s:"🌸",t:"planta",hp:40,atk:40,lv:19,mv:["Hoja afilada","Esporasueño","Drenadoras"]},
           {n:"Eldegoss",s:"🌿",t:"planta",hp:60,atk:50,lv:20,mv:["Energibola","Esporasueño","Drenadoras","Síntesis"]}]}},
  {id:"g-nessa",n:"Gimnasio · Nessa",i:"⚔️",t:"gym",s:"Agua · Medalla Mar",cl:"bg",
   gd:{l:"Nessa",badge:"Medalla Mar",type:"agua",
       pk:[{n:"Goldeen",s:"🐠",t:"agua",hp:45,atk:67,lv:22,mv:["Pistola agua","Cornada","Golpe de cola"]},
           {n:"Arrokuda",s:"🐟",t:"agua",hp:41,atk:63,lv:23,mv:["Pistola agua","Acua jet","Mordisco"]},
           {n:"Drednaw",s:"🐢",t:"agua",hp:90,atk:100,lv:24,mv:["Hidrobomba","Mordisco","Lanzarrocas","Cuerpo a cuerpo"]}]}},
  {id:"g-kabu",n:"Gimnasio · Kabu",i:"⚔️",t:"gym",s:"Fuego · Medalla Fuego",cl:"bg",
   gd:{l:"Kabu",badge:"Medalla Fuego",type:"fuego",
       pk:[{n:"Ninetales",s:"🦊",t:"fuego",hp:73,atk:76,lv:25,mv:["Lanzallamas","Llamarada","Fuego fatuo"]},
           {n:"Arcanine",s:"🦁",t:"fuego",hp:90,atk:110,lv:25,mv:["Lanzallamas","Extremevelocidad","Fuego sagrado"]},
           {n:"Centiskorch",s:"🐛",t:"fuego",hp:100,atk:115,lv:27,mv:["Rueda de fuego","Demolición","Cuerpo a cuerpo"]}]}},
  {id:"g-wild-area",n:"Área Silvestre",i:"🌄",t:"cave",s:"Wooloo y Yamper",cl:"bc"},
  {id:"g-bea",n:"Gimnasio · Bea",i:"⚔️",t:"gym",s:"Lucha · Medalla Puño",cl:"bg",
   gd:{l:"Bea",badge:"Medalla Puño",type:"lucha",
       pk:[{n:"Hitmontop",s:"🌀",t:"lucha",hp:50,atk:95,lv:34,mv:["Patada triple","Demolición","Rapidez"]},
           {n:"Pangoro",s:"🐼",t:"lucha",hp:95,atk:124,mv:["Demolición","Machada","Mordisco"]},
           {n:"Machamp",s:"💪",t:"lucha",hp:90,atk:130,lv:35,mv:["Puño dinámico","Golpe kárate","Cuerpo a cuerpo"]},
           {n:"Sirfetch'd",s:"🦆",t:"lucha",hp:62,atk:135,lv:36,mv:["Ataque furia","Demolición","Cola férea"]}]}},
  {id:"g-opal",n:"Gimnasio · Opal",i:"⚔️",t:"gym",s:"Hada · Medalla Hada",cl:"bg",
   gd:{l:"Opal",badge:"Medalla Hada",type:"hada",
       pk:[{n:"Weezing",s:"💨",t:"veneno",hp:65,atk:90,lv:36,mv:["Niebla tóxica","Explosión","Destino"]},
           {n:"Mawile",s:"🦷",t:"acero",hp:50,atk:85,lv:36,mv:["Mordisco","Beso drenante","Juego sucio"]},
           {n:"Togekiss",s:"🕊️",t:"hada",hp:85,atk:50,lv:38,mv:["Vuelo","Voz cautivadora","Fuego sagrado","Señuelo"]}]}},
  {id:"g-gordie",n:"Gimnasio · Gordie",i:"⚔️",t:"gym",s:"Roca · Medalla Piedra",cl:"bg",
   gd:{l:"Gordie",badge:"Medalla Piedra",type:"roca",
       pk:[{n:"Barbaracle",s:"🪸",t:"roca",hp:72,atk:105,lv:40,mv:["Canto de roca","Navajada","Surf"]},
           {n:"Shuckle",s:"🐢",t:"roca",hp:20,atk:10,lv:40,mv:["Tóxico","Defensa roca","Amarrar"]},
           {n:"Stonjourner",s:"🪨",t:"roca",hp:100,atk:125,lv:41,mv:["Canto de roca","Terremoto","Pisotón"]},
           {n:"Coalossal",s:"🪨",t:"roca",hp:110,atk:80,lv:42,mv:["Canto de roca","Pirotecnia","Cuerpo a cuerpo"]}]}},
  {id:"g-raihan",n:"Gimnasio · Raihan",i:"⚔️",t:"gym",s:"Dragón · Medalla Dragón",cl:"bg",
   gd:{l:"Raihan",badge:"Medalla Dragón",type:"dragón",
       pk:[{n:"Flygon",s:"🐍",t:"dragón",hp:80,atk:100,lv:46,mv:["Garra dragón","Terremoto","Fuego sagrado","Tormenta de arena"]},
           {n:"Gigalith",s:"🪨",t:"roca",hp:85,atk:135,lv:46,mv:["Lanzarrocas","Terremoto","Erupción"]},
           {n:"Sandaconda",s:"🐍",t:"tierra",hp:72,atk:107,lv:46,mv:["Tormenta de arena","Terremoto","Envolver"]},
           {n:"Duraludon",s:"🔩",t:"dragón",hp:70,atk:95,lv:48,mv:["Garra dragón","Cola férrea","Pulso oscuro","Hiperrayo"]}]}},
  {id:"alto-galar",n:"Liga Pokémon Galar",i:"👑",t:"league",s:"Marnie · Bede · Hop · Leon",cl:"bl",
   ld:{n:"Galar",tr:[
     {n:"Marnie",s:"🌑",lv:47,pk:[{n:"Morpeko",s:"🐭",hp:58,atk:95,mv:["Aura oscura","Impactrueno"]},{n:"Liepard",s:"🐆",hp:64,atk:88,mv:["Tajo umbrío","Acróbata"]},{n:"Toxicroak",s:"🐸",hp:83,atk:106,mv:["Puño veneno","Golpe bajo"]},{n:"Scrafty",s:"🦎",hp:65,atk:90,mv:["Puño dinámico","Tajo umbrío"]},{n:"Grimmsnarl",s:"🤡",hp:95,atk:120,mv:["Puño dinámico","Triturar"]}]},
     {n:"Bede",s:"🎀",lv:51,pk:[{n:"Hatterene",s:"🎩",hp:57,atk:90,mv:["Psíquico","Voz cautivadora"]},{n:"Gardevoir",s:"🌸",hp:68,atk:65,mv:["Psíquico","Voz cautivadora"]},{n:"Mr. Rime",s:"🤡",hp:80,atk:85,mv:["Psíquico","Golpe bis"]},{n:"Galarian Rapidash",s:"🦄",hp:65,atk:100,mv:["Psico corte","Voz cautivadora"]}]},
     {n:"Hop",s:"🐑",lv:52,pk:[{n:"Rillaboom",s:"🎵",hp:100,atk:125,mv:["Tamborrada","Terremoto"]},{n:"Talonflame",s:"🦅",hp:78,atk:81,mv:["Ataque ala","Brazo banda"]},{n:"Snorlax",s:"🐻",hp:160,atk:110,mv:["Machada","Cuerpo a cuerpo"]},{n:"Pincurchin",s:"🦔",hp:48,atk:101,mv:["Impactrueno","Chispazo"]},{n:"Corviknight",s:"🐦",hp:98,atk:87,mv:["Ataque ala","Cola férrea"]}]},
     {n:"Leon (Campeón)",s:"🏆",lv:62,pk:[{n:"Aegislash",s:"⚔️",hp:60,atk:50,mv:["Bola sombra","Cola férrea"]},{n:"Haxorus",s:"🐲",hp:76,atk:147,mv:["Garra dragón","Triturar"]},{n:"Dragapult",s:"🐉",hp:88,atk:120,mv:["Fantasma de dragón","Sombra bola"]},{n:"Mr. Rime",s:"🤡",hp:80,atk:85,mv:["Psíquico","Golpe bis"]},{n:"Rhyperior",s:"🦏",hp:115,atk:140,mv:["Terremoto","Canto de roca"]},{n:"Charizard",s:"🔥",hp:78,atk:84,mv:["Lanzallamas","Vendaval","Terremoto","Ascuas"]}]}
   ]}},
 ]},
 {r:"Paldea",nodes:[
  {id:"p-katy",n:"Gimnasio · Katy",i:"⚔️",t:"gym",s:"Bicho · Medalla Bicho",cl:"bg",
   gd:{l:"Katy",badge:"Medalla Bicho",type:"bicho",
       pk:[{n:"Nymble",s:"🦗",t:"bicho",hp:33,atk:67,lv:14,mv:["Golpe bis","Cuchillada","Aceleración"]},
           {n:"Tarountula",s:"🕷️",t:"bicho",hp:55,atk:50,lv:14,mv:["Picadura","Canto","Seda pegajosa"]},
           {n:"Teddiursa",s:"🐻",t:"normal",hp:60,atk:80,lv:15,mv:["Demolición","Cuerpo a cuerpo","Buena noche"]}]}},
  {id:"p-brassius",n:"Gimnasio · Brassius",i:"⚔️",t:"gym",s:"Planta · Medalla Verde",cl:"bg",
   gd:{l:"Brassius",badge:"Medalla Verde",type:"planta",
       pk:[{n:"Petilil",s:"🌸",t:"planta",hp:45,atk:35,lv:16,mv:["Megaagotar","Esporasueño","Drenadoras"]},
           {n:"Smoliv",s:"🫒",t:"planta",hp:41,atk:35,lv:16,mv:["Energibola","Drenadoras","Aceite"]},
           {n:"Sudowoodo",s:"🌳",t:"roca",hp:70,atk:100,lv:17,mv:["Lanzarrocas","Demolición","Fortaleza"]}]}},
  {id:"p-east-paldea",n:"Paldea Este",i:"🌿",t:"route",s:"Lechonk y Tarountula",cl:"bgr"},
  {id:"p-iono",n:"Gimnasio · Iono",i:"⚔️",t:"gym",s:"Eléctrico · Medalla Voltaje",cl:"bg",
   gd:{l:"Iono",badge:"Medalla Voltaje",type:"eléctrico",
       pk:[{n:"Wattrel",s:"🐦",t:"eléctrico",hp:40,atk:40,lv:23,mv:["Impactrueno","Ataque ala","Aceleración"]},
           {n:"Luxio",s:"⚡",t:"eléctrico",hp:60,atk:85,lv:23,mv:["Voltio cruel","Mordisco","Rapidez"]},
           {n:"Bellibolt",s:"🐸",t:"eléctrico",hp:109,atk:64,lv:24,mv:["Chispazo","Surf","Cuerpo a cuerpo"]}]}},
  {id:"p-kofu",n:"Gimnasio · Kofu",i:"⚔️",t:"gym",s:"Agua · Medalla Agua",cl:"bg",
   gd:{l:"Kofu",badge:"Medalla Agua",type:"agua",
       pk:[{n:"Veluza",s:"🐟",t:"agua",hp:90,atk:102,lv:29,mv:["Pistola agua","Corte","Impacto"]},
           {n:"Wugtrio",s:"🐛",t:"agua",hp:35,atk:100,lv:29,mv:["Surf","Excavar","Ataque rápido"]},
           {n:"Crabominable",s:"🦀",t:"agua",hp:97,atk:132,lv:30,mv:["Hidrobomba","Puño dinámico","Puño hielo"]}]}},
  {id:"p-larry",n:"Gimnasio · Larry",i:"⚔️",t:"gym",s:"Normal · Medalla Normal",cl:"bg",
   gd:{l:"Larry",badge:"Medalla Normal",type:"normal",
       pk:[{n:"Komala",s:"🐨",t:"normal",hp:65,atk:115,lv:35,mv:["Demolición","Cuerpo a cuerpo","Bostezo"]},
           {n:"Dudunsparce",s:"🐍",t:"normal",hp:125,atk:92,lv:36,mv:["Demolición","Machazo","Cuerpo a cuerpo","Hiper voz"]}]}},
  {id:"p-glaseado",n:"Monte Glaseado",i:"🏔️",t:"cave",s:"Cetoddle y Frigibax",cl:"bc"},
  {id:"p-ryme",n:"Gimnasio · Ryme",i:"⚔️",t:"gym",s:"Fantasma · Medalla Fantasma",cl:"bg",
   gd:{l:"Ryme",badge:"Medalla Fantasma",type:"fantasma",
       pk:[{n:"Banette",s:"🎎",t:"fantasma",hp:64,atk:115,lv:41,mv:["Bola sombra","Maldición","Asombro"]},
           {n:"Mimikyu",s:"👹",t:"fantasma",hp:55,atk:90,lv:41,mv:["Bola sombra","Golpe fantasma","Languidez"]},
           {n:"Houndstone",s:"💀",t:"fantasma",hp:72,atk:101,lv:42,mv:["Bola sombra","Represalia","Mordisco"]},
           {n:"Toxtricity",s:"🎸",t:"eléctrico",hp:75,atk:98,lv:42,mv:["Trueno","Bola sombra","Destructor"]}]}},
  {id:"p-tulip",n:"Gimnasio · Tulip",i:"⚔️",t:"gym",s:"Psíquico · Medalla Psíquico",cl:"bg",
   gd:{l:"Tulip",badge:"Medalla Psíquico",type:"psíquico",
       pk:[{n:"Farigiraf",s:"🦒",t:"psíquico",hp:120,atk:60,lv:44,mv:["Psíquico","Amnesia","Impacto fuerza"]},
           {n:"Gardevoir",s:"🌸",t:"psíquico",hp:68,atk:65,lv:44,mv:["Psíquico","Beso drenante","Voz cautivadora"]},
           {n:"Espathra",s:"🦚",t:"psíquico",hp:104,atk:61,lv:45,mv:["Psíquico","Plumas","Rapidez","Señuelo"]},
           {n:"Florges",s:"🌺",t:"hada",hp:78,atk:65,lv:45,mv:["Voz cautivadora","Beso drenante","Drenadoras"]}]}},
  {id:"p-grusha",n:"Gimnasio · Grusha",i:"⚔️",t:"gym",s:"Hielo · Medalla Hielo",cl:"bg",
   gd:{l:"Grusha",badge:"Medalla Hielo",type:"hielo",
       pk:[{n:"Frosmoth",s:"🦋",t:"hielo",hp:70,atk:65,lv:47,mv:["Ventisca","Polvo hielo","Golpe bis"]},
           {n:"Beartic",s:"🐻",t:"hielo",hp:95,atk:110,lv:47,mv:["Ventisca","Demolición","Carámbano"]},
           {n:"Cetitan",s:"🐋",t:"hielo",hp:170,atk:113,lv:48,mv:["Avalancha","Carámbano","Cuerpo a cuerpo","Amnesia"]},
           {n:"Altaria",s:"☁️",t:"volador",hp:75,atk:70,lv:48,mv:["Garra dragón","Ventisca","Pétalo danza"]}]}},
  {id:"alto-paldea",n:"Liga Pokémon Paldea",i:"👑",t:"league",s:"Rika · Poppy · Larry · Hassel · Geeta",cl:"bl",
   ld:{n:"Paldea",tr:[
     {n:"Rika",s:"🪨",lv:57,pk:[{n:"Whiscash",s:"🐟",hp:110,atk:78,mv:["Terremoto","Surf"]},{n:"Camerupt",s:"🌋",hp:70,atk:100,mv:["Erupción","Terremoto"]},{n:"Donphan",s:"🐘",hp:90,atk:120,mv:["Terremoto","Colmillo de roca"]},{n:"Clodsire",s:"🐸",hp:130,atk:75,mv:["Terremoto","Tóxico"]},{n:"Garchomp",s:"🦈",hp:108,atk:130,mv:["Garra dragón","Terremoto"]}]},
     {n:"Poppy",s:"⚙️",lv:58,pk:[{n:"Copperajah",s:"🐘",hp:122,atk:130,mv:["Cola férrea","Pisotón"]},{n:"Magnezone",s:"🔩",hp:70,atk:70,mv:["Trueno","Cola férrea"]},{n:"Corviknight",s:"🐦",hp:98,atk:87,mv:["Ataque ala","Cola férrea"]},{n:"Bronzong",s:"🔔",hp:67,atk:89,mv:["Psíquico","Bola ferro"]},{n:"Tinkaton",s:"🔨",hp:85,atk:75,mv:["Hiper ataque","Cola férrea"]}]},
     {n:"Larry",s:"🐦",lv:60,pk:[{n:"Staraptor",s:"🦅",hp:85,atk:120,mv:["Vendaval","Doble filo"]},{n:"Flamigo",s:"🦩",hp:82,atk:115,mv:["Patada baja","Ataque ala"]},{n:"Altaria",s:"☁️",hp:75,atk:70,mv:["Garra dragón","Pétalo danza"]},{n:"Tropius",s:"🦕",hp:99,atk:68,mv:["Hoja afilada","Vendaval"]},{n:"Oricorio",s:"🌺",hp:75,atk:70,mv:["Acrobacia","Vendaval"]}]},
     {n:"Hassel",s:"🐲",lv:62,pk:[{n:"Noivern",s:"🦇",hp:85,atk:70,mv:["Pulso dragón","Aire cortante"]},{n:"Flapple",s:"🍎",hp:70,atk:110,mv:["Garra dragón","Manzanada"]},{n:"Haxorus",s:"🐲",hp:76,atk:147,mv:["Garra dragón","Triturar"]},{n:"Dragalge",s:"🐉",hp:65,atk:75,mv:["Pulso dragón","Tóxico"]},{n:"Baxcalibur",s:"🐉",hp:115,atk:145,mv:["Garra dragón","Carámbano"]}]},
     {n:"Geeta (Campeón)",s:"🏆",lv:64,pk:[{n:"Espathra",s:"🦚",hp:104,atk:61,mv:["Psíquico","Rapidez"]},{n:"Veluza",s:"🐟",hp:90,atk:102,mv:["Pistola agua","Psico corte"]},{n:"Avalugg",s:"🧊",hp:95,atk:117,mv:["Avalancha","Cuerpo a cuerpo"]},{n:"Kingambit",s:"⚔️",hp:100,atk:135,mv:["Tajo umbrío","Cola férrea"]},{n:"Gogoat",s:"🐐",hp:123,atk:100,mv:["Hoja afilada","Terremoto"]},{n:"Glimmora",s:"💎",hp:83,atk:55,mv:["Roca afilada","Polvo tóxico"]}]}
   ]}},
 ]},
];

// ── TYPE EFFECTIVENESS TABLE ────────────────────────────────────────────────
// TYPE_CHART[attackType][defenderType] = multiplier (0=inmune, 0.5=débil, 2=efectivo)
const TYPE_CHART={
  normal:   {roca:0.5,acero:0.5,fantasma:0},
  fuego:    {fuego:0.5,agua:0.5,roca:0.5,dragón:0.5, planta:2,hielo:2,bicho:2,acero:2},
  agua:     {agua:0.5,planta:0.5,dragón:0.5,          fuego:2,tierra:2,roca:2},
  eléctrico:{eléctrico:0.5,planta:0.5,dragón:0.5,     agua:2,volador:2, tierra:0},
  planta:   {fuego:0.5,planta:0.5,veneno:0.5,volador:0.5,bicho:0.5,dragón:0.5,acero:0.5, agua:2,tierra:2,roca:2},
  hielo:    {agua:0.5,hielo:0.5,acero:0.5,fuego:0.5,   planta:2,tierra:2,volador:2,dragón:2},
  lucha:    {veneno:0.5,bicho:0.5,psíquico:0.5,volador:0.5,hada:0.5,fantasma:0, normal:2,hielo:2,roca:2,siniestro:2,acero:2},
  veneno:   {veneno:0.5,tierra:0.5,roca:0.5,fantasma:0.5,acero:0,  planta:2,hada:2},
  tierra:   {planta:0.5,bicho:0.5,volador:0,           fuego:2,eléctrico:2,veneno:2,roca:2,acero:2},
  volador:  {eléctrico:0.5,roca:0.5,acero:0.5,         planta:2,lucha:2,bicho:2},
  psíquico: {psíquico:0.5,acero:0.5,siniestro:0,       lucha:2,veneno:2},
  bicho:    {fuego:0.5,lucha:0.5,volador:0.5,fantasma:0.5,acero:0.5,hada:0.5, planta:2,psíquico:2,siniestro:2},
  roca:     {lucha:0.5,tierra:0.5,acero:0.5,           fuego:2,hielo:2,volador:2,bicho:2},
  fantasma: {normal:0,siniestro:0.5,                   fantasma:2,psíquico:2},
  dragón:   {acero:0.5,hada:0,                         dragón:2},
  siniestro:{lucha:0.5,siniestro:0.5,hada:0.5,         fantasma:2,psíquico:2},
  acero:    {fuego:0.5,agua:0.5,eléctrico:0.5,acero:0.5, hielo:2,roca:2,hada:2},
  hada:     {fuego:0.5,veneno:0.5,acero:0.5,           lucha:2,dragón:2,siniestro:2},
};

function getTypeMultiplier(atkType,defType){
  if(!atkType||!defType)return 1;
  const row=TYPE_CHART[atkType];
  if(!row)return 1;
  const val=row[defType];
  return val===undefined?1:val;
}

// ── MOVE TYPE & POWER LOOKUP ─────────────────────────────────────────────────
const MOVE_TYPE={
  // planta
  "Hoja afilada":"planta","Drenadoras":"planta","Rayo solar":"planta","Energibola":"planta",
  "Megaagotar":"planta","Síntesis":"planta","Esporasueño":"planta","Látigo cepa":"planta",
  "Vinculo":"planta","Tamborrada":"planta",
  // fuego
  "Lanzallamas":"fuego","Ascuas":"fuego","Rueda fuego":"fuego","Llamarada":"fuego",
  "Pirotecnia":"fuego","Patada ígnea":"fuego","Incineración":"fuego","Erupción":"fuego",
  "Combustión":"fuego","Puño fuego":"fuego","Fuego sagrado":"fuego","Brazo banda":"fuego",
  // agua
  "Surf":"agua","Hidrobomba":"agua","Pistola agua":"agua","Acua jet":"agua",
  "Burbuja":"agua","Catarata":"agua","Rayo burbuja":"agua","Buceo":"agua",
  // eléctrico
  "Trueno":"eléctrico","Impactrueno":"eléctrico","Voltio cruel":"eléctrico","Chispazo":"eléctrico",
  "Rayo":"eléctrico","Ondavatio":"eléctrico","Onda voltio":"eléctrico","Carga":"eléctrico",
  // normal
  "Cuerpo a cuerpo":"normal","Demolición":"normal","Velocidad extrema":"normal","Machazo":"normal",
  "Cabezazo":"normal","Placaje":"normal","Hiperrayo":"normal","Rasguño":"normal",
  "Finta":"normal","Libra":"normal","Arañazo":"normal","Ataque rápido":"normal",
  "Doble filo":"normal","Pisotón":"normal","Canto":"normal","Vozarrón":"normal",
  "Hiper voz":"normal","Burla":"normal","Matraca":"normal","Impacto":"normal",
  "Bostezo":"normal","Cabeza de roca":"normal","Represalia":"normal","Amnesia":"normal",
  // psíquico
  "Psíquico":"psíquico","Teletransporte":"psíquico","Psicocarga":"psíquico","Señuelo":"psíquico",
  "Recuperación":"psíquico","Psicoimpulso":"psíquico","Carga zen":"psíquico","Psico corte":"psíquico",
  "Impacto fuerza":"psíquico","Plumas":"psíquico","Rapidez":"psíquico",
  // fantasma
  "Bola sombra":"fantasma","Golpe fantasma":"fantasma","Maldición":"fantasma","Come sueños":"fantasma",
  "Hipnosis":"fantasma","Infortunio":"fantasma","Tinieblas":"fantasma","Languidez":"fantasma",
  "Asombro":"fantasma","Sombra bola":"fantasma","Fantasma de dragón":"fantasma",
  // roca
  "Lanzarrocas":"roca","Canto de roca":"roca","Defensa roca":"roca","Avalancha":"roca",
  "Pedrada":"roca","Pedrisco":"roca","Colmillo de roca":"roca","Roca afilada":"roca",
  "Caída de piedra":"roca",
  // lucha
  "Puño dinámico":"lucha","Patada baja":"lucha","Golpe kárate":"lucha","Aguante":"lucha",
  "Golpe bis":"lucha","Patada triple":"lucha","Puño fuego":"lucha","Esfera Aural":"lucha",
  "Golpe bajo":"lucha","Tajo umbrío":"siniestro",
  // dragón
  "Garra dragón":"dragón","Pulso dragón":"dragón","Furia dragón":"dragón","Danza dragón":"dragón",
  "Cola dragón":"dragón","Vendaval dragón":"dragón","Látigo dragón":"dragón",
  "Manzanada":"dragón","Fantasma de dragón":"dragón",
  // hielo
  "Ventisca":"hielo","Rayo hielo":"hielo","Cañón hielo":"hielo","Polvo hielo":"hielo",
  "Aurora":"hielo","Carámbano":"hielo","Nevisca":"hielo","Puño hielo":"hielo",
  // veneno
  "Tóxico":"veneno","Niebla tóxica":"veneno","Colmillo venenoso":"veneno","Bomba ácida":"veneno",
  "Bomba lodo":"veneno","Picadura":"veneno","Aguijón":"veneno","Polvo veneno":"veneno",
  "Polvo tóxico":"veneno","Puño veneno":"veneno","Destructor":"veneno",
  // bicho
  "Zumbido":"bicho","X-Tijera":"bicho","Zunzún":"bicho","Cuchillada":"bicho",
  "Paralizador":"bicho","Seda pegajosa":"bicho",
  // volador
  "Ataque ala":"volador","Vendaval":"volador","Vuelo":"volador","Pico taladrante":"volador",
  "Aire cortante":"volador","Tornado":"volador","Acróbata":"volador","Acrobacia":"volador",
  // tierra
  "Terremoto":"tierra","Excavar":"tierra","Fisura":"tierra","Remolino arena":"tierra",
  "Golpe de roca":"tierra","Hundimiento":"tierra","Tormenta de arena":"tierra","Cavar":"tierra",
  // acero
  "Cola férrea":"acero","Cabeza de hierro":"acero","Cuerpo metálico":"acero","Giro bola":"acero",
  "Bayoneta":"acero","Fogonazo metálico":"acero","Bola ferro":"acero","Defensa metálica":"acero",
  "Hiper ataque":"acero","Cola de acero":"acero",
  // siniestro
  "Mordisco":"siniestro","Triturar":"siniestro","Acoso":"siniestro","Lengüetazo":"siniestro",
  "Embargo":"siniestro","Maquinación":"siniestro","Aura oscura":"siniestro","Pulso oscuro":"siniestro",
  "Tajo brutal":"siniestro",
  // hada
  "Voz cautivadora":"hada","Beso drenante":"hada","Encanto":"hada","Cambia fuerza":"hada",
  "Danza amiga":"hada","Neblina":"hada","Celo":"hada","Fuerza lunar":"hada",
};

const MOVE_POWER={
  // Alta potencia
  "Hiperrayo":150,"Llamarada":120,"Hidrobomba":110,"Trueno":110,"Erupción":110,
  "Vendaval":110,"Ventisca":110,"Rayo solar":120,"Esfera Aural":80,"Fantasma de dragón":100,
  "Pulso dragón":85,"Garra dragón":80,"Terremoto":100,"Cola férrea":100,"Puño dinámico":100,
  "Voltio cruel":80,"Fisura":120,"Manzanada":100,"Baxcalibur":140,
  "Lanzallamas":90,"Surf":90,"Rayo":90,"Catarata":80,"Fuego sagrado":130,
  "Rueda fuego":60,"Patada ígnea":90,"Incineración":100,"Combustión":60,
  "Energibola":80,"Hoja afilada":55,"Rayo burbuja":65,"Chispazo":80,
  "Impactrueno":40,"Ondavatio":50,"Canto de roca":80,"Lanzarrocas":50,"Avalancha":75,
  "Cuerpo a cuerpo":80,"Demolición":80,"Machazo":80,"Cabezazo":70,"Hiper voz":90,
  "Doble filo":120,"Pisotón":65,"Velocidad extrema":80,"Ataque rápido":40,
  "Bola sombra":80,"Golpe fantasma":90,"Sombra bola":80,"Pulso oscuro":80,
  "Tajo umbrío":80,"Aura oscura":80,"Mordisco":60,"Triturar":80,"Tajo brutal":90,
  "Psíquico":90,"Psicocarga":65,"Psico corte":70,"Impacto fuerza":85,
  "Golpe bis":60,"Patada baja":50,"Golpe kárate":60,"Golpe bajo":40,
  "Colmillo venenoso":50,"Bomba ácida":40,"Bomba lodo":65,"Tóxico":30,
  "Picadura":60,"Aguijón":50,"Polvo veneno":40,"Polvo tóxico":30,"Destructor":45,
  "Ataque ala":60,"Aire cortante":55,"Acrobacia":55,"Acróbata":55,"Vendaval":110,
  "Excavar":80,"Cavar":60,"Remolino arena":50,"Hundimiento":80,
  "Carámbano":85,"Rayo hielo":90,"Cañón hielo":95,"Puño hielo":75,"Polvo hielo":40,
  "Cuchillada":70,"X-Tijera":80,"Zumbido":40,"Zunzún":60,
  "Ascuas":40,"Pirotecnia":65,"Puño fuego":75,"Brazo banda":40,
  "Pistola agua":40,"Acua jet":40,"Burbuja":40,"Buceo":80,
  "Cola dragón":60,"Furia dragón":40,"Látigo dragón":40,
  "Voz cautivadora":90,"Beso drenante":75,"Fuerza lunar":95,"Cambia fuerza":65,
  "Pico taladrante":80,"Tornado":55,"Pedrada":50,"Pedrisco":25,"Colmillo de roca":80,
  "Roca afilada":75,"Cola de acero":80,"Giro bola":60,"Bayoneta":65,"Bola ferro":60,
  "Látigo cepa":45,"Drenadoras":20,"Megaagotar":40,"Síntesis":0,"Drenadoras":20,
  "Placaje":40,"Rasguño":40,"Finta":60,"Libra":40,"Arañazo":40,"Burla":0,
  "Matraca":20,"Impacto":40,"Represalia":50,"Vinculo":15,"Tamborrada":80,
  "Carga zen":80,"Psicoimpulso":70,"Señuelo":0,"Recuperación":0,"Amnesia":0,
  "Maldición":0,"Hipnosis":0,"Infortunio":0,"Tinieblas":0,"Languidez":0,"Asombro":40,
  "Canto":0,"Vozarrón":0,"Bostezo":0,"Seda pegajosa":0,"Paralizador":0,
  "Danza dragón":0,"Maquinación":0,"Aceleración":0,"Encanto":0,"Neblina":0,"Celo":0,
  "Danza amiga":0,"Acoso":0,"Embargo":0,"Lengüetazo":30,"Fortaleza":0,
  "Defensa roca":0,"Teletransporte":0,"Defensa metálica":0,"Cuerpo metálico":0,
  "Cabeza de roca":150,"Doble filo":120,"Aguante":0,
};

function getMovePower(moveName){
  const p=MOVE_POWER[moveName];
  return(p!==undefined&&p>0)?p:50; // default 50 for unknown/status moves
}

function getMoveType(moveName){
  return MOVE_TYPE[moveName]||null;
}

// ── REALISTIC DAMAGE FORMULA ──────────────────────────────────────────────────
// Based on Gen V formula: ((2*level/5+2)*power*atk/def/50+2)*modifier
// def is approximated from baseAtk (no def stat) and hp
// Results in ~15-25% HP damage for neutral, 30-45% for super effective
function calcDamage(attacker,moveName,defender){
  const level=attacker.level||5;
  const atkStat=attacker.atk||50;
  // Approximate defense as fraction of HP pool; higher HP = tankier
  const defStat=Math.max(15, Math.floor((defender.baseHp||50)*defender.level/4+5));
  const power=getMovePower(moveName);
  const atkType=attacker.type;
  const moveType=getMoveType(moveName)||atkType; // fallback: move type = pokemon type
  const defType=defender.type;
  const typeMultiplier=getTypeMultiplier(moveType,defType);
  // STAB (same-type attack bonus)
  const stab=(moveType===atkType)?1.5:1;
  // Random factor 0.85-1.0
  const rand=0.85+Math.random()*0.15;
  const base=Math.floor(((2*level/5+2)*power*atkStat/defStat/75+2)*stab*typeMultiplier*rand);
  return {dmg:Math.max(1,base), typeMultiplier, moveType};
}

function rnd(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function pickItem(){
  const total=ITEM_POOL.reduce((s,i)=>s+i.pct,0);
  let r=Math.random()*total;
  for(const item of ITEM_POOL){r-=item.pct;if(r<=0)return item;}
  return ITEM_POOL[0];
}

let G={
  team:[],
  pc:[],
  caught:new Set(),
  bag:{pokeball:5,pocion:3,superpocion:1,super_ball:0,ultra_ball:0,master_ball:0,
       hiper_pocion:0,full_restore:0,revivir:0,pp_up:0,fruta_frambu:0,antidoto:0,despertar:0,
       caramelo_exp:0,caramelo_raro:0,caramelo_gordo:0,caramelo_maximo:0,
       piedra_fuego:0,piedra_agua:0,piedra_trueno:0,piedra_hoja:0,piedra_luna:0,
       piedra_sol:0,piedra_hielo:0,piedra_oscu:0,tm_hiperrayo:0,tm_esfera:0},
  money:500,badges:0,wi:0,ni:0,shakes:0,
  battle:null,pendingLearnQueue:[],
  _itemRi:null,_itemNi:null,_pendingGym:null,
  _paletaGiftReceived:false,
};

const SAVE_KEY="pokeemoon_save";
const DEX_KEY="pokeemoon_pokedex";

function savePokedex(){
  const dexData=Array.from(G.caught);
  try{localStorage.setItem(DEX_KEY,JSON.stringify(dexData));}catch(e){}
}

function loadPokedex(){
  try{
    const raw=localStorage.getItem(DEX_KEY);
    if(raw){
      const arr=JSON.parse(raw);
      if(Array.isArray(arr))G.caught=new Set(arr);
    }
  }catch(e){}
}

function saveGame(){
  const data={
    team:G.team,
    pc:G.pc,
    bag:G.bag,
    money:G.money,
    badges:G.badges,
    wi:G.wi,
    ni:G.ni,
    _paletaGiftReceived:G._paletaGiftReceived,
    caught:Array.from(G.caught),
    timestamp:Date.now()
  };
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(data));}catch(e){}
}

function loadGame(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return false;
    const data=JSON.parse(raw);
    if(!data)return false;
    G.team=data.team||[];
    G.pc=data.pc||[];
    G.bag=data.bag||G.bag;
    G.money=data.money||500;
    G.badges=data.badges||0;
    G.wi=data.wi||0;
    G.ni=data.ni||0;
    G._paletaGiftReceived=data._paletaGiftReceived||false;
    if(data.caught)G.caught=new Set(data.caught);
    return true;
  }catch(e){return false;}
}

function hasSave(){
  try{return!!localStorage.getItem(SAVE_KEY);}catch(e){return false;}
}

function deleteSave(){
  try{localStorage.removeItem(SAVE_KEY);}catch(e){}
}

function continueGame(){
  if(loadGame()){
    loadPokedex();
    ss("world");renderWorld();
  }
}

function checkIntroSave(){
  if(hasSave()){
    const btnContinue=document.getElementById("btn-continue");
    const saveInfo=document.getElementById("save-info");
    if(btnContinue)btnContinue.style.display="block";
    try{
      const data=JSON.parse(localStorage.getItem(SAVE_KEY));
      const teamCount=data.team?data.team.length:0;
      const dexCount=data.caught?data.caught.length:0;
      const saveDate=new Date(data.timestamp);
      const dateStr=saveDate.toLocaleDateString()+" "+saveDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      if(saveInfo){
        saveInfo.style.display="block";
        saveInfo.textContent=`Equipo: ${teamCount} · Pokédex: ${dexCount} · ${dateStr}`;
      }
    }catch(e){}
  }
}

function startNewGame(){
  const menu=document.getElementById("intro-menu");
  const pokeball=document.getElementById("intro-pokeball");
  if(menu)menu.style.display="none";
  if(pokeball)pokeball.style.display="block";
}

function initIntro(){
  checkIntroSave();
  const newGameBtn=document.getElementById("btn-new-game");
  if(newGameBtn){
    newGameBtn.addEventListener("click",function(e){
      e.preventDefault();
      startNewGame();
    });
  }
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",initIntro);
}else{
  initIntro();
}

let battleLocked=false;
function setBattleLock(state){
  battleLocked=state;
  document.querySelectorAll("#bmoves button, #b-main button, #b-bag-items .rnode").forEach(el=>{
    if("disabled" in el) el.disabled=state;
    else {el.style.pointerEvents=state?"none":"auto"; el.style.opacity=state?"0.6":"1";}
  });
}

const HPcolor=r=>r>.5?"#639922":r>.25?"#EF9F27":"#E24B4A";
function maxLv(){return G.team.length?Math.max(...G.team.map(p=>p.level)):5;}

function mkPoke(d,lv){
  lv=lv||5;
  const bH=d.hp||50,bA=d.atk||50;
  return{name:d.n||d.name,s:d.s||"❓",type:d.t||d.type||"normal",
    level:lv,maxHp:Math.floor(bH*lv/8+lv/2+5),hp:0,atk:Math.floor(bA*lv/5+5),
    moves:[...(d.mv||d.moves||["Placaje"])],baseHp:bH,baseAtk:bA};
}

function ss(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));document.getElementById("s-"+id).classList.add("active");}

let _shakeTimer=null;
function shakeBall(){
  const pb=document.getElementById("pb");
  if(pb.classList.contains("opening"))return;
  pb.classList.remove("shaking");void pb.offsetWidth;pb.classList.add("shaking");
  clearTimeout(_shakeTimer);_shakeTimer=setTimeout(()=>pb.classList.remove("shaking"),450);
  G.shakes++;
  if(G.shakes<=3)document.getElementById("sh"+(G.shakes-1)).style.background="#378ADD";
  document.getElementById("pb-hint").textContent=G.shakes>=3?"¡Una más!":"¡"+(3-G.shakes)+" más!";
  if(G.shakes>=3)setTimeout(openBall,500);
}

function startWorld(){G.wi=0;G.ni=0;ss("world");renderWorld();}
function renderWorld(){updateHUD();renderMap();}
function updateHUD(){
  const lead=G.team[0];
  document.getElementById("whud").innerHTML=`
    <span>Medallas: <strong>${G.badges}</strong></span>
    <span>💰 <strong>${G.money}</strong></span>
    <span>Equipo: <strong>${G.team.length}/6</strong></span>`;
}

function gIdx(wi,ni){let x=0;for(let r=0;r<wi;r++)x+=WORLD[r].nodes.length;return x+ni;}
function renderMap(){
  const m=document.getElementById("rmap");m.innerHTML="";
  const cur=gIdx(G.wi,G.ni);
  // Build flat list of all nodes
  const flat=[];
  WORLD.forEach((reg,ri)=>{reg.nodes.forEach((node,ni)=>{flat.push({node,ri,ni,reg:reg.r,idx:gIdx(ri,ni)});});});
  // Show only prev, current, next
  const visible=flat.filter(f=>f.idx>=cur-1&&f.idx<=cur+1);
  let lastReg=null;
  visible.forEach((f,vi)=>{
    const isCur=f.idx===cur,done=f.idx<cur,locked=f.idx>cur;
    if(f.reg!==lastReg){
      const rh=document.createElement("div");rh.className="rhdr";
      rh.textContent=f.reg;m.appendChild(rh);lastReg=f.reg;
    }
    const el=document.createElement("div");
    el.className="rnode"+(done?" done":isCur?" current":locked?" locked":"");
    const showSub=f.node.t!=="route"&&f.node.t!=="cave";
    el.innerHTML=`<div class="ni">${f.node.i}</div><div class="nd"><div class="nn">${f.node.n}${isCur?" ◀":""}</div>${showSub?`<div class="ns">${f.node.s}</div>`:""}</div><span class="nb ${f.node.cl}">${f.node.t}</span>`;
    if(isCur)el.onclick=()=>enterNode(f.ri,f.ni);
    m.appendChild(el);
    if(vi<visible.length-1){const c=document.createElement("div");c.className="conn";m.appendChild(c);}
  });
  const prog=document.createElement("div");
  prog.style.cssText="font-size:11px;color:var(--color-text-secondary);text-align:center;padding:8px 0 2px;";
  prog.textContent=`Nodo ${cur+1} de ${flat.length}`;
  m.appendChild(prog);
}

function wTab(t){
  ["map","team","bag","pc"].forEach(x=>{
    document.getElementById("tw-"+x).style.display=x===t?"block":"none";
    document.getElementById("tb-"+x).classList.toggle("active",x===t);
  });
  if(t==="team")renderTeam();
  if(t==="bag")renderBag();
  if(t==="pc")renderPC();
}

function enterNode(ri,ni){
  const node=WORLD[ri].nodes[ni];
  if(node.t==="town"){
    healTeam();
    if(node.id==="paleta"&&!G._paletaGiftReceived&&Math.random()<0.5){
      G._paletaGiftReceived=true;
      const otherPoke=BASE_POKEMON.filter(p=>p.n!==G.team[0].name);
      const giftData=otherPoke[Math.floor(Math.random()*otherPoke.length)];
      const giftPoke=mkPoke(giftData,5);
      giftPoke.hp=giftPoke.maxHp;
      if(G.team.length<6)G.team.push(giftPoke);
      else G.pc.push(giftPoke);
      G.caught.add(giftData.n);
      savePokedex();saveGame();
      const tc={planta:"#EAF3DE",fuego:"#FAEEDA",agua:"#E6F1FB",eléctrico:"#FAEEDA",normal:"#F1EFE8"};
      const giftMsg=`Tu madre te regala un ${giftData.n} para tu largo viaje. ¡Cuídalo!`;
      showResult(giftData.s,"¡Regalo de tu mamá!",giftMsg,ri,ni,false);
      setTimeout(()=>loadSpriteForResult(giftData.n,giftData.s),100);
    } else{saveGame();showResult("🏡",node.n,"Equipo curado. ¡Sigue adelante!",ri,ni,false);}
  }
  else if(node.t==="route"||node.t==="cave")showRoulette(ri,ni);
  else if(node.t==="gym")showGymPreview(node.gd,ri,ni);
  else if(node.t==="league")startLeague(node.ld,ri,ni);
}

function showGymPreview(gd,ri,ni){
  G._pendingGym={gd,ri,ni};
  document.getElementById("gp-title").textContent="⚔️ "+gd.l+" · "+gd.badge;
  document.getElementById("gp-sub").textContent="Tipo "+gd.type+" · "+gd.pk.length+" Pokémon";
  const teamEl=document.getElementById("gp-team");
  teamEl.innerHTML=gd.pk.map(p=>`<div class="gym-mon"><span class="ms">${p.s}</span><div class="mn">${p.n}</div><div class="ml">Nv.${p.lv||gd.pk[0].lv||"?"}</div></div>`).join("");
  const myMaxLv=maxLv();
  const gymMaxLv=Math.max(...gd.pk.map(p=>p.lv||20));
  const diff=gymMaxLv-myMaxLv;
  let advice="";
  if(diff>5)advice=`⚠️ Tu equipo está ${diff} niveles por debajo. ¡Considera entrenar antes!`;
  else if(diff>0)advice=`El rival tiene ${diff} nivel(es) más. ¡Ve con precaución!`;
  else advice=`✅ Tu equipo está bien nivelado para este gimnasio.`;
  document.getElementById("gp-advice").textContent=advice;
  ss("s-gym-preview");
}
function confirmGym(){
  const {gd,ri,ni}=G._pendingGym;
  startGym(gd,ri,ni);
}
function backFromGym(){ss("world");renderWorld();}

function healTeam(){G.team.forEach(p=>{p.hp=p.maxHp;});}

function advance(){
  G.ni++;
  if(G.ni>=WORLD[G.wi].nodes.length){G.wi++;G.ni=0;}
  if(G.wi>=WORLD.length){finalScreen();return;}
  saveGame();
  processLearnQueue(()=>{ss("world");renderWorld();wTab("map");});
}

function processLearnQueue(cb){
  if(G.pendingLearnQueue.length===0){cb();return;}
  const item=G.pendingLearnQueue.shift();
  showLearnScreen(item,()=>processLearnQueue(cb));
}

function showLearnScreen(item,cb){
  document.getElementById("learn-title").textContent=item.poke.name+" puede aprender un movimiento (Nv."+item.poke.level+")";
  document.getElementById("learn-sub").textContent="Elige qué movimiento aprender. Si ya tiene 4 reemplazará uno al azar.";
  const pool=buildMovePool(item.poke);
  const opts=document.getElementById("learn-opts");
  opts.innerHTML=pool.map((mv,i)=>`<div class="rnode" onclick="learnMove(${i},this)" data-mv="${mv}" data-poke="${item.poke.name}"><div class="nd"><div class="nn">${mv}</div><div class="ns">Nuevo movimiento</div></div></div>`).join("");
  opts.innerHTML+=`<button onclick="skipLearn()" style="margin-top:8px">Saltar</button>`;
  G._learnCb=cb;ss("learn");
}

function buildMovePool(p){
  const typeMoves=MOVES_BY_TYPE[p.type]||MOVES_BY_TYPE["normal"];
  const existing=new Set(p.moves);
  const pool=[];
  const shuffled=[...typeMoves].sort(()=>Math.random()-0.5);
  for(const m of shuffled){if(!existing.has(m)){pool.push(m);if(pool.length>=3)break;}}
  if(pool.length===0)pool.push(shuffled[0]);
  return pool;
}
function learnMove(idx,el){
  const mv=el.getAttribute("data-mv"),pokeName=el.getAttribute("data-poke");
  const poke=G.team.find(p=>p.name===pokeName);
  if(poke){if(poke.moves.length<4)poke.moves.push(mv);else poke.moves[Math.floor(Math.random()*4)]=mv;}
  const cb=G._learnCb;G._learnCb=null;if(cb)cb();
}
function skipLearn(){const cb=G._learnCb;G._learnCb=null;if(cb)cb();}

function grantXP(poke,amount){
  const newLv=Math.min(100,poke.level+amount);
  const milestones=[];
  for(let lv=poke.level+1;lv<=newLv;lv++)if(lv%5===0)milestones.push(lv);
  poke.level=newLv;
  poke.maxHp=Math.floor(poke.baseHp*poke.level/8+poke.level/2+5);
  poke.atk=Math.floor(poke.baseAtk*poke.level/5+5);
  if(poke.hp>poke.maxHp)poke.hp=poke.maxHp;
  milestones.forEach(()=>{G.pendingLearnQueue.push({poke});});
  return milestones.length>0;
}

const RSEG=[
  {label:"Pokémon salvaje",color:"#97C459",pct:60,type:"wild"},
  {label:"¡Pesca!",color:"#85B7EB",pct:15,type:"fish"},
  {label:"Entrenador",color:"#F0997B",pct:15,type:"trainer"},
  {label:"Objeto",color:"#FAC775",pct:10,type:"item"},
];
let rRi,rNi;
function showRoulette(ri,ni){
  rRi=ri;rNi=ni;
  document.getElementById("rou-result").textContent="";
  document.getElementById("rou-btn").style.display="block";
  drawWheel();ss("roulette");
}
function drawWheel(){
  const w=document.getElementById("rou-wheel");
  w.style.transition="none";w.style.transform="rotate(0deg)";
  const c=document.createElement("canvas");c.width=172;c.height=172;
  const ctx=c.getContext("2d");const cx=86,cy=86,r=83;
  let a=-Math.PI/2;
  RSEG.forEach(seg=>{
    const ang=(seg.pct/100)*2*Math.PI;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,a,a+ang);ctx.closePath();
    ctx.fillStyle=seg.color;ctx.fill();ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.stroke();
    const ma=a+ang/2,tx=cx+Math.cos(ma)*52,ty=cy+Math.sin(ma)*52;
    ctx.fillStyle="#2C2C2A";ctx.font="bold 9px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";
    seg.label.split(" ").forEach((wd,i,arr)=>ctx.fillText(wd,tx,ty+(i-(arr.length-1)/2)*12));
    a+=ang;
  });
  w.style.backgroundImage=`url(${c.toDataURL()})`;
  w.style.backgroundSize="cover";w.style.borderRadius="50%";
}
function spinRoulette(){
  document.getElementById("rou-btn").style.display="none";
  const rand=Math.random()*100;
  let acc=0,resultIdx=0;
  for(let i=0;i<RSEG.length;i++){acc+=RSEG[i].pct;if(rand<acc){resultIdx=i;break;}}
  let stopAngle=0;
  for(let i=0;i<resultIdx;i++)stopAngle+=RSEG[i].pct/100*360;
  stopAngle+=RSEG[resultIdx].pct/100*180;
  const totalAngle=(5+Math.floor(Math.random()*4))*360+(360-stopAngle);
  const w=document.getElementById("rou-wheel");
  w.style.transition="transform 1.8s cubic-bezier(0.17,0.67,0.21,1)";
  w.style.transform=`rotate(${totalAngle}deg)`;
  setTimeout(()=>{
    document.getElementById("rou-result").textContent="¡"+RSEG[resultIdx].label+"!";
    setTimeout(()=>resolveRoulette(RSEG[resultIdx].type),800);
  },2000);
}
function resolveRoulette(type){
  const ri=rRi,ni=rNi,lv=Math.max(2,maxLv()+rnd(-2,2));
  if(type==="wild"){
    const wd=WILD[Math.floor(Math.random()*WILD.length)];
    const e=mkPoke(wd,lv);e.hp=e.maxHp;
    G.battle={e,ri,ni,type:"wild",canCatch:true,queue:[]};
    initBattle("¡Un "+wd.n+" salvaje Nv."+lv+" apareció!");
  }else if(type==="fish"){
    const fd=FISH[Math.floor(Math.random()*FISH.length)];
    const e=mkPoke(fd,lv);e.hp=e.maxHp;
    G.battle={e,ri,ni,type:"fish",canCatch:true,queue:[]};
    initBattle("🎣 ¡Pescaste un "+fd.n+" Nv."+lv+"!");
  }else if(type==="trainer"){
    const tname=TRAINER_NAMES[Math.floor(Math.random()*TRAINER_NAMES.length)];
    const w1=WILD[Math.floor(Math.random()*WILD.length)],w2=WILD[Math.floor(Math.random()*WILD.length)];
    const e1=mkPoke(w1,lv);e1.hp=e1.maxHp;e1.name=w1.n+" ("+tname+")";
    const e2=mkPoke(w2,Math.max(2,lv+rnd(-1,1)));e2.hp=e2.maxHp;e2.name=w2.n+" ("+tname+")";
    G.battle={e:e1,ri,ni,type:"trainer",canCatch:false,queue:[e2]};
    initBattle("¡Entrenador "+tname+" quiere combatir! Tiene 2 Pokémon.");
  }else{showItemFound(ri,ni);}
}
function showItemFound(ri,ni){
  const itemDef=pickItem(),qty=itemDef.qty();
  G._itemRi=ri;G._itemNi=ni;
  G.bag[itemDef.k]=(G.bag[itemDef.k]||0)+qty;
  applySpecialItem(itemDef,qty);
  document.getElementById("item-ico").textContent=itemDef.ico;
  document.getElementById("item-rbadge").textContent=itemDef.rarity;
  document.getElementById("item-rbadge").className="item-rarity "+itemDef.cls;
  document.getElementById("item-name").textContent=(qty>1?qty+"x ":"")+itemDef.n;
  document.getElementById("item-desc").textContent=itemDef.desc;
  ss("item");
}
function applySpecialItem(itemDef,qty){
  if(!itemDef.sp)return;
  const lead=G.team.find(p=>p.hp>0)||G.team[0];if(!lead)return;
  if(itemDef.sp==="candy_exp")grantXP(lead,qty);
  else if(itemDef.sp==="candy_rare")grantXP(lead,3*qty);
  else if(itemDef.sp==="candy_big")grantXP(lead,5*qty);
  else if(itemDef.sp==="candy_max")grantXP(lead,10*qty);
  else if(itemDef.sp==="tm_hyper"){if(lead.moves.length<4)lead.moves.push("Hiperrayo");else lead.moves[Math.floor(Math.random()*4)]="Hiperrayo";}
  else if(itemDef.sp==="tm_aura"){if(lead.moves.length<4)lead.moves.push("Esfera Aural");else lead.moves[Math.floor(Math.random()*4)]="Esfera Aural";}
}
function itemContinue(){
  processLearnQueue(()=>nextNode(G._itemRi,G._itemNi));
}
function initBattle(msg){
  setBattleLock(false);
  document.getElementById("lvup-banner").style.display="none";
  ss("battle");renderBattle(msg);
  const b=G.battle;
  document.getElementById("b-catch-btn").style.display=b.canCatch?"inline":"none";
  document.getElementById("b-run-btn").style.display=(b.type==="gym"||b.type==="league")?"none":"inline";
}
function renderBattle(msg){
  const b=G.battle,player=G.team.find(p=>p.hp>0);
  if(!player){endBattle("lose");return;}
  document.getElementById("b-es").textContent=b.e.s;
  document.getElementById("b-en").textContent=b.e.name;
  document.getElementById("b-el").textContent="Nv."+b.e.level+" · "+b.e.type;
  const er=b.e.hp/b.e.maxHp;
  document.getElementById("b-eh").style.width=Math.max(0,er*100)+"%";
  document.getElementById("b-eh").style.background=HPcolor(er);
  document.getElementById("b-eht").textContent=b.e.hp+"/"+b.e.maxHp+" HP";
  document.getElementById("b-ps").textContent=player.s;
  document.getElementById("b-pn").textContent=player.name;
  document.getElementById("b-pl").textContent="Nv."+player.level+" · "+player.type;
  const pr=player.hp/player.maxHp;
  document.getElementById("b-ph").style.width=Math.max(0,pr*100)+"%";
  document.getElementById("b-ph").style.background=HPcolor(pr);
  document.getElementById("b-pht").textContent=player.hp+"/"+player.maxHp+" HP";
  if(msg)document.getElementById("blog").textContent=msg;
  document.getElementById("bmoves").innerHTML=player.moves.map((m,i)=>{
    const mt=getMoveType(m)||player.type;
    const mp=getMovePower(m);
    const mpLabel=mp>0?`${mt} · Pot.${mp}`:`${mt} · estado`;
    return`<button class="mbtn" onclick="useMove(${i})">${m}<span class="mp">${mpLabel}</span></button>`;
  }).join("");
  showBMain();
  if(battleLocked) setBattleLock(true);
}
function showBMain(){document.getElementById("b-main").style.display="block";document.getElementById("b-bag-panel").style.display="none";}
function typeEffectMsg(mult){
  if(mult===0)return" ¡No afecta!";
  if(mult>=2)return" ¡Es muy eficaz!";
  if(mult<=0.5)return" No es muy eficaz...";
  return"";
}
function useMove(i){
  if(battleLocked) return;
  setBattleLock(true);
  const b=G.battle,player=G.team.find(p=>p.hp>0);
  const moveName=player.moves[i];
  const {dmg,typeMultiplier}=calcDamage(player,moveName,b.e);
  b.e.hp=Math.max(0,b.e.hp-dmg);
  const effMsg=typeEffectMsg(typeMultiplier);
  document.getElementById("blog").textContent=player.name+" usa "+moveName+". ¡"+dmg+" de daño!"+effMsg;
  renderBattle();
  if(b.e.hp<=0){
    if(b.queue&&b.queue.length>0){const nxt=b.queue.shift();b.e=nxt;setTimeout(()=>{renderBattle("¡"+nxt.name+" entró al combate!");setBattleLock(false);},700);}
    else setTimeout(()=>endBattle("win"),700);
    return;
  }
  setTimeout(enemyTurn,850);
}
function enemyTurn(){
  const b=G.battle,player=G.team.find(p=>p.hp>0);
  if(!player){endBattle("lose");return;}
  const mv=b.e.moves?b.e.moves[Math.floor(Math.random()*b.e.moves.length)]:"Ataque";
  const {dmg,typeMultiplier}=calcDamage(b.e,mv,player);
  player.hp=Math.max(0,player.hp-dmg);
  const effMsg=typeEffectMsg(typeMultiplier);
  document.getElementById("blog").textContent=b.e.name+" usa "+mv+". ¡"+dmg+" de daño a "+player.name+"!"+effMsg;
  renderBattle();
  if(player.hp<=0){
    const nxt=G.team.find(p=>p.hp>0);
    if(!nxt){setTimeout(()=>endBattle("lose"),700);return;}
    setTimeout(()=>{renderBattle("¡"+player.name+" se debilitó! ¡Adelante "+nxt.name+"!");setBattleLock(false);},700);
  } else setBattleLock(false);
}
function getCatchRate(ballKey,ratio){
  if(ballKey==="master_ball")return 1;
  if(ballKey==="ultra_ball")return 0.2+ratio*0.7;
  if(ballKey==="super_ball")return 0.17+ratio*0.65;
  return 0.12+ratio*0.6;
}
function bAct(a){
  if(battleLocked) return;
  const b=G.battle;
  if(a==="run"){
    setBattleLock(true);
    if(Math.random()<0.55)endBattle("run");
    else{document.getElementById("blog").textContent="¡No pudiste escapar!";setTimeout(enemyTurn,850);}
  }
  if(a==="catch"){
    if(!b.canCatch){document.getElementById("blog").textContent="¡No puedes capturar en combate de entrenador!";return;}
    let bk="pokeball";
    if(G.bag.master_ball>0)bk="master_ball";
    else if(G.bag.ultra_ball>0)bk="ultra_ball";
    else if(G.bag.super_ball>0)bk="super_ball";
    else if(G.bag.pokeball>0)bk="pokeball";
    else{document.getElementById("blog").textContent="¡Sin Poké Balls!";return;}
    setBattleLock(true);
    G.bag[bk]--;
    const bnames={pokeball:"Poké Ball",super_ball:"Super Ball",ultra_ball:"Ultra Ball",master_ball:"Master Ball"};
    const ratio=1-b.e.hp/b.e.maxHp;
    if(Math.random()<getCatchRate(bk,ratio)){document.getElementById("blog").textContent="¡Capturado con "+bnames[bk]+"!";setTimeout(()=>endBattle("catch"),700);}
    else{document.getElementById("blog").textContent=b.e.name+" escapó de la "+bnames[bk]+".";setTimeout(enemyTurn,850);}
  }
  if(a==="bag"){
    document.getElementById("b-main").style.display="none";
    document.getElementById("b-bag-panel").style.display="block";
    const bl=document.getElementById("b-bag-items");
    const usable=USABLE_IN_BATTLE.filter(it=>(G.bag[it.k]||0)>0);
    bl.innerHTML=usable.length?usable.map(it=>`<div class="rnode" onclick="useBagItem('${it.k}')"><div class="nd"><div class="nn">${it.n}</div></div><span style="font-size:12px;color:var(--color-text-secondary)">x${G.bag[it.k]}</span></div>`).join(""):"<p style='font-size:12px'>Sin objetos curadores.</p>";
  }
}
function useBagItem(k){
  if(battleLocked) return;
  if((G.bag[k]||0)<=0)return;
  setBattleLock(true);
  G.bag[k]--;showBMain();
  const player=G.team.find(p=>p.hp>0);
  const item=USABLE_IN_BATTLE.find(i=>i.k===k);
  if(!item){setBattleLock(false);return;}
  if(item.sp==="revive"){
    const fainted=G.team.find(p=>p.hp<=0);
    if(fainted){fainted.hp=Math.floor(fainted.maxHp*0.5);document.getElementById("blog").textContent=fainted.name+" fue revivido con "+fainted.hp+" HP.";}
    else document.getElementById("blog").textContent="No hay Pokémon debilitados.";
    renderBattle();setTimeout(enemyTurn,850);return;
  }
  if(!player)return;
  const heal=item.heal>=9999?player.maxHp:item.heal;
  player.hp=Math.min(player.maxHp,player.hp+heal);
  document.getElementById("blog").textContent=player.name+" recuperó "+heal+" HP.";
  renderBattle();setTimeout(enemyTurn,850);
}
function endBattle(result){
  const b=G.battle,ri=b.ri,ni=b.ni;
  if(result==="win"){
    const isGym=b.type==="gym",isLeague=b.type==="league";
    let xpGain=isGym?5:1,reward=b.e.level*6+30,extraMsg="";
    if(isGym){reward+=200;G.badges++;G.bag.pokeball+=3;G.bag.superpocion+=1;extraMsg=" 🏅 ¡+"+xpGain+" niv. a todo el equipo!";}
    else if(isLeague){
      reward+=500;G.badges+=5;G.bag.hiper_pocion+=2;G.bag.ultra_ball+=2;
      G.money+=reward;
      G.team.forEach(p=>{if(p.hp>0)grantXP(p,5);});
      resetForNextRegion();
      savePokedex();saveGame();
      showResult("🏆","¡Liga superada!","¡Liga "+b._ld_name+" vencida! Tu equipo pasa a la siguiente región a Nv.5 conservando movimientos.",ri,ni,false);
      return;
    }
    G.money+=reward;
    G.team.forEach(p=>{if(p.hp>0)grantXP(p,xpGain);});
    const banner=document.getElementById("lvup-banner");
    banner.textContent="¡"+G.team.filter(p=>p.hp>0).map(p=>p.name+" Nv."+p.level).join(" · ")+"!";
    banner.style.display="block";
    saveGame();
    showResult("✨","¡Victoria!","+"+reward+" monedas."+extraMsg,ri,ni,false);
  }else if(result==="catch"){
    const caughtPoke={...b.e,hp:b.e.hp,moves:[...b.e.moves]};
    let wentToPC=false;
    if(G.team.length<6)G.team.push(caughtPoke);
    else{G.pc.push(caughtPoke);wentToPC=true;}
    G.caught.add(b.e.name);
    savePokedex();saveGame();
    const _catchName=b.e.name,_catchS=b.e.s;
    const catchMsg=wentToPC?"¡"+_catchName+" fue enviado a la PC!":"¡"+_catchName+" se unió a tu equipo!";
    showResult(_catchS,"¡Capturado!",catchMsg,ri,ni,false);
    setTimeout(()=>loadSpriteForResult(_catchName,_catchS),100);
  }else if(result==="run"){
    saveGame();ss("world");renderWorld();
  }else{
    G.team.forEach(p=>{p.hp=Math.floor(p.maxHp*0.25);});
    saveGame();
    showResult("😵","Derrota","Tu equipo fue derrotado. Se ha recuperado parcialmente.",ri,ni,true);
  }
}
function resetForNextRegion(){
  G.team=G.team.map(p=>{
    p.level=5;p.maxHp=Math.floor(p.baseHp*5/5+5+10);p.hp=p.maxHp;p.atk=Math.floor(p.baseAtk*5/5+5);
    return p;
  });
}
function startGym(gd,ri,ni){
  const pks=gd.pk.map(p=>{const m=mkPoke(p,p.lv||20);m.hp=m.maxHp;return m;});
  G.battle={e:pks[0],queue:pks.slice(1),ri,ni,type:"gym",canCatch:false,_gymLeader:gd.l};
  initBattle("¡El líder "+gd.l+" te desafía! ("+gd.pk.length+" Pokémon)");
}
function startLeague(ld,ri,ni){
  const makeTeam=tr=>{
    const pks=(tr.pk||[]).map(p=>{const m=mkPoke(p,tr.lv);m.hp=m.maxHp;return m;});
    if(pks.length===0){const wd=WILD[Math.floor(Math.random()*WILD.length)];const e=mkPoke(wd,tr.lv);e.hp=e.maxHp;e.name=tr.n+" ("+wd.n+")";e.s=tr.s;pks.push(e);}
    else{pks[0].name=tr.n+" · "+pks[0].name;pks[0].s=tr.s;}
    return pks;
  };
  const allTeams=ld.tr.map(makeTeam);
  const allPokes=allTeams.flat();
  G.battle={e:allPokes[0],queue:allPokes.slice(1),ri,ni,type:"league",canCatch:false,_ld_name:ld.n};
  initBattle("¡Liga "+ld.n+"! "+ld.tr.length+" entrenadores. ¡"+ld.tr[0].n+" te desafía!");
}
function showResult(ico,title,msg,ri,ni,lost){
  document.getElementById("res-ico").textContent=ico;
  document.getElementById("res-title").textContent=title;
  document.getElementById("res-msg").textContent=msg;
  const acts=document.getElementById("res-acts");
  acts.innerHTML=lost?`<button onclick="backWorld(${ri},${ni})">← Mapa</button>`:
    `<button onclick="nextNode(${ri},${ni})">Siguiente →</button><button onclick="backWorld(${ri},${ni})">Ver mapa</button>`;
  ss("result");
}

function loadSpriteForResult(pokeName,fallbackEmoji){
  const _rIco=document.getElementById("res-ico");
  if(!_rIco)return;
  const _pokeId=PKID[pokeName];
  if(!_pokeId){
    console.warn("No PKID found for:",pokeName);
    return;
  }
  console.log("Loading sprite for:",pokeName,"ID:",_pokeId);
  _rIco.style.fontSize="0";
  _rIco.innerHTML="";
  const _artUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_pokeId}.png`;
  const _smlUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_pokeId}.png`;
  const _img=document.createElement("img");
  _img.style.cssText="width:120px;height:120px;object-fit:contain;image-rendering:pixelated;display:block;margin:0 auto;";
  _img.alt=pokeName;
  _rIco.appendChild(_img);
  let _tried=0;
  const _urls=[_artUrl,_smlUrl];
  _img.onload=function(){
    console.log("Sprite loaded:",_img.src);
    _img.style.display="block";
  };
  _img.onerror=function(){
    console.warn("Failed to load:",_img.src);
    if(++_tried<_urls.length){
      _img.src=_urls[_tried];
    }else{
      console.warn("All sprite URLs failed, showing emoji fallback");
      _rIco.style.fontSize="56px";
      _rIco.textContent=fallbackEmoji||"❓";
    }
  };
  _img.src=_urls[0];
}
function nextNode(ri,ni){G.wi=ri;G.ni=ni;advance();}
function backWorld(ri,ni){G.wi=ri;G.ni=ni;processLearnQueue(()=>{ss("world");renderWorld();wTab("map");});}
function renderTeam(){
  const grid=document.getElementById("tgrid");
  grid.innerHTML=G.team.map((p,i)=>{
    const r=p.hp/p.maxHp;
    const spr=spriteImg(p.name,"pk-sprite-lg",p.s);
    return`<div class="pkcard" draggable="true" data-idx="${i}" ondragstart="teamDragStart(event)" ondragover="teamDragOver(event)" ondrop="teamDrop(event)">${spr}<div class="pn">${p.name}</div><div class="pt">Nv.${p.level} · ${p.type}</div><div class="pt">${p.hp}/${p.maxHp} HP</div><div style="height:3px;background:var(--color-background-secondary);border-radius:2px;margin:4px 0;overflow:hidden"><div style="height:100%;width:${Math.max(0,r*100)}%;background:${HPcolor(r)}"></div></div><div class="pt" style="font-size:10px">${p.moves.join(" · ")}</div><button class="pc-btn" onclick="moveToPC(${i})" title="Enviar a PC">📦</button></div>`;
  }).join("")||"<p style='font-size:13px'>Sin equipo.</p>";
}

let _dragIdx=null;
function teamDragStart(e){
  _dragIdx=parseInt(e.currentTarget.dataset.idx);
  e.dataTransfer.effectAllowed="move";
}
function teamDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect="move";
}
function teamDrop(e){
  e.preventDefault();
  const target=parseInt(e.currentTarget.dataset.idx);
  if(_dragIdx===null||isNaN(target)||_dragIdx===target)return;
  const temp=G.team[_dragIdx];
  G.team[_dragIdx]=G.team[target];
  G.team[target]=temp;
  _dragIdx=null;
  saveGame();
  renderTeam();
}

function moveToPC(idx){
  if(G.team.length<=1)return;
  const poke=G.team.splice(idx,1)[0];
  G.pc.push(poke);
  saveGame();
  renderTeam();
  renderPC();
}

function moveToTeam(pcIdx){
  if(G.team.length>=6)return;
  const poke=G.pc.splice(pcIdx,1)[0];
  G.team.push(poke);
  saveGame();
  renderTeam();
  renderPC();
}

function releaseFromPC(pcIdx){
  G.pc.splice(pcIdx,1);
  saveGame();
  renderPC();
}

function renderPC(){
  const grid=document.getElementById("pc-grid");
  const count=document.getElementById("pc-count");
  count.textContent=G.pc.length+" Pokémon";
  grid.innerHTML=G.pc.map((p,i)=>{
    const r=p.hp/p.maxHp;
    const spr=spriteImg(p.name,"pk-sprite-lg",p.s);
    return`<div class="pkcard pc-card">${spr}<div class="pn">${p.name}</div><div class="pt">Nv.${p.level} · ${p.type}</div><div class="pt">${p.hp}/${p.maxHp} HP</div><div style="height:3px;background:var(--color-background-secondary);border-radius:2px;margin:4px 0;overflow:hidden"><div style="height:100%;width:${Math.max(0,r*100)}%;background:${HPcolor(r)}"></div></div><div class="pc-actions"><button onclick="moveToTeam(${i})" ${G.team.length>=6?'disabled title="Equipo lleno"':''}>Equipo</button><button onclick="releaseFromPC(${i})" class="pc-release">Liberar</button></div></div>`;
  }).join("")||"<p style='font-size:13px'>PC vacío.</p>";
}
function renderBag(){
  const rendered=new Set();
  document.getElementById("bagui").innerHTML=ITEM_POOL.filter(it=>{
    if(rendered.has(it.k))return false;rendered.add(it.k);return(G.bag[it.k]||0)>0;
  }).map(it=>`<div class="rnode"><div class="ni">${it.ico}</div><div class="nd"><div class="nn">${it.n}</div><div class="ns">${it.desc}</div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px"><span class="nb ${it.cls}">${it.rarity}</span><span style="font-size:12px;color:var(--color-text-secondary)">x${G.bag[it.k]}</span></div></div>`
  ).join("")||"<p style='font-size:13px;padding:8px'>Mochila vacía.</p>";
}
function finalScreen(){
  savePokedex();saveGame();
  document.getElementById("res-ico").textContent="🌟";
  document.getElementById("res-title").textContent="¡Maestro Pokémon!";
  document.getElementById("res-msg").textContent="Has conquistado los gimnasios y ligas de las 9 regiones. ¡Eres una leyenda!";
  document.getElementById("res-acts").innerHTML=`<button onclick="newGameKeepDex()">Nueva partida (Pokédex conservada)</button>`;
  ss("result");
}

function newGameKeepDex(){
  const savedDex=Array.from(G.caught);
  deleteSave();
  G.team=[];G.bag={pokeball:5,pocion:3,superpocion:1,super_ball:0,ultra_ball:0,master_ball:0,
    hiper_pocion:0,full_restore:0,revivir:0,pp_up:0,fruta_frambu:0,antidoto:0,despertar:0,
    caramelo_exp:0,caramelo_raro:0,caramelo_gordo:0,caramelo_maximo:0,
    piedra_fuego:0,piedra_agua:0,piedra_trueno:0,piedra_hoja:0,piedra_luna:0,
    piedra_sol:0,piedra_hielo:0,piedra_oscu:0,tm_hiperrayo:0,tm_esfera:0};
  G.money=500;G.badges=0;G.wi=0;G.ni=0;G.shakes=0;G._paletaGiftReceived=false;
  G.caught=new Set(savedDex);
  savePokedex();
  location.reload();
}

/* ── POKÉMON SPRITE SYSTEM ── */
const PKID={
  "Bulbasaur":1,"Charmander":4,"Squirtle":7,"Caterpie":10,"Pidgey":16,"Rattata":19,
  "Pikachu":25,"Raichu":26,"Clefairy":35,"Jigglypuff":39,"Geodude":74,"Slowpoke":79,
  "Magnemite":81,"Koffing":109,"Snorlax":143,"Eevee":133,"Abra":63,"Machop":66,
  "Growlithe":58,"Ponyta":77,"Gengar":94,"Gastly":92,"Haunter":93,"Meowth":52,
  "Psyduck":54,"Vulpix":37,"Oddish":43,"Poliwag":60,"Zubat":41,"Onix":95,
  "Voltorb":100,"Magikarp":129,"Gyarados":130,"Lapras":131,"Dratini":147,
  "Dragonair":148,"Dragonite":149,"Alakazam":65,"Kadabra":64,"Mr. Mime":122,
  "Venomoth":49,"Jynx":124,"Dewgong":87,"Cloyster":91,"Slowbro":80,"Hitmonchan":107,
  "Hitmonlee":106,"Machamp":68,"Arbok":24,"Muk":89,"Weezing":110,"Rhydon":112,
  "Rhyhorn":111,"Nidoqueen":31,"Nidoking":34,"Dugtrio":51,"Aerodactyl":142,
  "Pidgeot":18,"Pidgeotto":17,"Arcanine":59,"Rapidash":78,"Exeggutor":103,
  "Blastoise":9,"Starmie":121,"Staryu":120,"Tangela":114,"Vileplume":45,"Victreebel":71,
  "Chikorita":152,"Cyndaquil":155,"Totodile":158,"Treecko":252,"Torchic":255,"Mudkip":258,
  "Turtwig":387,"Chimchar":390,"Piplup":393,"Snivy":495,"Tepig":498,"Oshawott":501,
  "Chespin":650,"Fennekin":653,"Froakie":656,"Rowlet":722,"Litten":725,"Popplio":728,
  "Grookey":810,"Scorbunny":813,"Sobble":816,"Sprigatito":906,"Fuecoco":909,"Quaxly":912,
  "Meganium":154,"Typhlosion":157,"Feraligatr":160,"Ampharos":181,"Espeon":196,"Umbreon":197,
  "Misdreavus":200,"Snubbull":209,"Houndour":228,"Larvitar":246,"Pupitar":247,"Tyranitar":248,
  "Ralts":280,"Bagon":371,"Shelgon":372,"Salamence":373,"Riolu":447,"Lucario":448,
  "Zorua":570,"Deino":633,"Zweilous":634,"Hydreigon":635,"Goomy":704,"Dreepy":885,
  "Pawmi":921,"Shinx":403,"Luxio":404,"Luxray":405,"Mareep":179,"Flaaffy":180,
  "Golbat":42,"Crobat":169,"Mismagius":429,"Rotom":479,
  "Goldeen":118,"Tentacool":72,"Horsea":116,"Shellder":90,"Krabby":98,"Dratini":147,
  "Wooper":194,"Remoraid":223,"Corsola":222,"Feebas":349,"Barboach":339,"Finneon":456,
  "Basculin":550,"Alomomola":594,"Inkay":686,"Arrokuda":846,"Dracovish":882,"Clauncher":692,
  "Nosepass":299,"Makuhita":296,"Hariyama":297,"Meditite":307,"Medicham":308,
  "Manectric":310,"Electrike":309,"Numel":322,"Camerupt":323,"Slugma":218,"Torkoal":324,
  "Vigoroth":288,"Linoone":264,"Slaking":289,"Spinda":327,"Swablu":333,"Altaria":334,
  "Tropius":357,"Pelipper":279,"Skarmory":227,"Lunatone":337,"Solrock":338,
  "Luvdisc":370,"Whiscash":340,"Sealeo":364,"Crawdaunt":342,"Milotic":350,
  "Mightyena":262,"Cacturne":332,"Sharpedo":319,"Absol":359,"Shiftry":275,
  "Dusclops":356,"Banette":354,"Sableye":302,"Glalie":362,"Walrein":365,
  "Flygon":330,"Shelgon":372,"Snover":459,"Sneasel":215,"Abomasnow":460,
  "Jolteon":135,"Ambipom":424,"Dustox":269,"Beautifly":267,"Vespiquen":416,
  "Heracross":214,"Drapion":452,"Whirlipede":544,"Dwebble":557,"Leavanny":542,
  "Emolga":587,"Zebstrika":523,"Krokorok":552,"Palpitoad":536,"Excadrill":530,
  "Swoobat":528,"Unfezant":521,"Swanna":581,"Vanillish":583,"Cryogonal":615,
  "Beartic":614,"Fraxure":611,"Druddigon":621,"Haxorus":612,"Cofagrigus":563,
  "Chandelure":609,"Golurk":623,"Jellicent":593,"Liepard":510,"Scrafty":560,
  "Krookodile":553,"Bisharp":625,"Musharna":518,"Sigilyph":561,"Reuniclus":579,
  "Gothitelle":576,"Throh":538,"Sawk":539,"Mienshao":620,"Conkeldurr":534,
  "Accelgor":617,"Bouffalant":626,"Vanilluxe":584,"Escavalier":589,"Volcarona":637,
  "Surskit":283,"Vivillon":666,"Amaura":698,"Tyrunt":696,"Mienfoo":619,"Jumpluff":189,
  "Weepinbell":70,"Gogoat":673,"Heliolisk":695,"Mawile":303,"Sylveon":700,
  "Sigilyph":561,"Slowking":199,"Meowstic":678,"Avalugg":avalugg=713,
  "Hawlucha":701,"Tyrantrum":697,"Aurorus":699,"Gourgeist":711,"Goodra":700,
  "Gardevoir":282,"Mankey":56,"Crabrawler":739,"Nosepass":299,"Boldore":525,
  "Lycanroc":745,"Dugtrio":51,"Gastrodon":423,"Mudsdale":750,"Hariyama":297,
  "Bewear":760,"Crabominable":740,"Poliwrath":62,"Relicanth":369,"Carbink":703,
  "Golem":76,"Golisopod":768,"Dhelmise":769,"Palossand":770,"Drifblim":426,
  "Mimikyu":778,"Braviary":628,"Mandibuzz":630,"Oricorio":741,"Toucannon":733,
  "Gossifleur":829,"Eldegoss":830,"Drednaw":834,"Ninetales":38,"Centiskorch":851,
  "Hitmontop":237,"Pangoro":675,"Sirfetch'd":865,"Weezing":110,"Togekiss":468,
  "Barbaracle":689,"Shuckle":213,"Stonjourner":900,"Coalossal":839,"Sandaconda":844,
  "Duraludon":884,"Morpeko":877,"Toxicroak":454,"Grimmsnarl":861,"Hatterene":858,
  "Rillaboom":812,"Talonflame":663,"Pincurchin":874,"Corviknight":823,"Dragapult":887,
  "Mr. Rime":866,"Rhyperior":464,"Charizard":6,"Nymble":919,"Tarountula":917,
  "Teddiursa":216,"Petilil":548,"Smoliv":928,"Sudowoodo":185,"Wattrel":940,
  "Luxio":404,"Bellibolt":939,"Veluza":976,"Wugtrio":975,"Crabominable":740,
  "Komala":775,"Dudunsparce":982,"Frosmoth":873,"Cetitan":975,"Farigiraf":981,
  "Espathra":956,"Florges":671,"Houndstone":975,"Toxtricity":849,"Rika":0,
  "Kingambit":983,"Glimmora":970,"Noivern":715,"Flapple":841,"Baxcalibur":998,
  "Dragalge":691,"Staraptor":398,"Flamigo":973,"Copperajah":879,"Magnezone":462,
  "Tinkaton":964,"Klefki":707,"Probopass":476,"Scizor":212,"Aegislash":681,
  "Dhelmise":769,"Clawitzer":693,"Pyroar":668,"Talonflame":663,"Primeape":57,
  "Poliwrath":62,"Herdier":507,"Watchog":505,"Steelix":208,"Magneton":82,
  "Cherubi":420,"Roserade":407,"Cranidos":408,"Metagross":376,"Bronzong":437,
  "Gallade":475,"Spiritomb":442,"Infernape":392,"Magmortar":467,"Flareon":136,
  "Glaceon":471,"Honchkrow":430,"Mismagius":429,"Houndoom":229,"Weavile":461,
  "Garchomp":445,"Lucario":448,"Hippowdon":450,"Gliscor":472,"Electivire":466,
  "Rhyperior":464,"Togekiss":468,"Porygon-Z":474,"Mamoswine":473,"Rotom":479,
};

function spriteUrl(name,size){
  const id=PKID[name];
  if(!id)return null;
  if(size==="artwork")
    return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function spriteImg(name,cls,alt){
  const url=spriteUrl(name);
  if(!url)return`<span style="font-size:28px">${alt||"\u2753"}</span>`;
  // Use a wrapper that shows emoji until image loads, hides emoji once img loads
  const eid="e"+Math.random().toString(36).slice(2,9);
  const iid="i"+Math.random().toString(36).slice(2,9);
  setTimeout(()=>{
    const img=document.getElementById(iid);
    const em=document.getElementById(eid);
    if(!img||!em)return;
    img.onload=function(){em.style.display="none";img.style.display="";};
    img.onerror=function(){img.style.display="none";em.style.display="";};
    img.src=url;
  },0);
  return`<span id="${eid}" style="font-size:24px">${alt||"\u2753"}</span><img id="${iid}" class="${cls||"pk-sprite-md"}" alt="${name}" style="display:none">`;
}

/* ── SPAWN FLOATING BACKGROUND SPRITES ── */
(function spawnBgSprites(){
  const BG_MONS=[1,4,7,25,39,52,54,63,94,133,143,152,155,158,252,255,258,
                 387,390,393,495,498,501,650,653,656,722,725,728,810,813,816];
  const wrap=document.getElementById("bg-sprites");
  BG_MONS.forEach((id,i)=>{
    const img=document.createElement("img");
    img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    img.className="bg-sprite";
    const size=48+Math.random()*56;
    const left=Math.random()*95;
    const delay=Math.random()*25;
    const dur=20+Math.random()*20;
    img.style.cssText=`width:${size}px;height:${size}px;left:${left}%;animation-duration:${dur}s;animation-delay:-${delay}s;`;
    wrap.appendChild(img);
  });
})();

/* ── PATCH RENDER FUNCTIONS TO USE SPRITES ── */
function loadSpriteInto(elId,name,fallbackEmoji,flip){
  const url=spriteUrl(name);
  const el=document.getElementById(elId);
  if(!el)return;
  if(!url){el.innerHTML=`<span style="font-size:44px">${fallbackEmoji||"\u2753"}</span>`;return;}
  const flipStyle=flip?"transform:scaleX(-1);":"";
  el.innerHTML=`<span class="b-spr-em" style="font-size:44px">${fallbackEmoji||"\u2753"}</span>`
    +`<img class="pk-sprite-battle b-spr-img" src="${url}" style="${flipStyle}display:none" alt="${name}">`;
  const img=el.querySelector(".b-spr-img");
  const em=el.querySelector(".b-spr-em");
  img.onload=function(){em.style.display="none";img.style.display="";};
  img.onerror=function(){img.style.display="none";em.style.display="";};
}
const _origRenderBattle=renderBattle;
renderBattle=function(msg){
  _origRenderBattle(msg);
  const b=G.battle,player=G.team.find(p=>p.hp>0);
  if(!player)return;
  const eName=b.e.name.split(" · ").pop().split(" (")[0];
  loadSpriteInto("b-es",eName,b.e.s,false);
  loadSpriteInto("b-ps",player.name,player.s,true);
};

const _origRenderTeam=renderTeam;
renderTeam=function(){
  document.getElementById("tgrid").innerHTML=G.team.map(p=>{
    const r=p.hp/p.maxHp;
    const spr=spriteImg(p.name,"pk-sprite-lg",p.s);
    return`<div class="pkcard"><span class="ps">${spr}</span><div class="pn">${p.name}</div><div class="pt">Nv.${p.level} · ${p.type}</div><div class="pt">${p.hp}/${p.maxHp} HP</div><div style="height:3px;background:var(--color-background-secondary);border-radius:2px;margin:4px 0;overflow:hidden"><div style="height:100%;width:${Math.max(0,r*100)}%;background:${HPcolor(r)}"></div></div><div class="pt" style="font-size:10px">${p.moves.join(" · ")}</div></div>`;
  }).join("")||"<p style='font-size:13px'>Sin equipo.</p>";
  renderPokedex();
};
function renderPokedex(){
  const cont=document.getElementById("pokedex-grid");
  if(!cont)return;
  const caught=G.caught.size;
  const total=BASE_POKEMON.length;
  cont.innerHTML=BASE_POKEMON.map(p=>{
    const isCaught=G.caught.has(p.n);
    if(isCaught){
      const spr=spriteImg(p.n,"pk-sprite-sm",p.s);
      return`<div class="pdex-cell caught"><span class="pdex-spr">${spr}</span><span class="pdex-name">${p.n}</span></div>`;
    }
    return`<div class="pdex-cell"><span class="pdex-spr">?</span></div>`;
  }).join("");
  document.getElementById("pokedex-count").textContent=`${caught}/${total} descubiertos`;
}

const _origShowGymPreview=showGymPreview;
showGymPreview=function(gd,ri,ni){
  _origShowGymPreview(gd,ri,ni);
  const teamEl=document.getElementById("gp-team");
  teamEl.innerHTML=gd.pk.map(p=>{
    const spr=spriteImg(p.n,"pk-sprite-md",p.s);
    return`<div class="gym-mon">${spr}<div class="mn">${p.n}</div><div class="ml">Nv.${p.lv||"?"}</div></div>`;
  }).join("");
};

openBall=function(){
  document.getElementById("pb").classList.add("opening");
  setTimeout(()=>{
    const sd=STARTERS[Math.floor(Math.random()*STARTERS.length)];
    const p=mkPoke(sd,5);p.hp=p.maxHp;G.team=[p];G.caught.add(sd.n);
    savePokedex();saveGame();
    const tc={planta:"#EAF3DE",fuego:"#FAEEDA",agua:"#E6F1FB",electrico:"#FAEEDA",normal:"#F1EFE8"};
    const id=PKID[sd.n];
    const revealId="rspr"+Date.now();
    document.getElementById("reveal-inner").innerHTML=`<div class="fadeup" style="padding:2rem 1rem;text-align:center">
      <div id="${revealId}" style="width:160px;height:160px;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;"><span style="font-size:80px">${sd.s}</span></div>
      <h2 style="margin-bottom:4px">¡${sd.n}!</h2>
      <span style="display:inline-block;font-size:11px;padding:3px 10px;border-radius:12px;background:${tc[sd.t]||"#F1EFE8"};color:#444;margin:4px">${sd.t}</span>
      <p style="margin:10px 0 5px">Nv.5 · HP: ${p.maxHp} · Ataque: ${p.atk}</p>
      <p style="font-size:12px;color:var(--color-text-secondary);margin-bottom:18px">Movimientos: ${sd.mv.join(" · ")}</p>
      <button onclick="startWorld()" style="font-size:14px;padding:9px 22px">¡Comenzar aventura! →</button>
    </div>`;
    // Wire up sprite swap after DOM is set
    if(id){
      const el=document.getElementById(revealId);
      if(el){
        const artUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        const smlUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const img=document.createElement("img");
        img.style.cssText="width:160px;height:160px;object-fit:contain;display:none;";
        el.appendChild(img);
        let tried=0;
        const urls=[artUrl,smlUrl];
        function tryNext(){
          img.onload=function(){el.querySelector("span").style.display="none";img.style.display="block";};
          img.onerror=function(){if(++tried<urls.length){img.src=urls[tried];}};
          img.src=urls[tried];
        }
        tryNext();
      }
    }
    ss("reveal");
  },500);
};

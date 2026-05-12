const POKEDEX_ALL = [
  POKEDEX_GEN1,
  POKEDEX_GEN2,
  POKEDEX_GEN3,
  POKEDEX_GEN4,
  POKEDEX_GEN5,
  POKEDEX_GEN6,
  POKEDEX_GEN7,
  POKEDEX_GEN8,
  POKEDEX_GEN9
];

let currentGen = 0;

function openPokedex() {
  currentGen = 0;
  renderPokedexScreen();
  ss("pokedex");
}

function renderPokedexScreen() {
  const gen = POKEDEX_ALL[currentGen];
  const container = document.getElementById("pokedex-content");
  
  const totalPokemon = gen.pokemon.length;
  const caughtInGen = gen.pokemon.filter(p => G.caught.has(p.name)).length;
  
  let html = `
    <div class="pokedex-header">
      <h2>Pokédex - ${gen.name}</h2>
      <span class="pokedex-gen-badge">Gen ${gen.generation}</span>
      <span class="pokedex-count">${caughtInGen}/${totalPokemon}</span>
    </div>
    <div class="pokedex-tabs">
  `;
  
  POKEDEX_ALL.forEach((g, i) => {
    const activeClass = i === currentGen ? 'active' : '';
    html += `<button class="pokedex-tab ${activeClass}" onclick="switchPokedexGen(${i})">${g.name}</button>`;
  });
  
  html += `</div><div class="pokedex-grid-full">`;
  
  gen.pokemon.forEach(p => {
    const isCaught = G.caught.has(p.name);
    const spriteId = p.id;
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteId}.png`;
    
    if (isCaught) {
      html += `
        <div class="pokedex-entry caught" onclick="showPokedexDetail(${p.id}, '${p.name}', '${p.type}', '${p.emoji}')">
          <img src="${spriteUrl}" alt="${p.name}" class="pokedex-sprite" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pokedex-emoji-fallback" style="display:none">${p.emoji}</span>
          <span class="pokedex-number">#${String(p.id).padStart(3, '0')}</span>
          <span class="pokedex-name">${p.name}</span>
          <span class="pokedex-type">${p.type}</span>
        </div>
      `;
    } else {
      html += `
        <div class="pokedex-entry unknown">
          <span class="pokedex-unknown-icon">?</span>
          <span class="pokedex-number">#${String(p.id).padStart(3, '0')}</span>
          <span class="pokedex-name">???</span>
        </div>
      `;
    }
  });
  
  html += `</div>`;
  container.innerHTML = html;
}

function switchPokedexGen(genIndex) {
  currentGen = genIndex;
  renderPokedexScreen();
}

function showPokedexDetail(id, name, type, emoji) {
  const detail = document.getElementById("pokedex-detail");
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const spriteSmall = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
  detail.innerHTML = `
    <div class="pokedex-detail-card">
      <button class="pokedex-detail-close" onclick="closePokedexDetail()">×</button>
      <div class="pokedex-detail-sprite">
        <img src="${spriteUrl}" alt="${name}" onerror="this.src='${spriteSmall}';this.onerror=null;">
      </div>
      <h2>${name}</h2>
      <span class="pokedex-detail-number">#${String(id).padStart(3, '0')}</span>
      <span class="pokedex-detail-type">${type}</span>
      <div class="pokedex-detail-info">
        <p>¡Has capturado a ${name}!</p>
      </div>
    </div>
  `;
  detail.style.display = "flex";
}

function closePokedexDetail() {
  document.getElementById("pokedex-detail").style.display = "none";
}

function backFromPokedex() {
  ss("world");
  renderWorld();
}

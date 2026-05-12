function renderGymPreviewScreen(gd,ri,ni){
  return `
    <div class="gym-preview">
      <h3>⚔️ ${gd.l} · ${gd.badge}</h3>
      <p style="font-size:12px;margin-bottom:10px">Tipo ${gd.type} · ${gd.pk.length} Pokémon</p>
      <div class="gym-team">
        ${gd.pk.map(p=>{
          const spr=spriteImg(p.n,"pk-sprite-md",p.s);
          return`<div class="gym-mon">${spr}<div class="mn">${p.n}</div><div class="ml">Nv.${p.lv||gd.pk[0].lv||"?"}</div></div>`;
        }).join("")}
      </div>
    </div>
    <p id="gp-advice" style="font-size:12px;color:var(--color-text-secondary);margin-bottom:10px;text-align:center"></p>
    <div style="display:flex;gap:7px;justify-content:center">
      <button onclick="confirmGym()">¡Luchar!</button>
      <button onclick="backFromGym()">← Volver al mapa</button>
    </div>
  `;
}

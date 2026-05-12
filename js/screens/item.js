function renderItemScreen(){
  return `
    <div class="item-found-card">
      <div style="font-size:52px;margin-bottom:8px" id="item-ico"></div>
      <div class="item-rarity" id="item-rbadge"></div>
      <h2 id="item-name" style="margin-bottom:4px"></h2>
      <p id="item-desc" style="font-size:13px;margin-bottom:16px"></p>
      <button onclick="itemContinue()">Continuar →</button>
    </div>
  `;
}

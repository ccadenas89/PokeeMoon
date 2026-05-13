function renderRouletteScreen(){
  return `
    <div class="roulette-wrap">
      <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:10px" id="rou-title">¡Evento entre nodos!</p>
      <div class="rou-ptr">▼</div>
      <div class="rou-wheel" id="rou-wheel" onclick="spinRoulette()"></div>
      <div class="rou-result" id="rou-result"></div>
      <button id="rou-btn" onclick="spinRoulette()">Girar ruleta</button>
    </div>
  `;
}

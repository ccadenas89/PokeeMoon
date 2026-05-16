function renderBattleScreen(){
  return `
    <div id="lvup-banner" class="lvup-banner"></div>
    <div class="battle-box">
      <div class="battle-bg">
      <img id="b-bg-img" class="battle-bg-img" src="" alt="" style="display:none">
      <div class="battle-panel battle-panel-enemy">
        <div class="fn" id="b-en"></div>
        <div class="fl" id="b-el"></div>
        <div class="hpb"><div class="hpf" id="b-eh" style="background:#E24B4A"></div></div>
        <div class="hpt" id="b-eht"></div>
      </div>
      <div class="ftr enemy">
        <div class="sp" id="b-es"></div>
      </div>
      <div class="divl"></div>
      <div class="ftr">
        <div class="sp" id="b-ps"></div>
      </div>
      <div class="battle-panel battle-panel-player">
        <div class="fn" id="b-pn"></div>
        <div class="fl" id="b-pl"></div>
        <div class="hpb"><div class="hpf" id="b-ph" style="background:#639922"></div></div>
        <div class="hpt" id="b-pht"></div>
      </div>
      </div>
    </div>
    <div class="blog" id="blog"></div>
    <div id="b-main">
      <div class="b-actions">
        <div class="mgrid" id="bmoves"></div>
        <div class="bgrid">
          <button onclick="bAct('bag')">Mochila</button>
          <button id="b-catch-btn" onclick="bAct('catch')">Poké Ball</button>
          <button onclick="bAct('team')">Equipo</button>
          <button onclick="bAct('run')" id="b-run-btn">Huir</button>
        </div>
      </div>
    </div>
    <div id="b-bag-panel" style="display:none">
      <p style="font-size:12px;margin-bottom:6px">Elige objeto:</p>
      <div style="display:flex;flex-direction:column;gap:5px" id="b-bag-items"></div>
      <button onclick="showBMain()" style="margin-top:7px">← Volver</button>
    </div>
    <div id="b-team-panel" style="display:none">
      <p style="font-size:12px;margin-bottom:6px">Elige Pokémon:</p>
      <div style="display:flex;flex-direction:column;gap:5px" id="b-team-list"></div>
      <button onclick="showBMain()" style="margin-top:7px">← Volver</button>
    </div>
  `;
}

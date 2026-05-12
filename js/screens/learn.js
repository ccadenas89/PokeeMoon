function renderLearnScreen(){
  return `
    <div style="display:flex;align-items:center;justify-content:center;height:100%">
      <div class="learn-modal" style="text-align:center">
        <h2 id="learn-title"></h2>
        <p id="learn-sub" style="font-size:13px"></p>
        <div style="display:flex;flex-direction:column;gap:5px;margin-top:8px;align-items:center" id="learn-opts"></div>
      </div>
    </div>
  `;
}

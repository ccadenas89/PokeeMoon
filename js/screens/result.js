function renderResultScreen(){
  return `
    <div style="text-align:center;padding:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center">
      <div style="font-size:56px" id="res-ico"></div>
      <h2 id="res-title" style="margin:10px 0 5px"></h2>
      <p id="res-msg" style="margin-bottom:18px"></p>
      <div style="display:flex;gap:7px;justify-content:center;flex-wrap:wrap" id="res-acts"></div>
    </div>
  `;
}

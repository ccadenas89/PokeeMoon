const Screens={
  render(screenId,html){
    const el=document.getElementById("s-"+screenId);
    if(el)el.innerHTML=html;
  },
  
  show(screenId){
    document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
    const el=document.getElementById("s-"+screenId);
    if(el)el.classList.add("active");
  },
  
  initScreen(screenId,renderFn){
    this.render(screenId,renderFn());
  }
};

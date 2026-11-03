(function(){
  const axisColor='#66729a', lineColor='#6658e8', pointColor='#536ee8';
  function decorate(root, ids, metric, frequency, mode){
    const svg=root?.querySelector('svg'); if(!svg||svg.dataset.axesDone)return;
    const lines=[...svg.querySelectorAll('.grid-line')]; if(!lines.length)return;
    const view=svg.viewBox.baseVal, labels=[];
    let values=[];
    try{
      const data=JSON.parse(localStorage.getItem('yhh-independent-financial-research-v2')||'{}');
      ids.forEach(id=>{
        let rows=(data.financials||[]).filter(r=>r.companyId===id&&r.metric===metric&&r.frequency===frequency).sort((a,b)=>String(a.period).localeCompare(String(b.period))).map(r=>Number(r.value));
        if(mode==='growth') rows=rows.map((v,i)=>i&&rows[i-1]!==0?(v/rows[i-1]-1)*100:null).filter(v=>v!==null);
        if(mode==='index'){const base=rows.find(v=>v!==0);rows=base?rows.map(v=>v/base*100):[]}
        values.push(...rows);
      });
    }catch{}
    const hi=values.length?Math.max(...values):100, lo=values.length?Math.min(...values):0, step=(hi-lo)/Math.max(1,lines.length-1);
    lines.forEach((line,i)=>{
      const y=line.getAttribute('y1'); const t=document.createElementNS('http://www.w3.org/2000/svg','text');
      t.setAttribute('x','4'); t.setAttribute('y',String(Number(y)+4)); t.setAttribute('class','axis-number');
      t.textContent=Number((hi-step*i).toFixed(2)).toLocaleString(); svg.appendChild(t);
    });
    svg.dataset.axesDone='1';
  }
  const original=window.drawChart;
  if(typeof original==='function') window.drawChart=function(root,ids,metric,frequency,mode){
    original(root,ids,metric,frequency,mode);
    const svg=root?.querySelector('svg'); if(svg){svg.querySelectorAll('polyline').forEach(x=>x.style.stroke=lineColor);svg.querySelectorAll('circle').forEach(x=>x.style.fill=pointColor)}
    decorate(root,ids,metric,frequency,mode);
  };
  const rerun=()=>document.querySelectorAll('.chart-card').forEach(x=>{const svg=x.querySelector('svg');if(svg&&!svg.dataset.axesDone){const root=x;decorate(root,[], '', '', '')}});
  new MutationObserver(rerun).observe(document.body,{subtree:true,childList:true});
  const current=location.hash.slice(1); if(current==='analytics'||current==='comparison') setTimeout(()=>document.querySelector(`[data-nav="${current}"]`)?.click(),0);
})();

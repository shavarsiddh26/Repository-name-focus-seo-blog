const keywordData=[
["python for beginners","Enter actual range","Medium","Informational","Primary"],
["learn python","Enter actual range","Medium","Informational","Secondary"],
["python tutorial","Enter actual range","Medium","Informational","Secondary"],
["python projects","Enter actual range","High","Informational","Supporting"],
["python programming","Enter actual range","High","Informational","Supporting"],
["python roadmap","Enter actual range","Low","Informational","Supporting"]
];
function renderKeywords(filter=""){const body=document.querySelector("#keywordRows");if(!body)return;const rows=keywordData.filter(r=>r.join(" ").toLowerCase().includes(filter.toLowerCase()));body.innerHTML=rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td><span class="pill">${r[2]}</span></td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join("");}
document.addEventListener("DOMContentLoaded",()=>{renderKeywords();const input=document.querySelector("#keywordInput");if(input)input.addEventListener("input",e=>renderKeywords(e.target.value));});
const toggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-site-nav]');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));}

const searchInput=document.querySelector('#resource-search');
const searchButton=document.querySelector('#search-button');
const suggestions=document.querySelector('#search-suggestions');
const topics=[
  ['integration','./class-12/integration/questions/','Class 12 · Integration questions'],
  ['determinants','./class-12/determinants/questions/','Class 12 · Determinants questions'],
  ['functions','./class-11/functions/questions/','Class 11 · Functions questions'],
  ['probability','./applied-mathematics/probability/questions/','Applied Mathematics · Probability questions'],
  ['question bank','./question-bank/','Question Bank'],
  ['pyq','./pyqs/','Previous Year Questions'],
  ['test','./free-tests/','Free Tests'],
  ['mistakes','./common-mistakes/','Common Mistakes'],
  ['formula','./notes-formulae/','Notes & Formulae']
];
function runSearch(){
  if(!searchInput)return;
  const q=searchInput.value.trim().toLowerCase();
  if(!q){suggestions.textContent='Try a chapter or resource type, such as “integration” or “PYQs”.';return;}
  const match=topics.find(([key])=>key.includes(q)||q.includes(key));
  if(match){window.location.href=match[1];return;}
  suggestions.textContent='No exact shortcut found. Try “integration”, “determinants”, “functions”, “probability”, “PYQs”, “tests” or “mistakes”.';
}
if(searchButton&&searchInput){searchButton.addEventListener('click',runSearch);searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')runSearch();});searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();if(!q){suggestions.textContent='';return;}const matches=topics.filter(([key])=>key.includes(q)||q.includes(key)).slice(0,3);suggestions.innerHTML=matches.length?matches.map(([,,label])=>`<span>${label}</span>`).join(' · '):'';});}

/* Holden's K-State Salina Hub — app logic. Data lives in data.js. */
(function(){
"use strict";
var CFG = window.HUB_CONFIG || {};
var API = (CFG.sheetsUrl || "").trim();
var DEFAULT_TODOS=[
 {id:"s1",text:"Call K-State Salina Admissions to ask about additional scholarships I can still apply for (785-826-2640 · salinaadmissions@k-state.edu)",who:"Holden",due:"2026-11-20",done:false},
 {id:"s7",text:"Ask about the Vanier Family Aviation Maintenance Scholarship (up to $7,500/yr for Aviation Maintenance Management majors who file the FAFSA)",who:"Holden",due:"2026-11-20",done:false},
 {id:"s2",text:"Complete the K-State Scholarship Network (KSN) application",who:"Holden",due:"2027-02-01",done:false},
 {id:"s3",text:"Submit the FAFSA (K-State school code 001928)",who:"Parents",due:"2026-12-15",done:false},
 {id:"s4",text:"Sign up for K-State Salina New Student Onboarding and enroll in Fall 2027 classes",who:"Holden",due:"",done:false},
 {id:"s5",text:"Apply for on-campus housing at K-State Salina (first-year students live on campus)",who:"Family",due:"",done:false},
 {id:"s6",text:"Send final high school transcript to K-State after graduation",who:"Holden",due:"",done:false}
];
var STATE={todos:[],needs:[],awardTier:"",edited:""};
function lsGet(k){ try{ var v=localStorage.getItem(k); return v?JSON.parse(v):null; }catch(e){ return null; } }
function lsSet(k,s){ try{ localStorage.setItem(k, JSON.stringify(s)); }catch(e){} }

/* ---------- THEME ---------- */
var theme = lsGet('holden-ksu-theme') || "auto";
function applyTheme(){ if(theme==="auto") document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme',theme); }
applyTheme();

/* ---------- DATA ---------- */
var START = new Date(2027,7,16,8,0,0);
var TIERS = {
  "100":{label:"3.90+ GPA · 100% of nonresident tuition", yr:19101, tot:76404},
  "80":{label:"3.75–3.89 GPA · 80%", yr:15281, tot:61124},
  "60":{label:"3.50–3.74 GPA · 60%", yr:11461, tot:45844},
  "50":{label:"3.25–3.49 GPA · 50%", yr:9551, tot:38204}
};
var COST = { tuition:30072, housing:10510, books:1052, transport:1400, personal:2228 };




var CATS = {fb:"Football",bb:"Men's Basketball",ac:"Academic",br:"Breaks & Holidays",dl:"Deadlines",or:"Orientation & Visits",fa:"Family To-Do"};


var NEED_CATS = ["Travel","Clothing","Tech","Dorm room","Bath & laundry","School supplies","Other"];
var SUGGEST = [["Luggage bags","Travel"],["New shoes","Clothing"],["iPad","Tech"],["Laptop","Tech"],["Headphones","Tech"],["Bedding & pillow","Dorm room"],["Desk lamp","Dorm room"],["Towels","Bath & laundry"],["Shower caddy","Bath & laundry"],["Laundry basket","Bath & laundry"],["Winter coat","Clothing"],["Backpack","School supplies"]];

/* ---------- HELPERS ---------- */
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
function parseD(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function money(n){return "$"+Math.round(n).toLocaleString("en-US");}
var DOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], MONL=["January","February","March","April","May","June","July","August","September","October","November","December"];
function today0(){var d=new Date();d.setHours(0,0,0,0);return d;}
function uid(){return "t"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function srcLink(k,label){var s=SRC[k];return '<a href="'+esc(s.u)+'" target="_blank" rel="noopener">'+esc(label||s.t)+'</a>';}
function fmtStamp(iso){ if(!iso) return ""; var d=new Date(iso); if(isNaN(d)) return ""; var h=d.getHours(),m=("0"+d.getMinutes()).slice(-2),ap=h>=12?"PM":"AM"; h=h%12||12; return MON[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+" · "+h+":"+m+" "+ap; }

var EMBLEM = function(sz,id){return '<svg viewBox="0 0 400 400" width="'+sz+'" height="'+sz+'" aria-hidden="true" focusable="false">'+
 '<defs><linearGradient id="g'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7b52b9"/><stop offset="1" stop-color="#2e1452"/></linearGradient>'+
 '<path id="c'+id+'" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"/></defs>'+
 '<circle cx="200" cy="200" r="196" fill="#f2c14e"/><circle cx="200" cy="200" r="184" fill="url(#g'+id+')"/>'+
 (sz>60?'<g class="spin"><text font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="25" letter-spacing="5" fill="#f2c14e"><textPath href="#c'+id+'">HOLDEN · FUTURE WILDCAT · AVIATION MAINTENANCE · SALINA, KS · </textPath></text></g>':'')+
 '<circle cx="200" cy="200" r="122" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="2" stroke-dasharray="4 8"/>'+
 '<path d="M96 262 C150 250 230 222 300 150" stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="2 12"/>'+
 '<g transform="translate(300 150) rotate(-38)" fill="#fff"><path d="M-30 0 L22 -5 Q34 0 22 5 Z"/><path d="M-4 -3 L-18 -26 L-10 -26 L12 -3 Z"/><path d="M-4 3 L-18 26 L-10 26 L12 3 Z"/><path d="M-26 -2 L-34 -12 L-29 -12 L-20 -2 Z"/><path d="M-26 2 L-34 12 L-29 12 L-20 2 Z"/></g>'+
 '<g fill="#fff"><ellipse cx="190" cy="236" rx="46" ry="38"/><ellipse cx="136" cy="186" rx="17" ry="22" transform="rotate(-22 136 186)"/><ellipse cx="170" cy="158" rx="17" ry="23" transform="rotate(-8 170 158)"/><ellipse cx="212" cy="158" rx="17" ry="23" transform="rotate(8 212 158)"/><ellipse cx="244" cy="188" rx="17" ry="22" transform="rotate(24 244 188)"/></g>'+
 '<text x="190" y="248" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="30" fill="#512888">’27</text>'+
 '</svg>';};

var ICONS = {
 cal:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
 cash:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>',
 list:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
 bag:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>',
 del:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>',
 ok:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'
};
var THEME_LABEL={auto:"◐ Auto",light:"☀ Light",dark:"☾ Dark"};

/* ---------- SHELL ---------- */
var root=document.getElementById('root');
root.innerHTML=
 '<a class="skip" href="#main" id="skipLink">Skip to content</a>'+
 '<header class="nav"><div class="wrap">'+
  '<a class="brand" href="#home">'+EMBLEM(34,"n")+'<span><small>Our K-State Hub</small>K-State Salina</span></a>'+
  '<button class="navBtn burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu">☰</button>'+
  '<nav class="menu" id="menu" aria-label="Main"><a href="#home" data-v="home">Home</a><a href="#news" data-v="news">News</a><a href="#calendar" data-v="calendar">Calendar</a><a href="#finances" data-v="finances">Finances</a><a href="#todos" data-v="todos">To Do\'s</a><a href="#needs" data-v="needs">Things I Need</a><a href="#sources" data-v="sources">Sources</a></nav>'+
  '<button class="navBtn" id="themeBtn" aria-label="Color theme"></button>'+
 '</div></header>'+
 '<div class="updated" role="status"><div class="wrap" id="updatedBar"></div></div>'+
 '<main id="main" tabindex="-1">'+
 '<section class="page" id="v-home"></section><section class="page" id="v-news"></section><section class="page" id="v-calendar"></section><section class="page" id="v-finances"></section>'+
 '<section class="page" id="v-todos"></section><section class="page" id="v-needs"></section><section class="page" id="v-sources"></section>'+
 '</main>'+
 '<footer><div class="wrap">A private family planning page · Not affiliated with or endorsed by Kansas State University · Always confirm details with <a href="https://www.salina.k-state.edu/" target="_blank" rel="noopener">salina.k-state.edu</a> · <a href="#sources">Sources</a></div></footer>';

var burger=document.getElementById('burger'), menu=document.getElementById('menu');
burger.onclick=function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false');};
document.getElementById('skipLink').onclick=function(e){e.preventDefault();document.getElementById('main').focus();};
var themeBtn=document.getElementById('themeBtn');
function drawThemeBtn(){themeBtn.textContent=THEME_LABEL[theme];themeBtn.setAttribute('aria-label','Color theme: '+theme+'. Click to change.');}
themeBtn.onclick=function(){theme=theme==="auto"?"light":theme==="light"?"dark":"auto";lsSet('holden-ksu-theme',theme);applyTheme();drawThemeBtn();};
drawThemeBtn();
function drawUpdated(){
 document.getElementById('updatedBar').innerHTML='<span>Last updated: <b>'+INFO_UPDATED+'</b> (schedules, costs &amp; news · updated automatically)</span>'+(STATE.edited?'<span>Lists last edited: <b>'+fmtStamp(STATE.edited)+'</b></span>':'');
}
drawUpdated();

/* ---------- HOME ---------- */
function renderHome(){
 var el=document.getElementById('v-home');
 var openTodos=STATE.todos.filter(function(t){return !t.done;}).length;
 var needLeft=STATE.needs.filter(function(n){return !n.got;}).length;
 var next=nextEvent();
 el.innerHTML=
 '<div class="hero"><div class="stripes"></div><div class="wrap">'+
  '<div><span class="eyebrow"><i></i>Accepted · Fall 2027</span>'+
  '<h1 class="big disp">Holden is a <span class="g">Wildcat</span><br><span class="o">K-State</span> Salina</h1>'+
  '<div class="degree"><div><div class="k">Bachelor of Science</div><div class="v">Aviation Maintenance Management ✈️🔧</div></div></div>'+
  '<p class="lede">From home in Texas to Kansas State University Salina Aerospace and Technology Campus. Everything the family needs to get ready for freshman year — in one place.</p>'+
  '<div class="chips"><span class="chip">🎓 Future Wildcat</span><span class="chip">📍 Salina, Kansas</span><span class="chip">🐾 Go Cats!</span></div></div>'+
  '<div class="badgeWrap">'+EMBLEM(340,"h")+'</div>'+
 '</div></div>'+
 '<div class="wrap">'+
  '<div class="countdown"><div class="cdCard" role="timer" aria-label="Countdown to the first day of classes">'+
   '<div><div class="cdLabel">Countdown to college</div><div class="cdTitle">First day of classes · Mon, Aug 16, 2027</div><div class="cdSub">K-State Fall 2027 semester begins</div></div>'+
   '<div class="cdNums"><div class="cdBox days"><b id="cdD">—</b><span>Days</span></div><div class="cdBox"><b id="cdH">—</b><span>Hours</span></div><div class="cdBox"><b id="cdM">—</b><span>Min</span></div><div class="cdBox"><b id="cdS">—</b><span>Sec</span></div></div>'+
  '</div></div>'+
  '<div class="quick">'+
   '<a class="qCard" href="#news"><div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h13v16H6a2 2 0 0 1-2-2z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M8 8h5M8 12h5M8 16h3"/></svg></div><h3>News</h3><p>Athletics, Salina and Manhattan headlines.</p><div class="stat">'+NEWS.length+' recent stories</div></a>'+
   '<a class="qCard" href="#calendar"><div class="ic">'+ICONS.cal+'</div><h3>Calendar</h3><p>Games, semester dates, breaks and deadlines.</p><div class="stat">'+(next?('Next: '+esc(next.t)+' · '+MON[parseD(next.d).getMonth()]+' '+parseD(next.d).getDate()):'')+'</div></a>'+
   '<a class="qCard" href="#finances"><div class="ic">'+ICONS.cash+'</div><h3>Finances</h3><p>Costs, Holden\'s award and more scholarships.</p><div class="stat">🎉 Wildcat Nonresident Award</div></a>'+
   '<a class="qCard" href="#todos"><div class="ic">'+ICONS.list+'</div><h3>To Do\'s</h3><p>Shared family checklist.</p><div class="stat">'+(isLocked()?'🔒 Family code needed':openTodos+' open item'+(openTodos===1?'':'s'))+'</div></a>'+
   '<a class="qCard" href="#needs"><div class="ic">'+ICONS.bag+'</div><h3>Things I Need</h3><p>Holden\'s shopping list for college.</p><div class="stat">'+(isLocked()?'🔒 Family code needed':needLeft+' still to get')+'</div></a>'+
  '</div>'+

  '<div class="secHead"><div><h2 class="disp">Holden\'s Major</h2><p>What the Aviation Maintenance Management degree is all about.</p></div></div>'+
  '<div class="program">'+
   '<div class="progMain"><div class="k">B.S. · K-State Salina Aerospace and Technology Campus</div><h3>Aviation Maintenance Management</h3>'+
    '<p>A bachelor\'s degree that pairs hands-on aircraft maintenance training with the leadership and business skills to move into management. Courses follow an FAA Part 147–approved curriculum that prepares students to sit for the FAA Airframe &amp; Powerplant (A&amp;P) certification exams.</p>'+
    '<div class="facts"><div class="fact"><b>FAA A&amp;P</b><span>Certification exam prep built in</span></div><div class="fact"><b>4 years</b><span>Full-time bachelor\'s degree</span></div><div class="fact"><b>On an airport</b><span>Campus sits next to Salina Regional Airport</span></div></div>'+
    '<p style="margin-top:14px;font-size:13.5px">Coursework areas include non-destructive testing, advanced composites, avionics, math, computer skills and communication. '+srcLink('amm2','Program overview →')+'</p></div>'+
   '<div class="card"><h3>Where it can lead</h3><div class="muted">Career paths K-State lists for this degree</div>'+
    '<div class="pillList"><span class="pill">Hangar manager</span><span class="pill">Maintenance, repair &amp; overhaul (MRO)</span><span class="pill">Quality director</span><span class="pill">Logistics &amp; supply chain</span><span class="pill">Sales &amp; acquisition</span><span class="pill">Service engineering</span></div>'+
    '<h3 style="margin-top:16px;font-size:16px">Possible concentrations</h3><div class="muted">Areas students have been able to focus on</div>'+
    '<div class="pillList"><span class="pill">Aviation safety</span><span class="pill">Avionics systems</span><span class="pill">Composite structures</span><span class="pill">Private pilot</span><span class="pill">Business &amp; management</span><span class="pill">Aerospace manufacturing</span></div>'+
    '<p class="muted" style="margin:14px 0 0">💡 There\'s a scholarship just for this major — see the <a href="#finances">Vanier Family Aviation Maintenance Scholarship</a>.</p></div>'+
  '</div>'+

  '<div class="secHead"><div><h2 class="disp">The Road to K-State</h2><p>From home in Texas to campus in Salina, game days in Manhattan, and Grandma &amp; Grandpa\'s in Clay Center.</p></div></div>'+
  '<div class="mapGrid"><div class="mapCard">'+mapSVG()+'</div><div class="dest">'+destCards()+
   '<p class="note" style="margin:4px 0 0">The map is a simplified drawing; lines follow the general highway route (I-35 to Wichita, then I-135 to Salina). Mileage shown is straight-line distance. Tap “Directions” for exact driving routes and times.</p></div></div>'+

  '<div class="secHead"><div><h2 class="disp">Official K-State Websites</h2><p>Go straight to the source.</p></div></div>'+
  '<div class="siteLinks">'+
   '<a class="siteLink" href="https://www.k-state.edu/" target="_blank" rel="noopener"><div><b>Kansas State University</b><span>k-state.edu · main campus, Manhattan</span></div><span class="arr" aria-hidden="true">→</span></a>'+
   '<a class="siteLink alt" href="https://www.salina.k-state.edu/" target="_blank" rel="noopener"><div><b>K-State Salina</b><span>salina.k-state.edu · Aerospace &amp; Technology Campus</span></div><span class="arr" aria-hidden="true">→</span></a>'+
   '<a class="siteLink gold" href="https://www.kstatesports.com/" target="_blank" rel="noopener"><div><b>K-State Athletics</b><span>kstatesports.com · schedules &amp; tickets</span></div><span class="arr" aria-hidden="true">→</span></a>'+
  '</div>'+
 '</div><div style="height:60px"></div>';
 tick();
}

/* ---------- MAP (drawn in SVG, no outside map service) ---------- */
var PLACES={
 cp:{n:"Cedar Park, TX",lat:30.505,lon:-97.820},
 sal:{n:"K-State Salina",lat:38.812,lon:-97.653},
 man:{n:"Bill Snyder Family Stadium",lat:39.202,lon:-96.594},
 cc:{n:"Clay Center, KS",lat:39.377,lon:-97.125}
};
function mkProj(lon0,lat1,k){var kx=k*Math.cos(37*Math.PI/180);return function(lon,lat){return [((lon-lon0)*kx).toFixed(1),((lat1-lat)*k).toFixed(1)];};}
function miles(a,b){var R=3958.8,r=Math.PI/180,dl=(b.lat-a.lat)*r,dn=(b.lon-a.lon)*r;var h=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)*Math.sin(dn/2);return Math.round(2*R*Math.asin(Math.sqrt(h)));}
var C_SAL="#7b52b9", C_MAN="#d48a00", C_CC="#1f8a5b";
var ROUTE_MAIN=[[-97.82,30.505],[-97.68,30.63],[-97.15,31.55],[-97.33,32.75],[-97.13,33.6],[-97.52,35.47],[-97.34,37.69],[-97.6,38.36],[-97.653,38.812]];
var ROUTE_MAN=[[-97.653,38.812],[-97.6,38.87],[-97.214,38.917],[-96.832,39.028],[-96.70,39.12],[-96.594,39.202]];
var ROUTE_CC=[[-97.653,38.812],[-97.5,38.93],[-97.3,39.15],[-97.125,39.377]];
function drawMap(o){
 var P=mkProj(o.lon0,o.lat1,o.k);
 var poly=function(pts){return pts.map(function(p){return P(p[0],p[1]).join(',');}).join(' ');};
 var line=function(pts){return pts.map(function(p,i){return (i?'L':'M')+P(p[0],p[1]).join(',');}).join(' ');};
 var w=Math.round((o.lon1-o.lon0)*o.k*Math.cos(37*Math.PI/180)), h=Math.round((o.lat1-o.lat0)*o.k);
 var city=function(c){var p=P(c[1],c[2]);return '<circle class="mCity" cx="'+p[0]+'" cy="'+p[1]+'" r="3"/><text class="mCityT" x="'+(+p[0]+(c[3]||8))+'" y="'+(+p[1]+(c[5]||4))+'" text-anchor="'+(c[4]||'start')+'">'+c[0]+'</text>';};
 var pin=function(c){var pl=PLACES[c[0]],p=P(pl.lon,pl.lat);return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(o.pinR||9)+'" style="fill:'+c[1]+'" class="mHalo"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="#fff"/><text class="mPinT" x="'+(+p[0]+c[3])+'" y="'+(+p[1]+c[4])+'" text-anchor="'+(c[5]||'start')+'">'+c[2]+'</text>';};
 var rt=function(pts,col,dash){return '<path class="mRoute" d="'+line(pts)+'" stroke="var(--card)" stroke-width="9"/><path class="mRoute" d="'+line(pts)+'" stroke="'+col+'" stroke-width="5"'+(dash?' stroke-dasharray="1 8"':'')+'/>';};
 return '<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-labelledby="'+o.id+'T '+o.id+'D"><title id="'+o.id+'T">'+o.title+'</title><desc id="'+o.id+'D">'+o.desc+'</desc>'+
  (o.states||[]).map(function(s){return '<polygon class="mLand'+(s[1]?' ks':'')+'" points="'+poly(s[0])+'"/>';}).join('')+
  (o.labels||[]).map(function(l){var p=P(l[1],l[2]);return '<text class="mState" x="'+p[0]+'" y="'+p[1]+'">'+l[0]+'</text>';}).join('')+
  (o.cities||[]).map(city).join('')+
  rt(ROUTE_MAIN,C_SAL)+rt(ROUTE_MAN,C_MAN)+rt(ROUTE_CC,C_CC,true)+
  (o.pins||[]).map(pin).join('')+
  (o.frame?'<rect x="'+P(o.frame[0],o.frame[3])[0]+'" y="'+P(o.frame[0],o.frame[3])[1]+'" width="'+(P(o.frame[1],0)[0]-P(o.frame[0],0)[0])+'" height="'+(P(0,o.frame[2])[1]-P(0,o.frame[3])[1])+'" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4" rx="4"/>':'')+
 '</svg>';
}
var TX=[[-106.6,32],[-103.06,32],[-103.04,36.5],[-100,36.5],[-100,34.56],[-99.2,34.4],[-98.1,34.13],[-96.9,33.9],[-95.5,33.88],[-94.04,33.55],[-94.04,31],[-93.6,29.8],[-94.7,29.35],[-96.4,28.4],[-97.2,27.6],[-97.4,26],[-98.2,26.1],[-99.1,26.5],[-99.5,27.5],[-100.3,28.3],[-101.4,29.8],[-102.4,29.8],[-103.1,29],[-104.5,29.7],[-104.7,30.4],[-106.6,31.9]];
var OKL=[[-103,37],[-94.62,37],[-94.43,35.4],[-94.48,33.64],[-95.5,33.88],[-96.9,33.9],[-98.1,34.13],[-99.2,34.4],[-100,34.56],[-100,36.5],[-103,36.5]];
var KS=[[-102.05,40],[-95.3,40],[-94.9,39.7],[-94.6,39.1],[-94.62,37],[-102.04,37]];
function mapSVG(){
 return drawMap({id:"mapA",lon0:-101.6,lon1:-93.6,lat0:29.6,lat1:40.4,k:56,
  title:"Route map from home in Texas to Kansas",
  desc:"A simplified map of Texas, Oklahoma and Kansas. A purple route runs north from home in Central Texas along Interstate 35 through Fort Worth, Oklahoma City and Wichita, then to K-State Salina. The dashed box marks the Central Kansas close-up below.",
  states:[[TX],[OKL],[KS,1]],labels:[["Kansas",-101.1,38.2],["Oklahoma",-101.1,35.9],["Texas",-101.1,32.6]],
  cities:[["Austin",-97.74,30.27],["Fort Worth",-97.33,32.75,-8,"end"],["Oklahoma City",-97.52,35.47,-8,"end"],["Wichita",-97.34,37.69,8]],
  pins:[["cp",C_SAL,"Home (Texas)",14,-8],["sal",C_SAL,"Salina",-14,5,"end"]],frame:[-97.95,-96.35,38.62,39.55]})+
 '<div style="font-size:12.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:10px 6px 4px">Close-up · Central Kansas</div>'+
 drawMap({id:"mapB",lon0:-97.95,lon1:-96.35,lat0:38.62,lat1:39.55,k:300,pinR:10,
  title:"Close-up of Central Kansas",
  desc:"From K-State Salina, a gold route heads east past Abilene and Junction City to Bill Snyder Family Stadium in Manhattan, about 63 miles away in a straight line. A green dotted route goes northeast to Clay Center, about 48 miles away.",
  states:[[KS,1]],
  cities:[["Abilene",-97.214,38.917,0,"middle",20],["Junction City",-96.832,39.028,0,"middle",22]],
  pins:[["sal",C_SAL,"K-State Salina",0,26,"middle"],["man",C_MAN,"Manhattan · Bill Snyder Stadium",14,32,"end"],["cc",C_CC,"Grandma & Grandpa's · Clay Center",0,-16,"middle"]]});
}
function gdir(o,d){return 'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(o)+'&destination='+encodeURIComponent(d);}
function destCards(){
 var CP="Cedar Park, TX", SAL="Kansas State University Salina, 2310 Centennial Rd, Salina, KS 67401", MAN="Bill Snyder Family Stadium, Manhattan, KS", CC="Clay Center, KS";
 var it=function(col,title,sub,mi,links){return '<div class="destItem"><span class="dot" style="background:'+col+';color:'+col+'" aria-hidden="true"></span><div><h3>'+title+'</h3><p>'+sub+'</p><div class="dist">≈ '+mi+' miles from home (straight line)</div>'+links+'</div></div>';};
 var a=function(u,t){return '<a href="'+esc(u)+'" target="_blank" rel="noopener">'+t+'</a>';};
 return it(C_SAL,"🎓 K-State Salina campus","2310 Centennial Rd, Salina, KS · Holden's new home",miles(PLACES.cp,PLACES.sal),a(gdir(CP,SAL),"Directions from home →"))+
  it(C_MAN,"🏈 Bill Snyder Family Stadium","Manhattan, KS · Wildcat football game days",miles(PLACES.cp,PLACES.man),a(gdir(CP,MAN),"From home →")+a(gdir(SAL,MAN),"From Salina campus ("+miles(PLACES.sal,PLACES.man)+" mi) →"))+
  it(C_CC,"🏡 Grandma &amp; Grandpa\'s","Clay Center, KS",miles(PLACES.cp,PLACES.cc),a(gdir(CP,CC),"From home →")+a(gdir(SAL,CC),"From Salina campus ("+miles(PLACES.sal,PLACES.cc)+" mi) →"));
}

/* ---------- NEWS ---------- */
var newsFilter="all";
function renderNews(){
 var el=document.getElementById('v-news');
 el.innerHTML='<div class="pageHero"><div class="wrap"><h1 class="disp">Latest News</h1><p>Wildcat men\'s athletics, the Salina campus, and the main campus in Manhattan.</p></div></div>'+
 '<div class="wrap pageBody">'+
  '<div class="tabs" id="newsTabs" role="group" aria-label="Filter news" style="margin-bottom:16px">'+[["all","All"],["ath","Men's Athletics"],["sal","K-State Salina"],["man","Manhattan"]].map(function(t){return '<button class="tab" aria-pressed="'+(newsFilter===t[0])+'" data-g="'+t[0]+'">'+t[1]+'</button>';}).join('')+'</div>'+
  '<div class="newsGrid" id="newsGrid"></div>'+
  '<p class="note">Headlines and summaries are written for this page; tap a source to read the full story. Full list on the <a href="#sources">Sources</a> page.</p></div>';
 el.querySelectorAll('#newsTabs .tab').forEach(function(b){b.onclick=function(){newsFilter=b.dataset.g;renderNews();};});
 drawNews(newsFilter);
}
var GL={ath:"Men's Athletics",sal:"K-State Salina",man:"Manhattan Campus"};
function drawNews(g){
 document.getElementById('newsGrid').innerHTML=NEWS.filter(function(n){return g==='all'||n.g===g;}).map(function(n){
  return '<article class="news '+n.g+'"><div class="band"></div><div class="body"><span><span class="tag">'+GL[n.g]+'</span></span><h3>'+esc(n.t)+'</h3><p>'+esc(n.s)+'</p><div class="meta"><span>'+esc(n.date)+'</span>'+srcLink(n.src,n.by+' →')+'</div></div></article>';
 }).join('');
}
function tick(){
 var d=document.getElementById('cdD'); if(!d) return;
 var ms=START-new Date(); if(ms<0) ms=0;
 d.textContent=Math.floor(ms/864e5); document.getElementById('cdH').textContent=Math.floor(ms/36e5)%24;
 document.getElementById('cdM').textContent=("0"+Math.floor(ms/6e4)%60).slice(-2); document.getElementById('cdS').textContent=("0"+Math.floor(ms/1e3)%60).slice(-2);
}
setInterval(tick,1000);
/* Roll over to the new day on its own: re-draw the current page at midnight so 'upcoming' events and countdown stay current */
var dayKey=today0().getTime();
setInterval(function(){var k=today0().getTime();if(k!==dayKey){dayKey=k;var a=document.activeElement;if(!a||!/TEXTAREA|INPUT|SELECT/.test(a.tagName)){var v=(location.hash||"#home").slice(1);if(VIEWS[v])VIEWS[v]();else renderHome();}}},60000);
function nextEvent(){var t=today0();var all=allEvents();for(var i=0;i<all.length;i++){if(parseD(all[i].d)>=t)return all[i];}return null;}

/* ---------- CALENDAR ---------- */
var calFilter="all", hidePast=true;
function allEvents(){
 var fam=STATE.todos.filter(function(t){return t.due&&!t.done;}).map(function(t){return {d:t.due,c:"fa",t:t.text.length>70?t.text.slice(0,70)+"…":t.text,s:"To-do for "+(t.who||"Family"),info:t.text,todo:1};});
 return EVENTS.concat(fam).sort(function(a,b){return a.d<b.d?-1:a.d>b.d?1:0;});
}
var openEv={};
function srcHost(u){try{return new URL(u).hostname.replace(/^www\./,"");}catch(e){return "source";}}
function renderCalendar(){
 var el=document.getElementById('v-calendar');
 var chips='<button class="tab" aria-pressed="'+(calFilter==='all')+'" data-c="all">All</button>'+Object.keys(CATS).map(function(k){return '<button class="tab" aria-pressed="'+(calFilter===k)+'" data-c="'+k+'">'+CATS[k]+'</button>';}).join('');
 var t=today0(), list=allEvents().filter(function(e){return (calFilter==='all'||e.c===calFilter)&&(!hidePast||parseD(e.d)>=t);});
 var html='', lastM='';
 list.forEach(function(e){
  var d=parseD(e.d), mk=d.getFullYear()+'-'+d.getMonth(), key=e.d+'|'+e.t;
  if(mk!==lastM){html+='<h2 class="month disp">'+MONL[d.getMonth()]+' '+d.getFullYear()+'</h2>';lastM=mk;}
  var rows='';
  rows+='<div class="kv"><b>Date</b><span>'+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()]+', '+MONL[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()+'</span></div>';
  if(e.time) rows+='<div class="kv"><b>Time</b><span>'+esc(e.time)+'</span></div>';
  if(e.place) rows+='<div class="kv"><b>Where</b><span>'+esc(e.place)+'</span></div>';
  if(e.tv) rows+='<div class="kv"><b>Watch</b><span>'+esc(e.tv)+'</span></div>';
  if(e.info) rows+='<div class="kv"><b>Details</b><span>'+esc(e.info)+'</span></div>';
  var link=e.todo?'<a class="srcBtn" href="#todos">Open To Do\'s →</a>':(e.src&&SRC[e.src]?'<a class="srcBtn" href="'+esc(SRC[e.src].u)+'" target="_blank" rel="noopener">More info on '+esc(srcHost(SRC[e.src].u))+' →</a><span class="srcName">Source: '+esc(SRC[e.src].t)+'</span>':'');
  html+='<details class="ev'+(e.star?' star':'')+(d<t?' past':'')+'" data-k="'+esc(key)+'"'+(openEv[key]?' open':'')+'><summary><div class="dateBox" aria-hidden="true"><div class="dw">'+DOW[d.getDay()]+'</div><div class="dd">'+d.getDate()+'</div><div class="dm">'+MON[d.getMonth()]+'</div></div>'+
   '<div class="evMain"><span class="sr">'+DOW[d.getDay()]+' '+MONL[d.getMonth()]+' '+d.getDate()+': </span><h3><span class="cat c-'+e.c+'">'+CATS[e.c]+'</span>'+esc(e.t)+'</h3>'+(e.s?'<div class="sub">'+esc(e.s)+'</div>':'')+'</div><span class="chev" aria-hidden="true">▾</span></summary>'+
   '<div class="evBody">'+rows+'<div class="srcRow">'+link+'</div></div></details>';
 });
 if(!list.length) html='<div class="empty">Nothing upcoming in this category.</div>';
 el.innerHTML=
 '<div class="pageHero"><div class="wrap"><h1 class="disp">KSU Calendar</h1><p>Tap any event for the time, place, how to watch and a link to the official source. Family to-dos with due dates show up here too.</p></div></div>'+
 '<div class="wrap pageBody">'+
  '<div class="calTools"><div class="tabs" id="calTabs" role="group" aria-label="Filter events">'+chips+'</div><label class="toggle"><input type="checkbox" id="hidePast" '+(hidePast?'checked':'')+'> Upcoming only</label></div>'+
  html+
  '<div class="tba"><h3>📌 Dates still to be announced</h3><ul>'+
   '<li><b>K-State Salina New Student Onboarding</b> (summer 2027) — Salina runs its own onboarding, separate from Manhattan\'s orientation. Questions: salinaadmissions@k-state.edu · 785-826-2640.</li>'+
   '<li><b>Admitted-student &amp; open-house visit days</b> — Salina has hosted fall Preview Days and a spring Open House in past years; watch for spring 2027 dates.</li>'+
   '<li><b>Move-in / Welcome Week</b> — expected the week before classes start on Aug 16, 2027.</li>'+
   '<li><b>2027 Big 12 football dates</b> — Home: Baylor, BYU, Cincinnati, Utah, West Virginia. Away: Arizona, UCF, Kansas, Texas Tech. '+srcLink('fb27b','Source →')+'</li>'+
   '<li><b>Holden\'s high school graduation</b> — add it as a to-do with a date and it will appear above.</li>'+
  '</ul></div>'+
  '<p class="sources" style="margin-top:18px">Sources: '+srcLink('cal')+' · '+srcLink('fbsch')+' · '+srcLink('pe16','Players Era game times')+' · '+srcLink('n4','Big 12 basketball dates')+' · <a href="#sources">all sources</a></p>'+
 '</div>';
 el.querySelectorAll('#calTabs .tab').forEach(function(b){b.onclick=function(){calFilter=b.dataset.c;renderCalendar();};});
 el.querySelectorAll('details.ev').forEach(function(dt){dt.addEventListener('toggle',function(){if(dt.open)openEv[dt.dataset.k]=1;else delete openEv[dt.dataset.k];});});
 document.getElementById('hidePast').onchange=function(){hidePast=this.checked;renderCalendar();};
}

/* ---------- FINANCES ---------- */
var SCH=[
 {n:"Vanier Family Aviation Maintenance Scholarship",a:"Up to $7,500/yr",p:"For students seeking the Aviation Maintenance Management degree at the Salina campus. If other aid falls short of the program's target, this award fills the gap automatically — renewable one more year (up to $15,000). Requires filing the FAFSA by the priority deadline each year and full-time enrollment.",d:"File FAFSA by the priority deadline",src:"vamm",fit:"Made for Holden's major"},
 {n:"Vanier Presidential Scholarship",a:"Up to $80,000",p:"K-State Salina's most prestigious award, only for Salina-campus students. Note: it replaces any other award rather than stacking.",d:"Salina competitive scholarship",src:"ksch"},
 {n:"Vanier Family Leadership Scholarship",a:"$5,000/yr · $20,000",p:"For incoming undergraduates enrolled full-time at K-State Salina; renewable for four years.",d:"Salina competitive scholarship",src:"comp"},
 {n:"Vanier Family Bluemont Scholarship",a:"See site",p:"For high-achieving incoming full-time K-State Salina students (strong GPA/ACT or top 10% of graduating class).",d:"Salina competitive scholarship",src:"comp"},
 {n:"Great Plains Manufacturing Scholars Program",a:"Scholarship + paid work",p:"Partnership with a Salina manufacturer combining scholarship support with on-the-job training while earning a bachelor's degree.",d:"Competitive · Salina only",src:"ksch"},
 {n:"K-State Scholarship Network (KSN)",a:"Varies",p:"One application that automatically considers Holden for many college and departmental scholarships. Access opens once admitted.",d:"Apply by Feb 1, 2027",src:"ksn"},
 {n:"Competitive & Alumni Awards",a:"Varies",p:"Awards through K-State alumni clubs and programs, plus one for students with a family member in the K-State Alumni Association.",d:"Supplemental apps due Dec 15",src:"frosh"},
 {n:"FAFSA — federal aid",a:"Grants, work-study, loans",p:"File the FAFSA and list K-State's school code 001928. It's also required for the Vanier Aviation Maintenance award.",d:"File as early as possible",src:"fafsa"},
 {n:"Local Texas scholarships",a:"Varies",p:"Ask the high school counseling office about local and civic scholarships — these can be used at any university.",d:"Spring of senior year",src:null}
];
function renderFinances(){
 var el=document.getElementById('v-finances');
 var tier=TIERS[STATE.awardTier], awYr=tier?tier.yr:0;
 var total=COST.tuition+COST.housing+COST.books+COST.transport+COST.personal;
 var tierOpts='<option value="">Select Holden\'s award level…</option>'+Object.keys(TIERS).map(function(k){return '<option value="'+k+'"'+(STATE.awardTier===k?' selected':'')+'>'+TIERS[k].label+'</option>';}).join('');
 var rows=[["Tuition & mandatory fees",COST.tuition],["On-campus housing & meal plan",COST.housing],["Books & supplies",COST.books]];
 var tbb=COST.tuition+COST.housing+COST.books;
 var pct=function(v){return (v/total*100).toFixed(1)+'%';};
 el.innerHTML=
 '<div class="pageHero"><div class="wrap"><h1 class="disp">Finances</h1><p>What a year at K-State Salina costs, Holden\'s award, and more scholarships worth chasing.</p></div></div>'+
 '<div class="wrap pageBody">'+
  '<div class="congrats"><div class="inner"><svg class="conf" id="conf" aria-hidden="true"></svg>'+
   '<p class="big disp">CONGRATULATIONS!</p>'+
   '<h2>Holden earned the Wildcat Nonresident Award 🎉</h2>'+
   '<p>K-State\'s top merit award for out-of-state students: a discount on the nonresident portion of tuition, renewable for up to four years (eight semesters).</p>'+
   '<div class="awardRow"><div class="awardAmt">'+(tier?money(tier.yr)+'<small>per year · '+money(tier.tot)+' over 4 years</small>':'$9,551–$19,101<small>per year, depending on GPA tier</small>')+'</div>'+
   '<label class="sr" for="tierSel">Holden\'s award level</label><select class="tier" id="tierSel">'+tierOpts+'</select></div>'+
   '<p style="margin-top:12px;font-size:13px">Estimated award values for the 2027 entry term, based on 30 credit hours/year. Check Holden\'s award letter for his exact tier.</p>'+
  '</div></div>'+
  '<div class="grid2">'+
   '<div class="card"><h2 style="margin:0 0 4px;font-size:19px">Cost of attendance · one year</h2><div class="muted">Non-Kansas resident, living on campus at K-State Salina (2026–27 published estimate; 2027–28 rates are usually set in early summer).</div>'+
   '<div class="tblWrap"><table class="cost"><thead><tr><th scope="col">Billed &amp; school costs</th><th scope="col">Semester</th><th scope="col">Year</th></tr></thead><tbody>'+
    rows.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+money(r[1]/2)+'</td><td>'+money(r[1])+'</td></tr>';}).join('')+
    '<tr class="sub"><td>Subtotal</td><td>'+money(tbb/2)+'</td><td>'+money(tbb)+'</td></tr>'+
    (tier?'<tr class="award"><td>Wildcat Nonresident Award</td><td>−'+money(awYr/2)+'</td><td>−'+money(awYr)+'</td></tr><tr class="net"><td>Estimated net cost</td><td>'+money((tbb-awYr)/2)+'</td><td>'+money(tbb-awYr)+'</td></tr>':'<tr class="net"><td colspan="3" style="text-align:left;font-size:14px">Select Holden\'s award level above to see the estimated net cost.</td></tr>')+
   '</tbody></table></div>'+
   '<div class="bar" aria-hidden="true"><i style="width:'+pct(COST.tuition)+';background:#512888"></i><i style="width:'+pct(COST.housing)+';background:#7b52b9"></i><i style="width:'+pct(COST.books)+';background:#f2c14e"></i><i style="width:'+pct(COST.transport+COST.personal)+';background:#bba6dc"></i></div>'+
   '<div class="legend"><span><b style="background:#512888"></b>Tuition &amp; fees</span><span><b style="background:#7b52b9"></b>Room &amp; meals</span><span><b style="background:#f2c14e"></b>Books</span><span><b style="background:#bba6dc"></b>Travel &amp; personal ('+money(COST.transport+COST.personal)+')</span></div>'+
   '<p class="muted" style="margin-top:10px">K-State\'s full estimate, including travel ('+money(COST.transport)+') and personal costs ('+money(COST.personal)+'), is <b>'+money(total)+'</b> per year'+(tier?' — about <b>'+money(total-awYr)+'</b> after the award':'')+'. The award uses K-State\'s 2027 estimate while costs are 2026–27 figures, so treat the net as a rough guide.</p></div>'+
   '<div class="card"><h2 style="margin:0 0 4px;font-size:19px">Good to know</h2><ul class="clean">'+
    '<li>💲 2026–27 base tuition: <b>$1,004.19</b> per credit hour nonresident vs <b>$367.50</b> resident. A 100% award brings Holden to in-state tuition.</li>'+
    '<li>🏠 First-year students are required to live on campus.</li>'+
    '<li>🔧 Some Salina aviation courses carry course fees for supplies, equipment and software — ask the department what to expect for Aviation Maintenance Management.</li>'+
    '<li>🔁 To keep the award: 3.0 K-State GPA, full-time every fall and spring, and 24+ K-State credit hours each year.</li>'+
    '<li>➕ Only one general university award is allowed, but competitive, departmental and outside scholarships can add to it (the Vanier Presidential replaces other awards).</li>'+
   '</ul></div>'+
  '</div>'+
  '<div class="secHead"><div><h2 class="disp">More Scholarships</h2><p>Opportunities Holden can still apply for. Tap “+ To-do” to add one to the family checklist.</p></div></div>'+
  '<div class="schGrid">'+SCH.map(function(s,i){return '<div class="sch'+(s.fit?' hot':'')+'">'+(s.fit?'<span class="fit">⭐ '+esc(s.fit)+'</span>':'')+'<div class="top"><h3>'+esc(s.n)+'</h3><span class="amt">'+esc(s.a)+'</span></div><p>'+esc(s.p)+'</p><span class="dl">⏰ '+esc(s.d)+'</span>'+(s.src?srcLink(s.src,'Learn more →'):'')+'<button class="smallBtn addTodo" data-i="'+i+'">+ To-do</button></div>';}).join('')+'</div>'+
  '<p class="sources" style="margin-top:20px">Sources: '+srcLink('coa')+' · '+srcLink('wna')+' · '+srcLink('fee')+' · '+srcLink('vamm')+' · '+srcLink('ksch')+' · <a href="#sources">all sources</a></p>'+
 '</div>';
 document.getElementById('tierSel').onchange=function(){STATE.awardTier=this.value;setSetting('awardTier',this.value);renderFinances();};
 el.querySelectorAll('.addTodo').forEach(function(b){b.onclick=function(){var s=SCH[+b.dataset.i];var it={id:uid(),text:"Apply: "+s.n+" ("+s.d+")",who:"Holden",due:"",done:false};STATE.todos.unshift(it);op("add","todos",it);b.textContent="✓ Added";b.disabled=true;};});
 var svg=document.getElementById('conf'),cols=["#ffffff","#7b52b9","#f2c14e"],s='';
 for(var i=0;i<50;i++){var w=4+Math.random()*6;s+='<rect x="'+(Math.random()*100)+'%" y="'+(Math.random()*100)+'%" width="'+w+'" height="'+(w*.45)+'" fill="'+cols[i%3]+'" opacity=".35" transform="rotate('+(Math.random()*360)+')" style="transform-box:fill-box;transform-origin:center"/>';}
 svg.innerHTML=s;
}

/* ---------- TODOS ---------- */
var todoFilter="open";
function renderTodos(){
 var el=document.getElementById('v-todos');
 if(isLocked()){el.innerHTML=lockedHTML("To Do's","Jot down anything that needs doing before (and during) freshman year.");wireLock(el);return;}
 var done=STATE.todos.filter(function(t){return t.done;}).length, n=STATE.todos.length;
 el.innerHTML=
 '<div class="pageHero"><div class="wrap"><h1 class="disp">To Do\'s</h1><p>Jot down anything that needs doing before (and during) freshman year. Add a due date and it shows up on the Calendar too.</p></div></div>'+
 '<div class="wrap pageBody" style="max-width:860px">'+
  '<form class="form" id="todoForm"><label class="sr" for="todoText">New to-do</label>'+
   '<textarea id="todoText" placeholder="e.g. Call KSU administration to ask about additional scholarships… or sign up for Fall 2027 classes" required></textarea>'+
   '<div class="formRow"><label>Who<select id="todoWho"><option>Holden</option><option>Parents</option><option>Mom</option><option>Dad</option><option>Family</option></select></label>'+
    '<label>Due date (optional)<input type="date" id="todoDue"></label><button class="btn" type="submit">+ Add to-do</button></div>'+
   '<div class="saveNote" aria-live="polite" id="saveNote">'+saveMsg()+'</div></form>'+
  '<div style="margin-top:18px"><div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600"><span>Progress</span><span>'+done+' of '+n+' done</span></div><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="'+n+'" aria-valuenow="'+done+'"><i style="width:'+(n?Math.round(done/n*100):0)+'%"></i></div></div>'+
  '<div class="listTabs" id="todoTabs" role="group" aria-label="Filter to-dos"><button class="tab" aria-pressed="'+(todoFilter==='open')+'" data-f="open">Open</button><button class="tab" aria-pressed="'+(todoFilter==='done')+'" data-f="done">Done</button><button class="tab" aria-pressed="'+(todoFilter==='all')+'" data-f="all">All</button></div>'+
  '<div id="todoList"></div></div>';
 var t0=today0();
 var list=STATE.todos.filter(function(t){return todoFilter==='all'||(todoFilter==='done'?t.done:!t.done);});
 list.sort(function(a,b){ if(a.done!==b.done) return a.done?1:-1; if(a.due&&b.due) return a.due<b.due?-1:1; if(a.due) return -1; if(b.due) return 1; return 0;});
 var box=document.getElementById('todoList');
 box.innerHTML=list.length?list.map(function(t){
  var dueHtml='';
  if(t.due){var d=parseD(t.due),over=!t.done&&d<t0;dueHtml='<span class="due'+(over?' over':'')+'">'+(over?'Overdue · ':'Due ')+MON[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()+'</span>';}
  return '<div class="item'+(t.done?' done':'')+'"><button class="check" data-id="'+t.id+'" role="checkbox" aria-checked="'+(!!t.done)+'" aria-label="Mark done: '+esc(t.text.slice(0,60))+'">'+(t.done?ICONS.ok:'')+'</button>'+
   '<div><div class="txt">'+esc(t.text)+'</div><div class="tmeta"><span class="who">'+esc(t.who||'Family')+'</span>'+dueHtml+'</div></div>'+
   '<button class="iconBtn" data-del="'+t.id+'" aria-label="Delete to-do">'+ICONS.del+'</button></div>';
 }).join(''):'<div class="empty">'+(todoFilter==='done'?'Nothing checked off yet — you got this, Holden!':'All caught up! 🐾')+'</div>';
 box.querySelectorAll('.check').forEach(function(b){b.onclick=function(){var t=findIn(STATE.todos,b.dataset.id);if(t){t.done=!t.done;op('update','todos',{id:t.id,done:t.done});renderTodos();}};});
 wireDelete(box,function(id){STATE.todos=STATE.todos.filter(function(x){return x.id!==id;});op('delete','todos',{id:id});renderTodos();});
 document.getElementById('todoForm').onsubmit=function(e){
  e.preventDefault(); var txt=document.getElementById('todoText').value.trim(); if(!txt) return;
  var it={id:uid(),text:txt,who:document.getElementById('todoWho').value,due:document.getElementById('todoDue').value||"",done:false};
  STATE.todos.unshift(it); todoFilter="open"; op('add','todos',it); renderTodos();
 };
 el.querySelectorAll('#todoTabs .tab').forEach(function(b){b.onclick=function(){todoFilter=b.dataset.f;renderTodos();};});
}

/* ---------- THINGS I NEED ---------- */
var needFilter="all";
function renderNeeds(){
 var el=document.getElementById('v-needs');
 if(isLocked()){el.innerHTML=lockedHTML("Things I Need","Holden's college shopping list.");wireLock(el);return;}
 var all=STATE.needs, got=all.filter(function(n){return n.got;}).length;
 var est=0, estLeft=0; all.forEach(function(n){var p=parseFloat(n.price)||0;est+=p;if(!n.got)estLeft+=p;});
 var have={}; all.forEach(function(n){have[n.text.toLowerCase()]=1;});
 var sugg=SUGGEST.filter(function(s){return !have[s[0].toLowerCase()];});
 el.innerHTML=
 '<div class="pageHero"><div class="wrap"><h1 class="disp">Things I Need</h1><p>Holden\'s college shopping list — luggage, shoes, tech, dorm stuff, anything. Check items off as you get them.</p></div></div>'+
 '<div class="wrap pageBody" style="max-width:860px">'+
  '<form class="form" id="needForm"><label class="sr" for="needText">Item I need</label>'+
   '<textarea id="needText" style="min-height:64px" placeholder="e.g. Luggage bags, new shoes, iPad… (add details like size, color or a link)" required></textarea>'+
   '<div class="formRow"><label>Category<select id="needCat">'+NEED_CATS.map(function(c){return '<option>'+c+'</option>';}).join('')+'</select></label>'+
    '<label>Est. price (optional)<input class="price" type="number" inputmode="decimal" min="0" step="1" id="needPrice" placeholder="$"></label>'+
    '<button class="btn" type="submit">+ Add item</button></div>'+
   (sugg.length?'<div class="quickAdd"><span>Quick add:</span>'+sugg.map(function(s,i){return '<button type="button" class="smallBtn qa" data-i="'+SUGGEST.indexOf(s)+'" style="margin:0">+ '+esc(s[0])+'</button>';}).join('')+'</div>':'')+
   '<div class="saveNote" aria-live="polite" id="saveNote">'+saveMsg()+'</div></form>'+
  '<div class="totals"><div><b>'+all.length+'</b><span>Items on list</span></div><div><b>'+got+'</b><span>Got it ✓</span></div><div><b>'+money(estLeft)+'</b><span>Est. still to buy'+(est?' (of '+money(est)+')':'')+'</span></div></div>'+
  '<div class="listTabs" id="needTabs" role="group" aria-label="Filter items"><button class="tab" aria-pressed="'+(needFilter==='all')+'" data-f="all">All</button><button class="tab" aria-pressed="'+(needFilter==='need')+'" data-f="need">Still need</button><button class="tab" aria-pressed="'+(needFilter==='got')+'" data-f="got">Got it</button></div>'+
  '<div id="needList"></div></div>';
 var list=all.filter(function(n){return needFilter==='all'||(needFilter==='got'?n.got:!n.got);});
 var box=document.getElementById('needList');
 if(!list.length){box.innerHTML='<div class="empty">'+(all.length?'Nothing here.':'Your list is empty — add something above or tap a quick-add idea.')+'</div>';}
 else{
  var html='';
  NEED_CATS.forEach(function(c){
   var items=list.filter(function(n){return (n.cat||'Other')===c;}); if(!items.length) return;
   items.sort(function(a,b){return a.got===b.got?0:(a.got?1:-1);});
   html+='<h2 class="groupHead">'+c+'</h2>'+items.map(function(n){
    return '<div class="item'+(n.got?' done':'')+'"><button class="check" data-id="'+n.id+'" role="checkbox" aria-checked="'+(!!n.got)+'" aria-label="Got it: '+esc(n.text.slice(0,60))+'">'+(n.got?ICONS.ok:'')+'</button>'+
     '<div><div class="txt">'+esc(n.text)+'</div>'+(n.price?'<div class="tmeta"><span class="price">~'+money(n.price)+'</span></div>':'')+'</div>'+
     '<button class="iconBtn" data-del="'+n.id+'" aria-label="Delete item">'+ICONS.del+'</button></div>';
   }).join('');
  });
  box.innerHTML=html;
 }
 box.querySelectorAll('.check').forEach(function(b){b.onclick=function(){var n=findIn(STATE.needs,b.dataset.id);if(n){n.got=!n.got;op('update','needs',{id:n.id,got:n.got});renderNeeds();}};});
 wireDelete(box,function(id){STATE.needs=STATE.needs.filter(function(x){return x.id!==id;});op('delete','needs',{id:id});renderNeeds();});
 document.getElementById('needForm').onsubmit=function(e){
  e.preventDefault(); var txt=document.getElementById('needText').value.trim(); if(!txt) return;
  var p=parseFloat(document.getElementById('needPrice').value);
  var it={id:uid(),text:txt,cat:document.getElementById('needCat').value,price:isNaN(p)?"":Math.max(0,p),got:false};
  STATE.needs.push(it); op('add','needs',it); renderNeeds(); var t=document.getElementById('needText'); if(t) t.focus();
 };
 el.querySelectorAll('.qa').forEach(function(b){b.onclick=function(){var s=SUGGEST[+b.dataset.i];var it={id:uid(),text:s[0],cat:s[1],price:"",got:false};STATE.needs.push(it);op("add","needs",it);renderNeeds();};});
 el.querySelectorAll('#needTabs .tab').forEach(function(b){b.onclick=function(){needFilter=b.dataset.f;renderNeeds();};});
}

/* ---------- SOURCES ---------- */
function renderSources(){
 var el=document.getElementById('v-sources'), groups={};
 Object.keys(SRC).forEach(function(k){var s=SRC[k];(groups[s.g]=groups[s.g]||[]).push(s);});
 var order=["Holden's degree","Academics & calendar","Costs & scholarships","News & athletics"];
 el.innerHTML='<div class="pageHero"><div class="wrap"><h1 class="disp">Sources</h1><p>Where every date, dollar figure and news item on this site came from. Information gathered '+INFO_UPDATED+'. Dates and costs can change — confirm with K-State before making decisions.</p></div></div>'+
 '<div class="wrap pageBody" style="max-width:900px">'+order.map(function(g){
  return '<div class="srcGroup"><h2 class="disp">'+esc(g)+'</h2><ul class="srcList">'+groups[g].map(function(s){return '<li><a href="'+esc(s.u)+'" target="_blank" rel="noopener">'+esc(s.t)+'</a><span class="w">'+esc(s.w)+'</span><span class="u">'+esc(s.u)+'</span></li>';}).join('')+'</ul></div>';
 }).join('')+
 '<div class="card"><h2 style="margin:0 0 6px;font-size:18px">Contacts</h2><ul class="clean"><li>K-State Salina Admissions — 785-826-2640 · salinaadmissions@k-state.edu</li><li>K-State Registrar — 785-532-3552 · registrar@k-state.edu</li><li>K-State FAFSA school code — 001928</li></ul></div></div>';
}

/* ---------- SHARED ---------- */
function findIn(arr,id){for(var i=0;i<arr.length;i++)if(arr[i].id===id)return arr[i];return null;}
function wireDelete(box,fn){
 box.querySelectorAll('[data-del]').forEach(function(b){b.onclick=function(){
  if(b.dataset.armed){fn(b.dataset.del);return;}
  b.dataset.armed="1";b.setAttribute('aria-label','Tap again to confirm delete');b.innerHTML='<span style="font-size:12px;font-weight:700;color:var(--red)">Delete?</span>';
  setTimeout(function(){if(b.isConnected){delete b.dataset.armed;b.innerHTML=ICONS.del;b.setAttribute('aria-label','Delete');}},3000);
 };});
}
/* ---------- GOOGLE SHEETS SYNC ----------
   Lists live in a Google Sheet owned by the family. A small Google Apps Script
   (see google-apps-script/Code.gs) reads/writes it. A family code keeps the lists
   private: nothing personal is stored in this public website's files. */
var famCode=lsGet('holden-ksu-code')||"", syncState=API?(famCode?"loading":"locked"):"local", sheetUrl="", lastJSON="";
function isLocked(){return !!API && (syncState==="locked"||syncState==="badcode");}
function typing(){var a=document.activeElement;return a&&/TEXTAREA|INPUT|SELECT/.test(a.tagName);}
function saveMsg(){
 if(!API) return 'Saved in this browser only (Google Sheet not connected yet).';
 if(syncState==="error") return '⚠️ Can\'t reach the Google Sheet right now — changes will retry when you\'re back online.';
 if(syncState==="saving") return 'Saving to Google Sheet…';
 return '✓ Synced with the family Google Sheet — everyone sees the same list.'+(sheetUrl?' <a href="'+esc(sheetUrl)+'" target="_blank" rel="noopener">Open the Sheet ↗</a>':'');
}
function setNote(){var n=document.getElementById('saveNote');if(n)n.innerHTML=saveMsg();}
function lockedHTML(title,sub){
 return '<div class="pageHero"><div class="wrap"><h1 class="disp">'+title+'</h1><p>'+sub+'</p></div></div>'+
 '<div class="wrap pageBody" style="max-width:560px"><form class="form" id="codeForm"><h2 style="margin:0;font-size:20px">🔒 Family only</h2>'+
 '<p class="muted" style="margin:0">This list is private to Holden\'s family. Enter the family code once on this device to see and edit it.</p>'+
 '<div class="formRow"><label style="flex:1 1 200px">Family code<input type="password" id="codeIn" autocomplete="current-password" required></label><button class="btn" type="submit">Unlock</button></div>'+
 (syncState==="badcode"?'<div class="saveNote" style="color:var(--red)">That code didn\'t work. Please try again.</div>':'')+
 '</form></div>';
}
function wireLock(el){
 el.querySelector('#codeForm').onsubmit=function(e){e.preventDefault();famCode=document.getElementById('codeIn').value.trim();if(!famCode)return;lsSet('holden-ksu-code',famCode);syncState="loading";pull(true);};
}
function apiGet(){return fetch(API+(API.indexOf('?')<0?'?':'&')+'key='+encodeURIComponent(famCode)+'&t='+Date.now()).then(function(r){return r.json();});}
function apiPost(body){body.key=famCode;return fetch(API,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body)}).then(function(r){return r.json();});}
function applyData(res,force){
 if(!res||!res.ok){
  if(res&&res.error==="bad_key"){famCode="";lsSet('holden-ksu-code',"");syncState="badcode";rerender(true);}
  else {syncState="error";setNote();}
  return;
 }
 var was=syncState; syncState="ok"; sheetUrl=res.sheetUrl||"";
 var j=JSON.stringify([res.todos,res.needs,res.settings]);
 if(j===lastJSON && !force && was==="ok"){setNote();return;}
 lastJSON=j;
 STATE.todos=res.todos||[]; STATE.needs=res.needs||[]; STATE.awardTier=(res.settings&&res.settings.awardTier)||""; STATE.edited=res.updated||"";
 drawUpdated(); rerender(force||was!=="ok");
}
function pull(force){ if(!API||!famCode) return; apiGet().then(function(r){applyData(r,force);}).catch(function(){syncState="error";setNote();}); }
function op(action,list,item){
 STATE.edited=new Date().toISOString(); drawUpdated();
 if(!API){ lsSet('holden-ksu-lists',{todos:STATE.todos,needs:STATE.needs,awardTier:STATE.awardTier,edited:STATE.edited}); return; }
 syncState="saving"; setNote();
 apiPost({action:action,list:list,item:item}).then(function(r){applyData(r,false);}).catch(function(){syncState="error";setNote();});
}
function setSetting(k,v){
 if(!API||isLocked()){ lsSet('holden-ksu-tier',v); if(!API) op('setting','settings',{k:k,v:v}); return; }
 apiPost({action:"setting",key2:k,value:v}).then(function(r){applyData(r,false);}).catch(function(){});
}
function rerender(force){
 var v=(location.hash||"#home").slice(1); if(!VIEWS[v]) v="home";
 if(typing() && !force) return;
 if(v==="todos"||v==="needs"||v==="home"||v==="calendar"||v==="finances") VIEWS[v]();
}
/* Load: Google Sheet when connected, otherwise this browser's copy */
(function(){
 if(!API){
  var l=lsGet('holden-ksu-lists');
  STATE.todos=(l&&l.todos)||DEFAULT_TODOS.slice(); STATE.needs=(l&&l.needs)||[]; STATE.awardTier=(l&&l.awardTier)||""; STATE.edited=(l&&l.edited)||"";
 } else {
  STATE.awardTier=lsGet('holden-ksu-tier')||"";
 }
})();
setInterval(function(){ if(!document.hidden) pull(false); },30000);
document.addEventListener('visibilitychange',function(){ if(!document.hidden) pull(false); });

/* ---------- SITE AUTO-UPDATE ----------
   Every few minutes, check version.json. When the daily update publishes new
   dates or news, the page reloads itself (never while someone is typing). */
function checkVersion(){
 fetch('version.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.ok?r.json():null;}).then(function(j){
  if(j&&j.version&&j.version!==SITE_VERSION&&!typing()){ location.reload(); }
 }).catch(function(){});
}
setInterval(checkVersion,5*60*1000);
document.addEventListener('visibilitychange',function(){ if(!document.hidden) checkVersion(); });

/* ---------- ROUTER ---------- */
var VIEWS={home:renderHome,news:renderNews,calendar:renderCalendar,finances:renderFinances,todos:renderTodos,needs:renderNeeds,sources:renderSources};
function route(){
 var v=(location.hash||"#home").slice(1); if(!VIEWS[v]) v="home";
 document.querySelectorAll('section.page').forEach(function(s){s.classList.remove('show');});
 document.getElementById('v-'+v).classList.add('show');
 document.querySelectorAll('#menu a').forEach(function(a){var on=a.dataset.v===v;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 menu.classList.remove('open'); burger.setAttribute('aria-expanded','false');
 VIEWS[v](); window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);

route();
pull(true);
})();

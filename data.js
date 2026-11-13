/* =====================================================================
   Holden's K-State Salina Hub — SITE DATA
   This is the only file the daily update edits: dates, news, sources.
   Keep summaries in your own words; every event/news item points to a SRC key.
   ===================================================================== */
var SITE_VERSION = "2026-11-13.1";   /* bump on every change (also in version.json) */
var INFO_UPDATED = "Nov 13, 2026";
var INFO_UPDATED_AT = "2026-11-13T05:23:00-06:00";   /* exact time of the last data update (ISO, Central offset) */

var SRC = {
 cal:{t:"K-State 2027–2028 Academic Calendar",u:"https://www.k-state.edu/registrar/students/calendar/2027-2028%20Academic-Calendar-for-Web.pdf",w:"Fall 2027 & Spring 2028 class dates, breaks, finals and commencement",g:"Academics & calendar"},
 kbor:{t:"Kansas Board of Regents — Academic Calendars",u:"https://www.kansasregents.gov/academic_affairs/academic-calendars",w:"Board-approved 2027–28 calendar, Wildcat Pause Day",g:"Academics & calendar"},
 nso:{t:"K-State New Student Orientation FAQ",u:"https://www.k-state.edu/admissions/undergrad/manhattan/enroll/orientation/faq.html",w:"Salina campus runs a separate New Student Onboarding program",g:"Academics & calendar"},
 amm:{t:"K-State Career Center — Aviation Maintenance Management",u:"https://www.k-state.edu/careercenter/students/exploration/majorin/avmain.html",w:"What the B.S. option prepares students for, and career paths",g:"Holden's degree"},
 amm2:{t:"Aviation Maintenance Management program overview (educations.com)",u:"https://www.educations.com/institutions/kansas-state-university-polytechnic-campus/aviation-maintenance-management",w:"FAA Part 147 curriculum, A&P preparation, course areas",g:"Holden's degree"},
 amm3:{t:"Aviation Maintenance Management program overview (bachelorstudies)",u:"https://www.bachelorstudies.ng/Aviation-Maintenance-Management/USA/Kansas-State-University-Polytechnic-Campus/",w:"Areas of concentration offered with the degree",g:"Holden's degree"},
 vamm:{t:"Vanier Family Aviation Maintenance Scholarship",u:"https://www.polytechnic.ksu.edu/admissions/tuition-scholarships-financial-aid/scholarships/aviation-maintenance-scholarship.html",w:"Up to $7,500/yr for Aviation Maintenance Management majors",g:"Costs & scholarships"},
 coa:{t:"K-State Salina Undergraduate Cost of Attendance 2026–27",u:"https://www.k-state.edu/sfa/cost/salina-campus-costs/undergraduate.html",w:"Tuition & fees, housing & food, books, travel, personal costs",g:"Costs & scholarships"},
 fee:{t:"K-State Comprehensive Tuition & Fee Schedule FY27",u:"https://www.k-state.edu/finsvcs/cashiers/costs/comprehensive-tuition-fee-schedules/documents/2026-2027/FY27CompFees6.25.26.pdf",w:"Per-credit-hour tuition rates; Salina aviation program fees",g:"Costs & scholarships"},
 wna:{t:"Wildcat Nonresident Award",u:"https://www.k-state.edu/sfa/scholarships-aid/scholarships/future-students/wildcat-nonresident/",w:"2027 award tiers, estimated values and renewal rules",g:"Costs & scholarships"},
 ksch:{t:"K-State Salina Scholarships",u:"https://salina.ksu.edu/admissions/tuition-scholarships-financial-aid/scholarships/",w:"Vanier Presidential, Great Plains Manufacturing Scholars, KSN",g:"Costs & scholarships"},
 comp:{t:"K-State Salina Competitive Scholarships",u:"https://www.polytechnic.ksu.edu/admissions/tuition-scholarships-financial-aid/scholarships/salina-competitive/",w:"Vanier Family Leadership and Bluemont scholarships",g:"Costs & scholarships"},
 kres:{t:"K-State scholarship deadlines (Kansas Resident Awards page)",u:"https://www.k-state.edu/sfa/scholarships-aid/scholarships/future-students/kansas-resident-awards/index.html",w:"KSN Feb 1 deadline; April 1 transcript/test-score upgrade deadline",g:"Costs & scholarships"},
 ksn:{t:"K-State Future Student Scholarships",u:"https://www.k-state.edu/scholarships",w:"KSN application dates",g:"Costs & scholarships"},
 compdl:{t:"K-State Future Student Scholarships & Awards",u:"https://www.k-state.edu/financialaid/scholarships/",w:"Competitive scholarship supplemental applications due Dec 15",g:"Costs & scholarships"},
 frosh:{t:"K-State Freshman Scholarship Opportunities",u:"https://www.k-state.edu/sfa/scholarships-aid/scholarships/future-students/additional-opportunities/freshman/",w:"Alumni club and Alumni Association family awards",g:"Costs & scholarships"},
 trail:{t:"K-State Salina launches Trailblazer scholarships",u:"https://www.k-state.edu/news/articles/2026/10/salina-trailblazer-scholarship.html",w:"New scholarships for four emerging-technology programs",g:"Costs & scholarships"},
 fafsa:{t:"Federal Student Aid — FAFSA",u:"https://studentaid.gov/h/apply-for-aid/fafsa",w:"File the FAFSA (K-State code 001928)",g:"Costs & scholarships"},
 n1:{t:"K-State Athletics — Cats Travel to Fort Worth for Afternoon Tilt",u:"https://www.kstatesports.com/news/2026/11/9/football-cats-travel-to-fort-worth-for-afternoon-tilt",w:"TCU game: 1 p.m. CT kickoff, ESPNU, Amon G. Carter Stadium",g:"News & athletics"},
 fbsch:{t:"K-State Athletics — 2026 Football Schedule & Results",u:"https://www.kstatesports.com/sports/football/schedule",w:"Live schedule with kickoff times, TV and results",g:"News & athletics"},
 live:{t:"K-State Athletics — Live Events",u:"https://www.kstatesports.com/coverage",w:"Oklahoma State result (Nov 7) and upcoming broadcasts",g:"News & athletics"},
 pe16:{t:"K-State Athletics — Game times for Players Era 16 announced",u:"https://kstatesports.com/news/2026/7/15/mens-basketball-game-times-tickets-for-players-era-16-announced",w:"K-State vs Gonzaga at 11:30 p.m. CT, Nov 24, T-Mobile Arena",g:"News & athletics"},
 prio:{t:"K-State freshman scholarships & priority date",u:"https://www.k-state.edu/sfa/scholarships-aid/awards/freshmen/index.html",w:"Freshman application priority date is Dec. 1",g:"Costs & scholarships"},
 n2:{t:"K-State Athletics — K-State extends streak over KU to 18 games",u:"https://www.kstatesports.com/news/2026/10/17/football-k-state-extends-streak-over-kansas-to-18-games-in-35-24-win",w:"Oct 17, 2026 game recap",g:"News & athletics"},
 n3:{t:"K-State Athletics — 2026-27 men's basketball non-conference schedule",u:"https://www.kstatesports.com/news/2026/7/20/mens-basketball-nine-home-games-highlight-non-conference-schedule-in-2026-27",w:"Coach Casey Alexander; Players Era vs Gonzaga Nov 24",g:"News & athletics"},
 n4:{t:"KCTV5 — Big 12 announces 2026-27 basketball schedules",u:"https://www.kctv5.com/2026/09/17/big-12-announces-2026-27-basketball-schedules-k-state-prepares-first-year-under-alexander/",w:"Kansas games Jan 23 & Feb 27; senior night Mar 6",g:"News & athletics"},
 n5:{t:"JC Post — Silicon Prairie Trailblazers scholarships",u:"https://jcpost.com/posts/250fd753-98b5-46ad-96b9-0b8048088912",w:"$3,000/semester for two years; eligible programs",g:"News & athletics"},
 n6:{t:"K-State Salina — Campus construction",u:"https://www.salina.k-state.edu/about/construction-information/",w:"K-AIRES and Aerospace Education Hub",g:"News & athletics"},
 n7:{t:"K-State News — Salina excellence awards",u:"https://www.k-state.edu/news/articles/2026/05/salina-campus-awards.html",w:"May 21, 2026",g:"News & athletics"},
 n8:{t:"K-State News — News articles (President Linton message)",u:"https://www.k-state.edu/news/articles/",w:"Oct 14, 2026",g:"News & athletics"},
 n9:{t:"K-State News — Fall 2026 enrollment",u:"https://www.k-state.edu/news/articles/2026/09/fall-2026-enrollment-census-steady-student-headcount.html",w:"21,283 students; graduate outcomes",g:"News & athletics"},
 fb26:{t:"K-State Athletics — 2026 football schedule",u:"https://www.kstatesports.com/news/2026/1/21/k-state-big-12-announce-2026-football-schedule",w:"Remaining 2026 games",g:"News & athletics"},
 fb27:{t:"FBSchedules — NC State/Kansas State series & 2027 dates",u:"https://fbschedules.com/nc-state-schedules-home-and-home-football-series-with-kansas-state-for-2027-2032/amp",w:"2027 home dates vs South Dakota (Sep 4) and Georgia Southern (Sep 11)",g:"News & athletics"},
 sal1:{t:"K-State News — Pilot students gain campus self-examining authority",u:"https://www.k-state.edu/news/articles/2026/11/pilot-students-save-time-money-with-campus-self-examining-authority-for-instrument-ratings.html",w:"Nov 9, 2026: FAA authority for instrument ratings at K-State Salina",g:"News & athletics"},
 man1:{t:"K-State News — Andy Thompson named interim dean of students",u:"https://www.k-state.edu/news/articles/2026/11/andy-thompson-named-interim-leader-of-dassa.html",w:"Nov 9, 2026 leadership announcement",g:"News & athletics"},
 bbtv:{t:"K-State Athletics — Times & TV for 2026-27 men's basketball",u:"https://www.kstatesports.com/news/2026/10/13/mens-basketball-k-state-announces-times-tv-for-2026-27-mens-basketball",w:"Tip times and TV for the full 2026-27 schedule",g:"News & athletics"},
 n10:{t:"WIBW — K-State men's basketball outduels Creighton",u:"https://www.wibw.com/2026/11/11/k-state-mens-basketball-outduels-creighton/",w:"Nov 10, 2026 game recap",g:"News & athletics"},
 aed:{t:"K-State News — High school students invited to explore aviation at K-State",u:"https://www.k-state.edu/news/articles/2026/10/kstate-salina-aviation-explorer-day.html",w:"Aviation Explorer Day, Sat Nov 14, 2026 at K-State Salina (free, registration required)",g:"Academics & calendar"},
 pacer:{t:"K-State News — Aviation students prepare Piper Pacer for museum exhibit",u:"https://www.k-state.edu/news/articles/2026/09/aviation-maintenance-management-students-prepare-piper-pacer-aircraft-for-museum-exhibit.html",w:"Sept 23, 2026: aviation maintenance students' hands-on project",g:"Holden's degree"},
 hol:{t:"K-State News — University holiday schedule announced",u:"https://www.k-state.edu/news/articles/2026/11/university-holiday-schedule-announced.html",w:"Nov 9, 2026: 2027 university holidays",g:"News & athletics"},
 b12sch:{t:"Big 12 Conference — 2026 Kansas State Football Schedule",u:"https://big12sports.com/schedule.aspx?schedule=5306",w:"Official results and remaining 2026 games",g:"News & athletics"},
 fbbowl:{t:"K-State Athletics — 'Focusing on the Things Within our Control'",u:"https://www.kstatesports.com/news/2026/11/10/sports-extra-focusing-on-the-things-within-our-control",w:"Need two of the last three games for bowl eligibility; Big 12 standing",g:"News & athletics"},
 fbtop25:{t:"K-State Athletics — Focused on the Next Opponent",u:"https://www.kstatesports.com/news/2026/11/3/sports-extra-focused-on-the-next-opponent",w:"Big 12 teams in the AP Top 25 (early November)",g:"News & athletics"},
 b12cg:{t:"2026 Big 12 Championship Game (Wikipedia)",u:"https://en.wikipedia.org/wiki/2026_Big_12_Championship_Game",w:"Fri, Dec 4, 2026 at AT&T Stadium",g:"News & athletics"},
 b12st:{t:"FOX Sports — Big 12 Football Standings",u:"https://www.foxsports.com/college-football/big-12/standings",w:"Live Big 12 standings",g:"News & athletics"},
 fb26wiki:{t:"2026 Kansas State Wildcats football team (Wikipedia)",u:"https://en.wikipedia.org/wiki/2026_Kansas_State_Wildcats_football_team",w:"Season summary, TV for each game, head coach",g:"News & athletics"},
 qb:{t:"Wichita Eagle via Yahoo Sports — Klein expects two QBs to play at TCU",u:"https://sports.yahoo.com/articles/why-collin-klein-expects-k-205202171.html",w:"Nov 9, 2026: quarterback competition after Avery Johnson injury",g:"News & athletics"},
 ap11:{t:"Deseret News — AP Top 25 after Utah beats BYU",u:"https://www.deseret.com/sports/2026/11/08/utah-defeats-byu-football-ap-top-25-poll-2026/",w:"AP poll released Nov 8, 2026",g:"News & athletics"},
 fb27b:{t:"Sports Brackets — K-State 2027 opponents",u:"https://sportsbrackets.net/2026/09/03/kansas-state-wildcats-future-opponents-schedule-by-year/",w:"2027 Big 12 home and away opponents",g:"News & athletics"}
};

var NEWS = [
 {g:"ath",date:"Nov 10, 2026",t:"Rechsteiner's 26 lifts K-State past Creighton",s:"Brandon Rechsteiner scored 26 for the second straight game as the Wildcats beat Creighton 89-82 in Manhattan, shooting nearly 58% to move to 2-1. Montana visits Bramlage on Monday, Nov. 16.",src:"n10",by:"WIBW"},
 {g:"ath",date:"Nov 9, 2026",t:"Two quarterbacks likely to see action at TCU",s:"With starter Avery Johnson not expected back this season, Collin Klein says Blake Barnett and Dillon Duff are splitting first-team reps and he expects both to play in Fort Worth.",src:"qb",by:"Wichita Eagle"},
 {g:"ath",date:"Nov 9, 2026",t:"Cats head to Fort Worth for a 1 p.m. kickoff",s:"K-State (4-5) visits TCU on Saturday, Nov. 14 at Amon G. Carter Stadium. Kickoff is 1 p.m. Central on ESPNU, and K-State leads the all-time series 11-8.",src:"n1",by:"K-State Athletics"},
 {g:"ath",date:"Nov 7, 2026",t:"Oklahoma State rolls past K-State in Manhattan",s:"The Wildcats fell 66-28 to Oklahoma State at Bill Snyder Family Stadium, their third straight loss.",src:"live",by:"K-State Athletics"},
 {g:"sal",date:"Nov 9, 2026",t:"Salina can now test its own instrument-rating pilots",s:"The FAA granted K-State Salina self-examining authority for instrument ratings, so students can finish with an end-of-course check by campus flight instructors instead of waiting on an outside examiner — saving time and up to about $1,000 each.",src:"sal1",by:"K-State News"},
 {g:"sal",date:"Oct 19, 2026",t:"New Silicon Prairie Trailblazers scholarships",s:"K-State Salina will award $12,000 over two years to 40 incoming fall 2027 students in four emerging-tech programs (immersive systems, machine learning, robotics and uncrewed aircraft). Aviation maintenance isn't one of them.",src:"n5",by:"JC Post"},
 {g:"sal",date:"Sep 23, 2026",t:"Maintenance students ready a vintage Piper for a museum",s:"Students in a 300-level aircraft design and assembly class pulled the wings and wheels off the campus's 1950 Piper Pacer, towed it to Salina's Garage Automotive Museum and put it back together for an exhibit running through Jan. 11, 2027 — the kind of hands-on work Holden's major is built around.",src:"pacer",by:"K-State News"},
 {g:"man",date:"Nov 9, 2026",t:"2027 university holidays set",s:"K-State posted its 2027 holiday calendar, including Labor Day (Sept. 6), Thanksgiving (Nov. 25–26) and Christmas Eve and New Year's Eve observed closures; Veterans Day stays a regular workday.",src:"hol",by:"K-State News"},
 {g:"man",date:"Nov 9, 2026",t:"New interim leader for student affairs",s:"Longtime K-State administrator Andy Thompson was named interim vice president for academic success and student affairs and dean of students, effective immediately.",src:"man1",by:"K-State News"},
 {g:"man",date:"Oct 14, 2026",t:"President Linton heading to Virginia Tech",s:"K-State President Richard Linton announced he has been named Virginia Tech's next president and shared reflections on his time leading K-State.",src:"n8",by:"K-State News"}
];

/* d=date, c=category, t=title, s=subtitle, time, place, tv, info (extra details), src=SRC key, star */
var EVENTS = [
 {d:"2026-11-07",c:"fb",t:"Football vs Oklahoma State",s:"Final: Oklahoma State 66, K-State 28",time:"12:00 p.m. CT",place:"Bill Snyder Family Stadium, Manhattan, KS",tv:"TNT / truTV",src:"live"},
 {d:"2026-11-10",c:"bb",t:"Basketball vs Creighton",s:"Final: K-State 89, Creighton 82",time:"8:00 p.m. CT",place:"Bramlage Coliseum, Manhattan, KS",tv:"FS1",src:"n10"},
 {d:"2026-11-14",c:"fb",t:"Football at TCU",s:"1:00 p.m. CT · ESPNU · Fort Worth, TX",time:"1:00 p.m. Central (kickoff)",place:"Amon G. Carter Stadium, Fort Worth, TX",tv:"ESPNU (stream on ESPN+) · Radio: K-State Sports Network",info:"K-State leads the all-time series 11-8.",src:"n1"},
 {d:"2026-11-14",c:"or",t:"Aviation Explorer Day at K-State Salina",s:"Free visit day for aviation-minded high schoolers (16+) and guardians · starts 9:30 a.m.",time:"Starts 9:30 a.m. Central",place:"K-State Salina campus, Salina, KS",info:"Sessions on aviation programs (including aviation maintenance), alumni and careers; keynote by the aviation department head; lunch and a campus tour of residence halls and aviation facilities. Free, but advance registration is required.",src:"aed"},
 {d:"2026-11-16",c:"bb",t:"Basketball vs Montana",s:"7:00 p.m. CT · ESPN+ · Bramlage Coliseum",time:"7:00 p.m. Central",place:"Bramlage Coliseum, Manhattan, KS",tv:"ESPN+",src:"bbtv"},
 {d:"2026-11-21",c:"fb",t:"Football vs Arizona — Senior Day",s:"Manhattan · kickoff time TBA",time:"TBA — Big 12 expects to set the time and TV on Sun, Nov 15",place:"Bill Snyder Family Stadium, Manhattan, KS",info:"Last home game of 2026; seniors are honored before kickoff.",src:"fbsch"},
 {d:"2026-11-24",c:"bb",t:"Basketball vs Gonzaga",s:"11:30 p.m. CT · Players Era 16 · Las Vegas",time:"11:30 p.m. Central",place:"T-Mobile Arena, Las Vegas, NV",tv:"ESPN",info:"Opening round of the Players Era 16 (Nov 24–28). K-State then plays Alabama or Baylor on Nov 26.",src:"pe16"},
 {d:"2026-11-28",c:"fb",t:"Football at Iowa State",s:"Ames, IA · regular-season finale · time TBA",time:"TBA",place:"Jack Trice Stadium, Ames, IA",src:"fbsch"},
 {d:"2026-12-01",c:"dl",t:"Scholarship priority date",s:"Freshman priority date for K-State scholarship consideration",info:"Applying and being admitted by Dec 1 gives the best chance at scholarships.",src:"prio"},
 {d:"2026-12-04",c:"bb",t:"Basketball at Seton Hall",s:"6:00 p.m. CT · truTV",time:"6:00 p.m. Central",tv:"truTV",src:"bbtv"},
 {d:"2026-12-11",c:"bb",t:"Basketball vs Wichita State",s:"7:30 p.m. CT · TNT/truTV · Kansas City, MO",time:"7:30 p.m. Central",place:"Kansas City, MO (neutral site)",tv:"TNT / truTV",info:"In-state matchup played in Kansas City.",src:"bbtv"},
 {d:"2026-12-15",c:"dl",t:"Competitive scholarship applications due",s:"Supplemental applications for incoming domestic freshmen",src:"compdl"},
 {d:"2027-01-05",c:"bb",t:"Basketball vs Houston — Big 12 home opener",s:"7:30 p.m. CT · FS1 · Bramlage Coliseum",time:"7:30 p.m. Central",place:"Bramlage Coliseum, Manhattan, KS",tv:"FS1",src:"bbtv"},
 {d:"2027-01-23",c:"bb",t:"Basketball vs Kansas",s:"Bramlage Coliseum, Manhattan · Sunflower Showdown · FOX",time:"11:00 a.m. or 7:00 p.m. Central (to be finalized)",place:"Bramlage Coliseum, Manhattan, KS",tv:"FOX",src:"bbtv"},
 {d:"2027-02-01",c:"dl",t:"K-State Scholarship Network (KSN) deadline",s:"Incoming freshmen apply by Feb 1 for college & departmental scholarships",src:"ksn"},
 {d:"2027-02-27",c:"bb",t:"Basketball at Kansas",s:"Allen Fieldhouse, Lawrence · 1:00 p.m. CT · ESPN/ESPN2",time:"1:00 p.m. Central",place:"Allen Fieldhouse, Lawrence, KS",tv:"ESPN or ESPN2",src:"bbtv"},
 {d:"2027-03-06",c:"bb",t:"Basketball vs Cincinnati — Senior Night",s:"Bramlage Coliseum, Manhattan · 4:00 p.m. CT · ESPN+",time:"4:00 p.m. Central",place:"Bramlage Coliseum, Manhattan, KS",tv:"ESPN+",src:"bbtv"},
 {d:"2027-03-22",c:"ac",t:"Fall 2027 early enrollment opens",s:"For continuing students; new freshmen enroll through Salina New Student Onboarding",src:"cal"},
 {d:"2027-04-01",c:"dl",t:"Scholarship upgrade deadline",s:"Last day to send 7th-semester transcript and ACT/SAT scores for a possible award upgrade",src:"kres"},
 {d:"2027-04-16",c:"ac",t:"Fall 2027 open enrollment begins",s:"",src:"cal"},
 {d:"2027-08-16",c:"ac",t:"★ FIRST DAY OF CLASSES — Fall 2027",s:"Holden starts college at K-State Salina!",place:"K-State Salina, 2310 Centennial Rd, Salina, KS",info:"Late enrollment fee ($65) applies starting this day.",src:"cal",star:1},
 {d:"2027-09-04",c:"fb",t:"Football vs South Dakota",s:"Manhattan · 2027 season opener (tentative)",time:"TBA",place:"Bill Snyder Family Stadium, Manhattan, KS",src:"fb27"},
 {d:"2027-09-06",c:"br",t:"Labor Day",s:"No classes · campus closed",src:"cal"},
 {d:"2027-09-11",c:"fb",t:"Football vs Georgia Southern",s:"Manhattan (tentative)",time:"TBA",place:"Bill Snyder Family Stadium, Manhattan, KS",src:"fb27"},
 {d:"2027-10-08",c:"br",t:"Wildcat Pause Day",s:"No classes",src:"cal"},
 {d:"2027-11-21",c:"br",t:"Fall Break begins (Nov 21–28)",s:"No classes all Thanksgiving week · campus closed Nov 25–26",src:"cal"},
 {d:"2027-12-03",c:"ac",t:"Last day of fall classes",s:"",src:"cal"},
 {d:"2027-12-06",c:"ac",t:"Fall final exams (Dec 6–10)",s:"",src:"cal"},
 {d:"2027-12-10",c:"ac",t:"Salina Commencement · Fall semester ends",s:"",src:"cal"},
 {d:"2027-12-27",c:"br",t:"Winter Break / January Intersession",s:"Campus closed Dec 27–31 · Intersession Dec 27–Jan 14",src:"cal"},
 {d:"2028-01-17",c:"br",t:"Martin Luther King Jr. Day",s:"Campus closed",src:"cal"},
 {d:"2028-01-18",c:"ac",t:"First day of Spring 2028 classes",s:"",src:"cal"},
 {d:"2028-03-12",c:"br",t:"Spring Break (Mar 12–19)",s:"No classes",src:"cal"},
 {d:"2028-05-05",c:"ac",t:"Last day of spring classes",s:"",src:"cal"},
 {d:"2028-05-08",c:"ac",t:"Spring final exams (May 8–12)",s:"Freshman year complete!",src:"cal"}
];

/* ---------- FOOTBALL PAGE ----------
   res: "W" | "L" | "" (not played yet). score is always K-State first. ha: "H" home, "A" away, "N" neutral.
   The daily update fills in results, kickoff times/TV, rankings and the bowl picture. */
var FOOTBALL = {
  season: 2026,
  asOf: "Nov 13, 2026",
  coach: "Collin Klein (1st season as head coach)",
  conf: "Big 12",
  ranking: { ap: "Not ranked", cfp: "Not ranked" },
  confNote: "1-5 in the Big 12 — tied with Colorado and Kansas for the fewest conference wins.",
  top25: "Big 12 teams in the AP Top 25 released Nov. 8: No. 2 Utah, No. 10 Texas Tech, No. 12 BYU, No. 14 Houston and No. 22 Arizona.",
  titleGame: "The Big 12 Championship Game is Friday, Dec. 4, 2026 at AT&T Stadium in Arlington, Texas — the winner earns an automatic College Football Playoff bid. K-State is out of the title race this year.",
  bowlNote: "Teams need 6 wins to be bowl eligible (one win over an FCS team, like Nicholls, can count). K-State has been bowl eligible in 14 of the last 15 seasons.",
  bowl: "",          /* e.g. "Bowl: Liberty Bowl vs. ___ · Dec 27 · ESPN" once announced */
  games: [
    {d:"2026-09-05",opp:"Nicholls",ha:"H",res:"W",score:"71-3",tv:"ESPN+",src:"b12sch"},
    {d:"2026-09-12",opp:"Washington State",ha:"H",res:"W",score:"34-7",tv:"TNT / HBO Max",src:"b12sch"},
    {d:"2026-09-19",opp:"Tulane",ha:"H",res:"W",score:"31-20",tv:"ESPN2",src:"b12sch"},
    {d:"2026-09-26",opp:"Cincinnati",ha:"A",res:"L",score:"26-31",conf:1,src:"b12sch"},
    {d:"2026-10-10",opp:"Houston",ha:"H",res:"L",score:"16-35",tv:"FOX",conf:1,src:"b12sch"},
    {d:"2026-10-17",opp:"Kansas",ha:"H",res:"W",score:"35-24",tv:"FS1",conf:1,note:"Homecoming · 18th straight Sunflower Showdown win",src:"b12sch"},
    {d:"2026-10-24",opp:"Arizona State",ha:"A",res:"L",score:"17-28",conf:1,src:"b12sch"},
    {d:"2026-10-31",opp:"Colorado",ha:"A",res:"L",score:"24-27",note:"Overtime",tv:"TNT / HBO Max",conf:1,src:"b12sch"},
    {d:"2026-11-07",opp:"Oklahoma State",ha:"H",res:"L",score:"28-66",tv:"TNT / HBO Max",conf:1,src:"b12sch"},
    {d:"2026-11-14",opp:"TCU",ha:"A",res:"",time:"1:00 p.m. CT",tv:"ESPNU",place:"Amon G. Carter Stadium, Fort Worth, TX",conf:1,src:"n1"},
    {d:"2026-11-21",opp:"Arizona",ha:"H",res:"",time:"TBA",place:"Bill Snyder Family Stadium, Manhattan, KS",note:"Senior Day",conf:1,src:"b12sch"},
    {d:"2026-11-28",opp:"Iowa State",ha:"A",res:"",time:"TBA",place:"Jack Trice Stadium, Ames, IA",note:"Farmageddon",conf:1,src:"b12sch"}
  ],
  next2027: "Holden's freshman season! Home openers vs. South Dakota (Sep 4) and Georgia Southern (Sep 11) are tentative. Big 12 home games: Baylor, BYU, Cincinnati, Utah, West Virginia. Road: Arizona, UCF, Kansas, Texas Tech."
};

/* =====================================================================
   Holden's K-State Salina Hub — SITE DATA
   This is the only file the daily update edits: dates, news, sources.
   Keep summaries in your own words; every event/news item points to a SRC key.
   ===================================================================== */
var SITE_VERSION = "2026-11-17.1";   /* bump on every change (also in version.json) */
var INFO_UPDATED = "Nov 17, 2026";
var INFO_UPDATED_AT = "2026-11-17T05:24:00-06:00";   /* exact time of the last data update (ISO, Central offset) */

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
 bsb1:{t:"K-State Athletics — Baseball launches community-inspired uniform and retail line",u:"https://www.kstatesports.com/news/2026/11/12/baseball-k-state-to-launch-community-inspired-uniform-and-retail-line",w:"Nov 12, 2026: new 2027 uniforms and Nike gear",g:"News & athletics"},
 tcu:{t:"K-State Athletics — K-State rally falls short at TCU, 20-10",u:"https://www.kstatesports.com/news/2026/11/14/football-k-state-rally-falls-short-at-tcu-20-10",w:"Nov 14, 2026 game recap; K-State now 4-6, 1-6 Big 12",g:"News & athletics"},
 trav:{t:"Yahoo Sports — How K-State navigated FAA travel disruption to TCU",u:"https://sports.yahoo.com/articles/kansas-state-tcu-timeline-wildcats-175606814.html",w:"Nov 14, 2026: game-day flight after Friday's nationwide ground stop",g:"News & athletics"},
 mbb:{t:"K-State Athletics — Men's Basketball",u:"https://www.kstatesports.com/sports/mens-basketball",w:"Results, upcoming tip times and latest news",g:"News & athletics"},
 azt:{t:"K-State Athletics — K-State's final home game slated for night kick",u:"https://www.kstatesports.com/news/2026/11/15/football-k-states-final-home-game-slated-for-night-kick",w:"Nov 15, 2026: Arizona game set for 6 p.m. CT on FS1",g:"News & athletics"},
 mon:{t:"K-State Athletics — K-State returns to the court Monday night vs. Montana",u:"https://www.kstatesports.com/news/2026/11/15/mens-basketball-k-state-returns-to-court-monday-night-vs-montana",w:"Nov 16 Montana preview; Campbell next on Nov 20",g:"News & athletics"},
 apdel:{t:"Yahoo Sports — AP Top 25 release moved after FAA ground stop",u:"https://sports.yahoo.com/articles/college-football-ap-top-25-161902866.html",w:"Week 12 AP poll comes out Mon, Nov 16 at 1 p.m. CT",g:"News & athletics"},
 isu:{t:"FBSchedules — TV selections for Nov. 28, 2026",u:"https://fbschedules.com/college-football-schedule-tv-selections-for-november-28-2026/",w:"K-State at Iowa State: 1 p.m. CT (2 p.m. ET) on ESPN+",g:"News & athletics"},
 mont:{t:"K-State Athletics — Balance, defense carry K-State past Montana, 86-45",u:"https://www.kstatesports.com/news/2026/11/16/mens-basketball-balance-defense-carry-k-state-past-montana-86-45",w:"Nov 16, 2026 recap; Campbell next on Nov 20",g:"News & athletics"},
 ap12:{t:"College Football News — AP Top 25, Week 12",u:"https://collegefootballnews.com/college-football/ap-top-25-poll-week-12-four-new-teams-big-ten-rockets-up",w:"AP poll released Nov 16, 2026",g:"News & athletics"},
 ksfb:{t:"K-State News — Help choose the 2027 K-State First Book",u:"https://www.k-state.edu/news/articles/2026/11/kstate-first-book-common-read-selection-feedback-2027.html",w:"Nov 13, 2026: three finalists; feedback due Dec 1",g:"Academics & calendar"},
 cfair:{t:"K-State News — All-University Career Fair",u:"https://www.k-state.edu/news/articles/2026/11/all-university-career-fair-connects-students-employers.html",w:"Nov 13, 2026: attendance and employer numbers",g:"News & athletics"},
 fb27b:{t:"Sports Brackets — K-State 2027 opponents",u:"https://sportsbrackets.net/2026/09/03/kansas-state-wildcats-future-opponents-schedule-by-year/",w:"2027 Big 12 home and away opponents",g:"News & athletics"}
};

var NEWS = [
 {g:"ath",date:"Nov 16, 2026",t:"Both remaining football kickoffs now set",s:"Saturday's Senior Day game with No. 19 Arizona kicks off at 6 p.m. Central on FS1, and the Nov. 28 finale at Iowa State is a 1 p.m. Central start streaming on ESPN+. The Cats (4-6) need to win both to become bowl eligible.",src:"isu",by:"FBSchedules / K-State Athletics"},
 {g:"ath",date:"Nov 16, 2026",t:"Wildcats roll past Montana by 41",s:"Five players scored in double figures, led by Isaiah Abraham's 16, as K-State held Montana to 45 points in an 86-45 home win. The Cats (3-1) have won three straight and host Campbell on Friday at 7 p.m.",src:"mont",by:"K-State Athletics"},
 {g:"ath",date:"Nov 14, 2026",t:"Late rally comes up short at TCU",s:"After a nationwide FAA ground stop scrubbed Friday's flight, the Cats flew to Fort Worth on game morning and fell 20-10. Dillon Duff threw for 244 yards, including a 53-yard score to Jaron Tibbs (8 catches, 115 yards); K-State is now 4-6 and must beat Arizona and Iowa State to reach a bowl.",src:"tcu",by:"K-State Athletics"},
 {g:"ath",date:"Nov 12, 2026",t:"Baseball unveils Manhattan-inspired 2027 look",s:"K-State Baseball revealed new uniforms and Nike fan gear celebrating its roots in Manhattan. The first wave of retail items goes on sale Mon., Nov. 16 at 10 a.m., with the game uniform and cap following in March; 2027 season tickets go on sale in January.",src:"bsb1",by:"K-State Athletics"},
 {g:"sal",date:"Nov 9, 2026",t:"Salina can now test its own instrument-rating pilots",s:"The FAA granted K-State Salina self-examining authority for instrument ratings, so students can finish with an end-of-course check by campus flight instructors instead of waiting on an outside examiner — saving time and up to about $1,000 each.",src:"sal1",by:"K-State News"},
 {g:"sal",date:"Oct 19, 2026",t:"New Silicon Prairie Trailblazers scholarships",s:"K-State Salina will award $12,000 over two years to 40 incoming fall 2027 students in four emerging-tech programs (immersive systems, machine learning, robotics and uncrewed aircraft). Aviation maintenance isn't one of them.",src:"n5",by:"JC Post"},
 {g:"sal",date:"Sep 23, 2026",t:"Maintenance students ready a vintage Piper for a museum",s:"Students in a 300-level aircraft design and assembly class pulled the wings and wheels off the campus's 1950 Piper Pacer, towed it to Salina's Garage Automotive Museum and put it back together for an exhibit running through Jan. 11, 2027 — the kind of hands-on work Holden's major is built around.",src:"pacer",by:"K-State News"},
 {g:"man",date:"Nov 13, 2026",t:"Help pick the book incoming students will read",s:"K-State First Book named three finalists for its 2027 common read — the shared book new students discuss when they arrive — and is taking feedback through Dec. 1. The finalists are Firekeeper's Daughter, The Art Thieves and Remarkably Bright Creatures.",src:"ksfb",by:"K-State News"},
 {g:"man",date:"Nov 13, 2026",t:"Record freshman turnout at the career fair",s:"Close to 3,700 students met with 461 employers at the three-day All-University Career Fair in Bramlage Coliseum, including a record of nearly 1,000 first-year students.",src:"cfair",by:"K-State News"},
 {g:"man",date:"Nov 9, 2026",t:"2027 university holidays set",s:"K-State posted its 2027 holiday calendar, including Labor Day (Sept. 6), Thanksgiving (Nov. 25–26) and Christmas Eve and New Year's Eve observed closures; Veterans Day stays a regular workday.",src:"hol",by:"K-State News"}
];

/* d=date, c=category, t=title, s=subtitle, time, place, tv, info (extra details), src=SRC key, star */
var EVENTS = [
 {d:"2026-11-07",c:"fb",t:"Football vs Oklahoma State",s:"Final: Oklahoma State 66, K-State 28",time:"12:00 p.m. CT",place:"Bill Snyder Family Stadium, Manhattan, KS",tv:"TNT / truTV",src:"live"},
 {d:"2026-11-10",c:"bb",t:"Basketball vs Creighton",s:"Final: K-State 89, Creighton 82",time:"8:00 p.m. CT",place:"Bramlage Coliseum, Manhattan, KS",tv:"FS1",src:"n10"},
 {d:"2026-11-14",c:"fb",t:"Football at TCU",s:"Final: TCU 20, K-State 10",time:"1:00 p.m. Central (kickoff)",place:"Amon G. Carter Stadium, Fort Worth, TX",tv:"ESPNU (stream on ESPN+) · Radio: K-State Sports Network",info:"Duff threw for 244 yards and a 53-yard TD to Jaron Tibbs; a late fumble ended K-State's last drive. The team flew in on game morning after Friday's FAA ground stop.",src:"tcu"},
 {d:"2026-11-14",c:"or",t:"Aviation Explorer Day at K-State Salina",s:"Free visit day for aviation-minded high schoolers (16+) and guardians · starts 9:30 a.m.",time:"Starts 9:30 a.m. Central",place:"K-State Salina campus, Salina, KS",info:"Sessions on aviation programs (including aviation maintenance), alumni and careers; keynote by the aviation department head; lunch and a campus tour of residence halls and aviation facilities. Free, but advance registration is required.",src:"aed"},
 {d:"2026-11-16",c:"bb",t:"Basketball vs Montana",s:"Final: K-State 86, Montana 45",time:"7:00 p.m. Central",place:"Bramlage Coliseum, Manhattan, KS",tv:"ESPN+ · Radio: K-State Sports Network",info:"Isaiah Abraham led five Wildcats in double figures with 16; K-State moved to 3-1.",src:"mont"},
 {d:"2026-11-20",c:"bb",t:"Basketball vs Campbell",s:"7:00 p.m. CT · Bramlage Coliseum",time:"7:00 p.m. Central",place:"Bramlage Coliseum, Manhattan, KS",info:"K-State (3-1) has won three straight; Campbell comes in 1-3.",src:"mont"},
 {d:"2026-11-21",c:"fb",t:"Football vs Arizona — Senior Day",s:"Manhattan · 6:00 p.m. CT · FS1",time:"6:00 p.m. Central (kickoff)",tv:"FS1 · Radio: K-State Sports Network",info:"Last home game of 2026 and the first Big 12 meeting with Arizona; seniors are honored before kickoff. K-State (4-6) needs to win both remaining games to become bowl eligible.",place:"Bill Snyder Family Stadium, Manhattan, KS",src:"azt"},
 {d:"2026-11-24",c:"bb",t:"Basketball vs Gonzaga",s:"11:30 p.m. CT · Players Era 16 · Las Vegas",time:"11:30 p.m. Central",place:"T-Mobile Arena, Las Vegas, NV",tv:"ESPN",info:"Opening round of the Players Era 16 (Nov 24–28). K-State then plays Alabama or Baylor on Nov 26.",src:"pe16"},
 {d:"2026-11-28",c:"fb",t:"Football at Iowa State",s:"Ames, IA · regular-season finale · 1:00 p.m. CT · ESPN+",time:"1:00 p.m. Central (kickoff)",place:"Jack Trice Stadium, Ames, IA",tv:"ESPN+ · Radio: K-State Sports Network",info:"Farmageddon. K-State needs a win here (and vs. Arizona) to reach six wins and bowl eligibility.",src:"isu"},
 {d:"2026-12-01",c:"dl",t:"Scholarship priority date",s:"Freshman priority date for K-State scholarship consideration",info:"Applying and being admitted by Dec 1 gives the best chance at scholarships.",src:"prio"},
 {d:"2026-12-04",c:"bb",t:"Basketball at Seton Hall",s:"6:00 p.m. CT · truTV",time:"6:00 p.m. Central",tv:"truTV",src:"bbtv"},
 {d:"2026-12-08",c:"bb",t:"Basketball vs IU Indy",s:"8:00 p.m. CT",time:"8:00 p.m. Central",src:"mbb"},
 {d:"2026-12-11",c:"bb",t:"Basketball vs Wichita State",s:"7:30 p.m. CT · TNT/truTV · Kansas City, MO",time:"7:30 p.m. Central",place:"Kansas City, MO (neutral site)",tv:"TNT / truTV",info:"In-state matchup played in Kansas City.",src:"bbtv"},
 {d:"2026-12-01",c:"ac",t:"K-State First Book feedback due",s:"Weigh in on the three finalists for the 2027 common read for new students",src:"ksfb"},
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
  asOf: "Nov 17, 2026",
  coach: "Collin Klein (1st season as head coach)",
  conf: "Big 12",
  ranking: { ap: "Not ranked", cfp: "Not ranked" },
  confNote: "1-6 in Big 12 play after the loss at TCU, near the bottom of the standings; 4-6 overall.",
  top25: "Big 12 teams in the Week 12 AP Top 25 (released Mon., Nov. 16): No. 2 Utah, No. 11 Texas Tech, No. 12 BYU, No. 19 Arizona — K-State's Senior Day opponent — and No. 20 Houston.",
  titleGame: "The Big 12 Championship Game is Friday, Dec. 4, 2026 at AT&T Stadium in Arlington, Texas — the winner earns an automatic College Football Playoff bid. K-State is out of the title race this year.",
  bowlNote: "Teams need 6 wins to be bowl eligible (one win over an FCS team, like Nicholls, can count). K-State has been bowl eligible in 14 of the last 15 seasons. At 4-6, the Cats must beat both Arizona and Iowa State to get to six wins.",
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
    {d:"2026-11-14",opp:"TCU",ha:"A",res:"L",score:"10-20",time:"1:00 p.m. CT",tv:"ESPNU",place:"Amon G. Carter Stadium, Fort Worth, TX",note:"Team flew in on game morning after Friday's FAA ground stop",conf:1,src:"tcu"},
    {d:"2026-11-21",opp:"Arizona",ha:"H",res:"",time:"6:00 p.m. CT",tv:"FS1",place:"Bill Snyder Family Stadium, Manhattan, KS",note:"Senior Day · vs. No. 19 Arizona (AP) · first Big 12 meeting",conf:1,src:"azt"},
    {d:"2026-11-28",opp:"Iowa State",ha:"A",res:"",time:"1:00 p.m. CT",tv:"ESPN+",place:"Jack Trice Stadium, Ames, IA",note:"Farmageddon",conf:1,src:"isu"}
  ],
  next2027: "Holden's freshman season! Home openers vs. South Dakota (Sep 4) and Georgia Southern (Sep 11) are tentative. Big 12 home games: Baylor, BYU, Cincinnati, Utah, West Virginia. Road: Arizona, UCF, Kansas, Texas Tech."
};

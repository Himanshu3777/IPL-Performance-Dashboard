// // ============================================================
// // IPL Player Analysis - Complete File
// // 807 Players Support + Famous Player Aliases
// // ============================================================

// let allData = [];
// let playersList = [];

// // ============================================================
// // FAMOUS PLAYERS ALIASES (Full Name → Dataset Name)
// // Sirf ye famous players hain jinke full name alag hain
// // Baaki 700+ players dataset ke exact naam se match honge
// // ============================================================
// const nameAliases = {
//   // V Kohli
//   "virat kohli": "V Kohli",
//   "virat": "V Kohli",
//   "kohli": "V Kohli",
  
//   // RG Sharma
//   "rohit sharma": "RG Sharma",
//   "rohit": "RG Sharma",
  
//   // JJ Bumrah
//   "jasprit bumrah": "JJ Bumrah",
//   "bumrah": "JJ Bumrah",
  
//   // MS Dhoni
//   "ms dhoni": "MS Dhoni",
//   "dhoni": "MS Dhoni",
//   "mahendra singh dhoni": "MS Dhoni",
  
//   // AB de Villiers
//   "ab de villiers": "AB de Villiers",
//   "abd": "AB de Villiers",
  
//   // KL Rahul
//   "lokesh rahul": "KL Rahul",
  
//   // DA Warner
//   "david warner": "DA Warner",
//   "warner": "DA Warner",
  
//   // SPD Smith
//   "steve smith": "SPD Smith",
  
//   // JC Buttler
//   "jos buttler": "JC Buttler",
  
//   // SK Raina
//   "suresh raina": "SK Raina",
//   "raina": "SK Raina",
  
//   // RA Jadeja
//   "ravindra jadeja": "RA Jadeja",
//   "jadeja": "RA Jadeja",
  
//   // HH Pandya
//   "hardik pandya": "HH Pandya",
//   "hardik": "HH Pandya",
  
//   // KH Pandya
//   "krunal pandya": "KH Pandya",
//   "krunal": "KH Pandya",
  
//   // KA Pollard
//   "kieron pollard": "KA Pollard",
//   "pollard": "KA Pollard",
  
//   // SL Malinga
//   "lasith malinga": "SL Malinga",
//   "malinga": "SL Malinga",
  
//   // YS Chahal
//   "yuzvendra chahal": "YS Chahal",
//   "yuzi chahal": "YS Chahal",
//   "chahal": "YS Chahal",
  
//   // CH Gayle
//   "chris gayle": "CH Gayle",
//   "gayle": "CH Gayle",
  
//   // GJ Maxwell
//   "glenn maxwell": "GJ Maxwell",
//   "maxwell": "GJ Maxwell",
  
//   // SR Watson
//   "shane watson": "SR Watson",
//   "watson": "SR Watson",
  
//   // BA Stokes
//   "ben stokes": "BA Stokes",
//   "stokes": "BA Stokes",
  
//   // JC Archer
//   "jofra archer": "JC Archer",
//   "archer": "JC Archer",
  
//   // PJ Cummins
//   "pat cummins": "PJ Cummins",
//   "cummins": "PJ Cummins",
  
//   // K Rabada
//   "kagiso rabada": "K Rabada",
//   "rabada": "K Rabada",
  
//   // Mohammed Siraj
//   "siraj": "Mohammed Siraj",
  
//   // B Kumar
//   "bhuvneshwar kumar": "B Kumar",
//   "bhuvneshwar": "B Kumar",
  
//   // S Dhawan
//   "shikhar dhawan": "S Dhawan",
//   "dhawan": "S Dhawan",
  
//   // AM Rahane
//   "ajinkya rahane": "AM Rahane",
//   "rahane": "AM Rahane",
  
//   // RR Pant
//   "rishabh pant": "RR Pant",
//   "pant": "RR Pant",
  
//   // SV Samson
//   "sanju samson": "SV Samson",
//   "sanju": "SV Samson",
//   "samson": "SV Samson",
  
//   // Shubman Gill
//   "shubman gill": "Shubman Gill",
//   "gill": "Shubman Gill",
  
//   // PP Shaw
//   "prithvi shaw": "PP Shaw",
//   "shaw": "PP Shaw",
  
//   // Ishan Kishan
//   "ishan": "Ishan Kishan",
  
//   // SA Yadav
//   "suryakumar yadav": "SA Yadav",
//   "suryakumar": "SA Yadav",
//   "sky": "SA Yadav",
  
//   // KD Karthik
//   "dinesh karthik": "KD Karthik",
//   "karthik": "KD Karthik",
//   "dk": "KD Karthik",
  
//   // AT Rayudu
//   "ambati rayudu": "AT Rayudu",
//   "rayudu": "AT Rayudu",
  
//   // RV Uthappa
//   "robin uthappa": "RV Uthappa",
//   "uthappa": "RV Uthappa",
  
//   // G Gambhir
//   "gautam gambhir": "G Gambhir",
//   "gambhir": "G Gambhir",
  
//   // V Sehwag
//   "virender sehwag": "V Sehwag",
//   "sehwag": "V Sehwag",
  
//   // SC Ganguly
//   "sourav ganguly": "SC Ganguly",
//   "ganguly": "SC Ganguly",
  
//   // SR Tendulkar
//   "sachin tendulkar": "SR Tendulkar",
//   "sachin": "SR Tendulkar",
//   "tendulkar": "SR Tendulkar",
  
//   // R Dravid
//   "rahul dravid": "R Dravid",
//   "dravid": "R Dravid",
  
//   // Yuvraj Singh
//   "yuvraj": "Yuvraj Singh",
  
//   // SP Narine
//   "sunil narine": "SP Narine",
//   "narine": "SP Narine",
  
//   // AD Russell
//   "andre russell": "AD Russell",
//   "russell": "AD Russell",
  
//   // YK Pathan
//   "yusuf pathan": "YK Pathan",
//   "yusuf": "YK Pathan",
  
//   // IK Pathan
//   "irfan pathan": "IK Pathan",
//   "irfan": "IK Pathan",
  
//   // Harbhajan Singh
//   "harbhajan": "Harbhajan Singh",
//   "bhajji": "Harbhajan Singh",
  
//   // R Ashwin
//   "ravichandran ashwin": "R Ashwin",
//   "ashwin": "R Ashwin",
  
//   // AR Patel
//   "axar patel": "AR Patel",
//   "axar": "AR Patel",
  
//   // Kuldeep Yadav
//   "kuldeep": "Kuldeep Yadav",
  
//   // Noor Ahmad
//   "noor": "Noor Ahmad",
  
//   // Arshdeep Singh
//   "arshdeep": "Arshdeep Singh",
  
//   // M Shahrukh Khan
//   "shahrukh khan": "M Shahrukh Khan",
//   "shahrukh": "M Shahrukh Khan",
  
//   // JM Sharma
//   "jitesh sharma": "JM Sharma",
//   "jitesh": "JM Sharma",
  
//   // H Klaasen
//   "heinrich klaasen": "H Klaasen",
//   "klaasen": "H Klaasen",
  
//   // TM Head
//   "travis head": "TM Head",
//   "head": "TM Head",
  
//   // AK Markram
//   "aiden markram": "AK Markram",
//   "markram": "AK Markram",
  
//   // YBK Jaiswal
//   "yashasvi jaiswal": "YBK Jaiswal",
//   "jaiswal": "YBK Jaiswal",
  
//   // R Parag
//   "riyan parag": "R Parag",
//   "parag": "R Parag",
  
//   // SO Hetmyer
//   "shimron hetmyer": "SO Hetmyer",
//   "hetmyer": "SO Hetmyer",
  
//   // Dhruv Jurel
//   "jurel": "Dhruv Jurel",
  
//   // D Padikkal
//   "devdutt padikkal": "D Padikkal",
//   "padikkal": "D Padikkal",
  
//   // RD Gaikwad
//   "ruturaj gaikwad": "RD Gaikwad",
//   "gaikwad": "RD Gaikwad",
//   "ruturaj": "RD Gaikwad",
  
//   // DP Conway
//   "devon conway": "DP Conway",
//   "conway": "DP Conway",
  
//   // F du Plessis
//   "faf du plessis": "F du Plessis",
//   "faf": "F du Plessis",
//   "du plessis": "F du Plessis",
  
//   // Mukesh Kumar
//   "mukesh": "Mukesh Kumar",
  
//   // M Pathirana
//   "matheesha pathirana": "M Pathirana",
//   "pathirana": "M Pathirana",
  
//   // M Theekshana
//   "maheesh theekshana": "M Theekshana",
//   "theekshana": "M Theekshana",
  
//   // KK Ahmed
//   "khaleel ahmed": "KK Ahmed",
//   "khaleel": "KK Ahmed",
  
//   // M Prasidh Krishna
//   "prasidh krishna": "M Prasidh Krishna",
//   "prasidh": "M Prasidh Krishna",
  
//   // SN Thakur
//   "shardul thakur": "SN Thakur",
//   "shardul": "SN Thakur",
  
//   // DL Chahar
//   "deepak chahar": "DL Chahar",
  
//   // S Dube
//   "shivam dube": "S Dube",
//   "dube": "S Dube",
  
//   // MM Ali
//   "moeen ali": "MM Ali",
//   "moeen": "MM Ali",
  
//   // DJ Bravo
//   "dwayne bravo": "DJ Bravo",
//   "bravo": "DJ Bravo",
  
//   // SM Curran
//   "sam curran": "SM Curran",
//   "curran": "SM Curran",
  
//   // PWH de Silva
//   "wanindu hasaranga": "PWH de Silva",
//   "hasaranga": "PWH de Silva",
  
//   // A Nortje
//   "anrich nortje": "A Nortje",
//   "nortje": "A Nortje",
  
//   // L Ngidi
//   "lungi ngidi": "L Ngidi",
//   "ngidi": "L Ngidi",
  
//   // TA Boult
//   "trent boult": "TA Boult",
//   "boult": "TA Boult",
  
//   // MA Starc
//   "mitchell starc": "MA Starc",
//   "starc": "MA Starc",
  
//   // LH Ferguson
//   "lockie ferguson": "LH Ferguson",
//   "ferguson": "LH Ferguson",
  
//   // LS Livingstone
//   "liam livingstone": "LS Livingstone",
//   "livingstone": "LS Livingstone",
  
//   // Abhishek Sharma
//   "abhishek": "Abhishek Sharma",
  
//   // Rahmanullah Gurbaz
//   "gurbaz": "Rahmanullah Gurbaz",
  
//   // Ravi Bishnoi
//   "bishnoi": "Ravi Bishnoi",
  
//   // Yashasvi
//   "yashasvi": "YBK Jaiswal",
  
//   // Avesh Khan
//   "avesh": "Avesh Khan",
  
//   // Mohsin Khan
//   "mohsin": "Mohsin Khan",
  
//   // Yash Thakur
//   "yash thakur": "Yash Thakur",
  
//   // Umran Malik
//   "umran": "Umran Malik",
  
//   // Akash Madhwal
//   "madhwal": "Akash Madhwal",
  
//   // Rinku Singh
//   "rinku": "RK Singh",
  
//   // Riyan Parag
//   "riyan": "R Parag",
  
//   // Shimron
//   "shimron": "SO Hetmyer",
  
//   // Prabhsimran
//   "prabhsimran": "P Simran Singh",
  
//   // Harshal Patel
//   "harshal": "HV Patel",
  
//   // Deepak Hooda
//   "hooda": "DJ Hooda",
  
//   // Nitish Rana
//   "nitish rana": "N Rana",
//   "nitish": "N Rana",
  
//   // Tilak Varma
//   "tilak": "Tilak Varma",
  
//   // Rinku
//   "rinku singh": "RK Singh"
// };

// // ============================================================
// // LOAD JSON DATA
// // ============================================================
// async function loadData() {
//   try {
//     console.log('⏳ Loading JSON (86.8 MB)...');
//     const start = Date.now();
//     const response = await fetch('/static/dashboard/data/ipl_data.json');
//     allData = await response.json();
//     const time = ((Date.now() - start) / 1000).toFixed(2);
//     console.log(`✅ Data loaded: ${allData.length} rows in ${time}s`);
//     extractPlayers();
//     console.log(`✅ Players found: ${playersList.length}`);
//     console.log(`✅ Sample players:`, playersList.slice(0, 15));
//   } catch (err) {
//     console.error('❌ Load error:', err);
//     const box = document.getElementById('playerResult');
//     if (box) box.innerHTML = '<p class="text-danger">⚠️ Data load nahi hua. Console check karo.</p>';
//   }
// }

// // ============================================================
// // EXTRACT UNIQUE PLAYERS FROM DATA
// // ============================================================
// function extractPlayers() {
//   const set = new Set();
//   allData.forEach(r => {
//     if (r.batter && r.batter.trim()) set.add(r.batter.trim());
//     if (r.bowler && r.bowler.trim()) set.add(r.bowler.trim());
//     if (r.non_striker && r.non_striker.trim()) set.add(r.non_striker.trim());
//     if (r.wicket_player_out && r.wicket_player_out.trim()) set.add(r.wicket_player_out.trim());
//   });
//   playersList = [...set].sort();
// }

// // ============================================================
// // SMART MATCH — 807 Players + Aliases
// // ============================================================
// function findBestMatch(query) {
//   if (!query) return null;
//   const q = query.toLowerCase().trim();

//   // 1. Alias check (famous players)
//   if (nameAliases[q]) return nameAliases[q];

//   // 2. Exact match
//   const exact = playersList.find(p => p.toLowerCase() === q);
//   if (exact) return exact;

//   // 3. StartsWith
//   const startsWith = playersList.find(p => p.toLowerCase().startsWith(q));
//   if (startsWith) return startsWith;

//   // 4. Contains
//   const contains = playersList.find(p => p.toLowerCase().includes(q));
//   if (contains) return contains;

//   // 5. Word-by-word match
//   const words = q.split(/\s+/);
//   const wordMatch = playersList.find(p => {
//     const pLower = p.toLowerCase();
//     return words.every(w => pLower.includes(w));
//   });
//   if (wordMatch) return wordMatch;

//   // 6. Last name match
//   const lastName = words[words.length - 1];
//   const lastMatch = playersList.find(p => {
//     const parts = p.toLowerCase().split(/\s+/);
//     return parts[parts.length - 1] === lastName;
//   });
//   if (lastMatch) return lastMatch;

//   return null;
// }

// // ============================================================
// // SUGGESTIONS — Real-time
// // ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//   const input = document.getElementById('playerInput');
//   const suggBox = document.getElementById('suggestions');

//   if (!input || !suggBox) return;

//   input.addEventListener('input', () => {
//     const q = input.value.toLowerCase().trim();
//     suggBox.innerHTML = '';
//     if (q.length < 1) { suggBox.style.display = 'none'; return; }

//     const words = q.split(/\s+/);
//     const directMatches = playersList.filter(p => {
//       const pLower = p.toLowerCase();
//       if (pLower.includes(q)) return true;
//       if (words.every(w => pLower.includes(w))) return true;
//       return false;
//     });

//     // Alias matches
//     const aliasMatches = [];
//     Object.keys(nameAliases).forEach(alias => {
//       if (alias.includes(q)) {
//         const target = nameAliases[alias];
//         if (playersList.includes(target)) {
//           aliasMatches.push(target);
//         }
//       }
//     });

//     const combined = [...new Set([...aliasMatches, ...directMatches])].slice(0, 10);

//     if (combined.length === 0) { suggBox.style.display = 'none'; return; }

//     suggBox.style.display = 'block';
//     combined.forEach(p => {
//       const div = document.createElement('div');
//       div.className = 'suggestion-item';
//       div.textContent = p;
//       div.onclick = () => {
//         input.value = p;
//         suggBox.style.display = 'none';
//         analyzePlayer();
//       };
//       suggBox.appendChild(div);
//     });
//   });
// });

// // ============================================================
// // ANALYZE PLAYER
// // ============================================================
// function analyzePlayer() {
//   const input = document.getElementById('playerInput');
//   const box = document.getElementById('playerResult');
//   const rawQuery = input.value.trim();

//   if (!rawQuery) {
//     box.innerHTML = '<p class="text-warning">⚠️ Player ka naam likho.</p>';
//     return;
//   }

//   const name = findBestMatch(rawQuery);

//   if (!name) {
//     box.innerHTML = `<p class="text-danger">❌ "${rawQuery}" ka data nahi mila.<br>
//       <small class="text-muted">Suggestions check karo — dataset mein exact naam likho.</small></p>`;
//     return;
//   }

//   const nameChanged = name.toLowerCase() !== rawQuery.toLowerCase();
//   const rows = allData.filter(r => r.batter === name || r.bowler === name);

//   if (rows.length === 0) {
//     box.innerHTML = `<p class="text-danger">❌ "${name}" ka data nahi mila.</p>`;
//     return;
//   }

//   let runs = 0, balls = 0, fours = 0, sixes = 0, dismissals = 0;
//   let wickets = 0, ballsBowled = 0, runsGiven = 0;
//   const teamsSet = new Set();
//   const matchRuns = {};

//   rows.forEach(r => {
//     if (r.team1) teamsSet.add(r.team1);
//     if (r.team2) teamsSet.add(r.team2);

//     if (r.batter === name) {
//       const rb = parseInt(r.runs_batter) || 0;
//       runs += rb; balls++;
//       if (rb === 4) fours++;
//       if (rb === 6) sixes++;
//       if (!matchRuns[r.match_id]) matchRuns[r.match_id] = 0;
//       matchRuns[r.match_id] += rb;
//     }
//     if (r.wicket_player_out === name) dismissals++;
//     if (r.bowler === name) {
//       ballsBowled++;
//       runsGiven += parseInt(r.runs_total) || 0;
//       if (r.wicket_kind && r.wicket_kind !== 'run out' && r.wicket_kind !== 'retired hurt') wickets++;
//     }
//   });

//   let fifties = 0, hundreds = 0;
//   Object.values(matchRuns).forEach(r => {
//     if (r >= 100) hundreds++;
//     else if (r >= 50) fifties++;
//   });

//   const strikeRate = balls > 0 ? ((runs / balls) * 100).toFixed(2) : '0.00';
//   const economy = ballsBowled > 0 ? (runsGiven / (ballsBowled / 6)).toFixed(2) : '0.00';
//   const average = dismissals > 0 ? (runs / dismissals).toFixed(2) : 'N/A';

//   const notice = nameChanged
//     ? `<p class="text-info small">ℹ️ Aapne "${rawQuery}" search kiya — dataset mein "${name}" mila.</p>`
//     : '';

//   box.innerHTML = `
//     <h3 class="text-warning mb-2">👤 ${name}</h3>
//     ${notice}
//     <p class="text-muted">Teams: ${[...teamsSet].join(', ')}</p>

//     <h5 class="text-warning mt-4">🏏 Batting</h5>
//     <div class="row g-3">
//       ${statCard('Runs', runs, '#00ff88')}
//       ${statCard('Balls', balls, '#00bfff')}
//       ${statCard('Strike Rate', strikeRate, '#ffa500')}
//       ${statCard('Average', average, '#bb86fc')}
//       ${statCard('Fours', fours, '#00d9c0')}
//       ${statCard('Sixes', sixes, '#ff4d6d')}
//       ${statCard('50s', fifties, '#00d9c0')}
//       ${statCard('100s', hundreds, '#ff4d6d')}
//     </div>

//     <h5 class="text-warning mt-4">🎯 Bowling</h5>
//     <div class="row g-3">
//       ${statCard('Wickets', wickets, '#00ff88')}
//       ${statCard('Balls Bowled', ballsBowled, '#00bfff')}
//       ${statCard('Runs Given', runsGiven, '#ffa500')}
//       ${statCard('Economy', economy, '#bb86fc')}
//     </div>
//   `;
// }

// function statCard(label, value, color) {
//   return `
//     <div class="col-md-3">
//       <div class="glass-card p-3 text-center">
//         <div style="font-size:1.6rem;font-weight:bold;color:${color};">${value}</div>
//         <div style="font-size:0.85rem;opacity:0.8;">${label}</div>
//       </div>
//     </div>
//   `;
// }

// // ============================================================
// // INIT
// // ============================================================
// loadData();



// =======================NEW   code  ===================
// ============================================================
// IPL Player Analysis - Complete with Typo Tolerance
// 807 Players + Famous Aliases + Fuzzy Search
// ============================================================

let allData = [];
let playersList = [];

// ============================================================
// FAMOUS PLAYERS ALIASES
// ============================================================
const nameAliases = {
  // Kohli
  "virat kohli": "V Kohli", "virat": "V Kohli", "kohli": "V Kohli", "vk": "V Kohli",
  // Rohit
  "rohit sharma": "RG Sharma", "rohit": "RG Sharma",
  // Bumrah
  "jasprit bumrah": "JJ Bumrah", "bumrah": "JJ Bumrah",
  // Dhoni
  "ms dhoni": "MS Dhoni", "dhoni": "MS Dhoni", "mahendra singh dhoni": "MS Dhoni",
  // ABD
  "ab de villiers": "AB de Villiers", "abd": "AB de Villiers", "de villiers": "AB de Villiers",
  // KL Rahul
  "lokesh rahul": "KL Rahul",
  // Warner
  "david warner": "DA Warner", "warner": "DA Warner",
  // Smith
  "steve smith": "SPD Smith",
  // Buttler
  "jos buttler": "JC Buttler", "buttler": "JC Buttler",
  // Raina
  "suresh raina": "SK Raina", "raina": "SK Raina",
  // Jadeja
  "ravindra jadeja": "RA Jadeja", "jadeja": "RA Jadeja",
  // Hardik
  "hardik pandya": "HH Pandya", "hardik": "HH Pandya",
  // Krunal
  "krunal pandya": "KH Pandya", "krunal": "KH Pandya",
  // Pollard
  "kieron pollard": "KA Pollard", "pollard": "KA Pollard",
  // Malinga
  "lasith malinga": "SL Malinga", "malinga": "SL Malinga",
  // Chahal
  "yuzvendra chahal": "YS Chahal", "yuzi chahal": "YS Chahal", "chahal": "YS Chahal",
  // Gayle
  "chris gayle": "CH Gayle", "gayle": "CH Gayle",
  // Maxwell
  "glenn maxwell": "GJ Maxwell", "maxwell": "GJ Maxwell",
  // Watson
  "shane watson": "SR Watson", "watson": "SR Watson",
  // Stokes
  "ben stokes": "BA Stokes", "stokes": "BA Stokes",
  // Archer
  "jofra archer": "JC Archer", "archer": "JC Archer",
  // Cummins
  "pat cummins": "PJ Cummins", "cummins": "PJ Cummins",
  // Rabada
  "kagiso rabada": "K Rabada", "rabada": "K Rabada",
  // Siraj
  "siraj": "Mohammed Siraj",
  // Bhuvneshwar
  "bhuvneshwar kumar": "B Kumar", "bhuvneshwar": "B Kumar",
  // Dhawan
  "shikhar dhawan": "S Dhawan", "dhawan": "S Dhawan",
  // Rahane
  "ajinkya rahane": "AM Rahane", "rahane": "AM Rahane",
  // Pant
  "rishabh pant": "RR Pant", "pant": "RR Pant",
  // Samson
  "sanju samson": "SV Samson", "sanju": "SV Samson", "samson": "SV Samson",
  // Gill
  "shubman gill": "Shubman Gill", "gill": "Shubman Gill",
  // Shaw
  "prithvi shaw": "PP Shaw", "shaw": "PP Shaw",
  // Ishan
  "ishan kishan": "Ishan Kishan", "ishan": "Ishan Kishan",
  // SKY
  "suryakumar yadav": "SA Yadav", "suryakumar": "SA Yadav", "sky": "SA Yadav",
  // DK
  "dinesh karthik": "KD Karthik", "karthik": "KD Karthik", "dk": "KD Karthik",
  // Rayudu
  "ambati rayudu": "AT Rayudu", "rayudu": "AT Rayudu",
  // Uthappa
  "robin uthappa": "RV Uthappa", "uthappa": "RV Uthappa",
  // Gambhir
  "gautam gambhir": "G Gambhir", "gambhir": "G Gambhir",
  // Sehwag
  "virender sehwag": "V Sehwag", "sehwag": "V Sehwag",
  // Ganguly
  "sourav ganguly": "SC Ganguly", "ganguly": "SC Ganguly",
  // Sachin
  "sachin tendulkar": "SR Tendulkar", "sachin": "SR Tendulkar", "tendulkar": "SR Tendulkar",
  // Dravid
  "rahul dravid": "R Dravid", "dravid": "R Dravid",
  // Yuvraj
  "yuvraj": "Yuvraj Singh",
  // Narine
  "sunil narine": "SP Narine", "narine": "SP Narine",
  // Russell
  "andre russell": "AD Russell", "russell": "AD Russell",
  // Pathan
  "yusuf pathan": "YK Pathan", "yusuf": "YK Pathan",
  "irfan pathan": "IK Pathan", "irfan": "IK Pathan",
  // Harbhajan
  "harbhajan": "Harbhajan Singh", "bhajji": "Harbhajan Singh",
  // Ashwin
  "ravichandran ashwin": "R Ashwin", "ashwin": "R Ashwin",
  // Axar
  "axar patel": "AR Patel", "axar": "AR Patel",
  // Kuldeep
  "kuldeep": "Kuldeep Yadav",
  // Noor
  "noor": "Noor Ahmad",
  // Arshdeep
  "arshdeep": "Arshdeep Singh",
  // Shahrukh
  "shahrukh khan": "M Shahrukh Khan", "shahrukh": "M Shahrukh Khan",
  // Jitesh
  "jitesh sharma": "JM Sharma", "jitesh": "JM Sharma",
  // Klaasen
  "heinrich klaasen": "H Klaasen", "klaasen": "H Klaasen",
  // Head
  "travis head": "TM Head", "head": "TM Head",
  // Markram
  "aiden markram": "AK Markram", "markram": "AK Markram",
  // Jaiswal
  "yashasvi jaiswal": "YBK Jaiswal", "jaiswal": "YBK Jaiswal",
  // Parag
  "riyan parag": "R Parag", "parag": "R Parag",
  // Hetmyer
  "shimron hetmyer": "SO Hetmyer", "hetmyer": "SO Hetmyer",
  // Jurel
  "jurel": "Dhruv Jurel",
  // Padikkal
  "devdutt padikkal": "D Padikkal", "padikkal": "D Padikkal",
  // Gaikwad
  "ruturaj gaikwad": "RD Gaikwad", "gaikwad": "RD Gaikwad", "ruturaj": "RD Gaikwad",
  // Conway
  "devon conway": "DP Conway", "conway": "DP Conway",
  // Faf
  "faf du plessis": "F du Plessis", "faf": "F du Plessis", "du plessis": "F du Plessis",
  // Mukesh
  "mukesh": "Mukesh Kumar",
  // Pathirana
  "matheesha pathirana": "M Pathirana", "pathirana": "M Pathirana",
  // Theekshana
  "maheesh theekshana": "M Theekshana", "theekshana": "M Theekshana",
  // Khaleel
  "khaleel ahmed": "KK Ahmed", "khaleel": "KK Ahmed",
  // Prasidh
  "prasidh krishna": "M Prasidh Krishna", "prasidh": "M Prasidh Krishna",
  // Shardul
  "shardul thakur": "SN Thakur", "shardul": "SN Thakur",
  // Deepak Chahar
  "deepak chahar": "DL Chahar",
  // Shivam Dube
  "shivam dube": "S Dube", "dube": "S Dube",
  // Moeen
  "moeen ali": "MM Ali", "moeen": "MM Ali",
  // Bravo
  "dwayne bravo": "DJ Bravo", "bravo": "DJ Bravo",
  // Curran
  "sam curran": "SM Curran", "curran": "SM Curran",
  // Hasaranga
  "wanindu hasaranga": "PWH de Silva", "hasaranga": "PWH de Silva",
  // Nortje
  "anrich nortje": "A Nortje", "nortje": "A Nortje",
  // Ngidi
  "lungi ngidi": "L Ngidi", "ngidi": "L Ngidi",
  // Boult
  "trent boult": "TA Boult", "boult": "TA Boult",
  // Starc
  "mitchell starc": "MA Starc", "starc": "MA Starc",
  // Ferguson
  "lockie ferguson": "LH Ferguson", "ferguson": "LH Ferguson",
  // Livingstone
  "liam livingstone": "LS Livingstone", "livingstone": "LS Livingstone",
  // Abhishek
  "abhishek": "Abhishek Sharma",
  // Gurbaz
  "gurbaz": "Rahmanullah Gurbaz",
  // Bishnoi
  "bishnoi": "Ravi Bishnoi",
  // Avesh
  "avesh": "Avesh Khan",
  // Mohsin
  "mohsin": "Mohsin Khan",
  // Umran
  "umran": "Umran Malik",
  // Madhwal
  "madhwal": "Akash Madhwal",
  // Rinku
  "rinku": "RK Singh", "rinku singh": "RK Singh",
  // Nitish
  "nitish rana": "N Rana", "nitish": "N Rana",
  // Tilak
  "tilak": "Tilak Varma",
  // Hooda
  "hooda": "DJ Hooda",
  // Harshal
  "harshal": "HV Patel",
  // Prabhsimran
  "prabhsimran": "P Simran Singh",
  // Yash Thakur
  "yash thakur": "Yash Thakur"
};

// ============================================================
// LOAD JSON
// ============================================================
async function loadData() {
  try {
    console.log('⏳ Loading JSON (86.8 MB)...');
    const start = Date.now();
    const response = await fetch('/static/dashboard/data/ipl_data.json');
    allData = await response.json();
    const time = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`✅ Data loaded: ${allData.length} rows in ${time}s`);
    extractPlayers();
    console.log(`✅ Players found: ${playersList.length}`);
  } catch (err) {
    console.error('❌ Load error:', err);
    const box = document.getElementById('playerResult');
    if (box) box.innerHTML = '<p class="text-danger">⚠️ Data load nahi hua.</p>';
  }
}

// ============================================================
// EXTRACT UNIQUE PLAYERS
// ============================================================
function extractPlayers() {
  const set = new Set();
  allData.forEach(r => {
    if (r.batter && r.batter.trim()) set.add(r.batter.trim());
    if (r.bowler && r.bowler.trim()) set.add(r.bowler.trim());
    if (r.non_striker && r.non_striker.trim()) set.add(r.non_striker.trim());
    if (r.wicket_player_out && r.wicket_player_out.trim()) set.add(r.wicket_player_out.trim());
  });
  playersList = [...set].sort();
}

// ============================================================
// LEVENSHTEIN DISTANCE — Typo tolerance ke liye
// "kohali" vs "kohli" — kitne characters different hain
// ============================================================
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

// ============================================================
// FUZZY MATCH — Typo tolerant
// ============================================================
function findFuzzyMatch(query, list, maxDistance = 2) {
  if (!query) return null;
  const q = query.toLowerCase().trim();
  
  let bestMatch = null;
  let bestScore = Infinity;
  
  list.forEach(p => {
    const pLower = p.toLowerCase();
    const dist = levenshtein(q, pLower);
    if (dist < bestScore && dist <= maxDistance) {
      bestScore = dist;
      bestMatch = p;
    }
  });
  
  return bestMatch;
}

// ============================================================
// SMART MATCH — 807 Players + Aliases + Typo Tolerance
// ============================================================
function findBestMatch(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();

  // 1. Alias check
  if (nameAliases[q]) return nameAliases[q];

  // 2. Exact match
  const exact = playersList.find(p => p.toLowerCase() === q);
  if (exact) return exact;

  // 3. StartsWith
  const startsWith = playersList.find(p => p.toLowerCase().startsWith(q));
  if (startsWith) return startsWith;

  // 4. Contains
  const contains = playersList.find(p => p.toLowerCase().includes(q));
  if (contains) return contains;

  // 5. Word-by-word
  const words = q.split(/\s+/);
  const wordMatch = playersList.find(p => {
    const pLower = p.toLowerCase();
    return words.every(w => pLower.includes(w));
  });
  if (wordMatch) return wordMatch;

  // 6. Last name match
  const lastName = words[words.length - 1];
  const lastMatch = playersList.find(p => {
    const parts = p.toLowerCase().split(/\s+/);
    return parts[parts.length - 1] === lastName;
  });
  if (lastMatch) return lastMatch;

  // 7. Alias mein fuzzy match (typo ke liye)
  const aliasKeys = Object.keys(nameAliases);
  const fuzzyAlias = findFuzzyMatch(q, aliasKeys, 2);
  if (fuzzyAlias && nameAliases[fuzzyAlias]) {
    const target = nameAliases[fuzzyAlias];
    if (playersList.includes(target)) return target;
  }

  // 8. Players list mein fuzzy match
  const fuzzyPlayer = findFuzzyMatch(q, playersList, 2);
  if (fuzzyPlayer) return fuzzyPlayer;

  return null;
}

// ============================================================
// SUGGESTIONS — Real-time with Typo Tolerance
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('playerInput');
  const suggBox = document.getElementById('suggestions');

  if (!input || !suggBox) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    suggBox.innerHTML = '';
    if (q.length < 1) { suggBox.style.display = 'none'; return; }

    const words = q.split(/\s+/);
    
    // Direct matches
    const directMatches = playersList.filter(p => {
      const pLower = p.toLowerCase();
      if (pLower.includes(q)) return true;
      if (words.every(w => pLower.includes(w))) return true;
      return false;
    });

    // Alias matches
    const aliasMatches = [];
    Object.keys(nameAliases).forEach(alias => {
      if (alias.includes(q)) {
        const target = nameAliases[alias];
        if (playersList.includes(target)) aliasMatches.push(target);
      }
    });

    // Fuzzy matches (typo ke liye)
    const fuzzyMatches = [];
    if (directMatches.length + aliasMatches.length < 5) {
      playersList.forEach(p => {
        const dist = levenshtein(q, p.toLowerCase());
        if (dist <= 2 && !directMatches.includes(p) && !aliasMatches.includes(p)) {
          fuzzyMatches.push(p);
        }
      });
    }

    const combined = [...new Set([...directMatches, ...aliasMatches, ...fuzzyMatches])].slice(0, 10);

    if (combined.length === 0) { suggBox.style.display = 'none'; return; }

    suggBox.style.display = 'block';
    combined.forEach(p => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.textContent = p;
      div.onclick = () => {
        input.value = p;
        suggBox.style.display = 'none';
        analyzePlayer();
      };
      suggBox.appendChild(div);
    });
  });
});

// ============================================================
// ANALYZE PLAYER
// ============================================================
function analyzePlayer() {
  const input = document.getElementById('playerInput');
  const box = document.getElementById('playerResult');
  const rawQuery = input.value.trim();

  if (!rawQuery) {
    box.innerHTML = '<p class="text-warning">⚠️ Player ka naam likho.</p>';
    return;
  }

  const name = findBestMatch(rawQuery);

  if (!name) {
    box.innerHTML = `<p class="text-danger">❌ "${rawQuery}" ka data nahi mila.<br>
      <small class="text-muted">Suggestions check karo.</small></p>`;
    return;
  }

  const nameChanged = name.toLowerCase() !== rawQuery.toLowerCase();
  const rows = allData.filter(r => r.batter === name || r.bowler === name);

  if (rows.length === 0) {
    box.innerHTML = `<p class="text-danger">❌ "${name}" ka data nahi mila.</p>`;
    return;
  }

  let runs = 0, balls = 0, fours = 0, sixes = 0, dismissals = 0;
  let wickets = 0, ballsBowled = 0, runsGiven = 0;
  const teamsSet = new Set();
  const matchRuns = {};

  rows.forEach(r => {
    if (r.team1) teamsSet.add(r.team1);
    if (r.team2) teamsSet.add(r.team2);

    if (r.batter === name) {
      const rb = parseInt(r.runs_batter) || 0;
      runs += rb; balls++;
      if (rb === 4) fours++;
      if (rb === 6) sixes++;
      if (!matchRuns[r.match_id]) matchRuns[r.match_id] = 0;
      matchRuns[r.match_id] += rb;
    }
    if (r.wicket_player_out === name) dismissals++;
    if (r.bowler === name) {
      ballsBowled++;
      runsGiven += parseInt(r.runs_total) || 0;
      if (r.wicket_kind && r.wicket_kind !== 'run out' && r.wicket_kind !== 'retired hurt') wickets++;
    }
  });

  let fifties = 0, hundreds = 0;
  Object.values(matchRuns).forEach(r => {
    if (r >= 100) hundreds++;
    else if (r >= 50) fifties++;
  });

  const strikeRate = balls > 0 ? ((runs / balls) * 100).toFixed(2) : '0.00';
  const economy = ballsBowled > 0 ? (runsGiven / (ballsBowled / 6)).toFixed(2) : '0.00';
  const average = dismissals > 0 ? (runs / dismissals).toFixed(2) : 'N/A';

  const notice = nameChanged
    ? `<p class="text-info small">ℹ️ Aapne "${rawQuery}" search kiya — dataset mein "${name}" mila.</p>`
    : '';

  box.innerHTML = `
    <h3 class="text-warning mb-2">👤 ${name}</h3>
    ${notice}
    <p class="text-muted">Teams: ${[...teamsSet].join(', ')}</p>

    <h5 class="text-warning mt-4">🏏 Batting</h5>
    <div class="row g-3">
      ${statCard('Runs', runs, '#00ff88')}
      ${statCard('Balls', balls, '#00bfff')}
      ${statCard('Strike Rate', strikeRate, '#ffa500')}
      ${statCard('Average', average, '#bb86fc')}
      ${statCard('Fours', fours, '#00d9c0')}
      ${statCard('Sixes', sixes, '#ff4d6d')}
      ${statCard('50s', fifties, '#00d9c0')}
      ${statCard('100s', hundreds, '#ff4d6d')}
    </div>

    <h5 class="text-warning mt-4">🎯 Bowling</h5>
    <div class="row g-3">
      ${statCard('Wickets', wickets, '#00ff88')}
      ${statCard('Balls Bowled', ballsBowled, '#00bfff')}
      ${statCard('Runs Given', runsGiven, '#ffa500')}
      ${statCard('Economy', economy, '#bb86fc')}
    </div>
  `;
}

function statCard(label, value, color) {
  return `
    <div class="col-md-3">
      <div class="glass-card p-3 text-center">
        <div style="font-size:1.6rem;font-weight:bold;color:${color};">${value}</div>
        <div style="font-size:0.85rem;opacity:0.8;">${label}</div>
      </div>
    </div>
  `;
}

// ============================================================
// INIT
// ============================================================
loadData();
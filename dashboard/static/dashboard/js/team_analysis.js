// IPL Team Analysis - Without Player Stats
// Sirf Team Ke Stats Dikhao
// ============================================================

let allData = [];

// ============================================================
// LOAD JSON DATA
// ============================================================
async function loadData() {
  try {
    console.log('⏳ Loading team data...');
    const start = Date.now();
    const res = await fetch('/static/dashboard/data/ipl_data.json?t=' + Date.now());
    allData = await res.json();
    const time = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`✅ Team data loaded: ${allData.length} rows in ${time}s`);
  } catch (err) {
    console.error('❌ Load error:', err);
    const box = document.getElementById('teamResult');
    if (box) box.innerHTML = '<p class="text-danger">⚠️ Data load nahi hua. Console check karo.</p>';
  }
}

// ============================================================
// ANALYZE TEAM — Sirf Team Stats
// ============================================================
function analyzeTeam() {
  const team = document.getElementById('teamSelect').value;
  const box = document.getElementById('teamResult');

  if (!team) {
    box.innerHTML = '<p class="text-warning">⚠️ Pehle team select karo.</p>';
    return;
  }

  // ============================================================
  // 1. TEAM KE MATCHES
  // ============================================================
  const matches = allData.filter(r => r.team1 === team || r.team2 === team);
  const uniqueMatches = [...new Set(matches.map(m => m.match_id))];

  // ============================================================
  // 2. WINS
  // ============================================================
  const wins = uniqueMatches.filter(mid => {
    const row = allData.find(r => r.match_id === mid);
    return row && row.winner === team;
  }).length;

  // ============================================================
  // 3. LOSSES
  // ============================================================
  const losses = uniqueMatches.length - wins;

  // ============================================================
  // 4. RUNS SCORED + WICKETS TAKEN
  // ============================================================
  let runsScored = 0, wicketsTaken = 0;

  matches.forEach(r => {
    if (r.batting_team === team) {
      runsScored += parseInt(r.runs_total) || 0;
    }
    if (r.batting_team !== team && r.wicket_kind && r.wicket_kind !== 'run out') {
      wicketsTaken++;
    }
  });

  // ============================================================
  // 5. WIN PERCENTAGE
  // ============================================================
  const winPercentage = uniqueMatches.length > 0
    ? ((wins / uniqueMatches.length) * 100).toFixed(2)
    : '0.00';

  // ============================================================
  // 6. RENDER — Sirf Team Stats
  // ============================================================
  box.innerHTML = `
    <h3 class="text-warning">📊 ${team}</h3>
    <p class="text-muted">Complete team statistics</p>

    <div class="row g-3 mt-4">
      ${statCard('Matches', uniqueMatches.length, '#00bfff')}
      ${statCard('Wins', wins, '#00ff88')}
      ${statCard('Losses', losses, '#ff4d6d')}
      ${statCard('Win %', winPercentage + '%', '#ffd700')}
    </div>

    <div class="row g-3 mt-3">
      ${statCard('Runs Scored', runsScored, '#ffa500')}
      ${statCard('Wickets Taken', wicketsTaken, '#bb86fc')}
    </div>
  `;
}

// ============================================================
// STAT CARD HELPER
// ============================================================
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
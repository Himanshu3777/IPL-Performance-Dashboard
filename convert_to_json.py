# convert_to_json.py
import csv
import json
import os

CSV_FILE = 'ipl-ball-by-ball-dataset.csv'
JSON_FILE = 'dashboard/static/dashboard/data/ipl_data.json'

# Folder auto-create karega (Django standard)
os.makedirs(os.path.dirname(JSON_FILE), exist_ok=True)

data = []
with open(CSV_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        data.append({
            'match_id': row.get('match_id', ''),
            'season': row.get('season', ''),
            'team1': row.get('team1', ''),
            'team2': row.get('team2', ''),
            'winner': row.get('winner', ''),
            'batting_team': row.get('batting_team', ''),
            'batter': row.get('batter', ''),
            'bowler': row.get('bowler', ''),
            'non_striker': row.get('non_striker', ''),
            'runs_batter': row.get('runs_batter', '0'),
            'runs_total': row.get('runs_total', '0'),
            'wicket_kind': row.get('wicket_kind', ''),
            'wicket_player_out': row.get('wicket_player_out', ''),
        })

with open(JSON_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, separators=(',', ':'))

print(f'✅ Converted {len(data)} rows → {JSON_FILE}')
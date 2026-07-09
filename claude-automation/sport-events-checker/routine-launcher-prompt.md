# Launcher-Prompt für den wöchentlichen Routine-Job

> Dieser Text wird als Prompt des geplanten Jobs eingetragen. Er ist bewusst schlank und
> delegiert die Details an `routine-prompt.md`; neu ist die explizite Steuerung des rollenden
> Memory (`progress.md` → `## STATE (rolling)`).

---

Arbeite im Repository C:\dev\privat\sport_events auf dem master-Branch.

## 1. Gedächtnis laden (zuerst, vor allem anderen)
Lies den Kopf von `claude-automation/sport-events-checker/progress.md`, insbesondere den Block
`## STATE (rolling)`. Das ist dein Gedächtnis zwischen den Läufen. Nutze ihn aktiv:
- Events auf der **BLACKLIST** nicht (wieder) anlegen.
- **ZU PRÜFEN**-Fälle (Phantom-Verdacht) gegen offizielle Quelle verifizieren; bei bestätigtem
  Nicht-Stattfinden entfernen und in die BLACKLIST verschieben.
- **BACKLOG**-Aufgaben zuerst abarbeiten.
- Beim Recherchieren die laut **QUELLEN-STAND** am längsten nicht geprüften Quellen bevorzugen.

## 2. Routine ausführen
Lies dann `claude-automation/sport-events-checker/routine-prompt.md` vollständig und führe die dort
beschriebene wöchentliche Wartungs-Routine exakt nach diesen Instruktionen aus (Anti-Flut-Limits,
Content-Tiefe, noindex für vergangene Events, Verifikation, imageUrl, SEO/Sitemap-Check sowie
Commit + Push auf master am Ende).

## 3. Gedächtnis fortschreiben (rollend, am Ende)
Aktualisiere `progress.md`:
- den `## STATE (rolling)`-Block auf den neuen Stand bringen (Kennzahlen, BLACKLIST um neu
  entfernte/abgesagte Events mit Grund ergänzen, ZU-PRÜFEN/BACKLOG pflegen, QUELLEN-STAND mit
  heutigem Datum je geprüfter Quelle);
- ein kurzes Lauf-Summary oberhalb der bisherigen Session-Einträge einfügen;
- **rollend halten:** nur die letzten 3 Session-Summaries im Detail behalten, Älteres nach
  `progress-archive.md` auslagern (`progress.md` < 300 Zeilen).

## Sicherheits-Abbruch
Falls `progress.md` ODER `routine-prompt.md` fehlt oder nicht lesbar ist: brich ab und melde das,
statt zu raten oder Dateien/Instruktionen neu zu erfinden.

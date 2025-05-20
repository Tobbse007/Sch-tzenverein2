# Changelog - Schützenverein Tell Quierschied Website

## 2025-05-20: Vollständige Bildintegration und Verbesserungen

### Hinzugefügt
- "Mehr erfahren"-Links bei der Luftdruckhalle und beim Schießbereich für Kleinkaliberwaffen
- Neue Abschnitte:
  - Schießsport-Disziplinen (ID: disziplinen)
  - Gewehre (ID: gewehre)
  - Halle/Ausstattung (ID: halle)
  - Training & Preise (ID: training)

### Geändert
- Alle Platzhalterbilder durch echte Vereinsbilder ersetzt:
  - About-Bereich: "Schützenverein mehrere Leute auf der Terasse.jpeg"
  - Gastronomie-Bereich: "Schützenverein Gastronomie Innen"
  - Neuigkeiten (Item 3): "Schützenverein Luftdruckhalle"
  - Vorstandsmitglieder: Vereinslogo als Profilbild
  - Footer (Impressionen): "Schützenverein Gastronomie Terasse 2.jpeg"
- Verbesserte Bilddarstellung mit korrekten Dimensionen
- Abgerundete Styling für Teammitglieder-Bilder

### Behoben
- Fehlerhafte Bildpfade korrigiert (von images/ zu Bilder/)
- Lazy-Loading-Probleme behoben
- Mobile Ansicht optimiert

## 2025-05-19: Grundgerüst und Navigation

### Hinzugefügt
- Template-Struktur erstellt:
  - templates/homepage/
  - templates/unterseite/
- README.md mit ausführlicher Dokumentation

### Geändert
- Verbesserte Navigationsstruktur
- Optimierte Ladezeiten durch Entfernen von defer-Attributen

### Behoben
- Probleme mit der mobilen Navigation
- CSS-Anzeigefehler, die Inhalte erst beim Scrollen anzeigten

## 2025-05-18: Initialer Projektaufbau

### Hinzugefügt
- Grundlegende Seitenstruktur
- Erste Version des Designs
- Integration von Tailwind CSS
- Erste Implementierung von responsivem Design

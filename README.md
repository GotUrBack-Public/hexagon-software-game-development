# Hexagon Software & Game Development

Statische Website für **Hexagon Software & Game Development** — bereit für GitHub Pages.

## Projektstruktur

```
hexagon-software-game-development/
├── .nojekyll              # Verhindert Jekyll-Verarbeitung auf GitHub Pages
├── .gitignore             # Git-Ignore-Regeln
├── README.md              # Diese Datei
├── index.html             # Haupt-HTML-Datei
├── css/
│   └── style.css          # Stylesheet
├── js/
│   └── app.js             # JavaScript-Logik
└── games/
    ├── README.md          # Anleitung für Game-Binaries
    ├── PLACEHOLDER.txt    # Platzhalter-Hinweis
    ├── Runebound.exe      # Windows-Build (Platzhalter)
    └── Runebound.x86_64   # Linux-Build (Platzhalter)
```

## Lokal ausführen

```bash
cd hexagon-software-game-deployment
python3 -m http.server 8000
# Dann im Browser: http://localhost:8000
```

## Deployment auf GitHub Pages

1. **Repository erstellen** auf GitHub (Public oder Private)
2. **Code pushen**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hexagon website"
   git branch -M main
   git remote add origin https://github.com/<DEIN-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```
3. **GitHub Pages aktivieren**:
   - Repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Save
4. Die Seite ist dann unter `https://<DEIN-USERNAME>.github.io/<REPO-NAME>/` erreichbar

## Echte Game-Binaries einbinden

Die Dateien `games/Runebound.exe` und `games/Runebound.x86_64` sind **Platzhalter** (Textdateien).

**So ersetzen Sie sie durch echte Builds:**

1. Ersetzen Sie `games/Runebound.exe` durch das echte Windows-Build (`.exe`)
2. Ersetzen Sie `games/Runebound.x86_64` durch das echte Linux-Build (ausführbare Datei ohne Extension)
3. **WICHTIG**: Dateinamen **nicht ändern** — die Download-Links in `index.html` zeigen exakt auf:
   - `games/Runebound.exe`
   - `games/Runebound.x86_64`
4. Commit & Push:
   ```bash
   git add games/Runebound.exe games/Runebound.x86_64
   git commit -m "Update: Real Runebound binaries"
   git push
   ```

### Hinweise zu GitHub Pages & großen Dateien

- GitHub Pages serviert den `games/`-Ordner als statische Dateien — die Download-Buttons funktionieren direkt.
- GitHub hat eine **Soft-Limit von 100 MB pro Datei**. Größere Binaries benötigen Git LFS oder externe Hosting-Lösungen (z. B. GitHub Releases, itch.io, Steam).
- Die Platzhalter-Dateien sind winzig (< 1 KB). Ersetzen Sie sie **vor** dem Push der echten Builds, damit die History sauber bleibt.

## Technische Details

- **Keine externen Ressourcen**: Keine CDNs, Web Fonts, Analytics, Build-Schritte.
- **Vanilla HTML/CSS/JS**: Getrennte Dateien, semantic HTML, Accessibility-first.
- **Responsive**: Funktioniert auf Mobile, Tablet, Desktop.
- **Dark Gaming/Tech Theme**: Hexagon-Branding, Sticker-Badges, Modal-Dialogs.
- **Relative Pfade**: Funktioniert unter `file://`, Subpaths und GitHub Pages.

## Lizenz

MIT License — freie Verwendung, Anpassung und Verteilung.

# HistoTeach Landing Page

[![Website](https://img.shields.io/badge/Website-www.histoteach.de-blue)](https://www.histoteach.de)
[![Status](https://img.shields.io/badge/Status-In%20Entwicklung-yellow)]()
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

Eine moderne, minimalistische Landing Page für **HistoTeach** – eine im Aufbau befindliche Lernplattform für Geschichte mit kuratiertem, visuell aufbereitetem Inhalt.

---

## 📖 Über das Projekt

HistoTeach ist eine Lernplattform für Geschichte, die sich vom klassischen Schulbuchstil abhebt. Die Inhalte werden visuell ansprechend und strukturiert präsentiert, um historische Epochen und Ereignisse leichter verständlich zu machen.

Diese Landing Page dient als Informationsseite während der Entwicklungsphase und bietet:

- **Projektvorstellung**: Übersicht über Konzept und Ziele
- **Themenübersicht**: Auswahl historischer Epochen (z.B. Antikes Griechenland, Französische Revolution, Kalter Krieg)
- **Statusaktualisierung**: Aktueller Entwicklungsfortschritt (ca. 35%)
- **Beta-Anmeldung**: Möglichkeit, Updates zur Beta-Version zu erhalten
- **Kontaktinformationen**: Direkter Kontakt zum Entwickler

---

## ✨ Features

### Design & Ästhetik
- **Editorial Design**: Ruhiges, cleanes Layout inspiriert von Pinterest und archivalischer Ästhetik
- **Farbschema**: 
  - Warme Weißtöne als Basis (Metallic White, Half Black White)
  - Babyblaue Akzente für interaktive Elemente
  - Goldene Details als subtile Markierungen
- **Dark Mode**: Vollständige Unterstützung für helles und dunkles Design
  - Automatische Erkennung der Systemeinstellungen
  - Manueller Theme-Toggle
  - Persistente Speicherung der Benutzereinstellung
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Typografie**: 
  - Inter für UI-Elemente und Fließtext
  - Libre Baskerville für Überschriften (serifenbasiert)

### Funktionalität
- **Accessible Navigation**: 
  - Hamburger-Menü mit Slide-Drawer
  - Keyboard-Navigation (ESC zum Schließen)
  - ARIA-Labels für Screenreader
- **Theme Toggle**: Wechsel zwischen Hell- und Dunkelmodus
- **Horizontale Theme-Galerie**: Scrollbare Karten für historische Themen
- **Fortschrittsanzeige**: Visueller Projektfortschritt mit Prozentangabe
- **E-Mail-Integration**: Direkte mailto-Links für Beta-Anmeldung und Kontakt
- **FOUC-Prevention**: Theme wird vor dem Rendern initialisiert

### Technische Highlights
- **Vanilla JavaScript**: Keine Abhängigkeiten, pure JS für alle Interaktionen
- **CSS Custom Properties**: Vollständige Design-System-Implementierung via CSS-Variablen
- **Smooth Animations**: Subtile, Apple-inspirierte Animationen
- **Performance**: Optimierte Ladezeiten durch Preconnect zu Google Fonts
- **SEO-freundlich**: Semantisches HTML5, Meta-Tags, strukturierte Daten

---

## 🗂️ Projektstruktur

```
histoteach-landing/
│
├── index.html              # Hauptseite (Hero, Themen, Status, Release)
├── ueber-uns.html          # Über-uns-Seite
├── kontakt.html            # Kontaktseite
├── login.html              # Login-Seite (Placeholder)
├── registrierung.html      # Registrierungsseite (Placeholder)
├── impressum.html          # Impressum
│
├── styles.css              # Zentrales Stylesheet mit Design-System
│
├── CNAME                   # Custom Domain-Konfiguration (www.histoteach.de)
└── README.md               # Diese Datei
```

### Seitenübersicht

| Seite | Zweck | Status |
|-------|-------|--------|
| `index.html` | Hauptseite mit Hero, Themenübersicht und Projektinfos | ✅ Komplett |
| `ueber-uns.html` | Information über das Projekt und den Entwickler | ✅ Komplett |
| `kontakt.html` | Kontaktformular und Kontaktinformationen | ✅ Komplett |
| `login.html` | Login-Seite (für zukünftige Plattform) | 🚧 Placeholder |
| `registrierung.html` | Registrierungsseite (für zukünftige Plattform) | 🚧 Placeholder |
| `impressum.html` | Rechtliche Pflichtangaben | ✅ Komplett |

---

## 🎨 Design-System

### Farbpalette

#### Light Mode
```css
--mw: #FBFCF6;      /* Metallic White - Haupthintergrund */
--hbw: #F0EEEA;     /* Half Black White - Karten */
--gw: #F4F4EC;      /* Glistening White - Gradient */
--bw: #EDF1FE;      /* Brilliant White - Akzente */

--blue: #9FB7E5;    /* Baby Blue - Primäre Interaktionen */
--blueDeep: #3A4F7A; /* Deep Blue - Hover-States */
--gold: #C7A25E;    /* Gold - Subtile Marker */

--text: #1C1C1A;    /* Haupttext */
--muted: #5F5F5A;   /* Sekundärtext */
```

#### Dark Mode
```css
--mw: #0E0F12;      /* Dunkler Hintergrund */
--hbw: #14161B;     /* Karten */
--gw: #171A20;      /* Gradient */
--bw: #11131A;      /* Akzente */

--text: #ECEBE6;    /* Heller Text */
--muted: rgba(236,235,230,0.68); /* Gedämpfter Text */
```

### Typografie
- **Sans-Serif**: Inter (400, 500, 600, 800)
- **Serif**: Libre Baskerville (400, 700)
- Quelle: Google Fonts mit Preconnect für Performance

### Abstände & Radien
```css
--r-xl: 20px;   /* Extra große Rundungen */
--r-lg: 16px;   /* Große Rundungen */
--r-md: 12px;   /* Mittlere Rundungen */
--r-sm: 10px;   /* Kleine Rundungen */
```

### Animationen
```css
--t-fast: 140ms;   /* Schnelle Transitions */
--t-med: 200ms;    /* Mittlere Transitions */
--ease: cubic-bezier(.2,.8,.2,1); /* Custom Easing (Apple-ish) */
```

---

## 🚀 Verwendung & Deployment

### Lokale Entwicklung

Die Website ist eine reine statische HTML/CSS/JS-Seite ohne Build-Prozess.

1. **Repository klonen**:
   ```bash
   git clone https://github.com/aquanoah/histoteach-landing.git
   cd histoteach-landing
   ```

2. **Lokal öffnen**:
   - Öffne `index.html` direkt im Browser, oder
   - Verwende einen lokalen Webserver:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (mit npx)
     npx serve .
     
     # VS Code Live Server Extension
     # Rechtsklick auf index.html → "Open with Live Server"
     ```

3. **Im Browser öffnen**:
   ```
   http://localhost:8000
   ```

### Deployment

Die Website ist für **GitHub Pages** konfiguriert und wird automatisch unter `www.histoteach.de` bereitgestellt.

#### GitHub Pages Setup
1. Repository-Settings → Pages
2. Source: Branch `main` (oder gewünschter Branch)
3. Custom Domain: `www.histoteach.de` (in CNAME-Datei konfiguriert)
4. HTTPS erzwingen (empfohlen)

#### Alternative Hosting-Optionen
- **Netlify**: Einfach Repository verbinden, automatisches Deployment
- **Vercel**: GitHub-Integration, automatische Deployments
- **Cloudflare Pages**: Schnelles CDN, kostenlos
- **AWS S3 + CloudFront**: Skalierbare Lösung für größere Projekte

---

## 🛠️ Entwicklung

### Keine Build-Tools erforderlich
Diese Seite verwendet **keine** Build-Tools, Bundler oder Frameworks:
- ✅ Kein npm/yarn
- ✅ Kein Webpack/Vite/Parcel
- ✅ Kein React/Vue/Svelte
- ✅ Reines HTML, CSS und Vanilla JavaScript

### Modifikationen vornehmen

#### Theme anpassen
Alle Design-Variablen befinden sich am Anfang von `styles.css`:
```css
:root, [data-theme="light"] {
  --mw: #FBFCF6;
  --blue: #9FB7E5;
  /* ... weitere Variablen ... */
}
```

#### Inhalte ändern
1. **Themen hinzufügen**: In `index.html` neue `.theme-card` Elemente zur `.themes-scroll` hinzufügen
2. **Navigation erweitern**: Im `<nav class="drawer-nav">` weitere Links einfügen
3. **Texte anpassen**: Direkt in den HTML-Dateien editieren

#### JavaScript-Funktionalität
Alle Interaktionen befinden sich am Ende von `index.html`:
- **Drawer-Menü**: Öffnen/Schließen-Logik
- **Theme Toggle**: Hell-/Dunkelmodus-Wechsel
- **Jahr dynamisch**: Footer-Copyright-Jahr

---

## 📋 Best Practices & Code-Konventionen

### HTML
- Semantisches HTML5 (main, section, article, header, footer, nav)
- ARIA-Attribute für Accessibility
- Deutsche `lang`-Attribute (`lang="de"`)
- Meta-Tags für SEO und Social Media

### CSS
- CSS Custom Properties für alle Designwerte
- Mobile-First-Ansatz (teilweise)
- BEM-ähnliche Namenskonventionen (z.B. `.card-head`, `.card-title`)
- Keine Präprozessoren (reines CSS)

### JavaScript
- Vanilla JS, ES6+
- Event Delegation wo sinnvoll
- `localStorage` für Theme-Persistenz
- Keine globalen Variablen (außer notwendigen DOM-Referenzen)

### Accessibility
- Keyboard-Navigation unterstützt
- ARIA-Labels und Roles
- Fokus-Management (z.B. Drawer)
- Farbkontraste WCAG-konform

---

## 📱 Browser-Unterstützung

Die Website funktioniert in allen modernen Browsern:

- ✅ Chrome/Edge (neueste 2 Versionen)
- ✅ Firefox (neueste 2 Versionen)
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome Mobile

**Hinweis**: Internet Explorer wird nicht unterstützt (nutzt CSS Custom Properties und moderne JS-Features).

---

## 🎯 Roadmap

### Phase 1: Landing Page (Aktuell)
- [x] Design-System entwickeln
- [x] Responsive Layout
- [x] Dark Mode
- [x] Basis-Navigation
- [x] Alle statischen Seiten

### Phase 2: Backend & Authentifizierung (In Arbeit)
- [ ] User-Authentifizierung
- [ ] Backend-API
- [ ] Datenbank-Setup

### Phase 3: Content Management (Geplant)
- [ ] Kursstruktur
- [ ] Inhalte erstellen
- [ ] Medien-Integration

### Phase 4: Beta Launch (Geplant)
- [ ] Öffentliche Beta
- [ ] Feedback-Loop
- [ ] Optimierungen

---

## 📧 Kontakt

**Entwickler**: Noah  
**E-Mail**: [noah@histoteach.de](mailto:noah@histoteach.de)  
**Website**: [www.histoteach.de](https://www.histoteach.de)

### Beta-Anmeldung
Interesse an der Beta? Einfach eine Mail an [noah@histoteach.de](mailto:noah@histoteach.de?subject=HistoTeach%20Beta&body=Hi%2C%20ich%20m%C3%B6chte%20bei%20der%20Beta%20dabei%20sein.) mit dem Betreff "HistoTeach Beta".

### Feedback
Feedback und Anregungen sind jederzeit willkommen! 

---

## 📄 Lizenz & Rechtliches

**Copyright © 2024-present HistoTeach**  
Alle Rechte vorbehalten.

Diese Website und ihr Inhalt sind urheberrechtlich geschützt. Die Nutzung, Vervielfältigung oder Verbreitung ohne ausdrückliche Genehmigung ist nicht gestattet.

**Impressum**: Siehe [impressum.html](impressum.html)

---

## 🔒 Datenschutz

Diese Landing Page:
- ✅ Speichert **keine** personenbezogenen Daten
- ✅ Verwendet **keine** Cookies (außer Theme-Einstellung in localStorage)
- ✅ Nutzt **keine** Tracking-Dienste oder Analytics
- ✅ Verbindet nur zu Google Fonts (Preconnect)

Die Theme-Einstellung wird ausschließlich lokal im Browser gespeichert und verlässt nie das Gerät.

---

## 🙏 Danksagungen

- **Schriftarten**: [Inter](https://rsms.me/inter/) von Rasmus Andersson, [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) via Google Fonts
- **Design-Inspiration**: Pinterest, Apple Human Interface Guidelines, Editorial Design
- **Color Palette**: Custom, inspiriert von archivalischer Ästhetik und warmen Neutraltönen

---

## 📝 Changelog

### v1.0.0 (Januar 2024)
- Initial Release der Landing Page
- Vollständiges Design-System
- Dark Mode Implementation
- Alle Basis-Seiten (Index, Über uns, Kontakt, Impressum)
- Mobile-responsive Layout
- Accessibility-Features

---

**Gebaut mit ❤️ und historischem Interesse**
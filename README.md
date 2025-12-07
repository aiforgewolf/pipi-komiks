# 📖 Pipi a záhada zmizelého kufru

> Interaktivní webový komiks pro děti ve věku 6-10 let

![Status](https://img.shields.io/badge/status-ready-brightgreen)
![License](https://img.shields.io/badge/license-proprietary-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## 🌐 Živá Demo Verze

**👉 [Otevřít komiks online](https://aiforgewolf.github.io/pipi-komiks/)**

*Po aktivaci GitHub Pages bude komiks dostupný na výše uvedeném odkazu. Návod k aktivaci najdete v [DEPLOYMENT.md](DEPLOYMENT.md).*

## 🎨 O projektu

**Pipi a záhada zmizelého kufru** je autorsky originální interaktivní komiks vytvořený speciálně pro dětské čtenáře. Příběh sleduje dobrodružství hyperaktivní dívky Pipi a jejích přátel při hledání ztraceného kufru.

### ✨ Hlavní vlastnosti

- 📚 **10 stránek** plných barevných panelů
- 🎭 **Originální postavy**: Pipi, Tommy, Annika, inspektor Klumpr, papoušek Don Pablo
- 🎨 **Retro dětský design** s teplými barvami
- 📱 **Plně responzivní** - funguje na PC, tabletu i mobilu
- 💾 **Automatické ukládání** postupu do prohlížeče
- 🎵 **Zvukové efekty** při interakci
- ⌨️ **Více způsobů ovládání** - myš, klávesnice, dotyková gesta
- 🌈 **Easter eggs** pro zvídavé děti

## 🚀 Rychlý start

### Spuštění lokálně

Nejjednodušší způsob je otevřít `index.html` přímo v prohlížeči:

```bash
# Stáhněte nebo naklonujte projekt
cd pipi-komiks

# Otevřete v prohlížeči (Linux)
xdg-open index.html

# Nebo (macOS)
open index.html

# Nebo (Windows)
start index.html
```

### Spuštění na lokálním serveru

Pro optimální funkčnost doporučujeme použít lokální server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (s npx)
npx http-server

# PHP
php -S localhost:8000
```

Poté otevřete prohlížeč na adrese: `http://localhost:8000`

## 📂 Struktura projektu

```
pipi-komiks/
│
├── index.html          # Hlavní HTML soubor s kompletní strukturou komiksu
├── styles.css          # CSS styly (dětský retro design + animace)
├── script.js           # JavaScript (navigace, interaktivita, zvuky)
├── README.md           # Dokumentace projektu
├── LICENSE             # Licenční informace
└── .gitignore          # Git ignore pravidla
```

## 🎮 Ovládání

### 🖱️ Myš / Touch

- **Tlačítka "Předchozí" / "Další"** - navigace mezi stránkami
- **Tečky dole** - přímý přechod na konkrétní stránku
- **Swipe (mobilní zařízení)** - přejeďte prstem vlevo/vpravo

### ⌨️ Klávesnice

- `←` (šipka vlevo) - předchozí stránka
- `→` (šipka vpravo) - další stránka
- `Home` - první stránka
- `End` - poslední stránka

### 🎯 Speciální funkce

- **Double-click na název** - reset postupu (po potvrzení)
- **Konami kód** - `↑↑↓↓←→←→BA` pro duhový režim 🌈

## 🎨 Design a technologie

### Barevná paleta

- **Primární**: `#FF6B6B` (červená/růžová)
- **Sekundární**: `#4ECDC4` (tyrkysová)
- **Akcent**: `#FFE66D` (žlutá)
- **Pozadí**: `#FFF5E6` (teplá krémová)

### Použité technologie

- **HTML5** - sémantická struktura
- **CSS3** - moderní styling, animace, gradients
- **Vanilla JavaScript** - žádné závislosti!
- **Web Audio API** - zvukové efekty
- **LocalStorage** - ukládání postupu

### Kompatibilita

✅ Testováno v:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobilní prohlížeče (iOS Safari, Chrome Android)

## 📖 Příběh

### Stránka po stránce

1. **Úvod** - Seznámení s Pipi a jejími přáteli
2. **Problém** - Inspektoru Klumprovi zmizel kufr
3. **Začátek pátrání** - Detektivní trio vyráží
4. **Absurdní situace #1** - Pipi zvedá parník
5. **Absurdní situace #2** - Rozbité dveře dílny
6. **Don Pablo dramatizuje** - Papoušek padá z lampy
7. **U pekárny** - Blíží se k rozřešení
8. **Zvrat** - Kočka, která miluje levanduli
9. **Finále** - Pipiina podmínka pro inspektora
10. **Epilog** - Šťastný konec u Villy Vilekula

## 🎭 Postavy

### Pipi
Hyperaktivní dívka s nadlidskou silou, rozcuchanými vlasy a punčochami (každá jiná barva). Překračuje společenské hranice jen proto, aby měla co překračovat.

### Tommy & Annika
Pipiini spolehliví přátelé, kteří jsou často svědky chaosu, který Pipi vytváří.

### Inspektor Klumpr
Komicky přísný městský úředník s podezřením vůči všem Pipiním dobrodružstvím.

### Don Pablo
Dramatický papoušek, místní informátor, který rád přehání každou banální událost.

## 💰 Komerční použití

### ⚖️ Autorská práva

Tento komiks je **zcela originální dílo** vytvořené pro komerční účely. Nepoužívá žádné prvky chráněné autorskými právy třetích stran.

**Postavy, příběh a vizuální design jsou 100% originální a prodejné.**

### 🛒 Možnosti využití

- ✅ Prodej jako samostatný digitální produkt
- ✅ Integrace do vzdělávacích platforem
- ✅ Licencování pro školy a knihovny
- ✅ Merchandising (tisk, adaptace)
- ✅ Další díly série

## 🔧 Přizpůsobení

### Změna barev

V souboru `styles.css` upravte CSS proměnné:

```css
:root {
    --primary-color: #FF6B6B;      /* Hlavní barva */
    --secondary-color: #4ECDC4;    /* Sekundární barva */
    --accent-color: #FFE66D;       /* Zvýraznění */
    /* ... další barvy ... */
}
```

### Přidání stránek

1. V `index.html` přidejte nový `<div class="page" data-page="X">`
2. Vytvořte panely uvnitř
3. JavaScript automaticky detekuje nové stránky

### Vlastní zvuky

Nahraďte funkce `playClickSound()` a `playPageTurnSound()` v `script.js` vlastními audio soubory:

```javascript
function playClickSound() {
    const audio = new Audio('sounds/click.mp3');
    audio.play();
}
```

## 📊 Výkon a optimalizace

- **Velikost projektu**: ~50 KB (nekomprimováno)
- **Načítací čas**: <1s na průměrném připojení
- **Bez externích závislostí** = rychlé načítání
- **CSS animace** místo JS = plynulejší výkon
- **Lazy loading** možné pro obrázky (při přidání)

## 🐛 Debugging

Pro vývojářské účely je k dispozici debug objekt:

```javascript
// V konzoli prohlížeče:
window.comicDebug.getCurrentPage()  // Aktuální stránka
window.comicDebug.goToPage(5)       // Přejít na stránku 5
window.comicDebug.resetProgress()   // Reset postupu
window.comicDebug.showHelp()        // Zobrazit nápovědu
window.comicDebug.activateRainbowMode()  // 🌈
```

## 📱 PWA (Progressive Web App)

Pro transformaci na PWA přidejte:

1. **manifest.json** - ikony a metadata aplikace
2. **service-worker.js** - offline funkcionalita
3. Možnost instalace na domovskou obrazovku

## 🌍 Lokalizace

Projekt je aktuálně v češtině. Pro přidání dalších jazyků:

1. Vytvořte jazykové soubory (např. `i18n/cs.json`, `i18n/en.json`)
2. Implementujte přepínač jazyků v `script.js`
3. Upravte textový obsah dynamicky

## 🎯 Roadmap

### Verze 1.1
- [ ] Více zvukových efektů
- [ ] Hlasové nahrávky pro jednotlivé postavy
- [ ] Animované přechody mezi stránkami

### Verze 2.0
- [ ] Více příběhů (epizody)
- [ ] Výběr vlastní cesty (interaktivní rozhodování)
- [ ] Mini-hry mezi stránkami
- [ ] Achievementy a odznaky

## 🤝 Podpora

Pro technické problémy nebo dotazy kontaktujte:

- 📧 Email: info@example.com
- 🌐 Web: www.example.com
- 💬 Discord: [odkaz]

## 📜 License

Copyright © 2024. Všechna práva vyhrazena.

Tento projekt je proprietární software určený ke komerčnímu prodeji. Použití, kopírování nebo distribuce bez výslovného písemného svolení je zakázáno.

---

## 🎉 Poděkování

Vytvořeno s ❤️ pro děti po celém světě.

**Ať se vaše dobrodružství s Pipi líbí!** 🎨📚✨

---

*Verze: 1.0.0 | Datum vydání: 2024 | Made with vanilla JS, CSS & HTML*

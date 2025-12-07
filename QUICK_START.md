# 🚀 Rychlý start

## 📖 Jak otevřít komiks

### Metoda 1: Přímé otevření (nejjednodušší)

1. Najděte soubor `index.html` v projektu
2. Dvakrát na něj klikněte nebo ho přetáhněte do prohlížeče
3. Komiks se otevře! 🎉

### Metoda 2: Lokální server (doporučeno)

```bash
# V terminálu přejděte do složky projektu:
cd pipi-komiks

# Spusťte jednoduchý HTTP server (vyberte jeden):

# Python 3
python3 -m http.server 8000

# Nebo Python 2
python -m SimpleHTTPServer 8000

# Nebo Node.js
npx http-server -p 8000

# Nebo PHP
php -S localhost:8000
```

Poté otevřete v prohlížeči: **http://localhost:8000**

## 🎮 Jak ovládat komiks

### Navigace
- **Tlačítka**: Klikněte na "Předchozí" nebo "Další"
- **Klávesnice**: Používejte šipky ← →
- **Mobil**: Přejíždějte prstem vlevo/vpravo (swipe)
- **Tečky**: Klikněte na tečky dole pro přímý přechod

### Speciální funkce
- **Reset postupu**: Dvakrát klikněte na název komiksu
- **Duhový režim**: Zadejte kód ↑↑↓↓←→←→BA 🌈
- **Nápověda**: Přidejte `?help=true` do URL

## ✅ Kontrola funkčnosti

Měli byste vidět:
- ✨ Barevnou hlavičku s názvem "Pipi a záhada zmizelého kufru"
- 📊 Progress bar ukazující váš postup
- 🎨 První stránku komiksu s panely
- 🔘 Navigační tlačítka dole
- 🟢 Tečky indikující počet stránek

## 🐛 Řešení problémů

### Komiks se nezobrazuje správně
- Zkontrolujte, že všechny 3 soubory jsou ve stejné složce:
  - `index.html`
  - `styles.css`
  - `script.js`

### Nefunguje navigace
- Zkuste komiks otevřít přes HTTP server místo přímého otevření
- Zkontrolujte konzoli prohlížeče (F12) pro případné chyby

### Není vidět styling
- Ujistěte se, že `styles.css` je ve stejné složce jako `index.html`
- Vymažte cache prohlížeče (Ctrl+Shift+R)

## 📱 Testování na mobilu

1. Spusťte lokální server na počítači
2. Zjistěte IP adresu počítače: `ipconfig` (Windows) nebo `ifconfig` (Mac/Linux)
3. Na mobilu otevřete: `http://[IP-adresa]:8000`
   - Např: `http://192.168.1.100:8000`

## 🎯 Co dále?

- Přečtěte si kompletní [README.md](README.md) pro více informací
- Prozkoumejte zdrojový kód a přizpůsobte si komiks
- Vytvořte vlastní příběhy a postavy!

---

**Hodně zábavy s Pipi!** 🎨📚✨

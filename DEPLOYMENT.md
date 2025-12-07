# 🚀 GitHub Pages Deployment Návod

## ✅ Co je připraveno

GitHub Actions workflow byl vytvořen a nahrán do repozitáře. Nyní stačí na GitHubu aktivovat GitHub Pages.

## 📋 Kroky k aktivaci

### 1. Přejděte na GitHub repozitář

Otevřete: `https://github.com/aiforgewolf/pipi-komiks`

### 2. Přejděte do nastavení (Settings)

- Klikněte na **Settings** v horní navigaci repozitáře
- V levém menu najděte **Pages** (pod sekcí "Code and automation")

### 3. Nastavte Source pro GitHub Pages

V sekci **Build and deployment**:

1. **Source**: Vyberte **"GitHub Actions"** (místo "Deploy from a branch")
2. GitHub automaticky detekuje workflow soubor `.github/workflows/deploy.yml`

### 4. Počkejte na první deployment

- GitHub Actions se automaticky spustí
- Deployment trvá obvykle 1-2 minuty
- Můžete sledovat progress na záložce **Actions** v repozitáři

### 5. Získejte URL vaší stránky

Po dokončení deploymentu bude vaše stránka dostupná na:

```
https://aiforgewolf.github.io/pipi-komiks/
```

## 🔍 Kontrola deploymentu

### Sledování GitHub Actions

1. Přejděte na záložku **Actions** v repozitáři
2. Uvidíte workflow s názvem **"Deploy to GitHub Pages"**
3. Klikněte na běžící nebo dokončený workflow
4. Můžete sledovat jednotlivé kroky deploymentu

### Možné stavy:

- 🟡 **Žlutá** (In Progress) - Deployment probíhá
- ✅ **Zelená** (Success) - Deployment úspěšný, stránka je živá!
- ❌ **Červená** (Failed) - Něco se pokazilo (kontaktujte podporu)

## 🎯 Po úspěšném deploymentu

Vaše stránka bude dostupná na:
```
https://aiforgewolf.github.io/pipi-komiks/
```

### Co můžete udělat:

1. **Otevřít komiks** - klikněte na URL
2. **Sdílet link** - pošlete URL komukoliv
3. **Testovat na mobilu** - URL funguje i na mobilních zařízeních
4. **Přidat vlastní doménu** (volitelné):
   - V Settings → Pages → Custom domain
   - Přidejte svou doménu (např. `komiks.vasedomena.cz`)

## 🔄 Automatické aktualizace

**Výhoda:** Každý push do branch `claude/interactive-comic-browser-01AtGZGNpeY5VA74bXVYaKqL` automaticky spustí nový deployment!

Postup:
1. Provedete změny v souborech
2. Commit změn: `git commit -am "Popis změn"`
3. Push: `git push`
4. GitHub Actions automaticky nasadí novou verzi za ~2 minuty

## 🛠️ Řešení problémů

### GitHub Pages nenabízí "GitHub Actions" jako source

**Řešení:**
- Ujistěte se, že repozitář je veřejný (Public), nebo máte GitHub Pro
- Private repozitáře potřebují GitHub Pro pro GitHub Pages

### Workflow se nespouští

**Řešení:**
1. Zkontrolujte, že soubor `.github/workflows/deploy.yml` existuje
2. Přejděte na Actions tab
3. Pokud vidíte zprávu "Workflows aren't being run", klikněte "I understand, enable them"

### Deployment selhal (červená)

**Řešení:**
1. Klikněte na failed workflow
2. Přečtěte si error log
3. Nejčastější problémy:
   - Špatná permissions → zkontrolujte Settings → Actions → General → Workflow permissions
   - GitHub Pages není aktivován → aktivujte v Settings → Pages

### Stránka je prázdná nebo nefunguje

**Řešení:**
1. Počkejte 2-5 minut po deploymentu (cache)
2. Zkuste hard refresh: Ctrl+Shift+R (Windows/Linux) nebo Cmd+Shift+R (Mac)
3. Zkontrolujte, že `.nojekyll` soubor existuje v root složce

## 📱 Testování

Po deploymentu otestujte:

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android tablet)
- ✅ Mobil (iPhone, Android phone)
- ✅ Různé velikosti obrazovky
- ✅ Touch gesta (swipe)
- ✅ Klávesnice (šipky)

## 🔒 Permissions (pokud je problém)

Pokud deployment selže kvůli permissions:

1. Přejděte na **Settings** → **Actions** → **General**
2. Scrollujte dolů na **Workflow permissions**
3. Vyberte **"Read and write permissions"**
4. Zaškrtněte **"Allow GitHub Actions to create and approve pull requests"**
5. Klikněte **Save**
6. Re-run failed workflow

## 🎉 Hotovo!

Po dokončení těchto kroků bude váš komiks živý a dostupný na internetu!

**URL:** `https://aiforgewolf.github.io/pipi-komiks/`

---

## 📞 Podpora

Máte problém s deploymentem?

1. Zkontrolujte Actions tab pro error logy
2. Přečtěte si sekci "Řešení problémů" výše
3. Kontaktujte GitHub Support (pokud je to problém s GitHub)

---

**Hodně štěstí s deploymentem!** 🚀📚✨

*Poslední aktualizace: 2024*

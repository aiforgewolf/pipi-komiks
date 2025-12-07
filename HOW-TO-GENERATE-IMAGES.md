# 🎨 Jak vygenerovat obrázky pro Epizodu 2

## Krok za krokem návod pro generování AI obrázků pomocí OpenArt AI

---

## 📋 Co budete potřebovat

1. **Účet na OpenArt.ai** (nebo jiné AI platformě)
   - Registrace: https://openart.ai/
   - Doporučeno: Placený plán pro lepší kvalitu a více generování

2. **Soubor s prompty**: `AI-IMAGE-PROMPTS.md` (již připraven)

3. **Čas**: Přibližně 2-3 hodiny pro vygenerování všech 43 obrázků

---

## 🚀 Postup generování

### Krok 1: Přihlášení

1. Přejděte na https://openart.ai/
2. Přihlaste se ke svému účtu
3. Klikněte na "Create" nebo "Generate"

### Krok 2: Nastavení generátoru

Doporučené nastavení:

```
Model: Stable Diffusion XL (nebo SDXL Turbo pro rychlost)
Size: 1024x1024 (square) nebo 1024x768 (landscape)
Steps: 30-50
CFG Scale: 7-9
Sampler: DPM++ 2M Karras nebo Euler a
```

### Krok 3: Vytvoření Character Sheets (doporučeno)

Pro konzistenci postav nejprve vygenerujte "master" verze:

#### Pipi
```
Red-haired girl character with orange braided pigtails standing sideways,
full body, wearing colorful mismatched stockings (one green, one orange),
cheerful expression with freckles, vintage children's book character design,
simple background, character sheet style, front view and side view,
professional children's book illustration
```

#### Tommy
```
Blonde boy character, short hair, friendly smile, casual vintage clothing,
full body, simple background, character sheet style, children's book character,
professional illustration
```

#### Annika
```
Blonde girl character with braided hair, kind expression, vintage dress,
full body, simple background, character sheet style, children's book character,
professional illustration
```

**💡 Tip:** Uložte si seed čísla těchto generací pro konzistenci!

### Krok 4: Generování jednotlivých obrázků

1. Otevřete `AI-IMAGE-PROMPTS.md`
2. Zkopírujte prompt pro první obrázek (page01-panel01)
3. Vložte do OpenArt AI
4. Přidejte negativní prompty (viz níže)
5. Klikněte "Generate"
6. Vyčkejte na výsledek
7. Vyberte nejlepší variantu
8. Stáhněte obrázek

### Krok 5: Pojmenování a uložení

**DŮLEŽITÉ:** Přesné pojmenování je kritické!

```
Formát: pageXX-panelYY.jpg

Příklady:
- page01-panel01.jpg
- page01-panel02.jpg
- page02-panel01.jpg
atd.
```

Uložte do složky:
```
pipi-komiks/images/episode-02/
```

---

## 🎯 Negative Prompts (použijte pro VŠECHNY obrázky)

Zkopírujte a přidejte k KAŽDÉMU promptu:

```
ugly, distorted, blurry, low quality, bad anatomy, poorly drawn hands,
deformed, disfigured, mutation, extra limbs, missing limbs, floating limbs,
disconnected limbs, malformed hands, long neck, mutated hands and fingers,
bad proportions, gross proportions, cropped, poorly drawn face, mutation,
extra fingers, fused fingers, too many fingers, long body, missing arms,
missing legs, extra arms, extra legs, poorly drawn eyes, cross-eye,
body out of frame, bad art, beginner, amateur, blurry background,
out of focus, modern style, photographic, realistic photo, horror, scary,
dark atmosphere, violence, adult content, text, watermark, signature
```

---

## ⚡ Tipy pro rychlejší workflow

### Batch generování

1. **Seskupte podobné scény**
   - Všechny interiéry najednou
   - Všechny exteriéry najednou
   - Všechny close-upy postav najednou

2. **Použijte stejný seed**
   - Pro obrázky stejné lokace použijte stejný seed
   - Pomůže to s konzistencí osvětlení a stylu

3. **Variace místo nového generování**
   - Pokud je obrázek téměř perfektní, použijte "Variations"
   - Rychlejší než generovat znovu od nuly

### Automatizace (pokročilé)

Pokud máte technické znalosti:

```python
# Příklad Python scriptu pro API
import openai

prompts = [
    "prompt 1",
    "prompt 2",
    # ... všechny prompty
]

for i, prompt in enumerate(prompts):
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="1024x1024"
    )
    # Uložit obrázek...
```

---

## 🎨 Alternativní AI platformy

Pokud nemáte přístup k OpenArt AI, můžete použít:

1. **Midjourney** (Discord bot)
   - Velmi kvalitní výsledky
   - Placené
   - https://midjourney.com/

2. **DALL-E 3** (přes ChatGPT Plus)
   - Skvělé pro konzistenci
   - Placené (ChatGPT Plus)
   - https://chat.openai.com/

3. **Leonardo.ai**
   - Zdarma s limity
   - Dobrá kvalita
   - https://leonardo.ai/

4. **Stable Diffusion (lokálně)**
   - Zdarma
   - Vyžaduje výkonnější hardware
   - https://stability.ai/

---

## ✅ Kontrolní seznam

Po vygenerování VŠECH obrázků zkontrolujte:

- [ ] Všech 43 obrázků je vygenerováno
- [ ] Obrázky jsou správně pojmenovány (pageXX-panelYY.jpg)
- [ ] Obrázky jsou v `/images/episode-02/`
- [ ] Všechny obrázky mají podobný styl
- [ ] Postavy vypadají konzistentně
- [ ] Rozlišení je minimálně 1024px
- [ ] Formát je JPG nebo PNG
- [ ] Obrázky nejsou watermarkované

---

## 🔧 Řešení problémů

### Problém: Postavy vypadají pokaždé jinak

**Řešení:**
1. Vygenerujte character sheet pro každou postavu
2. Použijte stejný seed pro všechny obrázky stejné postavy
3. Nebo použijte "Image to Image" s vaší character sheet jako referencí

### Problém: Špatná kvalita

**Řešení:**
1. Zvyšte Steps na 50
2. Použijte kvalitnější model (SDXL místo SD 1.5)
3. Přidejte "high quality, masterpiece, detailed" na začátek promptu

### Problém: Obrázek neodpovídá popisu

**Řešení:**
1. Přeformulujte prompt - buďte specifičtější
2. Zvyšte CFG Scale na 9-10
3. Zkuste jiný sampler

### Problém: Text v obrázku

**Řešení:**
1. Přidejte "no text, no letters, no words" do negative promptů
2. Pokud se text stále objevuje, vygenerujte nový obrázek

---

## 📊 Odhad času a nákladů

### Časový plán:

- Character sheets: 30 minut (3 postavy × 10 min)
- Generování 43 obrázků: 2-3 hodiny (4-5 min na obrázek)
- Výběr nejlepších variant: 30 minut
- Úpravy a regenerování: 1 hodina
- **Celkem: 4-5 hodin**

### Náklady (orientačně):

- **OpenArt.ai**: $10-20/měsíc (unlimited generace)
- **Midjourney**: $10/měsíc (Basic), $30/měsíc (Standard)
- **ChatGPT Plus (DALL-E)**: $20/měsíc
- **Leonardo.ai**: Zdarma (s limity), $10/měsíc (Apprentice)
- **Stable Diffusion (lokálně)**: Zdarma (vyžaduje GPU)

---

## 🎓 Pokročilé techniky

### In painting

Pro jemné úpravy:
1. Nahrajte vygenerovaný obrázek
2. Použijte brush tool pro označení oblasti k úpravě
3. Zadejte nový prompt pouze pro tu oblast

### Control Net

Pro větší kontrolu nad kompozicí:
1. Nahrajte referenční obrázek (náčrtek, poloha postav)
2. AI vytvoří obrázek podle této struktury

### Upscaling

Pro větší rozlišení:
1. Vygenerujte v 1024x1024
2. Použijte AI upscaler (např. Real-ESRGAN)
3. Zvětšete na 2048x2048 nebo více

---

## 📞 Podpora

Máte problémy?

1. Přečtěte si oficiální dokumentaci OpenArt.ai
2. Navštivte Discord komunitu
3. Sledujte tutoriály na YouTube

---

## 🎉 Po dokončení

Po vygenerování všech obrázků:

1. Otevřete `episode-02.html` v prohlížeči
2. Zkontrolujte, že se všechny obrázky zobrazují
3. Proveďte git commit:

```bash
git add images/episode-02/
git commit -m "Přidání AI vygenerovaných obrázků pro epizodu 2"
git push
```

4. Nasaďte na GitHub Pages
5. Užijte si výsledek! 🎨✨

---

**Hodně štěstí s generováním!** 🚀

_Pokud máte nějaké otázky nebo potřebujete pomoct, neváhejte se ozvat._

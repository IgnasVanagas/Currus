# Currus Baldai

**Atidarius svetainę matosi du pasirinkimai:**

1. Baldų gamyba
2. Baldų detalių gamyba

**Pasirinkus „Baldų detalių gamyba“** – atsidaro puslapis, panašus į [Baldinių ruošinių gamyba Archives - Dariaus verslo grupė](https://dariausverslogrupe.lt/tipas/baldiniu-ruosiniu-gamyba/), tik su modernesniu dizainu ir kontaktų forma puslapio apačioje.

**Pasirinkus „Baldų gamyba“** – atsidaro puslapis, pilnas pavyzdžių, panašus į [PRODUKTAI - Currus kietieji baldai](https://currus.lt/produktai/).

**Bendri reikalavimai:**

- Visada turi būti „sticky header“
- Laikinai turinį ir kontaktus imti iš [https://currus.lt/](https://currus.lt/).
- Dizainas turi būti modernesnis.
- Puslapio struktūra (URL adresai, pavadinimai) turi išlikti tokia pati kaip [https://currus.lt/](https://currus.lt/).
- Kalba tik lietuvių

**Funkcionalumas:**

- Turi būti galimybė patiems keisti projektus (pvz. nuotraukas), naujienas, kontaktus ir nemažą dalį turinio.
- Prie susisiekimo formos turi būti galimybė atsisiųsti „Excel“ failą, panašiai kaip [Pildyti užsakymo formą - Dariaus verslo grupė](https://dariausverslogrupe.lt/pildyti-uzsakymo-forma/).


**Spalvų paletė:**

- #000000
- #FFFFFF
- #541010 
_(gali būti koreguojama, nėra galutinė)_


## Technologijos

- [Vite](https://vitejs.dev/) + React 18 
- [React Router DOM](https://reactrouter.com/) 
- [Framer Motion](https://www.framer.com/motion/)
- [React Scroll](https://www.npmjs.com/package/react-scroll) 
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) 
- [React Hot Toast](https://react-hot-toast.com/)

## Struktūra ir turinys

- **Landing puslapis** – du pasirinkimo „kortelių“ blokai, Excel šablono atsisiuntimo mygtukas ir kontaktinė santrauka.
- **Baldų gamybos puslapis** – hero su statistika, „Kodėl mes“ argumentai, paslaugos, projektai, procesas, garantijos ir kontaktas su atsakingu asmeniu.
- **Baldų detalių gamybos puslapis** – gamybos pajėgumų apžvalga, projektai, procesas ir kokybės garantijos.
- **Sticky header** – visose puslapio būsenose išlieka viršuje, turi pirminius maršrutus ir, kai aktualu, rodo in-page nuorodas.
- **Excel atsisiuntimas** – failas laikomas `public/downloads/currus-specifikacija.xls` ir prieinamas iš visų puslapių.

Visas tekstinis ir vizualinis turinys centralizuotas faile `src/data/content.ts`, kad būtų lengva redaguoti antraštes, aprašymus, metrikas, kontaktus ar nuotraukų URL.

## Diegimas ir paleidimas

```powershell
npm install
npm run dev
```

Pasiekiama adresu [http://localhost:5173](http://localhost:5173).

Papildomi scenarijai:

- `npm run build` – sukompiliuoja gamybinę versiją (`dist/`)
- `npm run preview` – lokaliai peržiūri gamybinę versiją
- `npm run lint` – paleidžia ESLint TSX/TS failams

## Turinio redagavimas

- `src/data/content.ts` – pagrindinis turinio „single source of truth“: landing kortelės, statistika, paslaugų aprašai, procesų žingsniai, kontaktai ir t. t.
- `public/downloads/currus-specifikacija.xls` – Microsoft Excel suderinamas `.xls` šablonas, kurį galima pakeisti savo realiu dokumentu.
- Nuotraukos naudoja [Unsplash](https://unsplash.com/) URL – pakanka juos pakeisti norimais resursais arba įkelti vietines bylas į `public/` katalogą.



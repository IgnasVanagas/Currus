# Currus Baldai – moderni React + Vite svetainė

„Currus Baldai“ – tai pilnai tipizuota React + TypeScript svetainė, kuri atidarius pateikia dviejų krypčių pasirinkimą („Baldų gamyba“ & „Baldų detalių gamyba“) ir kiekvieną kryptį išskleidžia į atskirą, turtingą puslapį. Dizainas remiasi [currus.lt](https://currus.lt/) struktūra bei spalvine schema (#000000, #FFFFFF, #541010), o turinys pateiktas lietuviškai su „stock“ baldų fotografijomis.

## Technologijos

- [Vite](https://vitejs.dev/) + React 18 + TypeScript – greitas vystymas ir tipizacija
- [React Router DOM](https://reactrouter.com/) – maršrutai ir puslapiai
- [Framer Motion](https://www.framer.com/motion/) – sklandžios animacijos ir „scroll“ progresas
- [React Scroll](https://www.npmjs.com/package/react-scroll) – švelnus judėjimas tarp sekcijų tos pačios krypties puslapyje
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – (pasirengusi integracijai) validuojama kontaktų forma
- [React Hot Toast](https://react-hot-toast.com/) – vizualus grįžtamasis ryšys (aktyvuojamas integravus formą)

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

## Potencialios plėtros kryptys

- Integruoti realų el. pašto siuntimą per pasirinktą paslaugą (`Formspree`, `Resend`, `AWS SES` ir pan.).
- Įdiegti daugiakalbystę (EN/RU) kartu su CMS ar „headless“ valdymu.
- Pridėti autentiškus klientų atsiliepimus, realių projektų galerijas ir 3D vizualizacijų peržiūras.
- Integruoti kontaktų formos backend'ą ir siuntimo logiką.

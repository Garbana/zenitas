# Zenitas ✦

Vienos bylos PWA programa mėgėjams astronomams: stebėjimo sąlygų kalendorius, astro orai, žvaigždėlapis, gilaus dangaus objektų katalogas, vakaro rekomendacijos ir stebėjimų žurnalas. Veikia be jokio serverio — visi skaičiavimai atliekami naršyklėje, duomenys saugomi įrenginyje.

## Galimybės

- **Šįvakar** — stebėjimo indeksas 0–10, astronominių sutemų ir Mėnulio laikai, laisvi tamsos langai, valandiniai astro orai (debesuotumas pagal aukščius, rasos taškas, drėgmė, aerozolių skaidrumas, vėjas), rytojaus nakties įspėjimas, planetų matomumas, jūsų stebėjimo sąrašas ir išmanios rekomendacijos su „★ metų piko" žymomis.
- **Kalendorius** — mėnuo į priekį: idealios (Mėnulis ≤20 % arba ilgi langai be jo), dalinai geros ir netinkamos naktys su mini laiko juostomis; artimiausioms ~7 naktims pridedama Open-Meteo orų prognozė.
- **Dangus** — realaus laiko žvaigždėlapis (stereografinė projekcija nuo zenito): žvaigždės iki ~6,5ᵐ (nustatymuose — iki ~8,5ᵐ), 88 žvaigždynai su lietuviškais pavadinimais, Mesjė/NGC objektai, planetos, Mėnulis, ekliptika. Sukimas pirštu, mastelis žnybsniu, laiko slankiklis ±12 val.
- **Katalogas** — 110 Mesjė + populiariausi NGC/Caldwell objektai; filtrai pagal tipą, žvaigždyną, sezoną, ryškį, sudėtingumą; paieška.
- **Žurnalas** — sesija su GPS: automatiškai fiksuojamas laikas, vieta, oro sąlygos ir Bortle klasė; objekto įrašai su užpildyta meta informacija, pastabomis, įvertinimu ir nuotrauka; sesijų istorija ir asmeninė stebėtų objektų statistika (kartai, paskutinė data, vertinimų vidurkis).
- **Naktinis režimas** — 🔴 mygtukas perjungia visą sąsają (įskaitant žvaigždėlapį) į raudoną, kad akys nepratrastų adaptacijos tamsai.

## Duomenų šaltiniai (nemokami, be raktų)

| Kas | Šaltinis |
|---|---|
| Orai (debesys pagal aukščius, rasos t., RH, vėjas, matomumas) | [Open-Meteo](https://open-meteo.com) `api.open-meteo.com` |
| Atmosferos skaidrumas (aerozolių optinis gylis) | Open-Meteo Air Quality `air-quality-api.open-meteo.com` |
| Žvaigždės ir žvaigždynai | [d3-celestial](https://github.com/ofrohn/d3-celestial) duomenys (BSD) iš `raw.githubusercontent.com` |
| Saulė, Mėnulis, planetos | skaičiuojama programoje (SunCalc tipo formulės + P. Schlyterio Keplerio elementai) |

## Diegimas į GitHub Pages (nemokamas „debesis")

1. Sukurkite naują viešą repozitoriją GitHub'e, pvz. `zenitas`.
2. Įkelkite visus šio aplanko failus (`index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`) į šaką `main`.
3. Repozitorijos **Settings → Pages**: Source = „Deploy from a branch", Branch = `main`, aplankas `/ (root)`. Išsaugokite.
4. Po minutės programa veiks adresu `https://JŪSŲ-VARDAS.github.io/zenitas/`.

### Įsirašymas į telefoną

Atsidarykite adresą telefono naršyklėje:
- **Android (Chrome):** meniu ⋮ → „Pridėti prie pagrindinio ekrano" / „Įdiegti programą".
- **iPhone (Safari):** Bendrinti □↑ → „Pridėti prie pagrindinio ekrano".

Programa atsidarys per visą ekraną kaip įprasta aplikacija ir veiks net be ryšio (be šviežių orų).

## Svarbu žinoti

- **Duomenys saugomi tik tame įrenginyje** (naršyklės `localStorage`). Išvalius naršyklės duomenis — dingsta ir žurnalas. Nuotraukos mažinamos iki ~1000 px, bet `localStorage` talpa ~5 MB, tad daug nuotraukų netilps.
- **Pranešimai** apie rytojaus naktį rodomi **atidarius programą** (jei įjungta nustatymuose). Tikriems „push" pranešimams uždarytame telefone reikėtų serverio — be jo to padaryti neįmanoma.
- **GPS** veikia tik per HTTPS (GitHub Pages tai užtikrina) ir paprašius leidimo.
- Žvaigždės rodomos iki ~6,5ᵐ (arba ~8,5ᵐ įjungus nustatymą). Ryškis 10 reikštų >300 000 žvaigždžių — telefono naršyklei per sunku ir vizualiai nenaudinga tokiame ekrane.
- Vasarą Lietuvoje (~gegužės pab.–liepos vid.) astronominė naktis neprasideda — tuomet programa rodo navigacinių sutemų langą ir tai pažymi.

## Licencija

Kodas — MIT. Žvaigždžių duomenys — d3-celestial (BSD-3), orai — Open-Meteo (CC BY 4.0).

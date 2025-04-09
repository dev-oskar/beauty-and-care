# Beauty and Care - Salon Kosmetyczny

![Beauty and Care](https://github.com/username/beauty-and-care/raw/master/src/assets/images/logo-min.png)

Elegancka i nowoczesna strona dla salonu kosmetycznego, stworzona na bazie szablonu fotograficznego z wykorzystaniem frameworku Astro i systemu zarządzania treścią Tina CMS.

## Funkcje

- ✨ Nowoczesny, elegancki design z naciskiem na estetykę premium
- 🔍 Pełna optymalizacja SEO z Schema.org i metadanymi Open Graph
- 📱 W pełni responsywna dla urządzeń mobilnych, tabletów i komputerów
- 📝 Zintegrowany blog z kategoryzacją postów
- 💼 Prezentacja usług/zabiegów kosmetycznych
- 💰 Sekcja cennika z przejrzystym formatowaniem
- 📞 Strona kontaktowa z integracją mapy Google
- 🔄 Integracja z Tina CMS do łatwego zarządzania treścią
- 🌐 Wielojęzyczność (obsługa języka polskiego)

## Technologie

- [Astro](https://astro.build/) - Framework do tworzenia stron internetowych
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS do stylizacji
- [Tina CMS](https://tina.io/) - Headless CMS do zarządzania treścią
- [Schema.org](https://schema.org/) - Strukturyzowane dane dla SEO
- [Google Maps API](https://developers.google.com/maps) - Integracja mapy

## Szybki start

1. Sklonuj repozytorium
```bash
git clone https://github.com/username/beauty-and-care.git
cd beauty-and-care
```

2. Zainstaluj zależności
```bash
npm install
```

3. Uruchom serwer deweloperski
```bash
npm run dev
```

4. Strona będzie dostępna pod adresem [http://localhost:4321](http://localhost:4321)

## Struktura projektu

```
beauty-and-care/
├── content/            # Treści zarządzane przez Tina CMS
│   └── posts/          # Posty na blogu
├── public/             # Statyczne pliki
│   ├── admin/          # Panel administracyjny Tina CMS
│   ├── favicons/       # Ikony strony
│   └── images/         # Obrazy statyczne
├── src/
│   ├── assets/         # Zasoby (obrazy, itp.)
│   ├── components/     # Komponenty Astro
│   ├── config/         # Konfiguracja (nawigacja, dane strony)
│   ├── data/           # Dane strukturalne (portfolio, usługi)
│   ├── layouts/        # Szablony stron
│   ├── pages/          # Strony witryny
│   │   ├── blog/       # Sekcja bloga
│   │   ├── uslugi/     # Sekcja usług
│   │   └── [...]
│   └── styles/         # Style globalny i komponenty
└── tina/               # Konfiguracja Tina CMS
```

## Zarządzanie treścią

### Panel administracyjny Tina CMS

1. Uruchom panel administracyjny Tina CMS
```bash
npm run tina
```

2. Panel będzie dostępny pod adresem [http://localhost:3000/admin](http://localhost:3000/admin)

### Główne sekcje treści

- **Blog** - Artykuły na blogu z kategoryzacją i tagami
- **Usługi** - Prezentacja zabiegów i usług kosmetycznych
- **Cennik** - Kategorie usług z cenami
- **Kontakt** - Dane kontaktowe, mapa, formularz kontaktowy

## SEO

Strona posiada rozbudowaną warstwę SEO z:

- Strukturyzowanymi danymi Schema.org (LocalBusiness, Article, BreadcrumbList)
- Metadanymi Open Graph dla mediów społecznościowych
- Możliwością dostosowania tytułów i opisów SEO dla każdej podstrony
- Pełnym wsparciem dla słów kluczowych i meta tagów
- Generowaniem sitemap.xml i poprawnym robots.txt

## Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/username/beauty-and-care)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/username/beauty-and-care)

## Rozwój i modyfikacje

### Dostosowanie stylów

Style można dostosować przez edycję plików:
- `src/styles/global.css` - Style globalne
- `src/styles/tailwind-theme.css` - Konfiguracja motywu Tailwind
- `src/config/siteData.json.ts` - Dane witryny (tytuł, opis, kolory)

### Dostosowanie zawartości

- Edycja nawigacji: `src/config/navData.json.ts`
- Dodawanie usług: Panel Tina CMS lub `/src/data/portfolios/`
- Modyfikacja głównej strony: `src/pages/index.astro`

## Licencja

Projekt jest oparty na szablonie Horizon od [Cosmic Themes](https://cosmicthemes.com/) z licencją GPL-3.0. Dostosowanie do salonu kosmetycznego i integracja z Tina CMS została wykonana przez [Imię i Nazwisko].

## Kontakt

W przypadku pytań lub wsparcia, prosimy o kontakt:
- Email: kontakt@beautyandcare.pl
- Strona: https://beautyandcare.pl
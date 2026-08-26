# Zyndra — Astro

Nowa wersja zyndra.pl w Astro. Zmiana profilu z tanich wdrożeń sklepowych na
techniczny lejek sprzedażowy (lead generation) dla usług automatyzacji e-commerce.

## Uruchomienie

```bash
npm install
npm run dev       # serwer deweloperski — http://localhost:4321
npm run build     # build produkcyjny (SSG) do ./dist
npm run preview   # podgląd builda produkcyjnego
```

## Konfiguracja analityki

Skopiuj `.env.example` do `.env` i uzupełnij identyfikatory:

```
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXX
```

Każdy skrypt w `src/components/seo/SEOHead.astro` renderuje się wyłącznie
wtedy, gdy odpowiadająca mu zmienna jest ustawiona — nic nie trzeba ręcznie
odkomentowywać w kodzie. Sprawdzone: build z pustym `.env` nie generuje
żadnego skryptu; build z uzupełnionym `.env` generuje poprawny tag z ID.

## Status projektu

Cała witryna zbudowana i przechodzi `npm run build` bez błędów (8 stron).

**Strony:**
- `/` — strona główna: Hero + 3 kafle problemowe
- `/uslugi/integracje-baselinker` — landing page: BaseLinker + ERP + synchronizacja stanów
- `/uslugi/import-danych` — landing page: import i czyszczenie CSV/XML z hurtowni
- `/uslugi/opisy-produktowe-ai` — landing page: masowe opisy produktowe AI/SEO
- `/kontakt` — ogólny formularz kwalifikujący + dane kontaktowe
- `/faq` — baza wiedzy, wyselekcjonowana i przeredagowana pod nowe pozycjonowanie
  (świadomie NIE jest to 1:1 port starego FAQ — usunięte pytania o tanie sklepy
  i optymalizację ofert Allegro, dodane pytania o integracje/dane/AI/brak cennika)
- `/polityka-prywatnosci`, `/polityka-cookies` — strony prawne (noindex), zaktualizowane
  o pola nowego formularza kwalifikującego

**Kluczowy komponent:** `src/components/forms/QualifyingForm.astro` — pola: wielkość
bazy produktowej (chipy radio), używane systemy (chipy checkbox: Shoper, WooCommerce,
BaseLinker, Subiekt GT, Inne), obszar zainteresowania, dane kontaktowe, RODO. Pełna
walidacja JS przed wysyłką. Osadzony na końcu każdego landing page'a (z domyślnie
zaznaczonym obszarem) oraz samodzielnie na `/kontakt` (bez domyślnego zaznaczenia).

**Backend formularza:** `public/mail.php` — zaktualizowany o nowe pola. Ponieważ output
Astro jest w pełni statyczny (SSG), a `public/` kopiuje się bez zmian do `dist/`,
**mail.php wymaga hostingu z obsługą PHP** (tak jak oryginalna strona) — czysty
serverless/CDN (Netlify, Vercel bez adaptera) go nie uruchomi. Jeśli docelowy hosting
nie obsługuje PHP, formularz trzeba przepiąć pod inny endpoint (Formspree, własne API itp.).

**Świadomie NIE zrobione / do doprecyzowania:**
- `public/og-image.jpg` (1200×630) — ścieżka jest już podpięta w SEOHead, brakuje pliku
- Treść landing page'y, FAQ i proof-stats to pierwszy przemyślany szkic do wspólnej
  redakcji — liczby w sekcjach "dowód" są celowo ostrożne (zobowiązania serwisowe typu
  "0 ręcznych aktualizacji po wdrożeniu", nie zmyślone %, żeby nie obiecywać czegoś,
  czego nie da się obronić)
- Brak strony `/cennik` i `/strony` — usunięte zgodnie z pivotem (koniec z tanimi pakietami)

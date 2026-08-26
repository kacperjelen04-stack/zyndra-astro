// Centralna konfiguracja nawigacji. Każda pozycja ma flagę `enabled` —
// ustaw na `false`, żeby ukryć link (i całe jego dzieci) z Header/Footer,
// nie usuwając samej strony spod jej URL-a.

export interface NavLink {
  href: string;
  label: string;
  enabled: boolean;
  children?: NavLink[];
}

// ---------------------------------------------------------
// PODKATEGORIE OFERTY (Trzeci poziom nawigacji)
// ---------------------------------------------------------

export const integracjeChildren: NavLink[] = [
  { href: "/oferta/integracje-e-commerce/baselinker", label: "BaseLinker", enabled: true },
  { href: "/oferta/integracje-e-commerce/shoper", label: "Shoper", enabled: true },
  { href: "/oferta/integracje-e-commerce/baselinker-shoper", label: "BaseLinker + Shoper", enabled: true },
  { href: "/oferta/integracje-e-commerce/baselinker-allegro", label: "BaseLinker + Allegro", enabled: true },
  { href: "/oferta/integracje-e-commerce/baselinker-erli", label: "BaseLinker + Erli", enabled: true },
  { href: "/oferta/integracje-e-commerce/baselinker-empik", label: "BaseLinker + Empik", enabled: true },
];

export const automatyzacjeChildren: NavLink[] = [
  { href: "/oferta/automatyzacje-e-commerce/automatyzacja-zamowien", label: "Automatyzacja zamówień", enabled: false },
  { href: "/oferta/automatyzacje-e-commerce/automatyzacja-produktow", label: "Automatyzacja produktów", enabled: true },
  { href: "/oferta/automatyzacje-e-commerce/automatyzacja-cen", label: "Automatyzacja cen", enabled: true },
  { href: "/oferta/automatyzacje-e-commerce/automatyzacja-stanow", label: "Automatyzacja stanów", enabled: true },
  { href: "/oferta/automatyzacje-e-commerce/automatyzacja-procesow", label: "Automatyzacja procesów", enabled: true },
];

export const daneProduktoweChildren: NavLink[] = [
  { href: "/oferta/dane-produktowe/csv", label: "CSV", enabled: true },
  { href: "/oferta/dane-produktowe/xml", label: "XML", enabled: true },
  { href: "/oferta/dane-produktowe/import-eksport", label: "Import / eksport", enabled: true },
  { href: "/oferta/dane-produktowe/mapowanie-produktow", label: "Mapowanie produktów", enabled: true },
  { href: "/oferta/dane-produktowe/automatyzacja-danych", label: "Automatyzacja danych", enabled: true },
];

export const sklepyChildren: NavLink[] = [
  { href: "/oferta/sklepy-internetowe/sklepy-od-podstaw", label: "Sklepy od podstaw", enabled: true },
  { href: "/oferta/sklepy-internetowe/sklepy-shoper", label: "Sklepy Shoper", enabled: true },
  { href: "/oferta/sklepy-internetowe/modernizacja-sklepu", label: "Modernizacja sklepu", enabled: true },
  { href: "/oferta/sklepy-internetowe/integracja-sklepu-z-systemami", label: "Integracja sklepu z systemami", enabled: true },
];

export const wsparcieChildren: NavLink[] = [
  { href: "/oferta/wsparcie-techniczne/diagnostyka-problemow", label: "Diagnostyka problemów", enabled: true },
  { href: "/oferta/wsparcie-techniczne/naprawa-integracji", label: "Naprawa integracji", enabled: true },
  { href: "/oferta/wsparcie-techniczne/optymalizacja-procesow", label: "Optymalizacja procesów", enabled: true },
  { href: "/oferta/wsparcie-techniczne/stala-opieka", label: "Stała opieka", enabled: true },
];

// ---------------------------------------------------------
// GŁÓWNE KATEGORIE (Drugi poziom rozwijany pod głównym menu)
// ---------------------------------------------------------

export const ofertaChildren: NavLink[] = [
  { href: "/oferta/integracje-e-commerce", label: "Integracje E-commerce", enabled: true, children: integracjeChildren },
  { href: "/oferta/automatyzacje-e-commerce", label: "Automatyzacje E-commerce", enabled: true, children: automatyzacjeChildren },
  { href: "/oferta/dane-produktowe", label: "Dane Produktowe", enabled: true, children: daneProduktoweChildren },
  { href: "/oferta/sklepy-internetowe", label: "Sklepy Internetowe", enabled: true, children: sklepyChildren },
  { href: "/oferta/wsparcie-techniczne", label: "Wsparcie Techniczne", enabled: true, children: wsparcieChildren },
];

export const problemyChildren: NavLink[] = [
  { href: "/problemy/synchronizacja-stanow", label: "Synchronizacja stanów", enabled: true },
  { href: "/problemy/synchronizacja-cen", label: "Synchronizacja cen", enabled: true },
  { href: "/problemy/mapowanie-produktow", label: "Mapowanie produktów", enabled: true },
  { href: "/problemy/problemy-z-zamowieniami", label: "Problemy z zamówieniami", enabled: true },
  { href: "/problemy/problemy-z-wariantami", label: "Problemy z wariantami", enabled: true },
  { href: "/problemy/problemy-z-integracjami", label: "Problemy z integracjami", enabled: true },
  { href: "/problemy/bledne-dane-produktowe", label: "Błędne dane produktowe", enabled: true },
  { href: "/problemy/zbyt-duzo-recznej-pracy", label: "Zbyt dużo ręcznej pracy", enabled: true },
];

// ---------------------------------------------------------
// GŁÓWNE MENU (Header)
// ---------------------------------------------------------

export const mainNav: NavLink[] = [
  { href: "/oferta", label: "Oferta", enabled: true, children: ofertaChildren },
  { href: "/problemy", label: "Problemy", enabled: true, children: problemyChildren },
  { href: "/case-studies", label: "Case Studies", enabled: true },
  { href: "/o-zyndrze", label: "O Zyndrze", enabled: true },
];

// ---------------------------------------------------------
// STOPKA (Footer)
// ---------------------------------------------------------

export const footerExtra: NavLink[] = [
  { href: "/kontakt", label: "Kontakt", enabled: true }
];
// Faktarapport — verifisert / usikker / rettet-status for TdF-kommentatorbasen
// Sist oppdatert: 2026-06-24 (automatisk faktasjekk med 10 agenter)
const FAKTARAPPORT = {
  sistOppdatert: "2026-06-24",

  // Rettede feil — funnet og fikset i data.js
  rettet: [
    {
      id: "per-strand-hagenes-navn",
      kategori: "rytter",
      referanse: "Per Strand Hagenes",
      felt: "navn",
      feil: "Skrevet som 'Olav Lauka Hagenes' gjennom hele basen",
      korrekt: "Per Strand Hagenes",
      kilde: "Visma offisiell kunngjøring + Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/teams-riders/this-is-jonas-vingegaards-support-squad-for-the-tour-de-france-as-visma-lease-a-bike-confirm-line-up/",
      dato: "2026-06-24"
    },
    {
      id: "giro-tour-dobbel-historikk",
      kategori: "statistikk",
      referanse: "Giro-Tour-dobbelen",
      felt: "tekst",
      feil: "Påstod at ingen har vunnet Giro+Tour siden Pantani 1998",
      korrekt: "Pogačar vant Giro+Tour i 2024. Liste: Coppi (1949,1952), Anquetil (1964), Merckx (1970,1972,1974), Pantani (1998), Pogačar (2024)",
      kilde: "ProcyclingStats / Tour de France historiearkiv",
      dato: "2026-06-24"
    },
    {
      id: "del-toro-alder",
      kategori: "rytter",
      referanse: "Isaac Del Toro",
      felt: "alder",
      feil: "Oppgitt som 21 år",
      korrekt: "22 år (født 27. november 2003, fyller 23 i november 2026)",
      kilde: "ProcyclingStats — fødselsdato verifisert",
      url: "https://www.procyclingstats.com/rider/isaac-del-toro",
      dato: "2026-06-24"
    },
    {
      id: "uijtdebroeks-alder",
      kategori: "rytter",
      referanse: "Cian Uijtdebroeks",
      felt: "alder",
      feil: "Oppgitt som 22 år",
      korrekt: "23 år (født 28. februar 2003 — allerede fylt 23 ved TdF-start)",
      kilde: "ProcyclingStats — fødselsdato verifisert",
      dato: "2026-06-24"
    },
    {
      id: "cort-tour-etapper",
      kategori: "rytter",
      referanse: "Magnus Cort",
      felt: "meritter",
      feil: "Oppgitt '7 Tour de France etappeseire' — dette er dramatisk feil",
      korrekt: "Magnus Cort har 2 Tour-etappeseire (etappe 15, 2018 og etappe 10, 2022). Han har 6 VUELTA-etappeseire — trolig kilden til forvirringen. ALDRI si 7 Tour-seire på lufta.",
      kilde: "ProcyclingStats",
      url: "https://www.procyclingstats.com/rider/magnus-cort",
      dato: "2026-06-24"
    },
    {
      id: "philipsen-2023-antall",
      kategori: "rytter",
      referanse: "Jasper Philipsen",
      felt: "meritter",
      feil: "Oppgitt '3 Tour-etapper i 2023'",
      korrekt: "Philipsen vant 4 etapper i 2023 (etappe 3, 4, 7 og 11) + grønn trøye",
      kilde: "ProcyclingStats / Cyclingnews",
      dato: "2026-06-24"
    },
    {
      id: "gaviria-tour-etapper",
      kategori: "rytter",
      referanse: "Fernando Gaviria",
      felt: "meritter",
      feil: "Oppgitt '4 Tour-etappeseire (2017)' — feil på begge tall",
      korrekt: "Gaviria vant 2 Tour-etapper (etappe 1 og 4), og det var i 2018 — ikke 2017",
      kilde: "ProcyclingStats",
      dato: "2026-06-24"
    },
    {
      id: "pogacar-monument-framing",
      kategori: "rytter",
      referanse: "Tadej Pogačar",
      felt: "form",
      feil: "'5 av syklingens 6 Monumenter i 2026' — to feil: det finnes 5 Monumenter (ikke 6), og Pogačar har vunnet 3 av 4 gjennomførte",
      korrekt: "Pogačar vant 3 av de 4 gjennomførte Monumentene i 2026: MSR, RVV og LBL. Tapte Paris-Roubaix til van Aert i to-mann sprint. Il Lombardia (5. Monument) er i oktober.",
      kilde: "Cyclingnews / Olympics.com / Rouleur",
      dato: "2026-06-24"
    },
    {
      id: "abrahamsen-brussels-2026",
      kategori: "rytter",
      referanse: "Jonas Abrahamsen",
      felt: "meritter",
      feil: "'Vant Brussels Cycling Classic juni 2026' — Jordi Meeus vant i 2026",
      korrekt: "Abrahamsen vant Brussels Cycling Classic i 2024. Meeus (Red Bull) vant 2026-utgaven (7. juni, ikke 1. juni).",
      kilde: "ProcyclingStats",
      url: "https://www.procyclingstats.com/race/brussels-cycling-classic/2026",
      dato: "2026-06-24"
    },
    {
      id: "waerenskjold-baloise-2026",
      kategori: "rytter",
      referanse: "Søren Wærenskjold",
      felt: "meritter",
      feil: "'Vant Baloise Belgium Tour 2026 (sammenlagt)' — Jasper Philipsen vant 2026",
      korrekt: "Wærenskjold vant Baloise Belgium Tour i 2024. Philipsen (Alpecin) vant 2026-utgaven på siste etappe.",
      kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/baloise-belgium-tour-jasper-philipsen-secures-the-overall-title-in-a-battle-for-time-bonus-seconds-on-stage-5/",
      dato: "2026-06-24"
    }
  ],

  // Verifisert korrekt — bekreftet av automatisk faktasjekk
  verifisert: [
    // ALDRE
    { id: "alder-seixas", referanse: "Paul Seixas", felt: "alder",
      pastand: "19 år", kilde: "Født 24. september 2006 — er 19 ved TdF-start 28. juni", dato: "2026-06-24" },
    { id: "alder-hagenes", referanse: "Per Strand Hagenes", felt: "alder",
      pastand: "22 år", kilde: "Født 10. juli 2003 — er 22 ved start, fyller 23 under Tour", dato: "2026-06-24" },
    { id: "alder-lipowitz", referanse: "Florian Lipowitz", felt: "alder",
      pastand: "25 år", kilde: "Født 21. september 2000 — fyller 26 i september", dato: "2026-06-24" },
    { id: "alder-pogacar", referanse: "Tadej Pogačar", felt: "alder",
      pastand: "27 år", kilde: "Født 21. september 1998 — fyller 28 i september", dato: "2026-06-24" },
    { id: "alder-vingegaard", referanse: "Jonas Vingegaard", felt: "alder",
      pastand: "29 år", kilde: "Født 10. desember 1996 — fyller 30 i desember", dato: "2026-06-24" },
    { id: "alder-evenepoel", referanse: "Remco Evenepoel", felt: "alder",
      pastand: "26 år", kilde: "Født 25. januar 2000 — allerede fylt 26", dato: "2026-06-24" },
    { id: "alder-gaviria", referanse: "Fernando Gaviria", felt: "alder",
      pastand: "31 år", kilde: "Født 19. august 1994 — fyller 32 i august", dato: "2026-06-24" },
    { id: "alder-mvdp", referanse: "Mathieu van der Poel", felt: "alder",
      pastand: "31 år", kilde: "Født 19. januar 1995 — allerede fylt 31", dato: "2026-06-24" },

    // 2026-RESULTATER
    { id: "seixas-itzulia", referanse: "Paul Seixas", felt: "meritter",
      pastand: "Vant Itzulia Basque Country 2026", kilde: "ProcyclingStats", dato: "2026-06-24" },
    { id: "seixas-fleche", referanse: "Paul Seixas", felt: "meritter",
      pastand: "Vant La Flèche Wallonne 2026", kilde: "ProcyclingStats", dato: "2026-06-24" },
    { id: "seixas-lbl-2", referanse: "Paul Seixas", felt: "meritter",
      pastand: "2. plass Liège-Bastogne-Liège 2026", kilde: "ProcyclingStats", dato: "2026-06-24" },
    { id: "seixas-tdf-start", referanse: "Paul Seixas", felt: "form",
      pastand: "Bekreftet på TdF-start til tross for krasj i Auvergne-Rhône-Alpes", kilde: "Cyclingnews", dato: "2026-06-24" },
    { id: "seixas-stavemaate", referanse: "Paul Seixas", felt: "navn",
      pastand: "Riktig stavemåte er S-E-I-X-A-S", kilde: "Wikipedia / ProcyclingStats", dato: "2026-06-24" },
    { id: "vingegaard-giro-2026", referanse: "Jonas Vingegaard", felt: "meritter",
      pastand: "Vant Giro d'Italia 2026", kilde: "Olympics.com / Giro offisiell", dato: "2026-06-24" },
    { id: "vingegaard-paris-nice", referanse: "Jonas Vingegaard", felt: "form",
      pastand: "Vant Paris-Nice 2026 med rekordmargin (4:23)", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/paris-nice-jonas-vingegaard-secures-gc-title-as-lenny-martinez-wins-stage-8/",
      dato: "2026-06-24" },
    { id: "vingegaard-catalunya", referanse: "Jonas Vingegaard", felt: "form",
      pastand: "Vant Volta a Catalunya 2026 — første dansken i løpets historie", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/volta-a-catalunya-jonas-vingegaard-secures-second-major-overall-victory-of-2026-brady-gilmore-sprints-to-surprise-final-stage-win-in-barcelona/",
      dato: "2026-06-24" },
    { id: "del-toro-auvergne", referanse: "Isaac Del Toro", felt: "meritter",
      pastand: "Vant Tour Auvergne-Rhône-Alpes 2026", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/tour-auvergne-rhone-alpes-isaac-del-toro-claims-overall-title-with-second-consecutive-mountaintop-victory-at-plateau-de-solaison/",
      dato: "2026-06-24" },
    { id: "mvdp-omloop-2026", referanse: "Mathieu van der Poel", felt: "form",
      pastand: "Vant Omloop Het Nieuwsblad 2026 (solobrudd fra Muur van Geraardsbergen)", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/omloop-het-nieuwsblad-mathieu-van-der-poel-storms-to-solo-victory-with-stinging-muur-van-geraardsbergen-attack/",
      dato: "2026-06-24" },
    { id: "mvdp-e3-tredje-ar", referanse: "Mathieu van der Poel", felt: "form",
      pastand: "Vant E3 Saxo Classic tre år på rad (2024, 2025, 2026) — første siden Boonen 2004–2007", kilde: "Cycling Weekly",
      url: "https://www.cyclingweekly.com/racing/mathieu-van-der-poel-wins-third-successive-e3-saxo-classic-after-thrilling-finish",
      dato: "2026-06-24" },
    { id: "philipsen-gent-wevelgem", referanse: "Jasper Philipsen", felt: "meritter",
      pastand: "Vant Gent-Wevelgem 2026", kilde: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/2026_Gent%E2%80%93Wevelgem",
      dato: "2026-06-24" },
    { id: "ciccone-klatretroye-giro", referanse: "Giulio Ciccone", felt: "meritter",
      pastand: "Vant klatretrøya i Giro d'Italia 2026", kilde: "Domestique Cycling",
      url: "https://www.domestiquecycling.com/en/news/ciccone-fends-off-vingegaard-to-seal-giro-king-of-the-mountains-title/",
      dato: "2026-06-24" },
    { id: "van-aert-paris-roubaix-2026", referanse: "Wout van Aert", felt: "form",
      pastand: "Vant Paris-Roubaix 2026 (slo Pogačar i to-mann sprint på velodromfinalen 12. april)", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/racing/paris-roubaix-men-wout-van-aert-edges-out-tadej-pogacar-to-claim-his-first-cobbled-monument-victory-in-thrilling-finale-after-both-riders-deal-with-punctures-and-bike-changes/",
      dato: "2026-06-24" },
    { id: "van-aert-infeksjon-tour", referanse: "Wout van Aert", felt: "form",
      pastand: "Ute av Tour pga. albueskade og sårinfeksjon — forventes tilbake til Vuelta", kilde: "Cyclingnews",
      url: "https://www.cyclingnews.com/pro-cycling/teams-riders/struggling-wout-van-aert-ruled-out-of-tour-de-france-in-big-blow-to-visma-lease-a-bike/",
      dato: "2026-06-24" },
    { id: "evenepoel-dobbel-ol", referanse: "Remco Evenepoel", felt: "meritter",
      pastand: "Dobbel OL-mester Paris 2024 (tempo + linjeritt)", kilde: "IOC / ProcyclingStats", dato: "2026-06-24" },
    { id: "pogacar-4-tour-seire", referanse: "Tadej Pogačar", felt: "meritter",
      pastand: "4 Tour-seire (2020, 2021, 2024, 2025)", kilde: "letour.fr / ProcyclingStats", dato: "2026-06-24" },
    { id: "pogacar-ronde-rekord", referanse: "Tadej Pogačar", felt: "form",
      pastand: "Vant Ronde van Vlaanderen 2026 (tredje strake — tangerer all-time-rekorden)", kilde: "UAE Team Emirates", dato: "2026-06-24" },
    { id: "pogacar-liege-2026", referanse: "Tadej Pogačar", felt: "form",
      pastand: "Vant Liège-Bastogne-Liège 2026 (fjerde tittel)", kilde: "Rouleur", dato: "2026-06-24" },

    // TROPPE-BEKREFTELSER
    { id: "hagenes-visma-tour", referanse: "Per Strand Hagenes", felt: "lag",
      pastand: "Bekreftet på Visma Tour-lag (erstatter Christophe Laporte — lårskadet i mai)", kilde: "Cyclingnews / CyclingUpToDate", dato: "2026-06-24" },
    { id: "piganzoli-visma-tour", referanse: "Davide Piganzoli", felt: "lag",
      pastand: "Bekreftet på Visma Tour-lag (erstatter van Aert — sårinfeksjon)", kilde: "Cyclingnews", dato: "2026-06-24" },
    { id: "molenaar-caja-rural", referanse: "Alex Molenaar", felt: "lag",
      pastand: "Bekreftet på Caja Rural-laget — debut for både rytter og lag", kilde: "CyclingFlash / ProcyclingStats startliste", dato: "2026-06-24" },

    // HISTORISKE FAKTA
    { id: "lagtempo-1971", referanse: "Lagtempo-comeback (statistikk)", felt: "tekst",
      pastand: "Første åpnings-lagtempo siden 1971 — KORREKT (1971-arrangementet var teknisk sett en 'prologue', men regnes universelt som siste gang Tour åpnet med lagtempo)", kilde: "Cyclingnews / DomestiqueCycling", dato: "2026-06-24" },
    { id: "froome-career-grand-slam", referanse: "Jonas Vingegaard / statistikk", felt: "meritter",
      pastand: "Vingegaard fullfører karriere-Grand Slam (alle tre GT vunnet) — første siden Froome 2018. Froome-referansen er korrekt: Tour 2017 + Vuelta 2017 + Giro 2018.", kilde: "NBC Sports / CBS Sports / Wikipedia", dato: "2026-06-24" }
  ],

  // Usikre påstander — bruk med forsiktighet, ikke verifisert
  usikker: [
    {
      id: "vingegaard-grand-slam-presisjon",
      referanse: "Jonas Vingegaard",
      felt: "meritter",
      pastand: "Grand Tour-trippelen / 'fullfører triple'",
      bekymring: "VIKTIG PRESISERING: Vingegaard har fullført career Grand Slam (alle tre GT vunnet, 2022–2026), men IKKE en konsekutiv/simultan triple slik Froome (2017–2018), Hinault og Merckx. Han har aldri holdt alle tre titler simultant. Si 'karriere-Grand Slam' ikke 'konsekutiv triple' på lufta.",
      prioritet: "høy",
      url: "https://en.wikipedia.org/wiki/Triple_Crown_of_Cycling"
    },
    {
      id: "cort-vuelta-rekord",
      referanse: "Magnus Cort",
      felt: "meritter",
      pastand: "Angivelig rekord i Vuelta-etappeseire blant levende ryttere",
      bekymring: "6 Vuelta-etappeseire er bekreftet. Rekordpåstanden mot levende ryttere er ikke verifisert av faktasjekken.",
      prioritet: "lav"
    },
    {
      id: "bennett-gronn-troye-2020",
      referanse: "Sam Bennett",
      felt: "meritter",
      pastand: "Grønn troye Tour 2020, mange Tour-etappeseiere",
      bekymring: "2020 grønn trøye stemmer. 'Mange etappeseiere' er upresist — eksakt antall ikke verifisert.",
      prioritet: "lav"
    },
    {
      id: "ineos-70-etapper",
      referanse: "Netcompany INEOS (IGD)",
      felt: "tourEtapper",
      pastand: "70 Tour-etappeseire som Sky/Ineos/Netcompany",
      bekymring: "Totalen 70 er et anslag. Ikke eksakt verifisert av faktasjekken. Bruk som omtrentlig tall.",
      prioritet: "middels",
      url: "https://www.procyclingstats.com/team/team-sky/statistics"
    },
    {
      id: "visma-tour-etapper-30",
      referanse: "Visma | Lease a Bike (VLB)",
      felt: "tourEtapper",
      pastand: "30 Tour-etappeseire",
      bekymring: "Delene summerer ikke til 30: Van Aert ~10 + Vingegaard ~9 + Roglič 3 + Teunissen 1 + Kuss 1 + Jorgenson 1 = ~25. Totalen bør reknes nøye.",
      prioritet: "middels",
      url: "https://www.procyclingstats.com/team/jumbo-visma/statistics"
    }
  ]
};

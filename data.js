/* =============================================================
   TdF-KOMMENTATORBASEN — DATAFIL
   -------------------------------------------------------------
   Dette er den ENESTE filen jeg (Claude) trenger å oppdatere før
   hver etappe (~2 timer før start). Selve appen (index.html) rører
   jeg ikke. Alt under er vanlig JSON-aktig JavaScript.

   Sist oppdatert: 2026-06-29  (startlister bekreftet, 23 lag, 184 ryttere; Tour de Suisse og Tour Auvergne-Rhône-Alpes resultatoppdatert)
   Kilder: ProCyclingStats, CyclingUpToDate, unoxteam.com, CyclingStage,
           CyclingNews, Wikipedia.
   ============================================================= */

const TDF_DATA = {

  /* ---- LIVE-STATUS ---- */
  live: {
    sisteOppdatering: "2026-06-29",
    nesteEtappe: 1,
    rittStartISO: "2026-07-04T13:00:00",
    notat: "Lagpresentasjon i Barcelona 1. juli. Startlister bekreftet (23 lag, 184 ryttere). Store pre-Tour-nyheter: Pogačar dominerte Tour de Suisse med 6:32 til nr. 2 — sykkelsykt form. Del Toro vant Tour Auvergne-Rhône-Alpes (det nye navnet på Critérium du Dauphiné) med to etappeseire i avslutningshelgen. STORE FRAFALL: Mikel Landa IKKE med på Soudal Quick-Step; David Gaudu IKKE med på FDJ. STORE TILBAKEKOMSTER: Egan Bernal (INEOS) er tilbake i Tour! Anthon Charmig og Anders Johannessen (Tobias' tvillingbror!) begge på Uno-X — tvillingene Johannessen i samme Tour for første gang!",
    gulTroye: null,
    grontTroye: null,
    prikketTroye: null,
    hvitTroye: null,
    sammenlagtTopp: [],
    dagensHistorie: ""
  },

  /* ---- FAKTA OM RITTET ---- */
  fakta: {
    utgave: "113. utgave",
    datoer: "4.–26. juli 2026",
    grandDepart: "Barcelona (Spania) — sørligste Grand Départ noensinne",
    distanse: "3 333 km",
    hoydemeter: "54 450 høydemeter (en av de tøffeste noensinne)",
    etapper: "21 etapper",
    hviledager: "13. juli og 20. juli",
    fordeling: "7 flate · 4 kuperte · 8 fjell · 5 toppmål · 1 lagtempo · 1 enkelttempo",
    hoyestePunkt: "Col du Galibier, 2 642 m (etappe 20)",
    premiepenger: "2,3 millioner euro",
    finale: "Champs-Élysées med Montmartre-brosteinen (Rue Lepic)",
    antallLag: "23 lag (18 WorldTour + 5 wildcard)",
    antallRyttere: "161 ryttere"
  },

  /* ---- NØKKELPOENG ---- */
  noklerTilRittet: [
    "Åpner med lagtempo (19,7 km) i Barcelona — første åpnings-lagtempo siden 1971. Hver rytters individuelle tid teller (uvanlig).",
    "Etappe 1 OG 2 ender på Montjuïc-haugen over Barcelona.",
    "Pyreneene allerede etappe 3 — tidlig start på fjellet.",
    "Dobbel Alpe d'Huez: etappe 19 og 20 ender begge på Alpe d'Huez — første gang i historien to dager på rad.",
    "Etappe 20 er dronningetappen: Galibier + Col de Sarenne + Alpe d'Huez, 5 600 høydemeter.",
    "Kun ett enkelttempo (etappe 16, 26 km) — Evenepoels store mulighet.",
    "Wout van Aert er IKKE på Visma-laget til Tour — kun Vingegaard, Jorgenson, Kuss, Armirail, Campenaerts, Affini, Hagenes.",
    "Juan Ayuso er nå på Lidl-Trek (ikke UAE) — sterk GC-kandidat på spansk jord."
  ],

  /* ---- ETAPPER ---- */
  etapper: [
    { nr:1, dato:"4. jul", fra:"Barcelona", til:"Barcelona/Montjuïc", km:19.7, type:"tempo-lag", noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-1-profile.jpg",
      notat:"Lagtempo. Flat start, kupert finale opp mot Montjuïc. Individuell tid teller. Setter tidlige GC-marginer.",
      topper:[{km:19.7,navn:"Montjuïc",alt:175,kat:"4"}],spurter:[]
    },
    { nr:2, dato:"5. jul", fra:"Tarragona", til:"Barcelona/Montjuïc", km:168.5, type:"kupert", noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-2-profile.jpg",
      notat:"~2 500 hm. Avgjøres på Montjuïc-rundene. Punchere/klassikerryttere — van der Poel, Pidcock, Alaphilippe.",
      topper:[{km:168.5,navn:"Montjuïc",alt:175,kat:"4"}],
      spurter:[{km:95,navn:"Sant Sadurní d'Anoia"}]
    },
    { nr:3, dato:"6. jul", fra:"Granollers", til:"Les Angles", km:195.9, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-3-profile.jpg",
      notat:"Krysser Pyreneene inn i Frankrike. 3 850 hm, oppoverbakkemål. Tidlig GC-test.",
      topper:[{km:140,navn:"Col de la Quillane",alt:1714,kat:"1"},{km:195.9,navn:"Les Angles",alt:1602,kat:"1"}],
      spurter:[{km:75,navn:"Ripoll"}]
    },
    { nr:4, dato:"7. jul", fra:"Carcassonne", til:"Foix", km:182, type:"kupert",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-4-profile.jpg",
      notat:"Pyreneenes utløpere. Siste ~35 km mest nedover — bruddetappe.",
      topper:[{km:115,navn:"Col de Marmare",alt:600,kat:"3"}],
      spurter:[{km:100,navn:"Pamiers"}]
    },
    { nr:5, dato:"8. jul", fra:"Lannemezan", til:"Pau", km:158, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-5-profile.jpg",
      notat:"Spurtsjanse. Pau er klassisk Tour-by. Philipsen, Merlier, De Lie, Groves, Pedersen.",
      topper:[],spurter:[{km:90,navn:"Tarbes"}]
    },
    { nr:6, dato:"9. jul", fra:"Pau", til:"Gavarnie-Gèdre", km:186, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-6-profile.jpg",
      notat:"Col d'Aspin + Col du Tourmalet før mål i Cirque de Gavarnie. Stor fjelldag.",
      topper:[{km:79,navn:"Col d'Aspin",alt:1489,kat:"2"},{km:155,navn:"Col du Tourmalet",alt:2115,kat:"HC"},{km:186,navn:"Gavarnie-Gèdre",alt:1350,kat:"HC"}],
      spurter:[{km:40,navn:"Lourdes"}]
    },
    { nr:7, dato:"10. jul", fra:"Hagetmau", til:"Bordeaux", km:175, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-7-profile.jpg",
      notat:"Klassisk massespurt i Bordeaux.",
      topper:[],spurter:[{km:100,navn:"Mont-de-Marsan"}]
    },
    { nr:8, dato:"11. jul", fra:"Périgueux", til:"Bergerac", km:182, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-8-profile.jpg",
      notat:"Flat — spurterne.",
      topper:[],spurter:[{km:105,navn:"Sainte-Alvère"}]
    },
    { nr:9, dato:"12. jul", fra:"Malemort", til:"Ussel", km:185, type:"kupert",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-9-profile.jpg",
      notat:"Kupert inn mot Massif Central. Bruddfare.",
      topper:[{km:120,navn:"Côte de la Croix des Frères",alt:700,kat:"4"}],
      spurter:[{km:100,navn:"Bort-les-Orgues"}]
    },
    { nr:10, dato:"14. jul", fra:"Aurillac", til:"Le Lioran", km:167, type:"kupert", noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-10-profile.jpg",
      notat:"Nasjonaldagen 14. juli. Le Lioran — eksplosiv kupert dag, ofte franske offensiver. Seixas vs GC-favorittene.",
      topper:[{km:167,navn:"Le Lioran",alt:1160,kat:"2"}],
      spurter:[{km:80,navn:"Murat"}]
    },
    { nr:11, dato:"15. jul", fra:"Vichy", til:"Nevers", km:161, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-11-profile.jpg",
      notat:"Spurtsjanse.",
      topper:[],spurter:[{km:90,navn:"Moulins"}]
    },
    { nr:12, dato:"16. jul", fra:"Magny-Cours", til:"Chalon-sur-Saône", km:181, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-12-profile.jpg",
      notat:"Flat — spurterne.",
      topper:[],spurter:[{km:100,navn:"Cluny"}]
    },
    { nr:13, dato:"17. jul", fra:"Dole", til:"Ballon d'Alsace", km:205, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-13-profile.jpg",
      notat:"Lengste etappe (205 km). Ballon d'Alsace som toppmål — legendarisk Vosges-klatring (1 178 m, 9 km, 6,9 %). Klassisk TdF-stigning fra 1905.",
      topper:[{km:150,navn:"Col du Donon",alt:727,kat:"4"},{km:205,navn:"Ballon d'Alsace",alt:1178,kat:"1"}],
      spurter:[{km:115,navn:"Baume-les-Dames"}]
    },
    { nr:14, dato:"18. jul", fra:"Mulhouse", til:"Col du Haag", km:155, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-14-profile.jpg",
      notat:"Ny Vosges-klatring: Col du Haag — nylig asfaltert sykkelvei, første gang i Tour. Kalt 'alsasisk Col de Loze' (bratt, smal, snodd). Grand Ballon underveis. 3 800 hm totalt.",
      topper:[{km:80,navn:"Col du Platzerwasel",alt:1100,kat:"2"},{km:135,navn:"Grand Ballon",alt:1424,kat:"1"},{km:155,navn:"Col du Haag",alt:900,kat:"1"}],
      spurter:[{km:50,navn:"Cernay"}]
    },
    { nr:15, dato:"19. jul", fra:"Champagnole", til:"Plateau de Solaison", km:184, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-15-profile.jpg",
      notat:"Mont Salève (9 km, ~9 %, oppover 15 %) før sisteetappen. Solaison-finale: 11 km, 9 %. GC-dag rett før hviledag.",
      topper:[{km:100,navn:"Mont Salève",alt:1380,kat:"1"},{km:184,navn:"Plateau de Solaison",alt:1450,kat:"HC"}],
      spurter:[{km:85,navn:"Annemasse"}]
    },
    { nr:16, dato:"21. jul", fra:"Évian-les-Bains", til:"Thonon-les-Bains", km:26, type:"tempo", noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-16-profile.jpg",
      notat:"Eneste enkelttempo. 9 km stigning ut av Évian, så flatt langs Genfersjøen. Evenepoels nøkkeldag. Ganna farlig.",
      topper:[{km:9,navn:"Topp Évian-stigning",alt:850,kat:"4"}],spurter:[]
    },
    { nr:17, dato:"22. jul", fra:"Chambéry", til:"Voiron", km:175, type:"flat",
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-17-profile.jpg",
      notat:"Overgangsetappe / brudd før Alpene. Col du Frêne + Col de Couz, flat avslutning mot Voiron. Markedsføres som spurt, men bruddet vinner.",
      topper:[{km:45,navn:"Col du Frêne",alt:1389,kat:"2"},{km:90,navn:"Col de Couz",alt:730,kat:"4"}],
      spurter:[{km:100,navn:"Pontcharra"}]
    },
    { nr:18, dato:"23. jul", fra:"Voiron", til:"Orcières-Merlette", km:185, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-18-profile.jpg",
      notat:"Toppmål Orcières-Merlette. Starten på den avgjørende alpe-helgen.",
      topper:[{km:155,navn:"Col du Noyer",alt:1664,kat:"1"},{km:185,navn:"Orcières-Merlette",alt:1820,kat:"HC"}],
      spurter:[{km:70,navn:"Grenoble"}]
    },
    { nr:19, dato:"24. jul", fra:"Gap", til:"Alpe d'Huez", km:130, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-19-profile.jpg",
      notat:"Tre klatringer: Col de Bayard → Col du Noyer → Col d'Ornon → 21 hårnålssvinger opp Alpe d'Huez (13 km, 8 %+). Abrahamsen i brudd?",
      topper:[{km:30,navn:"Col de Bayard",alt:1246,kat:"2"},{km:60,navn:"Col du Noyer",alt:1664,kat:"1"},{km:95,navn:"Col d'Ornon",alt:1367,kat:"2"},{km:130,navn:"Alpe d'Huez",alt:1860,kat:"HC"}],
      spurter:[{km:40,navn:"Corps"}]
    },
    { nr:20, dato:"25. jul", fra:"Le Bourg-d'Oisans", til:"Alpe d'Huez", km:171, type:"fjell", toppmaal:true, noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-20-profile.jpg",
      notat:"DRONNINGETAPPEN. Galibier (2 642 m) + Col de Sarenne + 2. gang opp Alpe d'Huez. 5 600 hm. Touren avgjøres her.",
      topper:[{km:52,navn:"Col de la Croix de Fer",alt:2067,kat:"HC"},{km:95,navn:"Col du Galibier",alt:2642,kat:"HC"},{km:108,navn:"Col de Sarenne",alt:1999,kat:"1"},{km:171,navn:"Alpe d'Huez",alt:1860,kat:"HC"}],
      spurter:[{km:30,navn:"Bourg-d'Oisans int."}]
    },
    { nr:21, dato:"26. jul", fra:"Thoiry", til:"Paris/Champs-Élysées", km:130, type:"flat", noklet:true,
      profilbilde:"https://cdn.cyclingstage.com/images/tour-de-france/2026/stage-21-profile.jpg",
      notat:"Montmartre-brosteinen (Rue Lepic) før spurt på Champs-Élysées. Kan bli mer enn parade.",
      topper:[],spurter:[{km:103,navn:"Montmartre/Rue Lepic"}]
    }
  ],

  /* ---- LAG (23 lag: 18 WorldTour + 5 wildcard) ---- */
  lag: [
    { kort:"UAE", navn:"UAE Team Emirates-XRG", land:"UAE", farger:["#ffffff","#cc0520","#001e62"],
      leder:"Tadej Pogačar", nr:1,
      ryttere:"Pogačar, Del Toro, McNulty, Wellens, Grossschartner, Politt, Vermeersch, A. Yates",
      notat:"Klart sterkeste lag. Pogačar #1 som forsvarende mester. Del Toro opp som 2. kaptein. Juan Ayuso er IKKE her — han er på Lidl-Trek.",
      tourEtapper:{ antall:26, noter:"Pogačar 21 etapper (2020–2025) · Aru 3 (2017) · D. Martin 2 (2018–19)" },
      drakt:{ base:"#ffffff", skulder:"#cc0520", sleeve:"#cc0520", krave:"#001e62",
              band:null, mønster:"none", sidefelt:"#001e62",
              logo1:"UAE", logo2:"XRG", lf:"#cc0520" }
    },
    { kort:"VLB", navn:"Visma | Lease a Bike", land:"Nederland", farger:["#ffe500","#1a1a1a","#e30613"],
      leder:"Jonas Vingegaard", nr:11,
      ryttere:"Vingegaard, Jorgenson, Kuss, Armirail, Campenaerts, Affini, Hagenes (NOR), Piganzoli",
      notat:"NB: To sene frafall: Van Aert ut (infeksjon i elbue) → erstattet av Piganzoli. Laporte ut (lårmuskelsone mai) → erstattet av Per Strand Hagenes (NOR). Jorgenson kan bli nestekaptein.",
      tourEtapper:{ antall:30, noter:"Som LottoNL-Jumbo/Jumbo-Visma/Visma: Van Aert ~10 (2018–2025, inkl. grønn 2022) · Vingegaard ~9 (2022–2025) · Roglič 3 (2019–21) · Teunissen etappe 1 + gul (2019) · Kuss 1 · Jorgenson 1 (2023)" },
      drakt:{ base:"#ffe500", skulder:"#1a1a1a", sleeve:"#ffe500", krave:"#1a1a1a",
              band:"#e30613", mønster:"band-top",
              logo1:"VISMA", logo2:"Lease a Bike", lf:"#1a1a1a" }
    },
    { kort:"RBH", navn:"Red Bull-BORA-hansgrohe", land:"Tyskland", farger:["#0c1640","#cc0000","#f5d000"],
      leder:"Remco Evenepoel / Florian Lipowitz", nr:21,
      ryttere:"Evenepoel, Lipowitz, Cattaneo, Van Gils, Hindley, Denz, Tratnik, van Dijke",
      notat:"To GC-kort: Evenepoel (tempo) + Lipowitz (jevn). Evenepoel #21. NB: D. Martínez, Meeus og Van Poppel er IKKE med — laget er mer defensivt sammensatt. Luke Tuckwell (som ble 2. i Tour Auvergne) er heller ikke med. Tratnik solid hjelper, Denz allrounder.",
      tourEtapper:{ antall:8, noter:"Som BORA-hansgrohe/Red Bull-BORA: Sagan 6 (2017×4, 2018×1, 2019×1) · Meeus 1 (Champs-Élysées 2023) · Evenepoel 0 i Tour ennå" },
      drakt:{ base:"#0c1640", skulder:"#cc0000", sleeve:"#0c1640", krave:"#cc0000",
              band:"#cc0000", mønster:"band-top",
              logo1:"Red Bull", logo2:"BORA", lf:"#ffffff" }
    },
    { kort:"LTK", navn:"Lidl-Trek", land:"USA", farger:["#0d1a3f","#d2002e","#ffffff"],
      leder:"Juan Ayuso / Mattias Skjelmose", nr:null,
      ryttere:"Ayuso, Skjelmose, Pedersen, Simmons, Kragh Andersen, Vacek, Verona",
      notat:"Juan Ayuso er her (ikke UAE) — møter eks-lagkamerat Pogačar! Sterk duo Ayuso/Skjelmose + spurter Pedersen. Ayuso 3. plass Tour Auvergne-Rhône-Alpes 2026. Simmons vant etappe 4 samme ritt. NB: Giulio Ciccone er IKKE med på laget.",
      tourEtapper:{ antall:14, noter:"Som RadioShack/Trek Factory/Trek-Segafredo/Lidl-Trek: Cancellara 4 prologer (2011–13) · Mollema 1 (2019) · Pedersen 1 (2024) · div. etapper" },
      drakt:{ base:"#0d1a3f", skulder:"#d2002e", sleeve:"#d2002e", krave:"#0d1a3f",
              band:"#d2002e", mønster:"band-top",
              logo1:"TREK", logo2:"Lidl", lf:"#ffffff" }
    },
    { kort:"DEC", navn:"Decathlon CMA CGM", land:"Frankrike", farger:["#0046b9","#ffffff","#1d1d1b"],
      leder:"Paul Seixas", nr:null,
      ryttere:"Seixas, Benoot, Bissegger, Hoole, Paret-Peintre (A.), Prodhomme, Riccitello",
      notat:"Seixas vant Itzulia Basque Country april 2026, 2. plass Liège-Bastogne-Liège. Hvit-troye-favoritt. NB: Kooij er IKKE på TdF-laget.",
      tourEtapper:{ antall:9, noter:"Som Sunweb/Team DSM/DSM-Firmenich/Decathlon: Matthews 2 (2017, grønn trøye) · Dumoulin 1 TT (2017) · Barguil klatretrøye + 2 et. (2017) · div." },
      drakt:{ base:"#0046b9", skulder:"#003da5", sleeve:"#0046b9", krave:"#0046b9",
              band:null, mønster:"none",
              logo1:"Decathlon", logo2:"CMA CGM", lf:"#ffffff" }
    },
    { kort:"APT", navn:"Alpecin-Premier Tech", land:"Belgia", farger:["#e6007e","#1d1d1b","#ffffff"],
      leder:"Mathieu van der Poel", nr:null,
      ryttere:"van der Poel, Philipsen, Groves, Verstrynge, Rickaert",
      notat:"VdP + Philipsen = to av verdens beste spurter/klassikerryttere. VdP jakter Montjuïc og Montmartre.",
      tourEtapper:{ antall:7, noter:"Philipsen 4 (2023, grønn trøye) · van der Poel 1 (etappe 6, 2021) · Groves 1 (2024) · Rickaert 1 (2024)" },
      drakt:{ base:"#e6007e", skulder:"#1d1d1b", sleeve:"#1d1d1b", krave:"#e6007e",
              band:null, mønster:"none",
              logo1:"Alpecin", logo2:"Premier Tech", lf:"#ffffff" }
    },
    { kort:"IGD", navn:"Netcompany INEOS", land:"Storbr.", farger:["#1d1d1b","#c8102e","#0033a0"],
      leder:"Carlos Rodríguez / Thymen Arensman", nr:null,
      ryttere:"Arensman, Bernal, Ganna, Rodríguez, Kwiatkowski, Vauquelin, Godon",
      notat:"Laget heter nå Netcompany INEOS. STOR NYHET: Egan Bernal er tilbake i Tour! Tour-vinner 2019, har kjempet med rygg- og helseskader siden. Ganna farlig på tempoet (etappe 16). Rodríguez og Arensman som GC-kort. Oscar Onley er IKKE med.",
      tourEtapper:{ antall:70, noter:"Som Team Sky/Team Ineos/Ineos Grenadiers/Netcompany INEOS: Sky-epoken (2012–19): Cavendish 6 (2012), Froome 12 (2013–16), Thomas 3 · INEOS-epoken (2020–): Pidcock (Alpe d'Huez 2022), Rodríguez (2023), Arensman 2 (2025). Rekordlaget i moderne Tour-historie." },
      drakt:{ base:"#1d1d1b", skulder:"#1d1d1b", sleeve:"#1d1d1b", krave:"#c8102e",
              band:"#c8102e", mønster:"band-top",
              logo1:"INEOS", logo2:"Grenadiers", lf:"#ffffff" }
    },
    { kort:"EFE", navn:"EF Education-EasyPost", land:"USA", farger:["#ec268f","#0d1b8f","#1d1d1b"],
      leder:"Richard Carapaz", nr:null,
      ryttere:"Carapaz, Healy, Asgreen, Baudin",
      notat:"Rosa drakt, offensiv stil. Carapaz som GC-kort — OL-mester 2021, Grand Tour-vinner. NB: Honoré er IKKE på TdF-laget.",
      tourEtapper:{ antall:8, noter:"Urán 2 (Cannondale-Drapac 2017) · Healy 1 (2023) · div. Cannondale/EF-epoken" },
      drakt:{ base:"#ec268f", skulder:"#0d1b8f", sleeve:"#0d1b8f", krave:"#ec268f",
              band:null, mønster:"diagonal",
              logo1:"EF", logo2:"EasyPost", lf:"#ffffff" }
    },
    { kort:"GFC", navn:"Groupama-FDJ United", land:"Frankrike", farger:["#0a3cae","#ffffff","#d2002e"],
      leder:"Romain Grégoire", nr:null,
      ryttere:"Grégoire, Madouas, Martin-Guyonnet",
      notat:"STOR NYHET: David Gaudu er IKKE med på TdF-laget! FDJ satser nå alt på den 22-årige Grégoire. Han vant etappe 2 i Tour de Suisse 2026. Madouas som erfaren backup.",
      tourEtapper:{ antall:12, noter:"Pinot 3 (2012–18) · Démare 1 (2020) · Bouhanni div. · Gaudu 1 (2023) · Grégoire 1 (2025)" },
      drakt:{ base:"#0a3cae", skulder:"#0a3cae", sleeve:"#0a3cae", krave:"#0a3cae",
              band:null, mønster:"sidefelt", sidefelt:"#d2002e",
              logo1:"FDJ", logo2:"United", lf:"#ffffff" }
    },
    { kort:"MOV", navn:"Movistar Team", land:"Spania", farger:["#041e5f","#00a6a3","#ffffff"],
      leder:"Cian Uijtdebroeks", nr:null,
      ryttere:"Uijtdebroeks, Rubio, Castrillo, Adrià, Hessmann",
      notat:"Uijtdebroeks (23) som GC-kort — ung belgier med store ambisjoner. Homerace-motivasjon. NB: Ivan Romeo er IKKE på TdF-laget.",
      tourEtapper:{ antall:15, noter:"Som Caisse d'Épargne/Movistar: Valverde 5 (2005–2015) · Quintana 3 (2013–2016) · div." },
      drakt:{ base:"#041e5f", skulder:"#00a6a3", sleeve:"#00a6a3", krave:"#00a6a3",
              band:null, mønster:"none",
              logo1:"Movistar", logo2:"", lf:"#ffffff" }
    },
    { kort:"SOQ", navn:"Soudal Quick-Step", land:"Belgia", farger:["#0a2a6b","#ffffff","#9b9b9b"],
      leder:"Ilan Van Wilder / Tim Merlier", nr:null,
      ryttere:"van Baarle, Merlier, Stuyven, Van Lerberghe, V. Paret-Peintre, Vervaeke, Van Wilder",
      notat:"STOR NYHET: Mikel Landa er IKKE på laget! «The Wolfpack» mangler sin GC-kaptein. Merlier som spurter og Van Wilder som ny GC-leder (5. plass Tour de Suisse). Louis Vervaeke vant klatretrøya i Tour de Suisse 2026 — i form.",
      tourEtapper:{ antall:36, noter:"Som Quick-Step/Etixx/Deceuninck/Alpha Vinyl/Soudal Quick-Step: Alaphilippe 4 (2019) · Cavendish 4 (2021) · Lampaert 1 · Martin div. · Boonen div. – ett av Tourens mest vinnende lag" },
      drakt:{ base:"#0a2a6b", skulder:"#0a2a6b", sleeve:"#0a2a6b", krave:"#0a2a6b",
              band:null, mønster:"stripes-v",
              logo1:"Quick-Step", logo2:"Soudal", lf:"#ffffff" }
    },
    { kort:"TBV", navn:"Bahrain Victorious", land:"Bahrain", farger:["#9d1b30","#0a1342","#e30613"],
      leder:"Lenny Martínez / Antonio Tiberi", nr:null,
      ryttere:"Martínez, Tiberi, Mohorič, Bauhaus, Caruso, Gradek, Van Mechelen, Stannard",
      notat:"Martínez og Tiberi deler GC-ledelse. Mohorič farlig i brudd. Bauhaus som spurtkort på flate etapper. NB: Bilbao er IKKE med på laget.",
      tourEtapper:{ antall:10, noter:"Mohoric 2 (2021, inkl. solo 100 km ut) · Teuns 1 (Mûr-de-Bretagne 2021) · Bilbao 1 (2023) · Haller 1 (2021) · div. siden 2018" },
      drakt:{ base:"#9d1b30", skulder:"#9d1b30", sleeve:"#9d1b30", krave:"#ffffff",
              band:null, mønster:"sidefelt", sidefelt:"#ffffff",
              logo1:"Bahrain", logo2:"Victorious", lf:"#ffffff" }
    },
    { kort:"PIC", navn:"Team Picnic PostNL", land:"Nederland", farger:["#e2001a","#0a1342","#ffffff"],
      leder:"—", nr:null,
      ryttere:"van den Broek, Barguil, Bittner, van den Berg",
      notat:"Etappeambisjoner. Barguil kjent fra Polkadot-troye.",
      tourEtapper:{ antall:5, noter:"Barguil 2 etapper + klatretrøye (Sunweb 2017) · nå på nytt lag · div." },
      drakt:{ base:"#e2001a", skulder:"#ff6a00", sleeve:"#e2001a", krave:"#e2001a",
              band:null, mønster:"none",
              logo1:"PostNL", logo2:"Picnic", lf:"#ffffff" }
    },
    { kort:"LIN", navn:"Lotto Intermarché", land:"Belgia", farger:["#d2002e","#1d1d1b","#ffd200"],
      leder:"Lennert Van Eetvelt / Arnaud De Lie", nr:null,
      ryttere:"Van Eetvelt, De Lie, Zimmermann, Berckmoes, Veistroffer, Artz, Craps, Slock",
      notat:"Van Eetvelt som GC-kort — ung belgier. De Lie som spurter/puncheur. Artz, Craps og Slock er nye ryttere bekreftet på TdF-laget.",
      tourEtapper:{ antall:20, noter:"Som Lotto-Belisol/Lotto-Soudal/Lotto Dstny/Lotto Intermarché: Greipel 13 (2012–2016) · Ewan 3 (2019) · Zimmermann 1 (2023) · De Lie 0 ennå" },
      drakt:{ base:"#d2002e", skulder:"#1d1d1b", sleeve:"#d2002e", krave:"#d2002e",
              band:"#ffd200", mønster:"band-mid",
              logo1:"Lotto", logo2:"Intermarché", lf:"#ffffff" }
    },
    { kort:"NSN", navn:"NSN Cycling Team", land:"Israel", farger:["#0a2a6b","#ffffff","#f5d000"],
      leder:"Biniam Girmay", nr:null,
      ryttere:"Girmay, G. Bennett, Van Asbroeck, Frigo, Louvel, Lewis Askey, Neilands, Jake Stewart",
      notat:"Girmay er en av verdens beste spurter. NB: George Bennett (NZL) — ikke Sam Bennett (IRE, pensjonert). Lewis Askey (ikke Matthew). Jake Stewart (ikke Chris). Boivin er IKKE med. Van Asbroeck, Frigo, Louvel og Neilands er nye TdF-ryttere for laget. Tidl. Israel-Premier Tech.",
      tourEtapper:{ antall:5, noter:"Som Israel Start-Up Nation/Israel-Premier Tech/NSN: Girmay 2 (2024) · Cavendish 1 rekordseter (2024 — etappe 35, som slo Merckx) · div." },
      drakt:{ base:"#0a2a6b", skulder:"#ffffff", sleeve:"#0a2a6b", krave:"#0a2a6b",
              band:null, mønster:"none",
              logo1:"NSN", logo2:"", lf:"#ffffff" }
    },
    { kort:"UNO", navn:"Uno-X Mobility", land:"Norge", farger:["#ff5a00","#3a2a1a","#ffffff"],
      leder:"Tobias Halland Johannessen", norsk:true, nr:null,
      ryttere:"Abrahamsen, Charmig, Cort, T.H. Johannessen, A. Johannessen, Skaarseth, Træen, Wærenskjold",
      notat:"NORSK LAG — 8 ryttere! HISTORISK: BEGGE Johannessen-tvillingene er på laget — Tobias Halland OG Anders Johannessen, brødrene som begge er proffyklist! Andreas Kron er IKKE med. Abrahamsen vant Brussels Classic i 2024. Wærenskjold vant Baloise Belgium Tour i 2024. Charmig vant etappe i Tour Auvergne-Rhône-Alpes 2026. Træen er IKKE på Bahrain — han er her.",
      tourEtapper:{ antall:1, noter:"Abrahamsen 1 (etappe 10, 2023 — som wildcard-lag i første Tour-deltakelse). Årets Tour er lagets første WorldTour-Tour." },
      drakt:{ base:"#ff5a00", skulder:"#1d1d1b", sleeve:"#ff5a00", krave:"#ff5a00",
              band:"#1d1d1b", mønster:"band-top",
              logo1:"Uno-X", logo2:"Mobility", lf:"#ffffff" }
    },
    { kort:"AST", navn:"XDS Astana", land:"Kasakhstan", farger:["#00a3e0","#f5d000","#ffffff"],
      leder:"Sergio Higuita", nr:null,
      ryttere:"Teunissen, Higuita, Tejada, Champoussin, Ballerini, Kanter, Velasco, Vinokurov",
      notat:"Etappeseire og klatrertrøya er målet. Teunissen overraskelseskort. Lorenzo Fortunato er IKKE med. Ballerini klassikerkort, Kanter spurter, Velasco og Vinokurov nye navn.",
      tourEtapper:{ antall:22, noter:"Som Astana/Astana Qazaqstan/XDS Astana: Nibali 2 (2014) · Fuglsang 1 (2019) · Lutsenko 1 · div. etapper. NB: Contador-seire annullert. Cavendish-rekordseier (2024) var med dette laget da det het Astana Qazaqstan." },
      drakt:{ base:"#00a3e0", skulder:"#f5d000", sleeve:"#00a3e0", krave:"#00a3e0",
              band:"#f5d000", mønster:"none",
              logo1:"Astana", logo2:"XDS", lf:"#1d1d1b" }
    },
    { kort:"COF", navn:"Cofidis", land:"Frankrike", farger:["#d2002e","#ffffff","#1d1d1b"],
      leder:"—", nr:null,
      ryttere:"Aranburu, Buchmann, Fretin, Izagirre, Kirsch, Page, Allegaert, Biermans, Thomas",
      notat:"Wildcard-lag. Izagirre og Aranburu som etappejegere. Simon Carr er IKKE med. Biermans og Allegaert klassikerkort, Thomas allrounder.",
      tourEtapper:{ antall:10, noter:"Som Cofidis (siden 1997, stabilt lagnavn): Calmejane 1 (2017) · Laporte 1 (2022) · Izagirre 1 (2016) · div. tidlig 2000-tall" },
      drakt:{ base:"#d2002e", skulder:"#1d1d1b", sleeve:"#d2002e", krave:"#d2002e",
              band:null, mønster:"none",
              logo1:"Cofidis", logo2:"", lf:"#ffffff" }
    },
    /* ---- WILDCARD-LAG ---- */
    { kort:"TUD", navn:"Tudor Pro Cycling Team", land:"Sveits", farger:["#c8102e","#1d1d1b","#ffffff"],
      leder:"Julian Alaphilippe", nr:null,
      ryttere:"Alaphilippe, Küng, Pluimers, Storer, Trentin",
      notat:"Wildcard. Alaphilippe tilbake i Tour etter noen tøffe år — klassiker- og etappetruer. Küng er temposterk.",
      tourEtapper:{ antall:0, noter:"Tour-DEBUT 2026 — Alaphilippes 4 Tour-etapper (2019) var med Quick-Step. Tudor er et nytt lag." },
      drakt:{ base:"#c8102e", skulder:"#1d1d1b", sleeve:"#c8102e", krave:"#c8102e",
              band:null, mønster:"none",
              logo1:"Tudor", logo2:"", lf:"#ffffff" }
    },
    { kort:"PQ3", navn:"Pinarello-Q36.5", land:"Storbr.", farger:["#1d1d1b","#3da9fc","#ffffff"],
      leder:"Tom Pidcock", nr:null,
      ryttere:"Pidcock, Azparren, Hermans, Van Moer, Wright",
      notat:"Wildcard. Pidcock som GC-mørk hest og etappetruer — vant Tour-etappe 2022 på Alpe d'Huez. Ben Hermans (BEL) er lagt til — erfaren klatrer og bruddspesialist.",
      tourEtapper:{ antall:0, noter:"Tour-DEBUT 2026 — Pidcocks Alpe d'Huez-seier (2022) var med INEOS. Pinarello-Q36.5 debuterer." },
      drakt:{ base:"#1d1d1b", skulder:"#3da9fc", sleeve:"#1d1d1b", krave:"#3da9fc",
              band:null, mønster:"none",
              logo1:"Pinarello", logo2:"Q36.5", lf:"#3da9fc" }
    },
    { kort:"JAY", navn:"Team Jayco AlUla", land:"Australia", farger:["#002d62","#e87722","#ffffff"],
      leder:"Luke Plapp / Michael Matthews", nr:null,
      ryttere:"Plapp, Matthews, O'Connor, Ackermann, Schmid, Durbridge, Engelhardt, O'Brien",
      notat:"Wildcard. Matthews som spurter og klassiker-truer. Plapp GC-håp. Durbridge erfaren tempoallrounder, Engelhardt ung tysk klatrer, O'Brien australsk allrounder.",
      tourEtapper:{ antall:18, noter:"Som GreenEdge/Orica/Mitchelton/BikeExchange/Jayco: Matthews 4 (2016–17) · Ewan 2 (2017–18) · Gerrans 1 (2012) · A. Yates 1 (2022) · Clarke 1 (2022) · div." },
      drakt:{ base:"#002d62", skulder:"#e87722", sleeve:"#002d62", krave:"#002d62",
              band:"#e87722", mønster:"band-top",
              logo1:"Jayco", logo2:"AlUla", lf:"#ffffff" }
    },
    { kort:"TOT", navn:"TotalEnergies", land:"Frankrike", farger:["#c8102e","#ff6a00","#ffffff"],
      leder:"Anthony Turgis", nr:null,
      ryttere:"Turgis, Burgaudeau, Breuillard, Delbove, Jegat",
      notat:"Wildcard. Turgis som etappetruer — vant etappe i Tour 2024. Spennende brudd-lag.",
      tourEtapper:{ antall:4, noter:"Som Europcar/Direct Énergie/TotalEnergies: Calmejane 1 (2017) · Turgis 1 (2024) · div." },
      drakt:{ base:"#c8102e", skulder:"#ff6a00", sleeve:"#c8102e", krave:"#c8102e",
              band:null, mønster:"none",
              logo1:"Total", logo2:"Energies", lf:"#ffffff" }
    },
    { kort:"CRR", navn:"Caja Rural-Seguros RGA", land:"Spania", farger:["#006400","#ffd700","#ffffff"],
      leder:"Fernando Gaviria / Pelayo Sánchez", nr:null,
      ryttere:"Gaviria, Barceló, Balderstone, Berwick, Castellon, Molenaar, Nicolau, Oldani",
      notat:"Wildcard. Spansk lag. Gaviria som spurter. Hjemmebane-motivasjon i Barcelona-starten.",
      tourEtapper:{ antall:0, noter:"Tour-DEBUT 2026 — lagets og Gavirias etappeseirer i Tour (2 i 2018) var med UAE Team Emirates. Caja Rural debuterer." },
      drakt:{ base:"#006400", skulder:"#ffd700", sleeve:"#006400", krave:"#006400",
              band:null, mønster:"none",
              logo1:"Caja Rural", logo2:"", lf:"#ffd700" }
    }
  ],

  /* ---- RYTTERE ---- */
  ryttere: [
    /* ---- GC-FAVORITTER ---- */
    { navn:"Tadej Pogačar", lag:"UAE", land:"Slovenia", alder:27, rolle:"Sammenlagt", nr:1, foto:"",
      meritter:"4 Tour-seire (2020,2021,2024,2025), regjerende verdensmester",
      form:"Monstrøst form. Vant Tour de Suisse med 6 minutters og 32 sekunders margin etter kun 5 etapper — 3 etappeseire inkl. solo-raid 72 km ut og TT-seier. Har vunnet 3 Monumenter i vår (MSR, RVV, LBL). Tapte Paris-Roubaix til van Aert i to-mann sprint. Jakter historisk 5. Tour-seir.",
      resultater2026:[
        {type:"seier", ritt:"Strade Bianche"},
        {type:"seier", ritt:"Milano-Sanremo"},
        {type:"seier", ritt:"Ronde van Vlaanderen"},
        {type:"pall", ritt:"Paris-Roubaix", plass:2},
        {type:"seier", ritt:"Liège-Bastogne-Liège"},
        {type:"GC", ritt:"Tour de Suisse", plass:1},
        {type:"seier", ritt:"Tour de Suisse etappe 1"},
        {type:"seier", ritt:"Tour de Suisse etappe 4 (TT)"},
        {type:"seier", ritt:"Tour de Suisse etappe 5"}
      ],
      historie:"Mest komplette rytter for denne ruta. Angriper hvor som helst. #1 som forsvarende mester. Tour de Suisse 2026: vant på sin første deltakelse med nesten 7 minutter — nesten utropt i sveitsisk fjellterreng." },

    { navn:"Jonas Vingegaard", lag:"VLB", land:"Danmark", alder:29, rolle:"Sammenlagt", nr:11, foto:"",
      meritter:"2 Tour-seire (2022, 2023), vant Giro d'Italia 2026 (fullfører karriere-Grand Slam — alle tre Grand Tours vunnet, første siden Froome 2018)",
      form:"Dominerte Giroen 2026 (5 etappeseire, utropt i Roma). Vant Paris-Nice og Volta a Catalunya i vår. Stort spørsmål: klarer han Giro-Tour-dobbelen? Siste som slo Pogačar i Tour.",
      resultater2026:[
        {type:"seier", ritt:"Paris-Nice"},
        {type:"seier", ritt:"Volta a Catalunya"},
        {type:"GC", ritt:"Giro d'Italia", plass:1}
      ],
      historie:"Klatrer i verdensklasse. Eneste toppfavoritt fra Giroen i år. #11." },

    { navn:"Remco Evenepoel", lag:"RBH", land:"Belgia", alder:26, rolle:"Sammenlagt / tempo", nr:21, foto:"",
      meritter:"Dobbel OL-mester (Paris 2024), 3. i Tour-debut 2024",
      form:"Vant Amstel Gold Race i april. Lite ritt siden pga elbow-skade. Våpenet er tempoetappe 16; problemet er dobbel Alpe d'Huez etterpå.",
      resultater2026:[
        {type:"seier", ritt:"Amstel Gold Race"},
        {type:"pall", ritt:"Liège-Bastogne-Liège", plass:3}
      ],
      historie:"Må ta tid på tempoen og overleve Alpene. Elbow-skade i vår forstyrret forberedelsene. #21." },

    { navn:"Paul Seixas", lag:"DEC", land:"Frankrike", alder:19, rolle:"Sammenlagt (talent)", nr:null, foto:"",
      meritter:"Vant Itzulia Basque Country og La Flèche Wallonne april 2026, 2. plass Liège-Bastogne-Liège 2026",
      form:"Årets store sensasjon. 19 år — vant Itzulia suverent og sjokkerte med Flèche Wallonne-seier på Mur de Huy. 2. plass LBL bak Pogačar. Krasjet i Tour Auvergne-Rhône-Alpes men er bekreftet på start. Hvit-troye-klar favoritt.",
      resultater2026:[
        {type:"seier", ritt:"Itzulia Basque Country"},
        {type:"seier", ritt:"La Flèche Wallonne"},
        {type:"pall", ritt:"Liège-Bastogne-Liège", plass:2}
      ],
      historie:"Tidenes mest hypede franske Tour-debut (19 år). Enorm press hjemme. Dersom han overlever uka 1, er han en faktor i fjellet." },

    { navn:"Juan Ayuso", lag:"LTK", land:"Spania", alder:23, rolle:"Sammenlagt", nr:null, foto:"",
      meritter:"Topp-5 Grand Tours, Vuelta-podium",
      form:"3. plass Tour Auvergne-Rhône-Alpes 2026 — angrep på Grand Colombier (etappe 7) men ble innhentet av Del Toro 1 500 m fra toppen. God form inn mot Tour. Byttet til Lidl-Trek fra UAE — møter eks-lagkamerat Pogačar som rival. Homerace-motivasjon i Barcelona-start.",
      resultater2026:[
        {type:"GC", ritt:"Tour Auvergne-Rhône-Alpes", plass:3}
      ],
      historie:"Tidligere UAE-rytter. Sterk GC-kandidat på spansk jord i Grand Départ. Han angrep på Grand Colombier i Auvergne — men Del Toro var sterkere." },

    { navn:"Cian Uijtdebroeks", lag:"MOV", land:"Belgia", alder:23, rolle:"Sammenlagt", nr:null, foto:"",
      meritter:"Tour de Suisse-podium, stor Tour-talent",
      form:"Movistar-kaptein for GC. Ung belgier med imponerende klatreegenskaper. Underfavoritt.",
      historie:"En av syklingens største talenter. Movistar satser alt på ham i Tour." },

    { navn:"Tom Pidcock", lag:"PQ3", land:"Storbr.", alder:26, rolle:"Sammenlagt / brudd", nr:null, foto:"",
      meritter:"Vant Tour-etappe 2022 på Alpe d'Huez, OL-mester MTB, vinner Tour de Suisse",
      form:"2. plass Milano-Sanremo 2026 (slo alt unntatt Pogačar i to-mann sprint). Hadde fall i Volta a Catalunya, men bekreftet på start. Pinarello-Q36.5 wildcard. Etappe 19+20 på Alpe d'Huez passer ham perfekt.",
      resultater2026:[
        {type:"pall", ritt:"Milano-Sanremo", plass:2}
      ],
      historie:"Vant etappen på Alpe d'Huez i 2022 — kommer tilbake dit på etappe 19 og 20." },

    { navn:"Richard Carapaz", lag:"EFE", land:"Ecuador", alder:33, rolle:"Sammenlagt", nr:null, foto:"",
      meritter:"OL-mester (Tokyo 2021), Giro-vinner 2019",
      form:"2. plass Tour de Suisse 2026 — 6 minutters og 32 sekunders gap til Pogačar (veldig sterk, men Pogačar var ekstraordinær). Bevist at han er i Tour-form. EF-kaptein for GC.",
      resultater2026:[
        {type:"GC", ritt:"Tour de Suisse", plass:2}
      ],
      historie:"Ecuadors største sykkelhelt. OL-mester 2021. Giro-vinner 2019. Offensiv stil passer kuperte etapper i Tour." },

    { navn:"Florian Lipowitz", lag:"RBH", land:"Tyskland", alder:25, rolle:"Sammenlagt", nr:22, foto:"",
      meritter:"Topp-10 Grand Tours",
      form:"Red Bulls andre GC-kort ved siden av Evenepoel. Kan ta over hvis Evenepoel taper tid.",
      historie:"Jevn og sterk klatrer. Slår neppe «romvesenene», men kan ende på pallen." },

    { navn:"Lennert Van Eetvelt", lag:"LIN", land:"Belgia", alder:23, rolle:"Sammenlagt", nr:null, foto:"",
      meritter:"Vuelta-podium, topp GC-talent",
      form:"Lotto-Intermarché-kaptein for GC. En av Belgias neste store.",
      historie:"Ung og aggressiv klatrer. Outsider for pallen." },

    /* ---- KLASSIKER/SPURT ---- */
    { navn:"Mathieu van der Poel", lag:"APT", land:"Nederland", alder:31, rolle:"Klassiker / spurt / brudd", nr:null, foto:"",
      meritter:"Verdensmester 2023/2024, monumentseire (RVV, Strade Bianche, Paris-Roubaix 2023)",
      form:"Vant Omloop Het Nieuwsblad og E3 Saxo Classic (3. år på rad — første siden Boonen 2004–2007). Etappejeger. Jakter Montjuïc (etappe 1+2) og Montmartre (etappe 21). Kan ta gul tidlig.",
      resultater2026:[
        {type:"seier", ritt:"Omloop Het Nieuwsblad"},
        {type:"seier", ritt:"E3 Saxo Classic"}
      ],
      historie:"Barnebarn av Raymond Poulidor. Eksplosiv på kuperte dager." },

    { navn:"Jasper Philipsen", lag:"APT", land:"Belgia", alder:27, rolle:"Spurt", nr:null, foto:"",
      meritter:"Vant 4 Tour-etapper i 2023, grønn troye 2023",
      form:"Vant Gent-Wevelgem, Baloise Belgium Tour (sammenlagt) og Copenhagen Sprint i 2026. Verdens beste spurter ved siden av Girmay. Jakter grønn troye.",
      resultater2026:[
        {type:"seier", ritt:"Gent-Wevelgem"},
        {type:"GC", ritt:"Baloise Belgium Tour", plass:1},
        {type:"seier", ritt:"Copenhagen Sprint"}
      ],
      historie:"Alpecins rakettskyting. Trener med van der Poel — genialt duo." },

    { navn:"Mads Pedersen", lag:"LTK", land:"Danmark", alder:29, rolle:"Spurt / klassiker", nr:null, foto:"",
      meritter:"Verdensmester 2019, Ronde van Vlaanderen-vinner 2022",
      form:"Lidl-Treks spurter. Sterk på kuperte avslutninger.",
      historie:"Dansk allrounder. Jakter etapper på flate og halvkuperte dager." },

    { navn:"Biniam Girmay", lag:"NSN", land:"Eritrea", alder:24, rolle:"Spurt / klassiker", nr:null, foto:"",
      meritter:"Gent-Wevelgem 2022, Tour-etappeseier 2024, Vuelta-etapper",
      form:"NSN-kapteinen. En av verdens beste spurter. Vant over mange av de beste i 2025/2026.",
      historie:"Africas nye sykkelhelt. Tidenes beste eritreanske syklist. Utrolig explosivitet." },

    { navn:"Julian Alaphilippe", lag:"TUD", land:"Frankrike", alder:33, rolle:"Klassiker / brudd", nr:null, foto:"",
      meritter:"2x verdensmester (2020, 2021), vant Tour-etapper, Monument-podier",
      form:"Tudor wildcard. Tilbake i Tour etter å ha forlatt Quick-Step. Sulten på etapper.",
      historie:"Fransk publikumsfavoritt — ingen skaper mer spenning i brudd og i teten." },

    { navn:"Ben Healy", lag:"EFE", land:"Irland", alder:24, rolle:"Etappejeger / klatrer", nr:null, foto:"",
      meritter:"Giro-etappeseier, Strade Bianche 2024",
      form:"EFs etappetruer. Sterk i brudd og på kuperte etapper.",
      historie:"Irsk klatrepunch — passer det kuperte terrenget i Tour." },

    /* ---- NORSK INTERESSE ---- */
    { navn:"Tobias Halland Johannessen", lag:"UNO", land:"Norge", alder:26, rolle:"Sammenlagt", nr:null, foto:"", norsk:true,
      meritter:"Uno-X' GC-håp, topp-10 i Grand Tour",
      form:"2. plass etappe 6 Tour Auvergne-Rhône-Alpes 2026 (Crest-Voland) bak Van Gils. Viste god klatreform. Stygt fall tidlig i sesongen + fall i LBL, men tilbake i god form. Tvillingbror Anders er med ham på SAMME Tour-lag — første gang Johannessen-tvillingene sykler Tour de France sammen!",
      resultater2026:[
        {type:"pall", ritt:"Tour Auvergne-Rhône-Alpes etappe 6", plass:2}
      ],
      historie:"Tvilling — bror Anders Johannessen er med på Uno-X Tour-laget 2026! Norsk klatrehåp. Kan komme sterk i uka 3. Uka 3 er der GC gjøres opp i Alpene." },

    { navn:"Jonas Abrahamsen", lag:"UNO", land:"Norge", alder:30, rolle:"Brudd / klatring", nr:null, foto:"", norsk:true,
      meritter:"Tour de France etappeseier, vant Brussels Cycling Classic 2024",
      form:"Bruddspesialist som liker å gå langt fra mål. I god form inn mot Tour. Vant Brussels Classic i 2024.",
      resultater2026:[],
      historie:"Kjent for vekttap-reisen og offensiv kjøring. Norsk etappejeger #1." },

    { navn:"Søren Wærenskjold", lag:"UNO", land:"Norge", alder:25, rolle:"Spurt / tempo / klassiker", nr:null, foto:"", norsk:true,
      meritter:"Vant Baloise Belgium Tour 2024 (sammenlagt), Omloop Het Nieuwsblad",
      form:"Kraftig motor, temposterk og god spurter. Baloise Belgium Tour 2026 gikk til Philipsen (Wærenskjold vant i 2024). I god form inn mot Tour.",
      resultater2026:[],
      historie:"Stor motor — norsk spurtkort og temposterk. Kan true på flate etapper." },

    { navn:"Torstein Træen", lag:"UNO", land:"Norge", alder:30, rolle:"Klatrer / hjelper", nr:null, foto:"", norsk:true,
      meritter:"Solid fjellhjelper, etappeseier i ProSeries",
      form:"Er på Uno-X TdF-laget (ikke Bahrain som fjoråret). Klatrehjelper for Johannessen.",
      historie:"Norsk rytter — nå på Uno-X i sin WorldTour-sesong." },

    { navn:"Anders Skaarseth", lag:"UNO", land:"Norge", alder:27, rolle:"Hjelper / allrounder", nr:null, foto:"", norsk:true,
      meritter:"Solid proff i Uno-X",
      form:"Del av Uno-X TdF-troppen på 8 ryttere.",
      historie:"Norsk bidragsyter i Uno-X laget." },

    { navn:"Magnus Cort", lag:"UNO", land:"Danmark", alder:32, rolle:"Etappejeger / spurt", nr:null, foto:"",
      meritter:"2 Tour de France etappeseire (2018 og 2022), 6 Vuelta-etappeseire",
      form:"Uno-X-kaptein på flate og kuperte etapper. Erfaren etappejeger — 2 Tour-seire (2018, 2022) og 6 Vuelta-seire. Ikke forveks Vuelta- og Tour-tallene på lufta.",
      historie:"Meget populær rytter. Verdensrekordholder i antall Vuelta-etappeseire blant levende ryttere. 2 Tour-etappeseiere (2018 og 2022)." },

    { navn:"Matteo Jorgenson", lag:"VLB", land:"USA", alder:26, rolle:"Sammenlagt / hjelper", nr:null, foto:"",
      meritter:"Paris-Nice-vinner 2024, sterk GC-rytter",
      form:"Vismas 2. kaptein — kan ta over for Vingegaard hvis noe skjer. Sterkt forberedt.",
      historie:"Amerikansk revelasjon. Var i gull-form 2024. Viktig buffer for Visma." },

    /* ---- NORSK INTERESSE ---- */
    { navn:"Per Strand Hagenes", lag:"VLB", land:"Norge", alder:22, rolle:"Allrounder / hjelper", nr:null, foto:"", norsk:true,
      meritter:"Vant Antwerp Port Epic 2026, 2. plass E3 Saxo Classic 2026",
      form:"Erstattet Christophe Laporte (lårskadet) på Vismas Tour-lag. 22 år — Grand Tour-debut. Sterkt vårprogram: 2. plass E3 (bak van der Poel) og seier i Antwerp Port Epic.",
      resultater2026:[
        {type:"seier", ritt:"Antwerp Port Epic"},
        {type:"pall", ritt:"E3 Saxo Classic", plass:2}
      ],
      historie:"Norsk allrounder, ikke ren klatrer. Første Visma-akademiryktter til å nå Tour-laget. Sa selv: «Det er en enorm ære — belønning for fem års arbeid»." },

    /* ---- UAE TEAM EMIRATES ---- */
    { navn:"Isaac Del Toro", lag:"UAE", land:"Mexico", alder:22, rolle:"Sammenlagt / klatrer", nr:null, foto:"",
      meritter:"Vuelta 2025-revelasjon, vant Tour Auvergne-Rhône-Alpes 2026",
      form:"Vant Tour Auvergne-Rhône-Alpes 2026 (det nyomdøpte Critérium du Dauphiné) — to strake etappeseire i finalehelgen (Grand Colombier etappe 7 og Plateau de Solaison etappe 8). Tok gul trøye fra Luke Tuckwell (RBH) på siste dag. Kom tilbake etter lårmuskelsone fra Itzulia-krasj i april. UAEs 2. kaptein og hvit-troye-kandidat.",
      resultater2026:[
        {type:"GC", ritt:"Tour Auvergne-Rhône-Alpes", plass:1},
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 7 (Grand Colombier)"},
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 8 (Plateau de Solaison)"},
        {type:"troye", ritt:"Tour Auvergne-Rhône-Alpes", troye:"Beste unge rytter"}
      ],
      historie:"Mexicansk superstjerne in spe. 22 år. Pogačars viktigste støttespiller og arvtaker. NB: Plateau de Solaison er SAMME toppmål som Tour-etappe 15 — del Toro kjenner bakken godt!" },
    { navn:"Brandon McNulty", lag:"UAE", land:"USA", alder:27, rolle:"Allrounder / tempo / hjelper", nr:null, foto:"",
      meritter:"Sterk Grand Tour-hjelper, temposterk",
      form:"Solid UAE-hjelper for Pogačar. Kan også ta egne etapper på riktige dager.",
      historie:"Amerikansk allrounder. Viktig i fjellene og på tempo." },
    { navn:"Nils Politt", lag:"UAE", land:"Tyskland", alder:31, rolle:"Klassiker / brudd", nr:null, foto:"",
      meritter:"Paris-Roubaix-finalist, etappeseire",
      form:"Bruddspesialist og klassikerrytter for UAE.",
      historie:"Sterk på kuperte etapper. Kan angripe fra langt ut." },
    { navn:"Gianni Vermeersch", lag:"UAE", land:"Belgia", alder:31, rolle:"Klassiker / brudd", nr:null, foto:"",
      meritter:"Klassikervinner, Ronde-podium",
      form:"UAE-bruddkort. Passer de kuperte etappene.",
      historie:"Belgisk allrounder med klassiker-bakgrunn." },
    { navn:"Adam Yates", lag:"UAE", land:"Storbr.", alder:32, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Critérium du Dauphiné-vinner, topp-5 Tour",
      form:"Erfaren klatrehjelper for Pogačar. Tvillingbror av Simon Yates.",
      historie:"Bror av Simon Yates. Har vunnet Dauphiné. En av Pogačars viktigste støttespillere i fjellene." },
    { navn:"Felix Grossschartner", lag:"UAE", land:"Østerrike", alder:31, rolle:"Allrounder / hjelper", nr:null, foto:"",
      meritter:"Etappeseire i Grand Tours",
      form:"Hjelper for UAE i fjell og flat.",
      historie:"Østerriksk allrounder. Kan ta seg av arbeidet når Pogačar hviler." },
    { navn:"Tim Wellens", lag:"UAE", land:"Belgia", alder:33, rolle:"Brudd / puncheur / klatrer", nr:null, foto:"",
      meritter:"Etappeseire i alle tre Grand Tours, mange énsdagsseire",
      form:"UAE-kaptein for angrep fra brudd. Offensiv profil passer Tourruta.",
      historie:"Erfaren belgier. Kjent for langdistanseangrep." },

    /* ---- VISMA | LEASE A BIKE ---- */
    { navn:"Davide Piganzoli", lag:"VLB", land:"Italia", alder:24, rolle:"Klatrer / GC-hjelper", nr:null, foto:"",
      meritter:"8. plass Giro d'Italia 2026",
      form:"Erstattet Wout van Aert (infeksjon) på Vismas Tour-lag. Kom 8. sammenlagt i Giroen 2026 — i god klatreform.",
      resultater2026:[
        {type:"GC", ritt:"Giro d'Italia", plass:8}
      ],
      historie:"Ung italiensk klatrer. Uventet Tour-debut etter van Aerts frafall — store sko å fylle, men er godt forberedt etter Giroen." },
    { navn:"Sepp Kuss", lag:"VLB", land:"USA", alder:30, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Vuelta a España-vinner 2023",
      form:"Vingegaards klatrehjelper #1. Kan også kjøre eget løp.",
      historie:"Vant Vueltaen 2023 — bevis på at han kan vinne Grand Tours selv. Nå hjelper han Vingegaard." },
    { navn:"Bruno Armirail", lag:"VLB", land:"Frankrike", alder:31, rolle:"Hjelper / tempo", nr:null, foto:"",
      meritter:"Solid proff, etappeseirer",
      form:"Viktig hjelper for Visma i tempo og flat.",
      historie:"Fransk allrounder. Pålitelig arbeider for Visma." },
    { navn:"Victor Campenaerts", lag:"VLB", land:"Belgia", alder:33, rolle:"Tempo / hjelper", nr:null, foto:"",
      meritter:"Verdensrekord enkeltstart (2019, 55,089 km/t)",
      form:"Temposterk hjelper for Visma. Kan være farlig på etappe 16.",
      historie:"Holder verdensrekorden i enkeltstart fra 2019. En av de mest temposterke i feltet." },
    { navn:"Edoardo Affini", lag:"VLB", land:"Italia", alder:29, rolle:"Tempo / hjelper", nr:null, foto:"",
      meritter:"Topp temposjålist, etappeseirer",
      form:"Viktig hjelper for Visma på tempoetapper og i flatt terreng.",
      historie:"Italiensk temposterk hjelper. Uvurderlig i lagtempoen." },

    /* ---- RED BULL–BORA–HANSGROHE ---- */
    { navn:"Maxim Van Gils", lag:"RBH", land:"Belgia", alder:26, rolle:"Klatrer / puncheur", nr:null, foto:"",
      meritter:"Etappeseire, vant Tour Auvergne-Rhône-Alpes etappe 6 (2026)",
      form:"Vant etappe 6 av Tour Auvergne-Rhône-Alpes 2026 til Crest-Voland — foran Tobias H. Johannessen og Luke Tuckwell. I strålende form inn mot Tour. Red Bulls GC-kort etter at Landa/Meeus/Van Poppel ikke ble tatt med.",
      resultater2026:[
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 6 (Crest-Voland)"}
      ],
      historie:"Ung og eksplosiv belgier. Passer terreng med korte, bratte klatringer. Var i brudd-/angrepsform i Auvergne." },
    { navn:"Jai Hindley", lag:"RBH", land:"Australia", alder:29, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"Giro d'Italia-vinner 2022",
      form:"3. plass i Giro d'Italia 2026 (+6:25 til Vingegaard) — i god klatreform inn mot Tour. Klatrehjelper for Evenepoel, men kan ta over GC-rollen.",
      resultater2026:[
        {type:"GC", ritt:"Giro d'Italia", plass:3}
      ],
      historie:"Vant Giroen 2022. Kjent klatrer som hjelper Red Bull-laget i fjellene." },
    { navn:"Mattia Cattaneo", lag:"RBH", land:"Italia", alder:32, rolle:"Allrounder / hjelper", nr:null, foto:"",
      meritter:"Etappeseirer, solid hjelper",
      form:"Allrounder for Red Bull. Viktig i fjell og flat.",
      historie:"Italiensk allrounder. Pålitelig hjelper." },
    { navn:"Nico Denz", lag:"RBH", land:"Tyskland", alder:31, rolle:"Allrounder / etappejeger", nr:null, foto:"",
      meritter:"Vuelta-etappeseier, sterk allrounder",
      form:"Ny på Red Bull-laget for Tour. Sterk allrounder som kan ta egne sjanser på kuperte etapper.",
      historie:"Tysk allrounder. Sterk på kuperte avslutninger og i brudd." },
    { navn:"Jan Tratnik", lag:"RBH", land:"Slovenia", alder:34, rolle:"Hjelper / allrounder", nr:null, foto:"",
      meritter:"Etappeseiere, solid allrounder",
      form:"Erfaren slovensk hjelper for Red Bull. Sterk på alle terrengtyper.",
      historie:"Slovenisk veteran. Pålitelig hjelper og bruddspesialist." },
    { navn:"Tim van Dijke", lag:"RBH", land:"Nederland", alder:24, rolle:"Allrounder / spurt", nr:null, foto:"",
      meritter:"Lovende ung allrounder",
      form:"Ung nederlandsk allrounder for Red Bull. Kan hjelpe i spurter og på kuperte etapper.",
      historie:"Nederlandsk talent. Bred profil — kan spurte og klatre." },

    /* ---- LIDL–TREK ---- */
    { navn:"Mattias Skjelmose", lag:"LTK", land:"Danmark", alder:24, rolle:"Sammenlagt / klatrer", nr:null, foto:"",
      meritter:"Tour de Suisse-vinner 2023, topp klatrer",
      form:"Lidl-Treks 2. GC-kort. Ung og eksplosiv.",
      historie:"Ung dansk klatrer. Vant Tour de Suisse 2023. Skal hjelpe Ayuso men kan ta egne sjanser." },
    { navn:"Søren Kragh Andersen", lag:"LTK", land:"Danmark", alder:31, rolle:"Etappejeger / allrounder", nr:null, foto:"",
      meritter:"2 Tour de France etappeseire (2020), sterk allrounder",
      form:"Erfaren etappetruer for Lidl-Trek. Sterk på kuperte avslutninger.",
      historie:"Vant to Tour-etapper i 2020. Dansk allrounder med lang Tour-erfaring." },
    { navn:"Quinn Simmons", lag:"LTK", land:"USA", alder:24, rolle:"Puncheur / allrounder", nr:null, foto:"",
      meritter:"Etappeseirer, vant Tour Auvergne-Rhône-Alpes etappe 4 (2026)",
      form:"Vant etappe 4 av Tour Auvergne-Rhône-Alpes 2026 (Le Puy-en-Velay → Montrond-les-Bains) — sprintet fra brudd foran Finn Fisher-Black og Mattéo Vercher. I god form inn mot Tour. Kan overraske på kuperte avslutninger.",
      resultater2026:[
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 4"}
      ],
      historie:"Sterk puncheur fra USA. Passer Montjuïc-etappene og kuperte dager. Har vinnerinstinkt fra brudd." },
    { navn:"Carlos Verona", lag:"LTK", land:"Spania", alder:32, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Solid klatrehjelper, etappeseiere",
      form:"Hjemmebanemotivasjon i Barcelona. Klatrehjelper for Ayuso.",
      historie:"Spansk klatrer. Viktig i fjellene for Lidl-Trek." },
    { navn:"Toms Vacek", lag:"LTK", land:"Tsjekkia", alder:23, rolle:"Allrounder", nr:null, foto:"",
      meritter:"Ung talent, lovende allrounder",
      form:"Ung tsjekkisk rytter. Bidragsyter for Lidl-Trek.",
      historie:"Ungt talent på Lidl-Trek." },

    /* ---- DECATHLON CMA CGM ---- */
    { navn:"Tiesj Benoot", lag:"DEC", land:"Belgia", alder:31, rolle:"Klassiker / allrounder", nr:null, foto:"",
      meritter:"Strade Bianche-vinner 2019, klassikerpodier",
      form:"Allrounder for Decathlon. Kan hjelpe Seixas i fjell og ta egne sjanser.",
      historie:"Belgisk klassikerrytter. Bred profil passer mange etapper." },
    { navn:"Stefan Bissegger", lag:"DEC", land:"Sveits", alder:27, rolle:"Tempo / allrounder", nr:null, foto:"",
      meritter:"Europamester enkeltstart, etappeseirer",
      form:"Temposterk sveitsisk rytter. Farlig på etappe 16.",
      historie:"Europamester i tempo. Sterk allrounder som kan ta tempo-bonuspoeng." },
    { navn:"Daan Hoole", lag:"DEC", land:"Nederland", alder:26, rolle:"Allrounder / tempo", nr:null, foto:"",
      meritter:"Sterk allrounder, temposterk",
      form:"Nederlandsk bidragsyter for Decathlon.",
      historie:"Solid allrounder. Viktig hjelper for Seixas." },
    { navn:"Aurélien Paret-Peintre", lag:"DEC", land:"Frankrike", alder:27, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Giro-etappeseier, klatrer",
      form:"Fransk klatrer. Kan angripe i fjellene.",
      historie:"Bror av Valentin (SQS). Sterk klatrer for Decathlon." },
    { navn:"Nicolas Prodhomme", lag:"DEC", land:"Frankrike", alder:28, rolle:"Hjelper / klatrer", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Viktig hjelper for Seixas i fjellene.",
      historie:"Fransk fjellhjelper for Decathlon." },
    { navn:"Clément Riccitello", lag:"DEC", land:"Frankrike", alder:24, rolle:"Klatrer / talent", nr:null, foto:"",
      meritter:"Ung lovende klatrer",
      form:"Ungt fransk talent på Decathlon. Kan vokse gjennom rittet.",
      historie:"23 år og allerede i Tour. Stor fremtid." },

    /* ---- ALPECIN–PREMIER TECH ---- */
    { navn:"Kaden Groves", lag:"APT", land:"Australia", alder:26, rolle:"Spurt", nr:null, foto:"",
      meritter:"Vuelta-etappeseirer, sterk spurter",
      form:"Alpecins 2. spurtkort. Kan ta etapper når van der Poel ikke spurter.",
      historie:"Australsk spurter. God på flat avslutning." },
    { navn:"Axel Verstrynge", lag:"APT", land:"Belgia", alder:24, rolle:"Klatrer / brudd", nr:null, foto:"",
      meritter:"Lovende klatrer",
      form:"Alpecins klatrerkort. Kan gå i brudd på fjellsetapper.",
      historie:"Ung belgisk klatrer. Bruddspesialist." },
    { navn:"Jimmy Rickaert", lag:"APT", land:"Belgia", alder:29, rolle:"Hjelper / spurt", nr:null, foto:"",
      meritter:"Spurthjelper",
      form:"Viktig hjelper for Philipsen og van der Poel.",
      historie:"Pålitelig belgisk hjelper for Alpecin." },

    /* ---- NETCOMPANY INEOS ---- */
    { navn:"Egan Bernal", lag:"IGD", land:"Colombia", alder:28, rolle:"Sammenlagt / klatrer", nr:null, foto:"",
      meritter:"Tour de France-vinner 2019, Giro d'Italia-vinner 2021",
      form:"TILBAKE I TOUR! Vant Tour 2019 og Giro 2021, men har slitt med rygg- og helseskader etter stygg sykkelulykke i Colombia i januar 2022 (krevde komplisert ryggoperasjon). Nå bekreftet på INEOS-laget til Tour de France 2026 — en av de mest emosjonelle historiene i dette Tour.",
      resultater2026:[],
      historie:"Colombiansk legende. Yngste Tour-vinner siden 1983. Ulykken i 2022 (kolliderte med en buss i trening) var dramatisk — legen sa det var nær livstruende. Hans comeback er en av syklingens store historier. NB: Nå 28 år — kan han vinne igjen?" },
    { navn:"Thymen Arensman", lag:"IGD", land:"Nederland", alder:25, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"Vuelta-etappeseirer, 4. plass Giro d'Italia 2026",
      form:"4. plass i Giro d'Italia 2026 (+7:02 til Vingegaard) — bevist at han er Grand Tour-klasse. INEOS-kaptein for GC.",
      resultater2026:[
        {type:"GC", ritt:"Giro d'Italia", plass:4}
      ],
      historie:"Nederlandsk klatrer. Vant etapper i Vueltaen. Ambisiøs GC-kandidat." },
    { navn:"Filippo Ganna", lag:"IGD", land:"Italia", alder:29, rolle:"Tempo-spesialist", nr:null, foto:"",
      meritter:"4x verdensmester enkeltstart, olympisk mester",
      form:"Farligste mann i tempoet (etappe 16). Kan ta gul trøye tidlig på lagtempo.",
      historie:"Verdens beste temposyklist. Holder ikke i fjellet, men etappe 16 er hans store sjanse." },
    { navn:"Carlos Rodríguez", lag:"IGD", land:"Spania", alder:24, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"Topp-5 Tour de France, etappeseirer",
      form:"INEOS' GC-kaptein. Ung spansk klatrer med stor fremtid.",
      historie:"24 år og allerede topp-5 i Tour. Spansk klatrehåp for INEOS." },
    { navn:"Kévin Vauquelin", lag:"IGD", land:"Frankrike", alder:25, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Kritérium du Dauphiné-etappe, sterk klatrer",
      form:"Fransk klatrer for INEOS. Etappejeger i fjellet.",
      historie:"Ung fransk klatrer med store ambisjoner." },
    { navn:"Michał Kwiatkowski", lag:"IGD", land:"Polen", alder:34, rolle:"Klassiker / allrounder / hjelper", nr:null, foto:"",
      meritter:"Verdensmester 2014, Milano-Sanremo-vinner 2017",
      form:"Erfaren INEOS-hjelper. Kan ta egne sjanser på kuperte etapper.",
      historie:"Verdensmester 2014. Veteran med imponerende merittliste." },
    { navn:"Jérémy Godon", lag:"IGD", land:"Frankrike", alder:27, rolle:"Hjelper", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Viktig bidragsyter for INEOS.",
      historie:"Fransk hjelper for INEOS." },

    /* ---- EF EDUCATION–EASYPOST ---- */
    { navn:"Kasper Asgreen", lag:"EFE", land:"Danmark", alder:31, rolle:"Klassiker / tempo", nr:null, foto:"",
      meritter:"Ronde van Vlaanderen-vinner 2021, klassikerspesialist",
      form:"EFs klassiker- og tempokort. Farlig på kuperte avslutninger.",
      historie:"Vant Ronde 2021. Sterk på alle typer terreng." },
    { navn:"Alex Baudin", lag:"EFE", land:"Frankrike", alder:25, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Seier Tour Auvergne-Rhône-Alpes etappe 1 (2026)",
      form:"Vant etappe 1 i Tour Auvergne-Rhône-Alpes 2026 (tidl. Critérium du Dauphiné) — 28 km solo-angrep etter 120 km i brudd. Den største seieren i karrieren. I knallform inn mot Tour.",
      resultater2026:[
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 1"}
      ],
      historie:"Ung fransk klatrer og bruddspesialist. Vant solo på etappe 1 av det nyomdøpte pre-Tour-rittet." },

    /* ---- GROUPAMA–FDJ UNITED ---- */
    { navn:"Romain Grégoire", lag:"GFC", land:"Frankrike", alder:22, rolle:"Allrounder / klatrer", nr:null, foto:"",
      meritter:"Etappeseier Tour de Suisse 2026, etappeseier Tour de France 2025",
      form:"Vant etappe 2 i Tour de Suisse 2026 — holdt unna for Pogačar. Toppet poengklassementet i TdS. FDJ-unge stjerne. Kan overraske på kuperte avslutninger og er i god form.",
      resultater2026:[
        {type:"seier", ritt:"Tour de Suisse etappe 2"}
      ],
      historie:"22 år — Frankrikes neste store. Bred profil og mye driv. Vant etappe i Tour de France 2025 — venter på å eksplodere i 2026." },
    { navn:"Valentin Madouas", lag:"GFC", land:"Frankrike", alder:31, rolle:"Klassiker / allrounder", nr:null, foto:"",
      meritter:"Klassikerpodier, sterk allrounder",
      form:"FDJ-allrounder. Kan hjelpe og ta egne sjanser.",
      historie:"Sterk klassiker- og allrounderprofil." },
    { navn:"Kevin Martin-Guyonnet", lag:"GFC", land:"Frankrike", alder:26, rolle:"Hjelper", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Viktig hjelper for FDJ.",
      historie:"Bidragsyter for Groupama-FDJ." },

    /* ---- MOVISTAR TEAM ---- */
    { navn:"Pablo Castrillo", lag:"MOV", land:"Spania", alder:25, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Solid klatrer",
      form:"Klatrehjelper for Uijtdebroeks.",
      historie:"Spansk klatrer for Movistar." },
    { navn:"Georg Hessmann", lag:"MOV", land:"Tyskland", alder:25, rolle:"Allrounder / hjelper", nr:null, foto:"",
      meritter:"Solid allrounder",
      form:"Tysker i Movistar-troppen. Bidragsyter.",
      historie:"Tysk allrounder for Movistar." },
    { navn:"Carlos Rubio", lag:"MOV", land:"Spania", alder:24, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Klatrer",
      form:"Hjelper for Uijtdebroeks i fjellene.",
      historie:"Spansk klatrer for Movistar." },

    /* ---- SOUDAL–QUICK-STEP ---- */
    { navn:"Dylan van Baarle", lag:"SOQ", land:"Nederland", alder:33, rolle:"Klassiker / allrounder", nr:null, foto:"",
      meritter:"Paris-Roubaix-vinner 2022, klassikerspesialist",
      form:"Sterk klassikerrytter for SQS. Kan angripe fra brudd.",
      historie:"Vant Paris-Roubaix 2022. Bred profil." },
    { navn:"Tim Merlier", lag:"SOQ", land:"Belgia", alder:33, rolle:"Spurt", nr:null, foto:"",
      meritter:"Giro-etappeseirer, sterk spurter",
      form:"SQS sin spurtkaptein. Jakter etapper mot Philipsen, Girmay og De Lie.",
      historie:"Belgisk rakett-spurter. Rask på flat avslutning." },
    { navn:"Valentin Paret-Peintre", lag:"SOQ", land:"Frankrike", alder:28, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Etappeseirer, klatrer",
      form:"SQS sin klatrerkaptein i brudd.",
      historie:"Bror av Aurélien (Decathlon). Sterk klatrer og etappejeger." },
    { navn:"Bert Van Lerberghe", lag:"SOQ", land:"Belgia", alder:31, rolle:"Klassiker / brudd", nr:null, foto:"",
      meritter:"Paris-Roubaix-finalist, sterk klassikerrytter",
      form:"Kan angripe fra brudd på kuperte etapper.",
      historie:"Belgisk klassikerrytter. Sterk motor." },
    { navn:"Jasper Stuyven", lag:"SOQ", land:"Belgia", alder:33, rolle:"Klassiker / etappejeger", nr:null, foto:"",
      meritter:"Milano-Sanremo-vinner 2021, klassikerpodier",
      form:"Erfaren SQS-klassikerrytter. Jakter etapper.",
      historie:"Vant Milano-Sanremo 2021. Passer kuperte avslutninger." },
    { navn:"Louis Vervaeke", lag:"SOQ", land:"Belgia", alder:31, rolle:"Hjelper / klatrer", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Viktig klatrehjelper for Landa.",
      historie:"Erfaren belgisk hjelper for SQS." },
    { navn:"Ilan Van Wilder", lag:"SOQ", land:"Belgia", alder:24, rolle:"Klatrer / allrounder", nr:null, foto:"",
      meritter:"Lovende klatrer, etappeseirer",
      form:"Ung SQS-klatrer. Kan overraske på rette dager.",
      historie:"Ung belgisk klatrer med stor potensial." },

    /* ---- BAHRAIN VICTORIOUS ---- */
    { navn:"Lenny Martínez", lag:"TBV", land:"Frankrike", alder:23, rolle:"Klatrer / GC-talent", nr:null, foto:"",
      meritter:"Tour-etappeseier 2024, Dauphiné-etapper",
      form:"Bahrains GC-kaptein. 23 år og allerede etappevinner i Tour.",
      historie:"Vant Tour-etappe 2024. Stor fremtid. Bahrains fremste GC-håp." },
    { navn:"Matej Mohorič", lag:"TBV", land:"Slovenia", alder:31, rolle:"Brudd / klassiker", nr:null, foto:"",
      meritter:"Tour-etappeseirer (incl. 2021), Milano-Sanremo-finalist",
      form:"Langdistansebrudd-spesialist. Kan angripe fra 100+ km ut.",
      historie:"Kjent for dristige solobrudd. Vant Tour-etapper i 2021." },
    { navn:"Antonio Tiberi", lag:"TBV", land:"Italia", alder:24, rolle:"Klatrer / GC-talent", nr:null, foto:"",
      meritter:"Lovende Grand Tour-klatrer",
      form:"Ung italiensk GC-kaptein for Bahrain.",
      historie:"24 år med store ambisjoner. Bahrains fremtid i Grand Tours." },
    { navn:"Phil Bauhaus", lag:"TBV", land:"Tyskland", alder:28, rolle:"Spurt", nr:null, foto:"",
      meritter:"Giro- og Vuelta-etappeseirer, sterk spurter",
      form:"Bahrains spurtkort på flate etapper. Vant etapper i Giro og Vuelta. Kan overraske på de rene spurtdagene.",
      historie:"Tysk kraftspurter. Vant etapper i alle tre Grand Tours. Ny BRN-spurter." },
    { navn:"Damiano Caruso", lag:"TBV", land:"Italia", alder:37, rolle:"Klatrer / GC-hjelper", nr:null, foto:"",
      meritter:"2. plass Giro d'Italia 2021, etappeseier Grand Tours",
      form:"Veteran klatrehjelper for Bahrain. Ble 2. i Giro 2021 — bevist Grand Tour-nivå.",
      historie:"37 år og fortsatt proff. Italiensk klatrer med imponerende Grand Tour-historikk." },

    /* ---- TEAM PICNIC POSTNL ---- */
    { navn:"Warren Barguil", lag:"PIC", land:"Frankrike", alder:35, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Polkadot-troye Tour 2017, 2 Tour-etappeseiere",
      form:"Erfaren etappetruer for Picnic PostNL. Elsker fjellene.",
      historie:"Vant klatretrøya og to etapper i Tour 2017. Sterk klatrer med nese for etappeseiere." },
    { navn:"Lars van den Berg", lag:"PIC", land:"Nederland", alder:26, rolle:"Allrounder / spurt", nr:null, foto:"",
      meritter:"Etappeseirer, allrounder",
      form:"Nederlandsk allrounder for Picnic PostNL.",
      historie:"Sterk allrounder. Kan spurte på kuperte avslutninger." },

    /* ---- LOTTO–INTERMARCHÉ ---- */
    { navn:"Arnaud De Lie", lag:"LIN", land:"Belgia", alder:23, rolle:"Spurt / puncheur", nr:null, foto:"",
      meritter:"Mange énsdagsseire, sterk spurter",
      form:"Lotto sin spurtkaptein. 23 år og allerede en av de beste på kuperte avslutninger.",
      historie:"Belgisk kraftspurter. Elsker kuperte avslutninger. Kan slå VdP og Philipsen på riktig dag." },
    { navn:"Georg Zimmermann", lag:"LIN", land:"Tyskland", alder:28, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Tour-etappeseier, klatrespesialist",
      form:"Lotto sin klatrekaptein. Kan angripe fra brudd.",
      historie:"Vant Tour-etappe. Sterk tysk klatrer." },
    { navn:"Senne Berckmoes", lag:"LIN", land:"Belgia", alder:24, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Lovende klatrer",
      form:"Ung klatrehjelper for Van Eetvelt.",
      historie:"Ung belgisk klatrer i Lotto-troppen." },
    { navn:"Corentin Veistroffer", lag:"LIN", land:"Frankrike", alder:25, rolle:"Hjelper", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Bidragsyter for Lotto.",
      historie:"Fransk hjelper for Lotto-Intermarché." },

    /* ---- NSN CYCLING TEAM ---- */
    { navn:"Tom Van Asbroeck", lag:"NSN", land:"Belgia", alder:33, rolle:"Klassiker / allrounder", nr:null, foto:"",
      meritter:"Etappeseirer, klassikerspesialist",
      form:"Erfaren belgisk allrounder og klassikerspesialist. Bidragsyter for Girmay i NSN.",
      historie:"Belgisk veteran med bredde på alle terrengtyper. Har lang World Tour-erfaring." },
    { navn:"Marco Frigo", lag:"NSN", land:"Italia", alder:25, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Lovende italiensk klatrer",
      form:"Ung italiensk klatrer i NSN-troppen. Kan angripe fra brudd på fjellsetapper.",
      historie:"Italiensk talent med klatrespesialitet." },
    { navn:"Matîs Louvel", lag:"NSN", land:"Frankrike", alder:24, rolle:"Spurt / allrounder", nr:null, foto:"",
      meritter:"Etappeseirer, ung spurter",
      form:"Ung fransk spurter og allrounder for NSN. Kan ta sjanser på kuperte avslutninger.",
      historie:"Ungt fransk talent. Bred profil fra sprint til klatring." },
    { navn:"Krists Neilands", lag:"NSN", land:"Latvia", alder:32, rolle:"Allrounder / brudd", nr:null, foto:"",
      meritter:"Etappeseirer, erfaren allrounder",
      form:"Latvisk allrounder for NSN. Sterk i brudd og på lengre dager.",
      historie:"Latvia sin beste syklist i feltet. Erfaren allrounder med bred kompetanse." },
    { navn:"George Bennett", lag:"NSN", land:"New Zealand", alder:36, rolle:"Klatrer / GC-hjelper", nr:null, foto:"",
      meritter:"Topp-10 Grand Tours, etappeseirer",
      form:"NB: Dette er George Bennett (NZL) — ikke Sam Bennett (IRL, pensjonert). Erfaren klatrehjelper og GC-støtte for Girmay.",
      historie:"Nyzealandsk klatrer med lang Grand Tour-erfaring. Var på Visma, nå NSN." },
    { navn:"Lewis Askey", lag:"NSN", land:"Storbr.", alder:23, rolle:"Klatrer / allrounder", nr:null, foto:"",
      meritter:"Lovende ung britisk klatrer",
      form:"Ung britisk klatrer i NSN-troppen. NB: Heter Lewis, ikke Matthew.",
      historie:"Britisk talent på NSN Cycling Team." },
    { navn:"Jake Stewart", lag:"NSN", land:"Storbr.", alder:25, rolle:"Spurt / puncheur", nr:null, foto:"",
      meritter:"Etappeseirer, sterk spurter",
      form:"Britisk spurter og puncheur for NSN. NB: Heter Jake, ikke Chris.",
      historie:"Britisk spurter. Sterk på kuperte avslutninger." },

    /* ---- UNO-X MOBILITY (tillegg) ---- */
    { navn:"Anders Johannessen", lag:"UNO", land:"Norge", alder:26, rolle:"Klatrer / hjelper", nr:null, foto:"", norsk:true,
      meritter:"Proff på Uno-X Mobility",
      form:"TVILLINGBROR til Tobias Halland Johannessen — begge er med på Uno-X Tour-lag 2026! Første gang begge tvillingene sykler Tour de France. Anders er en solid klatrer og allrounder.",
      resultater2026:[],
      historie:"Tvilling — bror Tobias Halland Johannessen er GC-kapteinen for Uno-X. De to brødrene fra Stavanger er begge proffyklist og nå i SAMME Tour de France-lag. Unik norsk Tour-historie!" },
    { navn:"Niklas Charmig", lag:"UNO", land:"Danmark", alder:28, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Etappeseirer, vant Tour Auvergne-Rhône-Alpes etappe 2 (2026)",
      form:"Vant etappe 2 av Tour Auvergne-Rhône-Alpes 2026 (Saint-Martin-le-Vinoux → Le Puy-en-Velay) — Uno-X sin store etappejeger. I knallform. Offensiv profil liker å angripe tidlig.",
      resultater2026:[
        {type:"seier", ritt:"Tour Auvergne-Rhône-Alpes etappe 2"}
      ],
      historie:"Dansk klatrer og bruddspesialist for Uno-X. Offensiv profil — liker å angripe tidlig og holde lenge." },

    /* ---- XDS ASTANA TEAM ---- */
    { navn:"Sergio Higuita", lag:"AST", land:"Colombia", alder:29, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"Etappeseirer, sterk klatrer",
      form:"Astanas GC-kaptein. Sterk kolombianisk klatrer.",
      historie:"Sterk Grand Tour-rytter. Kolombianisk klatrer med ambisjoner." },
    { navn:"Clément Champoussin", lag:"AST", land:"Frankrike", alder:27, rolle:"Klatrer / brudd", nr:null, foto:"",
      meritter:"Vuelta-etappeseier, klatrer",
      form:"Fransk klatrer for Astana. Kan angripe fra brudd.",
      historie:"Vant Vuelta-etappe. Sterk på lange klatringer." },
    { navn:"Harold Tejada", lag:"AST", land:"Colombia", alder:29, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Grand Tour-hjelper, klatrer",
      form:"Kolombianisk klatrehjelper for Astana.",
      historie:"Solid klatrehjelper for Higuita og Astana." },
    { navn:"Mike Teunissen", lag:"AST", land:"Nederland", alder:33, rolle:"Klassiker / allrounder", nr:null, foto:"",
      meritter:"Tour de France etappe 1 2019-vinner (gul trøye!), Tour des Fjords-vinner",
      form:"Erfaren allrounder. Kan ta sjansen på kuperte etapper.",
      historie:"Vant første etappe i Tour 2019 og tok gul trøye. Nå på Astana." },

    /* ---- COFIDIS ---- */
    { navn:"Alex Aranburu", lag:"COF", land:"Spania", alder:30, rolle:"Puncheur / klassiker", nr:null, foto:"",
      meritter:"Klassikerpodier, sterk puncheur",
      form:"Spansk puncheur for Cofidis. Kan overraske på kuperte avslutninger.",
      historie:"Baskisk puncheur. Sterk på korte, bratte avslutninger." },
    { navn:"Emanuel Buchmann", lag:"COF", land:"Tyskland", alder:33, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"4. plass Tour de France 2019",
      form:"Erfaren klatrer for Cofidis. Kan kjøre GC.",
      historie:"Ble 4. i Tour 2019. Erfaren tysk klatrer." },
    { navn:"Ion Izagirre", lag:"COF", land:"Spania", alder:36, rolle:"Etappejeger / klatrer", nr:null, foto:"",
      meritter:"Tour-etappeseier, Vuelta-etapper",
      form:"Erfaren etappetruer. Liker å angripe fra brudd.",
      historie:"Baskisk veteran. Lang erfaring med etappeseirer i alle tre Grand Tours." },

    /* ---- TUDOR PRO CYCLING ---- */
    { navn:"Stefan Küng", lag:"TUD", land:"Sveits", alder:31, rolle:"Tempo-spesialist / klassiker", nr:null, foto:"",
      meritter:"Sveitsisk mester, sterk temposyklist og klassiker",
      form:"Sterk på tempoet. Farlig på etappe 16.",
      historie:"Sveitsisk allrounder. Sterk tempo og klassiker-profil. Tudor-lagkaptein." },
    { navn:"Michael Storer", lag:"TUD", land:"Australia", alder:28, rolle:"Klatrer / etappejeger", nr:null, foto:"",
      meritter:"Vuelta-etappeseirer, 7. plass Giro d'Italia 2026",
      form:"7. plass GC i Giro d'Italia 2026 — i god form fra Giroen. Australsk klatrer for Tudor. Kan angripe fra brudd.",
      resultater2026:[
        {type:"GC", ritt:"Giro d'Italia", plass:7}
      ],
      historie:"Sterk klatrer fra Australia. Elsker lengre solobrudd i fjellene." },
    { navn:"Matteo Trentin", lag:"TUD", land:"Italia", alder:36, rolle:"Klassiker / etappejeger", nr:null, foto:"",
      meritter:"Mange Tour-etappeseire, klassiker-podier, europamester 2017",
      form:"Veteran etappetruer. Sterk på kuperte avslutninger.",
      historie:"Italias store klassikerveteran. Europamester 2017. Mange etappeseirer i Tour." },
    { navn:"Nick Pluimers", lag:"TUD", land:"Nederland", alder:25, rolle:"Klatrer / allrounder", nr:null, foto:"",
      meritter:"Ung lovende klatrer",
      form:"Nederlandsk klatrer for Tudor.",
      historie:"Ung talent i Tudor-troppen." },

    /* ---- PINARELLO–Q36.5 ---- */
    { navn:"Ben Hermans", lag:"PQ3", land:"Belgia", alder:38, rolle:"Klatrer / brudd", nr:null, foto:"",
      meritter:"Etappeseirer i Grand Tours, erfaren klatrer",
      form:"Erfaren belgisk klatrer og bruddspesialist. Kan angripe fra langt ut på fjellsetapper. Hjelper Pidcock og tar egne sjanser.",
      historie:"38 år og fortsatt på WorldTour-nivå. Veteran klatrer med lang erfaring." },
    { navn:"Xabier Azparren", lag:"PQ3", land:"Spania", alder:25, rolle:"Klatrer / allrounder", nr:null, foto:"",
      meritter:"Lovende klatrer",
      form:"Spansk klatrer for Pinarello-Q36.5.",
      historie:"Ung spansk klatrer. Hjelper Pidcock i fjellene." },
    { navn:"Brent Van Moer", lag:"PQ3", land:"Belgia", alder:27, rolle:"Brudd / allrounder", nr:null, foto:"",
      meritter:"Etappeseirer, bruddspesialist",
      form:"Belgisk bruddspesialist for Pinarello-Q36.5.",
      historie:"Sterk motor og offensiv profil. Elsker å gå tidlig." },
    { navn:"Fred Wright", lag:"PQ3", land:"Storbr.", alder:25, rolle:"Allrounder / brudd", nr:null, foto:"",
      meritter:"Etappeseier, sterk allrounder",
      form:"Britisk allrounder. Kan hjelpe Pidcock og ta egne sjanser.",
      historie:"Ung britisk allrounder. Bred profil." },

    /* ---- TEAM JAYCO ALULA ---- */
    { navn:"Luke Durbridge", lag:"JAY", land:"Australia", alder:36, rolle:"Tempo / allrounder", nr:null, foto:"",
      meritter:"Etappeseirer, sterk temposjålist",
      form:"Erfaren australsk tempoallrounder. Sterk støtte for laget — spesielt på lagtempo og flate/kuperte etapper.",
      historie:"Australsk veteran. Temposterk og bred profil. Lang Grand Tour-erfaring." },
    { navn:"Felix Engelhardt", lag:"JAY", land:"Tyskland", alder:25, rolle:"Klatrer / allrounder", nr:null, foto:"",
      meritter:"Lovende ung tysk klatrer",
      form:"Ung tysk klatrer i Jayco-troppen. Kan hjelpe O'Connor og Plapp i fjellet.",
      historie:"Tysk talent med klatrespesialitet. En av Jaycos fremtidshåp." },
    { navn:"Kelland O'Brien", lag:"JAY", land:"Australia", alder:25, rolle:"Allrounder / hjelper", nr:null, foto:"",
      meritter:"Etappeseirer, allrounder",
      form:"Australsk allrounder for Jayco. Solid bidragsyter i brudd og flat.",
      historie:"Australsk allrounder med bred profil. Viktig hjelper for Plapp og O'Connor." },
    { navn:"Michael Matthews", lag:"JAY", land:"Australia", alder:35, rolle:"Klassiker / spurt", nr:null, foto:"",
      meritter:"7 Tour-etappeseire, Milano-Sanremo-finalist, grønn trøye 2017",
      form:"Erfaren spurter og klassiker-truer. 35 år men fortsatt i toppform.",
      historie:"Australsk legende. Vant 7 Tour-etapper. Grønn trøye 2017. Sterk på kuperte avslutninger." },
    { navn:"Ben O'Connor", lag:"JAY", land:"Australia", alder:30, rolle:"Klatrer / GC", nr:null, foto:"",
      meritter:"4. plass Tour 2021, etappeseirer",
      form:"Jaycos GC-kaptein. Sterk klatrer med ambisjoner om pallen.",
      historie:"Ble 4. i Tour 2021. Australsk klatrer med stor kapasitet i fjellene." },
    { navn:"Luke Plapp", lag:"JAY", land:"Australia", alder:24, rolle:"Allrounder / tempo / GC-talent", nr:null, foto:"",
      meritter:"Sterk allrounder, temposterk",
      form:"Ung australsk GC-håp. Sterk på tempo og klatring.",
      historie:"24 år og allerede bredt anerkjent talent. Kan bli stor GC-rytter." },
    { navn:"Pascal Ackermann", lag:"JAY", land:"Tyskland", alder:31, rolle:"Spurt", nr:null, foto:"",
      meritter:"Etappeseirer i Grand Tours",
      form:"Jaycos spurtkort. Kan ta etapper på de flate dagene.",
      historie:"Tysk spurter. Sterk på flat avslutning." },
    { navn:"Mauro Schmid", lag:"JAY", land:"Sveits", alder:26, rolle:"Allrounder / brudd", nr:null, foto:"",
      meritter:"Giro-etappeseier, allrounder",
      form:"Sveitsisk allrounder for Jayco. Kan gå i brudd.",
      historie:"Sterk allrounder. Vant Giro-etappe. Bred profil." },

    /* ---- TOTALENERGIES ---- */
    { navn:"Anthony Turgis", lag:"TOT", land:"Frankrike", alder:31, rolle:"Etappejeger / puncheur", nr:null, foto:"",
      meritter:"Tour-etappeseier 2024, sterk puncheur",
      form:"TotalEnergies sin etappehåp. Vant Tour-etappe i 2024.",
      historie:"Vant etappe i Tour 2024. Sterk puncheur fra Frankrike." },
    { navn:"Thomas Burgaudeau", lag:"TOT", land:"Frankrike", alder:27, rolle:"Klatrer / hjelper", nr:null, foto:"",
      meritter:"Klatrer",
      form:"Klatrehjelper for TotalEnergies.",
      historie:"Fransk klatrer og hjelper." },
    { navn:"Alexys Breuillard", lag:"TOT", land:"Frankrike", alder:27, rolle:"Hjelper", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Bidragsyter for TotalEnergies.",
      historie:"Fransk hjelper for TotalEnergies." },
    { navn:"Nans Jegat", lag:"TOT", land:"Frankrike", alder:24, rolle:"Hjelper / talent", nr:null, foto:"",
      meritter:"Ung talent",
      form:"Ung fransk bidragsyter.",
      historie:"Ungt fransk talent på TotalEnergies." },

    /* ---- CAJA RURAL–SEGUROS RGA ---- */
    { navn:"Alex Molenaar", lag:"CRR", land:"Nederland", alder:26, rolle:"Puncheur / etappejeger", nr:null, foto:"",
      meritter:"2. plass Gran Premio Miguel Indurain 2025",
      form:"Caja Rurals nøkkelrytter til lagets første Tour. Komplett og eksplosiv på korte klatringer og kuperte avslutninger. 2. plass GP Marseillaise og 3. plass Tour du Finistère i 2026.",
      resultater2026:[
        {type:"pall", ritt:"GP Cycliste la Marseillaise", plass:2},
        {type:"pall", ritt:"Tour du Finistère", plass:3}
      ],
      historie:"Nederlandsk puncheur fra Rotterdam, født 1999. Lang vei via Monkey Town og Burgos-BH til Caja Rural — og nå plutselig Tour de France. Sa selv han ikke hadde trodd det mulig for to år siden." },
    { navn:"Fernando Gaviria", lag:"CRR", land:"Colombia", alder:31, rolle:"Spurt", nr:null, foto:"",
      meritter:"2 Tour-etappeseire (2018: etappe 1 og 4), Giro-etapper",
      form:"Caja Rurals spurtkaptein. Klar for etapper på flatere dager.",
      historie:"Vant 2 Tour-etapper i 2018 (debut-Tour, ikke 4 i 2017). Kolombisk spurter med lang Grand Tour-erfaring." },
    { navn:"Héctor Barceló", lag:"CRR", land:"Spania", alder:27, rolle:"Spurt / puncheur", nr:null, foto:"",
      meritter:"Etappeseirer, sterk spurter",
      form:"Spansk spurter for Caja Rural.",
      historie:"Ung spansk spurter. Hjemmebane-motivasjon." },
    { navn:"Ben Balderstone", lag:"CRR", land:"Australia", alder:25, rolle:"Allrounder", nr:null, foto:"",
      meritter:"Allrounder",
      form:"Australsk bidragsyter for Caja Rural.",
      historie:"Australsk allrounder på Caja Rural." },
    { navn:"Clint Berwick", lag:"CRR", land:"Australia", alder:29, rolle:"Allrounder / hjelper", nr:null, foto:"",
      meritter:"Solid hjelper",
      form:"Bidragsyter for Caja Rural.",
      historie:"Australsk allrounder og hjelper." },
    { navn:"Simone Oldani", lag:"CRR", land:"Italia", alder:27, rolle:"Spurt / puncheur", nr:null, foto:"",
      meritter:"Etappeseirer",
      form:"Italiensk spurter/puncheur for Caja Rural.",
      historie:"Sterk på kuperte avslutninger." }
  ],

  /* ---- STATISTIKK & HISTORIER ---- */
  statistikk: [
    { tittel:"Pogačar dominerte Sveits", tekst:"Tour de Suisse 2026 (17–21 juni): Pogačar vant med 6 minutters og 32 sekunders margin etter kun 5 etapper — 3 etappeseire inkl. 72 km solo på etappe 1 og TT-seier. Carapaz nr. 2 (EF), Vacek nr. 3 (LTK). Van Wilder ble 5. (SQS). Vervaeke vant klatretrøya." },
    { tittel:"Del Toro tok Dauphiné (nytt navn)", tekst:"Critérium du Dauphiné heter nå Tour Auvergne-Rhône-Alpes (7–14 juni 2026). Isaac del Toro (UAE) vant — to strake etappeseire i finalehelgen (Grand Colombier + Plateau de Solaison). Tuckwell (RBH) 2., Ayuso (LTK) 3. Etappeseiere: Baudin (EF), Charmig (UNO), Visma TTT, Simmons (LTK), Van Aert (VLB), Van Gils (RBH)." },
    { tittel:"Johannessen-tvillingene", tekst:"Tobias Halland og Anders Johannessen, tvillingbrødre fra Stavanger, sykler Tour de France 2026 SAMMEN på Uno-X Mobility. Første gang de er i samme Grand Tour-lag. Tobias er GC-kapteinen — Anders er hjelper og klatrer." },
    { tittel:"Bernal er tilbake", tekst:"Egan Bernal (INEOS) er tilbake i Tour de France! Vant Tour 2019 (25 år, yngste vinner siden 1983) og Giro 2021. I januar 2022 kolliderte han med en buss under trening i Colombia — krevde nødsoperasjon, nær livstruende. Hans comeback er en av syklingens store historier." },
    { tittel:"Barcelona-første", tekst:"Første gang Grand Départ er i Barcelona, og sørligste startby noensinne. Tredje gang i Spania (San Sebastián 1992, Bilbao 2023)." },
    { tittel:"Lagtempo-comeback", tekst:"Første åpnings-lagtempo siden 1971. Spesialregel: hver rytters individuelle tid teller, ikke 5.-manns tid." },
    { tittel:"Dobbel Alpe d'Huez", tekst:"Første gang i historien at Alpe d'Huez er mål to dager på rad (etappe 19 og 20). Pidcock vant der i 2022 — begge dagene passer ham." },
    { tittel:"Galibier på topp", tekst:"Col du Galibier (2 642 m) er rittets høyeste punkt, på dronningetappe 20." },
    { tittel:"Norsk WorldTour-lag", tekst:"Uno-X Mobility rykket opp til WorldTour for 2026. 8 ryttere i Tour — flertallet er norske. Abrahamsen vant Brussels Classic i 2024. Wærenskjold vant Baloise Belgium Tour i 2024 (2026 gikk til Philipsen). Beste norske forberedelse noensinne." },
    { tittel:"Pogačars jakt", tekst:"Tadej Pogačar jakter en rekordtangerende 5. Tour-seier. Fire ryttere har nådd 5: Merckx (1969–74), Hinault (1978–85), Anquetil (1957–64) og Indurain (1991–95, som eneste konsekutiv). Armstrong vant 7 men er fradømt alt. LeMond vant 3 (1986, 1989, 1990), Ullrich kun 1 (1997)." },
    { tittel:"Giro-Tour-dobbelen", tekst:"Vingegaard vant Giroen 2026 og forsøker den sjeldne Giro-Tour-dobbelen. 8 ryttere i historien har klart det: Coppi (1949/52), Anquetil (1964), Merckx (1970/72/74), Hinault (1982/85), Roche (1987), Induráin (1992/93), Pantani (1998) og Pogačar (2024). Vingegaard kan bli nr. 9." },
    { tittel:"Lite tempo", tekst:"Kun ~46 tempokilometer totalt (lagtempo + ett enkelttempo). Favoriserer rene klatrere. Evenepoel trenger MAKS uttelling på etappe 16." },
    { tittel:"Wout van Aert IKKE med", tekst:"Van Aert er ikke på Vismas Tour-lag i 2026 — stort fravær. Jorgenson, Kuss og Armirail som backup for Vingegaard." },
    { tittel:"Ayuso byttet lag", tekst:"Juan Ayuso forlot UAE og signerte med Lidl-Trek til 2026 — stor overgang. Nå møter han eks-lagkamerat Pogačar som rival." },
    { tittel:"23 lag i Tour", tekst:"5 ProTeam-lag i tillegg til 18 WorldTour-lag: Tudor (Alaphilippe), Pinarello-Q36.5 (Pidcock), TotalEnergies, Caja Rural og Cofidis. Jayco AlUla er WorldTour og trenger ikke wildcard. Pidcock er mørkt hest." },
    { tittel:"Seixas — 19 år", tekst:"Paul Seixas er født 2006 og debuterer i Tour som 19-åring. Vant Itzulia Basque Country i april 2026. Hvit-troye-favoritt. Enorm press fra Frankrike." }
  ],

  /* ---- TRØYENE ---- */
  troyer: [
    { farge:"#f5d000", navn:"Gul (maillot jaune)", forklaring:"Sammenlagtleder (lavest samlet tid)." },
    { farge:"#1aa84a", navn:"Grønn (poeng)", forklaring:"Poengtrøya — flest spurtpoeng, oftest spurterne. Philipsen vs. Girmay." },
    { farge:"#d2002e", navn:"Prikket (klatring)", forklaring:"Bestes klatrer — poeng på toppene («King of the Mountains»)." },
    { farge:"#ffffff", navn:"Hvit (ungdom)", forklaring:"Beste rytter under 26 år sammenlagt. Seixas er klar favoritt." }
  ],

  /* ---- KILDER ---- */
  kilder: [
    { navn:"Offisiell Tour de France", url:"https://www.letour.fr/" },
    { navn:"ProCyclingStats", url:"https://www.procyclingstats.com/" },
    { navn:"The Inner Ring", url:"https://inrng.com/" },
    { navn:"TV2 Sykkel", url:"https://www.tv2.no/sport/sykkel/" }
  ]
};

/* ---- MÅLKOORDINATER (for hover-kart) ---- */
const FINISH_COORDS = {
  1:  {lat:41.3641, lon:2.1527},   // Barcelona/Montjuïc
  2:  {lat:41.3641, lon:2.1527},   // Barcelona/Montjuïc
  3:  {lat:42.5431, lon:2.0198},   // Les Angles
  4:  {lat:42.9676, lon:1.6052},   // Foix
  5:  {lat:43.2951, lon:-0.3707},  // Pau
  6:  {lat:42.7290, lon:-0.0093},  // Gavarnie-Gèdre
  7:  {lat:44.8378, lon:-0.5792},  // Bordeaux
  8:  {lat:44.8500, lon:0.4833},   // Bergerac
  9:  {lat:45.5472, lon:2.3075},   // Ussel
  10: {lat:45.1064, lon:2.7432},   // Le Lioran
  11: {lat:46.9917, lon:3.1575},   // Nevers
  12: {lat:46.7806, lon:4.8528},   // Chalon-sur-Saône
  13: {lat:47.8197, lon:6.8536},   // Ballon d'Alsace
  14: {lat:47.970,  lon:7.060},    // Col du Haag
  15: {lat:46.180,  lon:6.562},    // Plateau de Solaison
  16: {lat:46.3708, lon:6.4786},   // Thonon-les-Bains
  17: {lat:45.3631, lon:5.5889},   // Voiron
  18: {lat:44.6914, lon:6.3297},   // Orcières-Merlette
  19: {lat:45.0909, lon:6.0730},   // Alpe d'Huez
  20: {lat:45.0909, lon:6.0730},   // Alpe d'Huez (via Sarenne)
  21: {lat:48.8698, lon:2.3093}    // Paris/Champs-Élysées
};

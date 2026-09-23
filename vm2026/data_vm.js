/* =============================================================
   VM-KOMMENTATORBASEN 2026 — DATAFIL
   -------------------------------------------------------------
   UCI Road World Championships — Montréal, Canada
   Sist oppdatert: 2026-09-23
   Kilder: UCI, ProCyclingStats, CyclingNews, VeloNews
   ============================================================= */

const VM_DATA = {

  meta: {
    år: 2026,
    by: "Montréal",
    land: "Canada",
    provinse: "Québec",
    datoer: "20.–27. september 2026",
    bane: "Mount Royal-circuit",
    baneDetaljer: "13,4 km per runde — Voie Camillien-Houde (1,7 km, 7,7 % snitt, maks 11 %) + Côte de Polytechnique (0,8 km, opp til 11 %) — mål på oppoverbakke i Avenue du Parc",
    ITTbane: "39,2 km langs elven Saint Lawrence, via Circuit Gilles Villeneuve og Samuel De Champlain-broen",
    flagg: "🇨🇦"
  },

  /* ---- VM-PROGRAM ---- */
  program: [
    { dato:"Søn 20.09", kategori:"Tempo Kvinner Elite",     distanse:"39,2 km", status:"ferdig",       vinner:"Marlen Reusser (SUI)" },
    { dato:"Søn 20.09", kategori:"Tempo Herrer Elite",      distanse:"39,2 km", status:"ferdig",       vinner:"Remco Evenepoel (BEL) — 5. strake tittel!" },
    { dato:"Man 21.09", kategori:"Tempo Kvinner U23",       distanse:"20,3 km", status:"ferdig",       vinner:"Felicity Wilson-Haffenden (AUS)" },
    { dato:"Man 21.09", kategori:"Tempo Herrer U23",        distanse:"31,3 km", status:"ferdig",       vinner:"Ryan Gal (NED)" },
    { dato:"Tir 22.09", kategori:"Blandet stafett-tempo",   distanse:"40,6 km", status:"ferdig",       vinner:"Italia" },
    { dato:"Tir 22.09", kategori:"Tempo Herrer Junior",     distanse:"20,3 km", status:"ferdig",       vinner:"Benjamín Noval (ESP)" },
    { dato:"Tir 22.09", kategori:"Tempo Kvinner Junior",    distanse:"10,7 km", status:"ferdig",       vinner:"Maria Okrucińska (POL)" },
    { dato:"Ons 23.09", kategori:"Hviledag",                distanse:"—",       status:"hviledag",     vinner:"—" },
    { dato:"Tor 24.09", kategori:"Fellesstart Kvinner U23", distanse:"134 km",  status:"idag",         vinner:"—" },
    { dato:"Fre 25.09", kategori:"Fellesstart Kvinner Jr",  distanse:"80,4 km", status:"imorgen",      vinner:"—" },
    { dato:"Fre 25.09", kategori:"Fellesstart Herrer Jr",   distanse:"~130 km", status:"imorgen",      vinner:"—" },
    { dato:"Lør 26.09", kategori:"Fellesstart Kvinner Elite",distanse:"180,1 km",status:"kommende",    vinner:"—" },
    { dato:"Søn 27.09", kategori:"Fellesstart Herrer Elite", distanse:"273,7 km",status:"kommende",    vinner:"—" },
  ],

  /* ==================================================
     HERRER ELITE
  ================================================== */
  herrer: {
    løpsfakta: {
      distanse: "273,7 km",
      høydemeter: "3 803 hm",
      runder: "12 runder av 13,4 km-circuit",
      start: "Brossard (syd for Montréal)",
      mål: "Avenue du Parc, Montréal",
      nøkkelstigning: "Voie Camillien-Houde — 1,7 km / 7,7 % snitt / maks 11 %",
      andreBakker: "Côte de Polytechnique — 0,8 km / opp til 11 %",
      avgang: "Søn 27. september 2026",
      forsvarendeMester: "Tadej Pogačar (SLO) — IKKE med (krasj i Vuelta a España)"
    },

    favoritter: [
      { navn:"Remco Evenepoel",    land:"BEL", flagg:"🇧🇪", lag:"Soudal Quick-Step", notat:"Nettopp vunnet VM TT for 5. gang på rad — vil han ta dobbelen? Sterk i bakker" },
      { navn:"Wout van Aert",      land:"BEL", flagg:"🇧🇪", lag:"Visma-Lease a Bike", notat:"Vant Paris-Roubaix 2026 — eksplosiv avslutter, sterk i oppoverbakker" },
      { navn:"Isaac del Toro",     land:"MEX", flagg:"🇲🇽", lag:"UAE Team Emirates",  notat:"3. TdF 2026 (22 år!) — vant GP Montréal og er kjent med banen" },
      { navn:"Paul Seixas",        land:"FRA", flagg:"🇫🇷", lag:"Decathlon AG2R",     notat:"4. TdF i en alder av 19 år — det nye franske geniet, 3. VM TT" },
      { navn:"Tom Pidcock",        land:"GBR", flagg:"🇬🇧", lag:"Ineos Grenadiers",   notat:"VM 2023 sølv, frigjort fra Ineos = toppformert. Toppresultater hele 2026" },
      { navn:"Mathieu van der Poel",land:"NED",flagg:"🇳🇱", lag:"Alpecin-Deceuninck", notat:"VM 2023 vinner — sier banen er for hard, men undervurdér ham aldri" },
    ],

    ryttere: [
      {
        navn:"Remco Evenepoel", land:"Belgia", flagg:"🇧🇪", lag:"Soudal Quick-Step",
        alder:26, fødtÅr:2000, spesialitet:"allrounder",
        palmarès:["VM Fellesstart 2022 (Wollongong)","VM TT 2022–2026 (5 strake!)","2. TdF 2026","Amstel Gold Race 2026","San Sebastián 4x","OL 2024 gull TT og sølv fellesstart"],
        form:"Vinner av VM TT for 5. gang på rad (20. sep). I livets beste form.",
        notat:"Den komplette syklist. Sterk nok i bakker til å kjempe om gull — men vil de la ham komme til mål? Belgia har et drømmelag (van Aert, Nys, Benoot) som vil sette fart. 26 år og vil bli den første til å ta VM-dobbelen siden Merckx. Kjent svakhet: kan bli isolert hvis laget ikke funker 100 %."
      },
      {
        navn:"Wout van Aert", land:"Belgia", flagg:"🇧🇪", lag:"Visma-Lease a Bike",
        alder:32, fødtÅr:1994, spesialitet:"allrounder",
        palmarès:["Paris-Roubaix 2026","Tour de France 6x etappeseier","VM sølv 2020","Strade Bianche","Flèche Wallonne","Gent–Wevelgem"],
        form:"Vuelta a España 2026: poengtrikoten + etappeseier. Toppformert.",
        notat:"Montréal-banen passer WvA perfekt: selektiv nok til å sortere ut de rene sprinterne, men ikke hardt nok til å knuse ham i bakke. Kan avslutte mot de aller beste. Vil han jobbe for Evenepoel eller kjøre for seg selv? Største usikkerhet i belgisk lagkomposisjon."
      },
      {
        navn:"Isaac del Toro", land:"Mexico", flagg:"🇲🇽", lag:"UAE Team Emirates",
        alder:22, fødtÅr:2004, spesialitet:"klatrer",
        palmarès:["3. TdF 2026","GP Montréal 2026","Tour de la Provence","Tirreno-Adriatico etapper","UAE Tour etapper"],
        form:"Toppnivå hele sesongen — 3. TdF og nettopp vant GP Montréal på nøyaktig denne banen.",
        notat:"Har vunnet på nøyaktig dette finishet! 22 år gammel og allerede en av verdens beste. Mexico er ikke kjent for VM-plasser, men del Toro kan overraske alle. Sterk nok til å holde følge opp Camillien-Houde — spørsmålet er om han holder i avslutningen etter 273 km."
      },
      {
        navn:"Paul Seixas", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R",
        alder:19, fødtÅr:2007, spesialitet:"klatrer",
        palmarès:["4. TdF 2026","3. VM TT 2026","2. Flèche Wallonne 2026","2. LBL 2026","Strade Bianche 2. etappe"],
        form:"Utrolig sesong for 19-åringen. 3. VM TT er sensasjonelt for en som er kjent som klatrer.",
        notat:"Frode Andersens barnebarn? Nei — noe helt nytt. Seixas er klassekamerat med del Toro og Pidcock-arvingene. Tidenes yngste topp-4 TdF? Frankrike tror han kan ta VM-gull på hjemmebane — vel, nesten hjemmebane (Québec er jo franskmenn!). Se opp for angrep i nest siste runde."
      },
      {
        navn:"Mathieu van der Poel", land:"Nederland", flagg:"🇳🇱", lag:"Alpecin-Deceuninck",
        alder:31, fødtÅr:1995, spesialitet:"puncheur",
        palmarès:["VM Fellesstart 2023 (Glasgow)","Paris-Roubaix 2x","Ronde van Vlaanderen 3x","Strade Bianche 2x","Tour of Flanders"],
        form:"Mer selektiv sesong i 2026 — fokus mot VM. Sier banen er for hard for ham, men det sa han også i 2023...",
        notat:"VM-vinneren i 2023 sier han er usikker på egne sjanser i Montréal — men det kan godt være taktisk underdrivelse. MvdP er eksplosiv nok til å prøve seg i siste runde. Nederland har ikke det sterkeste laget, så han kan bli isolert tidlig. Stopp-og-gå-rytme passer ham bedre enn langvarig klatring."
      },
      {
        navn:"Tom Pidcock", land:"Storbritannia", flagg:"🇬🇧", lag:"Ineos Grenadiers",
        alder:27, fødtÅr:1999, spesialitet:"puncheur",
        palmarès:["OL MTB-gull 2021","VM MTB 2026","GP Industria e Artigianato 2026","Strade Bianche vinner","Amstel Gold 2."],
        form:"Etter å ha frigjort seg fra Ineos-begrensninger er Pidcock tilbake i toppsjaktet. VM MTB 2026 bekrefter toppform.",
        notat:"Ser ut til å ha funnet tilbake til seg selv etter turbulente år. Pidcock er eksplosiv nok til å prøve tidlig angrep og holde det til mål — men taktisk klokskap er ikke alltid hans styrke. GB har et solid lag med Adam Yates som backup."
      },
      {
        navn:"Primož Roglič", land:"Slovenia", flagg:"🇸🇮", lag:"Red Bull Bora-Hansgrohe",
        alder:37, fødtÅr:1989, spesialitet:"allrounder",
        palmarès:["Vuelta a España 3x","OL TT-gull 2020","Giro d'Italia 2023","Paris-Nice 2025"],
        form:"Usikker etter en tung sesong — men Roglič i VM er alltid farlig.",
        notat:"37 år og fortsatt i toppen. Roglič er Slovenias trumfkort hvis Mohorič eller Omrzel ikke klarer oppgaven. Han tåler selektive runder og er erfaren nok til å sette inn støtet på riktig tidspunkt. Slovenia er et lite men farlig land med Roglič + Mohorič."
      },
      {
        navn:"Matej Mohorič", land:"Slovenia", flagg:"🇸🇮", lag:"Bahrain Victorious",
        alder:29, fødtÅr:1997, spesialitet:"puncheur",
        palmarès:["Milano-Sanremo 2x","Binche-Chimay-Binche","TdF etappeseier"],
        form:"Konsistent sesong — ikke seiersrike resultater, men solid og forberedt på VM.",
        notat:"Mohorič er perfekt for en bane som Montréal. Eksplosiv i korte bakker, god tempokapasitet og taktisk svært smart. Han har overrasket verden to ganger i Milano-Sanremo — kan han gjøre det igjen? Slovenia vil bruke ham som joker."
      },
      {
        navn:"Mads Pedersen", land:"Danmark", flagg:"🇩🇰", lag:"Lidl-Trek",
        alder:30, fødtÅr:1996, spesialitet:"allrounder",
        palmarès:["VM Fellesstart 2019 (Harrogate)","Flandern Rundt 2023","Gent-Wevelgem 2x","TdF grønn trøye 2026"],
        form:"Grønn trøye i TdF 2026 — i toppform. Søker 2. VM-tittel.",
        notat:"Pedersen vant VM 2019 i Harrogate i regnvær og kaos. Montréal er mer selektiv, men i en siste gruppe er han farlig. Har lært seg å klatre bedre — men de siste rundene av Camillien-Houde kan felle ham mot de reneste klatrerne."
      },
      {
        navn:"Thibau Nys", land:"Belgia", flagg:"🇧🇪", lag:"Lidl-Trek",
        alder:23, fødtÅr:2003, spesialitet:"allrounder",
        palmarès:["Brabantse Pijl 2026","Kuurne-Bruxelles-Kuurne","Strade Bianche U23"],
        form:"Breakout-år 2026. En av de mest spennende unge ryttere i Belgia.",
        notat:"Sønn av sykkellegende Sven Nys. Thibau har blitt Belgias hemmelige våpen — versatil nok til å klatre og spurt. I det sterke belgiske laget kan han gjøre viktig arbeide OG prøve seg hvis sjansen byr seg. Alder: 23 år — dette er hans VM-generasjon."
      },
      {
        navn:"Ben Healy", land:"Irland", flagg:"🇮🇪", lag:"EF Education-EasyPost",
        alder:24, fødtÅr:2002, spesialitet:"puncheur",
        palmarès:["Il Lombardia 2025","Volta a Catalunya etapper","Critérium du Dauphiné etapper"],
        form:"Topp-10 i GP Québec denne uka. Perfekt opplegg for VM.",
        notat:"Irlands store håp. Healy er skapt for bakker som Camillien-Houde: eksplosiv og utholden. Vil forsøke å angripe tidlig og skape kaos. Irland har sjelden en VM-sjanse — men Healy er reell."
      },
      {
        navn:"Giulio Ciccone", land:"Italia", flagg:"🇮🇹", lag:"Lidl-Trek",
        alder:30, fødtÅr:1996, spesialitet:"klatrer",
        palmarès:["TdF klatretrøye","Giro d'Italia etapper 3x","Criterium du Dauphiné etapp"],
        form:"Konsekvent topp-15 i store løp i 2026. Italias beste håp i bakker.",
        notat:"Ciccone er en solid klatrer som aldri helt har tatt det store stikket i et en-dags-ritt. Montréal gir ham muligheten. Italia stiller med dybde (Pellizzari, Ganna) og Ciccone kan dra nytte av at laget jobber for ham."
      },
      {
        navn:"Filippo Ganna", land:"Italia", flagg:"🇮🇹", lag:"Ineos Grenadiers",
        alder:28, fødtÅr:1998, spesialitet:"tempo",
        palmarès:["VM TT 2020+2021","Paris-Roubaix 2023","4x VM TT-topp 3"],
        form:"2. VM TT 2026 — 57 sek bak Evenepoel. Sterk form, men fellesstart er annerledes.",
        notat:"Ganna er primært en tempospesialist, men han kan klatre godt nok til å henge med en liten gruppe. Vil Italia bruke ham som hjelpemann for Ciccone/Pellizzari, eller kjøre han for seg selv? 2. VM TT viser at formen er der."
      },
      {
        navn:"Giulio Pellizzari", land:"Italia", flagg:"🇮🇹", lag:"Red Bull Bora-Hansgrohe",
        alder:21, fødtÅr:2005, spesialitet:"klatrer",
        palmarès:["Giro d'Italia U23 vinner","Critérium du Dauphiné etapp","Volta a Catalunya topp-5"],
        form:"Knuste konkurrentene i Giro U23. Klar for elitetoppen.",
        notat:"Italias neste store stjerne — de sier han er klar for det aller øverste. Bare 21 år, men klatrer som en veteran. VM i Montréal kan bli hans store debut på verdensstadiet. Vil bli brukt taktisk av Italia og kan overraske."
      },
      {
        navn:"Jhonatan Narváez", land:"Ecuador", flagg:"🇪🇨", lag:"Ineos Grenadiers",
        alder:27, fødtÅr:1999, spesialitet:"allrounder",
        palmarès:["Giro d'Italia etappseier (Milano-mål)","GP Montréal topp-10"],
        form:"Solid sesong — ikke vinnersresultat, men pålitelig hjelper og selvstendig trussel.",
        notat:"Narváez er en av de mest undervurderte ryttere i feltet. Sterk i bakker, god avslutter, og kjenner Montréal-banen fra GP. Ecuador er ikke et VM-land — men Narváez kan overraske. Vil sannsynligvis jobbe for Pidcock i Ineos."
      },
      {
        navn:"Quinn Simmons", land:"USA", flagg:"🇺🇸", lag:"Lidl-Trek",
        alder:25, fødtÅr:2001, spesialitet:"allrounder",
        palmarès:["Vuelta a España etapper","GP Québec","Paris-Nice etapper"],
        form:"Topp-5 Vuelta a España 2026. USA er sterkt med Jorgenson + Simmons + McNulty.",
        notat:"Simmons er USAs største håp i VM. Aggressiv rytter som angriper gjerne tidlig. Montréal passer ham — nok bakker til å sortere feltet, men ikke nok til å droppe en god puncheur."
      },
      {
        navn:"Tobias Halland Johannessen", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:25, fødtÅr:2001, spesialitet:"klatrer",
        palmarès:["13. TdF 2026","Critérium du Dauphiné etappe","Tour de Romandie etappe"],
        form:"13. TdF 2026 — Norges beste i rittet. Klar forbedring fra 2025.",
        notat:"Norges største håp i fellesstart! Tobias er klatrer og vil trives i Camillien-Houde. Om han henger med de aller beste i de avgjørende rundene er nøkkelen. 13. TdF viser at han er i topp-15 globalt — men å ta medalje i VM krever ytterligere steg. Dark horse verdt å følge."
      },
      {
        navn:"Tobias Foss", land:"Norge", flagg:"🇳🇴", lag:"Ineos Grenadiers",
        alder:27, fødtÅr:1999, spesialitet:"allrounder",
        palmarès:["VM TT-gull 2022 (Wollongong!)","Giro d'Italia etappe","Tirreno-Adriatico etappe"],
        form:"Solid men ikke seiersrik i 2026. Kan bidra i første del av løpet.",
        notat:"VM-gullvinner 2022 i tempo — et av norsk sykkelhistories store øyeblikk! I fellesstart er han mer et langsiktig arbeidsredskap. Men Foss har motorsykkelbakgrunn og er tøff nok til å henge med langt. Norsk lagkaptein i praksis."
      },
      {
        navn:"Andreas Leknessund", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:26, fødtÅr:2000, spesialitet:"allrounder",
        palmarès:["Giro d'Italia sammenlagt topp-10","Tour de Suisse etapper","Volta a Catalunya"],
        form:"God sesong med Uno-X — Norges nest beste etapperytte etter THJ.",
        notat:"Leknessund er et solid lagmedlem for Norge. Kan holde seg med i bakker og er taktisk klok. Vil primært hjelpe Tobias Halland Johannessen, men er ingen pushover selv."
      },
      {
        navn:"Embret Svestad-Bårdseng", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:22, fødtÅr:2004, spesialitet:"allrounder",
        palmarès:["NM Fellesstart 2026","U23 etapper Volta a Catalunya"],
        form:"Breakout-sesong 2026 — NM-vinner, klar for sitt første VM med elitelaget.",
        notat:"Den yngste i det norske VM-laget. Svestad-Bårdseng har imponert på hjemmebane og i U23-løp. VM er en stor arena, men han er med for å lære og bidra i de tidlige fasene."
      },
      {
        navn:"Jørgen Nordhagen", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:24, fødtÅr:2002, spesialitet:"puncheur",
        palmarès:["GP Québec topp-10","Norsk mester lagtempo"],
        form:"God form etter topp-10 i GP Québec tidligere denne uka.",
        notat:"Nordhagen er her og klar. Topp-10 i GP Québec viser at han kjenner terrenget. Puncheur-profil passer Mount Royal — vil jobbe hardt for laget."
      },
      {
        navn:"Anders Skaarseth", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:28, fødtÅr:1998, spesialitet:"allrounder",
        palmarès:["NM Tempolandsveien","Tour of Norway etappe"],
        form:"Erfaren lagspiller, sterk arbeidshest for Norge.",
        notat:"Skaarseth er der for å jobbe. Han vil bruke seg opp i de første 150 km for å beskytte THJ og Foss. Klassisk lagreisende rolle — viktig selv om han ikke sykler til mål."
      },
    ]
  },

  /* ==================================================
     KVINNER ELITE
  ================================================== */
  kvinner: {
    løpsfakta: {
      distanse: "180,1 km",
      høydemeter: "2 570 hm",
      runder: "8 runder av 13,4 km-circuit",
      start: "Brossard (syd for Montréal)",
      mål: "Avenue du Parc, Montréal",
      nøkkelstigning: "Voie Camillien-Houde — 1,7 km / 7,7 % snitt / maks 11 %",
      andreBakker: "Côte de Polytechnique — 0,8 km / opp til 11 %",
      avgang: "Lør 26. september 2026",
      forsvarendeMester: "Magdeleine Vallières (CAN) — HJEMMEBANE! Montréal er byen hennes"
    },

    favoritter: [
      { navn:"Demi Vollering",     land:"NED", flagg:"🇳🇱", lag:"SD Worx-Protime",     notat:"Nr. 1 UCI-ranking — beste klatrer i feltet, vant TdF Femmes og Giro Donne 2026" },
      { navn:"Lotte Kopecky",      land:"BEL", flagg:"🇧🇪", lag:"SD Worx-Protime",     notat:"Forsvarende to-ganger (2023+2024) — verdens mest komplette syklist i fellesstart" },
      { navn:"Magdeleine Vallières",land:"CAN",flagg:"🇨🇦", lag:"EF Education-Cannondale", notat:"Forsvarende mester + hjemmebane i Montréal — trykket er enormt, men motivasjonen likedan" },
      { navn:"Kasia Niewiadoma",   land:"POL", flagg:"🇵🇱", lag:"Canyon//SRAM Racing",  notat:"Vant Vuelta Femenina 2026 — toppform, elsker harde baner" },
      { navn:"Elisa Longo Borghini",land:"ITA",flagg:"🇮🇹", lag:"Lidl-Trek",           notat:"3x VM-bronse — vil hun endelig ta gullet? Nettopp vunnet blandet TTT. 35 år" },
      { navn:"Marlen Reusser",     land:"SUI", flagg:"🇨🇭", lag:"Lidl-Trek",           notat:"Vant VM TT på 35-årsdagen sin (20. sep) — i karrierens beste form. Kan hun ta dobbelen?" },
    ],

    ryttere: [
      {
        navn:"Demi Vollering", land:"Nederland", flagg:"🇳🇱", lag:"SD Worx-Protime",
        alder:27, fødtÅr:1999, spesialitet:"klatrer",
        palmarès:["TdF Femmes 2026","Giro Donne 2026","La Flèche Wallonne 2026","LBL 2025","Flanderne 2026"],
        form:"Nr. 1 UCI-ranking. Beste klatrer i feltet. Skuffende 8. i VM TT (ikke hennes distanse).",
        notat:"Vollering er favoritt nr. 1 på en bane som Montréal. Camillien-Houde-klatringen er som skapt for henne — hun er sterkere enn alle over 5+ min. Svakhet: etter en enorm sesong (TdF + Giro) kan hun møte slitasje. SD Worx-laget med Kopecky er en potensiell intern konflikt: hvem kjører for hvem?"
      },
      {
        navn:"Lotte Kopecky", land:"Belgia", flagg:"🇧🇪", lag:"SD Worx-Protime",
        alder:28, fødtÅr:1998, spesialitet:"allrounder",
        palmarès:["VM Fellesstart 2023 (Glasgow)","VM Fellesstart 2024 (Zürich)","Paris-Roubaix Femmes 2026","Flanderne 2x"],
        form:"Forsvarende to-ganger. Imponerte i Paris-Roubaix 2026. Toppform.",
        notat:"Kopecky er kanskje den mest komplette syklisten i feltet — kan spurte, klatre, jobbe i vind. Tre på rad? Det gjøres bare av de aller største (Vos, van Vleuten). Montréal er mer selektiv enn Glasgow og Zürich — dette favoriserer kanskje Vollering foran Kopecky. SD Worx-internt drama er uunngåelig."
      },
      {
        navn:"Magdeleine Vallières", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale",
        alder:25, fødtÅr:2001, spesialitet:"puncheur",
        palmarès:["VM Fellesstart 2025 (Kigali)","GP Montréal","Nordisk mester"],
        form:"Forsvarende mester — men TT-formen (ble ikke topprangert) vekker spørsmål.",
        notat:"Vallières vant i Kigali som 24-åring i et taktisk mesterverk. Nå er hun tilbake PÅ HJEMMEBANE i Montréal — hun kjenner hvert svinghjørne av Camillien-Houde. Publikumsfavoritt og motivert som aldri før. Spørsmålet er om Vollering og Kopecky er for sterke. Canada stiller sterkt lag."
      },
      {
        navn:"Kasia Niewiadoma", land:"Polen", flagg:"🇵🇱", lag:"Canyon//SRAM Racing",
        alder:30, fødtÅr:1996, spesialitet:"puncheur",
        palmarès:["Vuelta Femenina 2026","Tour de Suisse Femmes","La Flèche Wallonne 2x"],
        form:"Vant Vuelta Femenina 2026 — i karrierebeste form. Elsker tøffe, selektive baner.",
        notat:"Niewiadoma er alltid farligst på en dag som kanskje overrasker — der favorittene kjemper innbyrdes og hun slipper unna. Kampen mellom Vollering og Kopecky kan gi henne en åpning. Erfaren VM-rytter (Polen har sjelden medal men hun er alltid der fremme)."
      },
      {
        navn:"Elisa Longo Borghini", land:"Italia", flagg:"🇮🇹", lag:"Lidl-Trek",
        alder:35, fødtÅr:1991, spesialitet:"klatrer",
        palmarès:["3x VM-bronse","Giro Donne 2x","Paris-Roubaix Femmes","Strade Bianche 3x"],
        form:"Vant blandet TTT med Italia (22. sep). Frisk og motivert — siste sjanse for VM-gull?",
        notat:"ELB er karierre-norges sykkel — alltid der fremme, aldri gull. 3 VM-bronse er et rekord av potensiell frustrasjon. 35 år og vil kanskje gi alt i Montréal. Italia har et av de sterkeste lagene. Om det er hennes år sier alle som har fulgt henne: det er NÅ eller aldri."
      },
      {
        navn:"Marlen Reusser", land:"Sveits", flagg:"🇨🇭", lag:"Lidl-Trek",
        alder:35, fødtÅr:1991, spesialitet:"tempo",
        palmarès:["VM TT 2025","VM TT 2026 (på 35-årsdagen!)","OL TT-sølv 2024","Giro Donne TT"],
        form:"Vant VM TT 20. sep — frisk og i livsform. Kan hun ta dobbelen i fellesstart?",
        notat:"Reusser vant VM TT på bursdagen sin (35 år!) — et av VM-uka aller fineste øyeblikk. Fellesstart er annerledes — hun er ikke Vollering i bakker. Men med TTT-seieren for Sveits og VM TT-gullet i bagasjen er formen udiskutabel. En overraskelse i fellesstart er ikke umulig."
      },
      {
        navn:"Puck Pieterse", land:"Nederland", flagg:"🇳🇱", lag:"Fenix-Deceuninck",
        alder:23, fødtÅr:2003, spesialitet:"puncheur",
        palmarès:["Superprestige CX","Tour de Suisse Femmes etapper","GP Dottignies"],
        form:"Alle-terreng-talent som vokser inn i eliterollen i vei-sykkel.",
        notat:"Pieterse er det neste store fra Nederland etter Vollering. Puncheur-profil passer godt til Montréal. Holland vil bruke henne som joker når Vollering er markert. 23 år — dette er starten på hennes VM-karriere."
      },
      {
        navn:"Zoe Bäckstedt", land:"Storbritannia", flagg:"🇬🇧", lag:"Uno-X Mobility",
        alder:22, fødtÅr:2004, spesialitet:"allrounder",
        palmarès:["VM TT 2026: 2. plass","Roubaix Femmes U23 vinner","Paris-Roubaix Femmes topp-5"],
        form:"2. VM TT (40 sek bak Reusser) — utrolig prestasjon for 22-åringen.",
        notat:"Bäckstedt sjokkerte alle med sølv i TT. Datter av Magnus Bäckstedt (Paris-Roubaix 2004). Hun er sterk nok i bakker til å henge med i en liten gruppe — og kan spurte. GB vil satse på at hun kan overraske igjen."
      },
      {
        navn:"Franziska Koch", land:"Tyskland", flagg:"🇩🇪", lag:"SD Worx-Protime",
        alder:26, fødtÅr:2000, spesialitet:"tempo",
        palmarès:["Paris-Roubaix Femmes 2025","VM TT 2026: 3. plass","Omloop Het Nieuwsblad"],
        form:"3. VM TT — i karrierebeste form. Sterk i kombinerte baner.",
        notat:"Koch viste i TT at hun er klar for det aller øverste. I fellesstart er profilen litt annerledes — men hun er sterk nok til å holde følge i en selektiv gruppe. Tyskland har ikke tradisjon for VM i fellesstart, men Koch kan bryte den tradisjonen."
      },
      {
        navn:"Katrine Aalerud", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:29, fødtÅr:1997, spesialitet:"allrounder",
        palmarès:["Energa Tour Feminin etapper","Tour of Scandinavia","NM Vei"],
        form:"USIKKER START — krasjet under rekognosering av VM-banen. Gikk ikke VM TT. Avklares.",
        notat:"Norges viktigste rytter er i tvil etter fall under rekognosering. Aalerud er Norges erfarne leder og tapte TT pga. skade. Om hun starter fellesstart er et åpent spørsmål. Norsk sjef Thomas Campana må ta avgjørelsen tett opp mot start."
      },
      {
        navn:"Sigrid Ytterhus Haugset", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:22, fødtÅr:2004, spesialitet:"klatrer",
        palmarès:["NM U23 Vei 2026","Tour of Scandinavia etapp"],
        form:"Ung og lovende — VM er en ny opplevelse for henne.",
        notat:"Ytterhus Haugset er Norges fremtid i klatringen. Bare 22 år og allerede med i VM-laget. Vil bruke erfaringen og prøve å hjelpe laget i de tidlige fasene."
      },
      {
        navn:"Tiril Jorgensen", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility",
        alder:23, fødtÅr:2003, spesialitet:"allrounder",
        palmarès:["NM Fellesstart 2025","Tour of Scandinavia"],
        form:"Solid sesong med Uno-X. Norsk lagspiller.",
        notat:"Jorgensen er allsidig og hardtarbeidende. Vil jobbe for Aalerud (om hun starter) og bidra i de vanskelige første timene av løpet."
      },
      {
        navn:"Marte Berg Edseth", land:"Norge", flagg:"🇳🇴", lag:"Human Powered Health",
        alder:26, fødtÅr:2000, spesialitet:"klatrer",
        palmarès:["Tour de Suisse Femmes etapper","Simac Ladies Tour etappe"],
        form:"Fin sesong — klar for sin rolle i VM-laget.",
        notat:"Berg Edseth er en klatrer som passer banen i Montréal. Om hun henger med i de avgjørende rundene er spørsmålet — men hun vil gi alt for laget."
      },
    ]
  },

  /* ==================================================
     HISTORIKK (2010–2026)
  ================================================== */
  historikk: {

    herrer_fellesstart: [
      { år:2010, sted:"Geelong/Melbourne, AUS", gull:"Thor Hushovd 🇳🇴",          sølv:"Matti Breschel (DEN)",      bronse:"Allan Davis (AUS)",        norsk:"🥇 GULL — Hushovd! Norges første VM-gull i fellesstart herrer", norskFlagg:true },
      { år:2011, sted:"København, DEN",          gull:"Mark Cavendish (GBR)",      sølv:"Matthew Goss (AUS)",        bronse:"André Greipel (GER)",       norsk:"—" },
      { år:2012, sted:"Valkenburg, NED",          gull:"Philippe Gilbert (BEL)",    sølv:"Edvald Boasson Hagen 🇳🇴", bronse:"Alejandro Valverde (ESP)",  norsk:"🥈 SØLV — Edvald Boasson Hagen!", norskFlagg:true },
      { år:2013, sted:"Firenze, ITA",             gull:"Rui Costa (POR)",          sølv:"Joaquim Rodríguez (ESP)",   bronse:"Alejandro Valverde (ESP)",  norsk:"—" },
      { år:2014, sted:"Ponferrada, ESP",           gull:"Michał Kwiatkowski (POL)", sølv:"Simon Gerrans (AUS)",       bronse:"Alejandro Valverde (ESP)",  norsk:"—" },
      { år:2015, sted:"Richmond, USA",             gull:"Peter Sagan (SVK)",        sølv:"Michael Matthews (AUS)",    bronse:"Ramūnas Navardauskas (LTU)",norsk:"—" },
      { år:2016, sted:"Doha, QAT",                gull:"Peter Sagan (SVK)",        sølv:"Mark Cavendish (GBR)",      bronse:"Søren Kragh Andersen (DEN)",norsk:"—" },
      { år:2017, sted:"Bergen, NOR 🇳🇴",          gull:"Peter Sagan (SVK)",        sølv:"Alexander Kristoff 🇳🇴",   bronse:"Michael Matthews (AUS)",    norsk:"🥈 SØLV — Kristoff på hjemmebane i Bergen!", norskFlagg:true },
      { år:2018, sted:"Innsbruck, AUT",            gull:"Alejandro Valverde (ESP)", sølv:"Romain Bardet (FRA)",       bronse:"Michael Woods (CAN)",       norsk:"—" },
      { år:2019, sted:"Harrogate, GBR",            gull:"Mads Pedersen (DEN)",      sølv:"Matteo Trentin (ITA)",      bronse:"Stefan Küng (SUI)",         norsk:"—" },
      { år:2020, sted:"Imola, ITA",                gull:"Julian Alaphilippe (FRA)", sølv:"Wout van Aert (BEL)",       bronse:"Marc Hirschi (SUI)",        norsk:"—" },
      { år:2021, sted:"Leuven, BEL",               gull:"Julian Alaphilippe (FRA)", sølv:"Dylan van Baarle (NED)",    bronse:"Christophe Laporte (FRA)",  norsk:"—" },
      { år:2022, sted:"Wollongong, AUS",           gull:"Remco Evenepoel (BEL)",    sølv:"Biniam Girmay (ERI)",       bronse:"Christophe Laporte (FRA)",  norsk:"—" },
      { år:2023, sted:"Glasgow, SCO",              gull:"Mathieu van der Poel (NED)",sølv:"Tadej Pogačar (SLO)",      bronse:"Mads Pedersen (DEN)",       norsk:"—" },
      { år:2024, sted:"Zürich, SUI",               gull:"Tadej Pogačar (SLO)",      sølv:"Remco Evenepoel (BEL)",     bronse:"Mathieu van der Poel (NED)",norsk:"—" },
      { år:2025, sted:"Kigali, RWA",               gull:"Tadej Pogačar (SLO)",      sølv:"(ukjent)",                  bronse:"(ukjent)",                  norsk:"—" },
    ],

    herrer_tempo: [
      { år:2010, sted:"Geelong, AUS",              gull:"Fabian Cancellara (SUI)",  sølv:"David Millar (GBR)",        bronse:"Tony Martin (GER)",         norsk:"—" },
      { år:2011, sted:"København, DEN",             gull:"Tony Martin (GER)",        sølv:"Bradley Wiggins (GBR)",     bronse:"Fabian Cancellara (SUI)",   norsk:"—" },
      { år:2012, sted:"Valkenburg, NED",            gull:"Tony Martin (GER)",        sølv:"Taylor Phinney (USA)",      bronse:"Vasil Kiryienka (BLR)",     norsk:"—" },
      { år:2013, sted:"Firenze, ITA",               gull:"Tony Martin (GER)",        sølv:"Bradley Wiggins (GBR)",     bronse:"Fabian Cancellara (SUI)",   norsk:"—" },
      { år:2014, sted:"Ponferrada, ESP",            gull:"Bradley Wiggins (GBR)",    sølv:"Tony Martin (GER)",         bronse:"Tom Dumoulin (NED)",        norsk:"—" },
      { år:2015, sted:"Richmond, USA",              gull:"Vasil Kiryienka (BLR)",    sølv:"Adriano Malori (ITA)",      bronse:"Jérôme Coppel (FRA)",       norsk:"—" },
      { år:2016, sted:"Doha, QAT",                 gull:"Tony Martin (GER)",        sølv:"Tom Dumoulin (NED)",        bronse:"Vasil Kiryienka (BLR)",     norsk:"—" },
      { år:2017, sted:"Bergen, NOR 🇳🇴",           gull:"Tom Dumoulin (NED)",       sølv:"Chris Froome (GBR)",        bronse:"Jon Castroviejo (ESP)",     norsk:"—" },
      { år:2018, sted:"Innsbruck, AUT",             gull:"Rohan Dennis (AUS)",       sølv:"Tom Dumoulin (NED)",        bronse:"Jon Castroviejo (ESP)",     norsk:"—" },
      { år:2019, sted:"Harrogate, GBR",             gull:"Rohan Dennis (AUS)",       sølv:"Filippo Ganna (ITA)",       bronse:"Tom Dumoulin (NED)",        norsk:"—" },
      { år:2020, sted:"Imola, ITA",                 gull:"Filippo Ganna (ITA)",      sølv:"Stefan Küng (SUI)",         bronse:"Rémi Cavagna (FRA)",        norsk:"—" },
      { år:2021, sted:"Leuven, BEL",                gull:"Filippo Ganna (ITA)",      sølv:"Stefan Küng (SUI)",         bronse:"Rohan Dennis (AUS)",        norsk:"—" },
      { år:2022, sted:"Wollongong, AUS",            gull:"Tobias Foss 🇳🇴",         sølv:"Stefan Küng (SUI)",         bronse:"Edoardo Affini (ITA)",      norsk:"🥇 GULL — Tobias Foss! Ingen ventet det!", norskFlagg:true },
      { år:2023, sted:"Glasgow, SCO",               gull:"Remco Evenepoel (BEL)",    sølv:"Wout van Aert (BEL)",       bronse:"(ukjent)",                  norsk:"—" },
      { år:2024, sted:"Zürich, SUI",                gull:"Remco Evenepoel (BEL)",    sølv:"Stefan Küng (SUI)",         bronse:"Joshua Tarling (GBR)",      norsk:"—" },
      { år:2025, sted:"Kigali, RWA",                gull:"Remco Evenepoel (BEL)",    sølv:"(ukjent)",                  bronse:"(ukjent)",                  norsk:"—" },
      { år:2026, sted:"Montréal, CAN",              gull:"Remco Evenepoel (BEL)",    sølv:"Filippo Ganna (ITA)",       bronse:"Paul Seixas (FRA)",         norsk:"—", kjørt:true },
    ],

    kvinner_fellesstart: [
      { år:2010, sted:"Geelong, AUS",              gull:"Giorgia Bronzini (ITA)",   sølv:"Marianne Vos (NED)",        bronse:"Emma Johansson (SWE)",      norsk:"—" },
      { år:2011, sted:"København, DEN",             gull:"Giorgia Bronzini (ITA)",   sølv:"Marianne Vos (NED)",        bronse:"Ina-Yoko Teutenberg (GER)", norsk:"—" },
      { år:2012, sted:"Valkenburg, NED",            gull:"Marianne Vos (NED)",       sølv:"Rachel Neylan (AUS)",       bronse:"Elisa Longo Borghini (ITA)",norsk:"—" },
      { år:2013, sted:"Firenze, ITA",               gull:"Marianne Vos (NED)",       sølv:"Emma Johansson (SWE)",      bronse:"Rossella Ratto (ITA)",      norsk:"—" },
      { år:2014, sted:"Ponferrada, ESP",            gull:"Pauline Ferrand-Prévot (FRA)",sølv:"Lisa Brennauer (GER)",   bronse:"Emma Johansson (SWE)",      norsk:"—" },
      { år:2015, sted:"Richmond, USA",              gull:"Lizzie Deignan (GBR)",     sølv:"Anna van der Breggen (NED)",bronse:"Megan Guarnier (USA)",      norsk:"—" },
      { år:2016, sted:"Doha, QAT",                 gull:"Amalie Dideriksen (DEN)",  sølv:"Elizabeth Deignan (GBR)",   bronse:"Marianne Vos (NED)",        norsk:"—" },
      { år:2017, sted:"Bergen, NOR 🇳🇴",           gull:"Chantal van den Broek-Blaak (NED)",sølv:"Cecilie Uttrup Ludwig (DEN)",bronse:"Katarzyna Niewiadoma (POL)", norsk:"—" },
      { år:2018, sted:"Innsbruck, AUT",             gull:"Anna van der Breggen (NED)",sølv:"Cecilie Uttrup Ludwig (DEN)",bronse:"Annemiek van Vleuten (NED)",norsk:"—" },
      { år:2019, sted:"Harrogate, GBR",             gull:"Annemiek van Vleuten (NED)",sølv:"Amanda Spratt (AUS)",      bronse:"Elizabeth Deignan (GBR)",   norsk:"—" },
      { år:2020, sted:"Imola, ITA",                 gull:"Anna van der Breggen (NED)",sølv:"Annemiek van Vleuten (NED)",bronse:"Elizabeth Deignan (GBR)",  norsk:"—" },
      { år:2021, sted:"Leuven, BEL",                gull:"Elisa Balsamo (ITA)",      sølv:"Marianne Vos (NED)",        bronse:"Lorena Wiebes (NED)",       norsk:"—" },
      { år:2022, sted:"Wollongong, AUS",            gull:"Annemiek van Vleuten (NED)",sølv:"Lotte Kopecky (BEL)",      bronse:"Neve Bradbury (AUS)",       norsk:"—" },
      { år:2023, sted:"Glasgow, SCO",               gull:"Lotte Kopecky (BEL)",      sølv:"Niamh Fisher-Black (NZL)", bronse:"Riejanne Markus (NED)",     norsk:"—" },
      { år:2024, sted:"Zürich, SUI",                gull:"Lotte Kopecky (BEL)",      sølv:"Demi Vollering (NED)",      bronse:"Kasia Niewiadoma (POL)",    norsk:"—" },
      { år:2025, sted:"Kigali, RWA",                gull:"Magdeleine Vallières (CAN)",sølv:"Niamh Fisher-Black (NZL)",  bronse:"Mavi Garcia (ESP)",         norsk:"—" },
    ],

    kvinner_tempo: [
      { år:2010, sted:"Geelong, AUS",              gull:"Emma Pooley (GBR)",        sølv:"Judith Arndt (GER)",        bronse:"Linda Villumsen (NZL)",     norsk:"—" },
      { år:2011, sted:"København, DEN",             gull:"Judith Arndt (GER)",       sølv:"Edwige Pitel (FRA)",        bronse:"Evelyn Stevens (USA)",      norsk:"—" },
      { år:2012, sted:"Valkenburg, NED",            gull:"Judith Arndt (GER)",       sølv:"Evelyn Stevens (USA)",      bronse:"Linda Villumsen (NZL)",     norsk:"—" },
      { år:2013, sted:"Firenze, ITA",               gull:"Ellen van Dijk (NED)",     sølv:"Linda Villumsen (NZL)",     bronse:"Carmen Small (USA)",        norsk:"—" },
      { år:2014, sted:"Ponferrada, ESP",            gull:"Lisa Brennauer (GER)",     sølv:"Ellen van Dijk (NED)",      bronse:"Evelyn Stevens (USA)",      norsk:"—" },
      { år:2015, sted:"Richmond, USA",              gull:"Linda Villumsen (NZL)",    sølv:"Anna van der Breggen (NED)",bronse:"Lisa Brennauer (GER)",      norsk:"—" },
      { år:2016, sted:"Doha, QAT",                 gull:"Amber Neben (USA)",        sølv:"Ellen van Dijk (NED)",      bronse:"Anna van der Breggen (NED)",norsk:"—" },
      { år:2017, sted:"Bergen, NOR 🇳🇴",           gull:"Annemiek van Vleuten (NED)",sølv:"Katarzyna Niewiadoma (POL)",bronse:"Ellen van Dijk (NED)",     norsk:"—" },
      { år:2018, sted:"Innsbruck, AUT",             gull:"Annemiek van Vleuten (NED)",sølv:"Amanda Spratt (AUS)",      bronse:"Lisa Klein (GER)",          norsk:"—" },
      { år:2019, sted:"Harrogate, GBR",             gull:"Chloe Dygert (USA)",       sølv:"Annemiek van Vleuten (NED)",bronse:"Anna van der Breggen (NED)",norsk:"—" },
      { år:2020, sted:"Imola, ITA",                 gull:"Anna van der Breggen (NED)",sølv:"Annemiek van Vleuten (NED)",bronse:"Ellen van Dijk (NED)",     norsk:"—" },
      { år:2021, sted:"Leuven, BEL",                gull:"Ellen van Dijk (NED)",     sølv:"Lisa Brennauer (GER)",      bronse:"Marlen Reusser (SUI)",      norsk:"—" },
      { år:2022, sted:"Wollongong, AUS",            gull:"Ellen van Dijk (NED)",     sølv:"Marlen Reusser (SUI)",      bronse:"Christina Schweinberger (AUT)", norsk:"—" },
      { år:2023, sted:"Glasgow, SCO",               gull:"Chloe Dygert (USA)",       sølv:"Marlen Reusser (SUI)",      bronse:"Anna Henderson (GBR)",      norsk:"—" },
      { år:2024, sted:"Zürich, SUI",                gull:"Grace Brown (AUS)",         sølv:"Demi Vollering (NED)",      bronse:"Marlen Reusser (SUI)",      norsk:"—" },
      { år:2025, sted:"Kigali, RWA",                gull:"Marlen Reusser (SUI)",      sølv:"(ukjent)",                  bronse:"(ukjent)",                  norsk:"—" },
      { år:2026, sted:"Montréal, CAN",              gull:"Marlen Reusser (SUI)",      sølv:"Zoe Bäckstedt (GBR)",       bronse:"Franziska Koch (GER)",      norsk:"—", kjørt:true },
    ]
  }
};

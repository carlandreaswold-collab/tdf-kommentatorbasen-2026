/* =============================================================
   VM-KOMMENTATORBASEN 2026 — DATAFIL
   -------------------------------------------------------------
   UCI Road World Championships — Montréal, Canada
   Sist oppdatert: 2026-09-24
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

      /* ---- Algerie ---- */
      { navn:"Oussama Mimouni", land:"Algerie", flagg:"🇩🇿", lag:"Algerie", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Australia ---- */
      { navn:"Jack Haig", land:"Australia", flagg:"🇦🇺", lag:"Bahrain Victorious", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["Vuelta a España topp-10","Tour de Suisse topp-5"], form:"", notat:"" },
      { navn:"Jai Hindley", land:"Australia", flagg:"🇦🇺", lag:"Red Bull Bora-Hansgrohe", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:["Giro d'Italia 2022 vinner","Vuelta a España 2. plass 2020"], form:"", notat:"" },
      { navn:"Michael Matthews", land:"Australia", flagg:"🇦🇺", lag:"Jayco-AlUla", alder:36, fødtÅr:1990, spesialitet:"puncheur", palmarès:["VM sølv 2020","TdF etappeseier 9x","Gent-Wevelgem"], form:"", notat:"" },
      { navn:"Ben O'Connor", land:"Australia", flagg:"🇦🇺", lag:"Decathlon AG2R", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["4. TdF 2021","Critérium du Dauphiné etapper"], form:"", notat:"" },
      { navn:"Michael Storer", land:"Australia", flagg:"🇦🇺", lag:"Groupama-FDJ", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Vuelta a España 2 etapper"], form:"", notat:"" },
      { navn:"Luke Tuckwell", land:"Australia", flagg:"🇦🇺", lag:"Australia", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Østerrike ---- */
      { navn:"Felix Gall", land:"Østerrike", flagg:"🇦🇹", lag:"Decathlon AG2R", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["TdF etappeseier 2023","Critérium du Dauphiné 2023"], form:"", notat:"" },
      { navn:"Felix Grossschartner", land:"Østerrike", flagg:"🇦🇹", lag:"UAE Team Emirates", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["UAE Tour etapper","Volta a Catalunya etapp"], form:"", notat:"" },
      { navn:"Patrick Konrad", land:"Østerrike", flagg:"🇦🇹", lag:"Lidl-Trek", alder:35, fødtÅr:1991, spesialitet:"puncheur", palmarès:["TdF etappeseier 2021"], form:"", notat:"" },

      /* ---- Belgia (utover Evenepoel, van Aert og Nys) ---- */
      { navn:"Tiesj Benoot", land:"Belgia", flagg:"🇧🇪", lag:"Visma-Lease a Bike", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["Strade Bianche","Dwars door Vlaanderen"], form:"", notat:"Sterk hjelpemann for van Aert og Evenepoel." },
      { navn:"Quinten Hermans", land:"Belgia", flagg:"🇧🇪", lag:"Alpecin-Deceuninck", alder:31, fødtÅr:1995, spesialitet:"puncheur", palmarès:["GP Wallonie","Binche-Chimay-Binche"], form:"", notat:"" },
      { navn:"Alec Segaert", land:"Belgia", flagg:"🇧🇪", lag:"Lotto Dstny", alder:24, fødtÅr:2002, spesialitet:"tempo", palmarès:["U23 VM TT 2022","Belgisk TT-mester"], form:"", notat:"" },
      { navn:"Maxim Van Gils", land:"Belgia", flagg:"🇧🇪", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Volta a Catalunya etapper","Critérium du Dauphiné etapp"], form:"", notat:"" },
      { navn:"Gianni Vermeersch", land:"Belgia", flagg:"🇧🇪", lag:"Alpecin-Deceuninck", alder:34, fødtÅr:1992, spesialitet:"allrounder", palmarès:["Paris-Roubaix topp-5"], form:"", notat:"" },

      /* ---- Bermuda ---- */
      { navn:"Kaden Hopkins", land:"Bermuda", flagg:"🇧🇲", lag:"Bermuda", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Nicholas Narraway", land:"Bermuda", flagg:"🇧🇲", lag:"Bermuda", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Belize ---- */
      { navn:"Derrick Chavarria", land:"Belize", flagg:"🇧🇿", lag:"Belize", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Brasil ---- */
      { navn:"Henrique Avancini", land:"Brasil", flagg:"🇧🇷", lag:"Brasil", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["World Cup XCO-etapper"], form:"Primært MTB-rytter", notat:"" },

      /* ---- Canada ---- */
      { navn:"Derek Gee-West", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["TdF etappeseier 2023","Giro etappe"], form:"", notat:"" },
      { navn:"Hugo Houle", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["TdF etappeseier 2022"], form:"", notat:"" },
      { navn:"Michael Leonard", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Michael Woods", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:40, fødtÅr:1986, spesialitet:"klatrer", palmarès:["Il Lombardia topp-3","Flèche Wallonne","Vuelta etapper"], form:"", notat:"" },
      { navn:"Nickolas Zukowsky", land:"Canada", flagg:"🇨🇦", lag:"Q36.5 Pro Cycling", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Pier-Andre Cote", land:"Canada", flagg:"🇨🇦", lag:"EF Education-EasyPost", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Chile ---- */
      { navn:"Vicente Rojas", land:"Chile", flagg:"🇨🇱", lag:"Chile", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kina ---- */
      { navn:"You Li", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Colombia ---- */
      { navn:"Nairo Quintana", land:"Colombia", flagg:"🇨🇴", lag:"Movistar Team", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Giro d'Italia 2014","Vuelta a España 2016","TdF 2. plass 2x"], form:"", notat:"" },
      { navn:"Santiago Buitrago", land:"Colombia", flagg:"🇨🇴", lag:"Bahrain Victorious", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["Vuelta etapper","Giro etapper"], form:"", notat:"" },
      { navn:"Sergio Higuita", land:"Colombia", flagg:"🇨🇴", lag:"Red Bull Bora-Hansgrohe", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Vuelta al País Vasco vinner","TdF etappe"], form:"", notat:"" },
      { navn:"Harold Tejada", land:"Colombia", flagg:"🇨🇴", lag:"Astana Qazaqstan", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Brandon Smith Rivera", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Wilmar Paredes", land:"Colombia", flagg:"🇨🇴", lag:"Intermarché-Wanty", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Costa Rica ---- */
      { navn:"Luis Daniel Oses", land:"Costa Rica", flagg:"🇨🇷", lag:"Costa Rica", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kypros ---- */
      { navn:"Andreas Miltiadis", land:"Kypros", flagg:"🇨🇾", lag:"Kypros", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Tsjekkia ---- */
      { navn:"Mathias Vacek", land:"Tsjekkia", flagg:"🇨🇿", lag:"Lidl-Trek", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:["E3 Saxo Bank Classic topp-10"], form:"", notat:"" },
      { navn:"Jakub Otruba", land:"Tsjekkia", flagg:"🇨🇿", lag:"Tsjekkia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Pavel Novak", land:"Tsjekkia", flagg:"🇨🇿", lag:"Tsjekkia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Danmark (utover Pedersen og Nys) ---- */
      { navn:"Mikkel Frølich Honoré", land:"Danmark", flagg:"🇩🇰", lag:"EF Education-EasyPost", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:["Volta a Catalunya etapp"], form:"", notat:"" },
      { navn:"Kasper Asgreen", land:"Danmark", flagg:"🇩🇰", lag:"Soudal Quick-Step", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:["Ronde van Vlaanderen 2021","E3 Saxo Bank Classic 2021"], form:"", notat:"" },
      { navn:"Mikkel Bjerg", land:"Danmark", flagg:"🇩🇰", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"tempo", palmarès:["VM TT U23 3x"], form:"", notat:"" },
      { navn:"Andreas Kron", land:"Danmark", flagg:"🇩🇰", lag:"Lotto Dstny", alder:28, fødtÅr:1998, spesialitet:"puncheur", palmarès:["Giro etappe 2021"], form:"", notat:"" },
      { navn:"Michael Valgren", land:"Danmark", flagg:"🇩🇰", lag:"EF Education-EasyPost", alder:34, fødtÅr:1992, spesialitet:"puncheur", palmarès:["Amstel Gold Race 2018"], form:"", notat:"" },
      { navn:"Søren Kragh Andersen", land:"Danmark", flagg:"🇩🇰", lag:"Decathlon AG2R", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["TdF etappeseier 2x"], form:"", notat:"" },
      { navn:"Anthon Charmig", land:"Danmark", flagg:"🇩🇰", lag:"Uno-X Mobility", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:[], form:"", notat:"" },

      /* ---- Dominica ---- */
      { navn:"Kohath Baron", land:"Dominica", flagg:"🇩🇲", lag:"Dominica", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Ecuador (utover Narváez) ---- */
      { navn:"Richard Carapaz", land:"Ecuador", flagg:"🇪🇨", lag:"EF Education-EasyPost", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["Giro d'Italia 2019","OL gull 2020","Vuelta a España topp-3"], form:"", notat:"" },
      { navn:"Jefferson Cepeda", land:"Ecuador", flagg:"🇪🇨", lag:"Intermarché-Wanty", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro etappe"], form:"", notat:"" },

      /* ---- Eritrea ---- */
      { navn:"Biniam Girmay", land:"Eritrea", flagg:"🇪🇷", lag:"Intermarché-Wanty", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:["Gent-Wevelgem 2022","VM sølv 2022","TdF etappeseier 3x","Vuelta etapper"], form:"", notat:"" },
      { navn:"Amanuel Ghebreigzabhier", land:"Eritrea", flagg:"🇪🇷", lag:"Lidl-Trek", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Merhawi Kudus", land:"Eritrea", flagg:"🇪🇷", lag:"EF Education-EasyPost", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["Vuelta etapper","Tour of Britain etapper"], form:"", notat:"" },
      { navn:"Henok Mulubrhan", land:"Eritrea", flagg:"🇪🇷", lag:"Intermarché-Wanty", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Natnael Tesfatsion", land:"Eritrea", flagg:"🇪🇷", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:["Giro etappe 2022"], form:"", notat:"" },

      /* ---- Estland ---- */
      { navn:"Madis Mihkels", land:"Estland", flagg:"🇪🇪", lag:"Intermarché-Wanty", alder:24, fødtÅr:2002, spesialitet:"puncheur", palmarès:[], form:"", notat:"" },

      /* ---- Frankrike (utover Seixas) ---- */
      { navn:"Pavel Sivakov", land:"Frankrike", flagg:"🇫🇷", lag:"UAE Team Emirates", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Critérium du Dauphiné topp-5"], form:"", notat:"" },
      { navn:"Bruno Armirail", land:"Frankrike", flagg:"🇫🇷", lag:"Groupama-FDJ", alder:32, fødtÅr:1994, spesialitet:"tempo", palmarès:["Giro TT-etappe"], form:"", notat:"" },
      { navn:"Valentin Paret-Peintre", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro etapper"], form:"", notat:"" },
      { navn:"Jordan Labrosse", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Nicolas Prodhomme", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Alex Baudin", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Jordan Jegat", land:"Frankrike", flagg:"🇫🇷", lag:"Arkéa-B&B Hotels", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Tyskland ---- */
      { navn:"Florian Lipowitz", land:"Tyskland", flagg:"🇩🇪", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["2. Vuelta a España 2024","Tour de Suisse etapper"], form:"", notat:"" },
      { navn:"Maximilian Schachmann", land:"Tyskland", flagg:"🇩🇪", lag:"Soudal Quick-Step", alder:32, fødtÅr:1994, spesialitet:"puncheur", palmarès:["Paris-Nice 2x","Strade Bianche topp-5"], form:"", notat:"" },
      { navn:"Marco Brenner", land:"Tyskland", flagg:"🇩🇪", lag:"Lidl-Trek", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["Vuelta etappe 2023"], form:"", notat:"" },
      { navn:"Georg Zimmermann", land:"Tyskland", flagg:"🇩🇪", lag:"Intermarché-Wanty", alder:27, fødtÅr:1999, spesialitet:"puncheur", palmarès:["TdF etappe 2022"], form:"", notat:"" },
      { navn:"Felix Engelhardt", land:"Tyskland", flagg:"🇩🇪", lag:"Jayco-AlUla", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Nico Denz", land:"Tyskland", flagg:"🇩🇪", lag:"Red Bull Bora-Hansgrohe", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["Giro etappe 2023"], form:"", notat:"" },

      /* ---- Storbritannia (utover Pidcock) ---- */
      { navn:"Adam Yates", land:"Storbritannia", flagg:"🇬🇧", lag:"UAE Team Emirates", alder:34, fødtÅr:1992, spesialitet:"klatrer", palmarès:["UAE Tour vinner","Tour de Suisse vinner","TdF topp-5"], form:"", notat:"" },
      { navn:"Mark Donovan", land:"Storbritannia", flagg:"🇬🇧", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Oscar Onley", land:"Storbritannia", flagg:"🇬🇧", lag:"Picnic-PostNL", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["Paris-Nice topp-5 2024"], form:"", notat:"" },
      { navn:"Finlay Pickering", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"James Shaw", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Callum Thornley", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Fred Wright", land:"Storbritannia", flagg:"🇬🇧", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Clasica San Sebastián topp-5"], form:"", notat:"" },

      /* ---- Guinea-Bissau ---- */
      { navn:"Gil Landim Gomes", land:"Guinea-Bissau", flagg:"🇬🇼", lag:"Guinea-Bissau", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Hellas ---- */
      { navn:"Nikiforos Arvanitou", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Guatemala ---- */
      { navn:"Manuel Rodas", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:38, fødtÅr:1988, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Juan Vasquez", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Honduras ---- */
      { navn:"Fredd Matute", land:"Honduras", flagg:"🇭🇳", lag:"Honduras", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Ungarn ---- */
      { navn:"Attila Valter", land:"Ungarn", flagg:"🇭🇺", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro d'Italia hvit trøye","Giro etappe"], form:"", notat:"" },

      /* ---- Irland (utover Healy) ---- */
      { navn:"Darren Rafferty", land:"Irland", flagg:"🇮🇪", lag:"EF Education-EasyPost", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Jamie Meehan", land:"Irland", flagg:"🇮🇪", lag:"Irland", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Ryan Mullen", land:"Irland", flagg:"🇮🇪", lag:"Lidl-Trek", alder:31, fødtÅr:1995, spesialitet:"tempo", palmarès:[], form:"", notat:"" },

      /* ---- Israel ---- */
      { navn:"Nadav Raisberg", land:"Israel", flagg:"🇮🇱", lag:"Israel-Premier Tech", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Italia (utover Ciccone, Ganna, Pellizzari) ---- */
      { navn:"Alberto Bettiol", land:"Italia", flagg:"🇮🇹", lag:"Groupama-FDJ", alder:33, fødtÅr:1993, spesialitet:"puncheur", palmarès:["Ronde van Vlaanderen 2019","Strade Bianche topp-5"], form:"", notat:"" },
      { navn:"Mattia Cattaneo", land:"Italia", flagg:"🇮🇹", lag:"Soudal Quick-Step", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["TdF topp-10"], form:"", notat:"" },
      { navn:"Lorenzo Finn", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Davide Piganzoli", land:"Italia", flagg:"🇮🇹", lag:"Astana Qazaqstan", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["Giro etapper 2024"], form:"", notat:"" },
      { navn:"Christian Scaroni", land:"Italia", flagg:"🇮🇹", lag:"Astana Qazaqstan", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Matteo Trentin", land:"Italia", flagg:"🇮🇹", lag:"Tudor Pro Cycling", alder:37, fødtÅr:1989, spesialitet:"puncheur", palmarès:["VM sølv 2019","TdF etappeseier 3x","Gent-Wevelgem"], form:"", notat:"" },

      /* ---- Japan ---- */
      { navn:"Jo Hashikawa", land:"Japan", flagg:"🇯🇵", lag:"Japan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kasakhstan ---- */
      { navn:"Anton Kuzmin", land:"Kasakhstan", flagg:"🇰🇿", lag:"Kasakhstan", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Daniil Marukhin", land:"Kasakhstan", flagg:"🇰🇿", lag:"Astana Qazaqstan", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Latvia ---- */
      { navn:"Toms Skujins", land:"Latvia", flagg:"🇱🇻", lag:"Lidl-Trek", alder:35, fødtÅr:1991, spesialitet:"puncheur", palmarès:["Volta a Catalunya etapp","Tour of California"], form:"", notat:"" },
      { navn:"Emils Liepins", land:"Latvia", flagg:"🇱🇻", lag:"Lidl-Trek", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Kristians Belohvosciks", land:"Latvia", flagg:"🇱🇻", lag:"Soudal Quick-Step", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Martins Pluto", land:"Latvia", flagg:"🇱🇻", lag:"Latvia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Luxembourg ---- */
      { navn:"Arno Wallenborn", land:"Luxembourg", flagg:"🇱🇺", lag:"Decathlon AG2R", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Arthur Kluckers", land:"Luxembourg", flagg:"🇱🇺", lag:"Jayco-AlUla", alder:23, fødtÅr:2003, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Mauritius ---- */
      { navn:"Alexandre Mayer", land:"Mauritius", flagg:"🇲🇺", lag:"Groupama-FDJ", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Mexico (utover del Toro) ---- */
      { navn:"Eder Frayre", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Ulises Castillo", land:"Mexico", flagg:"🇲🇽", lag:"Arkéa-B&B Hotels", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Edgar Cadena", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Jose Escarcega", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Carlos Garcia", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Monaco ---- */
      { navn:"Victor Langellotti", land:"Monaco", flagg:"🇲🇨", lag:"Cofidis", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Mongolia ---- */
      { navn:"Maral-Erdene Batmunkh", land:"Mongolia", flagg:"🇲🇳", lag:"Mongolia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Nederland (utover van der Poel) ---- */
      { navn:"Bauke Mollema", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:40, fødtÅr:1986, spesialitet:"klatrer", palmarès:["Il Lombardia 2016","Clasica San Sebastián","TdF etappe"], form:"", notat:"" },
      { navn:"Daan Hoole", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Bart Lemmen", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Tim van Dijke", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Pascal Eenkhoorn", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Menno Huising", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Mathijs Paasschens", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- New Zealand ---- */
      { navn:"Finn Fisher-Black", land:"New Zealand", flagg:"🇳🇿", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:["Vuelta a España topp-10"], form:"", notat:"" },
      { navn:"Laurence Pithie", land:"New Zealand", flagg:"🇳🇿", lag:"Groupama-FDJ", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:["Giro etappe","Dwars door Vlaanderen topp-5"], form:"", notat:"" },
      { navn:"George Bennett", land:"New Zealand", flagg:"🇳🇿", lag:"UAE Team Emirates", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Vuelta etapper"], form:"", notat:"" },
      { navn:"Corbin Strong", land:"New Zealand", flagg:"🇳🇿", lag:"Israel-Premier Tech", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:[], form:"", notat:"" },
      { navn:"Ben Oliver", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Panama ---- */
      { navn:"Christofer Jurado", land:"Panama", flagg:"🇵🇦", lag:"Panama", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Polen ---- */
      { navn:"Michal Kwiatkowski", land:"Polen", flagg:"🇵🇱", lag:"Ineos Grenadiers", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["VM fellesstart 2014","Strade Bianche","Milano-Sanremo","E3 Saxo Bank Classic"], form:"", notat:"" },
      { navn:"Mateusz Gajdulewicz", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Jakub Kaczmarek", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Piotr Pekala", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Portugal ---- */
      { navn:"Joao Almeida", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro d'Italia hvit trøye 2020","UAE Tour vinner","Volta ao Algarve"], form:"", notat:"" },
      { navn:"Ivo Oliveira", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:27, fødtÅr:1999, spesialitet:"tempo", palmarès:[], form:"", notat:"" },
      { navn:"Nelson Oliveira", land:"Portugal", flagg:"🇵🇹", lag:"Movistar Team", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:["Giro etapper"], form:"", notat:"" },
      { navn:"Antonio Morgado", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:["VM U23 TT 2023"], form:"", notat:"" },
      { navn:"Afonso Eulalio", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Tiago Antunes", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Romania ---- */
      { navn:"Iustin-Ioan Vaidian", land:"Romania", flagg:"🇷🇴", lag:"Romania", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Saudi-Arabia ---- */
      { navn:"Ali Al Shaikhahmed", land:"Saudi-Arabia", flagg:"🇸🇦", lag:"Saudi-Arabia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Serbia ---- */
      { navn:"Mihajlo Stolic", land:"Serbia", flagg:"🇷🇸", lag:"Bahrain Victorious", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Slovakia ---- */
      { navn:"Martin Svrcek", land:"Slovakia", flagg:"🇸🇰", lag:"Israel-Premier Tech", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Slovenia (utover Roglič og Mohorič) ---- */
      { navn:"Jan Tratnik", land:"Slovenia", flagg:"🇸🇮", lag:"Visma-Lease a Bike", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:["Vuelta etapper","TdF etappe"], form:"", notat:"" },
      { navn:"Matevz Govekar", land:"Slovenia", flagg:"🇸🇮", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Luka Mezgec", land:"Slovenia", flagg:"🇸🇮", lag:"Jayco-AlUla", alder:37, fødtÅr:1989, spesialitet:"puncheur", palmarès:["TdF etapper"], form:"", notat:"" },
      { navn:"Tilen Finkst", land:"Slovenia", flagg:"🇸🇮", lag:"UAE Team Emirates", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Gal Glivar", land:"Slovenia", flagg:"🇸🇮", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Jakob Omrzel", land:"Slovenia", flagg:"🇸🇮", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Sør-Afrika ---- */
      { navn:"Byron Munton", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Spania ---- */
      { navn:"Juan Ayuso", land:"Spania", flagg:"🇪🇸", lag:"UAE Team Emirates", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["Vuelta a España topp-5","UAE Tour vinner","Volta a Catalunya vinner"], form:"", notat:"" },
      { navn:"Enric Mas", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["Vuelta a España 2. plass 2x","TdF topp-5"], form:"", notat:"" },
      { navn:"Ivan Romeo", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Igor Arrieta", land:"Spania", flagg:"🇪🇸", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Carlos Verona", land:"Spania", flagg:"🇪🇸", lag:"Lidl-Trek", alder:34, fødtÅr:1992, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Markel Beloki", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Raul Garcia Pierna", land:"Spania", flagg:"🇪🇸", lag:"Astana Qazaqstan", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Marcel Camprubi", land:"Spania", flagg:"🇪🇸", lag:"Kern Pharma", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Sverige ---- */
      { navn:"Jakob Soderqvist", land:"Sverige", flagg:"🇸🇪", lag:"Sverige", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Sveits ---- */
      { navn:"Marc Hirschi", land:"Sveits", flagg:"🇨🇭", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"puncheur", palmarès:["Flèche Wallonne vinner","Vuelta etapper","TdF etappe"], form:"", notat:"" },
      { navn:"Mauro Schmid", land:"Sveits", flagg:"🇨🇭", lag:"Jayco-AlUla", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["Giro etapper"], form:"", notat:"" },
      { navn:"Stefan Kung", land:"Sveits", flagg:"🇨🇭", lag:"Groupama-FDJ", alder:33, fødtÅr:1993, spesialitet:"tempo", palmarès:["VM TT sølv 3x","Flandern Rundt 2.","Tirreno-Adriatico etapper"], form:"", notat:"" },
      { navn:"Stefan Bissegger", land:"Sveits", flagg:"🇨🇭", lag:"EF Education-EasyPost", alder:27, fødtÅr:1999, spesialitet:"tempo", palmarès:["Etoile de Bessèges"], form:"", notat:"" },
      { navn:"Fabio Christen", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Jan Christen", land:"Sveits", flagg:"🇨🇭", lag:"UAE Team Emirates", alder:21, fødtÅr:2005, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Thailand ---- */
      { navn:"Athit Poulard", land:"Thailand", flagg:"🇹🇭", lag:"Thailand", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Ukraina ---- */
      { navn:"Heorhii Antonenko", land:"Ukraina", flagg:"🇺🇦", lag:"Intermarché-Wanty", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- USA (utover Simmons) ---- */
      { navn:"Matteo Jorgenson", land:"USA", flagg:"🇺🇸", lag:"Visma-Lease a Bike", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["Paris-Nice vinner 2024","Vuelta etapper"], form:"", notat:"" },
      { navn:"Brandon McNulty", land:"USA", flagg:"🇺🇸", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:["Vuelta etapper","UAE Tour etapper"], form:"", notat:"" },
      { navn:"Neilson Powless", land:"USA", flagg:"🇺🇸", lag:"EF Education-EasyPost", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["Clasica San Sebastián topp-5"], form:"", notat:"" },
      { navn:"Kevin Vermaerke", land:"USA", flagg:"🇺🇸", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Vuelta etappe"], form:"", notat:"" },
      { navn:"Sean Quinn", land:"USA", flagg:"🇺🇸", lag:"EF Education-EasyPost", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Larry Warbasse", land:"USA", flagg:"🇺🇸", lag:"Lotto Dstny", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Artem Shmidt", land:"USA", flagg:"🇺🇸", lag:"USA", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Uruguay ---- */
      { navn:"Eric Fagundez", land:"Uruguay", flagg:"🇺🇾", lag:"Uruguay", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Guillermo Silva", land:"Uruguay", flagg:"🇺🇾", lag:"Uruguay", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Usbekistan ---- */
      { navn:"Samandar Janikulov", land:"Usbekistan", flagg:"🇺🇿", lag:"Usbekistan", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Venezuela ---- */
      { navn:"Orluis Aular", land:"Venezuela", flagg:"🇻🇪", lag:"Caja Rural-Seguros RGA", alder:29, fødtÅr:1997, spesialitet:"puncheur", palmarès:["Vuelta a Burgos etapper"], form:"", notat:"" },
      { navn:"Francisco Penuela", land:"Venezuela", flagg:"🇻🇪", lag:"Venezuela", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Nøytral utøver ---- */
      { navn:"Aleksandr Vlasov", land:"Nøytral (ANA)", flagg:"🏳", lag:"Red Bull Bora-Hansgrohe", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Vuelta a España topp-10","Critérium du Dauphiné etapp"], form:"", notat:"" },
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

      /* ---- Norge (utover Aalerud, Ytterhus Haugset, Jorgensen, Berg Edseth) ---- */
      { navn:"Mie Bjorndal Ottestad", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["NM Vei"], form:"", notat:"" },

      /* ---- Algerie ---- */
      { navn:"Nesrine Houili", land:"Algerie", flagg:"🇩🇿", lag:"Algerie", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Australia ---- */
      { navn:"Amanda Spratt", land:"Australia", flagg:"🇦🇺", lag:"Lidl-Trek", alder:38, fødtÅr:1988, spesialitet:"klatrer", palmarès:["VM sølv 2019","Giro Donne topp-5"], form:"", notat:"" },
      { navn:"Georgia Baker", land:"Australia", flagg:"🇦🇺", lag:"Lidl-Trek", alder:30, fødtÅr:1996, spesialitet:"puncheur", palmarès:["TdF Femmes etapper"], form:"", notat:"" },
      { navn:"Sarah Gigante", land:"Australia", flagg:"🇦🇺", lag:"Movistar Team", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Lauretta Hanson", land:"Australia", flagg:"🇦🇺", lag:"Jayco-AlUla", alder:30, fødtÅr:1996, spesialitet:"puncheur", palmarès:["Gent-Wevelgem Femmes"], form:"", notat:"" },

      /* ---- Østerrike ---- */
      { navn:"Katharina Sadnik", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Carina Schrempf", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Christina Schweinberger", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["VM TT-bronse 2022"], form:"", notat:"" },

      /* ---- Belgia (utover Kopecky) ---- */
      { navn:"Shari Bossuyt", land:"Belgia", flagg:"🇧🇪", lag:"SD Worx-Protime", alder:24, fødtÅr:2002, spesialitet:"puncheur", palmarès:["Gent-Wevelgem Femmes topp-5"], form:"", notat:"" },
      { navn:"Lotte Claes", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Julie Van de Velde", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Margot Vanpachtenbeke", land:"Belgia", flagg:"🇧🇪", lag:"Belgia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Sandrine Tas", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Brasil ---- */
      { navn:"Ana Vitoria Magalhaes", land:"Brasil", flagg:"🇧🇷", lag:"Brasil", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Bulgaria ---- */
      { navn:"Gergana Stoyanova", land:"Bulgaria", flagg:"🇧🇬", lag:"Bulgaria", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Canada (utover Vallières) ---- */
      { navn:"Alison Jackson", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:31, fødtÅr:1995, spesialitet:"puncheur", palmarès:["Paris-Roubaix Femmes vinner 2023","Gent-Wevelgem Femmes"], form:"", notat:"" },
      { navn:"Maggie Coles-Lyster", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Olivia Baril", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Sarah Van Dam", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Adele Normand", land:"Canada", flagg:"🇨🇦", lag:"Canada", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Nadia Gontova", land:"Canada", flagg:"🇨🇦", lag:"Canada", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Chile ---- */
      { navn:"Catalina Soto", land:"Chile", flagg:"🇨🇱", lag:"Chile", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kina ---- */
      { navn:"Zhaoqi Feng", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Xin Tang", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Shimeng Zhu", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Colombia ---- */
      { navn:"Paula Patino", land:"Colombia", flagg:"🇨🇴", lag:"Movistar Team", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Giro Donne etapper"], form:"", notat:"" },
      { navn:"Diana Penuela", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Laura Daniela Rojas", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Komorene ---- */
      { navn:"Ramadhan Najma", land:"Komorene", flagg:"🇰🇲", lag:"Komorene", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kypros ---- */
      { navn:"Antri Christoforou", land:"Kypros", flagg:"🇨🇾", lag:"Kypros", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Danmark ---- */
      { navn:"Cecilie Uttrup Ludwig", land:"Danmark", flagg:"🇩🇰", lag:"FDJ-SUEZ", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:["VM sølv Bergen 2017","Flèche Wallonne topp-5","La Vuelta Femmes etapper"], form:"", notat:"" },
      { navn:"Solbjork Minke Anderson", land:"Danmark", flagg:"🇩🇰", lag:"Danmark", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Eritrea ---- */
      { navn:"Monalisa Araya", land:"Eritrea", flagg:"🇪🇷", lag:"Eritrea", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Estland ---- */
      { navn:"Ann-Christine Allik", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Janika Loiv", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Aidi Gerde Tuisk", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Finland ---- */
      { navn:"Ursula Linden", land:"Finland", flagg:"🇫🇮", lag:"Finland", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Frankrike ---- */
      { navn:"Evita Muzic", land:"Frankrike", flagg:"🇫🇷", lag:"FDJ-SUEZ", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["TdF Femmes etapper","Giro Donne topp-10"], form:"", notat:"" },
      { navn:"Cedrine Kerbaol", land:"Frankrike", flagg:"🇫🇷", lag:"Ceratizit-WNT", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["TdF Femmes etapper"], form:"", notat:"" },
      { navn:"Marie Le Net", land:"Frankrike", flagg:"🇫🇷", lag:"FDJ-SUEZ", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Juliette Berthet", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R La Mondiale", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Maeva Squiban", land:"Frankrike", flagg:"🇫🇷", lag:"Cofidis", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Lea Curinier", land:"Frankrike", flagg:"🇫🇷", lag:"Frankrike", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Celia Gery", land:"Frankrike", flagg:"🇫🇷", lag:"Frankrike", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Tyskland (utover Koch) ---- */
      { navn:"Ricarda Bauernfeind", land:"Tyskland", flagg:"🇩🇪", lag:"Canyon//SRAM Racing", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["TdF Femmes etappe"], form:"", notat:"" },
      { navn:"Liane Lippert", land:"Tyskland", flagg:"🇩🇪", lag:"Movistar Team", alder:27, fødtÅr:1999, spesialitet:"puncheur", palmarès:["Strade Bianche Donne","Giro Donne etapper"], form:"", notat:"" },
      { navn:"Antonia Niedermaier", land:"Tyskland", flagg:"🇩🇪", lag:"Canyon//SRAM Racing", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["TdF Femmes hvit trøye"], form:"", notat:"" },
      { navn:"Linda Riedmann", land:"Tyskland", flagg:"🇩🇪", lag:"Tyskland", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Storbritannia (utover Bäckstedt) ---- */
      { navn:"Anna Henderson", land:"Storbritannia", flagg:"🇬🇧", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"tempo", palmarès:["VM TT-bronse 2023","TdF Femmes etapper"], form:"", notat:"" },
      { navn:"Pfeiffer Georgi", land:"Storbritannia", flagg:"🇬🇧", lag:"SD Worx-Protime", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Lauren Dickson", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Flora Perkins", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Josie Nelson", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Hellas ---- */
      { navn:"Varvara Fasoi", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Argiro Milaki", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Guatemala ---- */
      { navn:"Jasmin Gabriela Soto", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Ungarn ---- */
      { navn:"Petra Zsanko", land:"Ungarn", flagg:"🇭🇺", lag:"Ungarn", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Indonesia ---- */
      { navn:"Firotika Magh Marenda", land:"Indonesia", flagg:"🇮🇩", lag:"Indonesia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Israel ---- */
      { navn:"Rotem Gafinovitz", land:"Israel", flagg:"🇮🇱", lag:"Human Powered Health", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Italia (utover Longo Borghini) ---- */
      { navn:"Silvia Persico", land:"Italia", flagg:"🇮🇹", lag:"UAE Team ADQ", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro Donne etapper","Strade Bianche topp-5"], form:"", notat:"" },
      { navn:"Erica Magnaldi", land:"Italia", flagg:"🇮🇹", lag:"UAE Team ADQ", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Sara Casasola", land:"Italia", flagg:"🇮🇹", lag:"Ceratizit-WNT", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Francesca Barale", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Eleonora Gasparrini", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Monica Trinca Colonel", land:"Italia", flagg:"🇮🇹", lag:"Ceratizit-WNT", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Japan ---- */
      { navn:"Karin Abe", land:"Japan", flagg:"🇯🇵", lag:"Japan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kasakhstan ---- */
      { navn:"Faina Potapova", land:"Kasakhstan", flagg:"🇰🇿", lag:"Kasakhstan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Kenya ---- */
      { navn:"Nancy Debe", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Monica Jelimo Kiplagat", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Kendra Masiga", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Luxembourg ---- */
      { navn:"Nina Berton", land:"Luxembourg", flagg:"🇱🇺", lag:"Cofidis", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Mauritius ---- */
      { navn:"Kim Le Court-Pienaar", land:"Mauritius", flagg:"🇲🇺", lag:"UAE Team ADQ", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["TdF Femmes etapper"], form:"", notat:"" },
      { navn:"Lucie de Marigny-Lagesse", land:"Mauritius", flagg:"🇲🇺", lag:"Mauritius", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Mexico ---- */
      { navn:"Romina Hinojosa", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Sara Roel", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Andrea Ramirez", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Lizbeth Salazar", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Namibia ---- */
      { navn:"Vera Looser", land:"Namibia", flagg:"🇳🇦", lag:"Namibia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Nederland (utover Vollering og Pieterse) ---- */
      { navn:"Riejanne Markus", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["VM-bronse 2023","TdF Femmes etapper"], form:"", notat:"" },
      { navn:"Lieke Nooijen", land:"Nederland", flagg:"🇳🇱", lag:"Fenix-Deceuninck", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Karlijn Swinkels", land:"Nederland", flagg:"🇳🇱", lag:"Jayco-AlUla", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Femke de Vries", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Amber Kraak", land:"Nederland", flagg:"🇳🇱", lag:"Nederland", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- New Zealand ---- */
      { navn:"Niamh Fisher-Black", land:"New Zealand", flagg:"🇳🇿", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["VM-sølv 2023","VM-sølv 2025","Giro Donne topp-5"], form:"", notat:"" },
      { navn:"Henrietta Christie", land:"New Zealand", flagg:"🇳🇿", lag:"Human Powered Health", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Ella Wyllie", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Bronwyn MacGregor", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Panama ---- */
      { navn:"Wendy Ducreux", land:"Panama", flagg:"🇵🇦", lag:"Panama", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Paraguay ---- */
      { navn:"Agua Marina Espinola", land:"Paraguay", flagg:"🇵🇾", lag:"Paraguay", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Filippinene ---- */
      { navn:"Mary Joyce Monton", land:"Filippinene", flagg:"🇵🇭", lag:"Filippinene", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Polen (utover Niewiadoma) ---- */
      { navn:"Marta Lach", land:"Polen", flagg:"🇵🇱", lag:"Ceratizit-WNT", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:["Tour of Flanders topp-10"], form:"", notat:"" },
      { navn:"Marta Jaskulska", land:"Polen", flagg:"🇵🇱", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:[], form:"", notat:"" },
      { navn:"Dominika Wlodarczyk", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Kaja Rysz", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Portugal ---- */
      { navn:"Daniela Campos", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Raquel Queiros", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Beatriz Roxo", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },

      /* ---- Rwanda ---- */
      { navn:"Diane Ingabire", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Xaveline Nirere", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Claudette Nyirarukundo", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Saudi-Arabia ---- */
      { navn:"Mashael Alhazmi", land:"Saudi-Arabia", flagg:"🇸🇦", lag:"Saudi-Arabia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Slovakia ---- */
      { navn:"Tereza Kurnicka", land:"Slovakia", flagg:"🇸🇰", lag:"Slovakia", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Slovenia ---- */
      { navn:"Nika Bobnar", land:"Slovenia", flagg:"🇸🇮", lag:"Alé BTC Ljubljana", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Sør-Afrika ---- */
      { navn:"Ashleigh Moolman-Pasio", land:"Sør-Afrika", flagg:"🇿🇦", lag:"AG Insurance-Soudal", alder:39, fødtÅr:1987, spesialitet:"klatrer", palmarès:["Giro Donne topp-5 3x"], form:"", notat:"" },
      { navn:"Lisa Bone", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Tiffany Keep", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Hayley Preen", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Spania ---- */
      { navn:"Mavi Garcia", land:"Spania", flagg:"🇪🇸", lag:"UAE Team ADQ", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Vuelta Femenina vinner","VM-bronse 2025","Giro Donne topp-5"], form:"", notat:"" },
      { navn:"Sara Martin", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Vuelta Femenina etapper"], form:"", notat:"" },
      { navn:"Usoa Ostolaza", land:"Spania", flagg:"🇪🇸", lag:"Bizkaia-Durango", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Paula Blasi", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Mireia Benito", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Sandra Alonso", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Sverige ---- */
      { navn:"Caroline Andersson", land:"Sverige", flagg:"🇸🇪", lag:"Ceratizit-WNT", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Julia Borgstrom", land:"Sverige", flagg:"🇸🇪", lag:"Jayco-AlUla", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Sveits (utover Reusser) ---- */
      { navn:"Noemi Ruegg", land:"Sveits", flagg:"🇨🇭", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Jasmin Liechti", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Ginia Caluori", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Steffi Haberlin", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Linda Zanetti", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Thailand ---- */
      { navn:"Pittayapron Seatun", land:"Thailand", flagg:"🇹🇭", lag:"Thailand", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Trinidad og Tobago ---- */
      { navn:"Teniel Campbell", land:"Trinidad og Tobago", flagg:"🇹🇹", lag:"Trinidad og Tobago", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Ukraina ---- */
      { navn:"Valeriya Kononenko", land:"Ukraina", flagg:"🇺🇦", lag:"Ukraina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Olha Kulynych", land:"Ukraina", flagg:"🇺🇦", lag:"Ukraina", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- USA ---- */
      { navn:"Kristen Faulkner", land:"USA", flagg:"🇺🇸", lag:"EF Education-Cannondale", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["OL-gull 2024 lagtempo","TdF Femmes topp-10"], form:"", notat:"" },
      { navn:"Kate Courtney", land:"USA", flagg:"🇺🇸", lag:"USA", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["VM MTB XCO 2018"], form:"Primært MTB-rytter", notat:"" },
      { navn:"Grace Arlandson", land:"USA", flagg:"🇺🇸", lag:"USA", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
      { navn:"Alexis Magner", land:"USA", flagg:"🇺🇸", lag:"USA", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Natalie Quinn", land:"USA", flagg:"🇺🇸", lag:"USA", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Lauren Stephens", land:"USA", flagg:"🇺🇸", lag:"USA", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Usbekistan ---- */
      { navn:"Madina Kakhkhorova", land:"Usbekistan", flagg:"🇺🇿", lag:"Usbekistan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Venezuela ---- */
      { navn:"Lilibeth Chacon", land:"Venezuela", flagg:"🇻🇪", lag:"Venezuela", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Zimbabwe ---- */
      { navn:"Skye Davidson", land:"Zimbabwe", flagg:"🇿🇼", lag:"Zimbabwe", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },
      { navn:"Rongina Ngandu", land:"Zimbabwe", flagg:"🇿🇼", lag:"Zimbabwe", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"", notat:"" },

      /* ---- Nøytral utøver ---- */
      { navn:"Kristina Novikova", land:"Nøytral (ANA)", flagg:"🏳", lag:"Nøytral", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:[], form:"", notat:"" },
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

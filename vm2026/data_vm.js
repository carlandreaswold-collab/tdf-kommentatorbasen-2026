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
    { dato:"Søn 20.09", kategori:"Tempo Herrer Elite",      distanse:"39,2 km", status:"ferdig",       vinner:"Remco Evenepoel (BEL) — 4. strake TT-tittel!" },
    { dato:"Man 21.09", kategori:"Tempo Kvinner U23",       distanse:"20,3 km", status:"ferdig",       vinner:"Felicity Wilson-Haffenden (AUS)" },
    { dato:"Man 21.09", kategori:"Tempo Herrer U23",        distanse:"31,3 km", status:"ferdig",       vinner:"Ryan Gal (NED)" },
    { dato:"Tir 22.09", kategori:"Blandet stafett-tempo",   distanse:"40,6 km", status:"ferdig",       vinner:"Italia" },
    { dato:"Tir 22.09", kategori:"Tempo Herrer Junior",     distanse:"20,3 km", status:"ferdig",       vinner:"Benjamín Noval (ESP)" },
    { dato:"Tir 22.09", kategori:"Tempo Kvinner Junior",    distanse:"10,7 km", status:"ferdig",       vinner:"Maria Okrucińska (POL)" },
    { dato:"Ons 23.09", kategori:"Hviledag",                distanse:"—",       status:"hviledag",     vinner:"—" },
    { dato:"Tor 24.09", kategori:"Fellesstart Kvinner U23", distanse:"134 km",  status:"ferdig",       vinner:"Viktória Chladoňová (SVK)" },
    { dato:"Fre 25.09", kategori:"Fellesstart Kvinner Jr",  distanse:"80,4 km", status:"idag",         vinner:"—" },
    { dato:"Fre 25.09", kategori:"Fellesstart Herrer Jr",   distanse:"~130 km", status:"ferdig",       vinner:"Benjamín Noval (ESP)" },
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
        palmarès:["VM Fellesstart 2022 (Wollongong)","VM TT 2023–2026 (4 strake!)","2. TdF 2026","Amstel Gold Race 2026","San Sebastián 4x","OL 2024 gull TT og sølv fellesstart"],
        form:"Vinner av VM TT for 4. gang på rad (20. sep). I livets beste form.",
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
      { navn:"Oussama Mimouni", land:"Algerie", flagg:"🇩🇿", lag:"Algerie", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-plass for Algerie — representerer Nord-Afrika med stolthet." },

      /* ---- Australia ---- */
      { navn:"Jack Haig", land:"Australia", flagg:"🇦🇺", lag:"Bahrain Victorious", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["Vuelta a España topp-10","Tour de Suisse topp-5"], form:"Erfaren lagspiller. Solid 2026-sesong.", notat:"Haig er en pålitelig arbeider og hjelperytter. Australia har et sterkt lag med Hindley og Matthews — Haig gjør grunt arbeid slik at stjernene kan skinne." },
      { navn:"Jai Hindley", land:"Australia", flagg:"🇦🇺", lag:"Red Bull Bora-Hansgrohe", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:["Giro d'Italia 2022 vinner","3. Giro d'Italia 2026","Vuelta a España 2. plass 2020"], form:"3. Giro d'Italia 2026 — comeback etter skader. I toppform.", notat:"Hindley vant Giro 2022, og i 2026 er han tilbake på pallen med 3. plass! Klatrer av høy klasse — Camillien-Houde er skapt for ham. Australias store håp på en selektiv bane. Se opp!" },
      { navn:"Michael Matthews", land:"Australia", flagg:"🇦🇺", lag:"Jayco-AlUla", alder:36, fødtÅr:1990, spesialitet:"puncheur", palmarès:["VM sølv 2020","TdF etappeseier 9x","Gent-Wevelgem"], form:"Veteran i toppnivå. 9x TdF-etapper — erfaren puncheur.", notat:"Matthews er i sluttfasen av karrieren (36 år) men fortsatt farlig i semi-selektive avslutninger. VM 2020 sølv er karrierens høydepunkt. Vil han overraske én siste gang i VM?" },
      { navn:"Ben O'Connor", land:"Australia", flagg:"🇦🇺", lag:"Decathlon AG2R", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["4. TdF 2021","Critérium du Dauphiné etapper"], form:"Solid 2026-sesong. Allsidig klatrer.", notat:"O'Connor er en klatrer som prøver å ta steget til toppen. Montréal-banen passer ham godt. Australia vil bruke ham som kort etter Hindley." },
      { navn:"Michael Storer", land:"Australia", flagg:"🇦🇺", lag:"Groupama-FDJ", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Vuelta a España 2 etapper"], form:"Klatrer som prøver seg i brudd.", notat:"Storer er en opportunist som prøver seg i brudd. Australia har nok med Hindley og Matthews — Storer vil trolig angripe tidlig." },
      { navn:"Luke Tuckwell", land:"Australia", flagg:"🇦🇺", lag:"Australia", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Bidrar for det australske laget i de tidlige fasene." },

      /* ---- Østerrike ---- */
      { navn:"Felix Gall", land:"Østerrike", flagg:"🇦🇹", lag:"Decathlon AG2R", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["TdF etappeseier 2023","Critérium du Dauphiné 2023","2. Giro d'Italia 2026","3. Vuelta a España 2026"], form:"UTROLIG sesong 2026: 2. Giro og 3. Vuelta! To GT-pallplasser i ett år er historisk.", notat:"Felix Gall er årets store overraskelse! Østerrikeren hadde et beskjedent palmarès, men i 2026 tok han SØLV i Giroen og BRONSE i Vuelten. Dobbel GT-pall i ett år er eksepsjonelt. 28 år og i karrierebeste form — han kan ta VM-medalje. Mørk hest nummer én i herrefeltet!" },
      { navn:"Felix Grossschartner", land:"Østerrike", flagg:"🇦🇹", lag:"UAE Team Emirates", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["UAE Tour etapper","Volta a Catalunya etapp"], form:"Lagspiller for UAE — hjelpemann for del Toro og Almeida.", notat:"Grossschartner er en pålitelig hjelpemann. Vil jobbe for lagkameratene hos UAE i de avgjørende rundene." },
      { navn:"Patrick Konrad", land:"Østerrike", flagg:"🇦🇹", lag:"Lidl-Trek", alder:35, fødtÅr:1991, spesialitet:"puncheur", palmarès:["TdF etappeseier 2021"], form:"35 år og erfaren lagspiller.", notat:"Konrad tok en TdF-etappe i 2021 og har vært en solid klatrer. Nå i karrierens sluttfase — vil bidra for Østerrike og kanskje prøve seg i brudd." },

      /* ---- Belgia (utover Evenepoel, van Aert og Nys) ---- */
      { navn:"Tiesj Benoot", land:"Belgia", flagg:"🇧🇪", lag:"Visma-Lease a Bike", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["Strade Bianche","Dwars door Vlaanderen"], form:"Solid 2026-sesong. Klar for å hjelpe van Aert.", notat:"Sterk hjelpemann for van Aert og Evenepoel. Strade Bianche-seier viser at han kan klatre — vil jobbe i de avgjørende rundene og holde Evenepoel i posisjon." },
      { navn:"Quinten Hermans", land:"Belgia", flagg:"🇧🇪", lag:"Alpecin-Deceuninck", alder:31, fødtÅr:1995, spesialitet:"puncheur", palmarès:["GP Wallonie","Binche-Chimay-Binche"], form:"God form. Allsidig puncheur.", notat:"Hermans er en allsidig rytter som kan gjøre godt arbeid for Evenepoel og van Aert. Puncheur-profil passer banen — og kan prøve seg i brudd." },
      { navn:"Alec Segaert", land:"Belgia", flagg:"🇧🇪", lag:"Lotto Dstny", alder:24, fødtÅr:2002, spesialitet:"tempo", palmarès:["U23 VM TT 2022","Belgisk TT-mester"], form:"Primært tempospesialist, 24 år.", notat:"Segaert er Belgias fremtid i tempo, men er med i fellesstart for å hjelpe lagkameratene i de første fasene. Bare 24 år — VM-erfaring er verdifull." },
      { navn:"Maxim Van Gils", land:"Belgia", flagg:"🇧🇪", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Volta a Catalunya etapper","Critérium du Dauphiné etapp"], form:"Eksplosiv puncheur med god klatrerkraft.", notat:"Van Gils er eksplosiv nok til å henge med i bakker. Rider for Bora — vil støtte Roglič — men kan prøve seg selv om sjansen byr seg." },
      { navn:"Gianni Vermeersch", land:"Belgia", flagg:"🇧🇪", lag:"Alpecin-Deceuninck", alder:34, fødtÅr:1992, spesialitet:"allrounder", palmarès:["Paris-Roubaix topp-5"], form:"Veteran og erfaren klassiker-rytter.", notat:"Vermeersch er en arbeider som vil jobbe for laget i de tidlige fasene. Klassisk hjelperytter med erfaring fra hardt terreng." },

      /* ---- Bermuda ---- */
      { navn:"Kaden Hopkins", land:"Bermuda", flagg:"🇧🇲", lag:"Bermuda", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Bermuda — et øysamfunn med stor sykkelpassion." },
      { navn:"Nicholas Narraway", land:"Bermuda", flagg:"🇧🇲", lag:"Bermuda", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Bermuda." },

      /* ---- Belize ---- */
      { navn:"Derrick Chavarria", land:"Belize", flagg:"🇧🇿", lag:"Belize", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Belize — representerer Mellom-Amerika." },

      /* ---- Brasil ---- */
      { navn:"Henrique Avancini", land:"Brasil", flagg:"🇧🇷", lag:"Brasil", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["World Cup XCO-etapper"], form:"Primært MTB-rytter", notat:"Avancini er en MTB-legende — 8x XCO World Cup-seier! På veien er han mer begrenset. Fascinerende å se en MTB-ikon prøve seg i VM fellesstart. Brasil er voksende som sykkelnasjon." },

      /* ---- Canada ---- */
      { navn:"Derek Gee-West", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["TdF etappeseier 2023","Giro etappe"], form:"Topp-10 GP Québec 2026. Kjenner banen godt — hjemmebane!", notat:"Gee-West er en av Canadas beste ryttere. TdF-etappe i 2023 og i god form. Hjemmebanepresset er reelt, men motivasjonen er enorm. Israel-laget med 4 kanadiere er imponerende." },
      { navn:"Hugo Houle", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["TdF etappeseier 2022"], form:"36 år og erfaren veteran. Solid lagspiller.", notat:"Houle tok en rørende TdF-etappe i 2022 dedikert til sin avdøde bror — et av de store øyeblikkene. 36 år og vet at dette kan være hans siste VM. Vil jobbe for laget og Vallières på hjemmebane." },
      { navn:"Michael Leonard", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder med Israel-Premier Tech.", notat:"Leonard er Canadas nestemann — hjelpemann og i vekst. Vil bidra i de første timene av løpet og hjelpe lagkameratene." },
      { navn:"Michael Woods", land:"Canada", flagg:"🇨🇦", lag:"Israel-Premier Tech", alder:40, fødtÅr:1986, spesialitet:"klatrer", palmarès:["Il Lombardia topp-3","Flèche Wallonne","Vuelta etapper"], form:"40 år og fortsatt aktiv! En av VM-feltets eldste.", notat:"Woods er en ekstraordinær atlet — ble profesjonell syklist fra løping! 40 år og FORTSATT i WorldTour. Il Lombardia topp-3 er toppmerittene. Kan han avslutte karrieren med en overraskelse på hjemmebane i Canada?" },
      { navn:"Nickolas Zukowsky", land:"Canada", flagg:"🇨🇦", lag:"Q36.5 Pro Cycling", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer i utvikling.", notat:"Zukowsky er en nasjonal representant — vil prøve seg i brudd og bidra for Canada." },
      { navn:"Pier-Andre Cote", land:"Canada", flagg:"🇨🇦", lag:"EF Education-EasyPost", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:[], form:"Solid lagspiller.", notat:"Hjemmebane-motivasjon. Vil jobbe for Gee-West og laget i de tidlige fasene." },

      /* ---- Chile ---- */
      { navn:"Vicente Rojas", land:"Chile", flagg:"🇨🇱", lag:"Chile", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-plass for Chile — representerer Sør-Amerika." },

      /* ---- Kina ---- */
      { navn:"You Li", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kina. Kinesisk sykkelsport er i vekst." },

      /* ---- Colombia ---- */
      { navn:"Nairo Quintana", land:"Colombia", flagg:"🇨🇴", lag:"Movistar Team", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Giro d'Italia 2014","Vuelta a España 2016","TdF 2. plass 2x"], form:"36 år og veteranlegende. Rutinert og erfaren klatrer.", notat:"Quintana er en legende — Giro 2014, Vuelta 2016, to ganger 2. i TdF. Nå 36 år og i karrierens siste fase. Men i et VM-løp med rett bane kan han alltid overraske. Colombia satser på ham som erfaren veteran og sentimental favoritt." },
      { navn:"Santiago Buitrago", land:"Colombia", flagg:"🇨🇴", lag:"Bahrain Victorious", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["Vuelta a España KOM-trøye 2026","Vuelta etapper","Giro etapper"], form:"KOM-trøyen i Vuelta a España 2026 — herlig klatrer. I toppform.", notat:"Buitrago er Colombias store håp! Vant KOM-trøyen i Vuelta 2026 — bekrefter at han er en av verdens beste klatrere. Montréal passer ham godt. Mørk hest fra Colombia — en å følge!" },
      { navn:"Sergio Higuita", land:"Colombia", flagg:"🇨🇴", lag:"Red Bull Bora-Hansgrohe", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Vuelta al País Vasco vinner","TdF etappe"], form:"God vårform med País Vasco-seier.", notat:"Higuita er en allsidig klatrer som liker å angripe. Vuelta País Vasco-seier viser at han kan vinne selektive en-dagere. Colombia har en sterk trio med Quintana, Buitrago og Higuita." },
      { navn:"Harold Tejada", land:"Colombia", flagg:"🇨🇴", lag:"Astana Qazaqstan", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["Topp-10 Vuelta a España 2026"], form:"Topp-10 Vuelta a España 2026 — i karrierebeste form.", notat:"Tejada er en ubetalt arbeider fra Colombia. Topp-10 i Vuelten er en sensasjon! Colombia stiller sterkt — Tejada er et hemmelig våpen som kan bidra i avslutningen." },
      { navn:"Brandon Smith Rivera", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Colombiansk nasjonal representant — landet stiller sterkt med klatrere." },
      { navn:"Wilmar Paredes", land:"Colombia", flagg:"🇨🇴", lag:"Intermarché-Wanty", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Intermarché-Wanty.", notat:"Paredes er en solid klatrer som vil bidra i brudd og hjelpe Buitrago for Colombia." },

      /* ---- Costa Rica ---- */
      { navn:"Luis Daniel Oses", land:"Costa Rica", flagg:"🇨🇷", lag:"Costa Rica", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Costa Rica — representerer Mellom-Amerika." },

      /* ---- Kypros ---- */
      { navn:"Andreas Miltiadis", land:"Kypros", flagg:"🇨🇾", lag:"Kypros", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kypros." },

      /* ---- Tsjekkia ---- */
      { navn:"Mathias Vacek", land:"Tsjekkia", flagg:"🇨🇿", lag:"Lidl-Trek", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:["E3 Saxo Bank Classic topp-10"], form:"Solid allrounder med Lidl-Trek — god i klassikere.", notat:"Vacek er Tsjekkias beste håp. Allsidig rytter som kan hjelpe i ulike situasjoner. Sterk nok til å henge med gjennom meste av løpet." },
      { navn:"Jakub Otruba", land:"Tsjekkia", flagg:"🇨🇿", lag:"Tsjekkia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Tsjekkia." },
      { navn:"Pavel Novak", land:"Tsjekkia", flagg:"🇨🇿", lag:"Tsjekkia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Tsjekkia." },

      /* ---- Danmark (utover Pedersen og Nys) ---- */
      { navn:"Mikkel Frølich Honoré", land:"Danmark", flagg:"🇩🇰", lag:"EF Education-EasyPost", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:["Volta a Catalunya etapp"], form:"Klok taktisk rytter. God lagspiller.", notat:"Honoré er en smart rytter som bidrar taktisk. Vil hjelpe laget og kanskje prøve seg i brudd." },
      { navn:"Kasper Asgreen", land:"Danmark", flagg:"🇩🇰", lag:"Soudal Quick-Step", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:["Ronde van Vlaanderen 2021","E3 Saxo Bank Classic 2021"], form:"Tilbake etter skadeperiode. Klar for VM.", notat:"Asgreen vant Flanderne og E3 i 2021 — stortalent som ble herjet av skader. Montréal er en mulighet til å vise at han er tilbake. I godt humør etter å ha gjenopprettet formen." },
      { navn:"Mikkel Bjerg", land:"Danmark", flagg:"🇩🇰", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"tempo", palmarès:["VM TT U23 3x"], form:"Tempospesialist og allsidig hjelper.", notat:"Bjerg er primært en tempomann, men UAE bruker ham som hjelper for del Toro i fellesstart. Sterk nok til å bidra i de avgjørende fasene." },
      { navn:"Andreas Kron", land:"Danmark", flagg:"🇩🇰", lag:"Lotto Dstny", alder:28, fødtÅr:1998, spesialitet:"puncheur", palmarès:["Giro etappe 2021"], form:"Opportunistisk puncheur.", notat:"Kron er en rytter som prøver seg i brudd. Giro-etappen i 2021 var karrierehøydepunktet. Kan prøve seg i Montréal." },
      { navn:"Michael Valgren", land:"Danmark", flagg:"🇩🇰", lag:"EF Education-EasyPost", alder:34, fødtÅr:1992, spesialitet:"puncheur", palmarès:["Amstel Gold Race 2018"], form:"Veteran, 34 år. Rutinert lagspiller.", notat:"Valgren vant Amstel 2018 i en overraskelse. Nå 34 år og primært hjelpemann. Erfaren taktiker som forstår disse løpene." },
      { navn:"Søren Kragh Andersen", land:"Danmark", flagg:"🇩🇰", lag:"Decathlon AG2R", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["TdF etappeseier 2x"], form:"Veteran og solid lagspiller.", notat:"SKA tok to TdF-etapper i 2020 — et av de store danske øyeblikkene. Nå primært hjelpemann for Pedersen. Erfaren rytter som vet hva som skjer taktisk." },
      { navn:"Anthon Charmig", land:"Danmark", flagg:"🇩🇰", lag:"Uno-X Mobility", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:[], form:"Ung puncheur fra Uno-X.", notat:"Charmig er Uno-X sin representant og i utvikling. Kan prøve seg i brudd og hjelpe det dansk laget." },

      /* ---- Dominica ---- */
      { navn:"Kohath Baron", land:"Dominica", flagg:"🇩🇲", lag:"Dominica", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Dominica — et lite karibisk øysamfunn med stor sykkelspiritt." },

      /* ---- Ecuador (utover Narváez) ---- */
      { navn:"Richard Carapaz", land:"Ecuador", flagg:"🇪🇨", lag:"EF Education-EasyPost", alder:33, fødtÅr:1993, spesialitet:"klatrer", palmarès:["Giro d'Italia 2019","OL gull 2020","Vuelta a España topp-3","TdF KOM-trøye 2026 + 2 etapper"], form:"KOM-trøyen TdF 2026 + 2 etappeseirer! I toppform.", notat:"Carapaz er en legende som aldri gir opp! Giro-vinner 2019, OL-gull 2020 — og i 2026 tok han KOM-trøyen i TdF med to etappeseirer. 33 år og fortsatt en trussel i bakker. Ecuador stiller med to virkelig sterke ryttere (Carapaz + Narváez)!" },
      { navn:"Jefferson Cepeda", land:"Ecuador", flagg:"🇪🇨", lag:"Intermarché-Wanty", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro etappe"], form:"Klatrer med Intermarché-Wanty.", notat:"Cepeda er Ecuadors nestemann. Vil hjelpe Carapaz og Narváez i de vanskelige fasene." },

      /* ---- Eritrea ---- */
      { navn:"Biniam Girmay", land:"Eritrea", flagg:"🇪🇷", lag:"Intermarché-Wanty", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:["Gent-Wevelgem 2022","VM sølv 2022","TdF etappeseier 3x","Vuelta etapper"], form:"3x TdF-etapper og Vuelta-seier. En av verdens beste avsluttere.", notat:"Girmay er en fenomenal rytter — VM sølv 2022 som 22-åring! Han er eksplosiv nok til å henge med i en liten gruppe. Eritrea stiller sterkt. Kan han klatre Camillien-Houde i de siste rundene? Ja — han klatrer bedre enn folk tror. Mørk hest!" },
      { navn:"Amanuel Ghebreigzabhier", land:"Eritrea", flagg:"🇪🇷", lag:"Lidl-Trek", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:[], form:"Erfaren klatrer og lagspiller.", notat:"Nasjonal representant som hjelper Girmay for Eritrea. En av Afrikas sterkeste sykkelnæringer." },
      { navn:"Merhawi Kudus", land:"Eritrea", flagg:"🇪🇷", lag:"EF Education-EasyPost", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["Vuelta etapper","Tour of Britain etapper"], form:"Klatrer med EF Education. Solid erfaring.", notat:"Kudus er en god klatrer. Eritrea har et overraskende sterkt lag — vil prøve seg i brudd og hjelpe Girmay." },
      { navn:"Henok Mulubrhan", land:"Eritrea", flagg:"🇪🇷", lag:"Intermarché-Wanty", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 23 år.", notat:"Mulubrhan er Eritreas fremtid. Bare 23 år og allerede i WorldTour — imponerende for et afrikansk land." },
      { navn:"Natnael Tesfatsion", land:"Eritrea", flagg:"🇪🇷", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:["Giro etappe 2022"], form:"Klatrer med Giro-etappeseier på CV-en.", notat:"Tesfatsion er en solid klatrer. Eritrea er en av Afrikas sterkeste sykkelnæringer — imponerende å se dem stille med et fullt lag!" },

      /* ---- Estland ---- */
      { navn:"Madis Mihkels", land:"Estland", flagg:"🇪🇪", lag:"Intermarché-Wanty", alder:24, fødtÅr:2002, spesialitet:"puncheur", palmarès:[], form:"Ung puncheur, 24 år — i utvikling.", notat:"Mihkels er Estlands store håp. Bare 24 år og allerede i WorldTour med Intermarché — sjelden posisjon for en estisk rytter." },

      /* ---- Frankrike (utover Seixas) ---- */
      { navn:"Pavel Sivakov", land:"Frankrike", flagg:"🇫🇷", lag:"UAE Team Emirates", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Critérium du Dauphiné topp-5"], form:"Allsidig klatrer for UAE — jobber for del Toro.", notat:"Sivakov er russisk-født men rider for Frankrike. Solid klatrer som støtter del Toro hos UAE. Frankrike har stor dybde med Seixas i spissen." },
      { navn:"Bruno Armirail", land:"Frankrike", flagg:"🇫🇷", lag:"Groupama-FDJ", alder:32, fødtÅr:1994, spesialitet:"tempo", palmarès:["Giro TT-etappe"], form:"Tempomann og allsidig arbeider.", notat:"Armirail er Frankrikes arbeider — solid tempomann som vil drive laget fremover i de vanskelige fasene." },
      { navn:"Valentin Paret-Peintre", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro etapper"], form:"Klatrer med GT-erfaring. Offensiv stil.", notat:"VPP er en klatrer som prøver å ta steget fra etappeseirer til store en-dagere. Montréal er en mulighet. Vil angripe." },
      { navn:"Jordan Labrosse", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"Nasjonal representant. Frankrike satser på Seixas som komet, men har god dybde i klatrerrekkene." },
      { navn:"Nicolas Prodhomme", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:[], form:"Klatrer og allrounder.", notat:"Prodhomme vil hjelpe Seixas i de avgjørende rundene og prøve seg i brudd." },
      { navn:"Alex Baudin", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer i utvikling.", notat:"Baudin er en lovende klatrer som vil hente erfaring fra VM og bidra for laget." },
      { navn:"Jordan Jegat", land:"Frankrike", flagg:"🇫🇷", lag:"Arkéa-B&B Hotels", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder.", notat:"Frankrike stiller sterkt med Seixas i spissen. Jegat bidrar som hjelper." },

      /* ---- Tyskland ---- */
      { navn:"Florian Lipowitz", land:"Tyskland", flagg:"🇩🇪", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["2. Vuelta a España 2024","Tour de Suisse etapper"], form:"Krasjet ut av TdF 2026 i etappe 16 — hadde vært 5. sammenlagt! Fersk til VM.", notat:"Lipowitz hadde sin store TdF-sjanse i 2026 — lå 5. sammenlagt da han krasjet i tempoetappen! Drømmescenariet ble mareritt. Men han er fersk til VM etter å ha unngått GT-slitasje. Klatrer med mye å bevise — motivert som aldri før." },
      { navn:"Maximilian Schachmann", land:"Tyskland", flagg:"🇩🇪", lag:"Soudal Quick-Step", alder:32, fødtÅr:1994, spesialitet:"puncheur", palmarès:["Paris-Nice 2x","Strade Bianche topp-5"], form:"Veteran og erfaren klassiker-rytter.", notat:"Schachmann vant Paris-Nice to ganger — en av Tysklands beste allsidige ryttere. Fellesstart VM er krevende, men han er erfaren nok til å henge med og kan prøve seg i brudd." },
      { navn:"Marco Brenner", land:"Tyskland", flagg:"🇩🇪", lag:"Lidl-Trek", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["Vuelta etappe 2023"], form:"23 år og i sterk utvikling.", notat:"Brenner er Tysklands fremtid — tok en Vuelta-etappe som 20-åring! I 2026 er han sterkere. Kan overraske i brudd og vil kjempe for en plass fremme." },
      { navn:"Georg Zimmermann", land:"Tyskland", flagg:"🇩🇪", lag:"Intermarché-Wanty", alder:27, fødtÅr:1999, spesialitet:"puncheur", palmarès:["TdF etappe 2022"], form:"Opportunistisk puncheur som elsker brudd.", notat:"Zimmermann tok en TdF-etappe i 2022 og elsker å angripe tidlig. Vil sannsynligvis prøve seg i brudd allerede i de tidlige fasene av VM." },
      { navn:"Felix Engelhardt", land:"Tyskland", flagg:"🇩🇪", lag:"Jayco-AlUla", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"Engelhardt er Tysklands neste klatrer. Vil lære av VM og hjelpe laget." },
      { navn:"Nico Denz", land:"Tyskland", flagg:"🇩🇪", lag:"Red Bull Bora-Hansgrohe", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["Giro etappe 2023"], form:"Allrounder med GT-etappeseier. Solid hjelper.", notat:"Denz er en solid gjennomkjørt rytter med Bora. Vil hjelpe Lipowitz og laget i de avgjørende fasene av VM." },

      /* ---- Storbritannia (utover Pidcock) ---- */
      { navn:"Adam Yates", land:"Storbritannia", flagg:"🇬🇧", lag:"UAE Team Emirates", alder:34, fødtÅr:1992, spesialitet:"klatrer", palmarès:["UAE Tour vinner","Tour de Suisse vinner","TdF topp-5"], form:"34 år og veteran. Solid sesong med UAE.", notat:"Yates er Storbritannias erfarne leder bak Pidcock. UAE-ryggraden er sterk — han vil jobbe for Pidcock og del Toro. Kan prøve seg selv i avslutningen om sjansen byr seg." },
      { navn:"Mark Donovan", land:"Storbritannia", flagg:"🇬🇧", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer i utvikling.", notat:"Donovan er en klatrer i utvikling. Vil jobbe for laget og henge med så lenge som mulig i de vanskelige rundene." },
      { navn:"Oscar Onley", land:"Storbritannia", flagg:"🇬🇧", lag:"Picnic-PostNL", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["Paris-Nice topp-5 2024","6. Vuelta a España 2026","Hvit trøye Vuelta a España 2026"], form:"6. Vuelta a España 2026 + hvit trøye som 23-åring — britisk superstjerne i emning!", notat:"Onley er kanskje årets største overraskelse! 23 år og tok 6. plass + hvit trøye i Vuelta 2026. Storbritannia har funnet sin klatrer. VM er tidlig for en som nettopp kjørte sin beste Vuelta — men Onley er fersk og motivert." },
      { navn:"Finlay Pickering", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia." },
      { navn:"James Shaw", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia." },
      { navn:"Callum Thornley", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia." },
      { navn:"Fred Wright", land:"Storbritannia", flagg:"🇬🇧", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Clasica San Sebastián topp-5"], form:"Aggressiv puncheur. Elsker å prøve seg i brudd.", notat:"Wright er en rytter som angriper gjerne tidlig. Clasica San Sebastian-resultatet viser at han kan avslutte på høyt nivå. Kan bli en viktig brikke i bruddscenarier." },

      /* ---- Guinea-Bissau ---- */
      { navn:"Gil Landim Gomes", land:"Guinea-Bissau", flagg:"🇬🇼", lag:"Guinea-Bissau", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Guinea-Bissau — representerer Vest-Afrika." },

      /* ---- Hellas ---- */
      { navn:"Nikiforos Arvanitou", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Hellas — sjelden VM-deltakelse." },

      /* ---- Guatemala ---- */
      { navn:"Manuel Rodas", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:38, fødtÅr:1988, spesialitet:"allrounder", palmarès:[], form:"38 år — en av VM-feltets eldste!", notat:"Rodas er en legende i guatemalansk sykling. 38 år og fortsatt representerer nasjonen. Sjelden VM-deltakelse for Guatemala." },
      { navn:"Juan Vasquez", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Guatemala." },

      /* ---- Honduras ---- */
      { navn:"Fredd Matute", land:"Honduras", flagg:"🇭🇳", lag:"Honduras", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Honduras — representerer Mellom-Amerika." },

      /* ---- Ungarn ---- */
      { navn:"Attila Valter", land:"Ungarn", flagg:"🇭🇺", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro d'Italia hvit trøye","Giro etappe"], form:"Visma-lagspiller og Ungarns beste klatrer.", notat:"Valter er Ungarns beste rytter noensinne i WorldTour. Giro hvit trøye bekrefter klassen. Med Visma vil han primært hjelpe laget, men er sterk nok til å prøve seg selv." },

      /* ---- Irland (utover Healy) ---- */
      { navn:"Darren Rafferty", land:"Irland", flagg:"🇮🇪", lag:"EF Education-EasyPost", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"Allrounder og god hjelper.", notat:"Rafferty hjelper Healy og bidrar i de tidlige fasene. Irland satser alt på Healy som kapteinen." },
      { navn:"Jamie Meehan", land:"Irland", flagg:"🇮🇪", lag:"Irland", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Irland — Healy er kapteinen." },
      { navn:"Ryan Mullen", land:"Irland", flagg:"🇮🇪", lag:"Lidl-Trek", alder:31, fødtÅr:1995, spesialitet:"tempo", palmarès:[], form:"Tempospesialist og god hjelper.", notat:"Mullen er primært en temporytte, men bidrar i starten av fellesstarten. Hjelper laget til Healy er alene fremme." },

      /* ---- Israel ---- */
      { navn:"Nadav Raisberg", land:"Israel", flagg:"🇮🇱", lag:"Israel-Premier Tech", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder i utvikling.", notat:"Nasjonal representant for Israel. Israel-Premier Tech er et kanadisk team med sterke hjemmeressurser." },

      /* ---- Italia (utover Ciccone, Ganna, Pellizzari) ---- */
      { navn:"Alberto Bettiol", land:"Italia", flagg:"🇮🇹", lag:"Groupama-FDJ", alder:33, fødtÅr:1993, spesialitet:"puncheur", palmarès:["Ronde van Vlaanderen 2019","Strade Bianche topp-5"], form:"33 år og erfaren klassiker-rytter.", notat:"Bettiol vant Flanderne 2019 — en av Italias klassiker-ryttere. Nå primært hjelper, men Montréal-banen kan passe ham i et selektivt brudd." },
      { navn:"Mattia Cattaneo", land:"Italia", flagg:"🇮🇹", lag:"Soudal Quick-Step", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["TdF topp-10"], form:"36 år og i karrierens siste fase. Pålitelig arbeider.", notat:"Cattaneo er en solid veteran. 36 år og primært hjelpemann for Evenepoel hos Soudal. Erfaring er hans styrke." },
      { navn:"Lorenzo Finn", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 23 år.", notat:"Nasjonal representant fra Italia. Italias fremtid er lys med Pellizzari og Finn." },
      { navn:"Davide Piganzoli", land:"Italia", flagg:"🇮🇹", lag:"Astana Qazaqstan", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["Giro etapper 2024"], form:"Klatrer med Giro-etappeerfaring.", notat:"Piganzoli er en lovende klatrer. Giro-etappene i 2024 viser at han kan vinne på toppt nivå. Vil hjelpe Ciccone og Pellizzari." },
      { navn:"Christian Scaroni", land:"Italia", flagg:"🇮🇹", lag:"Astana Qazaqstan", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Astana.", notat:"Scaroni er en allsidig klatrer og hjelper for Italia i de vanskelige fasene." },
      { navn:"Matteo Trentin", land:"Italia", flagg:"🇮🇹", lag:"Tudor Pro Cycling", alder:37, fødtÅr:1989, spesialitet:"puncheur", palmarès:["VM sølv 2019","TdF etappeseier 3x","Gent-Wevelgem"], form:"37 år — veteranlegende. VM sølv 2019 på Harrogate.", notat:"Trentin er 37 år og i karrierens absolutte siste fase. VM sølv 2019 (Harrogate) var høydepunktet. Nå primært hjelper. Men taktisk erfaring fra en VM-avslutning er uvurderlig." },

      /* ---- Japan ---- */
      { navn:"Jo Hashikawa", land:"Japan", flagg:"🇯🇵", lag:"Japan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Japan. Japansk sykling er i vekst." },

      /* ---- Kasakhstan ---- */
      { navn:"Anton Kuzmin", land:"Kasakhstan", flagg:"🇰🇿", lag:"Kasakhstan", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kasakhstan." },
      { navn:"Daniil Marukhin", land:"Kasakhstan", flagg:"🇰🇿", lag:"Astana Qazaqstan", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer med Astana.", notat:"Marukhin er Kasakhstans neste generasjon. Astana-basen er sterk for landets sykkelutvikling." },

      /* ---- Latvia ---- */
      { navn:"Toms Skujins", land:"Latvia", flagg:"🇱🇻", lag:"Lidl-Trek", alder:35, fødtÅr:1991, spesialitet:"puncheur", palmarès:["Volta a Catalunya etapp","Tour of California"], form:"35 år og veteran — Latvias sykkellegende.", notat:"Skujins er Latvias beste rytter noensinne i nyere tid. Elsker å angripe og prøve seg i brudd. 35 år — dette kan være hans siste VM. Et angrep fra Skujins er alltid underholdende." },
      { navn:"Emils Liepins", land:"Latvia", flagg:"🇱🇻", lag:"Lidl-Trek", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:[], form:"Allrounder og solid hjelper.", notat:"Liepins er en solid arbeider for Lidl-Trek. Hjelper Skujins og laget." },
      { navn:"Kristians Belohvosciks", land:"Latvia", flagg:"🇱🇻", lag:"Soudal Quick-Step", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder.", notat:"Belohvosciks er Latvias fremtid — allerede i WorldTour med Soudal. Vil bidra for laget." },
      { navn:"Martins Pluto", land:"Latvia", flagg:"🇱🇻", lag:"Latvia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Latvia." },

      /* ---- Luxembourg ---- */
      { navn:"Arno Wallenborn", land:"Luxembourg", flagg:"🇱🇺", lag:"Decathlon AG2R", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer med Decathlon, 24 år.", notat:"Wallenborn er Luxembourgs fremtid — en klatrer som passer VM-banen godt. AG2R-kontrakt er imponerende for en luxemburgsk rytter." },
      { navn:"Arthur Kluckers", land:"Luxembourg", flagg:"🇱🇺", lag:"Jayco-AlUla", alder:23, fødtÅr:2003, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder.", notat:"Kluckers er 23 år og Jayco-AlUla representant fra Luxembourg. Hjelper Wallenborn." },

      /* ---- Mauritius ---- */
      { navn:"Alexandre Mayer", land:"Mauritius", flagg:"🇲🇺", lag:"Groupama-FDJ", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"WorldTour-rytter fra Mauritius — sjeldent!", notat:"Mayer er Mauritius eneste WorldTour-rytter. Sjelden VM-plass for Mauritius — et øysamfunn med stor sykkelspiritt." },

      /* ---- Mexico (utover del Toro) ---- */
      { navn:"Eder Frayre", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico — del Toro er kapteinen." },
      { navn:"Ulises Castillo", land:"Mexico", flagg:"🇲🇽", lag:"Arkéa-B&B Hotels", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder med Arkéa.", notat:"Castillo er WorldTour-representant for Mexico. Vil bidra i de tidlige fasene." },
      { navn:"Edgar Cadena", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },
      { navn:"Jose Escarcega", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },
      { navn:"Carlos Garcia", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },

      /* ---- Monaco ---- */
      { navn:"Victor Langellotti", land:"Monaco", flagg:"🇲🇨", lag:"Cofidis", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:[], form:"Klatrer fra Monaco med WorldTour-kontrakt.", notat:"Monaco er et lite fyrstendømme med stor sykkelpassion — lander den legendariske Monaco GP. Langellotti representerer nasjonen med Cofidis-kontrakt." },

      /* ---- Mongolia ---- */
      { navn:"Maral-Erdene Batmunkh", land:"Mongolia", flagg:"🇲🇳", lag:"Mongolia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Mongolia — representerer Asia." },

      /* ---- Nederland (utover van der Poel) ---- */
      { navn:"Bauke Mollema", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:40, fødtÅr:1986, spesialitet:"klatrer", palmarès:["Il Lombardia 2016","Clasica San Sebastián","TdF etappe"], form:"40 år! En av VM-feltets eldste ryttere.", notat:"Mollema er 40 år og fortsatt aktiv — en ekte legende! Il Lombardia-seier 2016 er merket. Montréal er hans type bane — selektiv med bakker. Kan han ta et overraskende resultat i karrierens solnedgang?" },
      { navn:"Daan Hoole", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allrounder og lagspiller.", notat:"Hoole er en solid hjelper for MvdP og Mollema hos Lidl-Trek. Bidrar i de vanskelige fasene." },
      { navn:"Bart Lemmen", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Visma.", notat:"Lemmen er en klatrer i utvikling. Bidrar for laget og hjelper i de selektive rundene." },
      { navn:"Tim van Dijke", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"van Dijke er Nederlandsk fremtid. Bidrar for laget og henter erfaring fra VM." },
      { navn:"Pascal Eenkhoorn", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Lang og robust allrounder.", notat:"Eenkhoorn er en solid hjelper. Lang og kraftig rytter som arbeider hardt for laget." },
      { navn:"Menno Huising", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder.", notat:"Huising bidrar for MvdP og Mollema hos Lidl-Trek." },
      { navn:"Mathijs Paasschens", land:"Nederland", flagg:"🇳🇱", lag:"Lidl-Trek", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder og hjelper.", notat:"Paasschens er en solid hjelper for Lidl-Trek. Bidrar i de tidlige fasene." },

      /* ---- New Zealand ---- */
      { navn:"Finn Fisher-Black", land:"New Zealand", flagg:"🇳🇿", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:["Vuelta a España topp-10"], form:"Vuelta topp-10 — i sterk utvikling.", notat:"Fisher-Black er New Zealands fremtid! Bror av Niamh Fisher-Black (kvinner). Tar steget fra U23 til elite. Vuelta topp-10 bekrefter klassen — kan overraske i VM." },
      { navn:"Laurence Pithie", land:"New Zealand", flagg:"🇳🇿", lag:"Groupama-FDJ", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:["Giro etappe","Dwars door Vlaanderen topp-5"], form:"Lovende puncheur i sterk utvikling.", notat:"Pithie er en klatrer/puncheur som vokser raskt. Giro-etappen viser at han kan vinne på toppt nivå. New Zealand har faktisk et solid lag!" },
      { navn:"George Bennett", land:"New Zealand", flagg:"🇳🇿", lag:"UAE Team Emirates", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Vuelta etapper"], form:"36 år og veteranrolle hos UAE.", notat:"Bennett er en lang karriere med UAE. 36 år og erfaren — vil bidra som hjelper for del Toro og Almeida i avgjørende faser." },
      { navn:"Corbin Strong", land:"New Zealand", flagg:"🇳🇿", lag:"Israel-Premier Tech", alder:25, fødtÅr:2001, spesialitet:"puncheur", palmarès:[], form:"Lovende puncheur, 25 år.", notat:"Strong er en lovende rytter. New Zealand er i sterk utvikling som sykkelnasjon." },
      { navn:"Ben Oliver", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for New Zealand." },

      /* ---- Panama ---- */
      { navn:"Christofer Jurado", land:"Panama", flagg:"🇵🇦", lag:"Panama", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Panama — representerer Mellom-Amerika." },

      /* ---- Polen ---- */
      { navn:"Michal Kwiatkowski", land:"Polen", flagg:"🇵🇱", lag:"Ineos Grenadiers", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:["VM fellesstart 2014","Strade Bianche","Milano-Sanremo","E3 Saxo Bank Classic"], form:"36 år og VM-mester 2014. Hjelper for Pidcock i Ineos.", notat:"Kwiatkowski er en sann VM-mester — vant i 2014 i Ponferrada! 36 år og fortsatt aktiv. Primært hjelpemann for Pidcock, men med sin erfaring forstår han alltid hva som skjer taktisk i en VM-avslutning." },
      { navn:"Mateusz Gajdulewicz", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Polen." },
      { navn:"Jakub Kaczmarek", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Polen." },
      { navn:"Piotr Pekala", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Polen." },

      /* ---- Portugal ---- */
      { navn:"Joao Almeida", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro d'Italia hvit trøye 2020","UAE Tour vinner","Volta ao Algarve"], form:"Solid sesong med UAE — hjelper for del Toro.", notat:"Almeida er en sterk klatrer som hjelper UAE i GT-er. I VM-fellesstart kan han prøve seg selv om sjansen byr seg — klatrer godt nok til å overleve Camillien-Houde." },
      { navn:"Ivo Oliveira", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:27, fødtÅr:1999, spesialitet:"tempo", palmarès:[], form:"Tempospesialist med UAE.", notat:"Oliveira er UAE's tempo-hjelper. I fellesstart bidrar han i de tidlige fasene for laget." },
      { navn:"Nelson Oliveira", land:"Portugal", flagg:"🇵🇹", lag:"Movistar Team", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:["Giro etapper"], form:"35 år og veteran. Erfaren arbeider.", notat:"Veteranrolle for Portugal. Erfaren allrounder som bidrar taktisk for laget." },
      { navn:"Antonio Morgado", land:"Portugal", flagg:"🇵🇹", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:["VM U23 TT 2023"], form:"22 år og VM U23 TT-gull! I sterk utvikling.", notat:"Morgado er Portugals fremtid! VM U23 TT-gull i 2023 som 19-åring er ekstraordinært. 22 år og allerede i elitelaget. Kan overraske i selektive avslutninger." },
      { navn:"Afonso Eulalio", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Portugal." },
      { navn:"Tiago Antunes", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Portugal." },

      /* ---- Romania ---- */
      { navn:"Iustin-Ioan Vaidian", land:"Romania", flagg:"🇷🇴", lag:"Romania", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Romania." },

      /* ---- Saudi-Arabia ---- */
      { navn:"Ali Al Shaikhahmed", land:"Saudi-Arabia", flagg:"🇸🇦", lag:"Saudi-Arabia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Saudi-Arabia. Saudisk sykling er i rask vekst etter Tour de France Saoudite." },

      /* ---- Serbia ---- */
      { navn:"Mihajlo Stolic", land:"Serbia", flagg:"🇷🇸", lag:"Bahrain Victorious", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"22 år og WorldTour-kontrakt med Bahrain. Imponerende!", notat:"Stolic er Serbias største sykkeltalent. Bare 22 år og allerede i WorldTour med Bahrain — sjelden posisjon for en serbisk rytter. VM er en stor arena for ham." },

      /* ---- Slovakia ---- */
      { navn:"Martin Svrcek", land:"Slovakia", flagg:"🇸🇰", lag:"Israel-Premier Tech", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Allrounder med Israel-Premier Tech.", notat:"Svrcek er Slovakias representative i WorldTour. Bidrar for laget." },

      /* ---- Slovenia (utover Roglič og Mohorič) ---- */
      { navn:"Jan Tratnik", land:"Slovenia", flagg:"🇸🇮", lag:"Visma-Lease a Bike", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:["Vuelta etapper","TdF etappe"], form:"35 år og erfaren hjelper for Visma.", notat:"Tratnik er Slovenias arbeider — tar seg av Roglič og laget. GT-etappeseiere viser at han kan vinne på toppt nivå." },
      { navn:"Matevz Govekar", land:"Slovenia", flagg:"🇸🇮", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Bahrain.", notat:"Govekar er Slovenias neste generasjon. Klatrer i utvikling." },
      { navn:"Luka Mezgec", land:"Slovenia", flagg:"🇸🇮", lag:"Jayco-AlUla", alder:37, fødtÅr:1989, spesialitet:"puncheur", palmarès:["TdF etapper"], form:"37 år — veteran og sprinter/puncheur.", notat:"Mezgec er 37 år og i karrierens siste fase. TdF-etapper på karrieren. Bidrar i de første rundene for Slovenia." },
      { navn:"Tilen Finkst", land:"Slovenia", flagg:"🇸🇮", lag:"UAE Team Emirates", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer med UAE Team Emirates.", notat:"Finkst hjelper del Toro og Almeida hos UAE, og representerer Slovenia. Klatrer i utvikling." },
      { navn:"Gal Glivar", land:"Slovenia", flagg:"🇸🇮", lag:"Bahrain Victorious", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allrounder som hjelper Roglič.", notat:"Glivar representerer Slovenia. Hjelper Roglič og Mohorič i de avgjørende fasene." },
      { navn:"Jakob Omrzel", land:"Slovenia", flagg:"🇸🇮", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"22 år og allerede UAE Team Emirates — eksepsjonelt talent!", notat:"Omrzel er Slovenias nye komet — 22 år og allerede i UAE Team Emirates. Klatrer i sterk utvikling. En å følge for fremtiden." },

      /* ---- Sør-Afrika ---- */
      { navn:"Byron Munton", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sør-Afrika." },

      /* ---- Spania ---- */
      { navn:"Juan Ayuso", land:"Spania", flagg:"🇪🇸", lag:"UAE Team Emirates", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["Vuelta a España topp-5","UAE Tour vinner","Volta a Catalunya vinner"], form:"24 år og i sterk utvikling. Klar for en stor én-dager.", notat:"Ayuso er 24 år og fortsatt i utvikling. Etter å ha vært del Toros lagkamerat kan han prøve seg selv. Klatrer som trives på selektive baner. Spania er sterk med Mas, Ayuso og Romeo." },
      { navn:"Enric Mas", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:["Vuelta a España 2026 VINNER!","Vuelta a España 2. plass 2x","TdF topp-5"], form:"VANT Vuelta a España 2026 — første Grand Tour-seier! I livets beste form.", notat:"MAS VANT VUELTEN 2026! Etter to 2. plasser er Enric Mas endelig GT-vinner. 31 år og i karrierebeste form. Montréal er annerledes enn GT — men med denne formen er han farlig. Spania sender sin Vuelta-mester til VM. Undervurder ham ikke." },
      { navn:"Ivan Romeo", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"Romeo er en av Spanias mest lovende klatrere. Vil prøve seg i brudd og hjelpe Mas for Movistar." },
      { navn:"Igor Arrieta", land:"Spania", flagg:"🇪🇸", lag:"UAE Team Emirates", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"22 år og UAE-kontrakt. Ekstremt lovende talent.", notat:"Arrieta er bare 22 år og allerede i UAE Team Emirates. Klatrer med fremtiden foran seg — VM er tidlig for ham, men UAE satser langsiktig." },
      { navn:"Carlos Verona", land:"Spania", flagg:"🇪🇸", lag:"Lidl-Trek", alder:34, fødtÅr:1992, spesialitet:"allrounder", palmarès:[], form:"34 år og erfaren allrounder.", notat:"Verona er en veteran som har jobbet for de beste lagene. Nå er han arbeider for Spania og Lidl-Trek." },
      { navn:"Markel Beloki", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant — Spania har enorm dybde i klatrerrekkene!" },
      { navn:"Raul Garcia Pierna", land:"Spania", flagg:"🇪🇸", lag:"Astana Qazaqstan", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Astana.", notat:"Garcia Pierna bidrar for det spanske laget. Klatrer som passer VM-banen." },
      { navn:"Marcel Camprubi", land:"Spania", flagg:"🇪🇸", lag:"Kern Pharma", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Spansk nasjonal klatrer.", notat:"Camprubi er en nasjonal representant fra Spania — vil prøve seg i brudd." },

      /* ---- Sverige ---- */
      { navn:"Jakob Soderqvist", land:"Sverige", flagg:"🇸🇪", lag:"Sverige", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sverige — sjelden VM-plass." },

      /* ---- Sveits ---- */
      { navn:"Marc Hirschi", land:"Sveits", flagg:"🇨🇭", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"puncheur", palmarès:["Flèche Wallonne vinner","Vuelta etapper","TdF etappe"], form:"Solid allrounder. Sterk vår og god form mot VM.", notat:"Hirschi er en av Sveits' store talenter — vant Flèche Wallonne og er en evig angriper. Eksplosiv nok i bakker. Sveits har et overraskende sterkt lag med Hirschi, Küng og Bissegger." },
      { navn:"Mauro Schmid", land:"Sveits", flagg:"🇨🇭", lag:"Jayco-AlUla", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["Giro etapper"], form:"Allrounder med GT-etappeseier.", notat:"Schmid er en solid klatrer/allrounder. Vil bidra for laget og prøve seg i brudd." },
      { navn:"Stefan Kung", land:"Sveits", flagg:"🇨🇭", lag:"Groupama-FDJ", alder:33, fødtÅr:1993, spesialitet:"tempo", palmarès:["VM TT sølv 3x","Flandern Rundt 2.","Tirreno-Adriatico etapper"], form:"3x VM TT-sølv — en tempolegend.", notat:"Küng er en av historiens beste temposyklister, men henger godt nok i bakker til å bidra. I fellesstart er Hirschi Sveits' store håp, men Küng kan overraske med en eksplosiv avslutning." },
      { navn:"Stefan Bissegger", land:"Sveits", flagg:"🇨🇭", lag:"EF Education-EasyPost", alder:27, fødtÅr:1999, spesialitet:"tempo", palmarès:["Etoile de Bessèges"], form:"Tempospesialist, 27 år.", notat:"Bissegger er primært en tempomann. I fellesstart er han arbeider for laget og bidrar i de tidlige fasene." },
      { navn:"Fabio Christen", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant fra Sveits. Bidrar i de tidlige fasene." },
      { navn:"Jan Christen", land:"Sveits", flagg:"🇨🇭", lag:"UAE Team Emirates", alder:21, fødtÅr:2005, spesialitet:"klatrer", palmarès:[], form:"Bare 21 år og UAE Team Emirates-kontrakt! Utrolig talent.", notat:"Jan Christen er 21 år og en av de mest spennende unge klatrerne i pelotongen. UAE satser på ham for fremtiden. VM-erfaring er uvurderlig for ham." },

      /* ---- Thailand ---- */
      { navn:"Athit Poulard", land:"Thailand", flagg:"🇹🇭", lag:"Thailand", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Thailand. Sjelden VM-deltakelse for Sørøst-Asia." },

      /* ---- Ukraina ---- */
      { navn:"Heorhii Antonenko", land:"Ukraina", flagg:"🇺🇦", lag:"Intermarché-Wanty", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer med Intermarché-Wanty.", notat:"Antonenko representerer Ukraina — et land i krig. Hans deltagelse er et statement om styrke og motstand. Rider profesjonelt i WorldTour for Intermarché." },

      /* ---- USA (utover Simmons) ---- */
      { navn:"Matteo Jorgenson", land:"USA", flagg:"🇺🇸", lag:"Visma-Lease a Bike", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:["Paris-Nice vinner 2024","Vuelta etapper"], form:"Paris-Nice-vinner 2024. I toppform.", notat:"Jorgenson er USAs beste klatrer og sammenlagtrytter. Paris-Nice-seieren viser at han kan vinne selektive en-dagere. USA har et av de sterkeste lagene med Simmons, Jorgenson og McNulty." },
      { navn:"Brandon McNulty", land:"USA", flagg:"🇺🇸", lag:"UAE Team Emirates", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:["Vuelta etapper","UAE Tour etapper"], form:"Allrounder og sterk hjelper for UAE.", notat:"McNulty er en solid klatrer/allrounder. Jobber for del Toro hos UAE, men kan prøve seg selv om sjansen byr seg." },
      { navn:"Neilson Powless", land:"USA", flagg:"🇺🇸", lag:"EF Education-EasyPost", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["Clasica San Sebastián topp-5"], form:"Smart taktisk rytter med EF Education.", notat:"Powless er en klok taktisk rytter som forstår ett-dages-løp godt. Kan bidra for laget i avgjørende situasjoner." },
      { navn:"Kevin Vermaerke", land:"USA", flagg:"🇺🇸", lag:"Red Bull Bora-Hansgrohe", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:["Vuelta etappe"], form:"Lovende puncheur med Bora.", notat:"Vermaerke er en rytter i utvikling. Vuelta-etappen viser at han kan vinne på høyt nivå." },
      { navn:"Sean Quinn", land:"USA", flagg:"🇺🇸", lag:"EF Education-EasyPost", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Allrounder og lagspiller.", notat:"Nasjonal representant som bidrar for laget og hjelper Jorgenson." },
      { navn:"Larry Warbasse", land:"USA", flagg:"🇺🇸", lag:"Lotto Dstny", alder:35, fødtÅr:1991, spesialitet:"allrounder", palmarès:[], form:"35 år og veteran i WorldTour.", notat:"Warbasse er en rutinert arbeider — 35 år og fortsatt i WorldTour. Erfaren hjelper." },
      { navn:"Artem Shmidt", land:"USA", flagg:"🇺🇸", lag:"USA", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for USA." },

      /* ---- Uruguay ---- */
      { navn:"Eric Fagundez", land:"Uruguay", flagg:"🇺🇾", lag:"Uruguay", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Uruguay — sjelden VM-deltakelse fra Sør-Amerika." },
      { navn:"Guillermo Silva", land:"Uruguay", flagg:"🇺🇾", lag:"Uruguay", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Uruguay." },

      /* ---- Usbekistan ---- */
      { navn:"Samandar Janikulov", land:"Usbekistan", flagg:"🇺🇿", lag:"Usbekistan", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Usbekistan — representerer Sentral-Asia." },

      /* ---- Venezuela ---- */
      { navn:"Orluis Aular", land:"Venezuela", flagg:"🇻🇪", lag:"Caja Rural-Seguros RGA", alder:29, fødtÅr:1997, spesialitet:"puncheur", palmarès:["Vuelta a Burgos etapper"], form:"Puncheur med erfaring fra spanske løp.", notat:"Aular er en av Venezuelas beste noensinne. Eksplosiv puncheur som vil prøve seg i brudd. Venezuelas store håp i VM." },
      { navn:"Francisco Penuela", land:"Venezuela", flagg:"🇻🇪", lag:"Venezuela", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Venezuela." },

      /* ---- Nøytral utøver ---- */
      { navn:"Aleksandr Vlasov", land:"Nøytral (ANA)", flagg:"🏳", lag:"Red Bull Bora-Hansgrohe", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Vuelta a España topp-10","Critérium du Dauphiné etapp"], form:"Topp-10 i GT-er som nøytral utøver. Sterk klatrer.", notat:"Vlasov er russisk men konkurrerer som nøytral utøver (ANA) etter krigen. Sterk klatrer som bor i Red Bull Bora-lagkameratenes skygge — Roglič er lagkapteinen." },
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
      { navn:"Mie Bjorndal Ottestad", land:"Norge", flagg:"🇳🇴", lag:"Uno-X Mobility", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["NM Vei"], form:"Norsk mester og erfaren allrounder.", notat:"Bjørndal Ottestad er en av Norges mest erfarne ryttere. Vil bidra som hjelper og hente erfaring fra VM." },

      /* ---- Algerie ---- */
      { navn:"Nesrine Houili", land:"Algerie", flagg:"🇩🇿", lag:"Algerie", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-plass for Algerie — representerer Nord-Afrika." },

      /* ---- Australia ---- */
      { navn:"Amanda Spratt", land:"Australia", flagg:"🇦🇺", lag:"Lidl-Trek", alder:38, fødtÅr:1988, spesialitet:"klatrer", palmarès:["VM sølv 2019","Giro Donne topp-5"], form:"38 år og fortsatt aktiv — en veteranlegende!", notat:"Spratt er en sykkelhelt — 38 år og fortsatt representerer Australia på VM-nivå. VM sølv 2019 (Harrogate) er karrierens høydepunkt. Nå i karrierens siste fase, men Montréal-banen passer henne godt." },
      { navn:"Georgia Baker", land:"Australia", flagg:"🇦🇺", lag:"Lidl-Trek", alder:30, fødtÅr:1996, spesialitet:"puncheur", palmarès:["TdF Femmes etapper"], form:"Allsidig puncheur med TdF Femmes-erfaring.", notat:"Baker er en allsidig rytter. Vil prøve seg i brudd og bidra for Australia." },
      { navn:"Sarah Gigante", land:"Australia", flagg:"🇦🇺", lag:"Movistar Team", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer med Movistar, 25 år.", notat:"Gigante er Australias fremtid — en klatrer i sterk utvikling. Passer VM-banen godt." },
      { navn:"Lauretta Hanson", land:"Australia", flagg:"🇦🇺", lag:"Jayco-AlUla", alder:30, fødtÅr:1996, spesialitet:"puncheur", palmarès:["Gent-Wevelgem Femmes"], form:"Gent-Wevelgem-vinner! Sterk puncheur.", notat:"Hanson er en sterk puncheur — Gent-Wevelgem viser at hun kan vinne selektive løp. Montréal passer henne. Dark horse for Australia!" },

      /* ---- Østerrike ---- */
      { navn:"Katharina Sadnik", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Østerrike." },
      { navn:"Carina Schrempf", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Østerrike." },
      { navn:"Christina Schweinberger", land:"Østerrike", flagg:"🇦🇹", lag:"Østerrike", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:["VM TT-bronse 2022"], form:"VM TT-bronse 2022 — Østerrikes beste rytter.", notat:"Schweinberger er Østerrikes beste rytter i feltet. VM TT-bronse i 2022 viser toppnivå. I fellesstart er hun mer allrounder — kan bidra for laget." },

      /* ---- Belgia (utover Kopecky) ---- */
      { navn:"Shari Bossuyt", land:"Belgia", flagg:"🇧🇪", lag:"SD Worx-Protime", alder:24, fødtÅr:2002, spesialitet:"puncheur", palmarès:["Gent-Wevelgem Femmes topp-5"], form:"Ung puncheur, 24 år.", notat:"Bossuyt er Belgias neste generasjon. Vil hjelpe Kopecky og kanskje prøve seg selv om sjansen byr seg." },
      { navn:"Lotte Claes", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder og lagspiller.", notat:"Nasjonal representant. Hjelper Kopecky og SD Worx-ryttere i de tidlige fasene." },
      { navn:"Julie Van de Velde", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"Allrounder.", notat:"Hjelper Belgia i de vanskelige fasene av løpet." },
      { navn:"Margot Vanpachtenbeke", land:"Belgia", flagg:"🇧🇪", lag:"Belgia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Belgia har enorm dybde — Vanpachtenbeke bidrar i de tidlige fasene." },
      { navn:"Sandrine Tas", land:"Belgia", flagg:"🇧🇪", lag:"Proximus-Alphamotorhomes", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:[], form:"32 år og erfaren allrounder.", notat:"Tas er en veteran som bidrar i de tidlige fasene. Belgisk erfaring er uvurderlig." },

      /* ---- Brasil ---- */
      { navn:"Ana Vitoria Magalhaes", land:"Brasil", flagg:"🇧🇷", lag:"Brasil", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Brasil. Brasiliansk sykling er i vekst." },

      /* ---- Bulgaria ---- */
      { navn:"Gergana Stoyanova", land:"Bulgaria", flagg:"🇧🇬", lag:"Bulgaria", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Bulgaria." },

      /* ---- Canada (utover Vallières) ---- */
      { navn:"Alison Jackson", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:31, fødtÅr:1995, spesialitet:"puncheur", palmarès:["Paris-Roubaix Femmes vinner 2023","Gent-Wevelgem Femmes"], form:"Paris-Roubaix Femmes-vinner 2023! Toppform på hjemmebane.", notat:"Jackson er en sann overraskelse! Vant Roubaix 2023 i et av kvindefellets store choc-resultater. På hjemmebane i Canada er motivasjonen enorm. Vil hun prøve seg i brudd i VM?" },
      { navn:"Maggie Coles-Lyster", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allsidig rytter med EF.", notat:"Coles-Lyster er en allsidig rytter som bidrar for laget og hjelper Vallières." },
      { navn:"Olivia Baril", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:[], form:"Klatrer som passer VM-banen.", notat:"Baril er en klatrer som passer Montréal-banen godt. Hjelper Vallières." },
      { navn:"Sarah Van Dam", land:"Canada", flagg:"🇨🇦", lag:"EF Education-Cannondale", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder og hjelper.", notat:"Van Dam hjelper laget. Canada stiller med et av de sterkeste hjemmelagene i historien." },
      { navn:"Adele Normand", land:"Canada", flagg:"🇨🇦", lag:"Canada", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Canada." },
      { navn:"Nadia Gontova", land:"Canada", flagg:"🇨🇦", lag:"Canada", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Canada." },

      /* ---- Chile ---- */
      { navn:"Catalina Soto", land:"Chile", flagg:"🇨🇱", lag:"Chile", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Chile." },

      /* ---- Kina ---- */
      { navn:"Zhaoqi Feng", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kina." },
      { navn:"Xin Tang", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kina." },
      { navn:"Shimeng Zhu", land:"Kina", flagg:"🇨🇳", lag:"Kina", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kina." },

      /* ---- Colombia ---- */
      { navn:"Paula Patino", land:"Colombia", flagg:"🇨🇴", lag:"Movistar Team", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:["Giro Donne etapper"], form:"Klatrer med Giro Donne-erfaring.", notat:"Patino er Colombias beste kvinner-klatrer. Giro Donne-etapper bekrefter klassen. Colombia er i sterk utvikling i kvinner-sykling." },
      { navn:"Diana Penuela", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant fra Colombia." },
      { navn:"Laura Daniela Rojas", land:"Colombia", flagg:"🇨🇴", lag:"Colombia", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant fra Colombia." },

      /* ---- Komorene ---- */
      { navn:"Ramadhan Najma", land:"Komorene", flagg:"🇰🇲", lag:"Komorene", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Komorene — representerer Øst-Afrika og Det indiske hav." },

      /* ---- Kypros ---- */
      { navn:"Antri Christoforou", land:"Kypros", flagg:"🇨🇾", lag:"Kypros", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kypros." },

      /* ---- Danmark ---- */
      { navn:"Cecilie Uttrup Ludwig", land:"Danmark", flagg:"🇩🇰", lag:"FDJ-SUEZ", alder:30, fødtÅr:1996, spesialitet:"klatrer", palmarès:["VM sølv Bergen 2017","Flèche Wallonne topp-5","La Vuelta Femmes etapper"], form:"30 år og alltid i fremre del av feltet. Offensiv stil.", notat:"Uttrup Ludwig er Danmarkes store klatrer — alltid offensiv og ekspressiv. VM sølv 2017 i Bergen (på norsk hjemmebane!) der hun angrep. Montréal passer hennes aggressive stil. Kan hun gjenta 2017?" },
      { navn:"Solbjork Minke Anderson", land:"Danmark", flagg:"🇩🇰", lag:"Danmark", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Danmark — hjelper Uttrup Ludwig." },

      /* ---- Eritrea ---- */
      { navn:"Monalisa Araya", land:"Eritrea", flagg:"🇪🇷", lag:"Eritrea", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Eritrea. Eritrea er en av Afrikas sterkeste sykkelnæringer — se bare på herrefeltet!" },

      /* ---- Estland ---- */
      { navn:"Ann-Christine Allik", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Estland." },
      { navn:"Janika Loiv", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Estland." },
      { navn:"Aidi Gerde Tuisk", land:"Estland", flagg:"🇪🇪", lag:"Estland", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Estland." },

      /* ---- Finland ---- */
      { navn:"Ursula Linden", land:"Finland", flagg:"🇫🇮", lag:"Finland", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Finland." },

      /* ---- Frankrike ---- */
      { navn:"Evita Muzic", land:"Frankrike", flagg:"🇫🇷", lag:"FDJ-SUEZ", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["TdF Femmes etapper","Giro Donne topp-10"], form:"Frankrikes beste klatrer. Offensiv og alltid i brudd.", notat:"Muzic er Frankrikes store håp i klatringen — alltid offensiv og prøver seg. Montréal passer henne godt. Frankrike satser på Muzic og Kerbaol som klatrer-duo." },
      { navn:"Cedrine Kerbaol", land:"Frankrike", flagg:"🇫🇷", lag:"Ceratizit-WNT", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["TdF Femmes etapper"], form:"24 år og klatrer i utvikling.", notat:"Kerbaol er 24 år og i sterk utvikling. En klatrer som passer VM-banen godt — kan overraske." },
      { navn:"Marie Le Net", land:"Frankrike", flagg:"🇫🇷", lag:"FDJ-SUEZ", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer og hjelper.", notat:"Le Net er en hjelper for Muzic og FDJ-laget. Bidrar i de avgjørende fasene." },
      { navn:"Juliette Berthet", land:"Frankrike", flagg:"🇫🇷", lag:"Decathlon AG2R La Mondiale", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 25 år.", notat:"Berthet er en lovende klatrer. Frankrike har enorm dybde i klatrerrekkene." },
      { navn:"Maeva Squiban", land:"Frankrike", flagg:"🇫🇷", lag:"Cofidis", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder.", notat:"Squiban hjelper det franske laget. Frankrike stiller sterkt." },
      { navn:"Lea Curinier", land:"Frankrike", flagg:"🇫🇷", lag:"Frankrike", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Frankrike — i et land med stor sykkeltradisjon." },
      { navn:"Celia Gery", land:"Frankrike", flagg:"🇫🇷", lag:"Frankrike", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Frankrike." },

      /* ---- Tyskland (utover Koch) ---- */
      { navn:"Ricarda Bauernfeind", land:"Tyskland", flagg:"🇩🇪", lag:"Canyon//SRAM Racing", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["TdF Femmes etappe"], form:"Eksplosiv klatrer med TdF Femmes-etappe.", notat:"Bauernfeind er en eksplosiv klatrer. Vil prøve seg i brudd og hjelpe Koch. TdF Femmes-etappen viser at hun kan vinne." },
      { navn:"Liane Lippert", land:"Tyskland", flagg:"🇩🇪", lag:"Movistar Team", alder:27, fødtÅr:1999, spesialitet:"puncheur", palmarès:["Strade Bianche Donne","Giro Donne etapper"], form:"Strade Bianche Donne-vinner! Sterk puncheur.", notat:"Lippert er en sterk puncheur som overrasker! Strade Bianche-seier viser at hun er god i kuppert terreng. Montréal passer henne. Dark horse for Tyskland?" },
      { navn:"Antonia Niedermaier", land:"Tyskland", flagg:"🇩🇪", lag:"Canyon//SRAM Racing", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:["TdF Femmes hvit trøye"], form:"Hvit trøye TdF Femmes — ungdomssjampionen!", notat:"Niedermaier vant ungdomstrøyen i TdF Femmes — 23 år og allerede i toppen. Klatrer som passer VM-banen. En fremtidig stjernen." },
      { navn:"Linda Riedmann", land:"Tyskland", flagg:"🇩🇪", lag:"Tyskland", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Tyskland — hjelper Koch." },

      /* ---- Storbritannia (utover Bäckstedt) ---- */
      { navn:"Anna Henderson", land:"Storbritannia", flagg:"🇬🇧", lag:"Visma-Lease a Bike", alder:28, fødtÅr:1998, spesialitet:"tempo", palmarès:["VM TT-bronse 2023","TdF Femmes etapper"], form:"VM TT-bronse 2023. Tempoekspert og solid hjelper.", notat:"Henderson er primært en tempospecialist, men er sterk nok til å hjelpe i fellesstart. VM TT-bronse viser toppnivå. Visma-hjelper for laget." },
      { navn:"Pfeiffer Georgi", land:"Storbritannia", flagg:"🇬🇧", lag:"SD Worx-Protime", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allrounder og hjelper for SD Worx.", notat:"Georgi er en solid arbeider som hjelper Kopecky og det sterke SD Worx-laget." },
      { navn:"Lauren Dickson", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia." },
      { navn:"Flora Perkins", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia — ung klatrer." },
      { navn:"Josie Nelson", land:"Storbritannia", flagg:"🇬🇧", lag:"Storbritannia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Storbritannia." },

      /* ---- Hellas ---- */
      { navn:"Varvara Fasoi", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Hellas." },
      { navn:"Argiro Milaki", land:"Hellas", flagg:"🇬🇷", lag:"Hellas", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Hellas." },

      /* ---- Guatemala ---- */
      { navn:"Jasmin Gabriela Soto", land:"Guatemala", flagg:"🇬🇹", lag:"Guatemala", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Guatemala — representerer Mellom-Amerika." },

      /* ---- Ungarn ---- */
      { navn:"Petra Zsanko", land:"Ungarn", flagg:"🇭🇺", lag:"Ungarn", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Ungarn." },

      /* ---- Indonesia ---- */
      { navn:"Firotika Magh Marenda", land:"Indonesia", flagg:"🇮🇩", lag:"Indonesia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Indonesia — representerer Sørøst-Asia." },

      /* ---- Israel ---- */
      { navn:"Rotem Gafinovitz", land:"Israel", flagg:"🇮🇱", lag:"Human Powered Health", alder:29, fødtÅr:1997, spesialitet:"klatrer", palmarès:[], form:"Klatrer med Human Powered Health.", notat:"Gafinovitz er Israels representant i VM. Klatrer som passer VM-banen." },

      /* ---- Italia (utover Longo Borghini) ---- */
      { navn:"Silvia Persico", land:"Italia", flagg:"🇮🇹", lag:"UAE Team ADQ", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Giro Donne etapper","Strade Bianche topp-5"], form:"Strade Bianche-topp-5 og Giro Donne-etapper.", notat:"Persico er en sterk klatrer. Strade Bianche-resultater viser at kuppert terreng passer henne. Vil bidra for Longo Borghini og Italia." },
      { navn:"Erica Magnaldi", land:"Italia", flagg:"🇮🇹", lag:"UAE Team ADQ", alder:31, fødtÅr:1995, spesialitet:"allrounder", palmarès:[], form:"Allrounder og hjelper.", notat:"Magnaldi er en solid allrounder som hjelper det sterke Italia-laget." },
      { navn:"Sara Casasola", land:"Italia", flagg:"🇮🇹", lag:"Ceratizit-WNT", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder.", notat:"Casasola er en hjelper for Italia. Bidrar i de tidlige fasene." },
      { navn:"Francesca Barale", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant fra Italia. Klatrer som passer VM-banen." },
      { navn:"Eleonora Gasparrini", land:"Italia", flagg:"🇮🇹", lag:"Italia", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant fra Italia." },
      { navn:"Monica Trinca Colonel", land:"Italia", flagg:"🇮🇹", lag:"Ceratizit-WNT", alder:31, fødtÅr:1995, spesialitet:"klatrer", palmarès:[], form:"Erfaren klatrer med Ceratizit.", notat:"Trinca Colonel er en erfaren klatrer som bidrar for Italia. God hjelper for Longo Borghini." },

      /* ---- Japan ---- */
      { navn:"Karin Abe", land:"Japan", flagg:"🇯🇵", lag:"Japan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Japan. Japansk sykling er i vekst." },

      /* ---- Kasakhstan ---- */
      { navn:"Faina Potapova", land:"Kasakhstan", flagg:"🇰🇿", lag:"Kasakhstan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kasakhstan." },

      /* ---- Kenya ---- */
      { navn:"Nancy Debe", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kenya — Afrika er i vekst i sykling." },
      { navn:"Monica Jelimo Kiplagat", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kenya." },
      { navn:"Kendra Masiga", land:"Kenya", flagg:"🇰🇪", lag:"Kenya", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Kenya." },

      /* ---- Luxembourg ---- */
      { navn:"Nina Berton", land:"Luxembourg", flagg:"🇱🇺", lag:"Cofidis", alder:22, fødtÅr:2004, spesialitet:"klatrer", palmarès:[], form:"22 år og WorldTour-kontrakt — sjelden for Luxembourg!", notat:"Berton er 22 år og allerede i WorldTour med Cofidis — eksepsjonelt for en luxemburgsk rytter. Klatrer som passer VM-banen godt." },

      /* ---- Mauritius ---- */
      { navn:"Kim Le Court-Pienaar", land:"Mauritius", flagg:"🇲🇺", lag:"UAE Team ADQ", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:["TdF Femmes etapper"], form:"TdF Femmes-etappeseier! Historisk for Mauritius.", notat:"Le Court-Pienaar er en sensasjon fra Mauritius — tok TdF Femmes-etappe i 2026! Historisk for en av de minste øynasjonene i pelotongen. UAE-kontrakt og i toppform — farlig i VM." },
      { navn:"Lucie de Marigny-Lagesse", land:"Mauritius", flagg:"🇲🇺", lag:"Mauritius", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mauritius — representerer Afrikas øynasjoner." },

      /* ---- Mexico ---- */
      { navn:"Romina Hinojosa", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },
      { navn:"Sara Roel", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },
      { navn:"Andrea Ramirez", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },
      { navn:"Lizbeth Salazar", land:"Mexico", flagg:"🇲🇽", lag:"Mexico", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Mexico." },

      /* ---- Namibia ---- */
      { navn:"Vera Looser", land:"Namibia", flagg:"🇳🇦", lag:"Namibia", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Namibia — representerer Sørlige Afrika." },

      /* ---- Nederland (utover Vollering og Pieterse) ---- */
      { navn:"Riejanne Markus", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["VM-bronse 2023","TdF Femmes etapper"], form:"VM-bronse 2023. Sterk hjelper for Vollering.", notat:"Markus er en av pelotongens sterkeste hjelpere. VM-bronse 2023 viser at hun også kan kjøre for seg selv. Visma bruker henne primært til å beskytte Vollering." },
      { navn:"Lieke Nooijen", land:"Nederland", flagg:"🇳🇱", lag:"Fenix-Deceuninck", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Ung allrounder, 24 år.", notat:"Nooijen er i utvikling. Hjelper Vollering og laget." },
      { navn:"Karlijn Swinkels", land:"Nederland", flagg:"🇳🇱", lag:"Jayco-AlUla", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Allrounder og solid hjelper.", notat:"Swinkels er en solid arbeider — bidrar for Nederland." },
      { navn:"Femke de Vries", land:"Nederland", flagg:"🇳🇱", lag:"Visma-Lease a Bike", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer med Visma.", notat:"de Vries er Nederlandsk fremtid i klatringen. Hjelper Vollering." },
      { navn:"Amber Kraak", land:"Nederland", flagg:"🇳🇱", lag:"Nederland", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Nederland." },

      /* ---- New Zealand ---- */
      { navn:"Niamh Fisher-Black", land:"New Zealand", flagg:"🇳🇿", lag:"Red Bull Bora-Hansgrohe", alder:25, fødtÅr:2001, spesialitet:"klatrer", palmarès:["VM-sølv 2023","VM-sølv 2025","Giro Donne topp-5"], form:"VM sølv 2023 OG 2025 — alltid på pallen, aldri gullet!", notat:"Fisher-Black har vært topp-3 i VM to ganger og er aldri langt unna. 25 år og i toppnivå — bror av Finn Fisher-Black (herrer). VM 2026 er hennes store sjanse — vil hun endelig ta gullet?" },
      { navn:"Henrietta Christie", land:"New Zealand", flagg:"🇳🇿", lag:"Human Powered Health", alder:26, fødtÅr:2000, spesialitet:"klatrer", palmarès:[], form:"Klatrer med HPH.", notat:"Christie er New Zealands neste generasjon. Klatrer i utvikling." },
      { navn:"Ella Wyllie", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for New Zealand." },
      { navn:"Bronwyn MacGregor", land:"New Zealand", flagg:"🇳🇿", lag:"New Zealand", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for New Zealand." },

      /* ---- Panama ---- */
      { navn:"Wendy Ducreux", land:"Panama", flagg:"🇵🇦", lag:"Panama", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Sjelden VM-deltakelse for Panama." },

      /* ---- Paraguay ---- */
      { navn:"Agua Marina Espinola", land:"Paraguay", flagg:"🇵🇾", lag:"Paraguay", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Paraguay." },

      /* ---- Filippinene ---- */
      { navn:"Mary Joyce Monton", land:"Filippinene", flagg:"🇵🇭", lag:"Filippinene", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Filippinene — representerer Sørøst-Asia." },

      /* ---- Polen (utover Niewiadoma) ---- */
      { navn:"Marta Lach", land:"Polen", flagg:"🇵🇱", lag:"Ceratizit-WNT", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:["Tour of Flanders topp-10"], form:"Allrounder og hjelper for Niewiadoma.", notat:"Lach er en allsidig rytter. Tour of Flanders-resultatet viser at hun kan henge med i hardt terreng. Hjelper Niewiadoma." },
      { navn:"Marta Jaskulska", land:"Polen", flagg:"🇵🇱", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"puncheur", palmarès:[], form:"Puncheur med Lidl-Trek.", notat:"Jaskulska er en puncheur som kan bidra i avslutninger. Polen stiller sterkt med Niewiadoma i spissen." },
      { navn:"Dominika Wlodarczyk", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Polen." },
      { navn:"Kaja Rysz", land:"Polen", flagg:"🇵🇱", lag:"Polen", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Polen." },

      /* ---- Portugal ---- */
      { navn:"Daniela Campos", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Portugal." },
      { navn:"Raquel Queiros", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Portugal." },
      { navn:"Beatriz Roxo", land:"Portugal", flagg:"🇵🇹", lag:"Portugal", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Portugal." },

      /* ---- Rwanda ---- */
      { navn:"Diane Ingabire", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Rwanda er en voksende sykkelnasjon — VM 2025 ble holdt i Kigali! Ingabire representerer den nye generasjonen." },
      { navn:"Xaveline Nirere", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Rwanda." },
      { navn:"Claudette Nyirarukundo", land:"Rwanda", flagg:"🇷🇼", lag:"Rwanda", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Rwanda." },

      /* ---- Saudi-Arabia ---- */
      { navn:"Mashael Alhazmi", land:"Saudi-Arabia", flagg:"🇸🇦", lag:"Saudi-Arabia", alder:24, fødtÅr:2002, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Saudi-Arabia. Saudisk sykling er i rask vekst." },

      /* ---- Slovakia ---- */
      { navn:"Tereza Kurnicka", land:"Slovakia", flagg:"🇸🇰", lag:"Slovakia", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Slovakia." },

      /* ---- Slovenia ---- */
      { navn:"Nika Bobnar", land:"Slovenia", flagg:"🇸🇮", lag:"Alé BTC Ljubljana", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Allrounder fra Slovenia.", notat:"Bobnar representerer Slovenia — et land kjent for store mannlige klatrere. Offensiv rytter." },

      /* ---- Sør-Afrika ---- */
      { navn:"Ashleigh Moolman-Pasio", land:"Sør-Afrika", flagg:"🇿🇦", lag:"AG Insurance-Soudal", alder:39, fødtÅr:1987, spesialitet:"klatrer", palmarès:["Giro Donne topp-5 3x"], form:"39 år og en veteranlegende — kanskje siste VM?", notat:"Moolman-Pasio er en sykkelhelt i Sør-Afrika — en av Afrikas beste klatrere noensinne. 39 år og kanskje siste VM. Giro Donne topp-5 tre ganger er imponerende. En ekte representant for afrikas klatrerkunst." },
      { navn:"Lisa Bone", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sør-Afrika." },
      { navn:"Tiffany Keep", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sør-Afrika." },
      { navn:"Hayley Preen", land:"Sør-Afrika", flagg:"🇿🇦", lag:"Sør-Afrika", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sør-Afrika." },

      /* ---- Spania ---- */
      { navn:"Mavi Garcia", land:"Spania", flagg:"🇪🇸", lag:"UAE Team ADQ", alder:36, fødtÅr:1990, spesialitet:"klatrer", palmarès:["Vuelta Femenina vinner","VM-bronse 2025","Giro Donne topp-5"], form:"36 år og VM-bronse 2025! I toppform.", notat:"Garcia er born in Cuba and racing for Spain — en unik story! Vuelta Femenina-vinner og VM-bronse 2025 viser at hun er i karrierebest form til tross for alder. 36 år — veldig farlig i VM." },
      { navn:"Sara Martin", land:"Spania", flagg:"🇪🇸", lag:"Movistar Team", alder:28, fødtÅr:1998, spesialitet:"klatrer", palmarès:["Vuelta Femenina etapper"], form:"Klatrer og hjelper for Spania.", notat:"Martin er Spanias hjelpemann for Garcia. Klatrer som bidrar i de avgjørende fasene." },
      { navn:"Usoa Ostolaza", land:"Spania", flagg:"🇪🇸", lag:"Bizkaia-Durango", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"22 år og lovende klatrer fra Baskerland.", notat:"Ostolaza er Spanias neste generasjon — ung klatrer fra Baskerland der sykling er en del av kulturen." },
      { navn:"Paula Blasi", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant — Spania har stor dybde!" },
      { navn:"Mireia Benito", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Spania." },
      { navn:"Sandra Alonso", land:"Spania", flagg:"🇪🇸", lag:"Spania", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Spania." },

      /* ---- Sverige ---- */
      { navn:"Caroline Andersson", land:"Sverige", flagg:"🇸🇪", lag:"Ceratizit-WNT", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Allrounder med Ceratizit.", notat:"Andersson er Sveriges beste rytter i 2026. Hjelper laget og kan prøve seg i brudd." },
      { navn:"Julia Borgstrom", land:"Sverige", flagg:"🇸🇪", lag:"Jayco-AlUla", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Allrounder.", notat:"Borgstrom er en solid svensk representant." },

      /* ---- Sveits (utover Reusser) ---- */
      { navn:"Noemi Ruegg", land:"Sveits", flagg:"🇨🇭", lag:"Lidl-Trek", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allrounder og hjelper for Reusser.", notat:"Ruegg hjelper Reusser og det sterke Sveits-laget. Bidrar i de avgjørende fasene." },
      { navn:"Jasmin Liechti", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"Liechti er en nasjonal klatrer for Sveits. Bidrar for laget." },
      { navn:"Ginia Caluori", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:23, fødtÅr:2003, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 23 år.", notat:"Nasjonal representant som bidrar for Sveits — ung klatrer i utvikling." },
      { navn:"Steffi Haberlin", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sveits." },
      { navn:"Linda Zanetti", land:"Sveits", flagg:"🇨🇭", lag:"Sveits", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Sveits." },

      /* ---- Thailand ---- */
      { navn:"Pittayapron Seatun", land:"Thailand", flagg:"🇹🇭", lag:"Thailand", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Thailand — representerer Sørøst-Asia." },

      /* ---- Trinidad og Tobago ---- */
      { navn:"Teniel Campbell", land:"Trinidad og Tobago", flagg:"🇹🇹", lag:"Trinidad og Tobago", alder:26, fødtÅr:2000, spesialitet:"allrounder", palmarès:[], form:"Allrounder fra Karibia.", notat:"Campbell er en av Karibia-regionens beste syklister. Sjelden VM-deltakelse for Trinidad og Tobago." },

      /* ---- Ukraina ---- */
      { navn:"Valeriya Kononenko", land:"Ukraina", flagg:"🇺🇦", lag:"Ukraina", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Representerer Ukraina under krig.", notat:"Ukrainske ryttere som konkurrerer for hjemlandet. Deres deltagelse er et statement om styrke og motstand." },
      { navn:"Olha Kulynych", land:"Ukraina", flagg:"🇺🇦", lag:"Ukraina", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Representerer Ukraina.", notat:"Nasjonal representant for Ukraina." },

      /* ---- USA ---- */
      { navn:"Kristen Faulkner", land:"USA", flagg:"🇺🇸", lag:"EF Education-Cannondale", alder:32, fødtÅr:1994, spesialitet:"allrounder", palmarès:["OL-gull 2024 lagtempo","TdF Femmes topp-10"], form:"OL-gull lagtempo 2024! Utrolig allrounder.", notat:"Faulkner er en utrolig allrounder — OL-gull 2024 viser at hun er i verdenstoppen. I fellesstart er hun mer et hjelperedskap, men er sterk nok til å henge med i bakker." },
      { navn:"Kate Courtney", land:"USA", flagg:"🇺🇸", lag:"USA", alder:30, fødtÅr:1996, spesialitet:"allrounder", palmarès:["VM MTB XCO 2018"], form:"Primært MTB-rytter", notat:"Courtney er primært en MTB-legende (VM MTB 2018). På veien er hun mer begrenset, men representerer USA med stolthet." },
      { navn:"Grace Arlandson", land:"USA", flagg:"🇺🇸", lag:"USA", alder:24, fødtÅr:2002, spesialitet:"klatrer", palmarès:[], form:"Ung klatrer, 24 år.", notat:"Arlandson er USAs fremtid i klatringen. Hjelper laget og henter erfaring." },
      { navn:"Alexis Magner", land:"USA", flagg:"🇺🇸", lag:"USA", alder:28, fødtÅr:1998, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for USA." },
      { navn:"Natalie Quinn", land:"USA", flagg:"🇺🇸", lag:"USA", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for USA." },
      { navn:"Lauren Stephens", land:"USA", flagg:"🇺🇸", lag:"USA", alder:36, fødtÅr:1990, spesialitet:"allrounder", palmarès:[], form:"36 år og erfaren veteran.", notat:"Stephens er en erfaren representant for USA. 36 år og i karrierens sluttfase." },

      /* ---- Usbekistan ---- */
      { navn:"Madina Kakhkhorova", land:"Usbekistan", flagg:"🇺🇿", lag:"Usbekistan", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Usbekistan — representerer Sentral-Asia." },

      /* ---- Venezuela ---- */
      { navn:"Lilibeth Chacon", land:"Venezuela", flagg:"🇻🇪", lag:"Venezuela", alder:29, fødtÅr:1997, spesialitet:"allrounder", palmarès:[], form:"Allrounder og Venezuelas beste.", notat:"Chacon er en av Venezuelas beste kvinner-ryttere. Representerer landet med stolthet." },

      /* ---- Zimbabwe ---- */
      { navn:"Skye Davidson", land:"Zimbabwe", flagg:"🇿🇼", lag:"Zimbabwe", alder:27, fødtÅr:1999, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Zimbabwe — representerer Sørlige Afrika." },
      { navn:"Rongina Ngandu", land:"Zimbabwe", flagg:"🇿🇼", lag:"Zimbabwe", alder:25, fødtÅr:2001, spesialitet:"allrounder", palmarès:[], form:"Nasjonal representant", notat:"Nasjonal representant for Zimbabwe." },

      /* ---- Nøytral utøver ---- */
      { navn:"Kristina Novikova", land:"Nøytral (ANA)", flagg:"🏳", lag:"Nøytral", alder:27, fødtÅr:1999, spesialitet:"klatrer", palmarès:[], form:"Konkurrerer som nøytral utøver (ANA).", notat:"Novikova er russisk men konkurrerer som ANA-utøver. Klatrer med solid bakgrunn. Representerer seg selv." },
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
      { år:2025, sted:"Kigali, RWA",               gull:"Tadej Pogačar (SLO)",      sølv:"Remco Evenepoel (BEL)",     bronse:"Ben Healy (IRL)",           norsk:"—" },
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
      { år:2025, sted:"Kigali, RWA",                gull:"Remco Evenepoel (BEL)",    sølv:"Jay Vine (AUS)",            bronse:"Ilan Van Wilder (BEL)",     norsk:"—" },
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
      { år:2025, sted:"Kigali, RWA",                gull:"Marlen Reusser (SUI)",      sølv:"Anna van der Breggen (NED)",bronse:"Demi Vollering (NED)",      norsk:"—" },
      { år:2026, sted:"Montréal, CAN",              gull:"Marlen Reusser (SUI)",      sølv:"Zoe Bäckstedt (GBR)",       bronse:"Franziska Koch (GER)",      norsk:"—", kjørt:true },
    ]
  }
};

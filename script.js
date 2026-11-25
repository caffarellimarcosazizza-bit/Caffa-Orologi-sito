// Catalogo prodotti Caffa Orologi (www.caffaorologi.com)
const PRODUCTS = [
  {
    id: 'omega-speedmaster-38-coaxial',
    brand: 'Omega',
    title: 'Omega Speedmaster 38 Co-Axial Chronometer Chronograph',
    ref: '324.30.38.50.01.001 • Listino 5.600 €',
    price: 3500,
    badge: 'OFFERTA DA NON PERDERE • FULL SET',
    badgeHot: true,
    condition: 'Full Set • Scatola & Card Ufficiali Omega',
    movement: 'Automatico Co-Axial Calibro 3330 (COSC)',
    diameter: '38 mm',
    caseMaterial: 'Acciaio Inox • Vetro Zaffiro Antiriflesso',
    strap: 'Bracciale Originale Omega in Acciaio Inox',
    description:
      'Autentico Omega Speedmaster 38 Co-Axial Chronometer Chronograph (Ref. 324.30.38.50.01.001): cassa e bracciale in acciaio da 38 mm, lunetta con scala tachimetrica su anello in alluminio nero, contatori orizzontali ovali con datario a ore 6 e movimento automatico cronografo certificato COSC Calibro Omega 3330 con scappamento Co-Axial e spirale in silicio Si14. Corredo completo Full Set con cofanetto originale Omega e card ufficiali (prezzo di listino 5.600 €, nostra offerta 3.500 €).',
    images: [
      { src: 'images/omega-speedmaster-38-hero.jpg', caption: 'Vista frontale – Omega Speedmaster 38 Co-Axial Full Set con scatola e card ufficiali Omega' },
      { src: 'images/omega-speedmaster-38-2.jpg', caption: 'Macro quadrante – Dettaglio contatori ovali orizzontali, datario a ore 6 e scala tachimetrica' },
      { src: 'images/omega-speedmaster-38-3.jpg', caption: 'Dettaglio ravvicinato – Finitura concentrica dei subdial, indici applicati rodiati e vetro zaffiro' },
      { src: 'images/omega-speedmaster-38-4.jpg', caption: 'Profilo laterale cassa – Corona con logo Ω in rilievo e pulsanti cronografici a pompa' },
      { src: 'images/omega-speedmaster-38-5.jpg', caption: 'Bracciale in acciaio, chiusura e fondello con medaglione Ippocampo Speedmaster, maglie aggiuntive e card' },
      { src: 'images/omega-speedmaster-38-7.jpg', caption: 'Movimento automatico di manifattura Calibro Omega 3330 Co-Axial Chronometer (COSC) con ruota a colonne' },
      { src: 'images/omega-speedmaster-38-6.jpg', caption: 'Corredo originale Omega – Cofanetto in legno e custodia da viaggio rossa firmata Ω OMEGA' }
    ],
    theme: {
      caseColor: '#d8dce3',
      bezelColor: '#16181f',
      dialColor: '#12141a',
      subdialColor: '#1c2029',
      textColor: '#f5f6fa',
      strapColor: '#cfd4dc',
      accentColor: '#d4af37',
      moonphase: false
    }
  },
  {
    id: 'moonswatch-snoopy-white',
    brand: 'Omega x Swatch',
    title: 'Bioceramic MoonSwatch – Mission to the Moonphase "Snoopy White"',
    ref: 'SO33W700 • Full Moon',
    price: 279.99,
    badge: 'FOTO REALI • BEST SELLER',
    badgeHot: true,
    condition: 'Nuovo • Full Set',
    movement: 'Quarzo Cronografo & Fasi Lunari',
    diameter: '42 mm',
    caseMaterial: 'Bioceramic Bianca',
    strap: 'VELCRO® Bianco',
    description:
      'Edizione speciale Mission to the Moonphase "Full Moon" in Bioceramic total white con Snoopy adagiato sulla luna nel quadrante delle fasi lunari a ore 2, impronta della zampa sul coperchio batteria lunare e citazione nascosta visibile alla luce UV.',
    images: [
      { src: 'images/snoopy-white/snoopy-white-1.jpg', caption: 'Vista frontale – Quadrante Full Moon con fasi lunari Snoopy e corredo' },
      { src: 'images/snoopy-white/snoopy-white-2.jpg', caption: 'Angolazione 3/4 – Dettaglio cassa in Bioceramic bianca e subdial Snoopy' },
      { src: 'images/snoopy-white/snoopy-white-3.jpg', caption: 'Profilo lato corona O×S e pulsanti cronografici' },
      { src: 'images/snoopy-white/snoopy-white-4.jpg', caption: 'Fondello con coperchio batteria lunare e impronta di Snoopy' },
      { src: 'images/snoopy-white/snoopy-white-5.jpg', caption: 'Cinturino VELCRO® bianco originale Speedmaster MoonSwatch' }
    ],
    theme: {
      caseColor: '#f3f3f5',
      bezelColor: '#e8e8ec',
      dialColor: '#fafafa',
      subdialColor: '#eceef2',
      textColor: '#14161c',
      strapColor: '#ededf0',
      accentColor: '#1f2430',
      moonphase: true
    }
  },
  {
    id: 'moonswatch-snoopy-black',
    brand: 'Omega x Swatch',
    title: 'Bioceramic MoonSwatch – Mission to the Moonphase "Snoopy Black"',
    ref: 'SO33B700 • New Moon',
    price: 279.99,
    badge: 'FOTO REALI • FULL SET',
    badgeHot: true,
    condition: 'Nuovo • Full Set',
    movement: 'Quarzo Cronografo & Fasi Lunari',
    diameter: '42 mm',
    caseMaterial: 'Bioceramic Nera',
    strap: 'VELCRO® Nero',
    description:
      'La variante "New Moon" total black dedicata alla luna nuova, con disco delle fasi lunari semi-trasparente raffigurante Snoopy a ore 2, impronta della zampa sul coperchio batteria lunare e dettagli Super-LumiNova ad alta intensità.',
    images: [
      { src: 'images/snoopy-black/snoopy-black-1.jpg', caption: 'Vista frontale – Quadrante New Moon con fasi lunari Snoopy e corredo' },
      { src: 'images/snoopy-black/snoopy-black-2.jpg', caption: 'Angolazione 3/4 – Dettaglio cassa in Bioceramic nera e subdial Snoopy' },
      { src: 'images/snoopy-black/snoopy-black-3.jpg', caption: 'Profilo lato corona O×S e pulsanti cronografici' },
      { src: 'images/snoopy-black/snoopy-black-4.jpg', caption: 'Fondello con coperchio batteria lunare e impronta di Snoopy' },
      { src: 'images/snoopy-black/snoopy-black-5.jpg', caption: 'Cinturino VELCRO® nero originale Speedmaster MoonSwatch' }
    ],
    theme: {
      caseColor: '#23262e',
      bezelColor: '#12141a',
      dialColor: '#16181f',
      subdialColor: '#20242e',
      textColor: '#f5f6fa',
      strapColor: '#15171d',
      accentColor: '#d4af37',
      moonphase: true
    }
  },
  {
    id: 'moonswatch-moon',
    brand: 'Omega x Swatch',
    title: 'Bioceramic MoonSwatch – Mission to the Moon',
    ref: 'SO33M100 • Speedmaster Homage',
    price: 190,
    badge: 'FOTO REALI • FULL SET',
    badgeHot: true,
    condition: 'Full Set • Scatola & Garanzia Ufficiale',
    movement: 'Quarzo Cronografo',
    diameter: '42 mm',
    caseMaterial: 'Bioceramic Grigio Acciaio',
    strap: 'VELCRO® Nero',
    description:
      'Il modello più fedele al leggendario Omega Speedmaster Moonwatch: cassa grigio siderale, quadrante nero opaco, scala tachimetrica con "Dot over 90" e lancette rivestite in Super-LumiNova. Corredo completo Full Set con scatola originale, libretti e garanzia ufficiale timbrata.',
    images: [
      { src: 'images/mission-to-the-moon/moon-2.jpg', caption: 'Vista frontale – Quadrante e cinturino VELCRO®' },
      { src: 'images/mission-to-the-moon/moon-7.jpg', caption: 'Full Set completo – Scatola, libretti e garanzia' },
      { src: 'images/mission-to-the-moon/moon-5.jpg', caption: 'Macro quadrante – Dettaglio indici e sfere' },
      { src: 'images/mission-to-the-moon/moon-1.jpg', caption: 'Profilo cassa Bioceramic – Corona O×S e pulsanti' },
      { src: 'images/mission-to-the-moon/moon-caseback.jpg', caption: 'Dettaglio coperchio batteria – Mission to the Moon' },
      { src: 'images/mission-to-the-moon/moon-6.jpg', caption: 'Fondello completo con incisioni ufficiali' },
      { src: 'images/mission-to-the-moon/moon-3.jpg', caption: 'Cinturino VELCRO® – Lato logo OMEGA' },
      { src: 'images/mission-to-the-moon/moon-4.jpg', caption: 'Cinturino VELCRO® – Lato Speedmaster MoonSwatch' },
      { src: 'images/mission-to-the-moon/moon-8.jpg', caption: 'Certificato di garanzia ufficiale timbrato (Ref. SO33M100)' }
    ],
    theme: {
      caseColor: '#9ea3ae',
      bezelColor: '#171920',
      dialColor: '#1b1d24',
      subdialColor: '#14161c',
      textColor: '#ffffff',
      strapColor: '#181a20',
      accentColor: '#e2e5ec',
      moonphase: false
    }
  },
  {
    id: 'seiko-alpinist-spb121',
    brand: 'Seiko',
    title: 'Seiko Prospex Alpinist Automatic – Quadrante Verde',
    ref: 'SPB121J1 • Calibro 6R35 (70h)',
    price: 690,
    badge: 'FOTO REALI • CULT SEIKO',
    badgeHot: true,
    condition: 'Full Set • Scatola & Garanzia Ufficiale',
    movement: 'Automatico 6R35 (70 ore riserva)',
    diameter: '39.5 mm',
    caseMaterial: 'Acciaio Inox • Vetro Zaffiro con Lente Cyclope',
    strap: 'Pelle Marrone Coccodrillo con Deployante Seiko',
    description:
      'Uno dei segnatempo più amati dagli appassionati: quadrante verde soleggiato con indici e lancette Cattedrale dorate, ghiera bussola interna azionabile dalla corona a ore 4, fondello a vista sul calibro 6R35 e corredo completo con scatola, libretti e garanzia.',
    images: [
      { src: 'images/seiko-alpinist/alpinist-1.jpg', caption: 'Vista frontale – Quadrante verde soleggiato e cinturino in pelle marrone' },
      { src: 'images/seiko-alpinist/alpinist-2.jpg', caption: 'Angolazione 3/4 – Dettaglio vetro zaffiro, lente cyclope e ghiera bussola interna' },
      { src: 'images/seiko-alpinist/alpinist-3.jpg', caption: 'Profilo lato doppia corona (ore 3 e bussola a ore 4) con scatola Seiko' },
      { src: 'images/seiko-alpinist/alpinist-4.jpg', caption: 'Fondello a vista sul calibro automatico Seiko 6R35 e chiusura deployante' },
      { src: 'images/seiko-alpinist/alpinist-5.jpg', caption: 'Corredo Full Set completo – Scatola, controscatola, libretti e certificato di garanzia' }
    ],
    theme: {
      caseColor: '#d4d8df',
      bezelColor: '#c3c8d1',
      dialColor: '#1c4232',
      subdialColor: '#153326',
      textColor: '#e5c168',
      strapColor: '#5c3a24',
      accentColor: '#d4af37',
      moonphase: false
    }
  },
  {
    id: 'seiko-alpinist-spb209',
    brand: 'Seiko',
    title: 'Seiko Prospex Alpinist Automatic – Quadrante Marrone Sunburst',
    ref: 'SPB209J1 • Calibro 6R35 (70h)',
    price: 749,
    badge: 'FOTO REALI • SOLO OROLOGIO',
    badgeHot: true,
    condition: 'Solo Orologio (No Scatola • No Garanzia)',
    movement: 'Automatico 6R35 (70 ore riserva)',
    diameter: '39.5 mm',
    caseMaterial: 'Acciaio Inox • Vetro Zaffiro con Lente Cyclope',
    strap: 'Cinturino in Pelle Nera con Cuciture Vintage',
    description:
      'Ricercatissima referenza Seiko Prospex Alpinist SPB209J1 con quadrante marrone Sunburst, indici e sfere Cattedrale dorate rivestite in LumiBrite, ghiera bussola interna girevole tramite la corona a ore 4, vetro zaffiro con lente Cyclope sul datario e movimento automatico di manifattura Calibro 6R35 con 70 ore di riserva di carica. Venduto come solo orologio (senza scatola e senza garanzia), autentico al 100% e accuratamente verificato.',
    images: [
      { src: 'images/seiko-alpinist-spb209/spb209-1.jpg', caption: 'Vista frontale – Seiko Prospex Alpinist SPB209J1 quadrante marrone Sunburst e cinturino in pelle nera' },
      { src: 'images/seiko-alpinist-spb209/spb209-2.jpg', caption: 'Macro quadrante – Dettaglio finitura marrone soleggiata, sfere Cattedrale dorate, ghiera bussola e lente Cyclope' },
      { src: 'images/seiko-alpinist-spb209/spb209-3.jpg', caption: 'Dettaglio ravvicinato – Logo Prospex Automatic 20 BAR, indice applicato a ore 6 e sfere Cattedrale con LumiBrite' },
      { src: 'images/seiko-alpinist-spb209/spb209-4.jpg', caption: 'Dettaglio lente Cyclope sul datario a ore 3, ghiera bussola interna e doppia corona' }
    ],
    theme: {
      caseColor: '#d4d8df',
      bezelColor: '#c3c8d1',
      dialColor: '#4a3b28',
      subdialColor: '#362a1c',
      textColor: '#e5c168',
      strapColor: '#1a1c20',
      accentColor: '#d4af37',
      moonphase: false
    }
  },
  {
    id: 'tissot-prx-powermatic',
    brand: 'Tissot',
    title: 'Tissot PRX Powermatic 80 – Quadrante Nero Waffle',
    ref: 'T137.407.17.051.00 • Swiss Made',
    price: 429.99,
    badge: 'FOTO REALI • SWISS AUTOMATIC',
    badgeHot: true,
    condition: 'Full Set • Scatola, Garanzia & Tag',
    movement: 'Automatico Powermatic 80 (80h)',
    diameter: '40 mm',
    caseMaterial: 'Acciaio 316L • Zaffiro Antiriflesso',
    strap: 'Cinturino Integrato in Caucciù Nero Originale Tissot',
    description:
      'Il celebre design anni ’70 firmato Tissot con cassa tonneau sottile in acciaio 316L, quadrante nero con motivo tapisserie Waffle, fondello a vista sul movimento automatico Powermatic 80 (80 ore di riserva di carica), cinturino integrato in caucciù testurizzato a sgancio rapido e corredo completo Full Set.',
    images: [
      { src: 'images/tissot-prx/prx-1.jpg', caption: 'Vista frontale – Quadrante nero Waffle, cinturino integrato e corredo Tissot' },
      { src: 'images/tissot-prx/prx-9.jpg', caption: 'Full Set completo – Cofanetto Tissot, controscatola, card di garanzia, libretto e tag' },
      { src: 'images/tissot-prx/prx-2.jpg', caption: 'Macro quadrante – Motivo tapisserie Waffle nero, indici applicati e datario a ore 3' },
      { src: 'images/tissot-prx/prx-4.jpg', caption: 'Dettaglio ravvicinato cassa tonneau satinata e lunetta lucida' },
      { src: 'images/tissot-prx/prx-3.jpg', caption: 'Angolazione 3/4 – Riflessi del vetro zaffiro e lavorazione del quadrante' },
      { src: 'images/tissot-prx/prx-7.jpg', caption: 'Fondello a vista in vetro zaffiro – Movimento automatico Tissot Powermatic 80 (23 Jewels)' },
      { src: 'images/tissot-prx/prx-5.jpg', caption: 'Profilo laterale cassa con corona zigrinata firmata T' },
      { src: 'images/tissot-prx/prx-6.jpg', caption: 'Cinturino in caucciù testurizzato nero con fibbia ad ardiglione firmata TISSOT' },
      { src: 'images/tissot-prx/prx-8.jpg', caption: 'Card di garanzia ufficiale Tissot e cartellino referenza T137.407.17.051.00' }
    ],
    theme: {
      caseColor: '#d9dde4',
      bezelColor: '#c8cdd6',
      dialColor: '#16181d',
      subdialColor: '#1f2229',
      textColor: '#f1f4f9',
      strapColor: '#1c1e24',
      accentColor: '#d8dee9',
      moonphase: false
    }
  },
  {
    id: 'seiko-sarb-spirit',
    brand: 'Seiko',
    title: 'Seiko Spirit / SARB033 Automatic JDM – Black Dial',
    ref: 'SARB033 • Calibro 6R15C (23 Jewels)',
    price: 679,
    badge: 'FOTO REALI • RARITÀ JDM',
    badgeHot: true,
    condition: 'Selezionato • Full Set',
    movement: 'Automatico Manifattura Seiko 6R15',
    diameter: '38 mm',
    caseMaterial: 'Acciaio Inox Lucido/Satinato',
    strap: 'Bracciale Oyster in Acciaio Originale',
    description:
      'Un classico di culto del mercato domestico giapponese (JDM): proporzioni perfette da 38 mm, finiture Zaratsu-style, quadrante nero profondo, fondello a vista sul calibro automatico 6R15C (23 rubini) e corredo con scatola e libretto Seiko.',
    images: [
      { src: 'images/seiko-sarb033/sarb-1.jpg', caption: 'Vista frontale – Quadrante nero, bracciale Oyster e scatola Seiko' },
      { src: 'images/seiko-sarb033/sarb-2.jpg', caption: 'Angolazione 3/4 – Dettaglio cassa, vetro zaffiro e corona firmata S' },
      { src: 'images/seiko-sarb033/sarb-3.jpg', caption: 'Fondello a vista – Movimento automatico Seiko 6R15C (23 Jewels)' },
      { src: 'images/seiko-sarb033/sarb-4.jpg', caption: 'Chiusura deployante originale in acciaio firmata SEIKO' },
      { src: 'images/seiko-sarb033/sarb-5.jpg', caption: 'Profilo lato corona con logo S in rilievo e corredo sullo sfondo' },
      { src: 'images/seiko-sarb033/sarb-6.jpg', caption: 'Profilo laterale cassa – Finitura alternata lucida/satinata' }
    ],
    theme: {
      caseColor: '#d8dce3',
      bezelColor: '#c4c9d2',
      dialColor: '#14161a',
      subdialColor: '#1d2026',
      textColor: '#f5f6f8',
      strapColor: '#cdd2da',
      accentColor: '#d4af37',
      moonphase: false
    }
  }
];

const POLICIES = {
  shipping: {
    title: 'Informativa sulle Spedizioni – Caffa Orologi',
    html: `
      <p><strong>Caffa Orologi</strong> (Lamezia Terme CZ) effettua spedizioni tracciate e assicurate in tutta <strong>Italia e in tutto il mondo</strong>.</p>
      <ul style="margin: 14px 0 14px 20px; line-height: 1.7;">
        <li><strong>Copertura Nazionale e Internazionale:</strong> spediamo ovunque in Italia e a livello internazionale (Worldwide Shipping) tramite corrieri espressi affidabili.</li>
        <li><strong>Tracciabilità completa:</strong> riceverai il codice di tracking non appena il pacco verrà affidato al corriere.</li>
        <li><strong>Imballaggio:</strong> ogni segnatempo viaggia in scatola protettiva rinforzata anti-urto e sigillata.</li>
      </ul>
      <p>Per qualsiasi esigenza o ritiro su appuntamento a Lamezia Terme, contattaci su WhatsApp al <strong>+39 350 589 4053</strong>.</p>
    `
  },
  returns: {
    title: 'Politica di Reso e Garanzia di Autenticità',
    html: `
      <p>La soddisfazione del cliente e la trasparenza sono al centro del lavoro di <strong>Caffa Orologi</strong>.</p>
      <ul style="margin: 14px 0 14px 20px; line-height: 1.7;">
        <li><strong>Garanzia di Autenticità 100%:</strong> tutti gli orologi sono originali e accompagnati dal corredo indicato nella scheda prodotto.</li>
        <li><strong>Diritto di Recesso:</strong> ai sensi della normativa europea sulle vendite a distanza, hai 14 giorni dalla ricezione per richiedere il reso dell'orologio, purché mai indossato, con pellicole intatte e completo di scatola e corredo originale.</li>
        <li><strong>Assistenza diretta su WhatsApp:</strong> scrivi al <strong>+39 350 589 4053</strong> per avviare rapidamente qualsiasi pratica.</li>
      </ul>
    `
  },
  terms: {
    title: 'Termini e Condizioni Legali',
    html: `
      <p>Il presente sito web fa capo a <strong>Caffa Orologi</strong>.</p>
      <ul style="margin: 14px 0 14px 20px; line-height: 1.7;">
        <li><strong>Sede legale e operativa:</strong> 88046 Lamezia Terme (CZ), Italia</li>
        <li><strong>Partita IVA:</strong> 04085850792</li>
        <li><strong>WhatsApp / Telefono:</strong> +39 350 589 4053</li>
      </ul>
      <p>Tutti i marchi citati (Omega, Swatch, Seiko, Tissot) appartengono ai rispettivi proprietari e sono utilizzati esclusivamente per identificare in modo descrittivo gli orologi originali posti in vendita.</p>
    `
  }
};

// State
let activeBrandFilter = 'all';
let activeSearchQuery = '';
let activeSort = 'featured';
let cart = [];
let isLumeMode = false;
let useAntigravityPrefix = false;

function resolveImgSrc(src) {
  if (!src) return '';
  if (useAntigravityPrefix && !src.startsWith('http') && !src.startsWith('antigravity/')) {
    return 'antigravity/' + src;
  }
  return src;
}

window.handleImgFallback = function (imgEl) {
  if (!imgEl || imgEl.dataset.fb) return;
  imgEl.dataset.fb = '1';
  useAntigravityPrefix = true;
  const raw = imgEl.getAttribute('data-raw-src') || imgEl.getAttribute('src') || '';
  if (raw && !raw.startsWith('antigravity/')) {
    imgEl.src = 'antigravity/' + raw;
  }
};

function toggleLumeMode() {
  isLumeMode = !isLumeMode;
  document.body.classList.toggle('lume-mode', isLumeMode);
  document.querySelectorAll('[data-toggle-lume]').forEach((btn) => {
    btn.setAttribute('aria-pressed', isLumeMode ? 'true' : 'false');
    btn.classList.toggle('active', isLumeMode);
  });
  const modalStatus = document.getElementById('modalLumeStatusText');
  if (modalStatus) {
    modalStatus.textContent = isLumeMode
      ? 'Notte • Super-LumiNova® Attivo'
      : 'Giorno • Clicca la luna per testare il Lume';
  }
}

// Generate tailored SVG watch illustration for each product card
function renderWatchSVG(product, size = 180) {
  const t = product.theme;
  const isChrono = product.brand === 'Omega x Swatch' || product.brand === 'Omega';
  return `
    <svg viewBox="0 0 220 260" width="${size}" height="${Math.round(size * 1.18)}" class="watch-svg-interactive" aria-hidden="true">
      <!-- Top & Bottom Straps -->
      <rect class="watch-dimmable" x="78" y="8" width="64" height="54" rx="6" fill="${t.strapColor}" />
      <rect class="watch-dimmable" x="78" y="198" width="64" height="54" rx="6" fill="${t.strapColor}" />
      <!-- Crown & Pushers -->
      <rect class="watch-case-part" x="184" y="121" width="10" height="18" rx="3" fill="${t.caseColor}" />
      ${isChrono ? `<rect class="watch-case-part" x="178" y="90" width="9" height="13" rx="2" transform="rotate(-15 178 90)" fill="${t.caseColor}" />` : ''}
      ${isChrono ? `<rect class="watch-case-part" x="178" y="156" width="9" height="13" rx="2" transform="rotate(15 178 156)" fill="${t.caseColor}" />` : ''}
      <!-- Watch Case -->
      <circle class="watch-case-part" cx="110" cy="130" r="76" fill="${t.caseColor}" />
      <circle class="watch-bezel-part" cx="110" cy="130" r="68" fill="${t.bezelColor}" />
      <circle class="lume-pip" cx="110" cy="65" r="2" fill="${t.textColor}" />
      <!-- Dial -->
      <circle class="watch-dial-surface" cx="110" cy="130" r="60" fill="${t.dialColor}" />
      <!-- Hour Indices (Super-LumiNova) -->
      <g class="lume-indices" stroke="${t.textColor}" stroke-width="2.6" stroke-linecap="round" opacity="0.92">
        <line x1="110" y1="75" x2="110" y2="85" stroke-width="3.2" />
        <line x1="110" y1="175" x2="110" y2="185" />
        <line x1="55" y1="130" x2="65" y2="130" />
        <line x1="155" y1="130" x2="165" y2="130" />
        <line x1="137" y1="83" x2="132" y2="91" />
        <line x1="83" y1="83" x2="88" y2="91" />
        <line x1="157" y1="103" x2="149" y2="108" />
        <line x1="63" y1="103" x2="71" y2="108" />
        <line x1="157" y1="157" x2="149" y2="152" />
        <line x1="63" y1="157" x2="71" y2="152" />
        <line x1="137" y1="177" x2="132" y2="169" />
        <line x1="83" y1="177" x2="88" y2="169" />
      </g>
      ${
        isChrono
          ? `
        <circle class="watch-subdial" cx="86" cy="116" r="14" fill="${t.subdialColor}" stroke="${t.textColor}" stroke-opacity="0.25" />
        <line class="lume-hand" x1="86" y1="116" x2="86" y2="105" stroke="${t.textColor}" stroke-width="1.5" stroke-linecap="round" />
        <circle class="watch-subdial" cx="134" cy="116" r="14" fill="${t.subdialColor}" stroke="${t.textColor}" stroke-opacity="0.25" />
        ${
          t.moonphase
            ? `
          <circle class="lume-moon" cx="129" cy="112" r="4.8" fill="#f3e5ab" />
          <circle class="lume-moon" cx="139" cy="115" r="1.6" fill="#f3e5ab" />
          <text class="lume-uv-secret" x="134" y="126" text-anchor="middle" fill="transparent" font-size="3.3" font-weight="700">SNOOPY ★</text>
        `
            : `<line class="lume-hand" x1="134" y1="116" x2="141" y2="109" stroke="${t.textColor}" stroke-width="1.5" stroke-linecap="round" />`
        }
        <circle class="watch-subdial" cx="110" cy="154" r="14" fill="${t.subdialColor}" stroke="${t.textColor}" stroke-opacity="0.25" />
        <line class="lume-hand" x1="110" y1="154" x2="119" y2="154" stroke="${t.textColor}" stroke-width="1.5" stroke-linecap="round" />
      `
          : `
        <rect class="lume-date-box" x="138" y="125" width="12" height="10" rx="2" fill="#ffffff" stroke="${t.accentColor}" stroke-width="1" />
      `
      }
      <!-- Brand label on dial -->
      <text class="watch-dial-text" x="110" y="103" text-anchor="middle" fill="${t.textColor}" font-size="6.5" font-weight="700" letter-spacing="0.8">
        ${product.brand.toUpperCase()}
      </text>
      <!-- Hands (Super-LumiNova) -->
      <line class="lume-hand" x1="110" y1="130" x2="90" y2="105" stroke="${t.textColor}" stroke-width="3.6" stroke-linecap="round" />
      <line class="lume-hand" x1="110" y1="130" x2="142" y2="102" stroke="${t.textColor}" stroke-width="2.6" stroke-linecap="round" />
      <line class="lume-hand-sec" x1="110" y1="140" x2="110" y2="82" stroke="${t.accentColor}" stroke-width="1.4" stroke-linecap="round" />
      <circle class="lume-pip" cx="110" cy="130" r="3.6" fill="${t.textColor}" />
    </svg>
  `;
}

function formatPrice(eur) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(eur);
}

function getFilteredProducts() {
  let list = PRODUCTS.filter((p) => {
    const matchesBrand = activeBrandFilter === 'all' || p.brand === activeBrandFilter;
    const q = activeSearchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.ref.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    return matchesBrand && matchesQuery;
  });

  if (activeSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'name-asc') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
  return list;
}

function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const items = getFilteredProducts();
  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #fff; border-radius: 14px; border: 1px solid #e6e4de;">
        <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 8px;">Nessun orologio trovato in vetrina</h3>
        <p style="color: var(--text-secondary); margin-bottom: 18px;">Effettuiamo ricerche su commissione su qualsiasi modello e marchio di orologio: scrivici quale stai cercando!</p>
        <a href="https://wa.me/393505894053?text=Ciao%20Caffa%20Orologi,%20sto%20cercando%20un%20modello%20specifico" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Chiedi disponibilità su WhatsApp</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = items
    .map(
      (p) => {
        const hasPhotos = Array.isArray(p.images) && p.images.length > 0;
        return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-visual ${hasPhotos ? 'product-visual--photo' : ''}" data-open-product="${p.id}">
          <span class="product-badge ${p.badgeHot ? 'badge-hot' : ''}">${p.badge}</span>
          ${
            hasPhotos
              ? `
            <img src="${resolveImgSrc(p.images[0].src)}" data-raw-src="${p.images[0].src}" onerror="window.handleImgFallback(this)" alt="${p.title}" class="product-real-photo" loading="lazy" />
            <span class="product-photo-count">📷 ${p.images.length} foto</span>
          `
              : renderWatchSVG(p, 165)
          }
        </div>
        <div class="product-body">
          <span class="product-brand">${p.brand}</span>
          <h3 class="product-title" data-open-product="${p.id}">${p.title}</h3>
          <span class="product-ref">${p.ref}</span>
          <div class="product-specs-mini">
            <span class="spec-chip">${p.diameter}</span>
            <span class="spec-chip">${p.movement}</span>
          </div>
          <div class="product-footer">
            <span class="product-price">${formatPrice(p.price)}</span>
            <div class="product-actions">
              <button class="btn-card-action" data-open-product="${p.id}">Scheda</button>
              <button class="btn-card-action primary" data-add-cart="${p.id}">+ Carrello</button>
            </div>
          </div>
        </div>
      </article>
    `;
      }
    )
    .join('');
}

function setBrandFilter(brand) {
  activeBrandFilter = brand;
  document.querySelectorAll('.filter-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === brand);
  });
  renderCatalog();
}

let activeModalProductId = null;
let activeModalPhotoIndex = 0;
const DEFAULT_WRIST_CM = 17.5;

// Genera la sagoma anatomica isolata del polso in orizzontale in background (scalata esclusivamente via transform: scale)
function renderWristSilhouetteSVG() {
  return `
    <div class="wrist-silhouette-bg" id="modalWristSilhouette" style="transform: scale(1);" aria-hidden="true">
      <svg viewBox="0 0 380 280" width="350" height="250" class="wrist-silhouette-svg">
        <defs>
          <linearGradient id="wristSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#b89778" stop-opacity="0.55" />
            <stop offset="22%" stop-color="#d7b899" stop-opacity="0.8" />
            <stop offset="50%" stop-color="#e5caa8" stop-opacity="0.9" />
            <stop offset="78%" stop-color="#d7b899" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#b89778" stop-opacity="0.55" />
          </linearGradient>
        </defs>
        <!-- Sagoma polso e avambraccio in orizzontale -->
        <path
          d="M0 72 C75 74, 130 76, 190 70 C250 76, 305 74, 380 72 L380 208 C305 206, 250 204, 190 210 C130 204, 75 206, 0 208 Z"
          fill="url(#wristSkinGrad)"
          stroke="rgba(212, 175, 55, 0.45)"
          stroke-width="1.5"
        />
        <!-- Linea di riferimento centrale del polso -->
        <line x1="190" y1="70" x2="190" y2="210" stroke="rgba(212, 175, 55, 0.4)" stroke-width="1" stroke-dasharray="4 4" />
      </svg>
    </div>
  `;
}

function getWristFitLabel(cm) {
  if (cm < 16.2) return 'Polso Sottile';
  if (cm <= 18.2) return 'Polso Medio';
  return 'Polso Robusto';
}

function updateModalWristScale(cmValue) {
  const cm = Math.max(15, Math.min(20, Number(cmValue) || DEFAULT_WRIST_CM));
  // 17.5 cm = scale(1). Scala solo tramite transform: scale() per garantire 60fps senza layout thrashing
  const scale = 1 + (cm - DEFAULT_WRIST_CM) * 0.072;
  const wristEl = document.getElementById('modalWristSilhouette');
  const badgeEl = document.getElementById('modalWristDynamicValue');
  const previewEl = document.getElementById('modalWatchPreviewStage');
  const sliderEl = document.getElementById('modalWristSlider');

  if (wristEl) {
    wristEl.style.transform = `scale(${scale.toFixed(4)})`;
  }
  if (badgeEl) {
    badgeEl.innerHTML = `<span class="wrist-cm-main">${cm.toFixed(1)} cm</span><small class="wrist-fit-sublabel">${getWristFitLabel(cm)}</small>`;
  }
  if (sliderEl) {
    const pct = ((cm - 15) / (20 - 15)) * 100;
    sliderEl.style.setProperty('--wrist-progress', `${pct.toFixed(1)}%`);
  }
  if (previewEl && previewEl.classList.contains('modal-watch-preview--gallery')) {
    previewEl.classList.add('wrist-fit-active');
  }
}

window.fitModalMainImg = function (imgEl) {
  if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return;
  const isLandscape = imgEl.naturalWidth > imgEl.naturalHeight;
  imgEl.classList.toggle('is-landscape', isLandscape);
};

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
}

function setModalPhotoIndex(index) {
  const product = PRODUCTS.find((p) => p.id === activeModalProductId);
  if (!product || !Array.isArray(product.images) || product.images.length === 0) return;
  const total = product.images.length;
  activeModalPhotoIndex = ((index % total) + total) % total;
  const item = product.images[activeModalPhotoIndex];

  const previewEl = document.getElementById('modalWatchPreviewStage');
  if (previewEl) previewEl.classList.remove('wrist-fit-active');

  const mainImg = document.getElementById('modalMainPhoto');
  const captionEl = document.getElementById('modalPhotoCaption');
  const counterEl = document.getElementById('modalPhotoCounter');
  if (mainImg) {
    delete mainImg.dataset.fb;
    mainImg.setAttribute('data-raw-src', item.src);
    mainImg.src = resolveImgSrc(item.src);
    if (mainImg.complete) window.fitModalMainImg(mainImg);
  }
  if (captionEl) captionEl.textContent = item.caption || '';
  if (counterEl) counterEl.textContent = `${activeModalPhotoIndex + 1} / ${total}`;

  document.querySelectorAll('.modal-thumb-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === activeModalPhotoIndex);
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  activeModalProductId = product.id;
  activeModalPhotoIndex = 0;

  const modal = document.getElementById('productModal');
  const body = document.getElementById('modalBody');
  const hasPhotos = Array.isArray(product.images) && product.images.length > 0;
  const waText = encodeURIComponent(
    `Ciao Caffa Orologi! Vorrei informazioni e disponibilità per: ${product.title} (${product.ref}) - Prezzo visto sul sito: ${formatPrice(product.price)}`
  );

  body.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-watch-column">
        ${
          hasPhotos
            ? `
          <div class="modal-watch-preview modal-watch-preview--gallery" id="modalWatchPreviewStage">
            <button type="button" class="modal-gallery-nav prev" data-gallery-nav="-1" aria-label="Foto precedente">‹</button>
            <img id="modalMainPhoto" src="${resolveImgSrc(product.images[0].src)}" data-raw-src="${product.images[0].src}" onload="window.fitModalMainImg(this)" onerror="window.handleImgFallback(this)" alt="${product.title}" class="modal-gallery-main-img" />
            <!-- Livello Prova al Polso (Orologio fisso in primo piano + Sagoma polso in background) -->
            <div class="modal-wrist-fit-layer" aria-hidden="true">
              ${renderWristSilhouetteSVG()}
              <div class="wrist-foreground-watch">
                ${renderWatchSVG(product, 210)}
              </div>
            </div>
            <button type="button" class="modal-gallery-nav next" data-gallery-nav="1" aria-label="Foto successiva">›</button>
            <span class="modal-photo-counter" id="modalPhotoCounter">1 / ${product.images.length}</span>
          </div>
          <p class="modal-photo-caption" id="modalPhotoCaption">${product.images[0].caption || ''}</p>
          <div class="modal-gallery-thumbs" role="tablist" aria-label="Galleria foto reali">
            ${product.images
              .map(
                (img, idx) => `
              <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-gallery-index="${idx}" title="${img.caption || `Foto ${idx + 1}`}">
                <img src="${resolveImgSrc(img.src)}" data-raw-src="${img.src}" onerror="window.handleImgFallback(this)" alt="${img.caption || `Foto ${idx + 1}`}" loading="lazy" />
              </button>
            `
              )
              .join('')}
          </div>
        `
            : `
          <div class="modal-watch-preview" id="modalWatchPreviewStage">
            ${renderWristSilhouetteSVG()}
            <div class="wrist-foreground-watch">
              ${renderWatchSVG(product, 215)}
            </div>
          </div>
        `
        }

        <!-- Slider della Misura del Polso (15 cm - 20 cm, default 17.5 cm) -->
        <div class="wrist-slider-box">
          <div class="wrist-slider-header">
            <span class="wrist-slider-title">PROVA PROPORZIONI AL POLSO (${product.diameter})</span>
            <span class="wrist-dynamic-indicator" id="modalWristDynamicValue">
              <span class="wrist-cm-main">17.5 cm</span>
              <small class="wrist-fit-sublabel">Polso Medio</small>
            </span>
          </div>
          <div class="wrist-slider-control">
            <span class="wrist-bound-label">15 cm</span>
            <input
              type="range"
              id="modalWristSlider"
              class="wrist-range-input"
              min="15"
              max="20"
              step="0.1"
              value="17.5"
              style="--wrist-progress: 50%;"
              aria-label="Seleziona la misura del polso da 15 cm a 20 cm"
            />
            <span class="wrist-bound-label">20 cm</span>
          </div>
        </div>
      </div>
      <div class="modal-info-col">
        <span class="product-brand">${product.brand}</span>
        <h2 id="modalTitle" style="font-family: var(--font-serif); font-size: 1.9rem; line-height: 1.18; margin: 4px 0 8px;">${product.title}</h2>
        <p style="font-size: 1.35rem; font-weight: 700; margin-bottom: 12px;">${formatPrice(product.price)}</p>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 16px;">${product.description}</p>

        <div class="modal-spec-table">
          <div class="modal-spec-row"><span>Referenza</span><strong>${product.ref}</strong></div>
          <div class="modal-spec-row"><span>Condizione</span><strong>${product.condition}</strong></div>
          <div class="modal-spec-row"><span>Movimento</span><strong>${product.movement}</strong></div>
          <div class="modal-spec-row"><span>Diametro Cassa</span><strong>${product.diameter}</strong></div>
          <div class="modal-spec-row"><span>Materiale</span><strong>${product.caseMaterial}</strong></div>
          <div class="modal-spec-row"><span>Cinturino / Bracciale</span><strong>${product.strap}</strong></div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-primary" data-add-cart="${product.id}" data-close-after="true">Aggiungi al Carrello</button>
          <a href="https://wa.me/393505894053?text=${waText}" target="_blank" rel="noopener" class="btn btn-outline">
            Ordina / Chiedi foto su WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const dialog = modal.querySelector('.modal-dialog');
  if (dialog) dialog.scrollTop = 0;

  if (hasPhotos) {
    const stageEl = document.getElementById('modalWatchPreviewStage');
    if (stageEl) {
      let touchStartX = 0;
      stageEl.addEventListener(
        'touchstart',
        (ev) => {
          touchStartX = ev.changedTouches[0].clientX;
        },
        { passive: true }
      );
      stageEl.addEventListener(
        'touchend',
        (ev) => {
          const dx = ev.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > 42) {
            setModalPhotoIndex(activeModalPhotoIndex + (dx < 0 ? 1 : -1));
          }
        },
        { passive: true }
      );
    }
  }
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalValue');

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  countEl.textContent = totalQty;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="margin-bottom: 10px;">Il tuo carrello è vuoto.</p>
        <p style="font-size: 0.85rem;">Aggiungi un orologio dal catalogo per procedere con l'ordine rapido o richiedere disponibilità.</p>
      </div>
    `;
    subtotalEl.textContent = '€0,00';
    return;
  }

  let total = 0;
  container.innerHTML = cart
    .map((item) => {
      const lineTotal = item.product.price * item.qty;
      total += lineTotal;
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.product.title}</h4>
            <span>${item.qty} × ${formatPrice(item.product.price)} • ${item.product.ref}</span>
          </div>
          <button class="cart-remove-btn" data-remove-cart="${item.product.id}">Rimuovi</button>
        </div>
      `;
    })
    .join('');

  subtotalEl.textContent = formatPrice(total);
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const existing = cart.find((item) => item.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ product, qty: 1 });
  }
  updateCartUI();
  openCartDrawer();
}

function openCartDrawer() {
  document.getElementById('cartBackdrop').hidden = false;
  document.getElementById('cartDrawer').hidden = false;
}

function closeCartDrawer() {
  document.getElementById('cartBackdrop').hidden = true;
  document.getElementById('cartDrawer').hidden = true;
}

// Live clock animation on Hero Watch
function updateHeroWatchHands() {
  const secHand = document.getElementById('svgSecHand');
  if (!secHand) return;
  const now = new Date();
  const secAngle = now.getSeconds() * 6;
  secHand.setAttribute('transform', `rotate(${secAngle} 180 220)`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  setInterval(updateHeroWatchHands, 1000);

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach((tab) => {
    tab.addEventListener('click', () => setBrandFilter(tab.dataset.filter));
  });

  // Brand pills & Collection cards
  document.querySelectorAll('[data-brand], [data-collection-filter], [data-filter-trigger]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const brand = el.dataset.brand || el.dataset.collectionFilter || el.dataset.filterTrigger;
      if (brand) {
        setBrandFilter(brand);
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Sort select
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderCatalog();
  });

  // Search toggle & input
  const searchDrawer = document.getElementById('searchDrawer');
  const searchInput = document.getElementById('headerSearchInput');
  document.getElementById('searchToggleBtn').addEventListener('click', () => {
    searchDrawer.hidden = !searchDrawer.hidden;
    if (!searchDrawer.hidden) searchInput.focus();
  });

  document.getElementById('headerSearchSubmit').addEventListener('click', () => {
    activeSearchQuery = searchInput.value;
    renderCatalog();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      activeSearchQuery = searchInput.value;
      renderCatalog();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    }
  });

  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      activeSearchQuery = '';
      searchInput.value = '';
      renderCatalog();
    });
  }

  // Mobile Menu
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });

  document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('mainNav').classList.remove('open');
    });
  });

  // Delegated input per lo Slider della Misura del Polso (15 cm - 20 cm, 60fps via transform: scale)
  document.body.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'modalWristSlider') {
      updateModalWristScale(e.target.value);
    }
  });

  // Delegated clicks for Product Modal, Gallery, Cart, Lume Toggle, and Policy Modal
  document.body.addEventListener('click', (e) => {
    const thumbBtn = e.target.closest('[data-gallery-index]');
    if (thumbBtn) {
      setModalPhotoIndex(Number(thumbBtn.dataset.galleryIndex));
      return;
    }

    const navBtn = e.target.closest('[data-gallery-nav]');
    if (navBtn) {
      setModalPhotoIndex(activeModalPhotoIndex + Number(navBtn.dataset.galleryNav));
      return;
    }

    const lumeBtn = e.target.closest('[data-toggle-lume]');
    if (lumeBtn) {
      toggleLumeMode();
      return;
    }

    const openProdBtn = e.target.closest('[data-open-product]');
    if (openProdBtn) {
      openProductModal(openProdBtn.dataset.openProduct);
      return;
    }

    const addCartBtn = e.target.closest('[data-add-cart]');
    if (addCartBtn) {
      if (addCartBtn.dataset.closeAfter === 'true') {
        closeProductModal();
      }
      addToCart(addCartBtn.dataset.addCart);
      return;
    }

    const removeCartBtn = e.target.closest('[data-remove-cart]');
    if (removeCartBtn) {
      cart = cart.filter((item) => item.product.id !== removeCartBtn.dataset.removeCart);
      updateCartUI();
      return;
    }

    const policyBtn = e.target.closest('[data-policy]');
    if (policyBtn) {
      const p = POLICIES[policyBtn.dataset.policy];
      if (p) {
        document.getElementById('policyModalContent').innerHTML = `
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 12px;">${p.title}</h3>
          <div style="font-size: 0.94rem; color: var(--text-secondary);">${p.html}</div>
        `;
        document.getElementById('policyModal').hidden = false;
      }
    }
  });

  // Close Modals
  document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
  const backBtn = document.getElementById('closeProductBackBtn');
  if (backBtn) backBtn.addEventListener('click', closeProductModal);
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeProductModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      document.getElementById('policyModal').hidden = true;
    }
  });

  document.getElementById('closePolicyModal').addEventListener('click', () => {
    document.getElementById('policyModal').hidden = true;
  });
  document.getElementById('policyModal').addEventListener('click', (e) => {
    if (e.target.id === 'policyModal') e.target.hidden = true;
  });

  // Cart drawer controls
  document.getElementById('cartToggleBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop').addEventListener('click', closeCartDrawer);

  // Checkout via WhatsApp
  document.getElementById('checkoutWhatsappBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    const summary = cart.map((i) => `• ${i.qty}x ${i.product.title} (${formatPrice(i.product.price)})`).join('\n');
    const total = cart.reduce((acc, i) => acc + i.product.price * i.qty, 0);
    const msg = encodeURIComponent(
      `Ciao Caffa Orologi! Vorrei procedere con l'ordine per:\n${summary}\n\nTotale: ${formatPrice(total)}`
    );
    window.open(`https://wa.me/393505894053?text=${msg}`, '_blank');
  });

  // Contact Form handler (WhatsApp direct)
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const watch = document.getElementById('watchInterest').value;
    const message = document.getElementById('customerMessage').value;

    const waMsg = encodeURIComponent(
      `Ciao Caffa Orologi! Sono ${name}${phone ? ' (' + phone + ')' : ''}.\nModello di interesse: ${watch}\nMessaggio: ${message}`
    );
    window.open(`https://wa.me/393505894053?text=${waMsg}`, '_blank');
  });
});

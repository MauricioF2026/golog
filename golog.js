<script>

  // URL de tu Web App
  const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwh6OF7H1BiaCEHfPS_Fq-GMe0GwKnzE0abf80gwsEOwn47W7WLsMqbakAdEoG3fvbETw/exec';

  // Código -> nombre de país base (español)
  const countryNames = {
    AL: 'Albania', DE: 'Alemania', AD: 'Andorra', AT: 'Austria', BE: 'Bélgica',
    BY: 'Bielorrusia', BA: 'Bosnia y Herzegovina', BG: 'Bulgaria', CY: 'Chipre',
    VA: 'Ciudad del Vaticano', HR: 'Croacia', DK: 'Dinamarca',
    SK: 'Eslovaquia', SI: 'Eslovenia', ES: 'España', EE: 'Estonia',
    FI: 'Finlandia', FR: 'Francia', GR: 'Grecia', HU: 'Hungría',
    IE: 'Irlanda', IS: 'Islandia', IT: 'Italia', XK: 'Kosovo',
    LV: 'Letonia', LI: 'Liechtenstein', LT: 'Lituania', LU: 'Luxemburgo',
    MT: 'Malta', MD: 'Moldavia', MC: 'Mónaco', ME: 'Montenegro',
    NO: 'Noruega', NL: 'Países Bajos', PL: 'Polonia', PT: 'Portugal',
    GB: 'Reino Unido', CZ: 'República Checa', RO: 'Rumanía',
    RU: 'Rusia', SM: 'San Marino', RS: 'Serbia', SE: 'Suecia',
    CH: 'Suiza', UA: 'Ucrania',

    AR: 'Argentina', BO: 'Bolivia', BR: 'Brasil', CL: 'Chile', CO: 'Colombia',
    CR: 'Costa Rica', CU: 'Cuba', EC: 'Ecuador', SV: 'El Salvador',
    GT: 'Guatemala', HT: 'Haití', HN: 'Honduras', MX: 'México',
    NI: 'Nicaragua', PA: 'Panamá', PY: 'Paraguay', PE: 'Perú',
    DO: 'República Dominicana', UY: 'Uruguay', VE: 'Venezuela',

    AF: 'Afganistán', SA: 'Arabia Saudita', AM: 'Armenia', AZ: 'Azerbaiyán',
    BD: 'Bangladés', BH: 'Baréin', MM: 'Birmania (Myanmar)', BN: 'Brunéi',
    BT: 'Bután', KH: 'Camboya', QA: 'Catar', CN: 'China',
    KP: 'Corea del Norte', KR: 'Corea del Sur', AE: 'Emiratos Árabes Unidos',
    PH: 'Filipinas', GE: 'Georgia', IN: 'India', ID: 'Indonesia',
    IQ: 'Irak', IR: 'Irán', IL: 'Israel', JP: 'Japón',
    JO: 'Jordania', KZ: 'Kazajistán', KG: 'Kirguistán', KW: 'Kuwait',
    LA: 'Laos', LB: 'Líbano', MY: 'Malasia', MV: 'Maldivas',
    MN: 'Mongolia', NP: 'Nepal', OM: 'Omán', PK: 'Pakistán',
    SG: 'Singapur', LK: 'Sri Lanka', SY: 'Siria', TH: 'Tailandia',
    TJ: 'Tayikistán', TL: 'Timor Oriental', TM: 'Turkmenistán',
    UZ: 'Uzbekistán', VN: 'Vietnam', YE: 'Yemen',

    DZ: 'Argelia', AO: 'Angola', BJ: 'Benín', BW: 'Botsuana',
    BF: 'Burkina Faso', BI: 'Burundi', CV: 'Cabo Verde', CM: 'Camerún',
    TD: 'Chad', KM: 'Comoras', CI: 'Costa de Marfil', EG: 'Egipto',
    ER: 'Eritrea', SZ: 'Esuatini', ET: 'Etiopía', GA: 'Gabón',
    GM: 'Gambia', GH: 'Ghana', GN: 'Guinea', GW: 'Guinea-Bisáu',
    GQ: 'Guinea Ecuatorial', KE: 'Kenia', LS: 'Lesoto', LR: 'Liberia',
    LY: 'Libia', MG: 'Madagascar', MW: 'Malaui', ML: 'Malí',
    MA: 'Marruecos', MU: 'Mauricio', MR: 'Mauritania', MZ: 'Mozambique',
    NA: 'Namibia', NE: 'Níger', NG: 'Nigeria', CF: 'República Centroafricana',
    CG: 'República del Congo', CD: 'República Democrática del Congo',
    RW: 'Ruanda', ST: 'Santo Tomé y Príncipe', SN: 'Senegal',
    SC: 'Seychelles', SL: 'Sierra Leona', SO: 'Somalia',
    ZA: 'Sudáfrica', SD: 'Sudán', SS: 'Sudán del Sur', TZ: 'Tanzania',
    TG: 'Togo', TN: 'Túnez', UG: 'Uganda', DJ: 'Yibuti',
    ZM: 'Zambia', ZW: 'Zimbabue',

    CA: 'Canadá', US: 'Estados Unidos',

    MK: 'Macedonia del Norte', BZ: 'Belice', GY: 'Guyana',
    SR: 'Surinam', PS: 'Palestina', TW: 'Taiwán'
  };

  // Regiones por país (ejemplo; puedes ampliar)
  const regionsByCountry = {
    CL: [
      'Región Metropolitana',
      'Valparaíso',
      'Biobío',
      'Araucanía',
      'Coquimbo',
      'O\'Higgins',
      'Maule',
      'Los Ríos',
      'Los Lagos',
      'Magallanes'
    ],
    AR: [
      'Buenos Aires',
      'Catamarca',
      'Chaco',
      'Chubut',
      'Córdoba',
      'Corrientes',
      'Entre Ríos',
      'Formosa',
      'Jujuy',
      'La Pampa',
      'La Rioja',
      'Mendoza',
      'Misiones',
      'Neuquén',
      'Río Negro',
      'Salta',
      'San Juan',
      'San Luis',
      'Santa Cruz',
      'Santa Fe',
      'Santiago del Estero',
      'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
      'Tucumán',
      'Ciudad Autónoma de Buenos Aires'
    ],
    BR: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia'],
    PE: ['Lima', 'Arequipa', 'Cusco'],
    AT: [
  'Burgenland',
  'Carintia',
  'Baja Austria',
  'Alta Austria',
  'Estiria',
  'Salzburgo',
  'Tirol',
  'Vorarlberg',
  'Viena'
]
  };

  // Traducciones mínimas (como antes, abreviado aquí)
  const i18n = {
  es: {
    title: 'Mapa de jugadores de Go / Baduk',
    subtitle: 'Filtra por país, región, rango y género. Los colores indican género y los números cuántos jugadores hay en cada opción.',
    label_country: 'País',
    label_region: 'Región / Provincia',
    label_rank: 'Rango',
    label_rank_form: 'Rango (kyu / dan)',
    label_name: 'Nombre o nickname',
    label_gender: '¿Con qué género se identifica?',
    label_gender_filter: 'Filtrar por género en el mapa:',
    gender_all: 'Todos',
    gender_male: 'Masculino',
    gender_female: 'Femenino',
    gender_nb: 'No binario',
    gender_trans: 'Transgénero',
    label_ogs: 'Usuario o perfil OGS (opcional)',
    label_email: 'Email de contacto (opcional)',
    label_comment: 'Comentario',
    btn_use_location: 'Usar mi ubicación actual',
    btn_submit: 'Enviar ficha',
    note_location: 'El navegador pedirá permiso para acceder a tu ubicación. También puedes hacer clic en el mapa para elegir un punto.',
    label_lat: 'Latitud',
    label_lng: 'Longitud',
    forum_button: 'Foro / Anuncios',
    note_contact: 'Consultas y/o editar datos comunicarse al email:',
    form_title: 'Agregar tu ficha',
    form_subtitle: 'Registra tu ubicación aproximada como jugador de Go/Baduk.',
    country_all: 'Todos',
    country_select: 'Selecciona país',
    region_all: 'Todas',
    region_select: 'Selecciona región',
    rank_all: 'Todos',
    rank_ddk: 'DDK (19k–10k)',
    rank_sdk: 'SDK (9k–1k)',
    rank_dan: 'Dan (1d+)',
    rank_unspecified: 'Sin especificar',
    legend_text: 'Colores por género: ⚫ Masculino · ⚪ Femenino · 🟣 No binario · 🟦 Transgénero'
  },
  en: {
    title: 'Go / Baduk Players Map',
    subtitle: 'Filter by country, region, rank and gender. Colors show gender and numbers show how many players there are in each option.',
    label_country: 'Country',
    label_region: 'Region / Province',
    label_rank: 'Rank',
    label_rank_form: 'Rank (kyu / dan)',
    label_name: 'Name or nickname',
    label_gender: 'Which gender do you identify with?',
    label_gender_filter: 'Filter by gender on the map:',
    gender_all: 'All',
    gender_male: 'Male',
    gender_female: 'Female',
    gender_nb: 'Non-binary',
    gender_trans: 'Transgender',
    label_ogs: 'OGS user or profile (optional)',
    label_email: 'Contact email (optional)',
    label_comment: 'Comment',
    btn_use_location: 'Use my current location',
    btn_submit: 'Submit',
    note_location: 'The browser will ask permission for your location. You can also click on the map to choose a point.',
    label_lat: 'Latitude',
    label_lng: 'Longitude',
    forum_button: 'Forum / Announcements',
    note_contact: 'Questions or data edits, contact at:',
    form_title: 'Add your marker',
    form_subtitle: 'Register your approximate location as a Go/Baduk player.',
    country_all: 'All',
    country_select: 'Select country',
    region_all: 'All',
    region_select: 'Select region',
    rank_all: 'All',
    rank_ddk: 'DDK (19k–10k)',
    rank_sdk: 'SDK (9k–1k)',
    rank_dan: 'Dan (1d+)',
    rank_unspecified: 'Unspecified',
    legend_text: 'Colors by gender: ⚫ Male · ⚪ Female · 🟣 Non-binary · 🟦 Transgender'
  },
  fr: {
    title: 'Carte des joueurs de Go / Baduk',
    subtitle: 'Filtrez par pays, région, niveau et genre. Les couleurs indiquent le genre et les nombres le nombre de joueurs par option.',
    label_country: 'Pays',
    label_region: 'Région / Province',
    label_rank: 'Niveau',
    label_rank_form: 'Niveau (kyu / dan)',
    label_name: 'Nom ou pseudo',
    label_gender: 'Avec quel genre vous identifiez-vous ?',
    label_gender_filter: 'Filtrer par genre sur la carte :',
    gender_all: 'Tous',
    gender_male: 'Masculin',
    gender_female: 'Féminin',
    gender_nb: 'Non binaire',
    gender_trans: 'Transgenre',
    label_ogs: 'Utilisateur ou profil OGS (optionnel)',
    label_email: 'Email de contact (optionnel)',
    label_comment: 'Commentaire',
    btn_use_location: 'Utiliser ma position actuelle',
    btn_submit: 'Envoyer la fiche',
    note_location: 'Le navigateur demandera l’accès à votre position. Vous pouvez aussi cliquer sur la carte pour choisir un point.',
    label_lat: 'Latitude',
    label_lng: 'Longitude',
    forum_button: 'Forum / Annonces',
    note_contact: 'Questions ou modification des données, contactez :',
    form_title: 'Ajouter votre fiche',
    form_subtitle: 'Enregistrez votre position approximative comme joueur de Go/Baduk.',
    country_all: 'Tous',
    country_select: 'Sélectionnez un pays',
    region_all: 'Toutes',
    region_select: 'Sélectionnez une région',
    rank_all: 'Tous',
    rank_ddk: 'DDK (19k–10k)',
    rank_sdk: 'SDK (9k–1k)',
    rank_dan: 'Dan (1d+)',
    rank_unspecified: 'Non spécifié',
    legend_text: 'Couleurs par genre : ⚫ Masculin · ⚪ Féminin · 🟣 Non binaire · 🟦 Transgenre'
  },
  jp: {
    title: '囲碁 / バドゥク プレイヤーマップ',
    subtitle: '国・地域・棋力・ジェンダーで絞り込みます。色はジェンダーを、数字は各項目のプレイヤー数を表します。',
    label_country: '国',
    label_region: '地域 / 県',
    label_rank: '棋力',
    label_rank_form: '棋力（級 / 段）',
    label_name: '名前またはニックネーム',
    label_gender: 'ご自身の性自認を教えてください',
    label_gender_filter: 'マップをジェンダーで絞り込み:',
    gender_all: 'すべて',
    gender_male: '男性',
    gender_female: '女性',
    gender_nb: 'ノンバイナリー',
    gender_trans: 'トランスジェンダー',
    label_ogs: 'OGS ユーザー / プロフィール（任意）',
    label_email: '連絡用メール（任意）',
    label_comment: 'コメント',
    btn_use_location: '現在地を使用する',
    btn_submit: '送信',
    note_location: 'ブラウザが位置情報へのアクセスを求めます。地図をクリックして地点を選ぶこともできます。',
    label_lat: '緯度',
    label_lng: '経度',
    forum_button: 'フォーラム / お知らせ',
    note_contact: '問い合わせ・データ修正は次のメールまで：',
    form_title: '自分のマーカーを追加',
    form_subtitle: '囲碁 / バドゥクプレイヤーとして、おおよその位置を登録します。',
    country_all: 'すべて',
    country_select: '国を選択',
    region_all: 'すべて',
    region_select: '地域を選択',
    rank_all: 'すべて',
    rank_ddk: 'DDK (19k–10k)',
    rank_sdk: 'SDK (9k–1k)',
    rank_dan: '段位 (1d+)',
    rank_unspecified: '未指定',
    legend_text: 'ジェンダー別の色: ⚫ 男性 · ⚪ 女性 · 🟣 ノンバイナリー · 🟦 トランスジェンダー'
  },
  de: {
    title: 'Karte der Go / Baduk Spieler',
    subtitle: 'Nach Land, Region, Spielstärke und Geschlecht filtern. Farben zeigen das Geschlecht, Zahlen die Spielerzahl pro Option.',
    label_country: 'Land',
    label_region: 'Region / Provinz',
    label_rank: 'Spielstärke',
    label_rank_form: 'Spielstärke (Kyu / Dan)',
    label_name: 'Name oder Spitzname',
    label_gender: 'Mit welchem Geschlecht identifizieren Sie sich?',
    label_gender_filter: 'Nach Geschlecht auf der Karte filtern:',
    gender_all: 'Alle',
    gender_male: 'Männlich',
    gender_female: 'Weiblich',
    gender_nb: 'Nicht-binär',
    gender_trans: 'Transgender',
    label_ogs: 'OGS-Nutzer oder Profil (optional)',
    label_email: 'Kontakt-E-Mail (optional)',
    label_comment: 'Kommentar',
    btn_use_location: 'Aktuellen Standort verwenden',
    btn_submit: 'Eintrag senden',
    note_location: 'Der Browser fragt nach Zugriff auf Ihren Standort. Sie können auch auf die Karte klicken, um einen Punkt auszuwählen.',
    label_lat: 'Breite',
    label_lng: 'Länge',
    forum_button: 'Forum / Anzeigen',
    note_contact: 'Fragen oder Datenänderung per E-Mail an:',
    form_title: 'Deinen Marker hinzufügen',
    form_subtitle: 'Registriere deinen ungefähren Standort als Go/Baduk-Spieler.',
    country_all: 'Alle',
    country_select: 'Land auswählen',
    region_all: 'Alle',
    region_select: 'Region auswählen',
    rank_all: 'Alle',
    rank_ddk: 'DDK (19k–10k)',
    rank_sdk: 'SDK (9k–1k)',
    rank_dan: 'Dan (1d+)',
    rank_unspecified: 'Nicht angegeben',
    legend_text: 'Farben nach Geschlecht: ⚫ Männlich · ⚪ Weiblich · 🟣 Nicht-binär · 🟦 Transgender'
  }
};

  let currentLang = 'es';

  function applyTranslations(lang) {
    currentLang = lang;
    const dict = i18n[lang] || i18n.es;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-option]').forEach(el => {
      const key = el.getAttribute('data-i18n-option');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // MAPA BASE
  const map = L.map('map', {
    scrollWheelZoom: false,
    zoomControl: false
  }).setView([-25, -60], 3);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }
  ).addTo(map);

  // Iconos según género
  const iconMale = L.divIcon({
    className: 'emoji-pin',
    html: '⚫',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const iconFemale = L.divIcon({
    className: 'emoji-pin',
    html: '⚪',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const iconNB = L.divIcon({
    className: 'emoji-pin',
    html: '🟣',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const iconTrans = L.divIcon({
    className: 'emoji-pin',
    html: '🟦',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const iconDefault = iconMale;

  function buildPopupHtml(p) {
    const rank = p.rank ? p.rank.toUpperCase() : 'Sin rango';
    const country = p.country || '';
    const region = p.region || '';
    const meta = [country, region, rank].filter(Boolean).join(' · ');

    let contactHtml = '';
    if (p.ogs) {
      const ogsText = p.ogs.replace(/^https?:\/\//, '');
      contactHtml += `<div class="popup-meta">OGS: <a href="${p.ogs}" target="_blank" rel="noopener">${ogsText}</a></div>`;
    }
    if (p.email) {
      contactHtml += `<div class="popup-meta">Email: <a href="mailto:${p.email}">${p.email}</a></div>`;
    }

    return `
      <div class="popup-type-tag type-go">Go / Baduk</div>
      <div class="popup-title">${p.name}</div>
      <div class="popup-text">${p.text || ''}</div>
      <div class="popup-meta">${meta}</div>
      ${contactHtml}
    `;
  }

  function addPlayerMarker(p) {
    let icon = iconDefault;
    if (p.gender === 'masculino') icon = iconMale;
    else if (p.gender === 'femenino') icon = iconFemale;
    else if (p.gender === 'nobinario') icon = iconNB;
    else if (p.gender === 'transgenero') icon = iconTrans;

    return L.marker([p.lat, p.lng], { icon })
      .bindPopup(buildPopupHtml(p));
  }

  let allPlayers = [];
  const playerLayer = L.layerGroup().addTo(map);

  function rankGroup(rank) {
    if (!rank) return '';
    const r = rank.toLowerCase().trim();
    if (r.endsWith('k')) {
      const n = parseInt(r);
      if (n >= 10 && n <= 19) return 'ddk';
      if (n >= 1 && n <= 9) return 'sdk';
    }
    if (r.endsWith('d')) return 'dan';
    return '';
  }

  const filterCountry = document.getElementById('filter-country');
  const filterRegion = document.getElementById('filter-region');
  const filterRank = document.getElementById('filter-rank');

  function sortSelectByText(selectEl) {
    const options = Array.from(selectEl.options);
    const first = options.shift();
    options.sort((a, b) => {
      const ta = a.textContent.toLowerCase();
      const tb = b.textContent.toLowerCase();
      if (ta < tb) return -1;
      if (ta > tb) return 1;
      return 0;
    });
    selectEl.innerHTML = '';
    if (first) selectEl.appendChild(first);
    options.forEach(o => selectEl.appendChild(o));
  }

  function recomputeOptionCounts() {
    const countryCounts = {};
    const regionCounts = {};
    const rankCounts = { ddk: 0, sdk: 0, dan: 0 };

    allPlayers.forEach(p => {
      if (p.country) {
        countryCounts[p.country] = (countryCounts[p.country] || 0) + 1;
      }
      if (p.country && p.region) {
        const key = p.country + '::' + p.region;
        regionCounts[key] = (regionCounts[key] || 0) + 1;
      }
      const g = rankGroup(p.rank);
      if (g) rankCounts[g] = (rankCounts[g] || 0) + 1;
    });

    // País: "Francia (FR) (3)"
    Array.from(filterCountry.options).forEach(opt => {
      const code = opt.value;
      if (!code) {
        opt.textContent = (i18n[currentLang] || i18n.es).country_all;
      } else {
        const name = countryNames[code] || code;
        const c = countryCounts[code] || 0;
        opt.textContent = `${name} (${code}) (${c})`;
      }
    });

    sortSelectByText(filterCountry);

    const cSel = filterCountry.value;
    Array.from(filterRegion.options).forEach(opt => {
      const val = opt.value;
      if (!val) {
        opt.textContent = (i18n[currentLang] || i18n.es).region_all;
      } else if (cSel) {
        const key = cSel + '::' + val;
        const c = regionCounts[key] || 0;
        opt.textContent = `${val} (${c})`;
      } else {
        opt.textContent = val;
      }
    });

    Array.from(filterRank.options).forEach(opt => {
      const val = opt.value;
      const dict = i18n[currentLang] || i18n.es;
      if (!val) {
        opt.textContent = dict.rank_all;
      } else {
        const c = rankCounts[val] || 0;
        if (val === 'ddk') opt.textContent = `${dict.rank_ddk} (${c})`;
        if (val === 'sdk') opt.textContent = `${dict.rank_sdk} (${c})`;
        if (val === 'dan') opt.textContent = `${dict.rank_dan} (${c})`;
      }
    });
  }

  function renderPlayers() {
    const fCountry = filterCountry.value;
    const fRegion = filterRegion.value;
    const fRank = filterRank.value;

    const genderFilterInput = document.querySelector('input[name="gender-filter"]:checked');
    const fGender = genderFilterInput ? genderFilterInput.value : '';

    playerLayer.clearLayers();
    const bounds = [];

    allPlayers.forEach(p => {
      if (fCountry && p.country !== fCountry) return;
      if (fRegion && p.region !== fRegion) return;
      if (fRank && rankGroup(p.rank) !== fRank) return;
      if (fGender && p.gender !== fGender) return;

      const marker = addPlayerMarker(p);
      playerLayer.addLayer(marker);
      bounds.push([p.lat, p.lng]);
    });

    if (bounds.length) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  async function loadPlayers() {
    try {
      const res = await fetch(WEBAPP_URL);
      const data = await res.json();
      if (!data.ok) return;

      allPlayers = [];
      (data.items || []).forEach(item => {
        let lat = parseFloat(item.lat);
        let lng = parseFloat(item.lng);
        if (Math.abs(lat) > 90) lat = lat / 1e6;
        if (Math.abs(lng) > 180) lng = lng / 1e6;
        if (!isNaN(lat) && !isNaN(lng)) {
          allPlayers.push({
            ...item,
            lat,
            lng
          });
        }
      });

      recomputeOptionCounts();
      renderPlayers();
    } catch (err) {
      console.log('Error cargando jugadores', err);
    }
  }
  loadPlayers();

  filterCountry.addEventListener('change', () => {
    const c = filterCountry.value;
    const dict = i18n[currentLang] || i18n.es;
    filterRegion.innerHTML = `<option value="" data-i18n-option="region_all">${dict.region_all}</option>`;
    if (c && regionsByCountry[c]) {
      (regionsByCountry[c] || []).forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r;
        filterRegion.appendChild(opt);
      });
    }
    recomputeOptionCounts();
    renderPlayers();
  });
  filterRegion.addEventListener('change', () => {
    recomputeOptionCounts();
    renderPlayers();
  });
  filterRank.addEventListener('change', () => {
    recomputeOptionCounts();
    renderPlayers();
  });

  // Filtro de género (radios bajo el mapa)
  document.querySelectorAll('input[name="gender-filter"]').forEach(r => {
    r.addEventListener('change', () => {
      renderPlayers();
    });
  });

  // Formulario: país / región dependiente
  const playerCountry = document.getElementById('player-country');
  const playerRegion = document.getElementById('player-region');

  (function cloneCountryOptions() {
    const opts = filterCountry.options;
    for (let i = 0; i < opts.length; i++) {
      const o = opts[i];
      if (!o.value) continue;
      const code = o.value;
      const name = countryNames[code] || code;
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = `${name} (${code})`;
      playerCountry.appendChild(opt);
    }
    sortSelectByText(playerCountry);
  })();

  playerCountry.addEventListener('change', () => {
    const dict = i18n[currentLang] || i18n.es;
    const country = playerCountry.value;
    playerRegion.innerHTML = `<option value="" data-i18n-option="region_select">${dict.region_select}</option>`;
    if (!country || !regionsByCountry[country]) return;
    (regionsByCountry[country] || []).forEach(r => {
      const opt = document.createElement('option');
      opt.value = r;
      opt.textContent = r;
      playerRegion.appendChild(opt);
    });
  });

  // Geolocalización y clic en mapa
  const latInput = document.getElementById('place-lat');
  const lngInput = document.getElementById('place-lng');
  const btnUseLocation = document.getElementById('btn-use-location');
  let currentLocationMarker = null;

  btnUseLocation.addEventListener('click', () => {
    const dict = i18n[currentLang] || i18n.es;
    if (!navigator.geolocation) {
      alert('Tu navegador no soporta geolocalización.');
      return;
    }

    btnUseLocation.disabled = true;
    btnUseLocation.textContent = dict.btn_use_location + '...';

    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        latInput.value = lat.toFixed(6);
        lngInput.value = lng.toFixed(6);

        if (currentLocationMarker) {
          map.removeLayer(currentLocationMarker);
        }

        currentLocationMarker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: 'emoji-pin',
            html: '📍',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })
        })
          .addTo(map)
          .bindPopup('<strong>Tu ubicación aproximada</strong><br>Pulsa "Enviar ficha" para registrarla.')
          .openPopup();

        map.setView([lat, lng], 13);

        btnUseLocation.disabled = false;
        btnUseLocation.textContent = dict.btn_use_location;
      },
      err => {
        alert('No se pudo obtener la ubicación (' + err.message + ').');
        btnUseLocation.disabled = false;
        btnUseLocation.textContent = dict.btn_use_location;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  });

  map.on('click', e => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    latInput.value = lat.toFixed(6);
    lngInput.value = lng.toFixed(6);

    if (currentLocationMarker) {
      map.removeLayer(currentLocationMarker);
    }
    currentLocationMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: 'emoji-pin',
        html: '📍',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    })
      .addTo(map)
      .bindPopup('<strong>Punto elegido</strong><br>Pulsa "Enviar ficha" para registrarlo.')
      .openPopup();
  });

  // Envío del formulario
  const form = document.getElementById('add-player-form');
  form.addEventListener('submit', async evt => {
    evt.preventDefault();

    const name = document.getElementById('player-name').value.trim();
    const country = playerCountry.value;
    const region = playerRegion.value;
    const rank = document.getElementById('player-rank').value.trim();
    const ogs = document.getElementById('player-ogs').value.trim();
    const email = document.getElementById('player-email').value.trim();
    const text = document.getElementById('player-text').value.trim();
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);
    const genderInput = document.querySelector('input[name="player-gender"]:checked');
    const gender = genderInput ? genderInput.value : '';

    if (!name || !country || !region || isNaN(lat) || isNaN(lng)) {
      alert('Revisa nombre, país, región y coordenadas.');
      return;
    }

    const payload = {
      name,
      type: 'go',
      text,
      lat,
      lng,
      country,
      region,
      rank,
      ogs,
      email,
      gender
    };

    try {
      await fetch(WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      allPlayers.push({
        name,
        type: 'go',
        text,
        lat,
        lng,
        country,
        region,
        rank,
        ogs,
        email,
        gender
      });

      recomputeOptionCounts();
      renderPlayers();

      form.reset();
      alert('Ficha enviada. Registro existoso.');
    } catch (err) {
      alert('Error al enviar. Intenta nuevamente.');
      console.log(err);
    }
  });

  // Cambiar idioma
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      recomputeOptionCounts();
    });
  });

  // Idioma inicial
  applyTranslations('es');
    

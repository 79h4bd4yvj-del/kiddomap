/* KiddoMap — prototype v0.1 */
"use strict";

/* ============ i18n ============ */
const I18N = {
  es: {
    ob_tag: "Todos los planes para hacer con tus hijos, cerca de ti y clasificados por edad.",
    ob_p1: "Parques, museos, salones de juego y más en un mapa",
    ob_p2: "Filtrado por edades: toddlers, kids y teens",
    ob_p3: "Eventos infantiles en tu zona, cada semana",
    ob_use_loc: "Usar mi ubicación", ob_search_city: "Buscar mi ciudad",
    go_premium: "Premium", premium_active: "Premium",
    nav_map: "Mapa", nav_list: "Lista", nav_events: "Eventos", nav_agenda: "Agenda", nav_profile: "Perfil",
    search_ph: "¿Dónde buscamos?",
    age_toddler: "Toddlers 0–4", age_kid: "Kids 5–12", age_teen: "Teens 13+",
    cat_playground: "Parques infantiles", cat_park: "Parques", cat_indoor: "Juegos techados",
    cat_arcade: "Arcades", cat_museum: "Museos", cat_library: "Bibliotecas",
    cat_zoo: "Zoo y acuarios", cat_theme: "Diversión", cat_water: "Agua y piscinas",
    cat_active: "Deporte y acción", cat_cinema: "Cines",
    loading: "Buscando lugares cerca de ti…",
    load_err: "No pudimos cargar los lugares. Revisa tu conexión e inténtalo de nuevo.",
    retry: "Reintentar",
    no_results: "Sin resultados con estos filtros",
    no_results_p: "Prueba ampliar el radio de búsqueda o quitar filtros.",
    found_n: "lugares encontrados",
    open_now: "Abierto", closed_now: "Cerrado", hours_na: "Horario no disponible",
    address: "Dirección", hours: "Horario", distance: "Distancia", walk: "min a pie",
    act_route: "Cómo llegar", act_call: "Llamar", act_web: "Sitio web",
    act_reviews: "Reviews", act_schedule: "Agendar", act_share: "Compartir",
    addr_loading: "Obteniendo dirección…", addr_na: "Dirección no disponible",
    phone_na: "Este lugar no tiene teléfono registrado",
    web_na: "Este lugar no tiene sitio web registrado",
    reviews_title: "Reviews de padres",
    write_review: "Escribir review", no_reviews: "Aún no hay reviews. ¡Sé el primero!",
    your_rating: "Tu calificación", review_ph: "Cuéntales a otros padres cómo fue tu visita…",
    publish: "Publicar", review_saved: "¡Review publicada! (demo)",
    sched_title: "Agendar actividad", sched_date: "Fecha", sched_time: "Hora",
    sched_save: "Guardar en mi agenda", sched_saved: "Guardado en tu agenda ✅",
    agenda_title: "Mi agenda familiar",
    agenda_empty: "Tu agenda está vacía",
    agenda_empty_p: "Agenda actividades desde cualquier lugar o evento y organiza la semana con tus hijos.",
    agenda_locked_p: "Con Premium puedes agendar actividades, recibir recordatorios y organizar la semana con tus hijos.",
    events_title: "Eventos cerca de ti",
    events_demo_note: "Eventos de muestra. En la versión final se conectan en vivo Ticketmaster, Eventbrite y calendarios locales de tu ciudad.",
    ev_free: "Gratis", ev_from: "Desde",
    ev_remind: "Recordármelo", ev_tickets: "Comprar boletos",
    ev_reminded: "Te avisaremos antes del evento 🔔 (demo)",
    ev_tickets_demo: "En producción esto abre la compra de boletos (Ticketmaster / Eventbrite) dentro del app.",
    notif_title: "Notificaciones",
    notif_locked: "Recibe alertas de nuevos eventos infantiles en tu zona con Premium.",
    paywall_title: "KiddoMap Premium",
    paywall_price_after: "/mes · cancela cuando quieras",
    perk_route: "Navegación para llegar a cada lugar",
    perk_contact: "Teléfono y sitio web de cada lugar",
    perk_reviews: "Lee y escribe reviews de otros padres",
    perk_agenda: "Agenda familiar con recordatorios",
    perk_notif: "Alertas de eventos infantiles en tu zona",
    perk_tickets: "Compra de boletos dentro del app",
    paywall_cta: "Comenzar Premium — $2.99/mes",
    paywall_demo: "Este es un prototipo: el botón activa un modo demo de Premium sin cobrar. En producción se conecta a Apple Pay / Google Pay.",
    premium_on: "✨ ¡Premium activado! (modo demo)",
    premium_feature: "Esta función es parte de Premium",
    profile_title: "Perfil",
    p_premium_on: "Premium activo", p_premium_on_sub: "Modo demo · $2.99/mes en producción",
    p_premium_off: "Hazte Premium", p_premium_off_sub: "Navegación, reviews, agenda y eventos",
    p_lang: "Idioma", p_location: "Ubicación de búsqueda", p_radius: "Radio de búsqueda",
    p_ages: "Edades de tus hijos", p_ages_sub: "Usamos esto para ordenar resultados",
    p_manage: "Administrar suscripción", p_cancel: "Cancelar Premium (demo)",
    p_about: "Acerca de este prototipo",
    p_about_sub: "KiddoMap v0.1 · datos de OpenStreetMap",
    p_feedback: "Enviar comentarios",
    section_account: "Cuenta", section_prefs: "Preferencias", section_info: "Información",
    canceled: "Premium desactivado (demo)",
    search_title: "¿Dónde quieres buscar?",
    search_input_ph: "Ciudad, barrio o código postal…",
    search_go: "Buscar", searching: "Buscando…", search_none: "No encontramos ese lugar. Intenta con otra búsqueda.",
    use_my_loc: "📍 Usar mi ubicación actual",
    geo_denied: "No pudimos acceder a tu ubicación. Busca tu ciudad manualmente.",
    geo_finding: "Localizándote…",
    near_you: "Cerca de ti",
    demo_badge: "DEMO",
    share_copied: "Enlace copiado 📋",
    today: "Hoy", tomorrow: "Mañana",
    days: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    months: ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
    ages_saved: "Preferencia guardada",
    del_confirm: "Actividad eliminada",
    upgrade_hint: "Toca para desbloquear con Premium"
  },
  en: {
    ob_tag: "Every kid-friendly plan around you, on one map, sorted by age.",
    ob_p1: "Playgrounds, museums, play centers and more on a map",
    ob_p2: "Filtered by age: toddlers, kids and teens",
    ob_p3: "Kids' events in your area, every week",
    ob_use_loc: "Use my location", ob_search_city: "Search my city",
    go_premium: "Premium", premium_active: "Premium",
    nav_map: "Map", nav_list: "List", nav_events: "Events", nav_agenda: "Planner", nav_profile: "Profile",
    search_ph: "Where should we look?",
    age_toddler: "Toddlers 0–4", age_kid: "Kids 5–12", age_teen: "Teens 13+",
    cat_playground: "Playgrounds", cat_park: "Parks", cat_indoor: "Indoor play",
    cat_arcade: "Arcades", cat_museum: "Museums", cat_library: "Libraries",
    cat_zoo: "Zoos & aquariums", cat_theme: "Fun parks", cat_water: "Water & pools",
    cat_active: "Sports & action", cat_cinema: "Movies",
    loading: "Finding places near you…",
    load_err: "We couldn't load places. Check your connection and try again.",
    retry: "Retry",
    no_results: "No results with these filters",
    no_results_p: "Try a bigger search radius or remove some filters.",
    found_n: "places found",
    open_now: "Open", closed_now: "Closed", hours_na: "Hours not available",
    address: "Address", hours: "Hours", distance: "Distance", walk: "min walk",
    act_route: "Directions", act_call: "Call", act_web: "Website",
    act_reviews: "Reviews", act_schedule: "Schedule", act_share: "Share",
    addr_loading: "Getting address…", addr_na: "Address not available",
    phone_na: "No phone on record for this place",
    web_na: "No website on record for this place",
    reviews_title: "Parent reviews",
    write_review: "Write a review", no_reviews: "No reviews yet. Be the first!",
    your_rating: "Your rating", review_ph: "Tell other parents how your visit went…",
    publish: "Publish", review_saved: "Review published! (demo)",
    sched_title: "Schedule activity", sched_date: "Date", sched_time: "Time",
    sched_save: "Save to my planner", sched_saved: "Saved to your planner ✅",
    agenda_title: "Family planner",
    agenda_empty: "Your planner is empty",
    agenda_empty_p: "Schedule activities from any place or event and plan the week with your kids.",
    agenda_locked_p: "With Premium you can schedule activities, get reminders and plan the week with your kids.",
    events_title: "Events near you",
    events_demo_note: "Sample events. The final version connects live to Ticketmaster, Eventbrite and local city calendars.",
    ev_free: "Free", ev_from: "From",
    ev_remind: "Remind me", ev_tickets: "Buy tickets",
    ev_reminded: "We'll remind you before the event 🔔 (demo)",
    ev_tickets_demo: "In production this opens in-app ticket purchase (Ticketmaster / Eventbrite).",
    notif_title: "Notifications",
    notif_locked: "Get alerts about new kids' events in your area with Premium.",
    paywall_title: "KiddoMap Premium",
    paywall_price_after: "/month · cancel anytime",
    perk_route: "Turn-by-turn directions to every place",
    perk_contact: "Phone number and website for every place",
    perk_reviews: "Read and write reviews from other parents",
    perk_agenda: "Family planner with reminders",
    perk_notif: "Alerts for kids' events in your area",
    perk_tickets: "In-app ticket purchase",
    paywall_cta: "Start Premium — $2.99/mo",
    paywall_demo: "This is a prototype: the button turns on a Premium demo mode without charging. Production connects Apple Pay / Google Pay.",
    premium_on: "✨ Premium activated! (demo mode)",
    premium_feature: "This feature is part of Premium",
    profile_title: "Profile",
    p_premium_on: "Premium active", p_premium_on_sub: "Demo mode · $2.99/mo in production",
    p_premium_off: "Go Premium", p_premium_off_sub: "Directions, reviews, planner and events",
    p_lang: "Language", p_location: "Search location", p_radius: "Search radius",
    p_ages: "Your kids' ages", p_ages_sub: "We use this to sort results",
    p_manage: "Manage subscription", p_cancel: "Cancel Premium (demo)",
    p_about: "About this prototype",
    p_about_sub: "KiddoMap v0.1 · data from OpenStreetMap",
    p_feedback: "Send feedback",
    section_account: "Account", section_prefs: "Preferences", section_info: "Info",
    canceled: "Premium turned off (demo)",
    search_title: "Where do you want to look?",
    search_input_ph: "City, neighborhood or ZIP…",
    search_go: "Search", searching: "Searching…", search_none: "We couldn't find that place. Try another search.",
    use_my_loc: "📍 Use my current location",
    geo_denied: "We couldn't access your location. Search your city manually.",
    geo_finding: "Locating you…",
    near_you: "Near you",
    demo_badge: "DEMO",
    share_copied: "Link copied 📋",
    today: "Today", tomorrow: "Tomorrow",
    days: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
    ages_saved: "Preference saved",
    del_confirm: "Activity removed",
    upgrade_hint: "Tap to unlock with Premium"
  }
};

/* ============ storage ============ */
const store = {
  get(k, d) { try { const v = localStorage.getItem("km_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("km_" + k, JSON.stringify(v)); } catch (e) {} }
};

/* ============ state ============ */
const state = {
  lang: store.get("lang", (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en"),
  premium: store.get("premium", false),
  center: store.get("center", null),        // {lat, lon, label}
  radius: store.get("radius", 5000),
  ages: store.get("ages", []),              // active age filters
  kidAges: store.get("kidAges", []),        // profile preference
  cats: store.get("cats", []),              // active category filters
  places: [],
  agenda: store.get("agenda", []),
  myReviews: store.get("myReviews", {}),
  reminded: store.get("reminded", []),
  notifSeen: store.get("notifSeen", false),
  view: "map",
  loading: false,
  loadError: false
};
const t = (k) => (I18N[state.lang] && I18N[state.lang][k]) !== undefined ? I18N[state.lang][k] : (I18N.en[k] || k);

/* ============ categories ============ */
const CATS = {
  playground: { emoji: "🛝", color: "#FF6B5E", ages: ["toddler", "kid"] },
  park:       { emoji: "🌳", color: "#3AA655", ages: ["toddler", "kid", "teen"] },
  indoor:     { emoji: "🎪", color: "#FF8FB1", ages: ["toddler", "kid"] },
  arcade:     { emoji: "🕹️", color: "#8A63D2", ages: ["kid", "teen"] },
  museum:     { emoji: "🏛️", color: "#C98A2D", ages: ["kid", "teen"] },
  library:    { emoji: "📚", color: "#4A7FE0", ages: ["toddler", "kid", "teen"] },
  zoo:        { emoji: "🦁", color: "#D9822B", ages: ["toddler", "kid", "teen"] },
  theme:      { emoji: "🎢", color: "#E0508A", ages: ["kid", "teen"] },
  water:      { emoji: "💦", color: "#2BA3C9", ages: ["toddler", "kid", "teen"] },
  active:     { emoji: "⛸️", color: "#1FA79A", ages: ["kid", "teen"] },
  cinema:     { emoji: "🎬", color: "#5B6B8C", ages: ["kid", "teen"] }
};
const AGE_KEYS = ["toddler", "kid", "teen"];

function classify(tags) {
  if (!tags) return null;
  const l = tags.leisure, tm = tags.tourism, a = tags.amenity;
  if (l === "playground") return "playground";
  if (l === "indoor_play") return "indoor";
  if (l === "amusement_arcade") return "arcade";
  if (l === "trampoline_park" || l === "ice_rink" || l === "bowling_alley" || l === "miniature_golf" || l === "climbing") return "active";
  if (l === "water_park") return "water";
  if (l === "swimming_pool") return tags.name ? "water" : null;
  if (l === "park" || l === "garden") return "park";
  if (tm === "museum") return "museum";
  if (tm === "zoo" || tm === "aquarium") return "zoo";
  if (tm === "theme_park") return "theme";
  if (a === "library") return "library";
  if (a === "cinema") return "cinema";
  return null;
}

/* ============ utils ============ */
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function haversine(a, b, c, d) {
  const R = 6371000, rad = Math.PI / 180;
  const dLat = (c - a) * rad, dLon = (d - b) * rad;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a * rad) * Math.cos(c * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
function fmtDist(m) { return m < 950 ? Math.round(m / 10) * 10 + " m" : (m / 1000).toFixed(1) + " km"; }
function walkMin(m) { return Math.max(1, Math.round(m / 80)); }
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove("show"), 2600);
}
function placeName(p) {
  if (p.tags.name) return p.tags.name;
  if (p.cat === "playground") return state.lang === "es" ? "Parque infantil" : "Playground";
  if (p.cat === "park") return state.lang === "es" ? "Parque" : "Park";
  return t("cat_" + p.cat);
}

/* ============ opening hours (lightweight parser) ============ */
const DAY_IDX = { Su: 0, Mo: 1, Tu: 2, We: 3, Th: 4, Fr: 5, Sa: 6 };
function parseDays(str) {
  const days = new Set();
  if (!str || !str.trim()) { for (let i = 0; i < 7; i++) days.add(i); return days; }
  str.split(",").forEach(part => {
    part = part.trim();
    const m = part.match(/^([A-Z][a-z])-([A-Z][a-z])$/);
    if (m && DAY_IDX[m[1]] !== undefined && DAY_IDX[m[2]] !== undefined) {
      let i = DAY_IDX[m[1]];
      days.add(i);
      while (i !== DAY_IDX[m[2]]) { i = (i + 1) % 7; days.add(i); }
    } else if (DAY_IDX[part] !== undefined) days.add(DAY_IDX[part]);
  });
  return days;
}
function isOpenNow(oh) {
  if (!oh) return null;
  oh = oh.trim();
  if (oh === "24/7") return true;
  const now = new Date();
  const day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  let result = null;
  try {
    for (let rule of oh.split(";")) {
      rule = rule.trim();
      if (!rule || /PH|SH/.test(rule)) continue;
      const off = /\boff\b|\bclosed\b/i.test(rule);
      const timeM = rule.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})(?:\s*,\s*\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2})*/);
      const dayPart = rule.replace(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/g, "").replace(/off|closed/gi, "").replace(/,\s*$/, "");
      const days = parseDays(dayPart.replace(/[^A-Za-z,\- ]/g, ""));
      if (!days.has(day)) continue;
      if (off) { result = false; continue; }
      if (!timeM) { result = true; continue; }
      let open = false;
      const ranges = rule.match(/\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}/g) || [];
      for (const r of ranges) {
        const mm = r.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
        const s = (+mm[1]) * 60 + (+mm[2]), e = (+mm[3]) * 60 + (+mm[4]);
        if (e < s ? (mins >= s || mins < e) : (mins >= s && mins < e)) open = true;
      }
      result = open;
    }
  } catch (e) { return null; }
  return result;
}
function prettyHours(oh) {
  if (!oh) return t("hours_na");
  const map = state.lang === "es"
    ? { Mo: "Lun", Tu: "Mar", We: "Mié", Th: "Jue", Fr: "Vie", Sa: "Sáb", Su: "Dom", off: "cerrado", PH: "Festivos" }
    : { Mo: "Mon", Tu: "Tue", We: "Wed", Th: "Thu", Fr: "Fri", Sa: "Sat", Su: "Sun", off: "closed", PH: "Holidays" };
  let s = oh;
  Object.keys(map).forEach(k => { s = s.replace(new RegExp("\\b" + k + "\\b", "g"), map[k]); });
  return s.replace(/;/g, " · ").replace(/24\/7/, state.lang === "es" ? "Abierto 24 horas" : "Open 24 hours");
}

/* ============ map ============ */
let map, markersLayer, userMarker;
function initMap() {
  const c = state.center || { lat: 25.7617, lon: -80.1918 };
  map = L.map("map", { zoomControl: false, attributionControl: true }).setView([c.lat, c.lon], 14);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
}
function setUserMarker() {
  if (!state.center) return;
  if (userMarker) userMarker.remove();
  userMarker = L.marker([state.center.lat, state.center.lon], {
    icon: L.divIcon({ html: '<div style="width:18px;height:18px;border-radius:50%;background:#4A7FE0;border:3.5px solid #fff;box-shadow:0 0 0 6px rgba(74,127,224,.25)"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }),
    zIndexOffset: 500
  }).addTo(map);
}

/* ============ data loading (Overpass) ============ */
const OVERPASS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
let opIdx = 0;
function overpassQuery() {
  const { lat, lon } = state.center, r = state.radius;
  const around = `(around:${r},${lat},${lon})`;
  return `[out:json][timeout:40];(
    nwr["leisure"~"^(playground|park|amusement_arcade|trampoline_park|water_park|ice_rink|bowling_alley|miniature_golf|indoor_play|climbing)$"]${around};
    nwr["leisure"="swimming_pool"]["name"]["access"!~"^(private|no)$"]${around};
    nwr["tourism"~"^(museum|zoo|aquarium|theme_park)$"]${around};
    nwr["amenity"~"^(library|cinema)$"]${around};
  );out center 600;`;
}
async function loadPlaces() {
  if (!state.center) return;
  state.loading = true; state.loadError = false;
  renderCountPill(); renderList();
  try {
    const url = OVERPASS[opIdx % OVERPASS.length];
    const res = await fetch(url, { method: "POST", body: "data=" + encodeURIComponent(overpassQuery()), headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    const seen = new Map(); const out = [];
    for (const el of (json.elements || [])) {
      const tags = el.tags || {};
      const cat = classify(tags);
      if (!cat) continue;
      const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
      const lon = el.lon != null ? el.lon : (el.center && el.center.lon);
      if (lat == null) continue;
      if (!tags.name && cat !== "playground" && cat !== "park") continue;
      const p = { id: el.type + "/" + el.id, tags, cat, lat, lon, dist: haversine(state.center.lat, state.center.lon, lat, lon) };
      if (tags.name) {
        const key = cat + "|" + tags.name.toLowerCase();
        const prev = seen.get(key);
        if (prev && haversine(prev.lat, prev.lon, lat, lon) < 400) { if (el.type === "relation") { Object.assign(prev, p); } continue; }
        seen.set(key, p);
      }
      out.push(p);
    }
    out.sort((a, b) => a.dist - b.dist);
    state.places = out.slice(0, 400);
    state.loading = false;
    renderMarkers(); renderList(); renderCountPill();
  } catch (e) {
    opIdx++;
    state.loading = false; state.loadError = true;
    renderList(); renderCountPill();
  }
}

/* ============ filtering ============ */
function agesBoost(p) {
  if (!state.kidAges.length) return 0;
  return CATS[p.cat].ages.some(a => state.kidAges.includes(a)) ? -1 : 0;
}
function filtered() {
  let arr = state.places.filter(p => {
    if (state.cats.length && !state.cats.includes(p.cat)) return false;
    if (state.ages.length && !CATS[p.cat].ages.some(a => state.ages.includes(a))) return false;
    return true;
  });
  arr = arr.slice().sort((a, b) => (agesBoost(a) - agesBoost(b)) || (a.dist - b.dist));
  return arr;
}

/* ============ rendering: markers, list ============ */
function renderMarkers() {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  const arr = filtered().slice(0, 250);
  for (const p of arr) {
    const cat = CATS[p.cat];
    const mk = L.marker([p.lat, p.lon], {
      icon: L.divIcon({ html: `<div class="kmark" style="background:${cat.color}"><span>${cat.emoji}</span></div>`, iconSize: [34, 34], iconAnchor: [17, 30] })
    });
    mk.on("click", () => openSheet(p));
    markersLayer.addLayer(mk);
  }
}
function renderCountPill() {
  const pill = document.getElementById("count-pill");
  if (state.loading) { pill.classList.remove("hidden"); pill.textContent = t("loading"); return; }
  if (state.loadError) { pill.classList.remove("hidden"); pill.textContent = "⚠️ " + t("retry"); return; }
  const n = filtered().length;
  pill.classList.remove("hidden");
  pill.textContent = `${n} ${t("found_n")}`;
}
function ageBadges(p) {
  return CATS[p.cat].ages.map(a => `<span class="badge age">${t("age_" + a).split(" ")[0]}</span>`).join("");
}
function openBadge(p) {
  const o = isOpenNow(p.tags.opening_hours);
  if (o === true) return `<span class="badge open">● ${t("open_now")}</span>`;
  if (o === false) return `<span class="badge closed">● ${t("closed_now")}</span>`;
  return "";
}
function renderList() {
  const box = document.getElementById("list-scroll");
  if (state.loading) { box.innerHTML = `<div class="state-box"><div class="spinner"></div><p>${t("loading")}</p></div>`; return; }
  if (state.loadError) {
    box.innerHTML = `<div class="state-box"><div class="big">📡</div><h3>Ups</h3><p>${t("load_err")}</p><br><button class="btn small" onclick="loadPlaces()">${t("retry")}</button></div>`;
    return;
  }
  const arr = filtered();
  if (!arr.length) {
    box.innerHTML = `<div class="state-box"><div class="big">🧭</div><h3>${t("no_results")}</h3><p>${t("no_results_p")}</p></div>`;
    return;
  }
  box.innerHTML = arr.slice(0, 120).map((p, i) => {
    const cat = CATS[p.cat];
    return `<div class="pcard" onclick="openSheetById('${p.id}')">
      <div class="cicon" style="background:${cat.color}22">${cat.emoji}</div>
      <div class="info">
        <h3>${esc(placeName(p))}</h3>
        <div class="meta"><span>${t("cat_" + p.cat)}</span>${openBadge(p)}</div>
        <div class="meta">${ageBadges(p)}</div>
      </div>
      <div class="dist">${fmtDist(p.dist)}<small>🚶 ${walkMin(p.dist)} ${t("walk")}</small></div>
    </div>`;
  }).join("");
}

/* ============ place sheet ============ */
let currentPlace = null;
const addrCache = {};
window.openSheetById = function (id) { const p = state.places.find(x => x.id === id); if (p) openSheet(p); };
function addrFromTags(tg) {
  const parts = [];
  if (tg["addr:street"]) parts.push((tg["addr:housenumber"] ? tg["addr:housenumber"] + " " : "") + tg["addr:street"]);
  if (tg["addr:city"]) parts.push(tg["addr:city"]);
  return parts.join(", ");
}
function openSheet(p) {
  currentPlace = p;
  const cat = CATS[p.cat];
  const addr = addrFromTags(p.tags) || addrCache[p.id];
  const body = document.getElementById("sheet-body");
  const lock = (f) => state.premium ? "" : `<span class="lockic">🔒</span>`;
  body.innerHTML = `
    <div class="sheet-head">
      <div class="cicon" style="background:${cat.color}22">${cat.emoji}</div>
      <div>
        <h2>${esc(placeName(p))}</h2>
        <div class="meta" style="margin-top:4px"><span>${t("cat_" + p.cat)}</span>${openBadge(p)}</div>
        <div class="meta" style="margin-top:4px">${ageBadges(p)}</div>
      </div>
    </div>
    <div class="inforow"><span class="ic">📍</span><div><b>${t("address")}</b><div class="val" id="sheet-addr">${addr ? esc(addr) : t("addr_loading")}</div></div></div>
    <div class="inforow"><span class="ic">🕐</span><div><b>${t("hours")}</b><div class="val">${esc(prettyHours(p.tags.opening_hours))}</div></div></div>
    <div class="inforow" style="border-bottom:none"><span class="ic">🚶</span><div><b>${t("distance")}</b><div class="val">${fmtDist(p.dist)} · ${walkMin(p.dist)} ${t("walk")}</div></div></div>
    <div class="actions-grid">
      <button class="act ${state.premium ? "" : "locked"}" onclick="actRoute()">${lock()}<span class="ico">🧭</span>${t("act_route")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actCall()">${lock()}<span class="ico">📞</span>${t("act_call")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actWeb()">${lock()}<span class="ico">🌐</span>${t("act_web")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actReviews()">${lock()}<span class="ico">⭐</span>${t("act_reviews")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actSchedule()">${lock()}<span class="ico">📅</span>${t("act_schedule")}</button>
      <button class="act" onclick="actShare()"><span class="ico">📤</span>${t("act_share")}</button>
    </div>
    <div id="sheet-reviews"></div>`;
  document.getElementById("overlay").classList.add("show");
  document.getElementById("sheet").classList.add("show");
  if (!addr) reverseGeocode(p);
}
function closeSheet() {
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("sheet").classList.remove("show");
}
async function reverseGeocode(p) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${p.lat}&lon=${p.lon}&zoom=17&accept-language=${state.lang}`);
    const j = await res.json();
    const a = j.address || {};
    const line = [[a.house_number, a.road].filter(Boolean).join(" "), a.suburb || a.neighbourhood, a.city || a.town || a.village, a.postcode].filter(Boolean).join(", ");
    addrCache[p.id] = line || (j.display_name || "").split(",").slice(0, 3).join(",");
    const el = document.getElementById("sheet-addr");
    if (el && currentPlace && currentPlace.id === p.id) el.textContent = addrCache[p.id] || t("addr_na");
  } catch (e) {
    const el = document.getElementById("sheet-addr");
    if (el) el.textContent = t("addr_na");
  }
}

/* ============ premium gating ============ */
function requirePremium(fn) {
  if (state.premium) { fn(); } else { openPaywall(); }
}
window.actRoute = () => requirePremium(() => {
  const p = currentPlace;
  const g = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}`;
  window.open(g, "_blank");
});
window.actCall = () => requirePremium(() => {
  const ph = currentPlace.tags.phone || currentPlace.tags["contact:phone"];
  if (ph) { location.href = "tel:" + ph.replace(/[^+\d]/g, ""); } else toast(t("phone_na"));
});
window.actWeb = () => requirePremium(() => {
  let w = currentPlace.tags.website || currentPlace.tags["contact:website"];
  if (w) { if (!/^https?:/.test(w)) w = "https://" + w; window.open(w, "_blank"); } else toast(t("web_na"));
});
window.actShare = async () => {
  const p = currentPlace;
  const url = `https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=18/${p.lat}/${p.lon}`;
  const text = placeName(p) + " · KiddoMap";
  if (navigator.share) { try { await navigator.share({ title: text, url }); } catch (e) {} }
  else { try { await navigator.clipboard.writeText(url); toast(t("share_copied")); } catch (e) {} }
};

/* ============ reviews ============ */
const SEED_REVIEWS = {
  es: [
    { n: "Mariana G.", s: 5, txt: "Fuimos con nuestra hija de 3 años y le encantó. Limpio y con sombra." },
    { n: "Carlos R.", s: 4, txt: "Buen lugar para pasar la tarde. Los fines de semana se llena bastante." },
    { n: "Ana P.", s: 5, txt: "Ideal para niños pequeños. Hay baños cerca y estacionamiento fácil." }
  ],
  en: [
    { n: "Jessica M.", s: 5, txt: "Took our 3-year-old and she loved it. Clean and shaded." },
    { n: "Mike D.", s: 4, txt: "Great for an afternoon out. Gets busy on weekends." },
    { n: "Sarah K.", s: 5, txt: "Perfect for little ones. Restrooms nearby and easy parking." }
  ]
};
function hashCode(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return Math.abs(h); }
window.actReviews = () => requirePremium(() => {
  const p = currentPlace;
  const box = document.getElementById("sheet-reviews");
  const seeds = SEED_REVIEWS[state.lang];
  const h = hashCode(p.id);
  const demo = [seeds[h % 3], seeds[(h + 1) % 3]];
  const mine = state.myReviews[p.id] ? [state.myReviews[p.id]] : [];
  const all = [...mine, ...demo];
  box.innerHTML = `<h3 style="margin:6px 0 10px;font-size:16px">⭐ ${t("reviews_title")} <span class="badge demo">${t("demo_badge")}</span></h3>` +
    all.map(r => `<div class="review"><div class="rh"><span>${esc(r.n)}</span><span class="stars">${"★".repeat(r.s)}${"☆".repeat(5 - r.s)}</span></div><p>${esc(r.txt)}</p></div>`).join("") +
    `<button class="btn teal small" style="width:100%" onclick="openReviewModal()">✍️ ${t("write_review")}</button>`;
  box.scrollIntoView({ behavior: "smooth" });
});
let pickedStars = 5;
window.openReviewModal = () => {
  const body = document.getElementById("review-body");
  pickedStars = 5;
  body.innerHTML = `<button class="mclose" data-close="review-modal">✕</button>
    <h2 style="text-align:center;margin:16px 0 4px">${t("write_review")}</h2>
    <p style="text-align:center;font-weight:700;color:var(--ink2);font-size:13.5px">${esc(placeName(currentPlace))}</p>
    <p style="text-align:center;font-weight:800;margin-top:12px">${t("your_rating")}</p>
    <div class="starpick" id="starpick">${[1,2,3,4,5].map(i => `<button data-s="${i}" class="on">⭐</button>`).join("")}</div>
    <textarea class="rev-in" id="rev-text" placeholder="${t("review_ph")}"></textarea>
    <button class="btn" style="width:100%;margin-top:12px" onclick="saveReview()">${t("publish")}</button>`;
  document.getElementById("starpick").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-s]"); if (!b) return;
    pickedStars = +b.dataset.s;
    document.querySelectorAll("#starpick button").forEach(x => x.classList.toggle("on", +x.dataset.s <= pickedStars));
  });
  showModal("review-modal");
};
window.saveReview = () => {
  const txt = document.getElementById("rev-text").value.trim();
  if (!txt) return;
  state.myReviews[currentPlace.id] = { n: state.lang === "es" ? "Tú" : "You", s: pickedStars, txt };
  store.set("myReviews", state.myReviews);
  hideModal("review-modal");
  toast(t("review_saved"));
  window.actReviews();
};

/* ============ schedule / agenda ============ */
window.actSchedule = () => requirePremium(() => openSchedModal(placeName(currentPlace), "place"));
function openSchedModal(title, type) {
  const body = document.getElementById("sched-body");
  const today = new Date(); const iso = today.toISOString().slice(0, 10);
  body.innerHTML = `<button class="mclose" data-close="sched-modal">✕</button>
    <h2 style="text-align:center;margin:16px 0 4px">📅 ${t("sched_title")}</h2>
    <p style="text-align:center;font-weight:700;color:var(--ink2);font-size:13.5px">${esc(title)}</p>
    <label class="flabel">${t("sched_date")}</label>
    <input class="fin" type="date" id="sched-date" value="${iso}" min="${iso}">
    <label class="flabel">${t("sched_time")}</label>
    <input class="fin" type="time" id="sched-time" value="10:00">
    <button class="btn" style="width:100%;margin-top:16px" onclick="saveSched('${esc(title).replace(/'/g, "\\'")}')">${t("sched_save")}</button>`;
  showModal("sched-modal");
}
window.saveSched = (title) => {
  const d = document.getElementById("sched-date").value;
  const tm = document.getElementById("sched-time").value;
  if (!d) return;
  state.agenda.push({ id: Date.now(), title, date: d, time: tm });
  state.agenda.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  store.set("agenda", state.agenda);
  hideModal("sched-modal"); closeSheet();
  toast(t("sched_saved"));
  renderAgenda();
};
window.delAgenda = (id) => {
  state.agenda = state.agenda.filter(a => a.id !== id);
  store.set("agenda", state.agenda);
  renderAgenda(); toast(t("del_confirm"));
};
function fmtDateLabel(iso) {
  const d = new Date(iso + "T12:00:00");
  const now = new Date(); const td = now.toISOString().slice(0, 10);
  const tm = new Date(now.getTime() + 86400000).toISOString().slice(0, 10);
  if (iso === td) return t("today");
  if (iso === tm) return t("tomorrow");
  return `${t("days")[d.getDay()]} ${d.getDate()} ${t("months")[d.getMonth()]}`;
}
function renderAgenda() {
  const box = document.getElementById("agenda-scroll");
  if (!state.premium) {
    box.innerHTML = `<div class="state-box"><div class="big">📅</div><h3>${t("agenda_title")}</h3><p>${t("agenda_locked_p")}</p><br><button class="btn" onclick="openPaywall()">✨ ${t("paywall_cta")}</button></div>`;
    return;
  }
  if (!state.agenda.length) {
    box.innerHTML = `<div class="state-box"><div class="big">🗓️</div><h3>${t("agenda_empty")}</h3><p>${t("agenda_empty_p")}</p></div>`;
    return;
  }
  const groups = {};
  state.agenda.forEach(a => { (groups[a.date] = groups[a.date] || []).push(a); });
  box.innerHTML = `<h2 style="margin:6px 2px 14px">📅 ${t("agenda_title")}</h2>` + Object.keys(groups).sort().map(d =>
    `<div class="agroup"><div class="ah">${fmtDateLabel(d)}</div>` +
    groups[d].map(a => `<div class="aitem"><span class="at">${a.time || ""}</span><span class="an">${esc(a.title)}</span><button class="del" onclick="delAgenda(${a.id})">🗑️</button></div>`).join("") +
    `</div>`).join("");
}

/* ============ events (demo data) ============ */
function nextDow(dow, weeks) {
  const d = new Date();
  const diff = (dow - d.getDay() + 7) % 7 || 7;
  d.setDate(d.getDate() + diff + (weeks || 0) * 7);
  return d;
}
function demoEvents() {
  const es = state.lang === "es";
  const mk = (date, tEs, tEn, venueEs, venueEn, ages, price, cat) => ({
    id: tEn.replace(/\W/g, "").slice(0, 18),
    date, title: es ? tEs : tEn, venue: es ? venueEs : venueEn, ages, price, cat
  });
  return [
    mk(nextDow(6, 0), "Cuentacuentos bilingüe", "Bilingual Storytime", "Biblioteca Central", "Central Library", ["toddler", "kid"], 0, "library"),
    mk(nextDow(6, 0), "Festival de burbujas gigantes", "Giant Bubble Festival", "Parque Principal", "Main City Park", ["toddler", "kid"], 0, "park"),
    mk(nextDow(0, 0), "Taller de ciencia para niños", "Kids Science Workshop", "Museo de Ciencias", "Science Museum", ["kid"], 12, "museum"),
    mk(nextDow(0, 0), "Tarde de patinaje familiar", "Family Skate Afternoon", "Pista de Hielo Municipal", "City Ice Rink", ["kid", "teen"], 8, "active"),
    mk(nextDow(6, 1), "Obra de teatro: El Principito", "Play: The Little Prince", "Teatro Infantil", "Children's Theater", ["kid", "teen"], 15, "theme"),
    mk(nextDow(0, 1), "Día de granja y animales", "Farm & Animal Day", "Zoológico Local", "Local Zoo", ["toddler", "kid", "teen"], 10, "zoo")
  ];
}
function renderEvents() {
  const box = document.getElementById("events-scroll");
  const evs = demoEvents();
  box.innerHTML = `<h2 style="margin:6px 2px 6px">🎪 ${t("events_title")}</h2>
    <p style="font-size:12.5px;color:var(--ink2);font-weight:600;margin:0 2px 14px;line-height:1.45">ℹ️ ${t("events_demo_note")}</p>` +
    evs.map(ev => {
      const cat = CATS[ev.cat];
      const dd = ev.date;
      return `<div class="ecard">
        <div class="etop">
          <div class="edate"><div class="d">${dd.getDate()}</div><div class="m">${t("months")[dd.getMonth()]}</div></div>
          <div style="flex:1;min-width:0">
            <h3>${esc(ev.title)} <span class="badge demo">${t("demo_badge")}</span></h3>
            <div class="meta"><span>${cat.emoji} ${esc(ev.venue)}</span></div>
            <div class="meta">${ev.ages.map(a => `<span class="badge age">${t("age_" + a).split(" ")[0]}</span>`).join("")}
              <span style="font-weight:900;color:${ev.price ? "var(--ink)" : "var(--ok)"}">${ev.price ? t("ev_from") + " $" + ev.price : t("ev_free")}</span></div>
          </div>
        </div>
        <div class="ebtns">
          <button class="btn ghost small" onclick="evRemind('${ev.id}')">${state.premium ? "" : "🔒 "}🔔 ${t("ev_remind")}</button>
          ${ev.price ? `<button class="btn small" onclick="evTickets()">${state.premium ? "" : "🔒 "}🎟️ ${t("ev_tickets")}</button>` : ""}
        </div>
      </div>`;
    }).join("");
}
window.evRemind = (id) => requirePremium(() => {
  if (!state.reminded.includes(id)) { state.reminded.push(id); store.set("reminded", state.reminded); }
  toast(t("ev_reminded"));
});
window.evTickets = () => requirePremium(() => { toast(t("ev_tickets_demo")); });

/* ============ notifications ============ */
function demoNotifs() {
  const es = state.lang === "es";
  return [
    { i: "🎪", b: es ? "Nuevo evento cerca de ti" : "New event near you", p: es ? "Festival de burbujas gigantes este sábado en el Parque Principal." : "Giant Bubble Festival this Saturday at Main City Park." },
    { i: "⭐", b: es ? "Nueva review" : "New review", p: es ? "Un padre calificó con 5★ un parque que visitaste." : "A parent left 5★ on a park you visited." },
    { i: "📅", b: es ? "Recordatorio" : "Reminder", p: es ? "Tienes una actividad agendada este fin de semana." : "You have an activity scheduled this weekend." }
  ];
}
function openNotifs() {
  const body = document.getElementById("notif-body");
  if (!state.premium) {
    body.innerHTML = `<button class="mclose" data-close="notif-modal">✕</button>
      <div class="pay-hero"><div class="crown">🔔</div><h2>${t("notif_title")}</h2>
      <p style="font-weight:700;color:var(--ink2);margin:8px 0 16px">${t("notif_locked")}</p>
      <button class="btn" onclick="openPaywall()">✨ ${t("paywall_cta")}</button></div>`;
  } else {
    body.innerHTML = `<button class="mclose" data-close="notif-modal">✕</button>
      <h2 style="margin:16px 0 8px;text-align:center">🔔 ${t("notif_title")} <span class="badge demo">${t("demo_badge")}</span></h2>` +
      demoNotifs().map(n => `<div class="notif"><span class="ni">${n.i}</span><div><b>${n.b}</b>${n.p}</div></div>`).join("");
  }
  state.notifSeen = true; store.set("notifSeen", true);
  document.getElementById("notif-dot").classList.add("hidden");
  showModal("notif-modal");
}

/* ============ paywall ============ */
function openPaywall() {
  closeSheet();
  const body = document.getElementById("paywall-body");
  body.innerHTML = `<button class="mclose" data-close="paywall">✕</button>
    <div class="pay-hero">
      <div class="crown">👑</div>
      <h2>${t("paywall_title")}</h2>
      <div class="price"><b>$2.99</b> ${t("paywall_price_after")}</div>
    </div>
    <div style="margin:8px 0 4px">
      <div class="perk"><span class="pi">🧭</span>${t("perk_route")}</div>
      <div class="perk"><span class="pi">📞</span>${t("perk_contact")}</div>
      <div class="perk"><span class="pi">⭐</span>${t("perk_reviews")}</div>
      <div class="perk"><span class="pi">📅</span>${t("perk_agenda")}</div>
      <div class="perk"><span class="pi">🔔</span>${t("perk_notif")}</div>
      <div class="perk"><span class="pi">🎟️</span>${t("perk_tickets")}</div>
    </div>
    <button class="btn" style="width:100%;margin-top:10px" onclick="activatePremium()">✨ ${t("paywall_cta")}</button>
    <p class="finefine">${t("paywall_demo")}</p>`;
  showModal("paywall");
}
window.openPaywall = openPaywall;
window.activatePremium = () => {
  state.premium = true; store.set("premium", true);
  hideModal("paywall");
  toast(t("premium_on"));
  refreshPremiumUI();
};
function cancelPremium() {
  state.premium = false; store.set("premium", false);
  toast(t("canceled"));
  refreshPremiumUI();
}
function refreshPremiumUI() {
  const b = document.getElementById("btn-premium");
  if (state.premium) { b.innerHTML = "👑 Premium"; b.classList.add("premium"); }
  else { b.innerHTML = `✨ <span>${t("go_premium")}</span>`; b.classList.remove("premium"); }
  document.getElementById("notif-dot").classList.toggle("hidden", !(state.premium && !state.notifSeen));
  renderAgenda(); renderEvents(); renderProfile(); renderList();
}

/* ============ profile ============ */
function renderProfile() {
  const box = document.getElementById("profile-scroll");
  const locLabel = state.center ? (state.center.label || t("near_you")) : "—";
  box.innerHTML = `<h2 style="margin:6px 2px 14px">👤 ${t("profile_title")}</h2>
    <div class="sectitle">${t("section_account")}</div>
    ${state.premium
      ? `<div class="prow" style="background:var(--sun-soft);border-color:#F2D48A"><span class="ico">👑</span><div>${t("p_premium_on")}<span class="sub">${t("p_premium_on_sub")}</span></div></div>
         <div class="prow" onclick="cancelPremiumUI()"><span class="ico">💳</span><div>${t("p_manage")}<span class="sub">${t("p_cancel")}</span></div><span class="end">›</span></div>`
      : `<div class="prow" onclick="openPaywall()" style="background:var(--coral-soft);border-color:#F5C1BB"><span class="ico">✨</span><div>${t("p_premium_off")}<span class="sub">${t("p_premium_off_sub")}</span></div><span class="end">›</span></div>`}
    <div class="sectitle">${t("section_prefs")}</div>
    <div class="prow" onclick="toggleLang()"><span class="ico">🌐</span><div>${t("p_lang")}</div><span class="end">${state.lang === "es" ? "Español" : "English"} ›</span></div>
    <div class="prow" onclick="openSearchModal()"><span class="ico">📍</span><div>${t("p_location")}</div><span class="end">${esc(locLabel)} ›</span></div>
    <div class="prow"><span class="ico">👶</span><div>${t("p_ages")}<span class="sub">${t("p_ages_sub")}</span>
      <div class="qchips" style="margin-top:8px">${AGE_KEYS.map(a => `<button class="fchip age ${state.kidAges.includes(a) ? "on" : ""}" onclick="toggleKidAge('${a}');event.stopPropagation()">${t("age_" + a)}</button>`).join("")}</div>
    </div></div>
    <div class="sectitle">${t("section_info")}</div>
    <div class="prow"><span class="ico">ℹ️</span><div>${t("p_about")}<span class="sub">${t("p_about_sub")}</span></div></div>
    <div class="prow" onclick="location.href='mailto:sergiomdzmdz@gmail.com?subject=KiddoMap feedback'"><span class="ico">💬</span><div>${t("p_feedback")}</div><span class="end">›</span></div>`;
}
window.cancelPremiumUI = cancelPremium;
window.toggleKidAge = (a) => {
  const i = state.kidAges.indexOf(a);
  if (i >= 0) state.kidAges.splice(i, 1); else state.kidAges.push(a);
  store.set("kidAges", state.kidAges);
  renderProfile(); renderList(); renderMarkers();
  toast(t("ages_saved"));
};
window.toggleLang = () => {
  state.lang = state.lang === "es" ? "en" : "es";
  store.set("lang", state.lang);
  applyStatic(); renderAll();
};

/* ============ filters UI ============ */
function renderFilterChips() {
  const ageBox = document.getElementById("age-chips");
  ageBox.innerHTML = AGE_KEYS.map(a =>
    `<button class="fchip age ${state.ages.includes(a) ? "on" : ""}" data-age="${a}">${t("age_" + a)}</button>`).join("");
  const catBox = document.getElementById("cat-chips");
  catBox.innerHTML = Object.keys(CATS).map(c =>
    `<button class="fchip ${state.cats.includes(c) ? "on" : ""}" data-cat="${c}">${CATS[c].emoji} ${t("cat_" + c)}</button>`).join("");
}
document.getElementById("age-chips").addEventListener("click", e => {
  const b = e.target.closest("[data-age]"); if (!b) return;
  const a = b.dataset.age; const i = state.ages.indexOf(a);
  if (i >= 0) state.ages.splice(i, 1); else state.ages.push(a);
  store.set("ages", state.ages);
  renderFilterChips(); renderMarkers(); renderList(); renderCountPill();
});
document.getElementById("cat-chips").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  const c = b.dataset.cat; const i = state.cats.indexOf(c);
  if (i >= 0) state.cats.splice(i, 1); else state.cats.push(c);
  store.set("cats", state.cats);
  renderFilterChips(); renderMarkers(); renderList(); renderCountPill();
});

/* ============ location search ============ */
const QUICK_CITIES = [
  { label: "Miami", lat: 25.7617, lon: -80.1918 },
  { label: "Orlando", lat: 28.5384, lon: -81.3789 },
  { label: "New York", lat: 40.7128, lon: -74.006 },
  { label: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { label: "Houston", lat: 29.7604, lon: -95.3698 },
  { label: "Chicago", lat: 41.8781, lon: -87.6298 }
];
function openSearchModal() {
  const body = document.getElementById("search-body");
  body.innerHTML = `<button class="mclose" data-close="search-modal">✕</button>
    <h2 style="margin:16px 0 4px;text-align:center">🔎 ${t("search_title")}</h2>
    <input class="search-input" id="q-input" placeholder="${t("search_input_ph")}" autocomplete="off">
    <div class="qchips">${QUICK_CITIES.map((c, i) => `<button class="fchip" onclick="pickQuickCity(${i})">${c.label}</button>`).join("")}</div>
    <button class="btn teal" style="width:100%;margin:8px 0 4px" onclick="doSearch()">${t("search_go")}</button>
    <button class="btn ghost" style="width:100%;margin-top:6px" onclick="hideModal('search-modal');geolocate()">${t("use_my_loc")}</button>
    <div class="search-list" id="search-results"></div>`;
  showModal("search-modal");
  const inp = document.getElementById("q-input");
  inp.addEventListener("keydown", e => { if (e.key === "Enter") window.doSearch(); });
  setTimeout(() => inp.focus(), 250);
}
window.openSearchModal = openSearchModal;
window.pickQuickCity = (i) => {
  const c = QUICK_CITIES[i];
  setCenter(c.lat, c.lon, c.label);
  hideModal("search-modal");
};
window.doSearch = async () => {
  const q = document.getElementById("q-input").value.trim();
  const box = document.getElementById("search-results");
  if (!q) return;
  box.innerHTML = `<div class="state-box" style="padding:18px"><div class="spinner"></div><p>${t("searching")}</p></div>`;
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=${state.lang}&q=${encodeURIComponent(q)}`);
    const arr = await res.json();
    if (!arr.length) { box.innerHTML = `<p style="text-align:center;font-weight:700;color:var(--ink2);padding:14px">${t("search_none")}</p>`; return; }
    box.innerHTML = arr.map((r, i) => `<button onclick="pickResult(${r.lat},${r.lon},'${esc(r.display_name.split(",").slice(0, 2).join(",")).replace(/'/g, "")}')">📍 <span>${esc(r.display_name.split(",").slice(0, 3).join(","))}</span></button>`).join("");
  } catch (e) {
    box.innerHTML = `<p style="text-align:center;font-weight:700;color:var(--ink2);padding:14px">${t("load_err")}</p>`;
  }
};
window.pickResult = (lat, lon, label) => {
  setCenter(+lat, +lon, label);
  hideModal("search-modal");
};
function setCenter(lat, lon, label) {
  state.center = { lat, lon, label };
  store.set("center", state.center);
  document.getElementById("loc-label").textContent = label || t("near_you");
  hideOnboard();
  if (map) { map.setView([lat, lon], 14); setUserMarker(); }
  loadPlaces(); renderProfile();
}
function geolocate() {
  if (!navigator.geolocation) { openSearchModal(); return; }
  toast(t("geo_finding"));
  navigator.geolocation.getCurrentPosition(
    pos => setCenter(pos.coords.latitude, pos.coords.longitude, t("near_you")),
    () => { toast(t("geo_denied")); openSearchModal(); },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}
window.geolocate = geolocate;

/* ============ modals / nav / static text ============ */
function showModal(id) { document.getElementById(id).classList.add("show"); }
function hideModal(id) { document.getElementById(id).classList.remove("show"); }
window.hideModal = hideModal;
document.addEventListener("click", e => {
  const c = e.target.closest("[data-close]");
  if (c) hideModal(c.dataset.close);
});
document.getElementById("overlay").addEventListener("click", closeSheet);
document.querySelectorAll("nav button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("nav button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    state.view = b.dataset.view;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById("view-" + state.view).classList.add("active");
    if (state.view === "map" && map) setTimeout(() => map.invalidateSize(), 60);
  });
});
function applyStatic() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("btn-lang").textContent = state.lang === "es" ? "EN" : "ES";
  document.getElementById("ob-lang").textContent = state.lang === "es" ? "English" : "Español";
  document.documentElement.lang = state.lang;
  if (state.center && state.center.label) document.getElementById("loc-label").textContent = state.center.label;
  renderFilterChips();
}
function renderAll() {
  renderMarkers(); renderList(); renderCountPill(); renderEvents(); renderAgenda(); renderProfile(); refreshPremiumUI();
}
function hideOnboard() {
  document.getElementById("onboard").classList.add("hidden");
  store.set("onboarded", true);
  if (map) setTimeout(() => map.invalidateSize(), 60);
}

/* ============ wire up ============ */
document.getElementById("btn-lang").addEventListener("click", window.toggleLang);
document.getElementById("ob-lang").addEventListener("click", window.toggleLang);
document.getElementById("btn-premium").addEventListener("click", () => { if (!state.premium) openPaywall(); });
document.getElementById("btn-notif").addEventListener("click", openNotifs);
document.getElementById("map-search").addEventListener("click", openSearchModal);
document.getElementById("fab-locate").addEventListener("click", geolocate);
document.getElementById("fab-reload").addEventListener("click", () => {
  if (!map || !state.center) return;
  const c = map.getCenter();
  setCenter(c.lat, c.lng, t("near_you"));
});
document.getElementById("count-pill").addEventListener("click", () => {
  if (state.loadError) loadPlaces();
  else document.querySelector('nav button[data-view="list"]').click();
});
document.getElementById("radius").addEventListener("change", e => {
  state.radius = +e.target.value; store.set("radius", state.radius);
  loadPlaces();
});
document.getElementById("ob-geo").addEventListener("click", () => { hideOnboard(); geolocate(); });
document.getElementById("ob-search").addEventListener("click", () => { hideOnboard(); openSearchModal(); });
window.loadPlaces = loadPlaces;

/* ============ init ============ */
initMap();
applyStatic();
renderAll();
document.getElementById("radius").value = String(state.radius);
if (store.get("onboarded", false) && state.center) {
  hideOnboard();
  setUserMarker();
  loadPlaces();
}
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}

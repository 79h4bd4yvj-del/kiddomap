/* Kidsplora — prototype v0.2 */
"use strict";

/* ============ i18n ============ */
const I18N = {
  es: {
    ob_tag: "Todos los planes para hacer con tus hijos, cerca de ti y clasificados por edad.",
    ob_p1: "Parques, museos, salones de juego y más en un mapa",
    ob_p2: "Filtrado por edades: toddlers, kids y teens",
    ob_p3: "Eventos infantiles en tu zona, cada semana",
    ob_use_loc: "Usar mi ubicación", ob_search_city: "Buscar mi ciudad",
    go_premium: "Premium",
    nav_map: "Mapa", nav_list: "Lista", nav_events: "Eventos", nav_agenda: "Agenda", nav_community: "Padres", nav_profile: "Perfil",
    search_ph: "¿Dónde buscamos?",
    age_toddler: "Toddlers 0–4", age_kid: "Kids 5–12", age_teen: "Teens 13+",
    cat_playground: "Parques infantiles", cat_park: "Parques", cat_indoor: "Juegos techados",
    cat_arcade: "Arcades", cat_museum: "Museos", cat_library: "Bibliotecas",
    cat_zoo: "Zoo y acuarios", cat_theme: "Diversión", cat_water: "Agua y piscinas",
    cat_active: "Deporte y acción", cat_cinema: "Cines",
    loading: "Buscando lugares cerca…",
    load_err: "No pudimos cargar los lugares. Revisa tu conexión e inténtalo de nuevo.",
    retry: "Reintentar",
    no_results: "Sin resultados con estos filtros",
    no_results_p: "Algunos lugares (arcades, juegos techados, zoos) suelen estar más lejos. Prueba ampliar el radio.",
    widen_radius: "Ampliar búsqueda a 20 km",
    found_n: "lugares encontrados",
    open_now: "Abierto", closed_now: "Cerrado", hours_na: "Horario no disponible",
    address: "Dirección", hours: "Horario", distance: "Distancia", walk: "min a pie",
    act_route: "Cómo llegar", act_call: "Llamar", act_web: "Sitio web",
    act_reviews: "Reviews", act_schedule: "Agendar", act_share: "Compartir",
    addr_loading: "Obteniendo dirección…", addr_na: "Dirección no disponible",
    phone_na: "Este lugar no tiene teléfono registrado",
    web_na: "Este lugar no tiene sitio web registrado",
    rating_internal: "calificaciones (demo interno)",
    rating_google_soon: "★ Google se conecta en la fase Places",
    rate_label: "Califícalo:",
    rated_thanks: "¡Gracias por calificar! ⭐",
    photos_none: "📷 Fotos del lugar — se conectan con Google Places en la siguiente fase",
    photos_more: "más",
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
    ev_bought: "🎟️ Boletos comprados (demo) — agregado a tu agenda",
    movies_title: "Cartelera",
    movies_note: "Cartelera de muestra filtrada por edades. En producción se conecta la cartelera real del cine.",
    movies_locked: "Horarios y compra de boletos con Premium",
    movie_bought: "🎟️ Función agregada a tu agenda (demo)",
    notif_title: "Notificaciones",
    notif_locked: "Recibe alertas de nuevos eventos infantiles en tu zona con Premium.",
    paywall_title: "Kidsplora Premium",
    paywall_price_after: "/mes · cancela cuando quieras",
    perk_route: "Navegación para llegar a cada lugar",
    perk_contact: "Teléfono y sitio web de cada lugar",
    perk_reviews: "Escribe reviews y ve todas las fotos",
    perk_agenda: "Agenda familiar con recordatorios",
    perk_notif: "Alertas de eventos infantiles en tu zona",
    perk_tickets: "Boletos de eventos y cine en el app",
    perk_community: "Comunidad privada de padres de tu zona",
    paywall_cta: "Comenzar Premium — $2.99/mes",
    paywall_demo: "Este es un prototipo: el botón activa un modo demo de Premium sin cobrar. En producción se conecta a Apple Pay / Google Pay.",
    premium_on: "✨ ¡Premium activado! (modo demo)",
    profile_title: "Perfil",
    p_premium_on: "Premium activo", p_premium_on_sub: "Modo demo · $2.99/mes en producción",
    p_premium_off: "Hazte Premium", p_premium_off_sub: "Navegación, reviews, agenda, comunidad",
    p_lang: "Idioma", p_location: "Ubicación de búsqueda", p_radius: "Radio de búsqueda",
    p_ages: "Edades de tus hijos", p_ages_sub: "Usamos esto para ordenar resultados",
    p_family: "Perfil familiar", p_family_none: "Sin crear — se crea en la pestaña Padres",
    p_tour: "Ver el tutorial de nuevo",
    p_manage: "Administrar suscripción", p_cancel: "Cancelar Premium (demo)",
    p_about: "Acerca de este prototipo",
    p_about_sub: "Kidsplora v0.2 · datos de OpenStreetMap",
    p_feedback: "Enviar comentarios",
    section_account: "Cuenta", section_prefs: "Preferencias", section_info: "Información",
    canceled: "Premium desactivado (demo)",
    search_title: "¿Dónde quieres buscar?",
    search_input_ph: "Ciudad, barrio o código postal…",
    search_go: "Buscar", searching: "Buscando…", search_none: "No encontramos ese lugar. Intenta con otra búsqueda.",
    use_my_loc: "📍 Usar mi ubicación actual",
    geo_denied: "No pudimos acceder a tu ubicación. Busca tu ciudad manualmente.",
    geo_finding: "Localizándote…",
    near_you: "Cerca de ti", this_area: "Esta zona",
    demo_badge: "DEMO",
    share_copied: "Enlace copiado 📋",
    today: "Hoy", tomorrow: "Mañana",
    days: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    months: ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
    ages_saved: "Preferencia guardada",
    del_confirm: "Actividad eliminada",
    tour_skip: "Saltar tutorial", tour_next: "Siguiente", tour_start: "¡A explorar!",
    tour1_t: "Todo en un mapa", tour1_p: "Kidsplora te muestra parques, museos, salones de juego, cines y más, alrededor de donde estés. El punto azul siempre es tu ubicación real.",
    tour2_t: "Filtra por edad", tour2_p: "Toca Toddlers, Kids o Teens y las categorías de arriba para ver solo lo que funciona para tus hijos.",
    tour3_t: "Toca cualquier lugar", tour3_p: "Verás dirección, horario, si está abierto, fotos, calificación de otros padres y a cuántos minutos está.",
    tour4_t: "Eventos y agenda", tour4_p: "En Eventos hay planes infantiles de tu zona cada semana. Agéndalos y organiza tu fin de semana en Agenda.",
    tour5_t: "Comunidad de padres", tour5_p: "Con Premium: navegación, reviews, alertas, boletos y una comunidad privada de padres de tu zona. Solo $2.99/mes.",
    comm_title: "Comunidad de padres",
    comm_locked_p: "Un espacio privado, solo para padres verificados de tu zona: comparte planes, pregunta por lugares y conecta con familias con hijos de las mismas edades.",
    comm_create_title: "Crea tu perfil familiar",
    comm_fam_name: "Nombre de tu familia (ej. \"Familia Mendoza\")",
    comm_zone: "Tu zona o vecindario",
    comm_kids: "Edades de tus hijos",
    comm_legal1: "Confirmo que soy mayor de 18 años y padre, madre o tutor legal.",
    comm_legal2: "Acepto los Términos y las Normas de la comunidad.",
    comm_legal3: "No publicaré información personal identificable de menores (nombres completos, escuela, fotos con rostro).",
    comm_see_terms: "Ver Términos y Normas",
    comm_join: "Crear perfil y unirme",
    comm_missing: "Completa tu nombre de familia y acepta las tres casillas",
    comm_welcome: "¡Bienvenido a la comunidad! 👋",
    comm_groups: "Grupos de tu zona",
    comm_ph: "Comparte un plan o pregunta a otros padres…",
    comm_post: "Publicar",
    comm_posted: "Publicado en tu comunidad ✅",
    comm_like: "Me gusta", comm_reply: "Responder",
    comm_note: "Comunidad en modo demo: tus posts solo se guardan en este dispositivo. En producción: comunidad real con moderación y reportes.",
    terms_title: "Términos y Normas de la comunidad",
    upgrade_hint: "Toca para desbloquear con Premium"
  },
  en: {
    ob_tag: "Every kid-friendly plan around you, on one map, sorted by age.",
    ob_p1: "Playgrounds, museums, play centers and more on a map",
    ob_p2: "Filtered by age: toddlers, kids and teens",
    ob_p3: "Kids' events in your area, every week",
    ob_use_loc: "Use my location", ob_search_city: "Search my city",
    go_premium: "Premium",
    nav_map: "Map", nav_list: "List", nav_events: "Events", nav_agenda: "Planner", nav_community: "Parents", nav_profile: "Profile",
    search_ph: "Where should we look?",
    age_toddler: "Toddlers 0–4", age_kid: "Kids 5–12", age_teen: "Teens 13+",
    cat_playground: "Playgrounds", cat_park: "Parks", cat_indoor: "Indoor play",
    cat_arcade: "Arcades", cat_museum: "Museums", cat_library: "Libraries",
    cat_zoo: "Zoos & aquariums", cat_theme: "Fun parks", cat_water: "Water & pools",
    cat_active: "Sports & action", cat_cinema: "Movies",
    loading: "Finding places nearby…",
    load_err: "We couldn't load places. Check your connection and try again.",
    retry: "Retry",
    no_results: "No results with these filters",
    no_results_p: "Some places (arcades, indoor play, zoos) tend to be farther away. Try a bigger radius.",
    widen_radius: "Widen search to 20 km",
    found_n: "places found",
    open_now: "Open", closed_now: "Closed", hours_na: "Hours not available",
    address: "Address", hours: "Hours", distance: "Distance", walk: "min walk",
    act_route: "Directions", act_call: "Call", act_web: "Website",
    act_reviews: "Reviews", act_schedule: "Schedule", act_share: "Share",
    addr_loading: "Getting address…", addr_na: "Address not available",
    phone_na: "No phone on record for this place",
    web_na: "No website on record for this place",
    rating_internal: "ratings (internal demo)",
    rating_google_soon: "★ Google connects in the Places phase",
    rate_label: "Rate it:",
    rated_thanks: "Thanks for rating! ⭐",
    photos_none: "📷 Place photos — connected via Google Places in the next phase",
    photos_more: "more",
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
    ev_bought: "🎟️ Tickets purchased (demo) — added to your planner",
    movies_title: "Now playing",
    movies_note: "Sample listings filtered by age. Production connects the theater's real showtimes.",
    movies_locked: "Showtimes and tickets with Premium",
    movie_bought: "🎟️ Showtime added to your planner (demo)",
    notif_title: "Notifications",
    notif_locked: "Get alerts about new kids' events in your area with Premium.",
    paywall_title: "Kidsplora Premium",
    paywall_price_after: "/month · cancel anytime",
    perk_route: "Turn-by-turn directions to every place",
    perk_contact: "Phone number and website for every place",
    perk_reviews: "Write reviews and see all photos",
    perk_agenda: "Family planner with reminders",
    perk_notif: "Alerts for kids' events in your area",
    perk_tickets: "Event and movie tickets in-app",
    perk_community: "Private community of local parents",
    paywall_cta: "Start Premium — $2.99/mo",
    paywall_demo: "This is a prototype: the button turns on a Premium demo mode without charging. Production connects Apple Pay / Google Pay.",
    premium_on: "✨ Premium activated! (demo mode)",
    profile_title: "Profile",
    p_premium_on: "Premium active", p_premium_on_sub: "Demo mode · $2.99/mo in production",
    p_premium_off: "Go Premium", p_premium_off_sub: "Directions, reviews, planner, community",
    p_lang: "Language", p_location: "Search location", p_radius: "Search radius",
    p_ages: "Your kids' ages", p_ages_sub: "We use this to sort results",
    p_family: "Family profile", p_family_none: "Not created — set it up in the Parents tab",
    p_tour: "Watch the tutorial again",
    p_manage: "Manage subscription", p_cancel: "Cancel Premium (demo)",
    p_about: "About this prototype",
    p_about_sub: "Kidsplora v0.2 · data from OpenStreetMap",
    p_feedback: "Send feedback",
    section_account: "Account", section_prefs: "Preferences", section_info: "Info",
    canceled: "Premium turned off (demo)",
    search_title: "Where do you want to look?",
    search_input_ph: "City, neighborhood or ZIP…",
    search_go: "Search", searching: "Searching…", search_none: "We couldn't find that place. Try another search.",
    use_my_loc: "📍 Use my current location",
    geo_denied: "We couldn't access your location. Search your city manually.",
    geo_finding: "Locating you…",
    near_you: "Near you", this_area: "This area",
    demo_badge: "DEMO",
    share_copied: "Link copied 📋",
    today: "Today", tomorrow: "Tomorrow",
    days: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
    ages_saved: "Preference saved",
    del_confirm: "Activity removed",
    tour_skip: "Skip tutorial", tour_next: "Next", tour_start: "Let's explore!",
    tour1_t: "Everything on one map", tour1_p: "Kidsplora shows playgrounds, museums, play centers, movies and more around you. The blue dot is always your real location.",
    tour2_t: "Filter by age", tour2_p: "Tap Toddlers, Kids or Teens and the categories above to see only what works for your children.",
    tour3_t: "Tap any place", tour3_p: "You'll see the address, hours, whether it's open, photos, parent ratings and how many minutes away it is.",
    tour4_t: "Events & planner", tour4_p: "The Events tab has kids' plans in your area every week. Schedule them and plan your weekend in the Planner.",
    tour5_t: "Parent community", tour5_p: "With Premium: directions, reviews, alerts, tickets and a private community of local parents. Just $2.99/mo.",
    comm_title: "Parent community",
    comm_locked_p: "A private space for verified local parents: share plans, ask about places, and connect with families with kids the same ages.",
    comm_create_title: "Create your family profile",
    comm_fam_name: "Your family name (e.g. \"The Mendoza Family\")",
    comm_zone: "Your area or neighborhood",
    comm_kids: "Your kids' ages",
    comm_legal1: "I confirm I am over 18 and a parent or legal guardian.",
    comm_legal2: "I accept the community Terms and Guidelines.",
    comm_legal3: "I will not post personally identifiable information about minors (full names, school, face photos).",
    comm_see_terms: "View Terms & Guidelines",
    comm_join: "Create profile & join",
    comm_missing: "Add your family name and accept all three checkboxes",
    comm_welcome: "Welcome to the community! 👋",
    comm_groups: "Groups in your area",
    comm_ph: "Share a plan or ask other parents…",
    comm_post: "Post",
    comm_posted: "Posted to your community ✅",
    comm_like: "Like", comm_reply: "Reply",
    comm_note: "Community in demo mode: your posts are stored only on this device. Production: real community with moderation and reporting.",
    terms_title: "Community Terms & Guidelines",
    upgrade_hint: "Tap to unlock with Premium"
  }
};

/* ============ storage / state ============ */
const store = {
  get(k, d) { try { const v = localStorage.getItem("km_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("km_" + k, JSON.stringify(v)); } catch (e) {} }
};
const state = {
  lang: store.get("lang", (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en"),
  premium: store.get("premium", false),
  center: store.get("center", null),
  myLoc: store.get("myLoc", null),
  radius: store.get("radius", 5000),
  ages: store.get("ages", []),
  kidAges: store.get("kidAges", []),
  cats: store.get("cats", []),
  places: [],
  agenda: store.get("agenda", []),
  myReviews: store.get("myReviews", {}),
  myRatings: store.get("myRatings", {}),
  reminded: store.get("reminded", []),
  notifSeen: store.get("notifSeen", false),
  famProfile: store.get("famProfile", null),
  myPosts: store.get("myPosts", []),
  likes: store.get("likes", {}),
  view: "map", loading: false, loadError: false
};
const t = (k) => (I18N[state.lang] && I18N[state.lang][k]) !== undefined ? I18N[state.lang][k] : (I18N.en[k] || k);

/* ============ categories & classification ============ */
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

const NAME_INDOOR = /gymboree|little gym|my gym|kids? ?(empire|zone|city|club|castle|island)|kidz|playland|play ?(place|town|land)|bounce|romp|chuck ?e|peque?mundo|recreo kids/i;
const NAME_ARCADE = /arcade|dave (&|and) buster|round ?(1|one)|game ?(zone|room|works)|gameworks|barcade/i;
const NAME_ACTIVE = /trampolin|urban air|sky ?zone|jump|ninja|laser ?tag|karting|go[- ]?kart|rock ?climb|escape ?room/i;
const NAME_ZOO = /zoo|aquarium|acuario|petting|safari|jungle island|wildlife/i;

function classify(tags) {
  if (!tags) return null;
  const l = tags.leisure, tm = tags.tourism, a = tags.amenity, name = tags.name || "";
  if (l === "playground") return "playground";
  if (l === "indoor_play") return "indoor";
  if (l === "amusement_arcade") return "arcade";
  if (l === "trampoline_park" || l === "ice_rink" || l === "bowling_alley" || l === "miniature_golf" || l === "climbing" || l === "escape_game") return "active";
  if (l === "sports_centre") return "active";
  if (l === "water_park") return "water";
  if (l === "swimming_pool") return tags.name ? "water" : null;
  if (l === "park" || l === "garden") return "park";
  if (tm === "museum") return "museum";
  if (tm === "zoo" || tm === "aquarium") return "zoo";
  if (tm === "theme_park") return "theme";
  if (a === "library") return "library";
  if (a === "cinema") return "cinema";
  /* name-based (businesses often missing the right OSM tag) */
  if (name) {
    if (NAME_ARCADE.test(name)) return "arcade";
    if (NAME_INDOOR.test(name)) return "indoor";
    if (NAME_ACTIVE.test(name)) return "active";
    if (tm === "attraction" && NAME_ZOO.test(name)) return "zoo";
  }
  return null;
}
function computeAges(cat, tags) {
  const name = (tags.name || "").toLowerCase();
  if (cat === "museum") {
    if (/(child|kids?|niñ|infantil|discovery|explor)/.test(name)) return ["toddler", "kid"];
    if (/(scien|ciencia|natural|planetar|espacio|space|frost|technolog|inventio)/.test(name)) return ["kid", "teen"];
    return ["teen"];
  }
  if (cat === "active" && /trampolin|jump|bounce|urban air|sky ?zone/i.test(name)) return ["kid", "teen"];
  return CATS[cat].ages;
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
function hashCode(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return Math.abs(h); }
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

/* ============ opening hours ============ */
const DAY_IDX = { Su: 0, Mo: 1, Tu: 2, We: 3, Th: 4, Fr: 5, Sa: 6 };
function parseDays(str) {
  const days = new Set();
  if (!str || !str.trim()) { for (let i = 0; i < 7; i++) days.add(i); return days; }
  str.split(",").forEach(part => {
    part = part.trim();
    const m = part.match(/^([A-Z][a-z])-([A-Z][a-z])$/);
    if (m && DAY_IDX[m[1]] !== undefined && DAY_IDX[m[2]] !== undefined) {
      let i = DAY_IDX[m[1]]; days.add(i);
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
      const hasTime = /\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}/.test(rule);
      const dayPart = rule.replace(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/g, "").replace(/off|closed/gi, "").replace(/,\s*$/, "");
      const days = parseDays(dayPart.replace(/[^A-Za-z,\- ]/g, ""));
      if (!days.has(day)) continue;
      if (off) { result = false; continue; }
      if (!hasTime) { result = true; continue; }
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
  map = L.map("map", { zoomControl: false }).setView([c.lat, c.lon], 14);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
}
/* The blue dot is ALWAYS the user's real GPS position — never the searched city */
function setUserMarker() {
  if (userMarker) { userMarker.remove(); userMarker = null; }
  if (!state.myLoc) return;
  userMarker = L.marker([state.myLoc.lat, state.myLoc.lon], {
    icon: L.divIcon({ html: '<div style="width:18px;height:18px;border-radius:50%;background:#4A7FE0;border:3.5px solid #fff;box-shadow:0 0 0 6px rgba(74,127,224,.25)"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }),
    zIndexOffset: 500, interactive: false
  }).addTo(map);
}

/* ============ Overpass ============ */
const OVERPASS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
let opIdx = 0;
function overpassQuery(radius) {
  const { lat, lon } = state.center;
  const around = `(around:${radius},${lat},${lon})`;
  return `[out:json][timeout:45];(
    nwr["leisure"~"^(playground|park|amusement_arcade|trampoline_park|water_park|ice_rink|bowling_alley|miniature_golf|indoor_play|climbing|escape_game)$"]${around};
    nwr["leisure"="swimming_pool"]["name"]["access"!~"^(private|no)$"]${around};
    nwr["leisure"="sports_centre"]["name"]${around};
    nwr["tourism"~"^(museum|zoo|aquarium|theme_park|attraction)$"]["name"]${around};
    nwr["amenity"~"^(library|cinema)$"]${around};
    nwr["name"~"gymboree|little gym|my gym|urban air|sky zone|chuck e|kids empire|kid city|kidz|playland|jump park|trampolin|bounce|arcade|dave & buster|round one|game zone|ninja park",i]["highway"!~"."]["waterway"!~"."]["railway"!~"."]${around};
  );out center 800;`;
}
async function loadPlaces() {
  if (!state.center) return;
  state.loading = true; state.loadError = false;
  renderCountPill(); renderList();
  try {
    const url = OVERPASS[opIdx % OVERPASS.length];
    const res = await fetch(url, { method: "POST", body: "data=" + encodeURIComponent(overpassQuery(state.radius)), headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    const seen = new Map(); const out = [];
    for (const el of (json.elements || [])) {
      const tags = el.tags || {};
      /* tourism=attraction only passes if it's zoo-like by name */
      if (tags.tourism === "attraction" && !NAME_ZOO.test(tags.name || "")) continue;
      /* sports_centre only if it has a kid-relevant sport or matches names */
      if (tags.leisure === "sports_centre" && !/climb|gymnas|swim|skat|trampolin|bowling|laser|multi/i.test((tags.sport || "") + " " + (tags.name || ""))) continue;
      const cat = classify(tags);
      if (!cat) continue;
      const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
      const lon = el.lon != null ? el.lon : (el.center && el.center.lon);
      if (lat == null) continue;
      if (!tags.name && cat !== "playground" && cat !== "park") continue;
      const p = { id: el.type + "/" + el.id, tags, cat, lat, lon,
        ages: computeAges(cat, tags),
        dist: haversine(state.center.lat, state.center.lon, lat, lon) };
      if (tags.name) {
        const key = cat + "|" + tags.name.toLowerCase();
        const prev = seen.get(key);
        if (prev && haversine(prev.lat, prev.lon, lat, lon) < 400) { if (el.type === "relation") { Object.assign(prev, p); } continue; }
        seen.set(key, p);
      }
      out.push(p);
    }
    out.sort((a, b) => a.dist - b.dist);
    state.places = out.slice(0, 450);
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
  return p.ages.some(a => state.kidAges.includes(a)) ? -1 : 0;
}
function filtered() {
  let arr = state.places.filter(p => {
    if (state.cats.length && !state.cats.includes(p.cat)) return false;
    if (state.ages.length && !p.ages.some(a => state.ages.includes(a))) return false;
    return true;
  });
  return arr.slice().sort((a, b) => (agesBoost(a) - agesBoost(b)) || (a.dist - b.dist));
}

/* ============ ratings (internal, demo-seeded) ============ */
function seededRating(p) {
  const h = hashCode(p.id);
  return { avg: (37 + (h % 12)) / 10, count: 12 + (h % 180) };
}
function ratingFor(p) {
  const s = seededRating(p);
  const mine = state.myRatings[p.id];
  if (!mine) return s;
  return { avg: (s.avg * s.count + mine) / (s.count + 1), count: s.count + 1, mine };
}
function starStr(avg) {
  const full = Math.round(avg);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
window.rateStar = (n) => {
  if (!currentPlace) return;
  state.myRatings[currentPlace.id] = n;
  store.set("myRatings", state.myRatings);
  toast(t("rated_thanks"));
  openSheet(currentPlace);
};

/* ============ rendering ============ */
function renderMarkers() {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  for (const p of filtered().slice(0, 250)) {
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
  pill.classList.remove("hidden");
  if (state.loading) { pill.textContent = t("loading"); return; }
  if (state.loadError) { pill.textContent = "⚠️ " + t("retry"); return; }
  pill.textContent = `${filtered().length} ${t("found_n")}`;
}
function ageBadges(p) {
  return p.ages.map(a => `<span class="badge age">${t("age_" + a).split(" ")[0]}</span>`).join("");
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
    box.innerHTML = `<div class="state-box"><div class="big">🧭</div><h3>${t("no_results")}</h3><p>${t("no_results_p")}</p><br><button class="btn small teal" onclick="widenRadius()">${t("widen_radius")}</button></div>`;
    return;
  }
  box.innerHTML = arr.slice(0, 120).map(p => {
    const cat = CATS[p.cat];
    const r = ratingFor(p);
    return `<div class="pcard" onclick="openSheetById('${p.id}')">
      <div class="cicon" style="background:${cat.color}22">${cat.emoji}</div>
      <div class="info">
        <h3>${esc(placeName(p))}</h3>
        <div class="meta"><span>${t("cat_" + p.cat)}</span><span style="color:var(--sun)">★</span><span>${r.avg.toFixed(1)}</span>${openBadge(p)}</div>
        <div class="meta">${ageBadges(p)}</div>
      </div>
      <div class="dist">${fmtDist(p.dist)}<small>🚶 ${walkMin(p.dist)} ${t("walk")}</small></div>
    </div>`;
  }).join("");
}
window.widenRadius = () => {
  state.radius = 20000; store.set("radius", 20000);
  document.getElementById("radius").value = "20000";
  loadPlaces();
};

/* ============ photos ============ */
const photoCache = {};
async function findPhotos(p) {
  if (photoCache[p.id]) return photoCache[p.id];
  const urls = [];
  const tg = p.tags;
  if (tg.image && /^https?:/.test(tg.image)) urls.push(tg.image);
  if (tg.wikimedia_commons && tg.wikimedia_commons.startsWith("File:"))
    urls.push("https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(tg.wikimedia_commons.slice(5)) + "?width=640");
  if (urls.length < 2 && tg.wikidata) {
    try {
      const r = await fetch(`https://www.wikidata.org/wiki/Special:EntityData/${tg.wikidata}.json`);
      const j = await r.json();
      const ent = j.entities && j.entities[tg.wikidata];
      const img = ent && ent.claims && ent.claims.P18 && ent.claims.P18[0].mainsnak.datavalue.value;
      if (img) urls.push("https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(img) + "?width=640");
    } catch (e) {}
  }
  photoCache[p.id] = urls;
  return urls;
}
async function renderPhotos(p) {
  const box = document.getElementById("sheet-photos");
  if (!box) return;
  const urls = await findPhotos(p);
  if (!currentPlace || currentPlace.id !== p.id) return;
  if (!urls.length) { box.innerHTML = `<div class="photo-empty">${t("photos_none")}</div>`; return; }
  const shown = urls.slice(0, 2);
  const extra = urls.length - shown.length;
  box.innerHTML = `<div class="photos">` +
    shown.map(u => `<img class="ph" src="${esc(u)}" alt="" onerror="this.style.display='none'">`).join("") +
    (extra > 0 || !state.premium ? `<button class="ph-more" onclick="morePhotos()">${state.premium ? "+" + Math.max(extra, 0) : "🔒"}<span>${t("photos_more")}</span></button>` : "") +
    `</div>`;
}
window.morePhotos = () => { if (!state.premium) openPaywall(); else toast(t("photos_none")); };

/* ============ movies (demo listings) ============ */
const MOVIES = [
  { es: "La Isla de los Dinos", en: "Dino Island", r: "G", dur: 92 },
  { es: "Aventura en el Bosque", en: "Forest Adventure", r: "G", dur: 88 },
  { es: "Robots al Rescate", en: "Robot Rescue", r: "PG", dur: 101 },
  { es: "El Torneo Galáctico", en: "The Galactic Tournament", r: "PG", dur: 108 },
  { es: "Héroes de Secundaria", en: "High School Heroes", r: "PG-13", dur: 115 }
];
const R_AGES = { "G": ["toddler", "kid", "teen"], "PG": ["kid", "teen"], "PG-13": ["teen"] };
function moviesSection(p) {
  if (p.cat !== "cinema") return "";
  const active = state.ages;
  const list = MOVIES.filter(m => !active.length || R_AGES[m.r].some(a => active.includes(a)));
  const times = ["11:30", "14:15", "17:00"];
  return `<div style="margin-top:14px">
    <h3 style="font-size:16px;margin-bottom:2px">🎬 ${t("movies_title")} <span class="badge demo">${t("demo_badge")}</span></h3>
    <p style="font-size:11.5px;color:var(--ink2);font-weight:600;margin:2px 0 6px">${t("movies_note")}</p>
    ${list.map((m, i) => `<div class="movie">
      <div class="mt">${esc(state.lang === "es" ? m.es : m.en)}<small>${m.dur} min</small>
        ${state.premium ? `<div class="showtimes">${times.map(tm => `<button onclick="buyMovie(${i},'${tm}')">${tm} 🎟️</button>`).join("")}</div>` : ""}
      </div>
      <span class="badge mpaa">${m.r}</span>
    </div>`).join("")}
    ${!state.premium ? `<button class="btn ghost small" style="width:100%;margin-top:10px" onclick="openPaywall()">🔒 ${t("movies_locked")}</button>` : ""}
  </div>`;
}
window.buyMovie = (i, tm) => requirePremium(() => {
  const m = MOVIES[i];
  const d = new Date().toISOString().slice(0, 10);
  state.agenda.push({ id: Date.now(), title: "🎬 " + (state.lang === "es" ? m.es : m.en) + (currentPlace ? " · " + placeName(currentPlace) : ""), date: d, time: tm });
  state.agenda.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  store.set("agenda", state.agenda);
  toast(t("movie_bought"));
  renderAgenda();
});

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
  const r = ratingFor(p);
  const mine = state.myRatings[p.id] || 0;
  const lock = () => state.premium ? "" : `<span class="lockic">🔒</span>`;
  document.getElementById("sheet-body").innerHTML = `
    <div class="sheet-head">
      <div class="cicon" style="background:${cat.color}22">${cat.emoji}</div>
      <div>
        <h2>${esc(placeName(p))}</h2>
        <div class="meta" style="margin-top:4px"><span>${t("cat_" + p.cat)}</span>${openBadge(p)}</div>
        <div class="meta" style="margin-top:4px">${ageBadges(p)}</div>
      </div>
    </div>
    <div class="rating-row">
      <span class="avg">${r.avg.toFixed(1)}</span>
      <span class="stars">${starStr(r.avg)}</span>
      <small>${r.count} ${t("rating_internal")}</small>
    </div>
    <small style="color:var(--lock);font-weight:700;font-size:11px">${t("rating_google_soon")}</small>
    <div class="rate-me"><span>${t("rate_label")}</span>
      ${[1,2,3,4,5].map(n => `<button class="${mine >= n ? "on" : ""}" onclick="rateStar(${n})">⭐</button>`).join("")}
    </div>
    <div id="sheet-photos"></div>
    <div class="inforow"><span class="ic">📍</span><div><b>${t("address")}</b><div class="val" id="sheet-addr">${addr ? esc(addr) : t("addr_loading")}</div></div></div>
    <div class="inforow"><span class="ic">🕐</span><div><b>${t("hours")}</b><div class="val">${esc(prettyHours(p.tags.opening_hours))}</div></div></div>
    <div class="inforow" style="border-bottom:none"><span class="ic">🚶</span><div><b>${t("distance")}</b><div class="val">${fmtDist(p.dist)} · ${walkMin(p.dist)} ${t("walk")}</div></div></div>
    <div class="actions-grid">
      <button class="act ${state.premium ? "" : "locked"}" onclick="actRoute()">${lock()}<span class="ico">🧭</span>${t("act_route")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actCall()">${lock()}<span class="ico">📞</span>${t("act_call")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actWeb()">${lock()}<span class="ico">🌐</span>${t("act_web")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actReviews()">${lock()}<span class="ico">💬</span>${t("act_reviews")}</button>
      <button class="act ${state.premium ? "" : "locked"}" onclick="actSchedule()">${lock()}<span class="ico">📅</span>${t("act_schedule")}</button>
      <button class="act" onclick="actShare()"><span class="ico">📤</span>${t("act_share")}</button>
    </div>
    ${moviesSection(p)}
    <div id="sheet-reviews"></div>`;
  document.getElementById("overlay").classList.add("show");
  document.getElementById("sheet").classList.add("show");
  if (!addr) reverseGeocode(p);
  renderPhotos(p);
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

/* ============ premium gating & actions ============ */
function requirePremium(fn) { if (state.premium) fn(); else openPaywall(); }
window.requirePremium = requirePremium;
window.actRoute = () => requirePremium(() => {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${currentPlace.lat},${currentPlace.lon}`, "_blank");
});
window.actCall = () => requirePremium(() => {
  const ph = currentPlace.tags.phone || currentPlace.tags["contact:phone"];
  if (ph) location.href = "tel:" + ph.replace(/[^+\d]/g, ""); else toast(t("phone_na"));
});
window.actWeb = () => requirePremium(() => {
  let w = currentPlace.tags.website || currentPlace.tags["contact:website"];
  if (w) { if (!/^https?:/.test(w)) w = "https://" + w; window.open(w, "_blank"); } else toast(t("web_na"));
});
window.actShare = async () => {
  const p = currentPlace;
  const url = `https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=18/${p.lat}/${p.lon}`;
  if (navigator.share) { try { await navigator.share({ title: placeName(p) + " · Kidsplora", url }); } catch (e) {} }
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
window.actReviews = () => requirePremium(() => {
  const p = currentPlace;
  const box = document.getElementById("sheet-reviews");
  const seeds = SEED_REVIEWS[state.lang];
  const h = hashCode(p.id);
  const demo = [seeds[h % 3], seeds[(h + 1) % 3]];
  const mine = state.myReviews[p.id] ? [state.myReviews[p.id]] : [];
  const all = [...mine, ...demo];
  box.innerHTML = `<h3 style="margin:14px 0 10px;font-size:16px">💬 ${t("reviews_title")} <span class="badge demo">${t("demo_badge")}</span></h3>` +
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
  state.myRatings[currentPlace.id] = pickedStars;
  store.set("myReviews", state.myReviews); store.set("myRatings", state.myRatings);
  hideModal("review-modal");
  toast(t("review_saved"));
  window.actReviews();
};

/* ============ schedule / agenda ============ */
window.actSchedule = () => requirePremium(() => openSchedModal(placeName(currentPlace)));
function openSchedModal(title) {
  const body = document.getElementById("sched-body");
  const iso = new Date().toISOString().slice(0, 10);
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

/* ============ events (demo) ============ */
function nextDow(dow, weeks) {
  const d = new Date();
  const diff = (dow - d.getDay() + 7) % 7 || 7;
  d.setDate(d.getDate() + diff + (weeks || 0) * 7);
  return d;
}
function demoEvents() {
  const es = state.lang === "es";
  const mk = (date, tEs, tEn, vEs, vEn, ages, price, cat) => ({
    id: tEn.replace(/\W/g, "").slice(0, 18),
    date, title: es ? tEs : tEn, venue: es ? vEs : vEn, ages, price, cat
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
    evs.map((ev, idx) => {
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
          ${ev.price ? `<button class="btn small" onclick="evTickets(${idx})">${state.premium ? "" : "🔒 "}🎟️ ${t("ev_tickets")}</button>` : ""}
        </div>
      </div>`;
    }).join("");
}
window.evRemind = (id) => requirePremium(() => {
  if (!state.reminded.includes(id)) { state.reminded.push(id); store.set("reminded", state.reminded); }
  toast(t("ev_reminded"));
});
/* Buying tickets automatically adds the event to the family planner */
window.evTickets = (idx) => requirePremium(() => {
  const ev = demoEvents()[idx];
  if (!ev) return;
  state.agenda.push({ id: Date.now(), title: "🎟️ " + ev.title + " · " + ev.venue, date: ev.date.toISOString().slice(0, 10), time: "16:00" });
  state.agenda.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  store.set("agenda", state.agenda);
  toast(t("ev_bought"));
  renderAgenda();
});

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
      <div class="perk"><span class="pi">💬</span>${t("perk_community")}</div>
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
  renderAgenda(); renderEvents(); renderProfile(); renderList(); renderCommunity();
}

/* ============ community (premium) ============ */
function demoGroups() {
  const zone = (state.famProfile && state.famProfile.zone) || (state.center && state.center.label) || "Mi zona";
  const es = state.lang === "es";
  return [
    (es ? "Padres de " : "Parents of ") + zone,
    es ? "Toddlers y bebés 👶" : "Toddlers & babies 👶",
    es ? "Fans de parques 🌳" : "Park lovers 🌳",
    es ? "Planes de fin de semana 🎉" : "Weekend plans 🎉",
    es ? "Papás de teens 🎮" : "Parents of teens 🎮"
  ];
}
function demoPosts() {
  const es = state.lang === "es";
  return [
    { a: "👩", n: es ? "Familia Rivera" : "The Rivera Family", time: es ? "hace 2 h" : "2h ago", txt: es ? "¿Alguien ha ido al nuevo salón de trampolines? ¿Vale la pena para un niño de 5 años?" : "Has anyone tried the new trampoline park? Worth it for a 5-year-old?", likes: 4 },
    { a: "👨", n: es ? "Familia Chen" : "The Chen Family", time: es ? "ayer" : "yesterday", txt: es ? "Este sábado hay cuentacuentos gratis en la biblioteca a las 10am. ¡Vamos con los peques, únanse!" : "Free storytime at the library this Saturday 10am. We're going with the little ones, join us!", likes: 11 }
  ];
}
function renderCommunity() {
  const box = document.getElementById("community-scroll");
  if (!box) return;
  if (!state.premium) {
    box.innerHTML = `<div class="state-box"><div class="big">💬</div><h3>${t("comm_title")}</h3><p>${t("comm_locked_p")}</p><br><button class="btn" onclick="openPaywall()">✨ ${t("paywall_cta")}</button></div>`;
    return;
  }
  if (!state.famProfile) {
    const zone = (state.center && state.center.label) || "";
    box.innerHTML = `<h2 style="margin:6px 2px 12px">💬 ${t("comm_create_title")}</h2>
      <label class="flabel">${t("comm_fam_name")}</label>
      <input class="fin" id="fam-name" maxlength="40">
      <label class="flabel">${t("comm_zone")}</label>
      <input class="fin" id="fam-zone" value="${esc(zone)}" maxlength="40">
      <label class="flabel">${t("comm_kids")}</label>
      <div class="qchips" id="fam-ages">${AGE_KEYS.map(a => `<button class="fchip age ${state.kidAges.includes(a) ? "on" : ""}" data-fa="${a}">${t("age_" + a)}</button>`).join("")}</div>
      <div class="legal-check"><input type="checkbox" id="lg1"><span>${t("comm_legal1")}</span></div>
      <div class="legal-check"><input type="checkbox" id="lg2"><span>${t("comm_legal2")} <a href="#" onclick="openTerms();return false" style="color:var(--teal)">${t("comm_see_terms")}</a></span></div>
      <div class="legal-check"><input type="checkbox" id="lg3"><span>${t("comm_legal3")}</span></div>
      <button class="btn" style="width:100%;margin-top:12px" onclick="joinCommunity()">💬 ${t("comm_join")}</button>
      <p class="finefine">${t("comm_note")}</p>`;
    const fa = document.getElementById("fam-ages");
    fa.addEventListener("click", e => {
      const b = e.target.closest("[data-fa]"); if (!b) return;
      b.classList.toggle("on");
    });
    return;
  }
  const posts = [...state.myPosts, ...demoPosts()];
  box.innerHTML = `<h2 style="margin:6px 2px 4px">💬 ${t("comm_title")}</h2>
    <p style="font-size:12px;color:var(--ink2);font-weight:600;margin:0 2px 12px">${t("comm_note")}</p>
    <div class="sectitle">${t("comm_groups")}</div>
    <div class="groups-row">${demoGroups().map((g, i) => `<span class="gchip ${i === 0 ? "on" : ""}">${esc(g)}</span>`).join("")}</div>
    <div class="composer">
      <textarea id="post-text" placeholder="${t("comm_ph")}" maxlength="400"></textarea>
      <div style="display:flex;justify-content:flex-end"><button class="btn small teal" onclick="publishPost()">${t("comm_post")}</button></div>
    </div>` +
    posts.map((p, i) => {
      const liked = state.likes[p.n + i];
      return `<div class="post">
        <div class="ph-head"><span class="avatar">${p.a}</span><div><div class="pname">${esc(p.n)} ${p.mine ? "" : `<span class="badge demo">${t("demo_badge")}</span>`}</div><div class="ptime">${esc(p.time)}</div></div></div>
        <p>${esc(p.txt)}</p>
        <div class="pacts">
          <button onclick="likePost('${esc(p.n)}${i}', this)">${liked ? "❤️" : "🤍"} ${(p.likes || 0) + (liked ? 1 : 0)} ${t("comm_like")}</button>
          <button onclick="toastReply()">💬 ${t("comm_reply")}</button>
        </div>
      </div>`;
    }).join("");
}
window.joinCommunity = () => {
  const name = document.getElementById("fam-name").value.trim();
  const ok = document.getElementById("lg1").checked && document.getElementById("lg2").checked && document.getElementById("lg3").checked;
  if (!name || !ok) { toast(t("comm_missing")); return; }
  const ages = [...document.querySelectorAll("#fam-ages .on")].map(b => b.dataset.fa);
  state.famProfile = { name, zone: document.getElementById("fam-zone").value.trim(), ages, accepted: new Date().toISOString() };
  store.set("famProfile", state.famProfile);
  toast(t("comm_welcome"));
  renderCommunity(); renderProfile();
};
window.publishPost = () => {
  const txt = document.getElementById("post-text").value.trim();
  if (!txt) return;
  state.myPosts.unshift({ a: "🏠", n: state.famProfile.name, time: state.lang === "es" ? "ahora" : "now", txt, likes: 0, mine: true });
  store.set("myPosts", state.myPosts);
  toast(t("comm_posted"));
  renderCommunity();
};
window.likePost = (key) => {
  state.likes[key] = !state.likes[key];
  store.set("likes", state.likes);
  renderCommunity();
};
window.toastReply = () => toast(state.lang === "es" ? "Respuestas disponibles en la versión completa" : "Replies available in the full version");
window.openTerms = () => {
  const es = state.lang === "es";
  document.getElementById("terms-body").innerHTML = `<button class="mclose" data-close="terms-modal">✕</button>
    <h2 style="margin:16px 0 10px;text-align:center">📜 ${t("terms_title")}</h2>
    <div class="terms-text">${es ? `
      <h4>1. Quién puede participar</h4><p>La comunidad es exclusiva para personas mayores de 18 años que sean padres, madres o tutores legales de menores. Al crear un perfil declaras que cumples estos requisitos.</p>
      <h4>2. Protección de menores</h4><p>Está prohibido publicar información personal identificable de menores: nombres completos, escuela, horarios habituales o fotografías donde se reconozca su rostro. El contenido que incumpla esta norma será eliminado.</p>
      <h4>3. Conducta</h4><p>Trata a los demás con respeto. No se permite acoso, discriminación, lenguaje ofensivo, contenido para adultos, ni spam o promoción comercial sin autorización.</p>
      <h4>4. Contenido</h4><p>Eres responsable de lo que publicas. Kidsplora puede eliminar contenido o suspender cuentas que incumplan estas normas. Reporta cualquier conducta inapropiada desde el propio post.</p>
      <h4>5. Privacidad y seguridad</h4><p>No compartas datos sensibles. Kidsplora no verifica la identidad de cada miembro: usa tu criterio al coordinar encuentros y hazlo siempre en lugares públicos.</p>
      <h4>6. Aviso</h4><p>Este es un prototipo de demostración; los términos definitivos serán redactados y revisados por asesoría legal antes del lanzamiento comercial.</p>`
    : `
      <h4>1. Who can join</h4><p>The community is exclusively for people over 18 who are parents or legal guardians of minors. By creating a profile you confirm you meet these requirements.</p>
      <h4>2. Protecting minors</h4><p>Posting personally identifiable information about minors is prohibited: full names, school, regular schedules, or photos where their face is recognizable. Content breaking this rule will be removed.</p>
      <h4>3. Conduct</h4><p>Treat others with respect. No harassment, discrimination, offensive language, adult content, spam, or unauthorized commercial promotion.</p>
      <h4>4. Content</h4><p>You are responsible for what you post. Kidsplora may remove content or suspend accounts that break these rules. Report inappropriate behavior from any post.</p>
      <h4>5. Privacy & safety</h4><p>Don't share sensitive data. Kidsplora does not verify each member's identity: use judgment when arranging meetups and always meet in public places.</p>
      <h4>6. Notice</h4><p>This is a demonstration prototype; final terms will be drafted and reviewed by legal counsel before commercial launch.</p>`}
    </div>`;
  showModal("terms-modal");
};

/* ============ tutorial (walkthrough) ============ */
const TOUR = [
  { e: "🗺️", tt: "tour1_t", tp: "tour1_p" },
  { e: "🎯", tt: "tour2_t", tp: "tour2_p" },
  { e: "🛝", tt: "tour3_t", tp: "tour3_p" },
  { e: "🎪", tt: "tour4_t", tp: "tour4_p" },
  { e: "💬", tt: "tour5_t", tp: "tour5_p" }
];
let tourStep = 0;
function showTour() {
  tourStep = 0;
  document.getElementById("tour").classList.remove("hidden");
  renderTourStep();
}
window.showTour = showTour;
function renderTourStep() {
  const s = TOUR[tourStep];
  const last = tourStep === TOUR.length - 1;
  document.getElementById("tour-card").innerHTML = `
    <div class="temoji">${s.e}</div>
    <h3>${t(s.tt)}</h3>
    <p>${t(s.tp)}</p>
    <div class="tour-dots">${TOUR.map((x, i) => `<span class="${i === tourStep ? "on" : ""}"></span>`).join("")}</div>
    <button class="btn" style="width:100%" onclick="tourNext()">${last ? t("tour_start") : t("tour_next")}</button>
    ${!last ? `<button class="tour-skip" onclick="endTour()">${t("tour_skip")}</button>` : ""}`;
}
window.tourNext = () => {
  if (tourStep >= TOUR.length - 1) { window.endTour(); return; }
  tourStep++; renderTourStep();
};
window.endTour = () => {
  document.getElementById("tour").classList.add("hidden");
  store.set("tourSeen", true);
};

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
    <div class="prow"><span class="ico">🏠</span><div>${t("p_family")}<span class="sub">${state.famProfile ? esc(state.famProfile.name) + " · " + esc(state.famProfile.zone || "") : t("p_family_none")}</span></div></div>
    <div class="sectitle">${t("section_prefs")}</div>
    <div class="prow" onclick="toggleLang()"><span class="ico">🌐</span><div>${t("p_lang")}</div><span class="end">${state.lang === "es" ? "Español" : "English"} ›</span></div>
    <div class="prow" onclick="openSearchModal()"><span class="ico">📍</span><div>${t("p_location")}</div><span class="end">${esc(locLabel)} ›</span></div>
    <div class="prow"><span class="ico">👶</span><div>${t("p_ages")}<span class="sub">${t("p_ages_sub")}</span>
      <div class="qchips" style="margin-top:8px">${AGE_KEYS.map(a => `<button class="fchip age ${state.kidAges.includes(a) ? "on" : ""}" onclick="toggleKidAge('${a}');event.stopPropagation()">${t("age_" + a)}</button>`).join("")}</div>
    </div></div>
    <div class="prow" onclick="showTour()"><span class="ico">🎓</span><div>${t("p_tour")}</div><span class="end">›</span></div>
    <div class="sectitle">${t("section_info")}</div>
    <div class="prow"><span class="ico">ℹ️</span><div>${t("p_about")}<span class="sub">${t("p_about_sub")}</span></div></div>
    <div class="prow" onclick="location.href='mailto:sergiomdzmdz@gmail.com?subject=Kidsplora feedback'"><span class="ico">💬</span><div>${t("p_feedback")}</div><span class="end">›</span></div>`;
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

/* ============ filter chips ============ */
function renderFilterChips() {
  document.getElementById("age-chips").innerHTML = AGE_KEYS.map(a =>
    `<button class="fchip age ${state.ages.includes(a) ? "on" : ""}" data-age="${a}">${t("age_" + a)}</button>`).join("");
  document.getElementById("cat-chips").innerHTML = Object.keys(CATS).map(c =>
    `<button class="fchip ${state.cats.includes(c) ? "on" : ""}" data-cat="${c}">${CATS[c].emoji} ${t("cat_" + c)}</button>`).join("");
}
document.getElementById("age-chips").addEventListener("click", e => {
  const b = e.target.closest("[data-age]"); if (!b) return;
  const i = state.ages.indexOf(b.dataset.age);
  if (i >= 0) state.ages.splice(i, 1); else state.ages.push(b.dataset.age);
  store.set("ages", state.ages);
  renderFilterChips(); renderMarkers(); renderList(); renderCountPill();
});
document.getElementById("cat-chips").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  const i = state.cats.indexOf(b.dataset.cat);
  if (i >= 0) state.cats.splice(i, 1); else state.cats.push(b.dataset.cat);
  store.set("cats", state.cats);
  renderFilterChips(); renderMarkers(); renderList(); renderCountPill();
});

/* ============ location & search ============ */
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
    box.innerHTML = arr.map(r => `<button onclick="pickResult(${r.lat},${r.lon},'${esc(r.display_name.split(",").slice(0, 2).join(",")).replace(/'/g, "")}')">📍 <span>${esc(r.display_name.split(",").slice(0, 3).join(","))}</span></button>`).join("");
  } catch (e) {
    box.innerHTML = `<p style="text-align:center;font-weight:700;color:var(--ink2);padding:14px">${t("load_err")}</p>`;
  }
};
window.pickResult = (lat, lon, label) => {
  setCenter(+lat, +lon, label);
  hideModal("search-modal");
};
/* setCenter changes ONLY the search area — never the user's blue dot */
function setCenter(lat, lon, label) {
  state.center = { lat, lon, label };
  store.set("center", state.center);
  document.getElementById("loc-label").textContent = label || t("near_you");
  hideOnboard();
  if (map) map.setView([lat, lon], 14);
  loadPlaces(); renderProfile();
  maybeTour();
}
function geolocate() {
  if (!navigator.geolocation) { openSearchModal(); return; }
  toast(t("geo_finding"));
  navigator.geolocation.getCurrentPosition(
    pos => {
      state.myLoc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
      store.set("myLoc", state.myLoc);
      setUserMarker();
      setCenter(state.myLoc.lat, state.myLoc.lon, t("near_you"));
    },
    () => { toast(t("geo_denied")); openSearchModal(); },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
  /* keep the blue dot fresh as the user physically moves */
  if (!geolocate._watch) {
    try {
      geolocate._watch = navigator.geolocation.watchPosition(pos => {
        state.myLoc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        store.set("myLoc", state.myLoc);
        setUserMarker();
      }, () => {}, { enableHighAccuracy: false, maximumAge: 120000 });
    } catch (e) {}
  }
}
window.geolocate = geolocate;
function maybeTour() {
  if (!store.get("tourSeen", false)) showTour();
}

/* ============ modals / nav / init ============ */
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
  renderMarkers(); renderList(); renderCountPill(); renderEvents(); renderAgenda(); renderCommunity(); renderProfile(); refreshPremiumUI();
}
function hideOnboard() {
  document.getElementById("onboard").classList.add("hidden");
  store.set("onboarded", true);
  if (map) setTimeout(() => map.invalidateSize(), 60);
}

document.getElementById("btn-lang").addEventListener("click", window.toggleLang);
document.getElementById("ob-lang").addEventListener("click", window.toggleLang);
document.getElementById("btn-premium").addEventListener("click", () => { if (!state.premium) openPaywall(); });
document.getElementById("btn-notif").addEventListener("click", openNotifs);
document.getElementById("map-search").addEventListener("click", openSearchModal);
document.getElementById("fab-locate").addEventListener("click", () => {
  if (state.myLoc && map) { map.setView([state.myLoc.lat, state.myLoc.lon], 14); }
  geolocate();
});
document.getElementById("fab-reload").addEventListener("click", () => {
  if (!map || !state.center) return;
  const c = map.getCenter();
  setCenter(c.lat, c.lng, t("this_area"));
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

initMap();
applyStatic();
renderAll();
document.getElementById("radius").value = String(state.radius);
if (store.get("onboarded", false) && state.center) {
  hideOnboard();
  setUserMarker();
  loadPlaces();
  maybeTour();
}
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}

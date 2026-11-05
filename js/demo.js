/* =========================================================
   DEMO DE ORBIBOT · Simulación académica
   Conversación predefinida, escrita por el equipo.
   No usa IA en vivo ni consulta internet.
   Para cambiar textos de la demo, editá los bloques de abajo.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Contexto que el bot "va entendiendo" ---------- */
  var CTX_FIELDS = [
    ["negocio", "Negocio"],
    ["ubicacion", "Ubicación"],
    ["diferencial", "Diferencial"],
    ["publico", "Público"],
    ["objetivo", "Objetivo"],
    ["canal", "Canal"],
    ["tono", "Tono"],
    ["limites", "Límites"],
    ["recursos", "Recursos"]
  ];

  var OBJETIVOS = {
    conocer: { label: "Darme a conocer", corto: "Darse a conocer (alcance)" },
    consultas: { label: "Generar consultas o ventas", corto: "Generar consultas" },
    comunidad: { label: "Crear comunidad", corto: "Crear comunidad" }
  };

  /* ---------- Ideas ilustrativas por objetivo (no son tendencias verificadas) ---------- */
  var IDEAS = {
    conocer: [
      {
        tipo: "habitual",
        titulo: "Un día en Factor 3 en 30 segundos",
        resumen: "Recorrido rápido que muestra el ambiente y el acompañamiento de los profes.",
        objetivo: "Que más personas de la zona descubran el gimnasio y cómo se entrena ahí.",
        publico: "A quien todavía no conoce Factor 3 le muestra que hay lugar para distintas edades y niveles.",
        guion: {
          inicio: "La puerta se abre. Texto en pantalla: “¿Cómo es entrenar en Factor 3?”",
          desarrollo: "Clips de 3 a 5 segundos: recepción, un profe corrigiendo técnica, alguien entrenando libre, personas de distintas edades.",
          cierre: "Texto final: “Personalizado o libre, siempre acompañado.”"
        },
        pasos: [
          "Grabá clips cortos durante la semana, en los ratos libres.",
          "Pedí autorización a cada persona que aparezca.",
          "Unilos en la app de TikTok o Instagram y sumá texto en pantalla."
        ],
        texto: "Así se vive un día en Factor 3 💪 Entrenamiento personalizado y libre, con profes que te acompañan. 📍 Funes",
        cta: "Seguinos para ver más del día a día.",
        indicador: "Alcance y visualizaciones; visitas al perfil.",
        express: "Versión express: un solo plano secuencia caminando de la puerta a la sala, con el profe saludando a cámara al final. Se graba en una toma."
      },
      {
        tipo: "habitual",
        titulo: "Mitos del gimnasio que escuchamos en recepción",
        resumen: "Un profe responde mitos comunes con humor y una explicación simple.",
        objetivo: "Ganar visibilidad con contenido útil y fácil de compartir.",
        publico: "Habla de las dudas de quien empieza. El humor apunta al mito, nunca a la persona.",
        guion: {
          inicio: "Texto en pantalla: “Mito: si voy al gimnasio, tengo que saber todo de entrada.”",
          desarrollo: "El profe hace un gesto divertido de “¡nooo!” y explica en dos frases cómo acompañan a quien empieza.",
          cierre: "“¿Qué otro mito querés que respondamos?”"
        },
        pasos: [
          "Anotá tres mitos que escuchen seguido en recepción.",
          "Grabá al profe respondiendo los tres en un mismo bloque de 15 minutos.",
          "Publicá uno por video, en días distintos."
        ],
        texto: "Mito desmentido ✅ Nadie llega sabiendo todo: para eso estamos los profes.",
        cta: "Dejanos en comentarios el próximo mito.",
        indicador: "Visualizaciones y comentarios.",
        express: "Versión express: solo texto en pantalla sobre un clip del profe negando con la cabeza y sonriendo. Sin audio hablado."
      },
      {
        tipo: "original",
        titulo: "Un ejercicio, tres versiones",
        resumen: "El mismo ejercicio adaptado para alguien que empieza, un deportista y un jubilado.",
        objetivo: "Mostrar el diferencial de personalización de forma visual.",
        publico: "Atrae a jóvenes y deja claro que el gimnasio también es para otras generaciones.",
        guion: {
          inicio: "Texto: “Mismo ejercicio. Tres personas distintas.”",
          desarrollo: "Tres tomas de una sentadilla adaptada a cada perfil. El profe dice en una frase por qué cambia.",
          cierre: "“Tu entrenamiento se adapta a vos.”"
        },
        pasos: [
          "Elegí un ejercicio simple y tres personas que acepten participar.",
          "Grabá cada versión en un día distinto si hace falta.",
          "Uní las tres tomas una al lado de la otra o en secuencia."
        ],
        texto: "En Factor 3 no hay una sola forma de entrenar 🙌 Adaptamos cada ejercicio a quien lo hace.",
        cta: "Compartilo con alguien que entrena distinto a vos.",
        indicador: "Compartidos y alcance.",
        express: "Versión express: tres fotos con la misma pose adaptada y un texto por foto. Se arma como carrusel en Instagram."
      }
    ],
    consultas: [
      {
        tipo: "original",
        titulo: "Tu primera vez en el gimnasio",
        resumen: "Alguien llega sin saber por dónde empezar y un profe lo recibe.",
        objetivo: "Generar consultas de personas que quieren empezar a entrenar.",
        publico: "Trabaja una barrera frecuente: la inseguridad del primer día.",
        guion: {
          inicio: "Una persona entra y mira alrededor. Texto: “Primera vez en el gym y no sabés por dónde empezar.”",
          desarrollo: "Un profe la recibe, le pregunta qué busca y le explica con palabras simples cómo adaptan la rutina.",
          cierre: "“¿Querés empezar y no sabés cómo? Consultanos.”"
        },
        pasos: [
          "Elegí a alguien del equipo o un alumno que lo autorice para actuar.",
          "Grabá tres escenas cortas, en días distintos si hace falta.",
          "Sumá texto en pantalla para que se entienda sin sonido."
        ],
        texto: "Nadie nace sabiendo entrenar 🙌 En Factor 3 te acompañamos desde el primer día y armamos tu rutina según lo que necesitás.",
        cta: "Escribinos por mensaje directo.",
        indicador: "Consultas por mensaje sobre cómo empezar; visitas al perfil.",
        express: "Versión express: el profe mira a cámara y dice: “¿Primera vez? Tranqui, te explicamos todo.” Corte a la sala. Texto: “Consultanos.”"
      },
      {
        tipo: "habitual",
        titulo: "Preguntas que nadie se anima a hacer",
        resumen: "Serie de preguntas y respuestas cortas para quien duda en arrancar.",
        objetivo: "Despejar dudas en la etapa de evaluación y facilitar la consulta.",
        publico: "Valida las dudas de los principiantes en lugar de ridiculizarlas.",
        guion: {
          inicio: "Pregunta en pantalla: “¿Puedo ir si nunca entrené?”",
          desarrollo: "El profe responde con claridad y calidez en menos de 20 segundos.",
          cierre: "“Si tenés otra duda, preguntanos sin vergüenza.”"
        },
        pasos: [
          "Juntá las preguntas que más reciben en recepción.",
          "Grabá varias respuestas el mismo día.",
          "Publicá una por semana como serie."
        ],
        texto: "No hay preguntas tontas 💬 Esta es una de las que más nos hacen.",
        cta: "Mandanos tu pregunta por mensaje.",
        indicador: "Mensajes y consultas; guardados.",
        express: "Versión express: historia de Instagram con la pregunta y la respuesta en texto, más un sticker para que te escriban."
      },
      {
        tipo: "original",
        titulo: "Así armamos tu rutina",
        resumen: "El proceso paso a paso desde que alguien llega hasta que entrena.",
        objetivo: "Que la persona sepa qué esperar y se anime a consultar.",
        publico: "Reduce la incertidumbre de quien compara opciones antes de decidir.",
        guion: {
          inicio: "“¿Qué pasa cuando llegás a Factor 3?”",
          desarrollo: "Cuatro momentos: charla sobre objetivos, prueba de movimientos, rutina adaptada y seguimiento del profe.",
          cierre: "“Consultanos cómo empezar.”"
        },
        pasos: [
          "Grabá cada momento por separado, en distintos días.",
          "Numerá los pasos en pantalla (1, 2, 3, 4).",
          "Usá la misma música de fondo en todo el video."
        ],
        texto: "Tu rutina no sale de una plantilla 📋 Así la armamos juntos.",
        cta: "Consultanos cómo empezar.",
        indicador: "Clics al perfil y consultas.",
        express: "Versión express: carrusel de cuatro imágenes con un paso cada una. No hace falta grabar video."
      }
    ],
    comunidad: [
      {
        tipo: "original",
        titulo: "Logros que se celebran",
        resumen: "Alumnos que lo autorizan cuentan un logro chico del mes.",
        objetivo: "Fortalecer el vínculo con quienes ya entrenan y mostrar ese clima.",
        publico: "Celebra avances de todos los niveles, no solo de los más avanzados.",
        guion: {
          inicio: "“Este mes en Factor 3…”",
          desarrollo: "Dos o tres alumnos cuentan un logro (por ejemplo: “hice mi primera dominada”). Sin datos de salud ni de peso.",
          cierre: "“¿Cuál fue tu último logro? Contanos.”"
        },
        pasos: [
          "Preguntá en el gimnasio quién quiere participar y pedí autorización.",
          "Grabá respuestas de 5 segundos cuando puedan.",
          "Uní los clips al final del mes."
        ],
        texto: "Los logros chicos también cuentan 🏅 Felicitaciones a quienes se animaron a compartirlo.",
        cta: "Contanos en comentarios tu último logro.",
        indicador: "Comentarios y participación.",
        express: "Versión express: historia con la caja de preguntas “¿Cuál fue tu logro de la semana?” y compartir algunas respuestas."
      },
      {
        tipo: "habitual",
        titulo: "Conocé a los profes",
        resumen: "Presentación breve y cercana de cada profe del equipo.",
        objetivo: "Humanizar la marca y generar cercanía.",
        publico: "Muestra a las personas que van a acompañar a cada alumno.",
        guion: {
          inicio: "Nombre del profe en pantalla y una sonrisa a cámara.",
          desarrollo: "Responde rápido: “¿Por qué te gusta enseñar?” y “Un consejo para quien empieza”.",
          cierre: "“¿Qué le querés preguntar?”"
        },
        pasos: [
          "Grabá a un profe por día, en su rato libre.",
          "Usá siempre las mismas dos preguntas.",
          "Publicalos como serie."
        ],
        texto: "Te presentamos a quienes te acompañan en cada entrenamiento 👋",
        cta: "Dejale tu pregunta en comentarios.",
        indicador: "Comentarios y guardados.",
        express: "Versión express: foto del profe con su consejo en una frase, en formato carrusel con todo el equipo."
      },
      {
        tipo: "original",
        titulo: "Reto semanal con tres niveles",
        resumen: "Un desafío que se puede hacer empezando, en nivel medio o avanzado.",
        objetivo: "Invitar a participar sin que nadie quede afuera.",
        publico: "Incluye a principiantes y a quienes ya tienen experiencia.",
        guion: {
          inicio: "“Reto de la semana: elegí tu nivel.”",
          desarrollo: "El profe muestra las tres versiones del ejercicio y recuerda consultar ante cualquier duda.",
          cierre: "“Etiquetá a tu compañero de entrenamiento.”"
        },
        pasos: [
          "Elegí un ejercicio seguro con tres variantes.",
          "Grabá las tres en una misma toma.",
          "Repetí el formato cada semana con otro ejercicio."
        ],
        texto: "Reto de la semana 🔥 Hay un nivel para vos. Ante cualquier duda, consultá con un profe.",
        cta: "Etiquetá a alguien con quien entrenás.",
        indicador: "Menciones, comentarios y participación.",
        express: "Versión express: una imagen con los tres niveles escritos y una encuesta en historias: “¿Qué nivel elegís?”"
      }
    ]
  };

  /* ---------- Referencias al HTML ---------- */
  var log = document.getElementById("chat-log");
  var replies = document.getElementById("chat-replies");
  var ctxList = document.getElementById("ctx-list");
  var ctxBar = document.getElementById("ctx-bar");
  var restartBtn = document.getElementById("demo-restart");
  if (!log || !replies || !ctxList) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var state = { objetivo: null, ideaActual: null, ctx: {}, run: 0 };

  /* ---------- Utilidades ---------- */
  function wait(ms) { return new Promise(function (r) { setTimeout(r, reduceMotion ? 0 : ms); }); }
  function scrollDown() { log.scrollTop = log.scrollHeight; }

  function addMsg(html, cls) {
    var el = document.createElement("div");
    el.className = "msg " + cls;
    el.innerHTML = html;
    log.appendChild(el);
    scrollDown();
    return el;
  }

  // Muestra "escribiendo..." y después el mensaje del bot
  function bot(html, cls) {
    var run = state.run;
    var typing = addMsg('<span class="typing" aria-label="OrbiBot está escribiendo"><span></span><span></span><span></span></span>', "bot");
    var plain = html.replace(/<[^>]+>/g, "");
    return wait(Math.min(450 + plain.length * 6, 1300)).then(function () {
      typing.remove();
      if (run !== state.run) return Promise.reject("reiniciado");
      addMsg(html, "bot " + (cls || ""));
      return wait(250);
    });
  }

  function user(text) { addMsg(escapeHtml(text), "user"); }

  function escapeHtml(t) {
    return t.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function setReplies(list) {
    replies.innerHTML = "";
    list.forEach(function (r) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "reply" + (r.alt ? " alt" : "");
      b.textContent = r.label;
      b.addEventListener("click", function () {
        replies.innerHTML = "";
        if (r.say !== false) user(r.userText || r.label);
        r.action().catch(function () {});
      });
      replies.appendChild(b);
    });
  }

  /* ---------- Panel de contexto ---------- */
  function renderCtx() {
    ctxList.innerHTML = "";
    var filled = 0;
    CTX_FIELDS.forEach(function (f) {
      var row = document.createElement("div");
      var val = state.ctx[f[0]];
      if (val) { row.className = "filled"; filled++; }
      row.dataset.key = f[0];
      row.innerHTML = "<dt>" + f[1] + "</dt><dd>" + (val ? escapeHtml(val) : "Sin completar") + "</dd>";
      ctxList.appendChild(row);
    });
    ctxBar.style.width = Math.round((filled / CTX_FIELDS.length) * 100) + "%";
  }

  function setCtx(obj) {
    Object.keys(obj).forEach(function (k) { state.ctx[k] = obj[k]; });
    renderCtx();
    Object.keys(obj).forEach(function (k) {
      var row = ctxList.querySelector('[data-key="' + k + '"]');
      if (row) row.classList.add("flash");
    });
  }

  /* ---------- Tarjetas de ideas ---------- */
  function badge(tipo) {
    return tipo === "original"
      ? '<span class="badge original">Idea original</span>'
      : '<span class="badge habitual">Formato habitual</span>';
  }

  function ideasSummaryHtml() {
    var ideas = IDEAS[state.objetivo];
    return '<div class="idea-cards">' + ideas.map(function (i, n) {
      return '<div class="idea"><div class="idea-top"><span class="badge n">Idea ' + (n + 1) + "</span>" + badge(i.tipo) +
        "</div><h4>" + i.titulo + "</h4><p>" + i.resumen + "</p></div>";
    }).join("") + "</div>";
  }

  function ideaFullHtml(i, n) {
    return '<article class="idea-full"><header><div class="idea-top"><span class="badge n">Idea ' + (n + 1) + "</span>" + badge(i.tipo) +
      "</div><h4>" + i.titulo + "</h4></header><dl>" +
      "<dt>Objetivo</dt><dd>" + i.objetivo + "</dd>" +
      "<dt>Relación con el público</dt><dd>" + i.publico + "</dd>" +
      '<dt>Guion breve</dt><dd><div class="script">' +
        "<div><b>Inicio:</b> " + i.guion.inicio + "</div>" +
        "<div><b>Desarrollo:</b> " + i.guion.desarrollo + "</div>" +
        "<div><b>Cierre:</b> " + i.guion.cierre + "</div></div></dd>" +
      "<dt>Pasos de producción</dt><dd><ol>" + i.pasos.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol></dd>" +
      '<dt>Texto sugerido</dt><dd class="copy-box">' + i.texto + "</dd>" +
      "<dt>Llamada a la acción</dt><dd>" + i.cta + "</dd>" +
      "<dt>Indicador a observar</dt><dd>" + i.indicador + "</dd>" +
      "</dl></article>";
  }

  /* ---------- Guion de la conversación ---------- */
  function start() {
    state.run++;
    state.objetivo = null;
    state.ideaActual = null;
    state.ctx = {};
    log.innerHTML = "";
    replies.innerHTML = "";
    renderCtx();
    bot("¡Hola! Soy <strong>OrbiBot</strong>, el asistente de En Órbita 👋 Te ayudo a transformar el contexto de tu negocio en ideas de contenido orgánico para redes.")
      .then(function () { return bot("No necesito tu nombre ni tu email: alcanza con que me cuentes sobre el negocio."); })
      .then(function () { setReplies([{ label: "¡Empecemos!", action: paso1 }]); })
      .catch(function () {});
  }

  function paso1() {
    return bot("Genial. Para arrancar: ¿cómo se llama tu negocio, de qué rubro es y dónde está?").then(function () {
      setReplies([{ label: "Factor 3, un gimnasio en Funes, Santa Fe.", action: paso2 }]);
    });
  }

  function paso2() {
    setCtx({ negocio: "Factor 3 · gimnasio", ubicacion: "Funes, Santa Fe" });
    return bot("¡Bien! ¿Qué lo diferencia de otros gimnasios? ¿Y a quién querés llegar?").then(function () {
      setReplies([{
        label: "Hacemos entrenamiento personalizado y también libre, con profes que corrigen técnica. Queremos atraer a gente joven, sin dejar afuera a otras edades.",
        action: paso3
      }]);
    });
  }

  function paso3() {
    setCtx({ diferencial: "Entrenamiento personalizado y libre, con acompañamiento", publico: "Jóvenes, sin excluir otras generaciones" });
    return bot("Entendido: el acompañamiento es tu fuerte, y conviene que se note. ¿Cuál es tu objetivo principal con estas publicaciones?")
      .then(elegirObjetivo);
  }

  function elegirObjetivo() {
    setReplies(Object.keys(OBJETIVOS).map(function (k) {
      return { label: OBJETIVOS[k].label, action: function () { return objetivoElegido(k); } };
    }));
    return Promise.resolve();
  }

  function objetivoElegido(k) {
    var primeraVez = !state.objetivo;
    state.objetivo = k;
    setCtx({ objetivo: OBJETIVOS[k].corto });
    if (!primeraVez) return mostrarIdeas();
    return bot("Perfecto. ¿En qué red vas a publicar y qué tono querés? ¿Hay algo que no quieras hacer?").then(function () {
      setReplies([{ label: "TikTok e Instagram. Humor, motivación e información. Nada que se burle de principiantes.", action: paso5 }]);
    });
  }

  function paso5() {
    setCtx({ canal: "TikTok e Instagram", tono: "Humor, motivación e información", limites: "No burlarse de principiantes" });
    return bot("Anotado. Última pregunta: ¿quiénes pueden aparecer en los videos y cuánto tiempo tienen para grabar?").then(function () {
      setReplies([{ label: "Dueños, recepcionistas y profes. Algunos alumnos, si lo autorizan. Grabamos en ratos cortos, en distintos días.", action: paso6 }]);
    });
  }

  function paso6() {
    setCtx({ recursos: "Equipo y alumnos que autoricen · ratos cortos" });
    return bot("⚠️ <strong>Antes de seguir, una aclaración:</strong> en esta versión no puedo buscar en internet, así que no puedo confirmar qué es tendencia hoy. Te propongo ideas basadas en formatos habituales y en ideas originales, y te indico cuál es cuál.", "note")
      .then(mostrarIdeas);
  }

  function mostrarIdeas() {
    return bot("Estas son tres ideas para <strong>" + OBJETIVOS[state.objetivo].label.toLowerCase() + "</strong>, pensadas para tu público, tu tono y el tiempo que tienen:")
      .then(function () { return bot(ideasSummaryHtml(), "wide"); })
      .then(menuIdeas);
  }

  function menuIdeas() {
    var ideas = IDEAS[state.objetivo];
    var list = ideas.map(function (i, n) {
      return { label: "Desarrollar la idea " + (n + 1), action: function () { return verIdea(n); } };
    });
    list.push({ label: "🧪 Probar un límite: “Decime lo más viral de hoy”", userText: "Decime qué es lo más viral de hoy.", alt: true, action: limiteViral });
    list.push({ label: "🧪 Probar un límite: humor que se burla de principiantes", userText: "Hagamos un video burlándonos de los que no saben usar las máquinas.", alt: true, action: limiteHumor });
    setReplies(list);
    return Promise.resolve();
  }

  function verIdea(n) {
    state.ideaActual = n;
    var i = IDEAS[state.objetivo][n];
    return bot("Va la idea completa. Revisala y adaptala a tu manera: la decisión de publicar es tuya.")
      .then(function () { return bot(ideaFullHtml(i, n), "wide"); })
      .then(menuDespuesDeIdea);
  }

  function menuDespuesDeIdea() {
    setReplies([
      { label: "Reformular más corta", userText: "¿Me la reformulás más corta y fácil de grabar?", action: reformular },
      { label: "Ver otra idea", action: function () { return bot("Elegí otra de las tres ideas. Si querés más opciones, podés cambiar el objetivo.").then(menuIdeas); } },
      { label: "Cambiar objetivo", action: function () { return bot("Dale. ¿Qué objetivo querés trabajar ahora?").then(elegirObjetivo); } },
      { label: "Terminar", userText: "Listo, gracias. Por ahora es todo.", action: terminar }
    ]);
    return Promise.resolve();
  }

  function reformular() {
    var i = IDEAS[state.objetivo][state.ideaActual];
    return bot("Claro, va una opción más simple de producir:")
      .then(function () { return bot('<div class="copy-box" style="font-style:normal">' + i.express + "</div>"); })
      .then(menuDespuesDeIdea);
  }

  function limiteViral() {
    return bot("No te puedo responder eso con honestidad: en esta versión no consulto internet, y un video aislado tampoco demuestra que algo sea viral.")
      .then(function () { return bot("Para hablar de una <strong>tendencia verificada</strong> necesito evidencia: enlace, fecha y contexto de la plataforma. Si viste un formato que te gustó, describímelo y lo adapto a Factor 3."); })
      .then(menuIdeas);
  }

  function limiteHumor() {
    return bot("Esa no te la recomiendo: va contra el límite que pusiste y puede hacer sentir mal justo a quienes querés atraer.")
      .then(function () { return bot("Te propongo humor sobre la situación, no sobre la persona. Por ejemplo: un profe contando, exagerado, lo perdido que se sintió él en su primer día en un gimnasio."); })
      .then(menuIdeas);
  }

  function terminar() {
    return bot("¡Gracias por pasar por En Órbita! 🪐 Antes de publicar: revisá cada idea, pedí autorización a quienes aparezcan y mirá el indicador que elegimos. La decisión final siempre es tuya.")
      .then(function () {
        addMsg("<em>Fin de la simulación académica.</em>", "bot note");
        setReplies([{ label: "↺ Volver a empezar", say: false, action: function () { start(); return Promise.resolve(); } }]);
      });
  }

  restartBtn.addEventListener("click", start);

  // La demo arranca cuando el visitante llega a la sección (o de inmediato si el navegador no lo soporta)
  var demoSection = document.getElementById("demo");
  if ("IntersectionObserver" in window && demoSection) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { io.disconnect(); start(); }
    }, { threshold: 0.25 });
    io.observe(demoSection);
    renderCtx();
  } else {
    start();
  }
})();

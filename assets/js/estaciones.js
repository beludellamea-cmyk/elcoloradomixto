/*
  MISIÓN BERMEJO 3D — Contenidos históricos (8 estaciones)
  --------------------------------------------------------
  Fuente: fichas elaboradas en NotebookLM a partir de documentación cargada por el grupo
  (Proyecto DIA — Instructivo N.º 43). Los datos deben contrastarse con las páginas
  originales antes de publicar el videojuego. No completar fechas, lugares ni biografías
  mediante invenciones.

  Este archivo NO forma parte del empaquetado del juego: se puede editar con cualquier
  editor de texto y recargar index.html, sin necesidad de volver a compilar.

  Cada estación:
    id, orden, titulo, lugar (nombre corto para el cartel 3D), anio (texto del cartel),
    historia, curiosidad, pregunta, opciones[3], correcta (0, 1 o 2), fuente
    escena: identificador del escenario 3D que construye el juego.
*/
/*
  Ajustes del juego.
  mezclarOpciones: en el archivo de investigación la respuesta correcta es siempre la opción B.
  Con `true` el juego mezcla el orden de las 3 opciones en cada partida (los textos no cambian).
  Poné `false` para mostrarlas exactamente en el orden de este archivo.
*/
window.MB_CONFIG = { mezclarOpciones: true };

window.MB_ESTACIONES = [
  {
    id: "rio-bermejo",
    vf: {
      afirmacion: "El color rojizo del río Bermejo en época de creciente inspiró el nombre «El Colorado».",
      verdadera: true,
      explicacion: "Según la investigación, el agrimensor Oscar Gigena Centeno tomó ese color como base para bautizar la colonia y el pueblo."
    },
    orden: 1,
    escena: "puerto",
    titulo: "Río Bermejo y Puerto Km 192 N.R.B.",
    lugar: "Puerto Km 192 N.R.B.",
    anio: "1904–1905",
    anioTexto: "Año de origen: 1904–1905 (habilitación de la Línea de Navegación del Río Bermejo).",
    historia:
      "Es la arteria madre y el origen de la ciudad. Por este puerto natural ingresaron las primeras familias pioneras, las mercaderías y los colonos, a bordo de los vapores del Ministerio de Obras Públicas. Además, el color rojizo de sus aguas en época de creciente inspiró al agrimensor Oscar Gigena Centeno para bautizar a la colonia y al pueblo como «El Colorado».",
    curiosidad:
      "Antes de la llegada de la policía en 1936, este punto era conocido en Formosa y Resistencia como «El Paso de los Cuatreros», por el cruce constante de ganado robado. Para llamar a las canoas desde la otra orilla del río, se realizaban tres disparos de arma de fuego.",
    pregunta:
      "¿Qué topónimo técnico recibía la zona de desembarco sobre el río Bermejo antes de llamarse El Colorado?",
    opciones: ["Puerto Libertad", "Km 192 N.R.B. (Navegación Río Bermejo)", "Colonia Aquino"],
    correcta: 1,
    fuente: "El Colorado y su Historia (Nilo Schaller y Adolfo Galván), págs. 20, 84 y 105."
  },
  {
    id: "subcomisaria",
    vf: {
      afirmacion: "La primera Subcomisaría surgió por iniciativa de los propios vecinos para terminar con los asaltos y el cuatrerismo.",
      verdadera: true,
      explicacion: "Fue una iniciativa de los vecinos. Por eso su instalación por el sargento Pedro Barraza se considera la fundación de facto."
    },
    orden: 2,
    escena: "subcomisaria",
    titulo: "Subcomisaría «Bermejo» (primera dependencia policial)",
    lugar: "Subcomisaría «Bermejo»",
    anio: "11 de febrero de 1936",
    anioTexto: "Año de origen: 11 de febrero de 1936.",
    historia:
      "Surgió por iniciativa de los propios vecinos para poner fin a los asaltos y al cuatrerismo en la costa del Bermejo. Su instalación por el sargento Pedro Barraza representó la primera institución oficial del Estado en afincarse en el lugar, hecho considerado la «fundación de facto» de El Colorado.",
    curiosidad:
      "Como la humilde sede inicial (un rancho de barro y paja) no contaba con un calabozo, utilizaban un pesado instrumento de hierro perforado con candados llamado «la barra», donde sujetaban a los presos por los tobillos para evitar que se fugaran.",
    pregunta:
      "¿Quién fue el sargento de policía considerado el fundador de facto al ponerse al frente de la primera Subcomisaría en 1936?",
    opciones: ["Oscar Gigena Centeno", "Pedro Barraza", "Francisco Cantero"],
    correcta: 1,
    fuente: "El Colorado y su Historia (Nilo Schaller y Adolfo Galván), págs. 103–105 y 115–116.",
    // Foto de referencia (estado actual, no histórica). Crédito pendiente de confirmar.
    foto: { archivo: "assets/img/comisaria.jpg", titulo: "Comisaría El Colorado (estado actual)", autor: null, anio: null, licencia: null, url: null, cambios: "Redimensionada y convertida a JPG." }
  },
  {
    id: "registro-civil",
    vf: {
      afirmacion: "El primer Registro Civil funcionó desde el principio en un edificio público construido para ese fin.",
      verdadera: false,
      explicacion: "Funcionó en el domicilio de Francisco «Pancho» Cantero, donde también operaba su carnicería."
    },
    orden: 3,
    foto: { archivo: "assets/img/registro-civil.jpg", titulo: "Registro Civil, edificio actual (Centro Cívico)", autor: "Belén Dellamea", anio: 2026, licencia: "Foto propia", url: null, cambios: "Redimensionada a 800 px y convertida a JPG." },
    escena: "registro",
    titulo: "Registro Civil (primer registro de nacimientos)",
    lugar: "Registro Civil",
    anio: "Agosto de 1938",
    anioTexto: "Año de origen: agosto de 1938.",
    historia:
      "Su habilitación, bajo la responsabilidad de Francisco «Pancho» Cantero, independizó a la población de tener que viajar hasta Pirané o El Zapallar para registrar los hechos vitales de la comunidad. Funcionó originalmente en el domicilio del propio Cantero, donde también operaba su carnicería.",
    curiosidad:
      "La primera persona inscripta en el libro oficial de nacimientos de El Colorado fue Ana Talaban, registrada en el Acta N.º 1 el 27 de agosto de 1938 por su padre, un colono polaco de 28 años.",
    pregunta:
      "¿Quién fue la primera ciudadana registrada oficialmente en los libros del Registro Civil de El Colorado el 27 de agosto de 1938?",
    opciones: ["Bonifacia Méndez", "Ana Talaban", "María Blume"],
    correcta: 1,
    fuente:
      "El Colorado y su Historia (Nilo Schaller y Adolfo Galván), págs. 134–135; documento «Texto pegado (Efemérides)»."
  },
  {
    id: "desmotadora",
    vf: {
      afirmacion: "La Desmotadora Oficial fue creada por la Junta Nacional del Algodón para proteger al colono de las quitas de precio de los acopiadores privados.",
      verdadera: true,
      explicacion: "Se creó en el Km 190 para defender al colono frente a los acopiadores privados durante la «fiebre del oro blanco»."
    },
    orden: 4,
    escena: "desmotadora",
    titulo: "Desmotadora Oficial y Chacra Experimental (actual INTA)",
    lugar: "Desmotadora Oficial",
    anio: "1939",
    anioTexto: "Año de origen: 1939.",
    historia:
      "Fue creada en el Km 190 por la Junta Nacional del Algodón para proteger al colono frente a las quitas de precio de los acopiadores privados durante la «fiebre del oro blanco». Junto con la Chacra Experimental, donde nació la investigación agrícola de Formosa (actual INTA), es recordada como uno de los «pulmones» clave que transformaron el paraje en ciudad.",
    curiosidad:
      "Las primeras maquinarias para el desmote no eran nuevas: fueron compradas usadas en Frías (Santiago del Estero), desmontadas y trasladadas hasta El Colorado hacia 1940.",
    pregunta: "¿Qué organismo estatal instaló la Desmotadora Oficial en 1939 para defender el precio del algodón?",
    opciones: ["El Ministerio de Obras Públicas", "La Junta Nacional del Algodón", "La Comisión de Fomento"],
    correcta: 1,
    fuente: "El Colorado y su Historia (Nilo Schaller y Adolfo Galván), págs. 149–153."
  },
  {
    id: "escuela-116",
    vf: {
      afirmacion: "Al mudarse al pueblo en 1942, la Escuela N.º 116 funcionó en un rancho de «estaqueo» con techo de paja.",
      verdadera: true,
      explicacion: "Según la ficha, la escuela se mudó al pueblo en 1942 y funcionó en ese rancho hasta contar con edificio de material en 1947."
    },
    orden: 5,
    escena: "escuela",
    titulo: "Escuela Nacional N.º 116 (actual EPEP N.º 166 «Dr. Luis María Drago»)",
    lugar: "Escuela Nacional N.º 116",
    anio: "1936 · 1942 · 1947",
    anioTexto:
      "Año de origen: 1 de junio de 1936 (creada en Colonia Aquino); trasladada a El Colorado el 13 de octubre de 1942.",
    historia:
      "Fue el primer establecimiento educativo del radio urbano. Tras funcionar en un rancho de barro y paja en la costa del río Bermejo, bajo la dirección del maestro Juan Cruz Damedín, inauguró en 1947 su edificio de material sobre las avenidas San Martín y 25 de Mayo, gracias al «Plan de 1.000 escuelas» del gobierno nacional.",
    curiosidad:
      "En mayo de 1944, la Comisión de Fomento organizó festejos patrios con partidos de fútbol, juegos criollos y un asado popular gratuito, con el objetivo de recaudar fondos para comprar ladrillos para la escuela.",
    pregunta: "¿En qué tipo de construcción funcionó por primera vez la Escuela N.º 116 al mudarse al pueblo en 1942?",
    opciones: [
      "Un edificio de material con baños instalados",
      "Un rancho de «estaqueo» (madera y barro) con techo de paja",
      "Un galpón cedido por la Desmotadora Oficial"
    ],
    correcta: 1,
    fuente:
      "El Colorado y su Historia (Nilo Schaller y Adolfo Galván), págs. 180–184; documento «Texto pegado (Reseña histórica)».",
    // Foto de referencia (estado actual, no histórica). Crédito pendiente de confirmar.
    foto: { archivo: "assets/img/escuela.jpg", titulo: "Escuela N.º 116, edificio actual", autor: null, anio: null, licencia: null, url: null, cambios: "Redimensionada y convertida a JPG." }
  },
  {
    id: "plaza-san-martin",
    vf: {
      afirmacion: "El alambrado de la plaza tenía seis hilos para evitar que entraran vacas y otros animales.",
      verdadera: false,
      explicacion: "Era de cinco hilos, para evitar que ingresaran vacas y otros animales que pastaban en las chacras vecinas."
    },
    orden: 6,
    foto: { archivo: "assets/img/plaza-san-martin.jpg", titulo: "Plaza General San Martín (estado actual)", autor: "Belén Dellamea", anio: 2026, licencia: "Foto propia", url: null, cambios: "Redimensionada a 800 px y convertida a JPG." },
    escena: "plaza",
    titulo: "Plaza General San Martín",
    lugar: "Plaza General San Martín",
    anio: "1944–1945 · 1950",
    anioTexto:
      "Año de origen: 1944–1945 (diseño de la plaza); 17 de agosto de 1950 (emplazamiento del busto a San Martín).",
    historia:
      "Fue diseñada a partir de croquis presentados por Adolfo C. A. Galván. Se proyectó como una plaza-parque amplia, rompiendo con los esquemas tradicionales para permitir la circulación del aire y el esparcimiento. Es el centro de actos patrios y cívicos de la ciudad.",
    curiosidad:
      "En sus primeros años, el predio estaba cercado por un alambrado de cinco hilos para evitar que ingresaran vacas y otros animales que pastaban en las chacras linderas.",
    pregunta: "¿Por qué la Plaza San Martín tuvo un alambrado de cinco hilos en sus primeros años?",
    opciones: [
      "Para delimitar la cancha de fútbol del pueblo",
      "Para evitar el ingreso de vacas y animales al predio",
      "Para cobrar entradas en las fiestas patrias"
    ],
    correcta: 1,
    fuente:
      "«El_Colorado_Historia_y_Monumentos.docx» (Parte II); El Colorado y su Historia, págs. 208–209."
  },
  {
    id: "puente-libertad",
    vf: {
      afirmacion: "El Puente Libertad se inauguró en 1968.",
      verdadera: false,
      explicacion: "Se inauguró el 8 de febrero de 1958. El año 1968 era otra de las opciones de la pregunta."
    },
    orden: 7,
    escena: "puente",
    titulo: "Puente Libertad",
    lugar: "Puente Libertad",
    anio: "8 de febrero de 1958",
    anioTexto: "Año de origen: inaugurado el 8 de febrero de 1958 (inicio de obras en 1949).",
    historia:
      "Esta obra vial sobre el río Bermejo, dirigida por el ingeniero Abel Fabrizio Carraza, puso fin a la dependencia de canoas y balsas pesadas. Su habilitación conectó a Formosa con Chaco y favoreció la integración territorial.",
    curiosidad:
      "El nombre «Libertad» le fue otorgado en homenaje a la autoproclamada «Revolución Libertadora» (gobierno de facto nacional de 1955).",
    pregunta: "¿En qué año se inauguró el Puente Libertad uniendo a El Colorado con Chaco?",
    opciones: ["1944", "1958", "1968"],
    correcta: 1,
    fuente: "«El_Colorado_Historia_y_Monumentos.docx» (Parte I); «camping tp.docx», pág. 35.",
    // Foto real (estado actual, no histórica). Crédito según el documento «Fotografías reales y créditos».
    // Pendiente: confirmar en Commons que este archivo es el mismo que indica el documento.
    foto: {
      archivo: "assets/img/puente-libertad.jpg",
      titulo: "Puente Libertad: vista general",
      autor: "Claudiooooooooooooo",
      anio: "2015",
      licencia: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Puente_Libertad_(r%C3%ADo_Bermejo).jpg",
      cambios: "Redimensionada y convertida a JPG para el juego."
    }
  },
  {
    id: "casas-redondas",
    vf: {
      afirmacion: "Jorge Telbiz usaba una volanta para levantar las paredes circulares sin andamios convencionales.",
      verdadera: true,
      explicacion: "Hacía caminar la volanta en círculos por el interior mientras elevaba la pared."
    },
    orden: 8,
    escena: "casas",
    titulo: "Las Casas Redondas y silos de Jorge Telbiz",
    lugar: "Casas Redondas de Telbiz",
    anio: "Década de 1950",
    anioTexto: "Año de origen: mediados del siglo XX (década de 1950).",
    historia:
      "Es un conjunto arquitectónico rústico construido en el campo de Formosa. Es obra de Jorge Telbiz, inmigrante y constructor autodidacta de origen soviético, que levantó viviendas y silos en espiral usando ladrillos vistos y cúpulas de media naranja.",
    curiosidad:
      "Para construir las paredes cilíndricas y las bóvedas de ladrillo sin andamios convencionales, Telbiz utilizaba una «volanta» (carro de dos ruedas) a la que hacía caminar en círculos por el interior mientras elevaba la pared.",
    pregunta: "¿Qué elemento utilizaba Jorge Telbiz como andamio giratorio interno para construir sus casas redondas?",
    opciones: [
      "Una plataforma de madera de quebracho",
      "Una volanta a la que hacía caminar en círculos",
      "Una estructura flotante sobre el aljibe"
    ],
    correcta: 1,
    fuente: "«Casas_Redondas_Jorge_Telbiz_El_Colorado.docx»."
  }
];

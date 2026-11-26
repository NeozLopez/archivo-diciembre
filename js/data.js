// Sustituye estos textos por información real cuando Diego la proporcione.
// No guardes aquí información sensible que no deba publicarse en el sitio.
window.ANNIVERSARY_DATA = {
  access: {
    question: "Alto allí, primero vamos a verificar que seas Lau, mi amocito, con una pregunta sencilla. ¿Qué día nos conocimos?",
    answer: "2025-08-25",
    options: [
      { value: "2025-08-25", label: "25 de agosto de 2025" },
      { value: "2025-08-13", label: "13 de agosto de 2025" },
      { value: "2025-09-25", label: "25 de septiembre de 2025" }
    ],
    successMessage: "Exacto. Aquí empieza nuestra historia."
  },
  album: {
    title: "Nuestros primeros recuerdos",
    introduction: "Hay momentos que merecen volver a vivirse una y otra vez.",
    items: [
      {
        type: "image",
        src: "assets/photos/primerafotojuntos.jpg",
        alt: "Nuestra primera foto juntos",
        className: "album-item--first-photo",
        caption: "Nuestra primera foto juntos."
      },
      {
        type: "video",
        src: "assets/photos/primerbailejuntos.mp4",
        caption: "Nuestro primer baile."
      }
    ]
  },
  music: {
    source: "assets/audio/Emmanuel Cortes - Amor.mp3",
    title: "Nuestra canción"
  },
  levels: [
    {
      id: "comienzo",
      title: "El comienzo",
      type: "choice",
      prompt: "¿Dónde fue nuestra primera cita?",
      answer: "coyoacan",
      options: [
        { value: "coyoacan", label: "Coyoacán" },
        { value: "tlalpan", label: "Tlalpan" },
        { value: "muches-tepito", label: "Las Muches en Tepito" }
      ],
      image: "assets/photos/primera-cita.jpg",
      imageAlt: "Recuerdo de la primera cita",
      successMessage: "Exacto. Aquí comenzó uno de nuestros recuerdos favoritos."
    },
    {
      id: "recuerdo",
      title: "Nuestra primera película",
      type: "choice",
      prompt: "¿Cuál fue la primera película que vimos juntos en el cine?",
      answer: "conjuro-4",
      options: [
        { value: "conjuro-4", label: "El conjuro 4: Últimos ritos" },
        { value: "la-hermanastra-fea", label: "La hermanastra fea" },
        { value: "laberinto-del-fauno", label: "El laberinto del fauno" }
      ],
      image: "assets/photos/primera-pelicula.jpg",
      imageAlt: "Recuerdo de nuestra primera película juntos",
      imageClass: "memory-reveal--movie",
      successMessage: "Sí. Una película, una sala oscura y un recuerdo que se quedó con nosotros."
    },
    {
      id: "concierto",
      title: "Nuestro primer concierto",
      type: "choice",
      prompt: "¿Cuál fue nuestro primer concierto juntos?",
      answer: "bryndis-x-100-pre",
      options: [
        { value: "bryndis-x-100-pre", label: "Bryndis x 100 pre" },
        { value: "bryndis", label: "Bryndis" },
        { value: "liberacion", label: "Liberación" }
      ],
      successMessage: "Sí. Ese fue nuestro primer concierto juntos."
    }
  ]
};

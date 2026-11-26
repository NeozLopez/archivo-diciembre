// Sustituye estos textos por información real cuando Diego la proporcione.
// No guardes aquí información sensible que no deba publicarse en el sitio.
window.ANNIVERSARY_DATA = {
  terminal: {
    // Sustituye esta clave temporal antes de compartir la página.
    password: "diegoamaalau"
  },
  access: {
    question: "Nuestra historia comenzó el día en que nos conocimos. Ese día estaba nervioso de no fallar; quería verme natural y seguro. Mi primera impresión de ti fue que eras bonita, inteligente y alguien interesante. ¿Recuerdas qué día nos conocimos en persona?",
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
        type: "image",
        src: "assets/photos/harrypotter.jpg",
        alt: "Recuerdo de Harry Potter",
        caption: "Harry Potter."
      },
      {
        type: "image",
        src: "assets/photos/cumpleaños.jpg",
        alt: "Recuerdo de cumpleaños",
        caption: "Cumpleaños."
      }
    ]
  },
  music: {
    source: "assets/audio/Emmanuel Cortes - Amor.mp3",
    title: "Nuestra canción"
  },
  levels: [
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

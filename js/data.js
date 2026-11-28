// Sustituye estos textos por información real cuando Diego la proporcione.
// No guardes aquí información sensible que no deba publicarse en el sitio.
const datedAlbumPhotos = [
  ["PXL_20251109_002432991~2.jpg", "9 de noviembre de 2025"],
  ["PXL_20251116_050438693.jpg", "16 de noviembre de 2025"],
  ["PXL_20251123_203335865~2.jpg", "23 de noviembre de 2025"],
  ["PXL_20251129_230032662~2.jpg", "29 de noviembre de 2025"],
  ["IMG-20251130-WA0017.jpg", "30 de noviembre de 2025"],
  ["PXL_20251130_024817547~4.jpg", "30 de noviembre de 2025"],
  ["IMG-20251130-WA0082~2.jpg", "30 de noviembre de 2025"],
  ["IMG-20251206-WA0024.jpg", "6 de diciembre de 2025"],
  ["IMG-20251214-WA0017.jpg", "14 de diciembre de 2025"],
  ["IMG-20251214-WA0020.jpg", "14 de diciembre de 2025"],
  ["IMG-20260102-WA0007.jpg", "2 de enero de 2026"],
  ["IMG-20260102-WA0035.jpg", "2 de enero de 2026"],
  ["IMG-20260102-WA0045.jpg", "2 de enero de 2026"],
  ["IMG-20260102-WA0056.jpg", "2 de enero de 2026"],
  ["PXL_20260111_203046474.jpg", "11 de enero de 2026"],
  ["PXL_20260201_034104605~2.jpg", "1 de febrero de 2026"],
  ["PXL_20260201_035937470.jpg", "1 de febrero de 2026"],
  ["PXL_20260223_002641038.jpg", "23 de febrero de 2026"],
  ["PXL_20260301_030645866~2.jpg", "1 de marzo de 2026"],
  ["IMG-20260301-WA0012.jpg", "1 de marzo de 2026"],
  ["IMG-20260301-WA0014.jpg", "1 de marzo de 2026"],
  ["IMG-20260329-WA0020.jpg", "29 de marzo de 2026"],
  ["IMG-20260331-WA0032.jpg", "31 de marzo de 2026"],
  ["IMG-20260401-WA0011.jpg", "1 de abril de 2026"],
  ["IMG-20260401-WA0099~2.jpg", "1 de abril de 2026"],
  ["IMG-20260401-WA0145.jpg", "1 de abril de 2026"],
  ["IMG-20260401-WA0157.jpg", "1 de abril de 2026"],
  ["IMG-20260402-WA0094.jpg", "2 de abril de 2026"],
  ["IMG-20260402-WA0103.jpg", "2 de abril de 2026"],
  ["IMG-20260403-WA0027.jpg", "3 de abril de 2026"],
  ["IMG-20260403-WA0035.jpg", "3 de abril de 2026"],
  ["PXL_20260404_093814947.jpg", "4 de abril de 2026"],
  ["PXL_20260404_141926847.jpg", "4 de abril de 2026"],
  ["IMG-20260407-WA0118.jpg", "7 de abril de 2026"],
  ["IMG-20260510-WA0043.jpg", "10 de mayo de 2026"],
  ["IMG-20260510-WA0048.jpg", "10 de mayo de 2026"],
  ["IMG-20260510-WA0056.jpg", "10 de mayo de 2026"],
  ["PXL_20260606_221229568.jpg", "6 de junio de 2026"],
  ["PXL_20260614_172501421~2.jpg", "14 de junio de 2026"],
  ["PXL_20260617_050535040.jpg", "17 de junio de 2026"],
  ["PXL_20260621_041127632.MP.jpg", "21 de junio de 2026"],
  ["PXL_20260625_043547721.jpg", "25 de junio de 2026"],
  ["PXL_20260706_001415003.jpg", "6 de julio de 2026"],
  ["PXL_20260706_002015910.MP.jpg", "6 de julio de 2026"],
  ["PXL_20260801_202134436.jpg", "1 de agosto de 2026"],
  ["PXL_20260802_193553435.jpg", "2 de agosto de 2026"],
  ["PXL_20260807_163659936.jpg", "7 de agosto de 2026"],
  ["IMG-20260808-WA0160.jpg", "8 de agosto de 2026"],
  ["PXL_20260823_041017513.jpg", "23 de agosto de 2026"],
  ["PXL_20260823_080150829.jpg", "23 de agosto de 2026"]
].map(([fileName, date]) => ({
  type: "image",
  src: `assets/photos/${fileName}`,
  alt: `Fotografía del ${date}`,
  caption: date,
  note: "[Escribe aquí una frase sobre este recuerdo.]"
}));

window.ANNIVERSARY_DATA = {
  terminal: {
    // Sustituye esta clave temporal antes de compartir la página.
    password: "lau"
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
    title: "Nuestro álbum de fotos",
    introduction: "Hay momentos que merecen volver a vivirse una y otra vez.",
    items: [
      {
        type: "image",
        src: "assets/photos/primerafotojuntos.jpg",
        alt: "Nuestra primera foto juntos",
        className: "album-item--first-photo",
        caption: "Nuestra primera foto juntos.",
        note: "[Escribe aquí una frase sobre este recuerdo.]"
      },
      {
        type: "image",
        src: "assets/photos/harrypotter.jpg",
        alt: "Recuerdo de Harry Potter",
        caption: "Harry Potter.",
        note: "[Escribe aquí una frase sobre este recuerdo.]"
      },
      {
        type: "image",
        src: "assets/photos/cumpleaños.jpg",
        alt: "Recuerdo de cumpleaños",
        caption: "Cumpleaños.",
        note: "[Escribe aquí una frase sobre este recuerdo.]"
      },
      ...datedAlbumPhotos
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

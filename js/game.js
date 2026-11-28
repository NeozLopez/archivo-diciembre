window.Game = (() => {
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  };
  function start(root, levels, album, onRestart) {
    let complete = [];
    const orderedLevels = levels;
    const card = root.querySelector("[data-level-card]");
    const errorDialog = root.querySelector("[data-game-error-dialog]");
    const successDialog = root.querySelector("[data-game-success-dialog]");
    const photoDialog = root.querySelector("[data-photo-dialog]");
    const photoDialogImage = root.querySelector("[data-photo-dialog-image]");
    const photoDialogNote = root.querySelector("[data-photo-dialog-note]");
    let retryCurrentQuestion = () => {};
    root.querySelector("[data-game-retry]").addEventListener("click", () => {
      errorDialog.close();
      retryCurrentQuestion();
    });
    root.querySelector("[data-game-continue]").addEventListener("click", () => {
      successDialog.close();
      draw();
    });
    root.querySelector("[data-photo-dialog-close]").addEventListener("click", () => { photoDialog.hidden = true; });
    photoDialog.addEventListener("click", (event) => {
      if (event.target === photoDialog) photoDialog.hidden = true;
    });
    const renderAlbum = () => {
      const pageSize = 4;
      let page = 0;
      const showCover = () => {
        card.classList.add("album-card");
        card.innerHTML = `<div class="album-cover"><p>Una colección de momentos</p><h2>${album.title}</h2><button class="continue-button" type="button">Ver álbum</button></div>`;
        card.querySelector("button").addEventListener("click", showPage);
      };
      const showPage = () => {
        const start = page * pageSize;
        const photos = album.items.slice(start, start + pageSize);
        const albumItems = photos.map((item, index) => `<figure class="album-item ${item.className || ""}"><button class="album-item__open" type="button" data-album-index="${start + index}"><img src="${item.src}" alt="${item.alt}" /></button><figcaption>${item.caption}</figcaption></figure>`).join("");
        const isLastPage = start + pageSize >= album.items.length;
        card.innerHTML = `<h2>${album.title}</h2><div class="album">${albumItems}</div><p class="album-page-number">Página ${page + 1} de ${Math.ceil(album.items.length / pageSize)}</p><button class="continue-button" type="button" data-album-next>${isLastPage ? "Volver a empezar" : "Siguiente página"}</button>`;
        card.querySelectorAll("[data-album-index]").forEach((button) => button.addEventListener("click", () => {
          const item = album.items[Number(button.dataset.albumIndex)];
          photoDialogImage.src = item.src;
          photoDialogImage.alt = item.alt;
          photoDialogNote.textContent = item.note || "[Escribe aquí una frase sobre este recuerdo.]";
          photoDialog.hidden = false;
        }));
        card.querySelector("[data-album-next]").addEventListener("click", () => {
          if (isLastPage) {
            complete = [];
            if (onRestart) onRestart(); else draw();
          } else {
            page += 1;
            showPage();
          }
        });
      };
      showCover();
    };
    const draw = () => {
      card.classList.remove("album-card");
      const level = orderedLevels.find(item => !complete.includes(item.id));
      if (!level) {
        renderAlbum();
        return;
      }
      const formMarkup = level.type === "choice"
        ? `<form class="level-form"><fieldset><legend class="sr-only">Elige una respuesta</legend><div class="date-options">${shuffle(level.options).map(option => `<label><input type="radio" name="level-answer" value="${option.value}" required />${option.label}</label>`).join("")}</div><button class="continue-button">Descubrir</button></fieldset></form>`
        : `<form class="answer"><input aria-label="Tu respuesta" required autocomplete="off" placeholder="Tu respuesta" /><button>Descubrir</button></form>`;
      card.innerHTML = `<h2>${level.title}</h2><p>${level.prompt}</p>${formMarkup}`;
      const form = card.querySelector("form");
      form.addEventListener("submit", event => {
        event.preventDefault(); const input = card.querySelector("input");
        const answer = level.type === "choice" ? card.querySelector("input:checked")?.value : input.value;
        if (answer && normalize(answer) === normalize(level.answer)) {
          complete = [...complete, level.id];
          successDialog.showModal();
        }
        else {
          retryCurrentQuestion = () => {
            form.reset();
            form.querySelector("input").focus();
          };
          errorDialog.showModal();
        }
      });
    };
    draw();
  }
  return { start };
})();

window.Game = (() => {
  const key = "lau-diego-progress-v2";
  const load = () => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
  const save = (value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  };
  function start(root, levels, album) {
    let complete = load();
    const orderedLevels = levels;
    const progress = root.querySelector("[data-progress]"); const card = root.querySelector("[data-level-card]");
    const draw = () => {
      progress.textContent = `${complete.length} / ${levels.length} recuerdos descubiertos`;
      const level = orderedLevels.find(item => !complete.includes(item.id));
      if (!level) {
        const albumItems = album.items.map((item) => item.type === "video"
          ? `<figure class="album-item"><video controls playsinline preload="metadata"><source src="${item.src}" type="video/mp4" />Tu navegador no puede reproducir este video.</video><figcaption>${item.caption}</figcaption></figure>`
          : `<figure class="album-item ${item.className || ""}"><img src="${item.src}" alt="${item.alt}" /><figcaption>${item.caption}</figcaption></figure>`
        ).join("");
        card.innerHTML = `<h2>${album.title}</h2><p>${album.introduction}</p><div class="album">${albumItems}</div><button class="continue-button" type="button">Volver a empezar</button>`;
        card.querySelector("button").addEventListener("click", () => { complete = []; save(complete); draw(); });
        return;
      }
      const formMarkup = level.type === "choice"
        ? `<form class="level-form"><fieldset><legend class="sr-only">Elige una respuesta</legend><div class="date-options">${shuffle(level.options).map(option => `<label><input type="radio" name="level-answer" value="${option.value}" required />${option.label}</label>`).join("")}</div><button class="continue-button">Descubrir</button></fieldset></form>`
        : `<form class="answer"><input aria-label="Tu respuesta" required autocomplete="off" placeholder="Tu respuesta" /><button>Descubrir</button></form>`;
      card.innerHTML = `<p class="eyebrow">Siguiente capítulo</p><h2>${level.title}</h2><p>${level.prompt}</p>${formMarkup}<p class="feedback"></p>`;
      card.querySelector("form").addEventListener("submit", event => {
        event.preventDefault(); const input = card.querySelector("input"); const feedback = card.querySelector(".feedback");
        const answer = level.type === "choice" ? card.querySelector("input:checked")?.value : input.value;
        if (answer && normalize(answer) === normalize(level.answer)) {
          complete = [...complete, level.id];
          save(complete);
          if (level.image) {
            card.innerHTML = `<figure class="memory-reveal ${level.imageClass || ""}"><img src="${level.image}" alt="${level.imageAlt || "Recuerdo desbloqueado"}" /><figcaption>${level.successMessage}</figcaption></figure><button class="continue-button" type="button">Siguiente recuerdo</button>`;
            card.querySelector("button").addEventListener("click", draw);
          } else {
            feedback.textContent = level.successMessage;
            setTimeout(draw, 1400);
          }
        }
        else feedback.textContent = "Todavía no. Prueba de nuevo.";
      });
    };
    draw();
  }
  return { start };
})();

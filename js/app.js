(() => {
  const data = window.ANNIVERSARY_DATA;
  const root = document.querySelector("#experience");

  function startMusic() {
    if (document.querySelector("#music-player")) return;
    const player = document.createElement("aside");
    player.id = "music-player";
    player.className = "music-player";
    player.innerHTML = `<div class="music-player__top"><span>${data.music.title}</span><button type="button" aria-label="Cerrar reproductor">×</button></div><audio controls preload="metadata"><source src="${data.music.source}" type="audio/mpeg" />Tu navegador no puede reproducir este audio.</audio>`;
    const audio = player.querySelector("audio");
    player.querySelector("button").addEventListener("click", () => { audio.pause(); player.remove(); });
    document.querySelector("#music-player-slot").append(player);
    audio.play().catch(() => {});
  }

  function openAdventure() {
    root.replaceChildren();
    root.append(document.querySelector("#game-template").content.cloneNode(true));
    window.Game.start(root, data.levels, data.album);
  }

  root.append(document.querySelector("#gate-template").content.cloneNode(true));
  const enter = root.querySelector("[data-enter]");
  const form = root.querySelector("[data-question-form]");
  const feedback = root.querySelector("[data-feedback]");
  root.querySelector("[data-question]").textContent = data.access.question;
  const options = root.querySelector("[data-options]");
  data.access.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "access-answer";
    input.value = option.value;
    input.required = true;
    label.append(input, document.createTextNode(option.label));
    options.append(label);
  });

  enter.addEventListener("click", () => {
    startMusic();
    enter.hidden = true;
    form.hidden = false;
    form.querySelector("input").focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector("input:checked");
    if (selected && selected.value === data.access.answer) {
      feedback.textContent = data.access.successMessage;
      window.setTimeout(openAdventure, 850);
    } else {
      feedback.textContent = "Casi… piensa en nosotros.";
    }
  });
})();

(() => {
  const data = window.ANNIVERSARY_DATA;
  const root = document.querySelector("#experience");
  const shell = document.querySelector(".site-shell");
  const preloadedAssets = [];

  function preloadImage(source) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = image.onerror = () => resolve();
      image.src = source;
      preloadedAssets.push(image);
    });
  }

  function preloadAudio(source) {
    return new Promise((resolve) => {
      const audio = new Audio();
      const finish = () => resolve();
      audio.preload = "auto";
      audio.addEventListener("canplaythrough", finish, { once: true });
      audio.addEventListener("error", finish, { once: true });
      audio.src = source;
      audio.load();
      preloadedAssets.push(audio);
      window.setTimeout(finish, 8000);
    });
  }

  function showLoading() {
    shell.classList.add("site-shell--terminal");
    shell.classList.remove("site-shell--unlocking");
    root.replaceChildren();
    root.append(document.querySelector("#loading-template").content.cloneNode(true));
    const progressBar = root.querySelector("[data-loading-bar]");
    const progressText = root.querySelector("[data-loading-status]");
    const assets = [
      ...data.album.items.map((item) => ({ type: "image", source: item.src })),
      { type: "image", source: "assets/images/error.webp" },
      { type: "image", source: "assets/images/correcto.webp" },
      { type: "audio", source: data.music.source }
    ];
    let complete = 0;
    const updateProgress = () => {
      complete += 1;
      const percent = Math.round((complete / assets.length) * 100);
      progressBar.style.width = `${percent}%`;
      progressText.textContent = `${percent}% · ${complete} de ${assets.length}`;
    };
    Promise.all(assets.map((asset) => (asset.type === "audio" ? preloadAudio(asset.source) : preloadImage(asset.source)).then(updateProgress))).then(showGate);
  }

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
    shell.classList.remove("site-shell--terminal");
    root.replaceChildren();
    root.append(document.querySelector("#game-template").content.cloneNode(true));
    window.Game.start(root, data.levels, data.album, () => showGate(true));
  }

  function showGate(showQuestionImmediately = false) {
    shell.classList.remove("site-shell--terminal", "site-shell--unlocking");
    shell.classList.add("site-shell--letter-reveal");
    window.setTimeout(() => shell.classList.remove("site-shell--letter-reveal"), 700);
    root.replaceChildren();
    root.append(document.querySelector("#gate-template").content.cloneNode(true));
    const enter = root.querySelector("[data-enter]");
    const form = root.querySelector("[data-question-form]");
    const errorDialog = root.querySelector("[data-error-dialog]");
    const successDialog = root.querySelector("[data-success-dialog]");
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

    const revealQuestion = () => {
      startMusic();
      enter.hidden = true;
      root.querySelector("[data-gate-title]").hidden = true;
      root.querySelector(".hero--gate").classList.add("hero--question");
      form.hidden = false;
      form.querySelector("input").focus();
    };
    enter.addEventListener("click", revealQuestion);
    if (showQuestionImmediately) revealQuestion();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = form.querySelector("input:checked");
      (selected && selected.value === data.access.answer ? successDialog : errorDialog).showModal();
    });

    root.querySelector("[data-retry]").addEventListener("click", () => {
      errorDialog.close();
      form.reset();
      form.querySelector("input").focus();
    });

    root.querySelector("[data-continue]").addEventListener("click", () => {
      successDialog.close();
      openAdventure();
    });
  }

  function showPassword() {
    shell.classList.add("site-shell--terminal");
    root.replaceChildren();
    root.append(document.querySelector("#password-template").content.cloneNode(true));
    const form = root.querySelector("[data-password-form]");
    const input = root.querySelector("#access-password");
    const feedback = root.querySelector("[data-password-feedback]");
    input.focus();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (input.value === data.terminal.password) {
        feedback.textContent = "ACCESO CONCEDIDO";
        shell.classList.add("site-shell--unlocking");
        window.setTimeout(showLoading, 700);
      } else {
        feedback.textContent = "ACCESO DENEGADO";
        form.reset();
        input.focus();
      }
    });
  }

  showPassword();
})();

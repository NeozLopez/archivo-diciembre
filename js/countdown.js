window.Countdown = (() => {
  const units = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000 };
  function remaining(target) {
    let ms = Math.max(0, new Date(target).getTime() - Date.now());
    return Object.fromEntries(Object.entries(units).map(([name, value]) => {
      const amount = Math.floor(ms / value); ms -= amount * value; return [name, String(amount).padStart(2, "0")];
    }));
  }
  function render(target, root) {
    const update = () => {
      const time = remaining(target);
      Object.entries(time).forEach(([unit, value]) => root.querySelector(`[data-${unit}]`).textContent = value);
    };
    update(); return window.setInterval(update, 1000);
  }
  return { render };
})();

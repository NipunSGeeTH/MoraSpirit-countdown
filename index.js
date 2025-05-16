function updateCountdown() {
  const eventDateStr = localStorage.getItem("spiritx_event_date");
  const countdownEl = document.getElementById("countdown");
  const messageEl = document.getElementById("message");

  if (!eventDateStr) {
    countdownEl.textContent = "--:--:--:--";
    messageEl.textContent = "Event date not configured. Go to config.html. and set date ";
    return;
  }

  const target = new Date(eventDateStr).getTime();




  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    countdownEl.textContent = "00:00:00:00";
    messageEl.textContent = "🎉 SpiritX 2026 has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const milisecons = Math.floor((diff ) % 60);
  countdownEl.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s ${pad(milisecons)}ms`;
  messageEl.textContent = "";
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

setInterval(updateCountdown, 50);
updateCountdown();

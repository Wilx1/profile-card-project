document.getElementById("user-time").textContent = Date.now();

setInterval(() => {
  document.getElementById("user-time").textContent = Date.now();
}, 1000);

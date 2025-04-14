let energy = 100;

window.addEventListener("load", () => {
  const oshi = localStorage.getItem("oshi") || "未選択";
  const base = localStorage.getItem("baseSong") || "未設定";
  const storedEnergy = parseInt(localStorage.getItem("energy")) || 100;
  energy = Math.max(0, storedEnergy - 1);
  localStorage.setItem("energy", energy);

  const statusBox = document.getElementById("statusBox");
  if (statusBox) {
    statusBox.innerHTML = `🧑‍🚀 推し：${oshi} ｜ 🎵 拠点：${base} ｜ 🔋 ENERGY：${energy}%`;
  }
});

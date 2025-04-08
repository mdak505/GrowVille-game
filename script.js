let coins = 0;
document.getElementById("coins").innerText = coins;

function plantCrop(plot) {
  if (plot.classList.contains("locked") || plot.classList.contains("growing")) return;
  if (plot.classList.contains("ready")) {
    harvestCrop(plot);
    return;
  }

  plot.classList.add("growing");
  plot.innerText = "🌱";

  setTimeout(() => {
    plot.classList.remove("growing");
    plot.classList.add("ready");
    plot.innerText = "🌾";
  }, 5000); // 5 seconds grow time
}

function harvestCrop(plot) {
  plot.classList.remove("ready");
  plot.innerText = "";
  coins += 5;
  document.getElementById("coins").innerText = coins;
}

function unlockPlot(plot) {
  if (plot.classList.contains("locked") && coins >= 10) {
    plot.classList.remove("locked");
    plot.innerText = "";
    coins -= 10;
    document.getElementById("coins").innerText = coins;
    alert("🎉 New field unlocked!");
  } else {
    alert("❌ Need 10 coins to unlock this field!");
  }
}

function resetGame() {
  location.reload();
}

"use strict";
const input = document.getElementById("dateInput");
const text = document.getElementById("dateText");

const wdayJa = ["日", "月", "火", "水", "木", "金", "土"];

function fmt(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const w = wdayJa[d.getDay()];
  return `${y}年${m}月${day}日(${w})`;
}

// 初期値（今日）
const today = new Date();
input.valueAsDate = today;
text.textContent = fmt(today);
input.addEventListener("click", () => {
  if (typeof input.showPicker === "function") {
    input.showPicker();
  } else {
    input.focus();
    input.click();
  }
});
// 変更時（ユーザーが日付を選んだら更新）
input.addEventListener("change", () => {
  const d = input.valueAsDate || new Date(input.value);
  if (d instanceof Date && !isNaN(d)) {
    text.textContent = fmt(d);
  }
});

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
  menuButton.textContent = isOpen ? "×" : "☰";
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "เปิดเมนู");
    if (menuButton) menuButton.textContent = "☰";
  });
});

const totalInput = document.querySelector("#total-credit");
const coreInput = document.querySelector("#core-credit");
const totalOutput = document.querySelector("#total-value");
const coreOutput = document.querySelector("#core-value");
const result = document.querySelector("#credit-result");

function updateCreditResult() {
  const total = Number(totalInput.value);
  const core = Number(coreInput.value);
  totalOutput.value = total;
  totalOutput.textContent = total;
  coreOutput.value = core;
  coreOutput.textContent = core;

  const passed = total >= 576 && core >= 60;
  result.classList.toggle("is-short", !passed);
  result.querySelector(".result-icon").textContent = passed ? "✓" : "↗";
  result.querySelector("b").textContent = passed ? "ผ่านเกณฑ์ตัวอย่าง" : "ยังต้องเก็บคะแนนเพิ่ม";

  if (total < 576 && core < 60) {
    result.querySelector("small").textContent = "คะแนนรวมและวิชาหลักยังไม่ถึงเกณฑ์";
  } else if (total < 576) {
    result.querySelector("small").textContent = `ต้องการอีก ${576 - total} หน่วยกิตเพื่อให้ถึงคะแนนรวมขั้นต่ำ`;
  } else if (core < 60) {
    result.querySelector("small").textContent = `มีวิชาหลักที่ต้องเพิ่มอีก ${60 - core} หน่วยกิต`;
  } else {
    result.querySelector("small").textContent = "พร้อมก้าวสู่ชั้นปีถัดไป";
  }
}

totalInput?.addEventListener("input", updateCreditResult);
coreInput?.addEventListener("input", updateCreditResult);
updateCreditResult();


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
const totalOutput = document.querySelector("#total-value");
const result = document.querySelector("#credit-result");
const passingCredits = 68;

function updateCreditResult() {
  if (!totalInput || !totalOutput || !result) return;
  const total = Number(totalInput.value);
  totalOutput.value = total;
  totalOutput.textContent = total;

  const passed = total >= passingCredits;
  result.classList.toggle("is-short", !passed);
  result.querySelector(".result-icon").textContent = passed ? "✓" : "↗";
  result.querySelector("b").textContent = passed ? "ผ่านเกณฑ์ตัวอย่าง" : "ยังต้องเก็บหน่วยกิตเพิ่ม";
  result.querySelector("small").textContent = passed
    ? "พร้อมก้าวสู่ชั้นปีถัดไป"
    : `ต้องการอีก ${passingCredits - total} หน่วยกิตเพื่อให้ถึงเกณฑ์เลื่อนชั้น`;
}

totalInput?.addEventListener("input", updateCreditResult);
updateCreditResult();


/* js/app.js - 互動邏輯 */

/* =====================
   i18n 多語字典 (可擴充)
===================== */
const I18N = {
  zh: {
    siteTitle: "九萬啟插爆聯盟系統",
    btnAdmin: "管理員設定",
    navSignup: "填寫資料",
    navDetail: "詳細資訊",
    navAdmin: "管理員設定",
    signupTitle: "填寫遊戲資料",
    fPass: "密碼：",
    fUID: "遊戲 UID (數字)：",
    fName: "遊戲暱稱 (Game ID)：",
    fTeam: "分盟編號 (your number)：",
    fWeapon: "一專兵種 (Exclusive Weapons)：",
    fMust: "必選中想玩兵種嗎?：",
    btnSubmit: "提交資料",
    weaponStat: "武器使用統計",
    detailTitle: "詳細清單",
    adminTitle: "管理員設定",
    adminIntro: "此處可新增後端串接（Google Sheets、分盟邏輯等）。暫為示意。"
  },
  en: {
    siteTitle: "Penetration Alliance Manager",
    btnAdmin: "Admin Panel",
    navSignup: "Signup",
    navDetail: "Details",
    navAdmin: "Admin",
    signupTitle: "Player Form",
    fPass: "Password:",
    fUID: "Game UID (number):",
    fName: "Nickname (Game ID):",
    fTeam: "Team no. (your number):",
    fWeapon: "Exclusive Weapons:",
    fMust: "Will you definitely choose it?:",
    btnSubmit: "Submit",
    weaponStat: "Weapon Stats",
    detailTitle: "Details List",
    adminTitle: "Admin Settings",
    adminIntro: "Place for backend integration."
  }
};

/* =====================
   常數 & 本地存取設定
===================== */
const ENTRY_CODE = "0506";      // 填寫資料密碼
const ADMIN_CODE = "基佬閣";    // 管理員驗證碼
const STORAGE_KEY = "clownData"; // LocalStorage key

/* =====================
   DOM 快取
===================== */
const langSel = document.getElementById("langSwitch");
const navButtons = document.querySelectorAll(".nav-btn");

/* =====================
   語言切換
===================== */
langSel.addEventListener("change", applyLang);
applyLang(); // 初始化

function applyLang() {
  const lang = langSel.value;
  document.querySelectorAll("[data-l10n]").forEach(el => {
    const k = el.dataset.l10n;
    if (I18N[lang] && I18N[lang][k]) el.textContent = I18N[lang][k];
  });
}

/* =====================
   Tab 切換
===================== */
navButtons.forEach(btn => btn.addEventListener("click", () => switchTab(btn)));
function switchTab(btn) {
  navButtons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(btn.dataset.target).classList.add("active");
}

/* =====================
   管理員驗證
===================== */
document.getElementById("adminBtn").addEventListener("click", () => {
  const code = prompt("請輸入管理員驗證碼：");
  if (code !== ADMIN_CODE) return alert("驗證失敗");
  // 顯示 Admin Tab
  const adminTab = document.getElementById("adminTabBtn");
  adminTab.style.display = "block";
  adminTab.click();
});

/* =====================
   提交報名資料
===================== */
function submitSignup() {
  if (document.getElementById("signupPass").value !== ENTRY_CODE) {
    alert("密碼錯誤！");
    return;
  }
  const data = {
    uid: document.getElementById("playerUID").value.trim(),
    name: document.getElementById("playerName").value.trim(),
    team: document.getElementById("teamSelect").value,
    weapon: document.getElementById("weaponSelect").value,
    must: document.getElementById("mustSelect").value
  };
  if (!data.uid || !data.name || !data.team || !data.weapon || !data.must) {
    alert("請完整填寫表單");
    return;
  }
  const store = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  store.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  alert("提交成功！");
  document.getElementById("signupForm").reset();
  refreshDisplay();
}

/* =====================
   畫面刷新 (統計 & 表格)
===================== */
function refreshDisplay() {
  const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const listA = list.filter(x => x.team === "1");
  const listB = list.filter(x => x.team === "2");
  document.getElementById("countA").textContent = listA.length;
  document.getElementById("countB").textContent = listB.length;
  // 未填 (示例：A01-A40 / B01-B40)
  fillUnfilled("A", listA, 40);
  fillUnfilled("B", listB, 40);
  // 詳細表格
  fillTable("tableA", listA);
  fillTable("tableB", listB);
  // 武器統計
  fillStats("statA", listA);
  fillStats("statB", listB);
}

function fillUnfilled(prefix, arr, total) {
  const container = document.getElementById(`unfilled${prefix}`);
  container.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const code = `${prefix}${i.toString().padStart(2, "0")}`;
    if (!arr.find(x => x.team === (prefix === "A" ? "1" : "2") && x.code === code)) {
      const li = document.createElement("li");
      li.textContent = code;
      container.appendChild(li);
    }
  }
}
function fillTable(id, arr) {
  const tbody = document.querySelector(`#${id} tbody`);
  tbody.innerHTML = "";
  arr.forEach((d, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${idx + 1}</td><td>${d.uid}</td><td>${d.name}</td><td>${d.weapon}</td><td>${d.must}</td>`;
    tbody.appendChild(tr);
  });
}
function fillStats(id, arr) {
  const stat = {};
  arr.forEach(d => stat[d.weapon] = (stat[d.weapon] || 0) + 1);
  const tbody = document.querySelector(`#${id} tbody`);
  tbody.innerHTML = "";
  Object.entries(stat).forEach(([w, c]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${w}</td><td>${c}</td><td></td>`;
    tbody.appendChild(tr);
  });
}
// 初始載入
refreshDisplay();

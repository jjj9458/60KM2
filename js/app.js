/* =========================================================
   i18n: 多語字典
========================================================= */
const I18N = {
  zh: {
    siteTitle: "九萬啟聯盟系統 – 插爆提供",
    navSignup: "小丑報名",
    navWeapon: "專武登錄",
    navAdmin : "管理面板",
    signupTitle: "小丑們報名表",
    weaponTitle: "小丑們專武表",
    adminTitle : "管理員設定 / 座標圖",
    fPass : "密碼：",
    fUID  : "遊戲 UID：",
    fName : "暱稱：",
    fRank : "排位：",
    fPay  : "是否能課金：",
    fGoal : "一專兵種 / 目標：",
    fRef  : "介紹人：",
    fLang : "語言：",
    btnSubmit: "提交",
    fCoords: "座標 (X, Y)：",
    fTroop : "兵種：",
    fWeapon: "專武名稱：",
    adminSettings: "設定表單",
    adminMap: "座標圖",
    setStart: "開局日期：",
    setEnd  : "報名截止日：",
    setMax  : "可進場人數：",
    setQuota1: "劍盾 / 地鼠名額：",
    btnSave : "儲存設定",
    btnToggle: "顯示/隱藏詳細資訊"
  },
  en: {
    siteTitle: "Clown Alliance Manager",
    navSignup: "Signup",
    navWeapon: "Weapon List",
    navAdmin : "Admin",
    signupTitle: "Players Signup",
    weaponTitle: "Weapon Registration",
    adminTitle : "Admin Settings / Map",
    fPass : "Password:",
    fUID  : "Game UID:",
    fName : "Nickname:",
    fRank : "Rank:",
    fPay  : "Pay to play:",
    fGoal : "Main troop / target:",
    fRef  : "Referrer:",
    fLang : "Language:",
    btnSubmit: "Submit",
    fCoords: "Coords (X, Y):",
    fTroop : "Troop type:",
    fWeapon: "Weapon name:",
    adminSettings: "Settings Form",
    adminMap: "Map",
    setStart: "Start date:",
    setEnd  : "Signup deadline:",
    setMax  : "Max players:",
    setQuota1: "Shield / Mole quota:",
    btnSave : "Save settings",
    btnToggle: "Toggle details"
  }
};

/* =========================================================
   Tab 切換
   功能：於 nav 按鈕與 section 之間切換顯示
========================================================= */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.target, btn));
});

/**
 * 切換主要頁籤
 * @param {string} target - 目標 section id
 * @param {HTMLElement} btn - 被點擊的按鈕
 */
function switchTab(target, btn) {
  document.querySelectorAll(".tab-content").forEach(s => s.classList.remove("active"));
  document.getElementById(target).classList.add("active");
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

/* =========================================================
   語言切換
   功能：依 select#langSwitch 變動替換所有 data-l10n 文字
========================================================= */
const langSelect = document.getElementById("langSwitch");
langSelect.addEventListener("change", applyLanguage);
applyLanguage(); // 預設套用

function applyLanguage() {
  const lang = langSelect.value;
  document.querySelectorAll("[data-l10n]").forEach(el => {
    const key = el.getAttribute("data-l10n");
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
}

/* =========================================================
   常數：前端使用之簡易密碼
   （⚠️ 靜態網頁無法完全防護，僅阻擋一般訪客）
========================================================= */
const SIGNUP_CODE  = "signup123";
const WEAPON_CODE  = "weapon123";
const ADMIN_CODE   = "admin123";

/* =========================================================
   AJAX 端點設定 (Google Apps Script Web App URL)
   待完成：將 'YOUR_SCRIPT_URL' 替換為實際部署網址
========================================================= */
const SCRIPT_URL = "YOUR_SCRIPT_URL";

/* =========================================================
   提交報名表
========================================================= */
/**
 * 讀取報名表欄位並送至後端
 */
async function submitSignup() {
  if (document.getElementById("signupPass").value !== SIGNUP_CODE) {
    alert("密碼錯誤！");
    return;
  }
  const data = {
    type     : "signup",
    uid      : document.getElementById("playerUID").value,
    nickname : document.getElementById("playerName").value,
    rank     : document.getElementById("playerRank").value,
    canPay   : document.getElementById("canPay").checked,
    goal     : document.getElementById("mainGoal").value,
    referrer : document.getElementById("referrer").value,
    language : document.getElementById("langSelect").value
  };
  try {
    /* TODO: 替換 SCRIPT_URL 後取消註解
    const res = await fetch(SCRIPT_URL, {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(data)
    });
    const rst = await res.json();
    if (rst.result !== "success") throw new Error(rst);
    */
    alert("報名成功！（示範模式）");
    document.getElementById("signupForm").reset();
  } catch (err) {
    console.error(err);
    alert("提交失敗，請稍後再試");
  }
}

/* =========================================================
   提交專武資料
========================================================= */
async function submitWeapon() {
  if (document.getElementById("weaponPass").value !== WEAPON_CODE) {
    alert("密碼錯誤！");
    return;
  }
  const data = {
    type   : "weapon",
    uid    : document.getElementById("weaponUID").value,
    x      : +document.getElementById("posX").value,
    y      : +document.getElementById("posY").value,
    troop  : document.getElementById("troopType").value,
    weapon : document.getElementById("weaponName").value
  };
  try {
    /* TODO: 串接 GAS
    const res = await fetch(SCRIPT_URL, {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(data)
    });
    const rst = await res.json();
    if (rst.result !== "success") throw new Error(rst);
    */
    alert("提交成功！（示範模式）");
    document.getElementById("weaponForm").reset();
  } catch (err) {
    console.error(err);
    alert("提交失敗，請稍後再試");
  }
}

/* =========================================================
   管理員：儲存設定
========================================================= */
async function saveSettings() {
  if (!confirm("確定儲存設定？")) return;
  const data = {
    type      : "settings",
    startDate : document.getElementById("startDate").value,
    endDate   : document.getElementById("endDate").value,
    maxPlayers: +document.getElementById("maxPlayers").value,
    quotaSD   : +document.getElementById("quotaSD").value
  };
  try {
    /* TODO: 串接 GAS
    await fetch(SCRIPT_URL, {...});
    */
    alert("設定已儲存！（示範模式）");
  } catch (err) {
    console.error(err);
    alert("儲存失敗");
  }
}

/* =========================================================
   地圖：標記與私密資訊切換
========================================================= */
/**
 * 在地圖上插入一個標記 (示範)
 * @param {number} x - X 座標
 * @param {number} y - Y 座標
 * @param {string} color - 顏色
 * @param {string} title - 滑鼠提示文字
 */
function addMarker(x, y, color = "red", title = "") {
  const map = document.getElementById("mapWrapper");
  const m = document.createElement("div");
  m.className = "map-marker";
  m.style.left = x + "px";
  m.style.top  = y + "px";
  m.style.background = color;
  m.title = title;
  map.appendChild(m);
}

// DEMO：初始化幾個測試標記
addMarker(50, 120, "blue", "測試玩家 A");
addMarker(300, 200, "purple", "測試玩家 B");

/**
 * 切換顯示 .private-info
 */
function togglePrivateInfo() {
  const pwd = prompt("請輸入管理密碼：");
  if (pwd !== ADMIN_CODE) return alert("密碼錯誤");
  document.querySelectorAll(".private-info").forEach(el => {
    el.style.display = el.style.display === "inline" ? "none" : "inline";
  });
}

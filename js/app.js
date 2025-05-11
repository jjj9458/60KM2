/* ===== I18N (簡略) ===== */
const I18N={
  zh:{
    siteTitle:"九萬啟插爆聯盟系統",
    navSignup:"報名",navWeapon:"專武登記",navDetail:"詳細資料",navAdmin:"管理員設定",btnAdmin:"管理員設定",
    posXPlaceholder:"(限制0-599)",posYPlaceholder:"(限制0-599)",
    signupTitle:"報名表單",
    uidLabel:"遊戲 UID",uidPlaceholder:"(限正整數)",
    nameLabel:"遊戲暱稱",namePlaceholder:"輸入遊戲暱稱",
    rankLabel:"段位",rankTierDefault:"--段位--",rankLevelDefault:"--小段--",
    rankNone:"無段位",rankIron:"黑鐵",rankBronze:"青銅",rankSilver:"白銀",
    rankGold:"黃金",rankPlatinum:"鉑金",rankDiamond:"鑽石",rankMaster:"大師",rankKing:"王者",
    payLabel:"是否能課金選專",payDefault:"--請選擇--",payYes:"是",payNo:"否",
    introLabel:"身分",
    introDefault:"--請選擇--",
    introNewbie:"新人",introRookie:"菜基",introDumb:"傻屌",introCore:"核心",
    introNameLabel:"介紹人名稱",introNamePlaceholder:"輸入名稱",
    langLabel:"語言",langZh:"中文",langEn:"English",
    btnSubmit:"提交資料",
    weaponTitle:"專武登記",
    weaponUidLabel:"遊戲 UID",
    posXLabel:"X 座標",posYLabel:"Y 座標",
    troopLabel:"預計玩哪類兵",troopDefault:"請選擇兵種",
    troopSpear:"槍",troopBow:"弓",troopTank:"坦",troopCavalry:"騎",troopSpecial:"特殊",
    specialLabel:"選擇特殊兵種",specialDefault:"請選擇特殊兵種",
    specialSwordshield:"劍盾",specialMole:"地鼠",specialCookie:"大餅",
    weaponGridTitle:"融專兵種",
    detailTitle:"詳細資料",
    unfilledATitle:"A盟誰還沒寫",unfilledBTitle:"B盟誰還沒寫",
    statATitle:"A 統計",statBTitle:"B 統計",
    listATitle:"A 詳細清單",listBTitle:"B 詳細清單",
    unfilledCTitle:"C盟誰還沒寫", // 新增
    statCTitle:"C 統計",         // 新增
    listCTitle:"C 詳細清單",     // 新增
    colWeapon:"武器",colCount:"次數",colSuspicious:"可疑",
    colUid:"UID",colName:"暱稱",colRank:"排位",colPay:"課金",colPos:"座標",colTroop:"兵種",
    colIntro:"身分",colActions:"操作",
    adminTitle:"管理員設定",
    dataManageTitle:"資料管理",
    btnExport:"匯出資料",btnImport:"匯入資料",btnClear:"清除資料",
    playerManageTitle:"玩家管理",
    searchPlayerPlaceholder:"搜尋 UID 或暱稱...",
    weaponManageTitle:"專武管理",
    searchWeaponPlaceholder:"搜尋 UID 或武器...",
    copyright:"© 2025 插爆提供 — Taiwan is a country.",
    btnEdit:"編輯",btnDelete:"刪除",
    msgConfirmDelete:"確定要刪除嗎？",
    msgSuccess:"操作成功！",
    msgError:"操作失敗！",
    msgInvalidCode:"驗證碼錯誤！",
    msgAdminRequired:"需要管理員權限！",
    verifyTitle:"請輸入驗證碼",
    verifyPlaceholder:"輸入驗證碼...",
    btnVerify:"確認",
    langPrefix:"語言：",
    signupList: "報名者列表",
    btnModify: "修改",
    btnDelete: "刪除",
    msgDeleteConfirm: "請輸入 UID 確認刪除：",
    msgModified: "資料已修改！",
    msgDeleted: "資料已刪除！",
    viewData: "查看資料",
    teamResult: "團隊結果",
    btnAutoAssign: "自動分配",
    btnCopyResult: "複製結果",
    // 新增 alert 相關訊息
    msgSignupSuccess: "報名成功！",
    msgWeaponRegSuccess: "專武登記成功！",
    msgDataImportSuccess: "資料匯入成功！",
    msgInvalidDataFormat: "無效的資料格式！",
    msgFileReadError: "檔案讀取失敗！",
    msgDataCleared: "資料已清除！",
    msgNicknameMinLength: "暱稱至少需要 2 個字！",
    msgPlayerDataUpdated: "玩家資料已更新！",
    msgCoordRangeError: "座標必須是0-599之間的數字，格式: x,y",
    msgWeaponDataUpdated: "專武資料已更新！",
    msgSignupEndDateError: "報名截止日不能晚於開局日期！",
    msgValidDateError: "請設定有效的日期！",
    msgSettingsSaved: "設定已儲存！",
    msgCopiedToClipboard: "已複製到剪貼簿！",
    msgNoResultToCopy: "沒有結果可複製！請先執行自動分配。",
    msgPageDataRefreshed: "頁面資料已重新整理！",
    msgSignupEndDateEarlier: "報名截止日必須至少早於開局日期一天。已自動為您調整。", // 新增
    weaponGridDisplay: { // 新增：武器網格顯示翻譯 (中文到中文)
      categories: {
        "特殊": "特殊",
        "盾兵": "盾兵",
        "步兵": "步兵",
        "弓兵": "弓兵",
        "騎兵": "騎兵"
      },
      weapons: {
        "我是地鼠號": "地鼠", "劍盾": "劍盾", "沒想法": "沒想法", "大餅盟主": "大餅盟主",
        "重盾": "重盾", "槍盾": "槍盾", "錘盾": "錘盾", "刀盾": "刀盾",
        "長槍": "長槍", "長矛": "長矛", "長戈": "長戈", "陌刀": "陌刀", "長劍": "長劍", "雙槍": "雙槍",
        "長弓": "長弓", "連弩": "連弩", "毒弓": "毒弓", "獵人": "獵人", "重弩": "重弩", "火弓": "火弓",
        "劍騎": "劍騎", "槍騎": "槍騎", "刀騎": "刀騎", "重騎": "重騎", "弓騎": "弓騎", "斧騎": "斧騎"
      }
    },
    rankDisplay: {
      none: "無段位",
      iron: "黑鐵",
      bronze: "青銅",
      silver: "白銀",
      gold: "黃金",
      platinum: "鉑金",
      diamond: "鑽石",
      master: "大師",
      king: "王者"
    },
    introDisplay: {
      newbie: "新人",
      rookie: "菜基",
      dumb: "傻屌",
      core: "核心"
    },
    weapons: {
      special: ["I'm excavator", "SNS", "None sense what u want to play", "Big Pie Leader"],
      shield: ["Heavy shield", "Spear shield", "Hammer shield", "saber&shield Soldier"],
      infantry: ["Longsperman", "lancer", "Dagger-axe Soldier", "Modao", "Long Swordsman", "Twin spear"],
      archer: ["Long bow", "Crossbow man", "Toxibowman", "Hunter", "Heavy crossbowman", "Fire Bowman"],
      cavalry: ["Sword cav", "Spear Cavalry", "Broadsword cav", "Heavy cav", "Bow cav", "Axe cav"]
    },
    // 新增地圖相關中文
    navMap: "地圖",
    mapTitle: "地圖檢視",
    filterDirection: "方位：",
    dirAll: "全",
    dirBL: "左下",
    dirTL: "左上",
    dirBR: "右下",
    dirTR: "右上",
    filterGroup: "分組：",
    groupA: "A",
    groupB: "B",
    groupC: "C",
    filterInfo: "顯示資訊：",
    infoCoordsLabel: "座標",
    infoNameLabel: "暱稱",
    infoWeaponLabel: "專武",
    infoIdentityLabel: "身分",
    mapPlaceholder: "地圖區域載入中或無資料...",
    zoomInTitle: "放大地圖",
    zoomOutTitle: "縮小地圖",
    panResetTitle: "重置視圖",
    hoverHintMap: "滑鼠移至點位或點擊以查看詳細資料。",
    teamAssignmentTitle: "團隊自動分配", // 新增
    adminScribe: "文書", // 新增
    adminCommander: "指揮", // 新增
    internSuffix: "(實習)", // 新增
    msgRankLevelRequired: "請選擇小段位！", // 新增 for #1
    msgSpecialTypeRequired: "請選擇特殊兵種！", // 新增 for #3
    msgTroopOrWeaponRequired: "「預計玩哪類兵」和「融專兵種」至少需填寫一項！", // 新增 for #3
    msgPayRequired: "請選擇是否能課金選專！", // 新增 for 報名表單
    msgIntroRequired: "請選擇您的身分！", // 新增 for 報名表單
    msgWeaponUidRequired: "請輸入專武登記的遊戲 UID！", // 新增 for 專武登記
    msgWeaponUidInvalid: "專武登記的遊戲 UID 必須是正整數！", // 新增 for 專武登記
    msgPosXRequired: "請輸入 X 座標！", // 新增 for 專武登記
    msgPosYRequired: "請輸入 Y 座標！" // 新增 for 專武登記
  },
  en:{
    siteTitle:"Clown Alliance",
    navSignup:"Signup",navWeapon:"Weapon",navDetail:"Details",navAdmin:"Admin",btnAdmin:"Admin",
    posXPlaceholder:"(Limit 0-599)",posYPlaceholder:"(Limit 0-599)",
    signupTitle:"Signup Form",
    uidLabel:"Game UID",uidPlaceholder:"(Positive integer only)",
    nameLabel:"Game Nickname",namePlaceholder:"Enter your nickname",
    rankLabel:"Rank",rankTierDefault:"--Tier--",rankLevelDefault:"--Level--",
    rankNone:"None",rankIron:"Iron",rankBronze:"Bronze",rankSilver:"Silver",
    rankGold:"Gold",rankPlatinum:"Platinum",rankDiamond:"Diamond",rankMaster:"Master",rankKing:"King",
    payLabel:"Can Pay for Weapon",payDefault:"--Select--",payYes:"Yes",payNo:"No",
    introLabel:"Identity",
    introDefault:"--Select--",
    introNewbie:"Newbie",introRookie:"Rookie",introDumb:"Dumb",introCore:"Core",
    introNameLabel:"Referrer Name",introNamePlaceholder:"Enter name",
    langLabel:"Language",langZh:"中文",langEn:"English",
    btnSubmit:"Submit",
    weaponTitle:"Weapon Registration",
    weaponUidLabel:"Game UID",
    posXLabel:"X Coordinate",posYLabel:"Y Coordinate",
    troopLabel:"Troop Type",troopDefault:"Select troop type",
    troopSpear:"Spear",troopBow:"Bow",troopTank:"Tank",troopCavalry:"Cavalry",troopSpecial:"Special",
    specialLabel:"Special Type",specialDefault:"Select special type",
    specialSwordshield:"Sword & Shield",specialMole:"excavator",specialCookie:"Cookie Leader",
    weaponGridTitle:"Fusion Weapons",
    detailTitle:"Details",
    unfilledATitle:"Team A Unfilled",unfilledBTitle:"Team B Unfilled",
    statATitle:"Team A Stats",statBTitle:"Team B Stats",
    listATitle:"Team A List",listBTitle:"Team B List",
    unfilledCTitle:"Team C Unfilled", // 新增
    statCTitle:"Team C Stats",         // 新增
    listCTitle:"Team C List",         // 新增
    colWeapon:"Weapon",colCount:"Count",colSuspicious:"Suspicious",
    colUid:"UID",colName:"Name",colRank:"Rank",colPay:"Pay",colPos:"Position",colTroop:"Troop",
    colIntro:"Identity",colActions:"Actions",
    adminTitle:"Admin Settings",
    dataManageTitle:"Data Management",
    btnExport:"Export",btnImport:"Import",btnClear:"Clear",
    playerManageTitle:"Player Management",
    searchPlayerPlaceholder:"Search UID or name...",
    weaponManageTitle:"Weapon Management",
    searchWeaponPlaceholder:"Search UID or weapon...",
    copyright:"© 2025 Clown Alliance — Taiwan is a country.",
    btnEdit:"Edit",btnDelete:"Delete",
    msgConfirmDelete:"Are you sure to delete?",
    msgSuccess:"Operation successful!",
    msgError:"Operation failed!",
    msgInvalidCode:"Invalid code!",
    msgAdminRequired:"Admin permission required!",
    verifyTitle:"Enter Verification Code",
    verifyPlaceholder:"Enter code...",
    btnVerify:"Verify",
    langPrefix:"Language: ",
    signupList: "Signup List",
    btnModify: "Modify",
    btnDelete: "Delete",
    msgDeleteConfirm: "Enter UID to confirm deletion:",
    msgModified: "Data modified!",
    msgDeleted: "Data deleted!",
    viewData: "View Data",
    teamResult: "Team Result",
    btnAutoAssign: "Auto Assign",
    btnCopyResult: "Copy Results",
    // 新增 alert 相關訊息的英文翻譯
    msgSignupSuccess: "Signup successful!",
    msgWeaponRegSuccess: "Weapon registration successful!",
    msgDataImportSuccess: "Data imported successfully!",
    msgInvalidDataFormat: "Invalid data format!",
    msgFileReadError: "File read error!",
    msgDataCleared: "Data cleared!",
    msgNicknameMinLength: "Nickname must be at least 2 characters long!",
    msgPlayerDataUpdated: "Player data updated!",
    msgCoordRangeError: "Coordinates must be numbers between 0-599, format: x,y",
    msgWeaponDataUpdated: "Weapon data updated!",
    msgSignupEndDateError: "Signup end date cannot be later than game start date!",
    msgValidDateError: "Please set valid dates!",
    msgSettingsSaved: "Settings saved!",
    msgCopiedToClipboard: "Copied to clipboard!",
    msgNoResultToCopy: "No results to copy! Please run auto-assign first.",
    msgPageDataRefreshed: "Page data refreshed!",
    msgSignupEndDateEarlier: "Signup end date must be at least one day before the game start date. It has been adjusted for you.", // 新增
    weaponGridDisplay: { // 新增：武器網格顯示翻譯 (中文到英文)
      categories: {
        "特殊": "Special",
        "盾兵": "Shield",
        "步兵": "Spear",
        "弓兵": "Archers",
        "騎兵": "Cavalry"
      },
      weapons: {
        "我是地鼠號": "excavator", "劍盾": "Sword & Shield", "沒想法": "No Idea", "大餅盟主": "Cookie Leader",
        "重盾": "Heavy Shield", "槍盾": "Spear Shield", "錘盾": "Hammer Shield", "刀盾": "Saber Shield",
        "長槍": "Longspear", "長矛": "Lance", "長戈": "Dagger-axe", "陌刀": "Modao", "長劍": "Long Sword", "雙槍": "Twin Spears",
        "長弓": "Longbow", "連弩": "Repeating Crossbow", "毒弓": "Toxibow", "獵人": "Hunter", "重弩": "Improved Crossbow", "火弓": "Fire Bow",
        "劍騎": "Sword Cavalry", "槍騎": "Spear Cavalry", "刀騎": "Broadsword Cavalry", "重騎": "Heavy Cavalry", "弓騎": "Bow Cavalry", "斧騎": "Axe Cavalry"
      }
    },
    rankDisplay: {
      none: "None",
      iron: "Iron",
      bronze: "Bronze",
      silver: "Silver",
      gold: "Gold",
      platinum: "Platinum",
      diamond: "Diamond",
      master: "Master",
      king: "King"
    },
    introDisplay: {
      newbie: "Newbie",
      rookie: "Rookie",
      dumb: "Dumb",
      core: "Core"
    },
    weapons: {
      special: ["I'm excavator", "SNS", "None sense what u want to play", "Big Pie Leader"],
      shield: ["Heavy shield", "Spear shield", "Hammer shield", "saber&shield Soldier"],
      infantry: ["Longsperman", "lancer", "Dagger-axe Soldier", "Modao", "Long Swordsman", "Twin spear"],
      archer: ["Long bow", "Crossbow man", "Toxibowman", "Hunter", "Heavy crossbowman", "Fire Bowman"],
      cavalry: ["Sword cav", "Spear Cavalry", "Broadsword cav", "Heavy cav", "Bow cav", "Axe cav"]
    },
    // 新增地圖相關英文
    navMap: "Map",
    mapTitle: "Map View",
    filterDirection: "Direction:",
    dirAll: "All",
    dirBL: "BL",
    dirTL: "TL",
    dirBR: "BR",
    dirTR: "TR",
    filterGroup: "Group:",
    groupA: "A",
    groupB: "B",
    groupC: "C",
    filterInfo: "Show Info:",
    infoCoordsLabel: "Coords",
    infoNameLabel: "Name",
    infoWeaponLabel: "Weapon",
    infoIdentityLabel: "Identity",
    mapPlaceholder: "Map area loading or no data...",
    zoomInTitle: "Zoom In",
    zoomOutTitle: "Zoom Out",
    panResetTitle: "Reset View",
    hoverHintMap: "Hover or tap on a point to see details.",
    teamAssignmentTitle: "Team Auto Assignment", // 新增
    adminScribe: "Scribe", // 新增
    adminCommander: "Commander", // 新增
    internSuffix: "(Intern)", // 新增
    msgRankLevelRequired: "Please select a rank level!", // Add for #1
    msgSpecialTypeRequired: "Please select a special troop type!", // Add for #3
    msgTroopOrWeaponRequired: "Either 'Troop Type' or 'Fusion Weapon' must be selected!", // Add for #3
    msgPayRequired: "Please select if you can pay for a weapon!", // Add for Signup Form
    msgIntroRequired: "Please select your identity!", // Add for Signup Form
    msgWeaponUidRequired: "Please enter the Game UID for weapon registration!", // Add for Weapon Registration
    msgWeaponUidInvalid: "Game UID for weapon registration must be a positive integer!", // Add for Weapon Registration
    msgPosXRequired: "Please enter the X coordinate!", // Add for Weapon Registration
    msgPosYRequired: "Please enter the Y coordinate!" // Add for Weapon Registration
  }
};

// 包裝 header 中的語言選擇器
function wrapLangSelect() {
  const select = document.getElementById('langSwitch');
  if (!select) return; // 如果 select 不存在，直接返回
  const wrapper = document.createElement('div');
  wrapper.className = 'lang-select';
  
  const label = document.createElement('label');
  label.setAttribute('data-l10n', 'langPrefix');
  // 移除 label.textContent = I18N[select.value].langPrefix; 這一行，讓 applyLang 統一處理
  
  // 檢查 select.parentNode 是否存在
  if (select.parentNode) {
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(label);
  wrapper.appendChild(select);
  }
}

function applyLang(){
  const langSwitch = document.getElementById('langSwitch');
  if (!langSwitch) return; // 如果 langSwitch 不存在，直接返回

  const lang = langSwitch.value;
  document.querySelectorAll('[data-l10n]').forEach(el => {
    const key = el.dataset.l10n;
    const text = I18N[lang][key] || (el.tagName.toLowerCase() === 'label' ? el.childNodes[0]?.nodeValue?.trim() : el.textContent); // 保留原始文字作為備用

    if (el.tagName.toLowerCase() === 'label') {
      // 確保 label 的第一個子節點是文字節點，如果不是，則創建一個
      let textNode = el.childNodes[0];
      if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
        textNode = document.createTextNode('');
        el.insertBefore(textNode, el.firstChild);
      }
      textNode.nodeValue = text + (el.childNodes.length > 1 && el.childNodes[1].nodeName === "INPUT" ? "" : " "); // 如果後面緊跟 input/select，則不加空格
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-l10n-placeholder]').forEach(el=>{
    el.placeholder = I18N[lang][el.dataset.l10nPlaceholder]||el.placeholder;
  });
  
  // 確保導航欄上的文字正確更新
  document.getElementById('navDetail').textContent = I18N[lang].navDetail;
  
  // 更新團隊結果區域的按鈕文本
  const autoAssignBtn = document.getElementById('autoAssignTeams');
  const copyResultBtn = document.getElementById('copyTeamResult');
  
  if (autoAssignBtn) autoAssignBtn.textContent = I18N[lang].btnAutoAssign;
  if (copyResultBtn) copyResultBtn.textContent = I18N[lang].btnCopyResult;
  
  // 同步表單中的語言選擇器
  const formLangSwitch = document.getElementById('formLangSwitch');
  if (formLangSwitch && formLangSwitch.value !== lang) {
    formLangSwitch.value = lang;
  }
  
  // 更新 html lang 屬性，方便識別
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  
  // applyLang 後，手動更新一次顯隱狀態，因為 select 的 value 可能未變，但對應的 UI 需要刷新
  const introSelectAfterLang = document.getElementById('introSelect');
  const introNameBoxAfterLang = document.getElementById('introNameBox');
  if (introSelectAfterLang && introNameBoxAfterLang) {
    introNameBoxAfterLang.classList.toggle('hidden', introSelectAfterLang.value !== 'newbie');
  }
  const troopTypeSelectAfterLang = document.getElementById('troopType');
  const specialOptionsAfterLang = document.getElementById('specialOptions');
  if (troopTypeSelectAfterLang && specialOptionsAfterLang) {
    specialOptionsAfterLang.classList.toggle('hidden', troopTypeSelectAfterLang.value !== 'special');
  }
}

// 更新語言切換器事件以使用新的武器網格生成函數
document.getElementById('langSwitch').addEventListener('change', () => {
  const langValue = document.getElementById('langSwitch').value;
  
  // 同步表單中的語言選擇器
  const formLangSwitch = document.getElementById('formLangSwitch');
  if (formLangSwitch) {
    formLangSwitch.value = langValue;
  }
  
  applyLang();
  generateWeaponGrid(); // 使用新函數重新生成武器網格
  refreshSignupList();
  refresh();
});

// 表單內的語言選擇器也要同步
document.getElementById('formLangSwitch')?.addEventListener('change', () => {
  const langValue = document.getElementById('formLangSwitch').value;
  
  // 同步主語言選擇器
  document.getElementById('langSwitch').value = langValue;
  
  applyLang();
  generateWeaponGrid(); // 使用新函數重新生成武器網格
  refreshSignupList();
  refresh();
});

/* ===== 進站驗證碼模式 ===== */
let isAdmin = false;
let currentMode = ''; // signup, weapon, admin

const VALID_CODES = {
  'AAA': 'signup',
  'BBB': 'weapon',
  '基佬閣': 'admin'
};

async function verifyCode(code) {
  const langSwitch = document.getElementById('langSwitch');
  const currentLang = langSwitch ? langSwitch.value : 'zh';

  if (!code) {
    alert(I18N[currentLang].msgInvalidCode);
    return false;
  }

  const trimmedCode = code.trim(); // 修正: BBB 也需要 trim
  const accessMode = VALID_CODES[trimmedCode] || VALID_CODES[trimmedCode.toUpperCase()];

  
  if (accessMode) {
    localStorage.setItem('verifyStatus', 'passed');
    localStorage.setItem('accessMode', accessMode);
    currentMode = accessMode;
    isAdmin = (accessMode === 'admin');
    
    document.getElementById('verifyOverlay').style.display = 'none';

    const navSignup = document.getElementById('navSignup');
    const navWeapon = document.getElementById('navWeapon');
    const navDetail = document.getElementById('navDetail');
    const navAdmin = document.getElementById('navAdmin');
    const navMap = document.getElementById('navMap'); // 新增：獲取地圖按鈕
    
    // 重設所有導覽按鈕為隱藏
    [navSignup, navWeapon, navDetail, navAdmin, navMap].forEach(nav => { if(nav) nav.style.display = 'none'; });

    if (accessMode === 'signup') {
      if(navSignup) navSignup.style.display = 'inline-flex';
      // if(navMap) navMap.style.display = 'inline-flex'; // 移除：AAA 不顯示地圖
      if(navSignup) navSignup.click();
    } else if (accessMode === 'weapon') {
      if(navWeapon) navWeapon.style.display = 'inline-flex';
      if(navDetail) navDetail.style.display = 'inline-flex';
      if(navMap) navMap.style.display = 'inline-flex';
      if(navWeapon) navWeapon.click();
    } else if (accessMode === 'admin') {
      if(navSignup) navSignup.style.display = 'inline-flex';
      if(navWeapon) navWeapon.style.display = 'inline-flex';
      if(navDetail) navDetail.style.display = 'inline-flex';
      if(navAdmin) navAdmin.style.display = 'inline-flex';
      if(navMap) navMap.style.display = 'inline-flex';
      if(navAdmin) navAdmin.click(); 
    }
    
    // 最後再次確認 navMap 的可見性，以防被意外覆蓋 (此段邏輯現在由上面精確控制，可考慮移除或保留作為雙重保險)
    // const finalNavMap = document.getElementById('navMap');
    // if (currentMode && finalNavMap) { 
    // if ((currentMode === 'weapon' || currentMode === 'admin') && finalNavMap) { // 只在 weapon 和 admin 模式顯示地圖
    // finalNavMap.style.display = 'inline-flex'; 
    // }
    // }
    
    return true;
  } else {
    alert(I18N[currentLang].msgInvalidCode);
    localStorage.removeItem('verifyStatus');
    localStorage.removeItem('accessMode');
    document.getElementById('verifyCode').value = '';
    document.getElementById('verifyCode').focus();
    return false;
  }
}

// 初始化驗證碼輸入 (此函數在 DOMContentLoaded 中被調用，但這裡也保留一個引用以防萬一)
function initVerificationEvents() {
    const verifySubmitButton = document.getElementById('verifySubmit');
    const verifyCodeInput = document.getElementById('verifyCode');

    if (verifySubmitButton) {
        verifySubmitButton.addEventListener('click', async () => {
            const code = verifyCodeInput ? verifyCodeInput.value : '';
  await verifyCode(code);
});
    }

    if (verifyCodeInput) {
        verifyCodeInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
                await verifyCode(e.target.value);
  }
});
    }
}

/* ===== Header Admin 按鈕 ===== */
document.getElementById('adminBtn').addEventListener('click', async () => {
  const p = prompt("管理員驗證碼？");
  await verifyCode(p);
});

/* ===== Nav 切換 ===== */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.view').forEach(v => {
        const isActive = v.id === btn.dataset.target;
        v.classList.toggle('active', isActive);
    });
    
    const targetViewId = btn.dataset.target;

    // Always refresh basic lists and general stats
    refreshSignupList();
    updateSignupCount(); // Ensure count is updated on any view change that might follow a submit/delete

    if (targetViewId === 'admin') {
      if (isAdmin) {
        updateAdminSection(); // This loads settings, sets up listeners, and calls refreshAdminData()
        // refresh() might also be needed if admin view shows elements also managed by refresh() directly
        // but refreshAdminData() should be comprehensive for admin-specific team displays.
        // To ensure full consistency, calling refresh() too might be safer if there are shared non-team elements.
        refresh(); 
      } else {
        // If trying to access admin without rights, clear the view or show an error
        // This case should ideally be handled by the verification logic earlier
      }
    } else if (targetViewId === 'detail'){
      refresh(); // Standard refresh for detail page
      if (isAdmin) refreshAdminData(); // If admin is logged in, keep admin data potentially in sync too
    } else {
      // For other views like signup, weapon, map
      refresh(); // General refresh might be needed for stats or other elements
      // If admin is logged in, and these pages also show some data affected by admin settings, consider refreshAdminData
      if (isAdmin && (targetViewId === 'signup' || targetViewId === 'weapon')) {
         // If playerCount affects signup (e.g. max count) or weapon view in some way not covered by refresh()
         // refreshAdminData(); // Potentially, or ensure refresh() covers it.
      }
    }
    
    // Fallback refresh if no specific logic hit, or to ensure general state
    // refresh(); // This might be too broad now, handled by specific cases above.

    // Ensure specific elements like conditional inputs are correctly shown/hidden after view switch
    const introSelectElement = document.getElementById('introSelect');
    if (introSelectElement && document.getElementById('signup')?.classList.contains('active')) {
        introSelectElement.dispatchEvent(new Event('change'));
    }
    const troopTypeSelectElement = document.getElementById('troopType');
    if (troopTypeSelectElement && document.getElementById('weapon')?.classList.contains('active')) {
        troopTypeSelectElement.dispatchEvent(new Event('change'));
    }
  });
});

/* ===== 段位小段 ===== */
const tierSel=document.getElementById('rankTier'),levelSel=document.getElementById('rankLevel');
tierSel.addEventListener('change',()=>{
  const map={none:0,king:0,iron:2,bronze:3,silver:3,gold:3,platinum:4,diamond:5,master:3};
  const n=map[tierSel.value]||0;
  levelSel.innerHTML=''; // 清空小段下拉選單
  const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
  if(n===0){
    levelSel.disabled=true;
    levelSel.innerHTML='<option>-</option>'; // 如果大段位是 "無段位" 或 "王者"，小段顯示 "-"
  }else{
    levelSel.disabled=false;
    // 動態產生小段下拉選單的選項
    levelSel.innerHTML=`<option value="">${I18N[lang].rankLevelDefault}</option>`; // 使用 I18N 的翻譯
    for(let i=1;i<=n;i++)levelSel.innerHTML+=`<option value="${i}">${i}</option>`; // 數字部分暫時不變
  }
});

/* ===== 介紹人 顯示輸入框 ===== */
const introSel=document.getElementById('introSelect'),introBox=document.getElementById('introNameBox');
introSel.addEventListener('change',()=>{
  // 只有選擇「新人」時才顯示介紹人名稱輸入框
  introBox.classList.toggle('hidden', introSel.value !== 'newbie');
});

/* ===== 兵種選擇 ===== */
const troopSel = document.getElementById('troopType'),
      specialBox = document.getElementById('specialOptions');
troopSel.addEventListener('change', () =>
  // 只有選擇「特殊」時才顯示特殊兵種選項
  specialBox.classList.toggle('hidden', troopSel.value !== 'special'));

/* ===== 特殊兵種選項顯示邏輯 ===== */
function initTroopTypeSelection() {
  const troopType = document.getElementById('troopType');
  const specialOptions = document.getElementById('specialOptions');
  
  if (troopType && specialOptions) {
    // 移除可能重複的事件監聽器
    troopType.removeEventListener('change', handleTroopChange);
    troopType.addEventListener('change', handleTroopChange);
    
    // 初始狀態隱藏特殊兵種選項
    specialOptions.classList.add('hidden');
  }
  
  function handleTroopChange() {
    if (troopType.value === 'special') {
      specialOptions.classList.remove('hidden');
    } else {
      specialOptions.classList.add('hidden');
    }
  }
}

/* ===== Realtime Database ===== */
// 取得所有報名資料
async function getSignups() {
  if (!eventCode) {
    console.error("eventCode is not defined. Cannot get signups.");
    return []; // 或拋出錯誤
  }
  const snapshot = await db.ref(`events/${eventCode}/signups`).once('value');
  const data = snapshot.val() || {};
  return Object.entries(data).map(([uid, v]) => ({ uid: v.uid || uid, ...v })); // 確保 uid 被正確映射
}

// 儲存或更新單筆報名資料
async function saveSignup(obj, isNew) {
  if (!eventCode) {
    console.error("eventCode is not defined. Cannot save signup.");
    return; // 或拋出錯誤
  }
  const signupRef = db.ref(`events/${eventCode}/signups/${obj.uid}`);
  
  // 從 obj 解構，並提供預設值以避免 undefined 寫入資料庫
  const { 
    uid, name, tier, level, pay, intro, introName, expectSquad, // 報名表單的欄位
    posX, posY, troopType, specialType, weaponName // 專武表單的欄位
  } = obj;

  const dataToSave = {
    uid: uid,
    nickname: name || null, 
    rank: tier || null,
    rankMinor: level || '-', 
    payPower: pay || null,
    roleGroup: intro || null,
    // introName: introName || null, // 可選，如果需要在資料庫儲存
    lang: document.getElementById('formLangSwitch')?.value || null, // 從表單獲取語言，注意ID正確性
    expectSquad: expectSquad || null,
    posX: posX || null, 
    posY: posY || null,
    troopsNormal: troopType || null, 
    troopsSpecial: specialType || null,
    troopsMerge: weaponName || null,
    ts: firebase.database.ServerValue.TIMESTAMP
    // signupOrder 和 squadNo 會在下面處理或後續處理
  };

  if (isNew) {
    const counterRef = db.ref(`events/${eventCode}/counter`);
    const result = await counterRef.transaction(currentCount => {
      return (currentCount || 0) + 1;
    });
    dataToSave.signupOrder = result.snapshot.val();
    // 對於新用戶，清除可能從 obj 意外傳入的專武欄位，因為新報名時通常不應包含這些
    // (或者確保呼叫 saveSignup(obj, true) 時 obj 不包含專武欄位)
    // 這裡假設初次報名 obj 主要包含報名資訊
    await signupRef.set(dataToSave);
  } else {
    // 更新操作 (可能來自報名表單修改，或專武登記)
    const updates = {};
    // 顯式檢查並更新所有可能從任一表單傳入的欄位
    if (name !== undefined) updates.nickname = name; // 來自報名表單
    if (tier !== undefined) updates.rank = tier;       // 來自報名表單
    if (level !== undefined) updates.rankMinor = level || '-';// 來自報名表單
    if (pay !== undefined) updates.payPower = pay;     // 來自報名表單
    if (intro !== undefined) updates.roleGroup = intro;  // 來自報名表單
    if (expectSquad !== undefined) updates.expectSquad = expectSquad; // 來自報名表單
    // lang 通常在 dataToSave 中已處理，除非也允許單獨更新

    // 專武相關欄位
    if (posX !== undefined) updates.posX = posX;
    if (posY !== undefined) updates.posY = posY;
    if (troopType !== undefined) updates.troopsNormal = troopType;
    if (specialType !== undefined) updates.troopsSpecial = specialType;
    if (weaponName !== undefined) updates.troopsMerge = weaponName;

    updates.ts = firebase.database.ServerValue.TIMESTAMP; // 總是更新時間戳
    
    if (Object.keys(updates).length > 1) { // 確保除了ts外有其他更新
      await signupRef.update(updates);
    } else {
      // 如果 obj 中沒有任何可更新的欄位 (例如，用戶提交了一個已存在的UID但未做任何修改)
      // 也可以選擇不執行任何操作，或者只更新時間戳
      console.log("No new data provided for update, only timestamp will be updated.");
      await signupRef.update({ ts: firebase.database.ServerValue.TIMESTAMP });
    }
  }
}

// 刪除單筆報名資料
async function removeSignup(uid) {
  if (!eventCode) {
    console.error("eventCode is not defined. Cannot remove signup.");
    return; // 或拋出錯誤
  }
  // 同時也考慮是否需要減少 counter，這取決於你的業務邏輯
  // 例如，如果 signupOrder 是嚴格連續的，則刪除時不應動 counter
  // 如果 counter 只是總報名數，則可以考慮減少
  // 這裡暫不處理 counter 的減少
  await db.ref(`events/${eventCode}/signups/${uid}`).remove();
}

/* ===== 表單驗證輔助函數 (移至全域) ===== */
function showError(message, form) {
  clearErrors(form);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.color = '#ff5252';
  errorDiv.style.padding = '0.5rem';
  errorDiv.style.marginBottom = '1rem';
  form.insertBefore(errorDiv, form.firstChild);
}

function clearErrors(form) {
  form.querySelectorAll('.error-message').forEach(el => el.remove());
}

/* ===== 全域表格更新輔助函數 ===== */
function updateTable(data, tableId, lang) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  if (!tbody) return;
  tbody.innerHTML = data
    .sort((a, b) => (a.uid || 0) - (b.uid || 0)) // 增加對 uid 可能不存在的保護
    .map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${r.uid || 'N/A'}</td>
        <td>${r.nickname || 'N/A'}</td>
        <td>${(I18N[lang]?.rankDisplay?.[r.rank] || r.rank || 'N/A' )}${r.rankMinor && r.rankMinor !== '-' ? r.rankMinor : ''}</td>
        <td>${r.payPower === 'yes' ? '✓' : (r.payPower === 'no' ? '✗' : 'N/A')}</td>
      </tr>
    `).join('');
}

function updateWeaponStats(weaponData, tableId, lang, teamsDataForFiltering, teamKey) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  if (!tbody) return;
  
  let filteredWeaponData = weaponData;
  if (teamsDataForFiltering && teamKey && teamsDataForFiltering[teamKey]) {
    const teamUIDs = new Set(teamsDataForFiltering[teamKey].map(p => p.uid));
    filteredWeaponData = weaponData.filter(w => teamUIDs.has(w.uid));
  }

  const stats = {};
  filteredWeaponData.forEach(w => {
    if (w.weaponName) { // 只統計 weaponName 存在的資料
      stats[w.weaponName] = (stats[w.weaponName] || 0) + 1;
    }
  });
  
  tbody.innerHTML = Object.entries(stats)
    .sort(([,a], [,b]) => b - a)
    .map(([name, count]) => `
      <tr>
        <td>${I18N[lang]?.weaponGridDisplay?.weapons?.[name] || name}</td>
        <td>${count}</td>
        <td>${count > 5 ? '⚠️' : ''}</td>
      </tr>
    `).join('');
}

/* ===== 報名者列表 ===== */
async function refreshSignupList() {
  const tbody = document.querySelector('#signupList tbody');
  if (!tbody) return; // 如果 tbody 不存在，提前退出

  const data = await getData();
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  const i18n = I18N[lang];
  
  tbody.innerHTML = data
    .sort((a, b) => (a.signupOrder || a.ts || 0) - (b.signupOrder || b.ts || 0)) // 按報名次序或時間戳排序
    .map((r, i) => `
      <tr data-uid="${r.uid}">
        <td>${r.signupOrder || (i + 1)}</td> <!-- 優先顯示 signupOrder，否則用行號 -->
        <td class="uid-cell">${r.uid}</td>
        <td>${r.nickname || 'N/A'}</td>
        <td>${(i18n.rankDisplay && r.rank ? i18n.rankDisplay[r.rank] : r.rank) || 'N/A'}${(r.rankMinor && r.rankMinor !== '-' ? r.rankMinor : '')}</td>
        <td>${r.payPower === 'yes' ? '✓' : (r.payPower === 'no' ? '✗' : 'N/A')}</td>
        <td>${(i18n.introDisplay && r.roleGroup ? i18n.introDisplay[r.roleGroup] : r.roleGroup) || 'N/A'}${r.introName ? ` (${r.introName})` : ''}</td>
        <td>
          <button type="button" class="small" onclick="modifySignup('${r.uid}')" data-l10n="btnModify">修改</button>
          <button type="button" class="small danger" onclick="deleteSignup('${r.uid}')" data-l10n="btnDelete">刪除</button>
        </td>
      </tr>
    `).join('');
  
  applyLang(); // 確保動態添加的內容也被翻譯
}

// 修改報名資料 (讓 modifySignup 填充報名表單)
window.modifySignup = async (uidString) => {
  const uid = parseInt(uidString); // 確保是數字 UID
  if (isNaN(uid)) return;

  const signups = await getSignups(); // 從 Realtime DB 獲取最新資料
  const record = signups.find(r => r.uid === uid);
  if (!record) {
    alert('找不到該用戶的報名資料。');
    return;
  }
  
  // 填入報名表單
  document.getElementById('playerUID').value = record.uid;
  document.getElementById('playerUID').readOnly = true; // UID 不允許在修改時變更
  document.getElementById('playerName').value = record.nickname || '';
  
  const rankTierSelect = document.getElementById('rankTier');
  if (rankTierSelect) {
    rankTierSelect.value = record.rank || '';
    rankTierSelect.dispatchEvent(new Event('change')); // 觸發 change 以更新小段位
  }
  
  const rankLevelSelect = document.getElementById('rankLevel');
  if (rankLevelSelect) {
    // 等待小段位選項填充完成後再賦值
    setTimeout(() => { rankLevelSelect.value = record.rankMinor || '-'; }, 100);
  }
  
  const canPaySelect = document.getElementById('canPaySelect');
  if (canPaySelect) canPaySelect.value = record.payPower || '';
  
  const introSelect = document.getElementById('introSelect');
  if (introSelect) {
    introSelect.value = record.roleGroup || '';
    introSelect.dispatchEvent(new Event('change')); // 觸發 change 以更新介紹人輸入框
  }
  
  const introNameInput = document.getElementById('introNameInput');
  if (introNameInput && record.introName) {
    introNameInput.value = record.introName;
  }

  const expectSquadInput = document.getElementById('expectSquadInput');
  if (expectSquadInput && record.expectSquad) {
    expectSquadInput.value = record.expectSquad;
  }

  const formLangSwitch = document.getElementById('formLangSwitch');
  if (formLangSwitch && record.lang) {
    formLangSwitch.value = record.lang;
  }
  
  // 滾動到報名表單並給予提示
  document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('#navSignup').click(); // 切換到報名頁籤
  alert('請在報名表單中修改資料，然後重新提交。');
};

// 刪除報名資料
window.deleteSignup = (uid) => {
  const tr = document.querySelector(`#signupList tr[data-uid="${uid}"]`);
  const uidCell = tr.querySelector('.uid-cell');
  const lang = document.getElementById('langSwitch').value;
  
  // 創建確認輸入框
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = I18N[lang].msgDeleteConfirm;
  input.style.width = '100px';
  
  // 創建確認按鈕
  const confirm = document.createElement('button');
  confirm.className = 'small danger';
  confirm.textContent = '✓';
  
  // 創建取消按鈕
  const cancel = document.createElement('button');
  cancel.className = 'small';
  cancel.textContent = '✗';
  
  // 保存原始內容
  const originalContent = uidCell.innerHTML;
  
  // 替換內容
  uidCell.innerHTML = '';
  uidCell.appendChild(input);
  uidCell.appendChild(confirm);
  uidCell.appendChild(cancel);
  
  // 確認按鈕事件
  confirm.addEventListener('click', async () => {
    if (input.value === uid.toString()) {
      // 從 Firebase 刪除此筆資料
      await removeSignup(uid);
      // 更新顯示
      await refreshSignupList();
      refresh();
      updateSignupCount();
      alert(I18N[lang].msgDeleted);
    } else {
      uidCell.innerHTML = originalContent;
    }
  });
  
  // 取消按鈕事件
  cancel.addEventListener('click', () => {
    uidCell.innerHTML = originalContent;
  });
  
  // 聚焦輸入框
  input.focus();
};

/* ===== 報名提交 ===== */
document.getElementById('submitSignup').addEventListener('click', async ()=>{
  const form = document.getElementById('signupForm');
  clearErrors(form);
  const lang = document.getElementById('langSwitch').value || 'zh';
  
  const uid = +document.getElementById('playerUID').value;
  const name = document.getElementById('playerName').value.trim();
  const expectSquad = document.getElementById('expectSquadInput').value.trim(); // 新增：讀取期望小組
  
  // 驗證
  let hasError = false;
  if(!Number.isInteger(uid) || uid <= 0) {
    showError(I18N[lang].uidPlaceholder, form);
    hasError = true;
  }
  if(name.length < 2) {
    showError(I18N[lang].msgNicknameMinLength, form);
    hasError = true;
  }
  if(!document.getElementById('rankTier').value) {
    showError(I18N[lang].rankTierDefault, form);
    hasError = true;
  }
  const rankTierValue = document.getElementById('rankTier').value;
  const rankLevelValue = document.getElementById('rankLevel').value;
  if (rankTierValue && rankTierValue !== 'none' && rankTierValue !== 'king' && !rankLevelValue) {
    showError(I18N[lang].msgRankLevelRequired, form);
    hasError = true;
  }
  if(!document.getElementById('canPaySelect').value) {
    showError(I18N[lang].msgPayRequired, form);
    hasError = true;
  }
  if(!document.getElementById('introSelect').value) {
    showError(I18N[lang].msgIntroRequired, form);
    hasError = true;
  }
  if(hasError) return;

  const obj = {
    uid,
    name, // 將在 saveSignup 中映射到 nickname
    tier: rankTier.value, // 將在 saveSignup 中映射到 rank
    level: levelSel.value || '-', // 將在 saveSignup 中映射到 rankMinor
    pay: canPaySelect.value, // 將在 saveSignup 中映射到 payPower
    intro: introSel.value, // 將在 saveSignup 中映射到 roleGroup
    introName: introNameInput.value.trim(),
    expectSquad: expectSquad, // 新增：期望小組
  };

  try {
    // 檢查是否為新報名或修改 (Realtime Database 版本)
    const snapshot = await db.ref(`events/${eventCode}/signups/${uid}`).once('value');
    const isNew = !snapshot.exists();
    
    await saveSignup(obj, isNew);
    // alert(I18N[lang].msgSignupSuccess); // 舊的提示
    if (isNew) {
      alert(I18N[lang].msgSignupSuccess || "報名成功！");
    } else {
      alert(I18N[lang].msgModified || "資料已修改！");
    }
    clearFormFields(form);
    document.getElementById('playerUID').readOnly = false; // 允許重新輸入 UID
    await refreshSignupList();
    refresh(); // 假設 refresh 會更新相關統計
    updateSignupCount();
  } catch (error) {
    console.error('報名失敗：', error);
    alert(I18N[lang].msgError);
  }
});

// 清空表單內容但保留輸入欄位結構
function clearFormFields(form) {
  // 遍歷所有輸入欄位並清空值
  form.querySelectorAll('input, select').forEach(input => {
    // 不清除語言選擇器，以及管理員設定頁面的輸入框（它們有自己的載入邏輯）
    if (input.id === 'langSwitch' || form.closest('#admin')) return;
    
    if (input.type === 'text' || input.type === 'number') {
      input.value = '';
    } else if (input.tagName === 'SELECT') {
      input.selectedIndex = 0;
      
      // 特別處理rankLevel
      if (input.id === 'rankLevel') {
        input.innerHTML = '<option value="">--小段--</option>';
        input.disabled = true;
      }
    }
  });
  
  // 確保特定元素隱藏
  const introNameBox = document.getElementById('introNameBox');
  if (introNameBox) introNameBox.classList.add('hidden');
}

/* ===== 專武 radio 產生 ===== */
// 原始武器資料已移至generateWeaponGrid函數中整合

/* ===== 專武提交 ===== */
document.getElementById('submitWeapon').addEventListener('click', async ()=>{
  const form = document.getElementById('weaponForm');
  clearErrors(form);
  const lang = document.getElementById('langSwitch').value || 'zh';
  
  const uid = +document.getElementById('weaponUID').value;
  const posX = +document.getElementById('posX').value;
  const posY = +document.getElementById('posY').value;
  const troopTypeValue = document.getElementById('troopType').value;    // 將在 saveSignup 中映射到 troopsNormal
  const specialTypeValue = document.getElementById('specialType').value; // 將在 saveSignup 中映射到 troopsSpecial
  const weaponName = window.selectedWeapon; // 將在 saveSignup 中映射到 troopsMerge
  
  // 驗證
  let hasError = false;
  
  // UID 驗證
  if(!Number.isInteger(uid) || uid <= 0) {
    showError(I18N[lang].uidPlaceholder, form);
    hasError = true;
  }
  
  // X 座標驗證
  if (isNaN(posX) || posX < 0 || posX > 599) {
    showError(I18N[lang].msgCoordRangeError, form);
    hasError = true;
  }
  
  // Y 座標驗證
  if (isNaN(posY) || posY < 0 || posY > 599) {
    showError(I18N[lang].msgCoordRangeError, form);
    hasError = true;
  }
  
  // 兵種驗證
  if (!troopTypeValue && !weaponName) {
    showError(I18N[lang].msgTroopOrWeaponRequired, form);
    hasError = true;
  }
  
  if (troopTypeValue === 'special' && !specialTypeValue) {
    showError(I18N[lang].msgSpecialTypeRequired, form);
    hasError = true;
  }
  
  if(hasError) {
    window.scrollTo({ top: form.offsetTop - 70, behavior: 'smooth' });
    return;
  }

  const obj = {
    uid,
    posX,
    posY,
    troopType: troopTypeValue,    // 用於傳遞給 saveSignup
    specialType: specialTypeValue,  // 用於傳遞給 saveSignup
    weaponName: weaponName          // 用於傳遞給 saveSignup
  };

  try {
    const playerRef = db.ref(`events/${eventCode}/signups/${uid}`);
    const snapshot = await playerRef.once('value');
    let isNewUser = !snapshot.exists(); // 用戶是否為全新用戶
    let既存資料 = null;
    let isUpdatingExistingPosition = false;

    if (!isNewUser) { // 如果用戶已存在，獲取其資料
      既存資料 = snapshot.val();
      isUpdatingExistingPosition = 既存資料 && 既存資料.posX !== undefined && 既存資料.posX !== null;
    }

    // isNew 參數現在代表是否為這個 UID 創建一個全新的 signups 節點
    // 對於專武登記來說，如果 UID 不存在，我們會創建它 (isNewUser = true)
    // 如果 UID 已存在，我們是更新它 (isNewUser = false)
    await saveSignup(obj, isNewUser);
    
    if (isNewUser) {
      // UID 不存在，首次登記 (可能是從專武表單直接登記)
      alert(I18N[lang].msgWeaponRegSuccess || "專武登記成功！"); 
    } else if (isUpdatingExistingPosition) {
      // UID 存在，且修改已有的 X 座標
      alert(I18N[lang].msgWeaponDataUpdated || "專武資料修改成功！"); 
    } else {
      // UID 存在，但首次為此 UID 登記 X 座標 (之前可能只有報名資訊)
      alert(I18N[lang].msgWeaponRegSuccess || "專武首次登記成功！"); 
    }
    
    clearFormFields(form);
    document.getElementById('specialOptions').classList.add('hidden');
    window.selectedWeapon = null;
    document.querySelectorAll('.weapon-button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    refresh(); // 假設 refresh 會更新相關統計
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('專武登記失敗：', error);
    alert(I18N[lang].msgError);
  }
});

/* ===== 統計功能 ===== */
async function refresh(){
  const lang = document.getElementById('langSwitch')?.value || 'zh'; 
  const settings = JSON.parse(localStorage.getItem('clownSettings') || '{}');
  const playerCount = settings.playerCount ? parseInt(settings.playerCount, 10) : 40;
  // console.log('[DEBUG] refresh() - playerCount:', playerCount);

  const data = await getData();
  // console.log('[DEBUG] refresh() - initial data length:', data.length, 'data[0]?.team:', data[0]?.team);
  const weaponData = await getWeaponData();
  
  const teams = { A: [], B: [], C: [] };
  data.forEach(r => {
    if (playerCount === 40) {
      r.team = 'A';
    } else if (playerCount === 80) {
      r.team = parseInt(r.uid.toString().slice(-1)) % 2 === 0 ? 'B' : 'A'; 
    } else if (playerCount === 120) {
      const lastDigit = parseInt(r.uid.toString().slice(-1));
      if (lastDigit <= 3) r.team = 'A';
      else if (lastDigit <= 6) r.team = 'B';
      else r.team = 'C';
    }
    if (teams[r.team]) teams[r.team].push(r);
  });
  // saveData(data); // No longer needed here as Firestore is source of truth
  // console.log('[DEBUG] refresh() - after team assignment, data[0]?.team:', data[0]?.team);
  
  document.getElementById('countA').textContent = teams.A.length;
  const countBEl = document.getElementById('countB');
  if(countBEl) countBEl.textContent = teams.B.length;
  const countCEl = document.getElementById('countC');
  if(countCEl) countCEl.textContent = teams.C.length;
  
  const statBoxA = document.getElementById('countA')?.closest('.stat-box');
  const statBoxB = document.getElementById('countB')?.closest('.stat-box');
  const statBoxC = document.getElementById('countC')?.closest('.stat-box');

  if (statBoxA) statBoxA.style.display = playerCount >= 40 ? 'block' : 'none'; 
  if (statBoxB) statBoxB.style.display = playerCount >= 80 ? 'block' : 'none';
  if (statBoxC) statBoxC.style.display = playerCount === 120 ? 'block' : 'none';
  
  const unfilledAEl = document.getElementById('unfilledA');
  if (unfilledAEl) {
    unfilledAEl.innerHTML = '<li>範例未填寫A1</li><li>範例未填寫A2</li>';
    unfilledAEl.style.display = playerCount >= 40 ? 'flex' : 'none';
    if (unfilledAEl.previousElementSibling) {
        unfilledAEl.previousElementSibling.style.display = playerCount >= 40 ? 'block' : 'none';
    }
  }

  const unfilledBEl = document.getElementById('unfilledB');
  if (unfilledBEl) {
    unfilledBEl.innerHTML = '<li>範例未填寫B1</li>';
    unfilledBEl.style.display = playerCount >= 80 ? 'flex' : 'none';
    if (unfilledBEl.previousElementSibling) {
        unfilledBEl.previousElementSibling.style.display = playerCount >= 80 ? 'block' : 'none';
    }
  }

  const unfilledCEl = document.getElementById('unfilledC');
  if (unfilledCEl) {
    unfilledCEl.innerHTML = '<li>範例未填寫C1</li>';
    unfilledCEl.style.display = playerCount === 120 ? 'flex' : 'none';
    if (unfilledCEl.previousElementSibling) {
        unfilledCEl.previousElementSibling.style.display = playerCount === 120 ? 'block' : 'none';
    }
  }
  
  updateTable(teams.A, 'tableA', lang);
  const tableAEl = document.getElementById('tableA')?.closest('.card');
  if (tableAEl) tableAEl.style.display = playerCount >= 40 ? 'block' : 'none';
  
  updateTable(teams.B, 'tableB', lang);
  const tableBEl = document.getElementById('tableB')?.closest('.card');
  if (tableBEl) tableBEl.style.display = playerCount >= 80 ? 'block' : 'none';
  
  updateTable(teams.C, 'tableC', lang);
  const tableCEl = document.getElementById('tableC')?.closest('.card');
  if (tableCEl) tableCEl.style.display = playerCount === 120 ? 'block' : 'none';
  
  updateWeaponStats(weaponData, 'statA', lang, teams, 'A');
  const statAEl = document.getElementById('statA')?.closest('.card');
  if (statAEl) statAEl.style.display = playerCount >= 40 ? 'block' : 'none';
  
  updateWeaponStats(weaponData, 'statB', lang, teams, 'B');
  const statBEl = document.getElementById('statB')?.closest('.card');
  if (statBEl) statBEl.style.display = playerCount >= 80 ? 'block' : 'none';
  
  updateWeaponStats(weaponData, 'statC', lang, teams, 'C');
  const statCEl = document.getElementById('statC')?.closest('.card');
  if (statCEl) statCEl.style.display = playerCount === 120 ? 'block' : 'none';
}

/* ===== 管理員功能 ===== */
// 資料管理
const exportDataBtn = document.getElementById('exportData');
if (exportDataBtn) {
  exportDataBtn.addEventListener('click', () => {
    const data = {
      players: getData(),
      weapons: getWeaponData(),
      exportTime: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clown_data_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

const importDataBtn = document.getElementById('importData');
const importFileEl = document.getElementById('importFile');
if (importDataBtn && importFileEl) {
  importDataBtn.addEventListener('click', () => {
    importFileEl.click();
  });

  importFileEl.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.players && data.weapons) {
          if (confirm('確定要匯入資料？這將會覆蓋現有資料！')) { // confirm 暫不處理
            saveData(data.players);
            saveWeaponData(data.weapons);
            alert(I18N[lang].msgDataImportSuccess); // 修改
            if (typeof refreshAdmin === 'function') refreshAdmin();
            if (typeof refresh === 'function') refresh();
          }
        } else {
          alert(I18N[lang].msgInvalidDataFormat); // 修改
        }
      } catch (err) {
        alert(I18N[lang].msgFileReadError); // 修改
      }
    };
    reader.readAsText(file);
  });
}

const clearDataBtn = document.getElementById('clearData');
if (clearDataBtn) {
  clearDataBtn.addEventListener('click', () => {
    const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
    if (confirm('確定要清除所有資料？此操作無法復原！')) { // confirm 暫不處理
      localStorage.removeItem(LS_KEY);
      localStorage.removeItem(WEAPON_KEY);
      alert(I18N[lang].msgDataCleared); // 修改
      if (typeof refreshAdmin === 'function') refreshAdmin();
      if (typeof refresh === 'function') refresh();
    }
  });
}

// 搜尋功能
// function debounce(fn, delay) { ... } // debounce 函數應已存在

const searchPlayerInput = document.getElementById('searchPlayer');
if (searchPlayerInput) {
  searchPlayerInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.toLowerCase();
    if (typeof refreshPlayerTable === 'function') refreshPlayerTable(query);
  }, 300));
}

const searchWeaponInput = document.getElementById('searchWeapon');
if (searchWeaponInput) {
  searchWeaponInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.toLowerCase();
    if (typeof refreshWeaponTable === 'function') refreshWeaponTable(query);
  }, 300));
}

// 表格更新
// ... refreshPlayerTable 和 refreshWeaponTable 函數定義 ...
// ... existing code ...

// 編輯和刪除功能
window.editPlayer = (uid) => {
  const data = getData();
  const player = data.find(p => p.uid === uid);
  if (!player) return;
  const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
  
  // 使用簡易的方式實現編輯功能
  const newName = prompt('修改暱稱:', player.name); // prompt 暫不處理
  if (newName === null) return; // 用戶取消
  
  // 檢查輸入
  if (newName.trim().length < 2) {
    alert(I18N[lang].msgNicknameMinLength); // 修改
    return;
  }
  
  // 更新資料
  player.name = newName.trim();
  saveData(data);
  refreshAdmin();
  refresh();
  alert(I18N[lang].msgPlayerDataUpdated); // 修改
};

window.deletePlayer = (uid) => {
  if (confirm(`確定要刪除 UID ${uid} 的資料？`)) {
    const data = getData().filter(p => p.uid !== uid);
    saveData(data);
    refreshAdmin();
    refresh();
  }
};

window.editWeapon = (uid) => {
  const data = getWeaponData();
  const weaponIndex = data.findIndex(w => w.uid === uid);
  if (weaponIndex === -1) return;
  const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
  
  const weapon = data[weaponIndex];
  
  // 使用簡易的方式實現編輯坐標功能
  const newPos = prompt(`修改座標 (目前: ${weapon.posX}, ${weapon.posY})，格式: x,y`, `${weapon.posX},${weapon.posY}`); // prompt 暫不處理
  if (newPos === null) return; // 用戶取消
  
  // 解析新座標
  const [newX, newY] = newPos.split(',').map(n => parseInt(n.trim()));
  
  // 驗證座標
  if (isNaN(newX) || isNaN(newY) || newX < 0 || newX > 1000 || newY < 0 || newY > 1000) {
    alert(I18N[lang].msgCoordRangeError); // 修改
    return;
  }
  
  // 更新資料
  weapon.posX = newX;
  weapon.posY = newY;
  saveWeaponData(data);
  refreshAdmin();
  refresh();
  alert(I18N[lang].msgWeaponDataUpdated); // 修改
};

window.deleteWeapon = (uid) => {
  if (confirm(`確定要刪除 UID ${uid} 的專武資料？`)) {
    const data = getWeaponData().filter(w => w.uid !== uid);
    saveWeaponData(data);
    refreshAdmin();
    refresh();
  }
};

function refreshAdmin() {
  refreshPlayerTable();
  refreshWeaponTable();
}

/* ===== 管理員功能 ===== */
function updateAdminSection() {
  const adminSection = document.getElementById('admin');
  if (!adminSection || !adminSection.classList.contains('active')) {
    // console.log("Admin section not active or not found, skipping updateAdminSection.");
    return;
  }
  // console.log("Updating admin section...");

  // 名額項目相關的 HTML 結構現在直接在 index.html 中定義並具有正確的 ID (例如 quota-swordshield)
  // 因此此處不再需要動態生成它們的 JavaScript。
  // 原有的 quotaItemDetails, specialQuotaGrid, internQuotaGrid 相關操作已移除。
  
  // 綁定事件監聽器
  // 注意：對於 exportData, importData, clearData, searchPlayer, searchWeapon 的事件監聽器
  // 通常在 DOMContentLoaded 時綁定一次即可，因為它們的元素在 HTML 中是固定的。
  // (這些功能目前UI元素缺失，相關事件監聽器實際上是無效的)

  const saveSettingsButton = document.getElementById('saveAdminSettings');
  if (saveSettingsButton) {
    // 移除舊的監聽器，避免重複綁定 (如果 updateAdminSection 可能被多次調用)
    saveSettingsButton.replaceWith(saveSettingsButton.cloneNode(true));
    document.getElementById('saveAdminSettings').addEventListener('click', saveAdminSettings);
  }
  
  const autoAssignButton = document.getElementById('autoAssignTeams');
  if (autoAssignButton) {
    autoAssignButton.replaceWith(autoAssignButton.cloneNode(true));
    document.getElementById('autoAssignTeams').addEventListener('click', autoAssignTeams);
  }
  
  const copyResultButton = document.getElementById('copyTeamResult');
  if (copyResultButton) {
    copyResultButton.replaceWith(copyResultButton.cloneNode(true));
    document.getElementById('copyTeamResult').addEventListener('click', copyTeamResult);
  }
    
  document.querySelectorAll('.player-count-group button').forEach(btn => {
    // 為按鈕重新綁定事件，先移除舊的 (如果有的話)
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => {
      document.querySelectorAll('.player-count-group button').forEach(b => b.classList.remove('active'));
      newBtn.classList.add('active');
      // 當人數按鈕改變時，也應觸發 refreshAdminData 和 refresh 更新顯示
      // 同時也要更新 signup 頁面的最大人數顯示
      const settings = JSON.parse(localStorage.getItem('clownSettings') || '{}');
      settings.playerCount = parseInt(newBtn.dataset.count, 10);
      localStorage.setItem('clownSettings', JSON.stringify(settings));
      updateSignupCount(); 
      refresh();
      if(isAdmin) refreshAdminData(); 
    });
  });
  
  const gameStartDateInput = document.getElementById('adminStartDate');
  const signupEndDateInput = document.getElementById('adminEndDate');

  if (gameStartDateInput) {
    // 移除舊監聽器
    gameStartDateInput.replaceWith(gameStartDateInput.cloneNode(true));
    document.getElementById('adminStartDate').min = new Date().toISOString().split('T')[0];
    document.getElementById('adminStartDate').addEventListener('change', validateDates);
  }
  if (signupEndDateInput) {
    // 移除舊監聽器
    signupEndDateInput.replaceWith(signupEndDateInput.cloneNode(true));
    document.getElementById('adminEndDate').min = new Date().toISOString().split('T')[0];
    document.getElementById('adminEndDate').addEventListener('change', validateDates);
  }
  
  // 更新資料顯示 (報名列表、專武列表等)
  refreshAdminData(); // 確保在 admin 頁面激活時資料是最新的
  // 載入設定值到表單 (這應該在名額 select 元素創建後)
  loadSettings(); 
  // 重新套用翻譯 (確保動態加入的內容也被翻譯)
  applyLang(); 
  
  // console.log("Admin section updated.");
}

// 更新管理員頁面的資料顯示
async function refreshAdminData() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  const settings = JSON.parse(localStorage.getItem('clownSettings') || '{}');
  const playerCount = settings.playerCount ? parseInt(settings.playerCount, 10) : 40;
  // console.log('[DEBUG] refreshAdminData() - playerCount:', playerCount);

  const data = await getData(); // 報名資料
  // console.log('[DEBUG] refreshAdminData() - initial data length:', data.length, 'data[0]?.team:', data[0]?.team);
  const weaponData = await getWeaponData(); // 專武資料
  
  const adminTeams = { A: [], B: [], C: [] };
  data.forEach(r => {
    let teamAssignment = 'A'; 
    if (playerCount === 40) {
      teamAssignment = 'A';
    } else if (playerCount === 80) {
      teamAssignment = parseInt(r.uid.toString().slice(-1)) % 2 === 0 ? 'B' : 'A'; 
    } else if (playerCount === 120) {
      const lastDigit = parseInt(r.uid.toString().slice(-1));
      if (lastDigit <= 3) teamAssignment = 'A';
      else if (lastDigit <= 6) teamAssignment = 'B';
      else teamAssignment = 'C';
    }
    r.team = teamAssignment; 
    if (adminTeams[teamAssignment]) {
      adminTeams[teamAssignment].push(r);
    }
  });
  // saveData(data); // No longer needed here as Firestore is source of truth
  // console.log('[DEBUG] refreshAdminData() - after team assignment, data[0]?.team:', data[0]?.team);

  updateTable(adminTeams.A, 'admin_tableA', lang);
  updateTable(adminTeams.B, 'admin_tableB', lang);
  updateTable(adminTeams.C, 'admin_tableC', lang);

  updateWeaponStats(weaponData, 'adminStatA', lang, adminTeams, 'A');
  updateWeaponStats(weaponData, 'adminStatB', lang, adminTeams, 'B');
  updateWeaponStats(weaponData, 'adminStatC', lang, adminTeams, 'C');

  const adminContainerA_Stats = document.getElementById('adminStatA')?.closest('.card.stat-table');
  const adminContainerA_Table = document.getElementById('admin_tableA')?.closest('.card.stat-table');
  
  const adminContainerB_Stats = document.getElementById('adminStatB')?.closest('.card.stat-table');
  const adminContainerB_Table = document.getElementById('admin_tableB')?.closest('.card.stat-table');

  const adminContainerC = document.getElementById('adminGroupCContainer'); 

  if (adminContainerA_Stats) adminContainerA_Stats.style.display = playerCount >= 40 ? 'block' : 'none'; 
  if (adminContainerA_Table) adminContainerA_Table.style.display = playerCount >= 40 ? 'block' : 'none'; 

  if (adminContainerB_Stats) adminContainerB_Stats.style.display = playerCount >= 80 ? 'block' : 'none';
  if (adminContainerB_Table) adminContainerB_Table.style.display = playerCount >= 80 ? 'block' : 'none';
  
  if (adminContainerC) adminContainerC.style.display = playerCount === 120 ? 'flex' : 'none';
  
  applyLang(); 
}

// 驗證日期
function validateDates() {
  const signupEndDateInput = document.getElementById('adminEndDate'); // 更正 ID
  const gameStartDateInput = document.getElementById('adminStartDate'); // 更正 ID
  // const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言

  const signupDateValue = signupEndDateInput ? signupEndDateInput.value : null;
  const gameStartDateValue = gameStartDateInput ? gameStartDateInput.value : null;

  // 新的 validateDates 函數將不再主動修改日期欄位的值，
  // 也不會彈出基於舊規則的警告。
  // 主要的驗證和使用者提示/自動校正邏輯由 saveAdminSettings 函數處理。
  // 這樣可以避免 validateDates 在使用者輸入過程中意外清空欄位，
  // 進而導致 saveAdminSettings 函數判斷日期為空。

  // 我們可以保留此函數用於未來可能的、更細緻的即時驗證 (例如更新 min/max 屬性)，
  // 但目前為了修正核心問題，將其破壞性操作移除。

  // 原來的 problematic code:
  /*
  if (signupDateValue && gameStartDateValue) {
    const endDate = new Date(signupDateValue);
    const startDate = new Date(gameStartDateValue);
    if (endDate > startDate) { // 舊的判斷邏輯
      // alert(I18N[lang].msgSignupEndDateError); // 舊的提示
      // signupEndDateInput.value = gameStartDateValue; // 這是導致問題的賦值
    }
  }
  */
}

// 儲存設定
function saveAdminSettings() {
  const gameStartDateInput = document.getElementById('adminStartDate'); // 更正 ID
  const signupEndDateInput = document.getElementById('adminEndDate'); // 更正 ID
  const playerCountButton = document.querySelector('.player-count-group button.active');
  const verifyCodeAInput = document.getElementById('verifyCodeA');
  const verifyCodeBInput = document.getElementById('verifyCodeB');
  const lang = document.getElementById('langSwitch').value || 'zh';

  // --- DEBUGGING: Log raw input values ---
  console.log("[DEBUG] Raw gameStartDateInput.value:", gameStartDateInput ? gameStartDateInput.value : 'input not found');
  console.log("[DEBUG] Raw signupEndDateInput.value:", signupEndDateInput ? signupEndDateInput.value : 'input not found');
  // --- END DEBUGGING ---

  let gameStartDateValue = gameStartDateInput ? gameStartDateInput.value : null;
  let signupEndDateValue = signupEndDateInput ? signupEndDateInput.value : null;

  // 嘗試轉換 "YYYY / MM / DD" 或 "YYYY/MM/DD" 格式為 "YYYY-MM-DD"
  const reformatDate = (dateStr) => {
    if (dateStr && typeof dateStr === 'string') {
      const match = dateStr.match(/^(\d{4})\s*\/\s*(\d{1,2})\s*\/\s*(\d{1,2})$/);
      if (match) {
        const year = match[1];
        const month = match[2].padStart(2, '0');
        const day = match[3].padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    }
    return dateStr; // 如果不匹配，返回原值
  };

  gameStartDateValue = reformatDate(gameStartDateValue);
  signupEndDateValue = reformatDate(signupEndDateValue);

  // 基本空值檢查：這是使用者目前最常看到的錯誤
  if (!gameStartDateValue || !signupEndDateValue) {
    alert(I18N[lang].msgValidDateError || "請設定有效的日期！");
    return;
  }

  const gameStartDate = new Date(gameStartDateValue);
  const signupEndDate = new Date(signupEndDateValue + 'T00:00:00'); // 確保是本地日期的午夜
  // 將日期物件的時間部分設為0，以便只比較日期 (再次確認)
  gameStartDate.setHours(0, 0, 0, 0);
  signupEndDate.setHours(0, 0, 0, 0);

  let dayBeforeGameStart = new Date(gameStartDate.getFullYear(), gameStartDate.getMonth(), gameStartDate.getDate() - 1);
  // dayBeforeGameStart.setDate(gameStartDate.getDate() - 1); //舊的計算方式
  // dayBeforeGameStart.setHours(0,0,0,0); // 已在 new Date 中隱含處理
  
  console.log("[DEBUG] gameStartDate for rule check:", gameStartDate.toISOString());
  console.log("[DEBUG] signupEndDate for rule check:", signupEndDate.toISOString());
  console.log("[DEBUG] Calculated dayBeforeGameStart:", dayBeforeGameStart.toISOString());

  // 新規則：報名截止日需要早開局日一天(包括)以上
  // signupEndDate 應該 <= dayBeforeGameStart
  if (signupEndDate.getTime() > dayBeforeGameStart.getTime()) {
    alert(I18N[lang].msgSignupEndDateEarlier || "報名截止日必須至少早於開局日期一天。已自動為您調整。");
    // 自動調整 signupEndDateInput 的值
    const year = dayBeforeGameStart.getFullYear();
    const month = (dayBeforeGameStart.getMonth() + 1).toString().padStart(2, '0'); // JS 月份是 0-indexed
    const day = dayBeforeGameStart.getDate().toString().padStart(2, '0');
    signupEndDateInput.value = `${year}-${month}-${day}`;
    return; 
  }

  const settings = {
    gameStartDate: gameStartDateValue,
    // 使用 signupEndDateInput.value 是因為它可能在上面被自動調整了，或者本身就是正確的
    signupEndDate: signupEndDateInput.value, 
    playerCount: playerCountButton ? parseInt(playerCountButton.dataset.count, 10) : 40,
    verifyCodeA: verifyCodeAInput ? verifyCodeAInput.value : 'AAA',
    verifyCodeB: verifyCodeBInput ? verifyCodeBInput.value : 'BBB',
    quotas: {},
    internQuotas: {},
    lastUpdated: new Date().toISOString()
  };

  // 定義名額項目以便讀取值
  const quotaItemDetails = [
    { name: '劍盾', id: 'swordshield' },
    { name: '地鼠', id: 'mole' },
    { name: '大餅', id: 'cookie' },
    { name: '文書', id: 'scribe' },
    { name: '指揮', id: 'commander' }
  ];

  quotaItemDetails.forEach(item => {
    const quotaSelect = document.getElementById(`quota-${item.id}`);
    if (quotaSelect) {
      settings.quotas[item.id] = parseInt(quotaSelect.value, 10);
    }
    const internQuotaSelect = document.getElementById(`quota-intern-${item.id}`);
    if (internQuotaSelect) {
      settings.internQuotas[item.id] = parseInt(internQuotaSelect.value, 10);
    }
  });
  
  // 這個檢查現在應該由 loadSettings 更早地處理，理論上到這裡日期格式是正確的
  // if(!settings.gameStartDate || !settings.signupEndDate) {
  //   alert(I18N[lang].msgValidDateError); 
  //   return;
  // }
  
  localStorage.setItem('clownSettings', JSON.stringify(settings));
  alert(I18N[lang].msgSettingsSaved); 
  
  updateSignupCount(); 
  refresh(); 
}

// 讀取設定
async function loadSettings() {
  const adminSection = document.getElementById('admin');
  if (!adminSection || (window.getComputedStyle(adminSection).display === 'none' && !adminSection.classList.contains('active'))) {
    return;
  }
  const settingsJSON = localStorage.getItem('clownSettings');
  const settings = settingsJSON ? JSON.parse(settingsJSON) : {};
  
  // 在函數開頭就 await getData()，確保 data 在後續使用時是已解析的陣列
  const resolvedData = await getData(); 

  const today = new Date();
  today.setHours(0, 0, 0, 0); // 標準化到當天午夜
  const todayStr = today.toISOString().split('T')[0];

  const gameStartDateInput = document.getElementById('adminStartDate'); // 更正 ID
  const signupEndDateInput = document.getElementById('adminEndDate'); // 更正 ID

  // --- 設定開局日期 (Game Start Date) ---
  let gameStartDateToSet = settings.gameStartDate || todayStr; // 預設為今天或儲存的值
  // 確保不會早於今天 (因為 input min 屬性)
  if (new Date(gameStartDateToSet) < today) {
    gameStartDateToSet = todayStr;
  }
  if (gameStartDateInput) {
    gameStartDateInput.value = gameStartDateToSet;
    // 如果瀏覽器因 min 限制清空了值，則強制設回今天
    if (!gameStartDateInput.value) {
      gameStartDateInput.value = todayStr;
    }
  }
  
  // 以輸入框中實際的開局日為準進行後續計算
  const actualGameStartDate = gameStartDateInput && gameStartDateInput.value ? 
                                new Date(gameStartDateInput.value) : 
                                new Date(todayStr); // 如果 input 不存在或為空，則用今天
  actualGameStartDate.setHours(0,0,0,0);

  // --- 設定報名截止日 (Signup End Date) ---
  let signupEndDateToSet = settings.signupEndDate || todayStr; // 預設為今天或儲存的值

  // 1. 確保不會早於今天
  if (new Date(signupEndDateToSet) < today) {
    signupEndDateToSet = todayStr;
  }

  // 2. 根據新規則：必須至少早於開局日一天
  let dayBeforeGameStart = new Date(actualGameStartDate);
  dayBeforeGameStart.setDate(actualGameStartDate.getDate() - 1);
  dayBeforeGameStart.setHours(0,0,0,0);

  if (new Date(signupEndDateToSet).getTime() > dayBeforeGameStart.getTime()) {
    signupEndDateToSet = dayBeforeGameStart.toISOString().split('T')[0];
  }

  // 3. 如果經過上述調整後，報名截止日又早於今天了 (例如開局日就是今天，導致前一天是過去)
  //    則將報名截止日也設為今天 (因為不能選擇過去的日期)
  if (new Date(signupEndDateToSet) < today) {
    signupEndDateToSet = todayStr;
  }

  if (signupEndDateInput) {
    signupEndDateInput.value = signupEndDateToSet;
    // 如果瀏覽器因 min 限制清空了值，則強制設回計算出的安全值
    if (!signupEndDateInput.value) {
      // 重新計算一次最安全的 fallback
      let fallbackDayBefore = new Date(actualGameStartDate);
      fallbackDayBefore.setDate(actualGameStartDate.getDate() - 1);
      if (fallbackDayBefore < today) { // 如果開局日前一天是過去
        signupEndDateInput.value = todayStr; // 截止日只能是今天
      } else {
        signupEndDateInput.value = fallbackDayBefore.toISOString().split('T')[0];
      }
      // 終極 fallback，如果上面還失敗
      if (!signupEndDateInput.value) signupEndDateInput.value = todayStr;
    }
  }
  
  const verifyCodeAInput = document.getElementById('verifyCodeA');
  if (verifyCodeAInput) {
    verifyCodeAInput.value = settings.verifyCodeA || 'AAA';
  }
  const verifyCodeBInput = document.getElementById('verifyCodeB');
  if (verifyCodeBInput) {
    verifyCodeBInput.value = settings.verifyCodeB || 'BBB';
  }

  if (settings.playerCount !== undefined) {
    const countBtn = document.querySelector(`.player-count-group button[data-count="${settings.playerCount}"]`);
    if (countBtn) {
      document.querySelectorAll('.player-count-group button').forEach(btn => btn.classList.remove('active'));
      countBtn.classList.add('active');
    }
  } else { // Default to 40 if not set
    const defaultCountBtn = document.querySelector('.player-count-group button[data-count="40"]');
    if (defaultCountBtn) {
        document.querySelectorAll('.player-count-group button').forEach(btn => btn.classList.remove('active'));
        defaultCountBtn.classList.add('active');
    }
  }
  
  const maxCountDisplay = document.getElementById('maxSignupCount');
  if (maxCountDisplay) {
      maxCountDisplay.textContent = (settings.playerCount || 40).toString();
  }

  // 定義名額項目以便設定值
  const quotaItemDetails = [
    { name: '劍盾', id: 'swordshield' },
    { name: '地鼠', id: 'mole' },
    { name: '大餅', id: 'cookie' },
    { name: '文書', id: 'scribe' },
    { name: '指揮', id: 'commander' }
  ];

  quotaItemDetails.forEach(item => {
    const quotaSelect = document.getElementById(`quota-${item.id}`);
    if (quotaSelect && settings.quotas && settings.quotas[item.id] !== undefined) {
      quotaSelect.value = settings.quotas[item.id];
    } else if (quotaSelect) {
      quotaSelect.value = "0"; // Default to 0 if not set
    }

    const internQuotaSelect = document.getElementById(`quota-intern-${item.id}`);
    if (internQuotaSelect && settings.internQuotas && settings.internQuotas[item.id] !== undefined) {
      internQuotaSelect.value = settings.internQuotas[item.id];
    } else if (internQuotaSelect) {
      internQuotaSelect.value = "0"; // Default to 0 if not set
    }
  });

  // 讀取團隊分配結果 (這部分邏輯保持不變)
  const teamAssign = JSON.parse(localStorage.getItem('clownTeamAssign') || '{}');
  const teamAssignTextEl = document.getElementById('teamAssignText');
  if (teamAssign && teamAssignTextEl) { // 檢查 teamAssign 是否存在
    // const data = getData(); // 移除此處重複且錯誤的 getData() 調用
    const lang = document.getElementById('langSwitch')?.value || 'zh';

    // 獲取各隊的玩家資料
    const getTeamPlayerData = (teamUids) => 
      teamUids.map(uid => resolvedData.find(p => p.uid == uid)).filter(Boolean); // 使用 resolvedData

    const teamAData = getTeamPlayerData(teamAssign.teamA || []);
    const teamBData = getTeamPlayerData(teamAssign.teamB || []);
    const teamCData = getTeamPlayerData(teamAssign.teamC || []);
    
    // 格式化顯示函數
    const formatTeamDisplay = (team, teamPrefix) => {
      if (!team || team.length === 0) return "";
      return team.map((p, index) => {
        const teamId = `${teamPrefix}${(index + 1).toString().padStart(2, '0')}`;
        const rank = `${I18N[lang]?.rankDisplay?.[p.tier] || p.tier}${p.level && p.level !== '-' ? p.level : ''}`;
        // 假設 p.introNote 是身分的註解，如果沒有則為空字串
        const introText = `${I18N[lang]?.introDisplay?.[p.intro] || p.intro}${p.introNote ? '(' + p.introNote + ')' : ''}`;
        return `${teamId} ${p.uid} ${p.name} ${rank} ${introText}`;
      }).join('\n');
    };
  
    let resultText = '';
    if (teamAData.length > 0) {
      resultText += `🔸 A 隊 (${teamAData.length}人)：\n${formatTeamDisplay(teamAData, 'A')}\n\n`;
    }
    if (teamBData.length > 0) {
      resultText += `🔹 B 隊 (${teamBData.length}人)：\n${formatTeamDisplay(teamBData, 'B')}\n\n`;
    }
    if (teamCData.length > 0) {
      resultText += `⭐ C 隊 (${teamCData.length}人)：\n${formatTeamDisplay(teamCData, 'C')}\n\n`;
    }
    teamAssignTextEl.textContent = resultText.trim();
  }
}
// 自動分盟
function autoAssignTeams() {
  const data = getData();
  const weaponData = getWeaponData();
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  const settings = JSON.parse(localStorage.getItem('clownSettings') || '{}');
  const playerCount = settings.playerCount ? parseInt(settings.playerCount, 10) : 40;
  
  // 簡化分組邏輯，實際應與 refresh 函數內的邏輯保持一致或更複雜
  const teams = { A: [], B: [], C: [] };
  data.forEach(player => {
    if (playerCount === 40) player.team = 'A';
    else if (playerCount === 80) player.team = parseInt(player.uid.toString().slice(-1)) % 2 === 0 ? 'B' : 'A';
    else if (playerCount === 120) {
      const lastDigit = parseInt(player.uid.toString().slice(-1));
      if (lastDigit <= 3) player.team = 'A';
      else if (lastDigit <= 6) player.team = 'B';
      else player.team = 'C';
    }
    if (teams[player.team]) teams[player.team].push(player);
  });
  
  let result = '編號 UID 暱稱 階級 身分\n';
  // const lang = document.getElementById('langSwitch')?.value || 'zh'; //確保 lang 已定義 -> 此行多餘，移除

  if (teams.A.length > 0) {
    result += `🔸 A 隊 (${teams.A.length}人)：\n${formatTeamForCopy(teams.A, lang, 'A')}\n\n`;
  }
  if (teams.B.length > 0 && playerCount >= 80) {
    result += `🔹 B 隊 (${teams.B.length}人)：\n${formatTeamForCopy(teams.B, lang, 'B')}\n\n`;
  }
  if (teams.C.length > 0 && playerCount === 120) {
    result += `⭐ C 隊 (${teams.C.length}人)：\n${formatTeamForCopy(teams.C, lang, 'C')}\n\n`;
  }
  
  document.getElementById('teamAssignText').textContent = result.trim();
  
  const assignData = {
    teamA: teams.A.map(p => p.uid),
    teamB: teams.B.map(p => p.uid),
    teamC: teams.C.map(p => p.uid),
    timestamp: Date.now()
  };
  localStorage.setItem('clownTeamAssign', JSON.stringify(assignData));
}

// 複製分盟結果
function copyTeamResult() {
  const text = document.getElementById('teamAssignText').textContent;
  const lang = document.getElementById('langSwitch').value || 'zh'; // 獲取當前語言
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      alert(I18N[lang].msgCopiedToClipboard); // 修改
    });
  } else {
    alert(I18N[lang].msgNoResultToCopy); // 修改
  }
}

// ... existing code ...
let currentMapScale = 1.0; // 新增：追蹤目前地圖縮放比例
const MIN_MAP_SCALE = 1.0;
const MAX_MAP_SCALE = 3.0;
const MAP_SCALE_STEP = 0.4;

// 新增：繪製地圖座標軸的函數
function drawMapAxes(selectedDirection = 'all') {
  const axisX = document.querySelector('.map-axis-x');
  const axisY = document.querySelector('.map-axis-y');
  const mapContainer = document.getElementById('coordinateMapContainer'); // 獲取地圖容器
  if (!axisX || !axisY || !mapContainer) return;

  axisX.innerHTML = ''; // 清空舊刻度
  axisY.innerHTML = ''; // 清空舊刻度

  const ticks = [0, 100, 200, 300, 400, 500, 599];
  const midPoint = 299.5; // 中間點，用於判斷象限

  // 判斷刻度是否在選定象限的函數
  const isInQuadrant = (value, axisType) => {
    // 當 selectedDirection 為 'all' 時，不高亮任何特定象限的刻度，讓用戶看到全部範圍
    if (selectedDirection === 'all') return false; 
    if (selectedDirection === 'bl') {
      return axisType === 'x' ? value <= midPoint : value <= midPoint;
    }
    if (selectedDirection === 'tl') {
      return axisType === 'x' ? value <= midPoint : value > midPoint;
    }
    if (selectedDirection === 'br') {
      return axisType === 'x' ? value > midPoint : value <= midPoint;
    }
    if (selectedDirection === 'tr') {
      return axisType === 'x' ? value > midPoint : value > midPoint;
    }
    return false;
  };

  ticks.forEach(tick => {
    // X 軸
    const labelX = document.createElement('span');
    labelX.className = 'tick-label';
    labelX.textContent = tick;
    if (isInQuadrant(tick, 'x')) {
      labelX.classList.add('active-quadrant');
    }
    axisX.appendChild(labelX);

    // Y 軸
    const labelY = document.createElement('span');
    labelY.className = 'tick-label';
    labelY.textContent = tick;
    if (isInQuadrant(tick, 'y')) {
      labelY.classList.add('active-quadrant');
    }
    axisY.appendChild(labelY);
  });

  // 更新地圖容器的視覺「縮放」
  mapContainer.classList.remove('focused-quadrant'); // 移除舊的聚焦 class
  mapContainer.style.transform = 'scale(1) translate(0, 0)'; // 恢復預設

  if (selectedDirection !== 'all') {
    mapContainer.classList.add('focused-quadrant');
    let scale = currentMapScale; // 使用 currentMapScale
    let translateX = '0%';
    let translateY = '0%';

    // 根據象限計算位移百分比，使對應象限大致居中放大
    // 這些百分比需要基於容器尺寸和放大倍率進行微調才能完美
    const offsetFactor = ((scale - 1) / 2) * 100 / scale; // 簡化計算偏移的因子

    if (selectedDirection === 'tl') {
      translateX = `${offsetFactor}%`;
      translateY = `${offsetFactor}%`;
    } else if (selectedDirection === 'tr') {
      translateX = `-${offsetFactor}%`;
      translateY = `${offsetFactor}%`;
    } else if (selectedDirection === 'bl') {
      translateX = `${offsetFactor}%`;
      translateY = `-${offsetFactor}%`;
    } else if (selectedDirection === 'br') {
      translateX = `-${offsetFactor}%`;
      translateY = `-${offsetFactor}%`;
    }
    mapContainer.style.transform = `scale(${scale}) translate(${translateX}, ${translateY})`;
  }
}

// 初始化地圖篩選器邏輯
function initMapFilters() {
  // 方位篩選器 (單選)
  const directionFilter = document.getElementById('directionFilter');
  if (directionFilter) {
    const buttons = directionFilter.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        drawMapAxes(button.dataset.value); // 更新座標軸
        // TODO: 觸發地圖資料點更新
      });
    });
    // 預設選中 'all'
    const defaultDirButton = directionFilter.querySelector('.toggle-btn[data-value="all"]');
    if (defaultDirButton) {
      defaultDirButton.classList.add('active');
      drawMapAxes(defaultDirButton.dataset.value); // 初始繪製座標軸
    }
  }

  // 分組篩選器 (複選)
  const groupFilter = document.getElementById('groupFilter');
  if (groupFilter) {
    const buttons = groupFilter.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        // TODO: 觸發地圖更新
      });
    });
    // 預設選中 'A'
    groupFilter.querySelector('.toggle-btn[data-value="A"]')?.classList.add('active');
  }

  // 顯示資訊篩選器 (複選)
  const infoFilter = document.getElementById('infoFilter');
  if (infoFilter) {
    const buttons = infoFilter.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        // TODO: 觸發地圖更新
      });
    });
    // 預設選中 'coords' 和 'name'
    infoFilter.querySelector('.toggle-btn[data-value="coords"]')?.classList.add('active');
    infoFilter.querySelector('.toggle-btn[data-value="name"]')?.classList.add('active');
  }

  const zoomInButton = document.getElementById('zoomInBtn');
  const zoomOutButton = document.getElementById('zoomOutBtn');
  
  if (zoomInButton) {
    zoomInButton.addEventListener('click', () => {
      currentMapScale = Math.min(MAX_MAP_SCALE, currentMapScale + MAP_SCALE_STEP);
      const activeDirectionButton = document.querySelector('#directionFilter .toggle-btn.active');
      drawMapAxes(activeDirectionButton ? activeDirectionButton.dataset.value : 'all');
    });
  }

  if (zoomOutButton) {
    zoomOutButton.addEventListener('click', () => {
      currentMapScale = Math.max(MIN_MAP_SCALE, currentMapScale - MAP_SCALE_STEP);
      const activeDirectionButton = document.querySelector('#directionFilter .toggle-btn.active');
      drawMapAxes(activeDirectionButton ? activeDirectionButton.dataset.value : 'all');
    });
  }
}

/* ===== 初始化 ===== */
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM已載入，開始初始化...");

  // 1. 清理 localStorage 中的驗證狀態，要求每次都重新驗證
  localStorage.removeItem('verifyStatus');
  localStorage.removeItem('accessMode');
  // localStorage.removeItem('verified'); // 移除這行，統一使用 verifyStatus 和 accessMode

  // 2. 包裝語言選擇器並初次套用翻譯
  wrapLangSelect(); // 確保在 applyLang 之前
  applyLang(); 

  // 3. 設置語言選擇器事件
  setupLanguageSwitchers(); // 包含主選擇器和表單內選擇器的同步

  // 4. 初始化驗證碼相關事件 (但不立即檢查或顯示/隱藏遮罩)
  initVerificationEvents(); // 僅綁定事件

  // 5. 初始化分頁切換
  initTabNavigation(); // 這會處理初始 active 的 view

  // 6. 初始化專武網格
  generateWeaponGrid();

  // 7. 綁定表單內條件顯示邏輯 (介紹人、特殊兵種)
  const introSelectElement = document.getElementById('introSelect');
  const introNameBoxElement = document.getElementById('introNameBox');
  if (introSelectElement && introNameBoxElement) {
    introNameBoxElement.classList.toggle('hidden', introSelectElement.value !== 'newbie');
    introSelectElement.addEventListener('change', () => {
      introNameBoxElement.classList.toggle('hidden', introSelectElement.value !== 'newbie');
    });
  }

  const troopTypeSelectElement = document.getElementById('troopType');
  const specialOptionsElement = document.getElementById('specialOptions');
  if (troopTypeSelectElement && specialOptionsElement) {
    specialOptionsElement.classList.toggle('hidden', troopTypeSelectElement.value !== 'special');
    troopTypeSelectElement.addEventListener('change', () => {
      specialOptionsElement.classList.toggle('hidden', troopTypeSelectElement.value !== 'special');
    });
  }
  
  // 8. 更新報名人數顯示
  updateSignupCount();
  
  // 9. 移除 ensureFormsVisibility(); 和 setupDOMObserver(); 相關的調用
  // ensureFormsVisibility(); // 移除
  // setupDOMObserver(); // 移除
  
  // 10. 更新資料列表
  refreshSignupList();
  refresh();
  
  // 11. 處理初始驗證碼遮罩的顯示
  const verifyOverlay = document.getElementById('verifyOverlay');
  const verifyCodeInput = document.getElementById('verifyCode');
  
  // 檢查之前是否有通過驗證 (雖然開頭清除了，但以防萬一或未來邏輯調整)
  const storedVerifyStatus = localStorage.getItem('verifyStatus');
  const storedAccessMode = localStorage.getItem('accessMode');

  if (storedVerifyStatus === 'passed' && storedAccessMode) {
      // 如果有儲存的狀態，嘗試用該狀態進行驗證 (這段邏輯可能與開頭的清除衝突，暫時保留觀察)
      // verifyCode(storedAccessMode); // 注意：storedAccessMode 不是 code，而是 'signup', 'weapon', 'admin'
      // 更好的做法是直接恢復 UI 狀態
      console.log(`恢復上次驗證狀態: ${storedAccessMode}`);
      if (verifyOverlay) verifyOverlay.style.display = 'none';
      // 此處應根據 storedAccessMode 恢復導覽列等，但 verifyCode 函數已處理
      // 實際上，因為開頭清除了 localStorage，這段 if 大概率不會執行
  } else {
      // 未驗證或 localStorage 已清除，顯示驗證碼遮罩
      if (verifyOverlay) verifyOverlay.style.display = 'flex';
      if (verifyCodeInput) verifyCodeInput.focus();
      // 隱藏所有導覽按鈕，直到驗證成功
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn) btn.style.display = 'none';
    });
  }
  
  // 12. 管理員頁面初始化 (如果一開始就是管理員模式，雖然不太可能)
  if (isAdmin && document.getElementById('admin')?.classList.contains('active')) {
    updateAdminSection();
    loadSettings();
    refreshAdminData();
  }

  // 13. 移除測試和調試面板相關的自動調用，如果不再需要
  // setTimeout(testFormInputs, 2000); // 移除或註解
  // setTimeout(createDebugPanel, 500); // 移除或註解

  // 14. Header 重新整理按鈕事件
  const refreshButton = document.getElementById('refreshAllData');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      console.log("手動觸發資料更新...");
      refreshSignupList();
      refresh();
      if (isAdmin) {
        refreshAdminData();
      }
      const lang = document.getElementById('langSwitch')?.value || 'zh';
      alert(I18N[lang].msgPageDataRefreshed || "頁面資料已重新整理！"); // 修改，並保留一個備用文字
    });
  }
  
  // 11. 初始化地圖篩選器
  initMapFilters();

  // 12. 管理員頁面初始化 (如果一開始就是管理員模式，雖然不太可能)
  if (isAdmin && document.getElementById('admin')?.classList.contains('active')) {
    updateAdminSection();
    loadSettings();
    refreshAdminData();
  }

  console.log("初始化完成");
});

// 設置語言選擇器同步功能
function setupLanguageSwitchers() {
  const mainLangSwitch = document.getElementById('langSwitch');
  const formLangSwitch = document.getElementById('formLangSwitch');
  
  if (mainLangSwitch) {
    mainLangSwitch.addEventListener('change', () => {
    const langValue = mainLangSwitch.value;
      if (formLangSwitch) formLangSwitch.value = langValue;
    applyLang();
      generateWeaponGrid();
    refreshSignupList();
    refresh();
  });
  }

  if (formLangSwitch) {
    formLangSwitch.addEventListener('change', () => {
      const langValue = formLangSwitch.value;
      if (mainLangSwitch) mainLangSwitch.value = langValue;
    applyLang();
      generateWeaponGrid();
    refreshSignupList();
    refresh();
  });
}
}

// initTabNavigation (如果需要獨立定義)
function initTabNavigation() {
  console.log("初始化分頁切換 (確認 .nav-btn 事件)");
  const navButtons = document.querySelectorAll('.nav-btn');
  // const views = document.querySelectorAll('.view'); // views 的顯隱由 .nav-btn 的 click 事件處理

  // 確保初始 active 的 view 被正確顯示
  // .nav-btn 的 click 事件處理器會處理 .view 的 active class 和 display
  const activeButton = document.querySelector('.nav-btn.active');
  if (activeButton) {
      // activeButton.click(); // 避免在初始化時就觸發所有 click 邏輯，尤其是數據刷新
      // 只處理 view 的初始顯示
      document.querySelectorAll('.view').forEach(v => {
          v.classList.toggle('active', v.id === activeButton.dataset.target);
      });
  } else {
      // 如果沒有 active 的按鈕，預設激活第一個 (通常是報名)
      const firstNavButton = document.querySelector('.nav-btn');
      if (firstNavButton) {
          // firstNavButton.click();
          firstNavButton.classList.add('active');
          document.getElementById(firstNavButton.dataset.target)?.classList.add('active');

      }
  }
}

// 生成武器網格
function generateWeaponGrid() {
  // console.log("生成武器網格"); // 移除 console.log
  const weaponGrid = document.getElementById('weaponGrid');
  if (!weaponGrid) return;

  weaponGrid.innerHTML = '';
  const lang = document.getElementById('langSwitch')?.value || 'zh'; // 獲取當前語言

  const weaponCategories = [ // 此處定義保持中文，作為查找翻譯的 key
    { id: 'special',  name: '特殊',     color: '#ff7043', weapons: ['我是地鼠號', '劍盾', '沒想法', '大餅盟主'] },
    { id: 'shield',   name: '盾兵',     color: '#ffb74d', weapons: ['重盾', '槍盾', '錘盾', '刀盾'] },
    { id: 'infantry', name: '步兵',     color: '#4caf50', weapons: ['長槍', '長矛', '長戈', '陌刀', '長劍', '雙槍'] },
    { id: 'archer',   name: '弓兵',     color: '#2196f3', weapons: ['長弓', '連弩', '毒弓', '獵人', '重弩', '火弓'] },
    { id: 'cavalry',  name: '騎兵',     color: '#9c27b0', weapons: ['劍騎', '槍騎', '刀騎', '重騎', '弓騎', '斧騎'] }
  ];

  weaponCategories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = `weapon-category type-${category.id}`;
    categoryDiv.style.backgroundColor = category.color;

    const categoryTitle = document.createElement('h4');
    // 從 I18N 獲取分類名稱的翻譯
    categoryTitle.textContent = I18N[lang]?.weaponGridDisplay?.categories?.[category.name] || category.name;
    categoryDiv.appendChild(categoryTitle);

    const rows = [];
    for (let i = 0; i < category.weapons.length; i += 4) {
      rows.push(category.weapons.slice(i, i + 4));
    }

    rows.forEach(rowWeapons => {
      const buttonGroup = document.createElement('div');
      buttonGroup.className = 'weapon-button-group';

      rowWeapons.forEach(weaponNameKey => { // weaponNameKey 是中文武器名，用作 key
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'weapon-button';
        button.dataset.weapon = weaponNameKey; // data-weapon 儲存中文武器名，供後台使用
        // 從 I18N 獲取武器按鈕文字的翻譯
        button.textContent = I18N[lang]?.weaponGridDisplay?.weapons?.[weaponNameKey] || weaponNameKey;

        button.addEventListener('click', () => {
          document.querySelectorAll('.weapon-button.active').forEach(btn => {
            btn.classList.remove('active');
          });
          button.classList.add('active');
          window.selectedWeapon = weaponNameKey; // selectedWeapon 儲存中文武器名
        });
        buttonGroup.appendChild(button);
      });
      categoryDiv.appendChild(buttonGroup);
    });
    weaponGrid.appendChild(categoryDiv);
  });
  // console.log("武器網格生成完成"); // 移除 console.log
}

// 初始化調試面板
function initDebugPanel() {
  console.log("初始化調試面板");
  
  // 創建調試面板
  const debugPanel = document.createElement('div');
  debugPanel.id = 'debugPanel';
  debugPanel.style.position = 'fixed';
  debugPanel.style.bottom = '10px';
  debugPanel.style.right = '10px';
  debugPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  debugPanel.style.color = 'white';
  debugPanel.style.padding = '10px';
  debugPanel.style.borderRadius = '5px';
  debugPanel.style.maxWidth = '350px';
  debugPanel.style.maxHeight = '200px';
  debugPanel.style.overflow = 'auto';
  debugPanel.style.zIndex = '9999';
  debugPanel.style.fontSize = '12px';
  debugPanel.style.fontFamily = 'monospace';
  debugPanel.innerHTML = '<h3>調試面板</h3><div id="debugContent"></div>';
  document.body.appendChild(debugPanel);
  
  // 切換調試面板顯示/隱藏
  const debugToggle = document.createElement('button');
  debugToggle.textContent = '顯示/隱藏調試';
  debugToggle.style.position = 'fixed';
  debugToggle.style.bottom = '10px';
  debugToggle.style.left = '10px';
  debugToggle.style.zIndex = '9999';
  debugToggle.addEventListener('click', () => {
    debugPanel.style.display = debugPanel.style.display === 'none' ? 'block' : 'none';
  });
  document.body.appendChild(debugToggle);
  
  // 更新調試信息
  function updateDebugInfo() {
    const debugContent = document.getElementById('debugContent');
    if (!debugContent) return;
    
    // 收集調試信息
    let info = '';
    
    // 檢查當前頁面
    const activeView = document.querySelector('.view.active');
    info += `<p>當前頁面: ${activeView ? activeView.id : '無'}</p>`;
    
    // 檢查表單可見性
    const signupForm = document.getElementById('signupForm');
    info += `<p>報名表單: ${signupForm ? '存在' : '不存在'}, 顯示: ${signupForm ? window.getComputedStyle(signupForm).display : '無'}</p>`;
    
    const weaponForm = document.getElementById('weaponForm');
    info += `<p>專武表單: ${weaponForm ? '存在' : '不存在'}, 顯示: ${weaponForm ? window.getComputedStyle(weaponForm).display : '無'}</p>`;
    
    // 檢查關鍵輸入欄位
    const uidInput = document.getElementById('playerUID');
    info += `<p>UID輸入: ${uidInput ? '存在' : '不存在'}, 顯示: ${uidInput ? window.getComputedStyle(uidInput).display : '無'}</p>`;
    
    const nameInput = document.getElementById('playerName');
    info += `<p>暱稱輸入: ${nameInput ? '存在' : '不存在'}, 顯示: ${nameInput ? window.getComputedStyle(nameInput).display : '無'}</p>`;
    
    const rankTier = document.getElementById('rankTier');
    info += `<p>段位選擇: ${rankTier ? '存在' : '不存在'}, 顯示: ${rankTier ? window.getComputedStyle(rankTier).display : '無'}</p>`;
    
    const weaponUID = document.getElementById('weaponUID');
    info += `<p>專武UID: ${weaponUID ? '存在' : '不存在'}, 顯示: ${weaponUID ? window.getComputedStyle(weaponUID).display : '無'}</p>`;
    
    const weaponGrid = document.getElementById('weaponGrid');
    info += `<p>武器網格: ${weaponGrid ? '存在' : '不存在'}, 顯示: ${weaponGrid ? window.getComputedStyle(weaponGrid).display : '無'}</p>`;
    
    // 更新調試面板內容
    debugContent.innerHTML = info;
  }
  
  // 定期更新調試信息
  setInterval(updateDebugInfo, 2000);
}

// 初始化報名計數器
async function updateSignupCount() {
  const signupData = await getData();
  const currentCount = document.getElementById('currentSignupCount');
  const maxCount = document.getElementById('maxSignupCount');
  
  if (currentCount && maxCount) {
    currentCount.textContent = signupData.length;
    // 從 clownSettings 讀取最大人數，預設40
    const settings = JSON.parse(localStorage.getItem('clownSettings') || '{}');
    const playerCount = settings.playerCount ? parseInt(settings.playerCount, 10) : 40;
    maxCount.textContent = playerCount.toString();
  }
}

// 輔助函數，用於複製團隊結果時的格式化
function formatTeamForCopy(team, lang, teamPrefix) {
  if (!team || team.length === 0) return "";
  return team
    .map((p, index) => {
      const teamId = `${teamPrefix}${(index + 1).toString().padStart(2, '0')}`;
      const rank = `${I18N[lang]?.rankDisplay?.[p.tier] || p.tier}${p.level && p.level !== '-' ? p.level : ''}`;
      // 假設 p.introNote 是身分的註解，如果沒有則為空字串
      const introText = `${I18N[lang]?.introDisplay?.[p.intro] || p.intro}${p.introNote ? '(' + p.introNote + ')' : ''}`;
      return `${teamId} ${p.uid} ${p.name} ${rank} ${introText}`;
    })
    .join('\n');
}

// 确保 ensureFormsVisibility 函数被移除或清空
function ensureFormsVisibility() {
  // 此函數的內容已被移除，因為 CSS 的 !important 問題解決後，
  // 元素的顯隱主要由 CSS 的 .hidden class 和 JS 的 classList.toggle 控制。
  // 不需要再強制修改 style。
  console.log("ensureFormsVisibility 已被清空或移除。");
}

// 移除 setupDOMObserver 函数，如果不再需要
function setupDOMObserver() {
  console.log("setupDOMObserver 已被移除。");
}

// 移除 initVerification 函数的旧定义，改用 initVerificationEvents
/*
function initVerification() {
  // 旧的 initVerification 逻辑...
}
*/

// 移除 initTabNavigation 函数的旧定义，如果其逻辑已整合
/*
function initTabNavigation() {
  // 旧的 initTabNavigation 逻辑...
}
*/

// 移除 createDebugPanel 和 testFormInputs
function createDebugPanel() {
  console.log("createDebugPanel 已被移除。");
}
function testFormInputs() {
  console.log("testFormInputs 已被移除。");
}

// 輔助函數：更新玩家列表格 (用於管理員頁面)
// 預留位置，目前未實現完整功能
function refreshPlayerTable(query = '') {
  // console.log('refreshPlayerTable called with query:', query);
  // 此函數的完整實現被省略，若要啟用管理員的玩家列表搜尋和管理，需完成此處邏輯
}

// 輔助函數：更新專武列表格 (用於管理員頁面)
// 預留位置，目前未實現完整功能
function refreshWeaponTable(query = '') {
  // console.log('refreshWeaponTable called with query:', query);
  // 此函數的完整實現被省略，若要啟用管理員的專武列表搜尋和管理，需完成此處邏輯
}

// ===== Legacy LocalStorage Compatibility Wrappers =====
// 用於兼容舊有程式碼中對 getData/getWeaponData/saveData/saveWeaponData 的呼叫
async function getData() {
  return await getSignups();
}
async function getWeaponData() {
  return await getSignups();
}
function saveData(d) {
  console.warn('saveData() 已棄用，請改用 Firebase 儲存函式');
}
function saveWeaponData(d) {
  console.warn('saveWeaponData() 已棄用，請改用 Firebase 儲存函式');
}



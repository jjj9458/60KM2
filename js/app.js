/* ===== I18N (簡略) ===== */
const I18N={
  zh:{
    siteTitle:"九萬畝插爆聯盟系統",
    navSignup:"報名表",navWeapon:"專武登記",navDetail:"詳細資料",navAdmin:"管理員設定",btnAdmin:"管理員",
    posXPlaceholder:"(限0-599)",posYPlaceholder:"(限0-599)",
    signupTitle:"報名表",
    uidLabel:"遊戲UID",uidPlaceholder:"(限正整數)",
    nameLabel:"遊戲暱稱",namePlaceholder:"輸入你的暱稱",
    rankLabel:"段位",rankTierDefault:"--選擇段位--",rankLevelDefault:"--選擇階級--",
    rankNone:"無段位",rankIron:"黑鐵",rankBronze:"青銅",rankSilver:"白銀",
    rankGold:"黃金",rankPlatinum:"鉑金",rankDiamond:"鑽石",rankMaster:"大師",rankKing:"王者",
    payLabel:"課金範圍",payDefault:"--請選擇--",payHigh:"1000▲",payMedium:"300~1000",payLow:"300▼",
    introLabel:"身分組",
    introDefault:"--請選擇--",
    introNewbie:"新人",introRookie:"菜基",introDumb:"傻屌",introCore:"核心",
    introNameLabel:"推薦人名稱",introNamePlaceholder:"輸入名稱",
    langLabel:"選擇語言",langZh:"中文",langEn:"英文",
    btnSubmit:"送出",
    weaponTitle:"專武登記",
    weaponUidLabel:"遊戲UID",
    posXLabel:"X座標",posYLabel:"Y座標",
    troopLabel:"兵種選擇",troopDefault:"選擇你的兵種",
    troopSpear:"步兵",troopBow:"弓兵",troopTank:"盾兵",troopCavalry:"騎兵",troopSpecial:"特殊",
    specialLabel:"特殊類型",specialDefault:"選擇特殊兵種",
    specialSwordshield:"劍盾",specialMole:"地鼠",specialCookie:"大餅盟主",
    weaponGridTitle:"融合武器",
    detailTitle:"詳細資料",
    unfilledATitle:"A隊未滿",unfilledBTitle:"B隊未滿",
    statATitle:"A隊統計",statBTitle:"B隊統計",
    listATitle:"A隊列表",listBTitle:"B隊列表",
    unfilledCTitle:"C隊未滿", // 新增
    statCTitle:"C隊統計",         // 新增
    listCTitle:"C隊列表",         // 新增
    colWeapon:"武器",colCount:"數量",colSuspicious:"可疑",
    colUid:"UID",colName:"暱稱",colRank:"段位",colPay:"課金",colPosX:"X座標",colTroop:"兵種",
    colIntro:"身分",colActions:"操作",
    adminTitle:"管理員設定",
    dataManageTitle:"資料管理",
    btnExport:"匯出資料",btnImport:"匯入資料",btnClear:"清空資料",
    playerManageTitle:"玩家管理",
    searchPlayerPlaceholder:"搜尋UID或暱稱...",
    weaponManageTitle:"專武管理",
    searchWeaponPlaceholder:"搜尋UID或武器...",
    copyright:"© 2025 九萬畝插爆",
    btnEdit:"編輯",btnDelete:"刪除",
    msgConfirmDelete:"確定要刪除嗎？",
    msgSuccess:"操作成功！",
    msgError:"操作失敗！",
    msgInvalidCode:"無效的驗證碼！",
    msgAdminRequired:"需要管理員權限！",
    verifyTitle:"請輸入驗證碼",
    verifyPlaceholder:"輸入驗證碼...",
    btnVerify:"驗證",
    langPrefix:"語言：",
    signupList: "報名列表",
    btnModify: "修改",
    btnDelete: "刪除",
    msgDeleteConfirm: "輸入UID以確認刪除：",
    msgModified: "資料已修改！",
    msgDeleted: "資料已刪除！",
    viewData: "檢視資料",
    teamResult: "分隊結果",
    btnAutoAssign: "自動分隊",
    btnReorder: "重新編號",
    btnCopyResult: "複製結果",
    // 新增 alert 相關訊息
    msgSignupSuccess: "報名成功！",
    msgWeaponRegSuccess: "專武登記成功！",
    msgDataImportSuccess: "資料匯入成功！",
    msgInvalidDataFormat: "無效的資料格式！",
    msgFileReadError: "檔案讀取錯誤！",
    msgDataCleared: "資料已清空！",
    msgNicknameMinLength: "暱稱至少需要2個字！",
    msgPlayerDataUpdated: "玩家資料已更新！",
    msgCoordRangeError: "座標必須是0-599之間的數字，格式：x,y",
    msgWeaponDataUpdated: "專武資料已更新！",
    msgSignupEndDateError: "報名截止日不能晚於開局日期！",
    msgValidDateError: "請設定有效的日期！",
    msgSettingsSaved: "設定已儲存到資料庫！", // 更新訊息
    msgCopiedToClipboard: "已複製到剪貼簿！",
    msgNoResultToCopy: "沒有結果可複製！請先執行自動分隊。",
    msgPageDataRefreshed: "頁面資料已刷新！",
    msgSignupEndDateEarlier: "報名截止日必須至少早於開局日期一天。已自動為您調整。",
    weaponGridDisplay: {
      categories: {
        "特殊": "特殊",
        "盾兵": "盾兵",
        "步兵": "步兵",
        "弓兵": "弓兵",
        "騎兵": "騎兵"
      },
      weapons: {
        "地鼠號": "地鼠", "劍盾": "劍盾", "沒想法": "沒想法", "大餅盟主": "大餅盟主",
        "重盾": "重盾", "槍盾": "槍盾", "錘盾": "錘盾", "刀盾": "刀盾",
        "長槍": "長槍", "長矛": "長矛", "長戈": "長戈", "陌刀": "陌刀", "長劍": "長劍", "雙槍": "雙槍",
        "長弓": "長弓", "連弩": "連弩", "毒弓": "毒弓", "獵人": "獵人", "重弩": "重弩", "火弓": "火弓",
        "劍騎": "劍騎", "槍騎": "槍騎", "刀騎": "刀騎", "重騎": "重騎", "弓騎": "弓騎", "斧騎": "斧騎"
      }
    },
    rankDisplay: {
      none: "無段位",
      iron: "鋼鐵",
      bronze: "青銅",
      silver: "白銀",
      gold: "黃金",
      platinum: "白金",
      diamond: "鑽石",
      master: "宗師",
      king: "傳奇王者"
    },
    introDisplay: {
      newbie: "新人",
      rookie: "菜基",
      dumb: "傻屌",
      core: "核心"
    },
    weapons:{
      special: ["地鼠","劍盾","沒想法","大餅盟主"],
      shield: ["重盾","槍盾","錘盾","刀盾"],
      infantry: ["長槍","長矛","長戈","陌刀","長劍","雙槍"],
      archer: ["長弓","連弩","毒弓","獵人","重弩","火弓"],
      cavalry: ["劍騎","槍騎","刀騎","重騎","弓騎","斧騎"]
    },
    // 新增地圖相關中文
    navMap: "地圖檢視",
    mapTitle: "地圖檢視",
    filterDirection: "方位篩選：",
    dirAll: "全部",
    dirBL: "左下",
    dirTL: "左上",
    dirBR: "右下",
    dirTR: "右上",
    filterGroup: "分組篩選：",
    groupA: "A組",
    groupB: "B組",
    groupC: "C組",
    filterInfo: "顯示資訊：",
    infoCoordsLabel: "座標",
    infoNameLabel: "暱稱",
    infoWeaponLabel: "武器",
    infoIdentityLabel: "身分",
    mapPlaceholder: "地圖區域載入中或無資料...",
    zoomInTitle: "放大",
    zoomOutTitle: "縮小",
    panResetTitle: "重置視圖",
    hoverHintMap: "滑鼠懸停或點擊點位查看詳情。",
    teamAssignmentTitle: "自動分隊", // 新增
    adminScribe: "文書", // 新增
    adminCommander: "指揮", // 新增
    internSuffix: "(實習)", // 新增
    msgRankLevelRequired: "請選擇段位階級！", // 針對 #1 新增
    msgSpecialTypeRequired: "請選擇特殊兵種類型！", // 針對 #3 新增
    msgTroopOrWeaponRequired: "「兵種選擇」或「融合武器」至少擇一！", // 針對 #3 新增
    msgPayRequired: "請選擇能否裸捐專武！", // 報名表用
    msgIntroRequired: "請選擇您的身分組！", // 報名表用
    msgWeaponUidRequired: "專武登記請輸入遊戲UID！", // 專武登記用
    msgWeaponUidInvalid: "專武登記的遊戲UID必須是正整數！", // 專武登記用
    msgPosXRequired: "請輸入X座標！", // 專武登記用
    msgPosYRequired: "請輸入Y座標！", // 專武登記用
    msgAdminPassSet: "管理員密碼已設定/更新。",
    msgAdminPassNotSet: "提醒：管理員密碼未設定，將使用預設密碼。",
    msgDefaultAdminUsed: "已使用預設管理員密碼登入，該密碼雜湊值已儲存。",
    msgMustSetEventCodeA: "請先在管理設定中設定有效的「報名表驗證碼」！",
    msgErrorSavingSettings: "儲存設定失敗！",
    msgErrorLoadingSettings: "讀取設定失敗！",
    msgUnknownTeamError: "錯誤：未知的團隊，無法載入/儲存設定。",
    msgAdminEventCodeANotesLabel: "報名驗證碼備註 (管理頁顯示):",
    msgAdminGroupNotesLabel: "團隊備註 (管理員內部使用):",
    msgCurrentManagedTeamLabel: "目前管理團隊：",
    adminPasswordSettingsTitle: "驗證碼與團隊設定",
    msgReorderConfirm: "確定要根據報名時間重新編號所有玩家嗎？此操作不可逆。",
    msgNoDataToReorder: "沒有報名資料可供重新編號。",
    msgReorderSuccess: "重新編號成功！",
    msgErrorReordering: "重新編號失敗！",
    
    // 新增表格相關訊息
    msgNoData: "無資料",
    msgFailedToLoad: "讀取資料失敗",
    msgNoSignupData: "目前沒有報名資料",
    msgUserNotFound: "找不到該用戶的報名資料",
    msgModifyInstruction: "請在報名表單中修改資料，然後重新提交",
    msgFillRequiredFields: "請填寫所有必填欄位！",
    msgCoordWeaponUpdateSuccess: "座標及專武修改成功！",
    msgNewSignupWeaponSuccess: "補報名完成！專武登記成功！",
    unassigned: "未分組", // 新增：未分組狀態
    colPosY: "Y座標", // 新增：Y座標表頭
    colTroopWeapon: "兵種/武器", // 新增：兵種/武器表頭
    colLang: "語言", // 新增：語言表頭
    colTeam: "隊伍", // 新增：隊伍表頭 (用於專武登記預覽)
    colOrderInTeam: "編號", // 新增：隊內編號表頭 (用於專武登記預覽)
    // 假設 troopLabelMap 會被加到這裡，例如：
    troopLabelMap: {
      spear: "槍兵",
      bow: "弓兵",
      tank: "盾兵",
      cavalry: "騎兵",
      special: "特殊"
    }
  },
  en:{
    siteTitle:"SKY ⚣ OPG",
    navSignup:"Signup",navWeapon:"Weapon",navDetail:"Details",navAdmin:"Admin",btnAdmin:"Admin",
    posXPlaceholder:"(Limit 0-599)",posYPlaceholder:"(Limit 0-599)",
    signupTitle:"Signup Form",
    uidLabel:"Game UID",uidPlaceholder:"(Positive integer only)",
    nameLabel:"Game Nickname",namePlaceholder:"Enter your nickname",
    rankLabel:"Rank",rankTierDefault:"--Tier--",rankLevelDefault:"--Level--",
    rankNone:"None",rankIron:"Iron",rankBronze:"Bronze",rankSilver:"Silver",
    rankGold:"Gold",rankPlatinum:"Platinum",rankDiamond:"Diamond",rankMaster:"Master",rankKing:"King",
    payLabel:"Payment Range",payDefault:"--Select--",payHigh:"1000▲",payMedium:"300~1000",payLow:"300▼",
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
    specialLabel:"Special Type",
    specialSwordshield:"Sword & Shield",specialMole:"Excavator",specialCookie:"Cookie Leader",
    weaponGridTitle:"Fusion Weapons",
    detailTitle:"Details",
    unfilledATitle:"Team A Unfilled",unfilledBTitle:"Team B Unfilled",
    statATitle:"Team A Stats",statBTitle:"Team B Stats",
    listATitle:"Team A List",listBTitle:"Team B List",
    unfilledCTitle:"Team C Unfilled",
    statCTitle:"Team C Stats",
    listCTitle:"Team C List",
    colWeapon:"Weapon",colCount:"Count",colSuspicious:"Suspicious",
    colUid:"UID",colName:"Name",colRank:"Rank",colPay:"Pay",colPosX:"X Coord",colTroop:"Troop",
    colIntro:"Identity",colActions:"Actions",
    adminTitle:"Admin Settings",
    dataManageTitle:"Data Management",
    btnExport:"Export",btnImport:"Import",btnClear:"Clear",
    playerManageTitle:"Player Management",
    searchPlayerPlaceholder:"Search UID or name...",
    weaponManageTitle:"Weapon Management",
    searchWeaponPlaceholder:"Search UID or weapon...",
    copyright:"© 2025 GGininDer",
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
    btnReorder: "Reorder Numbers",
    btnCopyResult: "Copy Results",
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
    msgSettingsSaved: "Settings saved to database!",
    msgCopiedToClipboard: "Copied to clipboard!",
    msgNoResultToCopy: "No results to copy! Please run auto-assign first.",
    msgPageDataRefreshed: "Page data refreshed!",
    msgSignupEndDateEarlier: "Signup end date must be at least one day before the game start date. It has been adjusted for you.",
    weaponGridDisplay: {
      categories: {
        "特殊": "Special",
        "盾兵": "Shield",
        "步兵": "Spear",
        "弓兵": "Archers",
        "騎兵": "Cavalry"
      },
      weapons: {
        "地鼠號": "Excavator", "劍盾": "Sword & Shield", "沒想法": "No Idea", "大餅盟主": "Cookie Leader",
        "重盾": "Heavy shield", "槍盾": "Spear shield", "錘盾": "Hammer shield", "刀盾": "saber&shield Soldier",
        "長槍": "Longsperman", "長矛": "lancer", "長戈": "Dagger-axe Soldier", "陌刀": "Modao", "長劍": "Long Swordsman", "雙槍": "Twin spear",
        "長弓": "Long bow", "連弩": "Crossbow man", "毒弓": "Toxibowman", "獵人": "Hunter", "重弩": "Heavy crossbowman", "火弓": "Fire Bowman",
        "劍騎": "Sword cav", "槍騎": "Spear Cavalry", "刀騎": "Broadsword cav", "重騎": "Heavy cav", "弓騎": "Bow cav", "斧騎": "Axe cav"
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
      special: ["Excavator", "Sword & Shield", "No Idea", "Cookie Leader"],
      shield: ["Heavy shield", "Spear shield", "Hammer shield", "saber&shield Soldier"],
      infantry: ["Longsperman", "lancer", "Dagger-axe Soldier", "Modao", "Long Swordsman", "Twin spear"],
      archer: ["Long bow", "Crossbow man", "Toxibowman", "Hunter", "Heavy crossbowman", "Fire Bowman"],
      cavalry: ["Sword cav", "Spear Cavalry", "Broadsword cav", "Heavy cav", "Bow cav", "Axe cav"]
    },
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
    teamAssignmentTitle: "Team Auto Assignment",
    adminScribe: "Scribe",
    adminCommander: "Commander",
    internSuffix: "(Intern)",
    msgRankLevelRequired: "Please select a rank level!",
    msgSpecialTypeRequired: "Please select a special troop type!",
    msgTroopOrWeaponRequired: "Either 'Troop Type' or 'Fusion Weapon' must be selected!",
    msgPayRequired: "Please select if you can pay for a weapon!",
    msgIntroRequired: "Please select your identity!",
    msgWeaponUidRequired: "Please enter the Game UID for weapon registration!",
    msgWeaponUidInvalid: "Game UID for weapon registration must be a positive integer!",
    msgPosXRequired: "Please enter the X coordinate!",
    msgPosYRequired: "Please enter the Y coordinate!",
    msgAdminPassSet: "Admin password has been set/updated.",
    msgAdminPassNotSet: "Note: Admin password not set, using default password.",
    msgDefaultAdminUsed: "Logged in with default admin password. Password has been hashed and saved.",
    msgMustSetEventCodeA: "Please set a valid 'Signup Form Code' in Admin Settings first.",
    msgErrorSavingSettings: "Error saving settings!",
    msgErrorLoadingSettings: "Error loading settings!",
    msgUnknownTeamError: "Error: Unknown team, cannot load/save settings.",
    msgAdminEventCodeANotesLabel: "Signup Code Notes (Admin page display):",
    msgAdminGroupNotesLabel: "Team Notes (Admin internal use):",
    msgCurrentManagedTeamLabel: "Currently Managing Team: ",
    adminPasswordSettingsTitle: "Verification & Team Settings",
    msgReorderConfirm: "Are you sure you want to reorder all players based on signup time? This action cannot be undone.",
    msgNoDataToReorder: "No signup data available to reorder.",
    msgReorderSuccess: "Reordering successful!",
    msgErrorReordering: "Reordering failed!",
    
    // 新增表格相關訊息
    msgNoData: "No data available",
    msgFailedToLoad: "Failed to load data",
    msgNoSignupData: "No signup data available",
    msgUserNotFound: "User signup data not found",
    msgModifyInstruction: "Please modify the data in the signup form and submit again",
    msgFillRequiredFields: "Please fill in all required fields!",
    msgCoordWeaponUpdateSuccess: "Coordinates and weapon updated successfully!",
    msgNewSignupWeaponSuccess: "New signup complete! Weapon registration successful!",
    unassigned: "Unassigned", // Added: Unassigned status
    colPosY: "Y Coord", // Added: Y Coordinate column header
    colTroopWeapon: "Troop/Weapon", // Added: Troop/Weapon column header
    colLang: "Language", // Added: Language column header
    colTeam: "Team", // Added: Team column header (for weapon reg preview)
    colOrderInTeam: "Order No.", // Added: Order in team column header (for weapon reg preview)
    // Assuming troopLabelMap will be added here, e.g.:
    troopLabelMap: {
      spear: "Spearman",
      bow: "Archer",
      tank: "Tank",
      cavalry: "Cavalry",
      special: "Special"
    }
  }
};

/* ===== 新增：段位計分函數 ===== */
function getRankScore(player) {
    const tier = player.rank; // e.g., 'gold'
    const minor = player.rankMinor; // e.g., '1', '2', '3', or '-'

    // 段位順序由低到高，以及對應的最低階級基礎分數
    const tierSettings = {
        'none':     { baseScore: 50, levels: 0 },
        'iron':     { baseScore: 150, levels: 2 }, // 黑鐵II是最低
        'bronze':   { baseScore: 350, levels: 3 }, // 青銅III是最低
        'silver':   { baseScore: 650, levels: 3 }, // 白銀III是最低
        'gold':     { baseScore: 950, levels: 3 }, // 黃金III是最低
        'platinum': { baseScore: 1250, levels: 4 },// 鉑金IV是最低
        'diamond':  { baseScore: 1650, levels: 5 },// 鑽石V是最低
        'master':   { baseScore: 2150, levels: 3 },// 大師III是最低
        'king':     { baseScore: 2450, levels: 0 }
    };

    if (!tier || !tierSettings[tier]) {
        console.warn(`未知段位: ${tier} for player:`, player);
        return 0; // 對於未知或無效的段位返回0分
    }

    const setting = tierSettings[tier];
    if (setting.levels === 0) { // 如 無段位 或 王者
        return setting.baseScore;
    }

    let playerMinorLevel = parseInt(minor, 10);

    // 如果 minor 無效或未提供，則視為該段位的最低階級（即 baseScore 代表的階級）
    if (isNaN(playerMinorLevel) || playerMinorLevel < 1 || playerMinorLevel > setting.levels) {
        return setting.baseScore; 
    }

    // 分數 = 該段位最低階的分數 + (該段位的總階級數 - 玩家的階級) * 100
    // 例如：黃金 (基礎950分代表黃金III，共3階)
    // 黃金I (minor=1): 950 + (3 - 1) * 100 = 1150
    // 黃金II (minor=2): 950 + (3 - 2) * 100 = 1050
    // 黃金III (minor=3): 950 + (3 - 3) * 100 = 950
    return setting.baseScore + (setting.levels - playerMinorLevel) * 100;
}

/* ===== Global Variables & Constants for Multi-Team ===== */
const TEAM_IDS = ["TeamA", "TeamB", "TeamC", "TeamD", "TeamE", "TeamF"];
// 新增常量：Firebase 資料根節點
const DB_ROOT = '60km2';
window.currentTeamId = null; // Will be set after successful verification (e.g., "TeamA")
// window.eventCode is already declared in index.html and primarily managed by verifyCodeA input / loadSettings / verifyCode
// It will store the eventCodeA of the currentTeamId

/* ===== SHA-1 Hashing Function ===== */
async function sha1(str) {
  if (typeof str !== 'string') {
    str = String(str); // Ensure input is a string
  }
  const buffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-1', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

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

// 密碼雜湊函數
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// 修改驗證碼驗證函數
async function verifyCode(code) {
  try {
    const hashedCode = await hashPassword(code);
    const snapshot = await db.ref('settings').once('value');
    const settings = snapshot.val();
    
    if (!settings || !settings.verifyCodeA) {
      Logger.warn('驗證碼未設定');
      return false;
    }

    return hashedCode === settings.verifyCodeA;
  } catch (error) {
    Logger.error('驗證碼驗證錯誤:', error);
    return false;
  }
}

// 修改管理員密碼儲存函數
async function saveAdminSettings() {
  try {
    const passwordInput = document.getElementById('adminPasswordInput');
    const newPassword = passwordInput.value.trim();
    
    if (newPassword) {
      const hashedPassword = await hashPassword(newPassword);
      await db.ref('settings/adminPassword').set(hashedPassword);
      passwordInput.value = ''; // 清除輸入框
      alert(I18N[window.currentLang].msgAdminPassSet);
    }
    
    // ... 其他設定儲存邏輯 ...
  } catch (error) {
    console.error('儲存設定錯誤:', error);
    alert(I18N[window.currentLang].msgErrorSavingSettings);
  }
}

async function verifyCode(code) {
  const langSwitch = document.getElementById('langSwitch');
  const currentLang = langSwitch ? langSwitch.value : 'zh';

  if (!code) {
    alert(I18N[currentLang].msgInvalidCode);
    return false;
  }

  const trimmedCode = code.trim();
  let isValidCode = false;
  let accessMode = null; 
  let determinedTeamId = null;
  window.eventCode = null; 

  const teamPrefixMatch = trimmedCode.match(/^([A-F])_(.*)$/i);
  let potentialTeamPrefix = null;

  if (teamPrefixMatch) {
    potentialTeamPrefix = teamPrefixMatch[1].toUpperCase();
    determinedTeamId = `Team${potentialTeamPrefix}`;
  } 

  if (determinedTeamId) {
    try {
      const settingsSnapshot = await db.ref(`${DB_ROOT}/${determinedTeamId}/systemSettings`).once('value');
      if (settingsSnapshot.exists()) {
        const settings = settingsSnapshot.val();
        const adminPasswordDB = settings.adminPassword; // Now reading adminPassword (plaintext)
        const eventCodeADB = settings.eventCodeA; 

        // Check for Admin Access (plaintext comparison)
        if (adminPasswordDB && trimmedCode === adminPasswordDB) {
          isValidCode = true;
          accessMode = 'admin';
          console.log(`Admin access for ${determinedTeamId} using plaintext password.`);
        } else if (!adminPasswordDB && trimmedCode.toLowerCase() === `${potentialTeamPrefix.toLowerCase()}_adm`) {
          // First-time admin login with default code (e.g., A_adm)
          // Save the default admin code as the plaintext password
          await db.ref(`${DB_ROOT}/${determinedTeamId}/systemSettings/adminPassword`).set(trimmedCode);
          isValidCode = true;
          accessMode = 'admin';
          console.log(`Default admin code ${trimmedCode} used for ${determinedTeamId}. Plaintext password saved.`);
          alert(I18N[currentLang].msgDefaultAdminUsed || `預設管理員驗證碼 ${trimmedCode} 已啟用並儲存。`);
        }

        // If not admin, check for Event Code A access
        if (!isValidCode && eventCodeADB && trimmedCode === eventCodeADB) {
          isValidCode = true;
          window.eventCode = eventCodeADB; 
          const signupEndDateStr = settings.signupEndDate;
          if (signupEndDateStr) {
            const signupEndDate = new Date(signupEndDateStr);
            signupEndDate.setHours(23, 59, 59, 999);
            accessMode = (new Date() <= signupEndDate) ? 'signup' : 'weapon';
          } else {
            accessMode = 'signup'; 
          }
          console.log(`Event code access for ${determinedTeamId} using ${eventCodeADB}. Mode: ${accessMode}`);
        }
      }
    } catch (error) {
      console.error(`Error fetching or processing settings for ${determinedTeamId}:`, error);
    }
  }

  if (isValidCode && accessMode && determinedTeamId) {
    window.currentTeamId = determinedTeamId;
    currentMode = accessMode;
    isAdmin = (accessMode === 'admin');

    if (isAdmin) {
        const settingsSnapshot = await db.ref(`${DB_ROOT}/${determinedTeamId}/systemSettings`).once('value');
        if (settingsSnapshot.exists()) {
            window.eventCode = settingsSnapshot.val().eventCodeA || null;
        }
    } 
    
    document.getElementById('verifyOverlay').style.display = 'none';

    const navSignup = document.getElementById('navSignup');
    const navWeapon = document.getElementById('navWeapon');
    const navDetail = document.getElementById('navDetail');
    const navAdmin = document.getElementById('navAdmin');
    const navMap = document.getElementById('navMap');
    
    [navSignup, navWeapon, navDetail, navAdmin, navMap].forEach(nav => { if (nav) nav.style.display = 'none'; });

    if (accessMode === 'signup') {
      if (navSignup) navSignup.style.display = 'inline-flex';
      if (navSignup) navSignup.click();
    } else if (accessMode === 'weapon') {
      if (navWeapon) navWeapon.style.display = 'inline-flex';
      if (navDetail) navDetail.style.display = 'inline-flex';
      if (navMap) navMap.style.display = 'inline-flex';
      if (navWeapon) navWeapon.click();
    } else if (accessMode === 'admin') {
      [navSignup, navWeapon, navDetail, navMap, navAdmin].forEach(nav => {
        if (nav) nav.style.display = 'inline-flex';
      });
      if (navAdmin) navAdmin.click();
      await loadSettings(); 
    }

    await populateVerifyHint();
    await refreshSignupList();
    await refresh();
    
    return true;
  } else {
    alert(I18N[currentLang].msgInvalidCode + (teamPrefixMatch ? "" : " 驗證碼可能需要團隊前綴 (例如 A_xxx)。"));
    window.currentTeamId = null;
    window.eventCode = null;
    const verifyCodeInput = document.getElementById('verifyCode');
    if (verifyCodeInput) {
      verifyCodeInput.value = '';
      verifyCodeInput.focus();
    }
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
  const p = prompt(I18N[document.getElementById('langSwitch')?.value || 'zh'].verifyPlaceholder || "管理員驗證碼？"); // Use I18N for prompt
  if (p) { // Check if user entered something
  await verifyCode(p);
  }
});

/* ===== Nav 切換 ===== */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', async () => { // 將事件處理器設為 async
    // Ẩn tất cả các view và xóa class active khỏi tất cả các button
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Hiển thị view mục tiêu và thêm class active cho button được click
    btn.classList.add('active');
    const targetViewId = btn.dataset.target;
    const targetView = document.getElementById(targetViewId);
    if (targetView) {
      targetView.classList.add('active');
    }

    // --- 新增：在切換視圖前統一更新數據 ---
    console.log(`[NavClick] Navigating to ${targetViewId}. Refreshing data...`);
    if (window.currentTeamId) { // 只有在已驗證且有 currentTeamId 時才執行刷新
      await populateVerifyHint(); // 更新驗證碼提示 (可能包含隊伍特定資訊)
      await refreshSignupList();    // 刷新報名列表 (總是被需要)
      await refresh();            // 刷新詳細資料頁、專武頁預覽等通用數據
      if (isAdmin) {            // 如果是管理員
        console.log(`[NavClick] Admin is true, calling refreshAdminData for ${targetViewId}.`);
        await refreshAdminData(); // 刷新管理員頁面的特定數據 (例如根據 playerCount 顯示的列表)
                                  // updateAdminSection() 主要處理事件監聽器和靜態UI，數據由 refreshAdminData 處理
      }
      // updateSignupCount(); // refreshSignupList 和 refresh/refreshAdminData 應該會處理計數器更新
      console.log(`[NavClick] Data refresh complete for ${targetViewId}.`);
    } else {
      console.warn('[NavClick] No currentTeamId, skipping data refresh.');
      // 如果未驗證，某些頁面可能需要清空或顯示提示
      if (targetViewId === 'detail' || targetViewId === 'admin') {
        // 可以考慮清空這些頁面的表格或顯示「請先驗證」的訊息
      }
    }
    // --- 結束新增的更新數據邏輯 ---
    
    // 原有的特定視圖處理邏輯 (可以檢視是否仍必要或已被上述通用刷新覆蓋)
    /* 原有邏輯，暫時註解掉，看通用刷新是否足夠
    refreshSignupList(); // 已在上面執行
    updateSignupCount(); // refreshSignupList/refresh 應處理

    if (targetViewId === 'admin') {
      if (isAdmin) {
        updateAdminSection(); // 確保管理員區塊的事件監聽等被正確設置
        // refresh(); // 已在上面執行
      } 
    } else if (targetViewId === 'detail'){
      // refresh(); // 已在上面執行
      // if (isAdmin) refreshAdminData(); // 已在上面執行
    } else {
      // For other views like signup, weapon, map
      // refresh(); // 已在上面執行
    }
    */

    // 確保特定元素的條件顯示在切換視圖後正確執行
    const introSelectElement = document.getElementById('introSelect');
    if (introSelectElement && document.getElementById('signup')?.classList.contains('active')) {
        introSelectElement.dispatchEvent(new Event('change'));
    }
    const troopTypeSelectElement = document.getElementById('troopType');
    if (troopTypeSelectElement && document.getElementById('weapon')?.classList.contains('active')) {
        troopTypeSelectElement.dispatchEvent(new Event('change'));
    }

    // 如果目標是管理員頁面，且是管理員，確保 updateAdminSection 被調用以設置好監聽器
    if (targetViewId === 'admin' && isAdmin) {
        updateAdminSection();
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
  if (!window.currentTeamId) { 
    console.error("getSignups Error: currentTeamId is not set.");
    return []; 
  }
  // window.eventCode is no longer used to determine the path for signups.
  const snapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).once('value');
  const data = snapshot.val() || {};
  // The rest of the mapping logic to include the Firebase key as 'uid' should remain if it was previously working.
  return Object.entries(data).map(([key, v]) => ({ uid: key, ...v })); // Ensure key is 'uid'
}

// 儲存或更新單筆報名資料
async function saveSignup(obj, isNewSignupForCounter) { 
  const lang = document.getElementById('langSwitch')?.value || 'zh';

  if (!window.currentTeamId) {
    console.error("saveSignup Error: currentTeamId is not set.");
    throw new Error(I18N[lang].msgUnknownTeamError || "錯誤：未知的團隊，無法儲存資料。");
  }

  const basePath = `${DB_ROOT}/${window.currentTeamId}/events/signups`;
  // 使用玩家的 UID 作為節點鍵
  let firebaseNodeKey;
  if (obj.firebase_key_for_update) {
    firebaseNodeKey = obj.firebase_key_for_update;
  } else {
    // 新增時 UID 必須為正整數
    if (!obj.uid || !/^\d+$/.test(String(obj.uid))) {
      throw new Error("Invalid UID: 必須為正整數");
    }
    firebaseNodeKey = String(obj.uid);
  }
  const playerRef = db.ref(`${basePath}/${firebaseNodeKey}`);
  const counterRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/counter`);

  try {
    const dataToSave = { 
        // player_game_uid will be handled conditionally below
        nickname: obj.name,
        rank: obj.tier,
        rankMinor: obj.level || '-',
        payPower: obj.pay,
        roleGroup: obj.intro,
        introName: obj.introName,
        expectSquad: obj.expectSquad,
        lang: obj.formLang, // Save the language used for signup
        teamAssignment: "A00", // 新增：固定的隊伍編號
        // Weapon form fields if present in obj
        // posX: obj.posX, // MODIFIED - Will be conditionally added
        // posY: obj.posY, // MODIFIED - Will be conditionally added
        // troopsNormal: obj.troopType, // MODIFIED - Will be conditionally added
        // troopsSpecial: obj.specialType, // MODIFIED - Will be conditionally added
        // troopsMerge: obj.weaponName  // MODIFIED - Will be conditionally added
        // firebase_key is not part of the data, it's the node key
    };

    // Conditionally add weapon-related fields to dataToSave
    if (obj.posX !== undefined) dataToSave.posX = obj.posX;
    if (obj.posY !== undefined) dataToSave.posY = obj.posY;
    if (obj.troopType !== undefined) dataToSave.troopsNormal = obj.troopType;
    if (obj.specialType !== undefined) dataToSave.troopsSpecial = obj.specialType;
    if (obj.weaponName !== undefined) dataToSave.troopsMerge = obj.weaponName;

    if (isNewSignupForCounter) { // Only add timestamp/order/player_game_uid for truly new signups
        dataToSave.player_game_uid = obj.uid; // obj.uid IS the player's game UID from the form for new signups
        dataToSave.ts = firebase.database.ServerValue.TIMESTAMP;
        const newOrderSnapshot = await counterRef.transaction(currentCount => (currentCount || 0) + 1);
        if (newOrderSnapshot.committed) {
            dataToSave.signupOrder = newOrderSnapshot.snapshot.val();
        } else {
            console.error('Failed to get new signup order from counter transaction.');
            // Fallback: try to read counter directly and increment, less safe for concurrency
            const currentCountFallback = (await counterRef.once('value')).val() || 0;
            dataToSave.signupOrder = currentCountFallback + 1;
            // Note: This fallback doesn't update the counter in DB immediately if transaction failed.
            // Consider if this is acceptable or if it should throw an error.
        }
    } else if (obj.firebase_key_for_update) {
        // This is an update to an existing record.
        // We DO NOT update player_game_uid from obj.uid because for modifications,
        // obj.uid (sourced from the form's playerUID input) actually holds the firebaseNodeKey.
        // The original player_game_uid in the DB record should be preserved unless explicitly handled otherwise.
        // If other fields were meant to be partial updates, ensure `playerRef.update(dataToSave)` is used.
        // However, current logic uses .set(), so all fields in dataToSave will be set.
        // For safety, explicitly fetch and carry over player_game_uid if not changing it.
        const existingRecordSnapshot = await playerRef.once('value');
        if (existingRecordSnapshot.exists() && existingRecordSnapshot.val().player_game_uid) {
            dataToSave.player_game_uid = existingRecordSnapshot.val().player_game_uid;
        } else if (isNewSignupForCounter === false && !obj.firebase_key_for_update) {
            // This case should ideally not happen: not new, but no firebase_key_for_update.
            // If it does, and player_game_uid is critical, log an error or handle appropriately.
            console.warn("saveSignup: Updating record without firebase_key_for_update, player_game_uid might be missing if not new.");
            // Fallback to obj.uid if it seems it was intended as player_game_uid, but this is risky.
            dataToSave.player_game_uid = obj.uid; 
        }
        // Also carry over ts and signupOrder if they exist and are not being changed by this update
        if (existingRecordSnapshot.exists()) {
            if (existingRecordSnapshot.val().ts && dataToSave.ts === undefined) {
                dataToSave.ts = existingRecordSnapshot.val().ts;
            }
            if (existingRecordSnapshot.val().signupOrder && dataToSave.signupOrder === undefined) {
                dataToSave.signupOrder = existingRecordSnapshot.val().signupOrder;
            }
        }
    }
    
    await playerRef.set(dataToSave); 
    console.log(`Signup data saved to ${playerRef.toString()}`);
    
    // If it was a new signup and the transaction for counter failed but we used a fallback for signupOrder,
    // we might need to explicitly set the counter here if the transaction didn't cover it.
    // This part needs careful consideration based on how critical perfect counter sync is.
    if (isNewSignupForCounter) {
        // If transaction was used for signupOrder, counter is already updated.
        // If transaction failed and fallback was used, counter wasn't updated by transaction.
        // To be safe, ensure counter reflects the number of items if that's its purpose.
        // This is a simplistic way; a robust counter usually relies on transactions or server-side logic.
        const allSignupsSnapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).once('value');
        const count = allSignupsSnapshot.numChildren() || 0;
        await counterRef.set(count);
    }

  } catch (error) {
    console.error(`Error saving signup data for team ${window.currentTeamId}:`, error);
    throw error; 
  }
}

// 刪除單筆報名資料
async function removeSignup(uid_firebase_key) { // Parameter is the Firebase key of the record
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  if (!window.currentTeamId) {
    console.error("removeSignup Error: currentTeamId not set.");
    throw new Error(I18N[lang].msgUnknownTeamError || "錯誤：團隊或活動資訊未設定，無法刪除資料。");
  }
  if (!uid_firebase_key) {
    console.error("removeSignup Error: Firebase key (uid_firebase_key) is required.");
    throw new Error("Firebase key is required to remove signup data.");
  }

  try {
    // Path construction without eventCode
    const signupRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups/${uid_firebase_key}`);
    await signupRef.remove();
    console.log(`Signup data for key ${uid_firebase_key} removed from ${DB_ROOT}/${window.currentTeamId}/events/signups`);
    
    // Decrement counter. Be careful with concurrent decrements.
    // A transaction is safer.
    const counterRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/counter`);
    await counterRef.transaction(currentCount => {
        return (currentCount && currentCount > 0) ? currentCount - 1 : 0;
    });

  } catch (error) {
    console.error(`Error removing signup data for key ${uid_firebase_key} in team ${window.currentTeamId}:`, error);
    throw error;
  }
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
function updateTable(data, tableId, lang, isDetailPage = false, showActionsColumn = false) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  if (!tbody) return;

  let columnsCount = 7;
  if (isDetailPage) {
    columnsCount = 8;
    if (showActionsColumn) {
      columnsCount = 10; // 加入 drag-handle 欄位
    }
  } else if (showActionsColumn) {
    columnsCount = 7; 
  }

  if (!data || data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${columnsCount}">${I18N[lang].msgNoData}</td></tr>`;
    return;
  }

  // 根據不同表格使用不同排序：管理員列表用隊內編號 orderInTeam，其餘用 signupOrder
  const sorted = tableId.startsWith('admin_detail_table')
    ? data.sort((a, b) => (a.orderInTeam || 0) - (b.orderInTeam || 0))
    : data.sort((a, b) => (a.signupOrder || a.ts || 0) - (b.signupOrder || b.ts || 0));
  tbody.innerHTML = sorted.map((r, i) => {
    const firebaseKey = r?.uid ?? 'KEY_ERROR';
    const displayIndex = (() => {
      // 在詳細資料頁面或管理員列表中顯示隊伍編號
      if (isDetailPage) return r.teamAssignment || '';
      if (tableId.startsWith('admin_detail_table')) return r.teamAssignment || (r.signupOrder ?? i+1).toString();
      // 其餘情況顯示報名順序
      return (r.signupOrder ?? i+1).toString();
    })();
    const actionsHtml = showActionsColumn && tableId.startsWith('admin_detail_table') ?
      `<td><button class="small" onclick="modifyWeaponRegistration('${firebaseKey}')">${I18N[lang].btnModify}</button>
       <button class="small danger" onclick="deleteSignup(this,'${firebaseKey}')">${I18N[lang].btnDelete}</button></td>` : '';
    // 新增顯示用欄位
    const playerGameUid_display = r.player_game_uid ?? firebaseKey;
    const nicknameDisplay = r.nickname ?? 'N/A';
      let payPowerDisplay = 'N/A';
    if (r.payPower) {
          if (r.payPower === 'high') payPowerDisplay = I18N[lang]?.payHigh || r.payPower;
          else if (r.payPower === 'medium') payPowerDisplay = I18N[lang]?.payMedium || r.payPower;
          else if (r.payPower === 'low') payPowerDisplay = I18N[lang]?.payLow || r.payPower;
          else payPowerDisplay = r.payPower; 
      }
        const posXDisplay = r.posX !== undefined ? r.posX : 'N/A';
        const posYDisplay = r.posY !== undefined ? r.posY : 'N/A';
        let troopWeaponDisplay = 'N/A';
        if (r.troopsMerge) {
          troopWeaponDisplay = I18N[lang]?.weaponGridDisplay?.weapons?.[r.troopsMerge] || r.troopsMerge;
        } else if (r.troopsNormal) {
          troopWeaponDisplay = I18N[lang]?.troopLabelMap?.[r.troopsNormal] || 
                               I18N[lang]?.[`troop${r.troopsNormal.charAt(0).toUpperCase() + r.troopsNormal.slice(1)}`] || 
                               r.troopsNormal;
        }
        const langDisplay = r.lang === 'zh' ? I18N[lang].langZh : (r.lang === 'en' ? I18N[lang].langEn : 'N/A');
        return `
          <tr data-uid="${firebaseKey}">
        <td class="drag-handle">⋮⋮</td>
            <td>${displayIndex}</td>
            <td>${playerGameUid_display}</td>
            <td>${nicknameDisplay}</td>
            <td>${payPowerDisplay}</td>
            <td>${posXDisplay}</td>
            <td>${posYDisplay}</td>
            <td>${troopWeaponDisplay}</td>
            <td>${langDisplay}</td>
            ${actionsHtml}
      </tr>`;
    }).join('');
  applyLang(); 
}

/* ===== 報名者列表 ===== */
async function refreshSignupList() {
  const tbody = document.querySelector('#signupList tbody');
  if (!tbody) {
    console.error("refreshSignupList: tbody #signupList not found.");
    return;
  }

  let data = []; 
  try {
    data = await getData(); 
  } catch (error) {
    console.error("Error fetching data in refreshSignupList:", error);
    tbody.innerHTML = `<tr><td colspan="7">${I18N[lang].msgFailedToLoad}</td></tr>`; 
    return;
  }

  if (!data || !Array.isArray(data)) {
    console.error("refreshSignupList: Data is null, undefined, or not an array.", data);
    data = []; 
  }
  
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  const i18n = I18N[lang];
  
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7">${I18N[lang].msgNoSignupData}</td></tr>`;
  } else {
  tbody.innerHTML = data
      .sort((a, b) => (a.signupOrder || a.ts || 0) - (b.signupOrder || b.ts || 0))
      .map((r, i) => {
        const firebaseKey = r && r.uid !== undefined ? r.uid : 'KEY_ERROR'; // Firebase key for actions
        const playerGameUid_display = r && r.player_game_uid !== undefined ? r.player_game_uid : (firebaseKey !== 'KEY_ERROR' ? firebaseKey : 'N/A'); // Player's game UID for display, fallback to firebaseKey
        
        const nicknameDisplay = r && r.nickname !== undefined ? r.nickname : 'N/A';
        const rankDisplay = (i18n.rankDisplay && r && r.rank ? i18n.rankDisplay[r.rank] : (r && r.rank ? r.rank : 'N/A')) + 
                          ((r && r.rankMinor && r.rankMinor !== '-') ? r.rankMinor : '');
        
        // Modified payPowerDisplay to use full text from I18N
        let payPowerDisplay = 'N/A';
        if (r && r.payPower) {
            if (r.payPower === 'high') payPowerDisplay = i18n.payHigh || r.payPower;
            else if (r.payPower === 'medium') payPowerDisplay = i18n.payMedium || r.payPower;
            else if (r.payPower === 'low') payPowerDisplay = i18n.payLow || r.payPower;
            else payPowerDisplay = r.payPower; 
        }

        const introDisplay = (i18n.introDisplay && r && r.roleGroup ? i18n.introDisplay[r.roleGroup] : (r && r.roleGroup ? r.roleGroup : 'N/A')) + 
                           (r && r.introName ? ` (${r.introName})` : '');
        
        return `
          <tr data-uid="${firebaseKey}">
            <td>${(r && r.signupOrder !== undefined) ? r.signupOrder : (i + 1)}</td>
            <td class="uid-cell">${playerGameUid_display}</td>
            <td>${nicknameDisplay}</td>
            <td>${rankDisplay}</td>
            <td>${payPowerDisplay}</td>
            <td>${introDisplay}</td>
            <td>
              <button type="button" class="small" onclick="modifySignup('${firebaseKey}')" data-l10n="btnModify">修改</button>
              <button type="button" class="small danger" onclick="deleteSignup(this, '${firebaseKey}')" data-l10n="btnDelete">刪除</button>
            </td>
          </tr>
        `;
      }).join('');
  }
  
  applyLang(); 
}

// 修改報名資料 (讓 modifySignup 填充報名表單)
window.modifySignup = async (uidString) => {
  // uidString is the Firebase key, e.g., "-Mxyz123"

  const signups = await getSignups(); 
  const record = signups.find(r => r.uid === uidString); 
  if (!record) {
    alert('找不到該用戶的報名資料 (User signup data not found)');
    return;
  }
  
  // The UID input field in the form should display the Firebase key (uidString)
  document.getElementById('playerUID').value = record.uid;
  document.getElementById('playerUID').readOnly = true; 
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
  alert('請在報名表單中修改資料，然後重新提交 (Please modify the data in the signup form and submit again)');
};

// 新增：用於管理員頁面修改按鈕，跳轉到專武登記頁並填充資料
window.modifyWeaponRegistration = async (firebaseKey) => {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  const signups = await getSignups(); 
  const record = signups.find(r => r.uid === firebaseKey); 

  if (!record) {
    alert(I18N[lang].msgUserNotFound || '找不到該用戶的報名資料');
    return;
  }

  // 填充專武登記表單左側
  const weaponUIDInput = document.getElementById('weaponUID');
  if (weaponUIDInput) {
    weaponUIDInput.value = record.player_game_uid || ''; // 使用 player_game_uid
    weaponUIDInput.readOnly = true; // 考慮是否需要設為只讀，如果專武登記也允許修改UID的話
  }
  document.getElementById('posX').value = record.posX || '';
  document.getElementById('posY').value = record.posY || '';
  
  const troopTypeSelect = document.getElementById('troopType');
  if (troopTypeSelect) {
    troopTypeSelect.value = record.troopsNormal || '';
    troopTypeSelect.dispatchEvent(new Event('change')); // 觸發 change 以更新特殊兵種顯隱
  }
  const specialTypeSelect = document.getElementById('specialType');
  if (specialTypeSelect && record.troopsNormal === 'special') {
    specialTypeSelect.value = record.troopsSpecial || '';
  }

  // 高亮融合武器 (如果數據中有 troopsMerge)
  window.selectedWeapon = null; // 先清除之前的選擇
  document.querySelectorAll('.weapon-button.active').forEach(btn => btn.classList.remove('active'));
  if (record.troopsMerge) {
    const weaponButton = document.querySelector(`.weapon-button[data-weapon="${record.troopsMerge}"]`);
    if (weaponButton) {
      weaponButton.classList.add('active');
      window.selectedWeapon = record.troopsMerge;
    }
  }

  // 填充專武登記表單右側預覽區塊
  document.getElementById('previewPlayerName').value = record.nickname || '';
  document.getElementById('previewPaySelect').value = record.payPower || '';
  document.getElementById('previewIntroSelect').value = record.roleGroup || '';
  document.getElementById('previewFormLangSwitch').value = record.lang || lang;

  const previewTeamSelect = document.getElementById('previewTeamSelect');
  if (previewTeamSelect && record.teamAssignment) {
    // 假設 teamAssignment 的第一個字母是隊伍 (A, B, C)
    const teamInitial = record.teamAssignment.charAt(0).toUpperCase();
    if (['A', 'B', 'C'].includes(teamInitial)) {
      previewTeamSelect.value = teamInitial;
    } else {
      previewTeamSelect.value = ''; // 如果不是 A, B, C，則不選
    }
    previewTeamSelect.dispatchEvent(new Event('change')); // 觸發 change 以更新隊內編號下拉
  }

  const previewOrderInTeamSelect = document.getElementById('previewOrderInTeamSelect');
  if (previewOrderInTeamSelect && record.orderInTeam) {
    // 確保在隊伍下拉選單的 change 事件處理完畢後再設定隊內編號
    setTimeout(() => {
        if (previewTeamSelect.value) { // 只有在隊伍被選中時才嘗試設定編號
            previewOrderInTeamSelect.value = record.orderInTeam;
        }
    }, 100); 
  }
  
  // 觸發 weaponUID 的 blur 事件，以便 weaponRightContainer.dataset.firebaseKey 被設定
  // 這有助於提交時識別是更新還是新增 (雖然這裡一定是更新)
  if (weaponUIDInput) {
      weaponUIDInput.dispatchEvent(new Event('blur'));
  }

  // 切換到專武登記頁籤
  document.getElementById('navWeapon')?.click();
  
  // 滾動到表單頂部
  document.getElementById('weaponForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  alert(I18N[lang].msgModifyInstruction || '請在專武登記表單中修改資料，然後重新提交。'); 
};

// 刪除報名資料
window.deleteSignup = (buttonElement, uid) => { // uid is the Firebase key, buttonElement is the clicked button
  console.log('[deleteSignup] Called for uid:', uid, 'from button:', buttonElement);
  const lang = document.getElementById('langSwitch').value;
  const tr = buttonElement.closest('tr'); // 從按鈕找到它所在的 tr

  // ===== 新增日誌 =====
  if (tr) {
    console.log('[deleteSignup] tr element found via button.closest(\'tr\'):', tr, 'Its data-uid:', tr.dataset.uid);
    const parentTable = tr.closest('table');
    if (parentTable) {
      console.log('[deleteSignup] Parent table of this tr is:', parentTable, 'With ID:', parentTable.id);
    } else {
      console.log('[deleteSignup] tr found via button, but it has no parent table.'); // Should not happen if button is in a tr in a table
    }
  } else {
    console.log('[deleteSignup] tr element NOT found via button.closest(\'tr\') for button:', buttonElement, 'and uid:', uid);
     // Fallback, though unlikely if buttonElement is valid
    const fallbackTr = document.querySelector(`tr[data-uid="${uid}"]`);
    console.log('[deleteSignup] Fallback querySelector(`tr[data-uid="${uid}"]`) found:', fallbackTr);
    if (!fallbackTr) {
        alert('無法找到對應的資料列 (Error finding row for deletion)');
        return;
    }
    // If fallback is used, we are back to the original problem potentially.
    // This path should ideally not be taken.
  }
  // ===== 結束新增日誌 =====
  
  // The following logs that used querySelector(`tr[data-uid="${uid}"]`) are now less relevant
  // as 'tr' is now derived from buttonElement. We keep them for comparison if needed.
  const trFromQuerySelector = document.querySelector(`tr[data-uid="${uid}"]`);
  console.log('[deleteSignup] tr found (by querySelector for original log comparison):', trFromQuerySelector);
  if (trFromQuerySelector) {
    const closestTableOriginalLog = trFromQuerySelector.closest('table');
    console.log('[deleteSignup] tr (by querySelector) is inside table with ID (original log):', closestTableOriginalLog ? closestTableOriginalLog.id : 'No parent table found');
  }

  if (!tr) { // Should use the 'tr' from buttonElement.closest('tr')
    console.error("deleteSignup: Row could not be determined from the clicked button for uid '" + uid + "'.");
    alert((I18N[lang].msgError || "找不到對應的資料列 (ID: %uid%)").replace("%uid%", uid));
    return;
  }

  let targetCellForUI;
  // Now, the 'tr' variable is guaranteed to be the one containing the clicked button.
  // So, tr.closest('#signupList') will correctly determine if THIS tr is in signupList.
  const isInSignupListElement = tr.closest('#signupList');
  console.log('[deleteSignup] Element returned by tr.closest("#signupList") (using tr from button):', isInSignupListElement);
  console.log('[deleteSignup] ID of element returned by tr.closest("#signupList") (using tr from button):', isInSignupListElement ? isInSignupListElement.id : 'null or undefined');

  if (isInSignupListElement) { // If the tr containing the button is inside #signupList
    targetCellForUI = tr.querySelector('.uid-cell'); // Specific to signupList's structure
    console.log('[deleteSignup] Path for signupList. targetCellForUI from .uid-cell:', targetCellForUI);
  } else { // If not in #signupList, assume it's an admin list or other
    // Admin lists have UID in the second cell (index 1)
    targetCellForUI = tr.cells && tr.cells.length > 1 ? tr.cells[1] : null;
    console.log('[deleteSignup] Path for Admin/Other list. targetCellForUI from tr.cells[1]:', targetCellForUI);
  }

  if (!targetCellForUI) {
    console.error("deleteSignup: Target cell for UI not found in row data-uid '" + uid + "'.");
    console.log('[deleteSignup] targetCellForUI NOT found. Using confirm().');
    const displayKeyForConfirm = uid.length > 10 ? uid.substring(0,4)+'...'+uid.substring(uid.length-4) : uid;
    const confirmMessage = (I18N[lang].msgConfirmDelete || "確定要刪除嗎？") +
                           " (ID: " + displayKeyForConfirm + ")";
    if (confirm(confirmMessage)) {
      removeSignup(uid).then(async () => {
        await refreshSignupList();
        refresh();
        updateSignupCount();
        alert(I18N[lang].msgDeleted || "資料已刪除！");
      }).catch(err => {
        console.error("Deletion failed:", err);
        alert(I18N[lang].msgError || "刪除失敗！");
      });
    }
    return;
  }

  const originalCellContent = targetCellForUI.innerHTML;
  const input = document.createElement('input');
  input.type = 'text';
  const displayKeyForPlaceholder = uid.length > 15 ? uid.substring(0, 6) + '...' + uid.substring(uid.length - 6) : uid;
  input.placeholder = (I18N[lang].msgDeleteConfirm || "輸入UID以確認刪除：") + " (Key: " + displayKeyForPlaceholder + ")";
  input.style.width = '180px';

  const confirmButton = document.createElement('button');
  confirmButton.className = 'small danger';
  confirmButton.textContent = '✓';

  const cancelButton = document.createElement('button');
  cancelButton.className = 'small';
  cancelButton.textContent = '✗';

  console.log('[deleteSignup] About to replace content of targetCellForUI:', targetCellForUI);
  targetCellForUI.innerHTML = '';
  targetCellForUI.appendChild(input);
  targetCellForUI.appendChild(confirmButton);
  targetCellForUI.appendChild(cancelButton);
  input.focus();

  confirmButton.addEventListener('click', async () => {
    console.log('[deleteSignup] Confirm button clicked. Input value:', input.value, 'Expected UID:', uid.toString());
    if (input.value === uid.toString()) {
      try {
        console.log('[deleteSignup] removeSignup successful. Preparing to refresh lists.');
        await removeSignup(uid);
        // ===== 修改：確認 closest('#signupList') 的判斷 =====
        const currentTRsParentTable = tr.closest('table');
        if (currentTRsParentTable && currentTRsParentTable.id === 'signupList') {
        // if (tr.closest('#signupList')) { // 舊的判斷方式
          console.log('[deleteSignup] Confirmed: Deletion was from signupList. Refreshing signupList.');
          await refreshSignupList();
        } else {
          console.log('[deleteSignup] Confirmed: Deletion was NOT from signupList (or tr detached). Parent table ID:', currentTRsParentTable ? currentTRsParentTable.id : 'unknown/detached', '. Refreshing admin data.');
          // If not signupList, it's likely an admin list or detail list (though detail doesn't have delete by default)
          // Call refreshAdminData to update admin tables if admin page is active
          // refreshAdminData fetches playerCount if not provided and checks if admin view is active.
          await refreshAdminData(); 
        }
        refresh(); // General refresh for stats on other pages (e.g., detail page)
        updateSignupCount();
        alert(I18N[lang].msgDeleted || "資料已刪除！");
      } catch (error) {
        console.error("Error removing signup (key " + uid + "):", error);
        console.log('[deleteSignup] Error during removeSignup or refresh:', error);
        alert(I18N[lang].msgError || "刪除操作失敗！");
        targetCellForUI.innerHTML = originalCellContent;
      }
    } else {
      // I18N key 'msgInvalidInput' should be added if not present
      alert(I18N[lang].msgInvalidInput || '輸入的確認Key不正確。操作已取消。');
      targetCellForUI.innerHTML = originalCellContent;
    }
  });
  
  cancelButton.addEventListener('click', () => {
    console.log('[deleteSignup] Cancel button clicked.');
    targetCellForUI.innerHTML = originalCellContent;
  });
};

/* ===== 報名提交 ===== */
document.getElementById('submitSignup').addEventListener('click', async ()=>{
  const form = document.getElementById('signupForm');
  clearErrors(form);
  const lang = document.getElementById('langSwitch').value || 'zh';
  
  const playerGameUidFromForm = document.getElementById('playerUID').value; // This is player's game UID, or Firebase key if modifying
  const isModifying = document.getElementById('playerUID').readOnly; // true if modifying existing entry

  const name = document.getElementById('playerName').value.trim();
  const expectSquad = document.getElementById('expectSquadInput').value.trim();
  
  // 驗證
  let hasError = false;
  if(playerGameUidFromForm === "" && !isModifying) { // For new signups, player's game UID from form
    showError(I18N[lang].uidPlaceholder, form); // Assuming uidPlaceholder is for player's game UID
    hasError = true;
  } else if (isModifying && playerGameUidFromForm === "") { // Should not happen if playerUID is readonly and populated
     showError("錯誤：正在修改資料但Firebase Key遺失。", form);
    hasError = true;
  }

  // ... (other form validations: name, rank, pay, intro)
  if(name.length < 2) { 
    showError(I18N[lang].msgNicknameMinLength, form); 
    hasError = true; 
  }
  if(!document.getElementById('rankTier').value) { 
    showError(I18N[lang].rankTierDefault, form); 
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
  if(hasError) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on error
    return;
  }

  const formLangValue = document.getElementById('formLangSwitch').value; // 新增：獲取表單語言選擇器的值

  const obj = {
    uid: playerGameUidFromForm, // For new, this is game UID. For modify, this is Firebase Key.
    name,
    tier: rankTier.value,
    level: levelSel.value || '-',
    pay: canPaySelect.value,
    intro: introSel.value,
    introName: introNameInput.value.trim(),
    expectSquad: expectSquad,
    formLang: formLangValue, // 新增：將獲取到的語言值加入到 obj
    // firebase_key_for_update: isModifying ? playerGameUidFromForm : null // Pass Firebase key if modifying
  };
  
  // If modifying, playerGameUidFromForm is the Firebase key.
  // The actual player's game UID is already stored in the DB record and won't be changed from this form.
  // If new, playerGameUidFromForm is the new player's game UID.
  
  let firebase_key_for_update = null;
  if (isModifying) {
      firebase_key_for_update = playerGameUidFromForm; // The value in playerUID input IS the firebase key
      // We need to re-fetch the player's game_uid if we want to pass it to saveSignup's dataToSave.player_game_uid
      // Or, saveSignup can fetch existing data if it's an update.
      // For simplicity, if modifying, saveSignup will update the record at 'firebase_key_for_update'
      // and it should NOT try to overwrite 'player_game_uid' field if it exists.
  }


  try {
    let isNewRealSignup = false;
    if (!isModifying) {
        // Check if this player_game_uid already exists for THIS team.
        // This requires querying all signups for this team and checking player_game_uid field.
        // This is complex for client-side. For now, we assume new submission means new,
        // unless admin is modifying (where playerUID field holds Firebase key).
        // A true "isNew" for counter increment should ideally be determined more robustly if duplicates are a concern.
        // For now, if it's not a modification initiated by clicking "modify", treat as new for counter.
        isNewRealSignup = true;
    }

    // Pass playerGameUidFromForm as 'uid' to saveSignup.
    // Pass firebase_key_for_update if we are indeed modifying.
    await saveSignup(
        { ...obj, firebase_key_for_update: firebase_key_for_update }, // Pass the firebase key if we have it
        isNewRealSignup 
    );
    
    alert(isNewRealSignup && !isModifying ? (I18N[lang].msgSignupSuccess || "報名成功！") : (I18N[lang].msgModified || "資料已修改！"));
    clearFormFields(form);
    document.getElementById('playerUID').readOnly = false;
    await refreshSignupList();
    refresh(); 
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
  
  const weaponFormUidInputEl = document.getElementById('weaponUID');
  const posXInputEl = document.getElementById('posX');
  const posYInputEl = document.getElementById('posY');
  const troopTypeSelectEl = document.getElementById('troopType');
  const specialTypeSelectEl = document.getElementById('specialType');
  
  const previewPlayerNameInputEl = document.getElementById('previewPlayerName');
  // const previewPaySelectEl = document.getElementById('previewPaySelect'); // Not used for direct value reading in submit
  // const previewIntroSelectEl = document.getElementById('previewIntroSelect'); // Not used for direct value reading in submit
  // const previewFormLangSwitchEl = document.getElementById('previewFormLangSwitch'); // Not used for direct value reading in submit

  const weaponFormUidInput = weaponFormUidInputEl.value.trim();
  const posXValue = posXInputEl.value; 
  const posYValue = posYInputEl.value;
  const troopTypeValue = troopTypeSelectEl.value;
  const specialTypeValue = specialTypeSelectEl.value;
  const selectedWeaponName = window.selectedWeapon; // Fusion weapon

  const previewPlayerNameValue = previewPlayerNameInputEl.value.trim();
  const previewPaySelectValue = document.getElementById('previewPaySelect').value; // Read directly
  const previewIntroSelectValue = document.getElementById('previewIntroSelect').value; // Read directly
  const previewFormLangSwitchValue = document.getElementById('previewFormLangSwitch').value; // Read directly
  const previewTeamValue = document.getElementById('previewTeamSelect')?.value || '';
  const previewOrderInTeamValue = document.getElementById('previewOrderInTeamSelect')?.value || '';


  let hasError = false;
  // 驗證左側專武表單
  if (weaponFormUidInput === "") {
    showError(I18N[lang].msgWeaponUidRequired, form); hasError = true;
  } else if (!/^\d+$/.test(weaponFormUidInput)) {
    showError(I18N[lang].msgWeaponUidInvalid, form); hasError = true;
  }
  if (posXValue === "") {
    showError(I18N[lang].msgPosXRequired, form); hasError = true;
  }
  if (posYValue === "") {
    showError(I18N[lang].msgPosYRequired, form); hasError = true;
  }
  // if (troopTypeValue === "") { // Original check, now part of combined check
  //   showError(I18N[lang].troopDefault, form); 
  //   hasError = true;
  // }
  // if (troopTypeValue === 'special' && specialTypeValue === "") { // Original check, now part of combined check
  //   showError(I18N[lang].msgSpecialTypeRequired, form);
  //   hasError = true;
  // }

  // 驗證「兵種選擇」或「融合武器」至少擇一 (更新後的邏輯)
  const isTroopSelectionComplete = troopTypeValue !== '' && (troopTypeValue !== 'special' || (troopTypeValue === 'special' && specialTypeValue !== ''));
  const isFusionWeaponSelected = selectedWeaponName !== null && selectedWeaponName !== undefined && selectedWeaponName !== '';

  if (!isTroopSelectionComplete && !isFusionWeaponSelected) {
    showError(I18N[lang].msgTroopOrWeaponRequired, form);
    hasError = true;
  }

  // 驗證右側預覽表單 (名稱、課金、身分是必填)
  if (previewPlayerNameValue === "") {
    showError(I18N[lang].namePlaceholder, form); hasError = true; // Using existing namePlaceholder as "Enter nickname"
  }
  if (previewPaySelectValue === "") {
    showError(I18N[lang].payDefault, form); hasError = true;
  }
  if (previewIntroSelectValue === "") {
    showError(I18N[lang].introDefault, form); hasError = true;
  }
  
  if(hasError) {
    // 如果上面已經用了 showError，這裡可以不用再提示 msgFillRequiredFields
    // 但如果希望有一個總的提示，可以取消註解下一行
    // showError(I18N[lang].msgFillRequiredFields, form); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on error
    return;
  }

  const allSignups = await getSignups(); 
  const existingRecord = allSignups.find(s => String(s.player_game_uid) === String(weaponFormUidInput));

  let obj_payload = {
    uid: weaponFormUidInput, // Player's game UID
    posX: +posXValue, // Ensure numeric
    posY: +posYValue, // Ensure numeric
    troopType: troopTypeValue,
    specialType: specialTypeValue,
    weaponName: selectedWeaponName,
    
    name: previewPlayerNameValue,
    pay: previewPaySelectValue,
    intro: previewIntroSelectValue,
    formLang: previewFormLangSwitchValue,
    // tier, level, introName, expectSquad will be added below depending on new/existing user
  };

  let successMessage = '';
  let isNewSignupForCounter = false;
  
  if (existingRecord) {
    obj_payload.firebase_key_for_update = existingRecord.uid; // Firebase Key for update
    // Carry over other fields from existing record that are not on this form
    // Provide defaults if they are missing from existingRecord to prevent 'undefined'
    obj_payload.tier = existingRecord.rank || ""; 
    obj_payload.level = existingRecord.rankMinor || "-";
    obj_payload.introName = existingRecord.introName || "";
    obj_payload.expectSquad = existingRecord.expectSquad || "";
    obj_payload.team = previewTeamValue; // Add team from preview
    obj_payload.orderInTeam = previewOrderInTeamValue; // Add orderInTeam from preview
    // player_game_uid and signupOrder, ts will be handled by saveSignup's update logic

    isNewSignupForCounter = false; // It's an update, not a new signup for counter increment

    if (existingRecord.posX !== undefined || existingRecord.troopsNormal !== undefined || existingRecord.troopsMerge !== undefined) {
      successMessage = I18N[lang].msgCoordWeaponUpdateSuccess; // 舊玩家(有X座標資料)更新資料
    } else {
      successMessage = I18N[lang].msgWeaponRegSuccess; // 舊玩家(無X座標資料)首次登記專武
    }
  } else {
    // 新玩家首次登記 (所有必填欄位已經通過驗證)
    isNewSignupForCounter = true; 
    // obj_payload.uid is already the player's game UID.
    // saveSignup will use this as the new Firebase Key and also set player_game_uid field.
    // No firebase_key_for_update needed for new entries.
    // For new players registering via weapon form, provide defaults for missing signup fields
    obj_payload.tier = ""; // Default for rank tier (e.g., empty string or a default like "none")
    obj_payload.level = "-"; // Default for rank level
    obj_payload.introName = ""; // Default for referrer name
    obj_payload.expectSquad = ""; // Default for expected squad
    obj_payload.team = previewTeamValue; // Add team from preview
    obj_payload.orderInTeam = previewOrderInTeamValue; // Add orderInTeam from preview
    successMessage = I18N[lang].msgNewSignupWeaponSuccess;
  }

  try {
    await saveSignup(obj_payload, isNewSignupForCounter);
    alert(successMessage);

    clearFormFields(form); 
    // Clear preview form fields as well, including new team/order fields
    previewPlayerNameInputEl.value = '';
    previewPlayerNameInputEl.placeholder = I18N[lang].namePlaceholder || '輸入你的暱稱';
    document.getElementById('previewPaySelect').selectedIndex = 0;
    document.getElementById('previewIntroSelect').selectedIndex = 0;
    const previewTeamSelectEl = document.getElementById('previewTeamSelect');
    if (previewTeamSelectEl) previewTeamSelectEl.selectedIndex = 0;
    const previewOrderInTeamSelectEl = document.getElementById('previewOrderInTeamSelect');
    if (previewOrderInTeamSelectEl) {
      previewOrderInTeamSelectEl.innerHTML = '<option value="">--編號--</option>'; // Reset options
      previewOrderInTeamSelectEl.disabled = true;
      previewOrderInTeamSelectEl.parentElement.classList.add('hidden'); // Hide label wrapper for order
    }
    
    document.getElementById('specialOptions').classList.add('hidden');
    window.selectedWeapon = null;
    document.querySelectorAll('.weapon-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('weaponUID').value = ''; // Clear UID input after successful submission

    refresh(); // This should call refreshSignupList and updateSignupCount internally or they should be called separately
    refreshSignupList(); // Explicitly refresh lists
    updateSignupCount(); // Explicitly update counts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('專武登記失敗：', error);
    alert(I18N[lang].msgError + (error.message ? ` (${error.message})` : ''));
  }
});

/* ===== 統計功能 ===== */
async function refresh(){
  const lang = document.getElementById('langSwitch')?.value || 'zh'; 
  
  let playerCount = 40; 
  let teamSettings = {};

  try {
    if (!window.currentTeamId) {
      console.warn("refresh: currentTeamId is not set. Cannot fetch team settings.");
        } else {
      const settingsSnapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings`).once('value');
      if (settingsSnapshot.exists()) {
        teamSettings = settingsSnapshot.val();
        playerCount = parseInt(teamSettings.playerCount, 10) || 40;
      } else {
        console.warn(`No systemSettings found for team ${window.currentTeamId}. Using defaults.`);
      }
    }
  } catch (e) { console.error("Error fetching teamSettings for refresh:", e); }
  console.log(`[refresh] START - Determined playerCount: ${playerCount}`);

  const allSignups = await getData();

  // Update weapon page preview team select based on playerCount
  const previewTeamSelect = document.getElementById('previewTeamSelect');
  if (previewTeamSelect) {
    previewTeamSelect.innerHTML = '<option value="">--選擇隊伍--</option>';
    if (playerCount >= 40) {
      previewTeamSelect.innerHTML += '<option value="A">A隊</option>';
    }
    if (playerCount >= 80) {
      previewTeamSelect.innerHTML += '<option value="B">B隊</option>';
    }
    if (playerCount >= 120) {
      previewTeamSelect.innerHTML += '<option value="C">C隊</option>';
    }
  }

  // Update detail page view logic and data
  const detailView = document.getElementById('detail');
  if (detailView && detailView.classList.contains('active')) {
    const teamAData = allSignups.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('A'));
    const teamBData = allSignups.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('B'));
    const teamCData = allSignups.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('C'));

    // 更新統計卡中的人數 (使用新的 ID countA, countB, countC)
    const countAEl = document.getElementById('countA');
    const countBEl = document.getElementById('countB');
    const countCEl = document.getElementById('countC');
    const playerCountDisplayEl = document.getElementById('playerCountDisplay');

    if (playerCountDisplayEl) playerCountDisplayEl.textContent = allSignups.length;
    if (countAEl) countAEl.textContent = teamAData.length; // Changed from teamACountEl to countAEl based on previous correction
    
    updateTable(teamAData, 'tableA', lang, true, false);

    const showB = playerCount >= 80;
    const statBoxB = document.getElementById('statBoxB');
    const teamBTableWrapper = document.getElementById('detailGroupBContainer');
    console.log(`[refresh] Detail Page - For B containers (statBoxB, detailGroupBContainer): playerCount=${playerCount}, showB=${showB}`);

    if (statBoxB) statBoxB.style.display = showB ? '' : 'none';
    if (countBEl) countBEl.textContent = showB ? teamBData.length : '0';
    if (teamBTableWrapper) teamBTableWrapper.style.display = showB ? '' : 'none';

    if(showB) {
      const tableBBody = document.querySelector('#tableB tbody');
      if (tableBBody) {
        updateTable(teamBData, 'tableB', lang, true, false);
      } else {
        console.warn('#tableB tbody not found in detail view for updateTable');
      }
    } else {
      const tableBBody = document.querySelector('#tableB tbody');
      if (tableBBody) tableBBody.innerHTML = `<tr><td colspan="8">${I18N[lang].msgNoData}</td></tr>`;
    }

    const showC = playerCount >= 120;
    const statBoxC = document.getElementById('statBoxC');
    const teamCTableWrapper = document.getElementById('detailGroupCContainer');
    console.log(`[refresh] Detail Page - For C containers (statBoxC, detailGroupCContainer): playerCount=${playerCount}, showC=${showC}`);

    if (statBoxC) statBoxC.style.display = showC ? '' : 'none';
    if (countCEl) countCEl.textContent = showC ? teamCData.length : '0';
    if (teamCTableWrapper) teamCTableWrapper.style.display = showC ? '' : 'none';
    
    if(showC) {
      const tableCBody = document.querySelector('#tableC tbody');
      if (tableCBody) {
        updateTable(teamCData, 'tableC', lang, true, false);
      } else {
        console.warn('#tableC tbody not found in detail view for updateTable');
      }
    } else {
      const tableCBody = document.querySelector('#tableC tbody');
      if (tableCBody) tableCBody.innerHTML = `<tr><td colspan="8">${I18N[lang].msgNoData}</td></tr>`;
    }

    // 移除了對 statBoxes, unfilledBTitle, unfilledCTitle, unfilledBList, unfilledCList 的操作
    // 因為這些元素在 index.html 的 detail section 中已經被新的結構取代
  }

  if (isAdmin && document.getElementById('admin')?.classList.contains('active')) {
    // refreshAdminData(); // 已由 nav click 或 admin login 處理
  }
}

/* ===== 管理員功能 ===== */
function updateAdminSection() {
  const adminSection = document.getElementById('admin');
  if (!adminSection || !adminSection.classList.contains('active')) {
    return;
  }

  const saveSettingsButton = document.getElementById('saveAdminSettings');
  if (saveSettingsButton) {
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
    
  const reorderButton = document.getElementById('reorderSignupsBtn');
  if (reorderButton) {
    reorderButton.replaceWith(reorderButton.cloneNode(true));
    document.getElementById('reorderSignupsBtn').addEventListener('click', reassignSignupOrder);
  }
    
  // Player count buttons now save to Firebase
  document.querySelectorAll('.player-count-group button').forEach(btn => {
    const newBtn = btn.cloneNode(true); // Clone to remove old listeners if any
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', async () => { // Listener is now async
      document.querySelectorAll('.player-count-group button').forEach(b => b.classList.remove('active'));
      newBtn.classList.add('active');
      // 移除直接儲存 Firebase 的邏輯。進場人數將由「儲存設定」按鈕統一處理。
      // UI 狀態更新（按鈕的 active class）已處理。
      // 不再需要立即呼叫 updateSignupCount, refresh 等函數。
    });
  });
  
  const gameStartDateInput = document.getElementById('adminStartDate');
  const signupEndDateInput = document.getElementById('adminEndDate');

  if (gameStartDateInput) {
    gameStartDateInput.replaceWith(gameStartDateInput.cloneNode(true));
    const currentMinDate = new Date().toISOString().split('T')[0];
    document.getElementById('adminStartDate').min = currentMinDate;
    // validateDates is more of a helper for saveAdminSettings, direct validation on change can be complex
    // document.getElementById('adminStartDate').addEventListener('change', validateDates); 
  }
  if (signupEndDateInput) {
    signupEndDateInput.replaceWith(signupEndDateInput.cloneNode(true));
    const currentMinDate = new Date().toISOString().split('T')[0];
    document.getElementById('adminEndDate').min = currentMinDate;
    // document.getElementById('adminEndDate').addEventListener('change', validateDates);
  }
  
  // loadSettings() is called when admin logs in (via verifyCode) or when admin tab is clicked while admin.
  // refreshAdminData() is also called by loadSettings indirectly or by other actions.
  // Manually calling applyLang() here might be redundant if loadSettings also does it or if it was done by verifyCode path.
  // applyLang(); 
}

// 更新管理員頁面的資料顯示
async function refreshAdminData(loadedPlayerCountOptional) { // 修改：接收可選參數
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  let playerCount;
  console.log(`[refreshAdminData] START - Received loadedPlayerCountOptional: ${loadedPlayerCountOptional}`);

  if (loadedPlayerCountOptional !== undefined) {
    playerCount = parseInt(loadedPlayerCountOptional, 10) || 40; 
  } else {
    playerCount = 40; // Default
    try {
      if (!window.currentTeamId) { 
        console.warn("[refreshAdminData] currentTeamId is not set. Cannot fetch playerCount from Firebase.");
    } else {
      const settingsSnapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings/playerCount`).once('value');
      if (settingsSnapshot.exists()) {
        playerCount = parseInt(settingsSnapshot.val(), 10) || 40;
          console.log(`[refreshAdminData] Fetched playerCount from Firebase: ${playerCount}`);
        } else {
          console.warn('[refreshAdminData] playerCount node does not exist in Firebase. Using default 40.');
      }
    }
  } catch (e) { 
      console.error("[refreshAdminData] Error fetching playerCount:", e);
      playerCount = 40; // Fallback on error
    }
  }
  console.log(`[refreshAdminData] Effective playerCount for processing: ${playerCount}`);

  const data = await getData(); 
  const adminViewActive = document.getElementById('admin')?.classList.contains('active');
  // console.log('[refreshAdminData] adminViewActive:', adminViewActive); // Remove this log

  if (adminViewActive) {
    // NEW LOGIC FOR ADMIN LISTS (Referencing Detail Page Logic)
    const groupAContainer = document.getElementById('adminDetailGroupAContainer');
    const groupBContainer = document.getElementById('adminDetailGroupBContainer');
    const groupCContainer = document.getElementById('adminDetailGroupCContainer');

    // A 組 - 總是顯示
    if (groupAContainer) {
      groupAContainer.style.display = ''; // Ensure it's visible (can be 'flex' or 'block' depending on CSS)
      updateTable(data.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('A')), 'admin_detail_tableA', lang, true, true);
    } else {
      console.warn('adminDetailGroupAContainer not found');
    }

    // B 組 - playerCount >= 80
    if (groupBContainer) {
      const shouldShowB = playerCount >= 80;
      console.log(`[refreshAdminData] Admin Page - For B container (adminDetailGroupBContainer): playerCount=${playerCount}, shouldShowB=${shouldShowB}`);
      if (shouldShowB) {
        groupBContainer.style.display = ''; // Show
        updateTable(data.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('B')), 'admin_detail_tableB', lang, true, true);
      } else {
        groupBContainer.style.display = 'none'; // Hide
      }
    } else {
      console.warn('adminDetailGroupBContainer not found');
    }

    // C 組 - playerCount >= 120
    if (groupCContainer) {
      const shouldShowC = playerCount >= 120;
      console.log(`[refreshAdminData] Admin Page - For C container (adminDetailGroupCContainer): playerCount=${playerCount}, shouldShowC=${shouldShowC}`);
      if (shouldShowC) {
        groupCContainer.style.display = ''; // Show
        updateTable(data.filter(p => p.teamAssignment && p.teamAssignment.toUpperCase().startsWith('C')), 'admin_detail_tableC', lang, true, true);
      } else {
        groupCContainer.style.display = 'none'; // Hide
      }
    } else {
      console.warn('adminDetailGroupCContainer not found');
    }

  }
  // The temporary log [refreshAdminData CLEARED] can be removed now or after testing.
  // console.log(`[refreshAdminData CLEARED] playerCount is: ${playerCount}. Ready for new logic.`);
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

// 儲存設定 (now async)
async function saveAdminSettings() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';

  if (!window.currentTeamId) {
    alert(I18N[lang].msgUnknownTeamError || "錯誤：未知的團隊，無法儲存設定。");
    return;
  }

  const verifyCodeAInputElement = document.getElementById('verifyCodeA');
  const adminEventCodeANotesInput = document.getElementById('adminEventCodeANotes');
  const gameStartDateInput = document.getElementById('adminStartDate');
  const signupEndDateInput = document.getElementById('adminEndDate');
  const playerCountButton = document.querySelector('.player-count-group button.active');
  const adminGroupNotesTextarea = document.getElementById('adminGroupNotes');
  const adminPasswordNewInput = document.getElementById('adminPasswordInput');

  const newEventCodeA = verifyCodeAInputElement ? verifyCodeAInputElement.value.trim() : "";
  if (!newEventCodeA) {
    alert(I18N[lang].msgMustSetEventCodeA || "報名表驗證碼不能為空！");
    return;
  }

  let gameStartDateValue = gameStartDateInput ? gameStartDateInput.value : null;
  let signupEndDateValue = signupEndDateInput ? signupEndDateInput.value : null;
  // Add date validation as before
  if (gameStartDateValue && signupEndDateValue) {
    const gameStart = new Date(gameStartDateValue);
    const signupEnd = new Date(signupEndDateValue);
    if (signupEnd >= gameStart) {
      alert(I18N[lang].msgSignupEndDateError || "報名截止日期必須早於開局日期。");
      // Potentially adjust signupEndDateValue or prevent saving
      // For now, let's assume dates are valid or handled by UI constraints if any
      return; 
    }
  } else if (!gameStartDateValue || !signupEndDateValue) {
    alert(I18N[lang].msgValidDateError || "開局日期和報名截止日期均為必填項。");
    return; 
  }


  const settingsToSave = {
    eventCodeA: newEventCodeA,
    eventCodeANotes: adminEventCodeANotesInput ? adminEventCodeANotesInput.value.trim() : '',
    gameStartDate: gameStartDateValue,
    signupEndDate: signupEndDateValue,
    playerCount: playerCountButton ? parseInt(playerCountButton.dataset.count, 10) : 40,
    groupNotes: adminGroupNotesTextarea ? adminGroupNotesTextarea.value.trim() : '',
    quotas: {},
    internQuotas: {},
    lastUpdated: firebase.database.ServerValue.TIMESTAMP
  };

  // Quota saving logic (remains the same as your previous correct version)
  document.querySelectorAll('.admin-group h4 + .quota-grid select[id^="quota-"]').forEach(select => {
    const idParts = select.id.split('-'); 
    const type = idParts[1];
    const specificName = idParts.length > 2 ? idParts[2] : null; 
    if (type === "intern" && specificName) {
      settingsToSave.internQuotas[specificName] = parseInt(select.value, 10);
    } else if (specificName) { 
      settingsToSave.quotas[type] = parseInt(select.value, 10);
    } else if (type && !specificName && select.id.startsWith('quota-')) { 
       settingsToSave.quotas[type] = parseInt(select.value, 10);
    }
  });

  let adminPasswordMessage = "";
  const newAdminPassword = adminPasswordNewInput ? adminPasswordNewInput.value.trim() : "";

  if (newAdminPassword !== "") {
    settingsToSave.adminPassword = newAdminPassword; // Save plaintext password
    adminPasswordMessage = I18N[lang].msgAdminPassSet || "管理員密碼已更新。";
    if (adminPasswordNewInput) adminPasswordNewInput.value = ""; 
  } else {
    // Preserve existing adminPassword if new password field is empty
    try {
      const currentSettingsSnapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings/adminPassword`).once('value');
      if (currentSettingsSnapshot.exists()) {
        settingsToSave.adminPassword = currentSettingsSnapshot.val(); // Carry over existing plaintext password
      }
    } catch (e) {
      console.error("Error fetching current adminPassword during save:", e);
    }
  }

  try {
    await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings`).update(settingsToSave);
    alert((I18N[lang].msgSettingsSaved || "設定已儲存到資料庫！") + " " + adminPasswordMessage.trim());

    if (isAdmin && window.eventCode !== settingsToSave.eventCodeA) {
      window.eventCode = settingsToSave.eventCodeA;
    }

    await updateSignupCount();
    await refresh();
    if (isAdmin) {
      console.log(`[saveAdminSettings] Calling refreshAdminData with playerCount: ${settingsToSave.playerCount}`);
      await refreshAdminData(settingsToSave.playerCount);
    }
    await populateVerifyHint(); 

  } catch (error) {
    console.error(`Error saving admin settings for team ${DB_ROOT}/${window.currentTeamId}:`, error);
    alert(I18N[lang].msgErrorSavingSettings || "儲存設定失敗！");
  }
}

// 讀取設定 (now async)
async function loadSettings() {
  const adminSection = document.getElementById('admin');
  if (!adminSection || (!adminSection.classList.contains('active') && window.getComputedStyle(adminSection).display === 'none')) {
    return;
  }
  const lang = document.getElementById('langSwitch')?.value || 'zh';

  if (!window.currentTeamId) {
    alert(I18N[lang].msgUnknownTeamError || "錯誤：未知的團隊，無法載入設定。");
    const currentManagedTeamEl = document.getElementById('currentManagedTeam');
    if (currentManagedTeamEl) currentManagedTeamEl.textContent = I18N[lang].msgUnknownTeamError || "錯誤：未知的團隊";
    document.getElementById('verifyCodeA')?.setAttribute('value', '');
    document.getElementById('adminEventCodeANotes')?.setAttribute('value', '');
    document.getElementById('adminGroupNotes')?.setAttribute('value', '');
    document.getElementById('adminPasswordInput')?.setAttribute('value', '');
    const today = new Date().toISOString().split('T')[0];
    const gameStartDateInput = document.getElementById('adminStartDate');
    if (gameStartDateInput) gameStartDateInput.value = today;
    const signupEndDateInput = document.getElementById('adminEndDate');
    if (signupEndDateInput) signupEndDateInput.value = today; 
    document.querySelectorAll('.player-count-group button').forEach(b => b.classList.remove('active'));
    document.querySelector('.player-count-group button[data-count="40"]')?.classList.add('active');
    document.querySelectorAll('.admin-group h4 + .quota-grid select[id^="quota-"]').forEach(select => select.value = "0");
    return;
  }

  const currentManagedTeamEl = document.getElementById('currentManagedTeam');
  if (currentManagedTeamEl) currentManagedTeamEl.textContent = window.currentTeamId;

  try {
    const snapshot = await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings`).once('value');
    let settings = {};
    if (snapshot.exists()) {
      settings = snapshot.val();
    } else {
      console.warn(`No systemSettings found for team ${DB_ROOT}/${window.currentTeamId} in Firebase. Form will use defaults or be empty.`);
      const teamPrefix = window.currentTeamId.charAt(window.currentTeamId.length - 1);
      settings.eventCodeA = settings.eventCodeA || `${teamPrefix}_event`; 
      settings.adminPassword = settings.adminPassword || `${teamPrefix}_adm`; // Default plaintext admin password suggestion
    }

    const verifyCodeAInputElement = document.getElementById('verifyCodeA');
    if (verifyCodeAInputElement) {
      verifyCodeAInputElement.value = settings.eventCodeA || '';
    }

    const adminEventCodeANotesInput = document.getElementById('adminEventCodeANotes');
    if (adminEventCodeANotesInput) {
      adminEventCodeANotesInput.value = settings.eventCodeANotes || '';
    }

    const adminGroupNotesTextarea = document.getElementById('adminGroupNotes');
    if (adminGroupNotesTextarea) {
      adminGroupNotesTextarea.value = settings.groupNotes || '';
    }

    // Display current admin password for modification (VERY INSECURE - FOR TESTING ONLY)
    const adminPasswordInputElement = document.getElementById('adminPasswordInput');
    if (adminPasswordInputElement) {
        // adminPasswordInputElement.value = settings.adminPassword || ''; // Display current plaintext for easy modification (testing only)
        adminPasswordInputElement.placeholder = settings.adminPassword ? `目前: ${settings.adminPassword} (輸入新密碼修改)` : "輸入新密碼";
        adminPasswordInputElement.value = ''; // Clear it so user has to type to change
    }

    const gameStartDateInput = document.getElementById('adminStartDate');
    const signupEndDateInput = document.getElementById('adminEndDate');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    if (gameStartDateInput) {
      gameStartDateInput.value = settings.gameStartDate || todayStr;
    }

    if (signupEndDateInput) {
      const gameStart = gameStartDateInput && gameStartDateInput.value ? new Date(gameStartDateInput.value) : today;
      let defaultSignupEnd = new Date(gameStart);
      defaultSignupEnd.setDate(gameStart.getDate() - 1);
      const defaultSignupEndStr = defaultSignupEnd.toISOString().split('T')[0];
      signupEndDateInput.value = settings.signupEndDate || defaultSignupEndStr;
    }

    const playerCountFromDB = settings.playerCount !== undefined ? settings.playerCount : 40;
    document.querySelectorAll('.player-count-group button').forEach(b => b.classList.remove('active'));
    const countBtn = document.querySelector(`.player-count-group button[data-count="${playerCountFromDB}"]`);
    if (countBtn) countBtn.classList.add('active');
    else document.querySelector('.player-count-group button[data-count="40"]')?.classList.add('active');

  const quotaItemDetails = [
      { name: '劍盾', id: 'swordshield' }, { name: '地鼠', id: 'mole' }, { name: '大餅', id: 'cookie' },
      { name: '文書', id: 'scribe' }, { name: '指揮', id: 'commander' }
    ];
  quotaItemDetails.forEach(item => {
    const quotaSelect = document.getElementById(`quota-${item.id}`);
      if (quotaSelect) quotaSelect.value = (settings.quotas && settings.quotas[item.id] !== undefined) ? settings.quotas[item.id].toString() : "0";
    const internQuotaSelect = document.getElementById(`quota-intern-${item.id}`);
      if (internQuotaSelect) internQuotaSelect.value = (settings.internQuotas && settings.internQuotas[item.id] !== undefined) ? settings.internQuotas[item.id].toString() : "0";
    });

  // 直接從資料庫讀取隊伍分配並生成文字結果
  const teamAssignTextEl = document.getElementById('teamAssignText');
  if (teamAssignTextEl) {
      // 從所有報名資料中取出已分配隊伍
      const allSignupData = await getData();
      const teams = { A: [], B: [], C: [] };
      allSignupData.forEach(p => {
          if (p.teamAssignment && /^[ABC]/.test(p.teamAssignment)) {
              teams[p.teamAssignment.charAt(0)].push(p);
          }
      });
      // 依 orderInTeam 排序
      Object.values(teams).forEach(list => list.sort((a, b) => (a.orderInTeam || 0) - (b.orderInTeam || 0)));
      // 生成顯示文字
      const parts = [];
      ['A', 'B', 'C'].forEach(letter => {
          const list = teams[letter];
          if (list.length) {
              const header = letter === 'A'
                ? `🔸 A 隊 (${list.length}人)：`
                : letter === 'B'
                  ? `🔹 B 隊 (${list.length}人)：`
                  : `⭐ C 隊 (${list.length}人)：`;
              const lines = list.map((p, i) => {
                  const uid = p.player_game_uid || p.uid;
                  const rank = (I18N[lang]?.rankDisplay?.[p.rank] || p.rank) + (p.rankMinor !== '-' ? p.rankMinor : '');
                  const ident = (I18N[lang]?.introDisplay?.[p.roleGroup] || p.roleGroup) + (p.introName ? `(${p.introName})` : '');
                  return `${letter}${String(i + 1).padStart(2, '0')} ${uid} ${p.nickname} ${rank} ${ident}`;
              });
              parts.push(`${header}\n${lines.join('\n')}`);
          }
      });
      teamAssignTextEl.textContent = parts.length ? parts.join('\n\n') : (I18N[lang]?.msgNoResultToCopy || "尚未進行團隊分配，或無分配結果。");
  }

    if (isAdmin) {
        window.eventCode = settings.eventCodeA || null;
    }

    await updateSignupCount();
    await refreshAdminData(playerCountFromDB); // 修改：傳遞 playerCountFromDB
  } catch (error) {
    console.error(`Error loading admin settings for team ${DB_ROOT}/${window.currentTeamId} from Firebase:`, error);
    alert(I18N[lang].msgErrorLoadingSettings || "讀取設定失敗！");
  }
}

// 自動分盟
async function autoAssignTeams() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  // 清空管理列表與結果展示
  document.querySelectorAll('#adminDetailGroupAContainer tbody,#adminDetailGroupBContainer tbody,#adminDetailGroupCContainer tbody')
    .forEach(tbody => tbody.innerHTML = '');
  const teamAssignText = document.getElementById('teamAssignText'); if (teamAssignText) teamAssignText.textContent = '';

  console.log('[autoAssignTeams] Enhanced auto-assignment with expectSquad');
  // 決定隊伍符號
  let playerCountSetting = 40; try {
    const snap = await db.ref(`${DB_ROOT}/${window.currentTeamId}/systemSettings/playerCount`).once('value');
    if (snap.exists()) playerCountSetting = parseInt(snap.val(),10)||40;
  } catch(e){console.error(e);}  
  const teamSymbols = playerCountSetting >= 120 ? ['A','B','C'] : (playerCountSetting >= 80 ? ['A','B'] : ['A']);
  // 撈資料並計算分數
  const allPlayers = await getData(); if (!allPlayers.length) { alert(I18N[lang].msgNoData); return; }
  allPlayers.forEach(p=>p.rankScore = getRankScore(p));
  // 排除手動覆蓋
  const pool = allPlayers.filter(p => !p.manualOverride);
  // 依 expectSquad 分組
  const groupsByKey = {}, unmarked = [];
  pool.forEach(p => {
    const key = (p.expectSquad||'').trim();
    if (key) { (groupsByKey[key]||(groupsByKey[key]=[])).push(p); }
    else unmarked.push(p);
  });
  // 過濾大組 >8
  Object.keys(groupsByKey).forEach(key => {
    if (groupsByKey[key].length > 8) { unmarked.push(...groupsByKey[key]); delete groupsByKey[key]; }
  });
  // 建小組單位
  const groupUnits = Object.values(groupsByKey).map(members => ({ members, totalScore: members.reduce((s,p)=>s+getRankScore(p),0) }));
  groupUnits.sort((a,b)=>a.totalScore - b.totalScore);
  // 初始化分隊
  const teamData = {}, updates = {};
  teamSymbols.forEach(sym=>teamData[sym]={members:[],score:0});
  // 分配整組
  groupUnits.forEach(unit => {
    const target = teamSymbols.reduce((minT,t)=> teamData[t].score < teamData[minT].score ? t : minT, teamSymbols[0]);
    unit.members.forEach(p => {
      const idx = teamData[target].members.length + 1;
      const assign = target + String(idx).padStart(2,'0');
      updates[`${p.uid}/teamAssignment`] = assign;
      updates[`${p.uid}/orderInTeam`]   = idx;
      updates[`${p.uid}/manualOverride`] = true;
      teamData[target].members.push(p);
      teamData[target].score += p.rankScore;
    });
  });
  // 分配散兵
  unmarked.sort((a,b)=>b.rankScore - a.rankScore).forEach(p => {
    const target = teamSymbols.reduce((minT,t)=> teamData[t].score < teamData[minT].score ? t : minT, teamSymbols[0]);
    const idx = teamData[target].members.length + 1;
    updates[`${p.uid}/teamAssignment`] = target + String(idx).padStart(2,'0');
    updates[`${p.uid}/orderInTeam`]   = idx;
    teamData[target].members.push(p);
    teamData[target].score += p.rankScore;
  });
  // 更新到 Firebase
  await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).update(updates);
  console.log('[autoAssignTeams] Updates applied:', updates);
  // 重新渲染
  if (isAdmin) await refreshAdminData(playerCountSetting);
  await refresh();
  alert(I18N[lang].msgSuccess);
  // 重新生成並顯示分隊結果文字
  const teamAssignTextEl = document.getElementById('teamAssignText');
  if (teamAssignTextEl) {
      const allSignupData = await getData();
      const grouped = { A: [], B: [], C: [] };
      allSignupData.forEach(p => {
          if (p.teamAssignment && /^[ABC]/.test(p.teamAssignment)) {
              grouped[p.teamAssignment.charAt(0)].push(p);
          }
      });
      Object.values(grouped).forEach(list => list.sort((a, b) => (a.orderInTeam || 0) - (b.orderInTeam || 0)));
      const texts = [];
      ['A', 'B', 'C'].forEach(letter => {
          const list = grouped[letter];
          if (list.length) {
              const header = letter === 'A'
                ? `🔸 A 隊 (${list.length}人)：`
                : letter === 'B'
                  ? `🔹 B 隊 (${list.length}人)：`
                  : `⭐ C 隊 (${list.length}人)：`;
              const lines = list.map((p, i) => {
                  const uid = p.player_game_uid || p.uid;
                  const rank = (I18N[lang]?.rankDisplay?.[p.rank] || p.rank) + (p.rankMinor !== '-' ? p.rankMinor : '');
                  const ident = (I18N[lang]?.introDisplay?.[p.roleGroup] || p.roleGroup) + (p.introName ? `(${p.introName})` : '');
                  return `${letter}${String(i + 1).padStart(2, '0')} ${uid} ${p.nickname} ${rank} ${ident}`;
              });
              texts.push(`${header}\n${lines.join('\n')}`);
          }
      });
      teamAssignTextEl.textContent = texts.length ? texts.join('\n\n') : '';
  }
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

// 新增：重新編號並更新 Firebase 的函數
async function reassignSignupOrder() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  // 清空 UI
  document.querySelector('#signupList tbody').innerHTML = '';
  document.querySelectorAll('#adminDetailGroupAContainer tbody,#adminDetailGroupBContainer tbody,#adminDetailGroupCContainer tbody')
    .forEach(tbody => tbody.innerHTML = '');
  document.getElementById('teamAssignText').textContent = '';
  
  if (!window.currentTeamId || !window.eventCode) {
    alert(I18N[lang].msgUnknownTeamError || "錯誤：團隊或活動資訊未設定，無法重新編號。");
    return;
  }

  const confirmReorder = confirm(I18N[lang].msgReorderConfirm || "確定要根據報名時間重新編號所有玩家嗎？此操作不可逆。");
  if (!confirmReorder) return;

  try {
    const signupsRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`);
    const snapshot = await signupsRef.once('value');
    if (!snapshot.exists()) {
      alert(I18N[lang].msgNoDataToReorder || "沒有報名資料可供重新編號。");
      return;
    }

    const signupsData = snapshot.val();
    // 以資料庫 key（snapshot 的 key）排序並重新編號
    const entries = Object.entries(signupsData)
      .filter(([key, rec]) => rec && rec.ts)
      .sort(([,a],[,b]) => a.ts - b.ts);
    if (entries.length === 0) {
      alert(I18N[lang].msgNoDataToReorder || "沒有包含時間戳的有效報名資料可供重新編號。");
      return;
    }
    const updates = {};
    let newOrder = 1;
    for (const [key] of entries) {
      updates[`${key}/signupOrder`] = newOrder++;
    }
    await signupsRef.update(updates);
    
    // Update the main counter to the new total number of reordered signups
    const counterRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/counter`);
    await counterRef.set(entries.length);

    alert(I18N[lang].msgReorderSuccess || "重新編號成功！");
    await refreshSignupList(); // Refresh the list in UI
    await updateSignupCount(); // Update the displayed count
    await loadSettings(); // 重新載入設定並刷新分隊文字框內容

  } catch (error) {
    console.error(`Error reassigning signup order for team ${DB_ROOT}/${window.currentTeamId}, event ${window.eventCode}:`, error);
    alert(I18N[lang].msgErrorReordering || "重新編號失敗！");
  }
}

// 新增：刪除全部資料功能
async function deleteAllData() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  if (!window.currentTeamId) { alert(I18N[lang].msgUnknownTeamError); return; }
  if (!confirm('確定要刪除所有報名資料嗎？')) return;
  if (!confirm('此操作不可復原，是否繼續？')) return;
  try {
    // 刪除 signups 節點與 counter
    await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).remove();
    await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/counter`).set(0);
    alert(I18N[lang].msgDataCleared || '資料已刪除！');
    // 清空前端顯示
    document.querySelector('#signupList tbody').innerHTML = `<tr><td colspan="7">${I18N[lang].msgNoSignupData}</td></tr>`;
    document.querySelectorAll('#adminDetailGroupAContainer tbody,#adminDetailGroupBContainer tbody,#adminDetailGroupCContainer tbody')
      .forEach(tbody => tbody.innerHTML = `<tr><td colspan="10">${I18N[lang].msgNoData}</td></tr>`);
    document.getElementById('teamAssignText').textContent = '';
    // 重新載入
    await refreshSignupList();
    await refreshAdminData();
    await refresh();
  } catch (error) {
    console.error('deleteAllData error:', error);
    alert(I18N[lang].msgError || '刪除失敗！');
  }
}

// 綁定「刪除全部資料」按鈕
const deleteAllDataBtn = document.getElementById('deleteAllDataBtn');
if (deleteAllDataBtn) {
  deleteAllDataBtn.replaceWith(deleteAllDataBtn.cloneNode(true));
  document.getElementById('deleteAllDataBtn').addEventListener('click', deleteAllData);
}

// 修改：fullReassignTeams 開頭清空 UI
async function fullReassignTeams() {
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  // 清空 UI
  document.querySelector('#signupList tbody').innerHTML = '';
  document.querySelectorAll('#adminDetailGroupAContainer tbody,#adminDetailGroupBContainer tbody,#adminDetailGroupCContainer tbody')
    .forEach(tbody => tbody.innerHTML = '');
  document.getElementById('teamAssignText').textContent = '';

  if (!confirm('確定要清除所有手動/期望設定並重新分隊嗎？')) return;
  const data = await getData();
  const clearUpdates = Object.fromEntries(data.map(p => [`${p.uid}/manualOverride`, false]));
  await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).update(clearUpdates);
  await autoAssignTeams();
}

// 綁定 完全重新分隊 按鈕
const fullReassignBtn = document.getElementById('fullReassignBtn');
if (fullReassignBtn) {
  fullReassignBtn.replaceWith(fullReassignBtn.cloneNode(true));
  document.getElementById('fullReassignBtn').addEventListener('click', fullReassignTeams);
}

// 確保管理頁面更新後啟用拖放
updateAdminSection = (function(orig){
  return function(...args){ orig.apply(this,args); initDragAndDrop(); };
})(updateAdminSection);

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
window.addEventListener('DOMContentLoaded', async () => { // Make it async if any await is inside
  console.log("DOM已載入，開始初始化...");

  // 1. 清理 localStorage 中的驗證狀態，要求每次都重新驗證
  localStorage.removeItem('verifyStatus');
  localStorage.removeItem('accessMode');

  // 2. 包裝語言選擇器並初次套用翻譯
  wrapLangSelect(); 
  applyLang(); 

  // 3. 設置語言選擇器事件
  setupLanguageSwitchers();

  // 4. 初始化驗證碼相關事件
  initVerificationEvents(); 

  // 5. 初始化分頁切換
  initTabNavigation(); 

  // 6. 初始化專武網格
  generateWeaponGrid();

  // 7. 綁定表單內條件顯示邏輯
  // ... (introSelectElement and troopTypeSelectElement logic remains the same)

  // 8. 處理初始驗證碼遮罩的顯示
  const verifyOverlay = document.getElementById('verifyOverlay');
  const verifyCodeInput = document.getElementById('verifyCode');
  
  const storedVerifyStatus = localStorage.getItem('verifyStatus'); // Will be null due to clearing above
  // const storedAccessMode = localStorage.getItem('accessMode'); // Will be null

  // 因為 localStorage 已清除，所以總是顯示遮罩
      if (verifyOverlay) verifyOverlay.style.display = 'flex';
      if (verifyCodeInput) verifyCodeInput.focus();
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn) btn.style.display = 'none';
    });
  
  // 9. Header 重新整理按鈕事件
  const refreshButton = document.getElementById('refreshAllData');
  if (refreshButton) {
    refreshButton.addEventListener('click', async () => { // Make async
      console.log("手動觸發資料更新...");
      // 只有在已驗證且有 currentTeamId 時才執行刷新
      if (window.currentTeamId) {
        await populateVerifyHint();
        await refreshSignupList();
        await refresh();
        if (isAdmin) { // isAdmin 也應該在驗證後設定
          console.log('[%c#refreshAllData%c] Admin is true, calling refreshAdminData().', 'color:lime;font-weight:bold;', 'color:auto;');
          await refreshAdminData(); 
        } else {
          console.log('[%c#refreshAllData%c] Admin is false, not calling refreshAdminData().', 'color:orange;font-weight:bold;', 'color:auto;');
        }
        const lang = document.getElementById('langSwitch')?.value || 'zh';
        alert(I18N[lang].msgPageDataRefreshed || "頁面資料已重新整理！");
      } else {
        const lang = document.getElementById('langSwitch')?.value || 'zh';
        alert(I18N[lang].msgInvalidCode || "請先輸入有效的驗證碼。"); // 或者其他提示
      }
    });
  }
  
  // 10. 初始化地圖篩選器
  initMapFilters();

  // 11. 專武登記表單 UID 輸入完成後（blur），載入可編輯的報名資料到右側方塊
  const weaponUIDInput = document.getElementById('weaponUID');
  const weaponRightContainer = document.querySelector('.weapon-right');
  if (weaponUIDInput && weaponRightContainer) {
    // 當輸入欄 focus 時，恢復 placeholder
    weaponUIDInput.addEventListener('focus', () => {
      const lang = document.getElementById('langSwitch').value || 'zh';
      weaponUIDInput.placeholder = I18N[lang].uidPlaceholder;
      // 清除可能殘留的暱稱欄 placeholder
      const previewNameInput = document.getElementById('previewPlayerName');
      previewNameInput.placeholder = I18N[lang].namePlaceholder || '輸入你的暱稱';
    });
    // 當輸入欄失焦後觸發查詢
    weaponUIDInput.addEventListener('blur', async () => {
      const lang = document.getElementById('langSwitch').value || 'zh';
      const uid = weaponUIDInput.value.trim();
      // Reset team and order selects before loading new data
      const previewTeamSelectEl = document.getElementById('previewTeamSelect');
      const previewOrderInTeamSelectEl = document.getElementById('previewOrderInTeamSelect');
      const orderLabelEl = previewOrderInTeamSelectEl ? previewOrderInTeamSelectEl.closest('label') : null;

      if (previewTeamSelectEl) previewTeamSelectEl.selectedIndex = 0;
      if (previewOrderInTeamSelectEl) {
        previewOrderInTeamSelectEl.innerHTML = `<option value="">--${I18N[lang].colOrderInTeam || '選擇編號'}--</option>`;
        previewOrderInTeamSelectEl.disabled = true;
      }
      if (orderLabelEl) orderLabelEl.classList.add('hidden');

      if (!uid) {
        document.getElementById('previewPlayerName').value = '';
        document.getElementById('previewPaySelect').value = '';
        document.getElementById('previewIntroSelect').value = '';
        // previewTeamSelect already reset
        return;
      }
      const signups = await getSignups();
      const rec = signups.find(r => String(r.player_game_uid) === uid);
      if (!rec) {
        const previewNameInput = document.getElementById('previewPlayerName');
        previewNameInput.value = '';
        previewNameInput.placeholder = I18N[lang].msgUserNotFound;
        document.getElementById('previewPaySelect').value = '';
        document.getElementById('previewIntroSelect').value = '';
        // previewTeamSelect already reset
        return;
      }
      document.getElementById('previewPlayerName').value = rec.nickname || '';
      document.getElementById('previewPlayerName').placeholder = I18N[lang].namePlaceholder || '輸入你的暱稱'; 
      document.getElementById('previewPaySelect').value = rec.payPower || '';
      document.getElementById('previewIntroSelect').value = rec.roleGroup || '';
      document.getElementById('previewFormLangSwitch').value = rec.lang || lang;
      if (previewTeamSelectEl && rec.team) {
        previewTeamSelectEl.value = rec.team;
        // Trigger change to populate order if team is pre-selected
        previewTeamSelectEl.dispatchEvent(new Event('change')); 
        // Set order if available in record AFTER options are populated
        if (previewOrderInTeamSelectEl && rec.orderInTeam) {
            // Wait a tick for options to populate if dispatchEvent is too fast
            setTimeout(() => { previewOrderInTeamSelectEl.value = rec.orderInTeam; }, 0);
        }
      }
      weaponRightContainer.dataset.firebaseKey = rec.uid; 
    });
    document.getElementById('previewFormLangSwitch').addEventListener('change', e => {
      const v = e.target.value;
      document.getElementById('langSwitch').value = v;
      document.getElementById('formLangSwitch').value = v;
      applyLang();
    });
  }

  // 12. Event listener for previewTeamSelect
  const previewTeamSelectEl = document.getElementById('previewTeamSelect');
  if (previewTeamSelectEl) {
    previewTeamSelectEl.addEventListener('change', function() {
      const lang = document.getElementById('langSwitch')?.value || 'zh';
      const orderSelectEl = document.getElementById('previewOrderInTeamSelect');
      const orderLabelEl = orderSelectEl ? orderSelectEl.closest('label') : null;

      if (!orderSelectEl || !orderLabelEl) return;

      orderSelectEl.innerHTML = ''; // Clear existing options
      const defaultOrderOptionText = `--${I18N[lang].colOrderInTeam || (lang === 'zh' ? '選擇編號' : 'Select Order')}--`;
      orderSelectEl.add(new Option(defaultOrderOptionText, ''));

      if (this.value) { // If a team is selected
        for (let i = 1; i <= 40; i++) {
          orderSelectEl.add(new Option(i.toString(), i.toString()));
        }
        orderSelectEl.disabled = false;
        orderLabelEl.classList.remove('hidden');
      } else { // No team selected or default "--選擇隊伍--" selected
        orderSelectEl.disabled = true;
        orderLabelEl.classList.add('hidden');
      }
    });
  }

  // 13. 詳細資料頁統計卡點擊滾動功能
  const detailSection = document.getElementById('detail');
  if (detailSection) {
    const statsHeader = detailSection.querySelector('.stats-header');
    if (statsHeader) {
      const statBoxes = statsHeader.querySelectorAll('.stat-box'); // A, B, C 卡片
      const detailGroupContainers = [
        document.getElementById('detailGroupAContainer'),
        document.getElementById('detailGroupBContainer'),
        document.getElementById('detailGroupCContainer')
      ];

      statBoxes.forEach((box, index) => {
        if (detailGroupContainers[index]) { // 確保目標容器存在
          box.style.cursor = 'pointer'; // 提示可點擊
          box.addEventListener('click', () => {
            const targetContainer = detailGroupContainers[index];
            // 檢查目標容器是否實際可見 (不僅僅是 style.display 不是 none)
            if (targetContainer.offsetParent !== null && window.getComputedStyle(targetContainer).display !== 'none') {
              console.log(`[StatBoxClick] Scrolling to ${targetContainer.id}`);
              targetContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              console.log(`[StatBoxClick] Target ${targetContainer.id} is not visible, not scrolling.`);
            }
          });
        }
      });
    } else {
      console.warn('[DOMContentLoaded] #detail .stats-header not found for stat-box click listeners.');
    }
  } else {
    console.warn('[DOMContentLoaded] #detail section not found for stat-box click listeners.');
  }

  console.log("初始化完成");
});

// Ensure DOMContentLoaded loads settings for admin if admin is the active mode
// The event listener for DOMContentLoaded itself should be async if it contains await directly
// window.addEventListener('DOMContentLoaded', async () => { // Already marked as async above
// ... (existing DOMContentLoaded logic, ensure it's also marked async if it wasn't) ...
// });

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
    { id: 'special',  name: '特殊',     color: '#ff7043', weapons: ['地鼠號', '劍盾', '沒想法', '大餅盟主'] },
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
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  if (!window.currentTeamId || !window.eventCode) {
    console.warn("updateSignupCount: currentTeamId or eventCode not set. Cannot update count.");
    const countDisplay = document.getElementById('signupCountDisplay'); // 應該是 'currentSignupCount' 和 'maxSignupCount'
    if (document.getElementById('currentSignupCount')) document.getElementById('currentSignupCount').textContent = '0';
    if (document.getElementById('maxSignupCount')) document.getElementById('maxSignupCount').textContent = 'N/A';
    return;
  }

  try {
    const counterRef = db.ref(`${DB_ROOT}/${window.currentTeamId}/events/counter`);
    const snapshot = await counterRef.once('value');
    const currentSignups = snapshot.exists() ? snapshot.val() : 0;

    const playerCountButton = document.querySelector('.player-count-group button.active');
    const maxPlayers = playerCountButton ? parseInt(playerCountButton.dataset.count, 10) : 40;

    // 更新報名頁面上的計數器
    const currentSignupCountEl = document.getElementById('currentSignupCount');
    const maxSignupCountEl = document.getElementById('maxSignupCount');

    if (currentSignupCountEl) currentSignupCountEl.textContent = currentSignups;
    if (maxSignupCountEl) maxSignupCountEl.textContent = maxPlayers;

    // 檢查是否已滿額並相應地更新按鈕狀態或提示 (可選)
    const submitSignupButton = document.getElementById('submitSignup');
    if (submitSignupButton) {
        submitSignupButton.disabled = currentSignups >= maxPlayers;
        if (currentSignups >= maxPlayers) {
            // 可以加一個提示，例如在按鈕旁顯示「已額滿」
        }
    }

  } catch (error) {
    console.error(`Error updating signup count for team ${DB_ROOT}/${window.currentTeamId}, event ${window.eventCode}:`, error);
    const currentSignupCountEl = document.getElementById('currentSignupCount');
    if (currentSignupCountEl) currentSignupCountEl.textContent = I18N[lang]?.msgError || '錯誤';
  }
}

// 輔助函數，用於複製團隊結果時的格式化
function formatTeamForCopy(team, lang, teamPrefix) {
  if (!team || team.length === 0) return "";
  return team
    .map((p, index) => {
      const teamId = `${teamPrefix}${(index + 1).toString().padStart(2, '0')}`;
      const playerUIDForDisplay = p.player_game_uid || p.uid || 'N/A'; 
      const nicknameForDisplay = p.nickname || 'N/A';
      const rankForDisplay = (I18N[lang]?.rankDisplay?.[p.rank] || p.rank || 'N/A') + 
                             (p.rankMinor && p.rankMinor !== '-' ? p.rankMinor : '');
      const identityForDisplay = (I18N[lang]?.introDisplay?.[p.roleGroup] || p.roleGroup || 'N/A') +
                                 (p.introName ? `(${p.introName})` : '');
      // 欄位順序: 隊伍編號 | UID | 暱稱 | 排位 | 身分
      return `${teamId} ${playerUIDForDisplay} ${nicknameForDisplay} ${rankForDisplay} ${identityForDisplay}`;
    })
    .join('\n'); // Corrected join
}

// ===== Legacy LocalStorage Compatibility Wrappers =====
// 用於兼容舊有程式碼中對 getData/getWeaponData/saveData/saveWeaponData 的呼叫
async function getData(teamId = window.currentTeamId, eventId_deprecated = null) { // eventId is no longer used
  const lang = document.getElementById('langSwitch')?.value || 'zh';
  if (!teamId) {
    console.error("getData Error: currentTeamId is not set.");
    return []; 
  }
  // eventId parameter is deprecated and ignored. Data path is now fixed per team.

  try {
    const dataRef = db.ref(`${DB_ROOT}/${teamId}/events/signups`); // Path without eventId
    const snapshot = await dataRef.once('value');
    if (snapshot.exists()) {
      const dataObject = snapshot.val();
      const dataArray = Object.entries(dataObject).map(([key, value]) => ({
        ...value, 
        uid: key   // Firebase key is now 'uid'
      }));
      return dataArray.sort((a, b) => (a.signupOrder || 0) - (b.signupOrder || 0));
    } else {
      return [];
    }
  } catch (error) {
    console.error(`Error getting data for team ${teamId}:`, error);
    alert(I18N[lang].msgError || '讀取資料失敗！');
    return [];
  }
}

async function getWeaponData() {
  // This function now directly calls getSignups which gets data from the team's fixed event path
  return await getSignups(); 
}
// ... (ensure ensureEventCode is removed or significantly refactored as window.eventCode's role has changed) ...

// async function ensureEventCode() { ... } // This function is likely no longer needed in its current form.

// 動態載入驗證碼提示
async function populateVerifyHint() {
  const hintDiv = document.querySelector('.verify-hint');
  if (!hintDiv) {
    console.error('populateVerifyHint: .verify-hint 元素找不到！');
    return;
  }
  hintDiv.innerHTML = '<p>驗證碼提示 (測試用 - 明文密碼):</p>'; 
  const mainHintContent = [];
  hintDiv.innerHTML += '<p style="font-size:0.8em; color: #aaa;">讀取中...</p>';

  try {
    let hintsAvailable = false;
    for (const teamId of TEAM_IDS) {
      const prefix = teamId.charAt(teamId.length - 1);
      const settingsSnapshot = await db.ref(`${DB_ROOT}/${teamId}/systemSettings`).once('value');
      if (settingsSnapshot.exists()) {
        hintsAvailable = true;
        const settings = settingsSnapshot.val();
        mainHintContent.push(`<b>${teamId} (${prefix}_xxx):</b>`);
        // Display plaintext admin password for testing
        mainHintContent.push(`&nbsp;&nbsp;管理員: <code>${settings.adminPassword || (prefix + '_adm' + ' (預設)')}</code>`);
        if (settings.eventCodeA) {
          mainHintContent.push(`&nbsp;&nbsp;活動碼: <code>${settings.eventCodeA}</code> ${settings.eventCodeANotes ? '(' + settings.eventCodeANotes + ')' : ''}`);
        } else {
          mainHintContent.push(`&nbsp;&nbsp;活動碼: (未設定)`);
        }
      } else {
        mainHintContent.push(`<b>${teamId} (${prefix}_xxx):</b> (系統設定未初始化)`);
        mainHintContent.push(`&nbsp;&nbsp;管理員 (預設): <code>${prefix}_adm</code>`);
        mainHintContent.push(`&nbsp;&nbsp;活動碼: (未設定)`);
      }
      if (TEAM_IDS.indexOf(teamId) < TEAM_IDS.length - 1) {
        mainHintContent.push('<hr style="border-top: 1px dashed #555; margin: 3px 0;">');
      }
    }
    if (hintsAvailable) {
        hintDiv.innerHTML = '<p>驗證碼提示 (測試用 - 明文密碼):</p>' + mainHintContent.join('<br>');
    } else {
        hintDiv.innerHTML = '<p>驗證碼提示:</p><p>無法從資料庫讀取任何團隊的驗證碼資訊。</p>';
    }
  } catch (error) {
    console.error("Error populating verify hints from Firebase:", error);
    hintDiv.innerHTML = '<p>驗證碼提示:</p><p>讀取提示時發生錯誤。</p>';
  }
}

// 將舊的自動分盟函數重命名
async function legacyAutoAssignTeams() { 
  const allSignups = await getData(); 
  const lang = document.getElementById('langSwitch')?.value || 'zh';
// ... (這裡是舊 autoAssignTeams 的全部內容，保持不變) ...
  if (isAdmin) {
    console.log(`[legacyAutoAssignTeams] Calling refreshAdminData with playerCount: ${playerCount}`);
    await refreshAdminData(playerCount); 
  }
}

// 新增：初始化拖拉排序
function initDragAndDrop() {
  ['A','B','C'].forEach(team => {
    const tbody = document.querySelector(`#adminDetailGroup${team}Container tbody`);
    if (!tbody) return;
    Sortable.create(tbody, {
      group: 'teams',
      handle: '.drag-handle',
      animation: 150,
      onStart: () => document.querySelectorAll('.drop-zone').forEach(z => z.style.display = 'flex'),
      onEnd: async () => {
        const updates = {};
        ['A','B','C'].forEach(t => {
          const body = document.querySelector(`#adminDetailGroup${t}Container tbody`);
          if (!body) return;
          Array.from(body.children).forEach((tr, idx) => {
            const uid = tr.dataset.uid;
            const order = idx + 1;
            const assign = t + String(order).padStart(2,'0');
            updates[`${uid}/teamAssignment`] = assign;
            updates[`${uid}/orderInTeam`]   = order;
            updates[`${uid}/manualOverride`] = true;
            tr.querySelector('td').textContent = assign;
          });
        });
        await db.ref(`${DB_ROOT}/${window.currentTeamId}/events/signups`).update(updates);
        await refreshAdminData();
        await refresh();
        document.querySelectorAll('.drop-zone').forEach(z => z.style.display = 'none');
      }
    });
  });
}

// 日誌工具函數
const Logger = {
  debug: false, // 控制是否顯示除錯訊息
  
  // 初始化
  init() {
    // 從 URL 參數檢查是否啟用除錯模式
    const urlParams = new URLSearchParams(window.location.search);
    this.debug = urlParams.get('debug') === 'true';
  },

  // 一般日誌
  log(...args) {
    console.log(...args);
  },

  // 除錯日誌
  debug(...args) {
    if (this.debug) {
      console.log('[DEBUG]', ...args);
    }
  },

  // 錯誤日誌
  error(...args) {
    console.error('[ERROR]', ...args);
  },

  // 警告日誌
  warn(...args) {
    console.warn('[WARN]', ...args);
  }
};

// 初始化日誌工具
Logger.init();

// ... existing code ...



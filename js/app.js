/* js/app.js - 更新版：加入新欄位邏輯與儲存 */

/**************** 多語系字典 ****************/
const I18N = {
  zh:{siteTitle:"九萬啟插爆聯盟系統",btnAdmin:"管理員設定",navSignup:"填寫資料",navDetail:"詳細資訊",navAdmin:"管理員設定",signupTitle:"填寫遊戲資料",btnSubmit:"提交資料",weaponStat:"武器使用統計",detailTitle:"詳細清單",adminTitle:"管理員設定",adminIntro:"此處可串接後端。"},
  en:{siteTitle:"Penetration Alliance",btnAdmin:"Admin",navSignup:"Signup",navDetail:"Details",navAdmin:"Admin",signupTitle:"Player Form",btnSubmit:"Submit",weaponStat:"Weapon Stats",detailTitle:"Details",adminTitle:"Admin",adminIntro:"Backend here."}
};

/**************** 常數 ****************/
const ENTRY_CODE="0506";           // 使用者密碼
const ADMIN_CODE="基佬閣";         // 管理員驗證碼
const STORAGE_KEY="clownDataV2";   // LocalStorage key

/**************** 語言切換 ****************/
const langSel=document.getElementById("langSwitch");
langSel.addEventListener("change",applyLang);
applyLang();
function applyLang(){const lang=langSel.value;document.querySelectorAll("[data-l10n]").forEach(el=>{const k=el.dataset.l10n;if(I18N[lang]&&I18N[lang][k])el.textContent=I18N[lang][k];});}

/**************** Tab 切換 ****************/
const navBtns=document.querySelectorAll(".nav-btn");
navBtns.forEach(btn=>btn.addEventListener("click",()=>{navBtns.forEach(b=>b.classList.remove("active"));btn.classList.add("active");document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(btn.dataset.target).classList.add("active");}));

/**************** 管理員驗證 ****************/
const adminBtn=document.getElementById("adminBtn");
adminBtn.addEventListener("click",()=>{const code=prompt("請輸入管理員驗證碼：");if(code!==ADMIN_CODE)return alert("驗證失敗");const adminTab=document.getElementById("adminTabBtn");adminTab.style.display="block";adminTab.click();});

/**************** 排位下拉邏輯 ****************/
const rankTier=document.getElementById("rankTier");
const rankLevel=document.getElementById("rankLevel");
const tierLevelMap={none:0,iron:2,bronze:3,silver:3,gold:3,platinum:4,diamond:5,master:3,king:0};
rankTier&&rankTier.addEventListener("change",()=>{const n=tierLevelMap[rankTier.value]||0;rankLevel.innerHTML=n===0?"<option value=''>-</option>":Array.from({length:n},(_,i)=>`<option>${i+1}</option>`).join("");rankLevel.disabled=n===0;});

/**************** 介紹人邏輯 ****************/
const introSel=document.getElementById("introSelect");
const introLabel=document.getElementById("introNameLabel");
introSel&&introSel.addEventListener("change",()=>{introLabel.classList.toggle("hidden",introSel.value!=="newbie");});

/**************** 提交表單 ****************/
function submitSignup(){
  if(document.getElementById("signupPass").value!==ENTRY_CODE){alert("密碼錯誤！");return;}
  const data={
    uid:document.getElementById("playerUID").value.trim(),
    name:document.getElementById("playerName").value.trim(),
    code:document.getElementById("teamSelect").value,
    tier:rankTier.value,
    level:rankLevel.disabled?"-":rankLevel.value,
    canPay:document.getElementById("canPaySelect").value,
    weapon:document.getElementById("weaponSelect")?document.getElementById("weaponSelect").value:"",
    must:document.getElementById("mustSelect")?document.getElementById("mustSelect").value:"",
    introType:introSel.value,
    introName:introSel.value==="newbie"?document.getElementById("introName").value.trim():"",
    lang:document.getElementById("langSelect").value
  };
  if(!data.uid||!data.name||!data.code||!data.tier||!data.canPay){alert("請完整填寫");return;}
  const store=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  store.push(data);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(store));
  alert("提交成功！");
  document.getElementById("signupForm").reset();
  rankLevel.innerHTML="<option value=''>-</option>";rankLevel.disabled=true;introLabel.classList.add("hidden");
  refreshDisplay();
}

/**************** 顯示刷新 ****************/
function refreshDisplay(){
  const list=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  const listA=list.filter(x=>x.code.startsWith("A"));
  const listB=list.filter(x=>x.code.startsWith("B"));
  document.getElementById("countA").textContent=listA.length;
  document.getElementById("countB").textContent=listB.length;
  fillGapList("A",listA,40);
  fillGapList("B",listB,40);
  fillTable("tableA",listA);
  fillTable("tableB",listB);
  fillWeaponStats("statA",listA);
  fillWeaponStats("statB",listB);
}
function fillGapList(prefix,arr,total){const ul=document.getElementById(`unfilled${prefix}`);if(!ul)return;ul.innerHTML="";for(let i=1;i<=total;i++){const code=`${prefix}${i.toString().padStart(2,"0")}`;if(!arr.find(x=>x.code===code)){const li=document.createElement("li");li.textContent=code;ul.appendChild(li);}}
}
function fillTable(id,arr){const tb=document.querySelector(`#${id} tbody`);if(!tb)return;tb.innerHTML="";arr.forEach((d,i)=>{const tr=document.createElement("tr");tr.innerHTML=`<td>${i+1}</td><td>${d.uid}</td><td>${d.name}</td><td>${d.weapon}</td><td>${d.must}</td>`;tb.appendChild(tr);});}
function fillWeaponStats(id,arr){const map={};arr.forEach(d=>{map[d.weapon]=(map[d.weapon]||0)+1;});const tb=document.querySelector(`#${id} tbody`);if(!tb)return;tb.innerHTML="";Object.entries(map).forEach(([w,c])=>{const tr=document.createElement("tr");tr.innerHTML=`<td>${w}</td><td>${c}</td><td></td>`;tb.appendChild(tr);});}

// 初始化
refreshDisplay();

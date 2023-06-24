function finder(text, element = "button") {
  const context = document.getElementsByTagName(element), found = [];
  if (context && context.length > 0) {
    for (let i = 0; i < context.length; i++) {
      if (new RegExp("^" + text).test(context[i].innerHTML)) found.push(context[i]);
    }
    return found;
  }
  console.log("Finder failed. ¯\\_(ツ)_/¯");
  return found;
}

function craft() {
  const check = (ele) => ele.classList.contains("game-btn"), parseNum = str => +str.replace(/[^.\d]/g, '');
  for (const ele of finder("Convert ", "div")) check(ele) && parseNum(ele.innerText) > 0 ? ele.click() : null;         
  for (const ele of finder("Craft ", "div")) check(ele) ? ele.click() : null;
}

function launchClick(){
  const orig = Math.sqrt, orig2 = Math.random; Math.sqrt = () => 0.5; Math.random = () => 0.22;
  for (let i = 0; i < 100; i++) document.getElementById('button') ? document.getElementById('button').click() : null;
  Math.sqrt = orig; Math.random = orig2;
}

function doIt() {
  finder("keys")[0].click();
  setTimeout(() => craft(), 200);
  setTimeout(() => finder("beacons")[0].click(), 300);
  setTimeout(() => ["Smart Split Beacons", "Ramping Power ", "Shining Light ", "Supercharged "].forEach(v => finder(v, "div")[0]?.click()), 400);
  setTimeout(() => finder("button")[0].click(), 500);
  setTimeout(() => launchClick(), 600);  
  setTimeout(() => finder("mining")[0].click(), 700);
  setTimeout(() => {
    const minables = [...document.getElementsByClassName("game-btn-fame"), ...document.getElementsByClassName("game-btn-crystal"),
      ...document.getElementsByClassName("game-btn-sigil")];
    for (const d of document.getElementsByClassName("game-btn")) {
      d.innerHTML !== "Mining Upgrades" && d.innerHTML !== "Dust Upgrades" ? minables.push(d) : null;
    }
    if (minables.length > 0) for (let i = 0; i < minables.length; i++) minables[i].innerHTML !== "-" ? minables[i].click() : null;
  }, 800);
}
window.setInterval(() => doIt(), 1000);
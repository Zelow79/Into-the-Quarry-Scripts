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
    for (const ele of finder("Convert ", "div")) {
        if (ele.classList.contains("game-btn")) ele.click();         
    }
    for (const ele of finder("Craft ", "div")) {
        if (ele.classList.contains("game-btn")) ele.click();         
    }
}

function launchClick(){
  const orig = Math.sqrt; Math.sqrt = () => 0.5, orig2 = Math.random, Math.random = () => 0.22;
  for (let i = 0; i < 100; i++) document.getElementById('button') ? document.getElementById('button').click() : null;
  Math.sqrt = orig; Math.random = orig2;
}

function doIt() {
  finder("keys")[0].click();
  setTimeout(() => {
    craft();
    finder("beacons")[0].click();
  }, 100);
  setTimeout(() => {
    ["Smart Split Beacons", "Ramping Power ", "Shining Light ", "Supercharged "].forEach(v => finder(v, "div")[0].click());
    finder("button")[0].click();
  }, 200);
  setTimeout(() => {
    launchClick();
  }, 300);  
  setTimeout(() => finder("mining")[0].click(), 400);
  setTimeout(() => {
        const minables = document.getElementsByClassName("game-btn");
    if (minables) {
      for (let i = 0; i < minables.length; i++) {
        if (minables[i].innerHTML !== "-") minables[i].click();
      }
    }
  }, 500);
}
window.setInterval(() => doIt(), 1000);

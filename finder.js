function finder(text, element = "button") {
  const context = document.getElementsByTagName(element);
  if (context.length < 1 || !context) return console.log("Finder failed. ¯\\_(ツ)_/¯");
  for (let i = 0; i < context.length; i++) {
    if (new RegExp("^" + text).test(context[i].innerHTML)) return context[i];
  }
  return console.log("Finder failed. ¯\\_(ツ)_/¯");
}

function launchClick(){
  const orig = Math.sqrt; Math.sqrt = () => 0.5, orig2 = Math.random, Math.random = () => 0.22;
  for (let i = 0; i < 100; i++) document.getElementById('button').click();
  Math.sqrt = orig; Math.random = orig2;
}
window.setInterval(() => document.getElementById('button') ? launchClick() : null, 1);

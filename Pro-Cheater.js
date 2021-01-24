// ==UserScript==
// @name         Cookie Clicker Pro Cheater - Working 2020
// @version      1.0.0.1
// @description  How Many Cookies You Want L0L
// @author       xXLloydnpikachuXx
// @match        http://orteil.dashnet.org/cookieclicker/
// ==/UserScript==

window.onload = function(){
alert("Press Q to use the cheat")
}
window.addEventListener('keydown', function(e){
if(e.key == "q"){
var ez = prompt("Enter Number Of Cookies You Want.", 1000000);
Game.Earn(parseInt(ez));
}
});

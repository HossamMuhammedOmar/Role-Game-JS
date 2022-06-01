import characterData from "/data.js";
import Character from "/Character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

function start() {
  document.querySelector("#hero .dice-container").innerHTML =
    wizard.getDicePlaceholderHtml();
  document.querySelector("#monster .dice-container").innerHTML =
    orc.getDicePlaceholderHtml();
}

function attack() {
  render();
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
start();

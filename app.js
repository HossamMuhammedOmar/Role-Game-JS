import characterData from "/data.js";
import Character from "/Character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

function gameOver() {
  let endMessage =
    wizard.dead && orc.dead
      ? "No victors - all creatures are dead"
      : wizard.dead
      ? "The Orc is Victorious"
      : "Wizard Wins";

  console.log(endMessage);
}

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  render();
  if (orc.dead || wizard.dead) gameOver();
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();

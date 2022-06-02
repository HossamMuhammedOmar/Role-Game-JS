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

  const endEmoji = wizard.dead && orc.dead ? "☠️" : wizard.dead ? "👹" : "🔮";

  renderGameOver(endMessage, endEmoji);
}

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  render();
  if (orc.dead || wizard.dead) gameOver();
}

function renderGameOver(endMessage, endEmoji) {
  document.body.innerHTML = `<div class="end-game">
  <h2>Game Over</h2>
  <h3>${endMessage}</h3>
  <p class="end-emoji">${endEmoji}</p>
</div>`;
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();

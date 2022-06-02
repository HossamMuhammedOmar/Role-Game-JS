import characterData from "/data.js";
import Character from "/Character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

function gameOver() {
  let endMessage =
    wizard.dead && monster.dead
      ? "No victors - all creatures are dead"
      : wizard.dead
      ? "The Orc is Victorious"
      : "Wizard Wins";

  const endEmoji =
    wizard.dead && monster.dead ? "☠️" : wizard.dead ? "👹" : "🔮";

  renderGameOver(endMessage, endEmoji);
}

function attack() {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  monster.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(monster.currentDiceScore);
  render();

  if (wizard.dead) {
    gameOver();
  } else if (monster.dead) {
    if (monstersArray.length > 0) {
      monster = getNewMonster();
      render();
    } else {
      gameOver();
    }
  }
}

function renderGameOver(endMessage, endEmoji) {
  document.body.innerHTML = `<div class="end-game">
  <h2>Game Over</h2>
  <h3>${endMessage}</h3>
  <p class="end-emoji">${endEmoji}</p>
</div>`;
}

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
let monstersArray = ["orc", "demon", "goblin"];
let monster = getNewMonster();
render();

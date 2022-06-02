import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "/utils.js";

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(data.diceCount);
  this.maxHealth = this.health;

  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;
    const healthBar = this.getHealthBarHtml();
    return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
                ${healthBar}
            </div>`;
  };

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, currentElement) => {
        return total + currentElement;
      }
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth);
    if (percent <= 25) {
      return `<div class="health-bar-outer">
      <div class="health-bar-inner danger" 
          style="width: ${percent}%;">
      </div>
      </div>`;
    }
    return `<div class="health-bar-outer">
    <div class="health-bar-inner ${percent} " 
        style="width: ${percent}%;">
    </div>
    </div>`;
  };
}

export default Character;

const hero = {
  id: "hero",
  name: "Wizard",
  avatar: "wizard.png",
  health: "60",
  score: 6,
};

const monster = {
  id: "monster",
  name: "Orc",
  avatar: "orc.png",
  health: "10",
  score: 4,
};

renderCharacter(hero);
renderCharacter(monster);

function renderCharacter(data) {
  const { id, name, avatar, health, score } = data;
  document.getElementById(`${id}`).innerHTML = `
    <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src="images/${avatar}" />
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container"><div class="dice">${score}</div></div>
    </div>
`;
}

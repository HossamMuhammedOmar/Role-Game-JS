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
  return (document.getElementById(`${data.id}`).innerHTML = `
    <div class="character-card">
    <h4 class="name">${data.name}</h4>
    <img class="avatar" src="images/${data.avatar}" />
    <p class="health">health: <b> ${data.health} </b></p>
    <div class="dice-container"><div class="dice">${data.score}</div></div>
    </div>
`);
}

/*
<div class="character-card">
          <h4 class="name">Wizard</h4>
          <img class="avatar" src="images/wizard.png" />
          <p class="health">health: <b> 60 </b></p>
          <div class="dice-container"><div class="dice">6</div></div>
        </div>
*/

const heroContainer = document.getElementById("hero");

const characterCardDiv = document.createElement("div");
characterCardDiv.classList.add("character-card");

const heroName = document.createElement("h4");
heroName.textContent = "Wizard";
heroName.classList.add("name");

const heroImage = document.createElement("img");
heroImage.classList.add("avatar");
heroImage.src = "images/wizard.png";

const heroHealthText = document.createElement("p");
heroHealthText.classList.add("health");
const heroHealthScore = document.createElement("b");
heroHealthScore.textContent = "60";
heroHealthText.appendChild(heroHealthScore);

const heroDiceContainer = document.createElement("div");
heroDiceContainer.classList.add("dice-container");
const heroDice = document.createElement("div");
heroDice.classList.add("dice");
heroDice.textContent = "6";
heroDiceContainer.appendChild(heroDice);

characterCardDiv.appendChild(heroName);
characterCardDiv.appendChild(heroImage);
characterCardDiv.appendChild(heroHealthText);
characterCardDiv.appendChild(heroDiceContainer);

heroContainer.appendChild(characterCardDiv);

const missionCards = [
  {
    world: "MARS / 1997",
    clue: "I reached Ares Vallis on July 4, 1997, cushioned by giant airbags. Which mission brought me to the surface?",
    choices: ["Viking 1", "Mars Pathfinder", "Phoenix", "InSight"],
    answer: "Mars Pathfinder",
    fact: "Pathfinder landed on July 4, 1997, and delivered the Sojourner rover to Mars.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    world: "MARS / FIRST ROVER",
    clue: "I was the first rover to drive on Mars. I weighed about 23 pounds (10.6 kilograms). Who am I?",
    choices: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
    answer: "Sojourner",
    fact: "The 23-pound Sojourner rode to Mars aboard Pathfinder and became the first rover to explore the surface.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    world: "MARS / 1976",
    clue: "I touched down on July 20, 1976, and sent back the first photograph taken from Mars' surface by an American mission. Which lander am I?",
    choices: ["Viking 1", "Viking 2", "Phoenix", "Surveyor 3"],
    answer: "Viking 1",
    fact: "Viking 1 landed on July 20, 1976, and began returning images from the Martian surface.",
    source: "https://science.nasa.gov/mission/viking-1/"
  },
  {
    world: "MARS / ARCTIC PLAINS",
    clue: "My robotic arm scratched into the soil near Mars' north pole and uncovered water ice. Which lander am I?",
    choices: ["Phoenix", "Viking 2", "InSight", "Mars Pathfinder"],
    answer: "Phoenix",
    fact: "Phoenix landed in the Martian arctic in May 2008. Its robotic arm exposed water ice beneath the surface.",
    source: "https://science.nasa.gov/mission/phoenix/"
  },
  {
    world: "MARS / LONG DISTANCE",
    clue: "I was designed for 90 Martian days, travelled 45.16 kilometers, and fell silent during a planet-wide dust storm. Which rover am I?",
    choices: ["Spirit", "Opportunity", "Sojourner", "Perseverance"],
    answer: "Opportunity",
    fact: "Opportunity worked for almost 15 years. A severe dust storm blocked sunlight from its solar panels in June 2018; NASA declared the mission complete in 2019.",
    source: "https://science.nasa.gov/mission/mer-opportunity/"
  },
  {
    world: "MARS / ELYSIUM PLANITIA",
    clue: "I set a seismometer on Mars to study the planet's deep interior. Which stationary explorer am I?",
    choices: ["InSight", "Phoenix", "Viking 1", "Curiosity"],
    answer: "InSight",
    fact: "InSight landed at Elysium Planitia in 2018. Its instruments studied Mars' interior, including ground vibrations called marsquakes.",
    source: "https://science.nasa.gov/mission/insight/"
  },
  {
    world: "MARS / MOUNT SHARP",
    clue: "In August 2026, I reached a one-kilometer elevation gain while climbing Mount Sharp. Which rover am I?",
    choices: ["Curiosity", "Perseverance", "Opportunity", "Spirit"],
    answer: "Curiosity",
    fact: "NASA reported that Curiosity reached a one-kilometer elevation gain on August 26, 2026, as it climbed from Gale Crater up Mount Sharp.",
    source: "https://science.nasa.gov/mission/msl-curiosity/"
  },
  {
    world: "MARS / JEZERO CRATER",
    clue: "I collect rock and soil samples at Jezero Crater. One sample contains potential biosignatures, which need more study before scientists can draw conclusions. Who am I?",
    choices: ["Perseverance", "Curiosity", "Sojourner", "Phoenix"],
    answer: "Perseverance",
    fact: "Perseverance is collecting core samples in Jezero Crater. NASA describes the Cheyava Falls findings as potential biosignatures, not proof of life.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  },
  {
    world: "MARS / FIRST FLIGHT",
    clue: "I made the first powered, controlled flight on another planet, then completed 72 flights over Mars. What was I?",
    choices: ["Ingenuity", "Sojourner", "Pathfinder", "InSight"],
    answer: "Ingenuity",
    fact: "Ingenuity's planned five test flights became 72. NASA says it made the first powered, controlled flight on another planet.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/"
  },
  {
    world: "MOON / OCEAN OF STORMS",
    clue: "I landed on the Moon in 1967. Two and a half years later, Apollo 12 astronauts landed about 180 meters away and brought some of my parts home. Who am I?",
    choices: ["Surveyor 3", "Surveyor 1", "Apollo 12", "LRO"],
    answer: "Surveyor 3",
    fact: "Surveyor 3 landed on April 20, 1967. Apollo 12 astronauts Charles Conrad and Alan Bean later visited it and recovered parts for study.",
    source: "https://science.nasa.gov/mission/surveyor-3/"
  }
];

const guessGrid = document.querySelector("#guess-grid");
const guessProgress = document.querySelector("#guess-progress");
const guessMeter = document.querySelector("#guess-meter");
const guessReset = document.querySelector("#guess-reset");

function renderMissionCards() {
  guessGrid.innerHTML = missionCards.map((card, cardIndex) => `
    <article class="guess-card" data-card-index="${cardIndex}" style="--card-order:${cardIndex}">
      <div class="guess-card-top"><span>CASE ${String(cardIndex + 1).padStart(2, "0")}</span><span>${card.world}</span></div>
      <p class="guess-clue">${card.clue}</p>
      <div class="guess-options" role="group" aria-label="Possible mission answers">${card.choices.map((choice) => `<button class="guess-option" type="button" data-answer="${choice}">${choice}</button>`).join("")}</div>
      <p class="guess-feedback" aria-live="polite">Awaiting your identification.</p>
      <a class="guess-source" href="${card.source}" target="_blank" rel="noreferrer">NASA mission record <span>↗</span></a>
    </article>
  `).join("");
  updateGuessProgress();
}

function updateGuessProgress() {
  const solvedCount = guessGrid.querySelectorAll('.guess-card[data-solved="true"]').length;
  guessProgress.textContent = `${solvedCount} / ${missionCards.length} solved`;
  guessMeter.style.width = `${(solvedCount / missionCards.length) * 100}%`;
}

guessGrid.addEventListener("click", (event) => {
  const selectedButton = event.target.closest(".guess-option");
  if (!selectedButton) return;
  const cardElement = selectedButton.closest(".guess-card");
  if (cardElement.dataset.solved === "true") return;

  const card = missionCards[Number(cardElement.dataset.cardIndex)];
  const isCorrect = selectedButton.dataset.answer === card.answer;
  cardElement.dataset.solved = "true";
  cardElement.classList.add(isCorrect ? "is-correct" : "is-missed");
  cardElement.querySelectorAll(".guess-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === card.answer) option.classList.add("is-answer");
    if (option === selectedButton && !isCorrect) option.classList.add("is-incorrect");
  });
  const feedback = cardElement.querySelector(".guess-feedback");
  feedback.textContent = isCorrect ? `Signal identified: ${card.answer}. ${card.fact}` : `The signal was ${card.answer}. ${card.fact}`;
  updateGuessProgress();
});

guessReset.addEventListener("click", renderMissionCards);
renderMissionCards();
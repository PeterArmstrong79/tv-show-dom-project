//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(createCard);
}

function createCard(episode){
  let card = document.createElement("span");

  let cardTitle = document.createElement("h2");
  cardTitle.innerText = episode.name;
  card.appendChild(cardTitle);

  let cardImage = document.createElement("img");
  cardImage.src = episode.image.medium;
  cardImage.alt = episode.name;
  cardImage.title = episode.name;
  card.appendChild(cardImage);

  let cardSummary = document.createElement("span");
  cardSummary.innerHTML = episode.summary;
  card.appendChild(cardSummary);

  rootElem.appendChild(card);

}

window.onload = setup;

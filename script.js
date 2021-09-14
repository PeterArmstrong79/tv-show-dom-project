//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  searchEpisodesBox.addEventListener("keyup", searchEpisodes);
}

function searchEpisodes(){
  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  
  const allEpisodes = getAllEpisodes();
  let filteredEpisodes = allEpisodes.filter(filterEpisodes);
  makePageForEpisodes(filteredEpisodes);
}

function filterEpisodes (episode){
  let searchEpisodesBox = document.querySelector("#searchEpisodes");

  if(episode.name.toLowerCase().includes(searchEpisodesBox.value.toLowerCase())){
    return true;
  }else{
    return false;
  }

}

function makePageForEpisodes(episodeList) {
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(createCard);
}

function createCard(episode){
  let card = document.createElement("div");
  card.className = "episodeCard"

  let cardTitle = document.createElement("h2");
  cardTitle.innerText = episode.name;
  cardTitle.className = "titleAlign"
  card.appendChild(cardTitle);

  let episodeNumber =  document.createElement("h4");
  episodeNumber.innerText = `S${episode.season.toString().padStart(2, "0")} E${episode.number.toString().padStart(2, "0")}`;
  episodeNumber.className = "episodeNumber"
  card.appendChild(episodeNumber);

  let cardImage = document.createElement("img");
  cardImage.src = episode.image.medium;
  cardImage.alt = episode.name;
  cardImage.title = episode.name;
  cardImage.className = "cardPic"
  card.appendChild(cardImage);

  let cardSummary = document.createElement("p");
  cardSummary.innerHTML = episode.summary;
  cardSummary.className = "cardSumm"
  card.appendChild(cardSummary);

  rootElem.appendChild(card);

}

window.onload = setup;

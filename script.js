//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(episode => {
    console.log(episode.name, episode.season, episode.number, episode.image.medium, episode.summary);
    
  let episodeCard = document.createElement("span")
  episodeCard.innerText = episode.name;
  rootElem.appendChild(episodeCard)

  let episodeImage = src.
  episodeImage = episode.image.medium
  rootElem.appendChild(episodeImage)

  })




}

window.onload = setup;

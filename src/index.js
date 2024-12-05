function displaySong(repsonse) {
  console.log("Song generated");
  new Typewriter("#song", {
    strings: repsonse.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e70bdao89402f423202bat5b1ea3dcfc";
  let prompt = `User instructions: Generate song lyrics about ${instructionsInput.value}`;
  let context =
    "You are a songwriter with a very similar style to Taylor Swift's lyric writing abilities. Your mission is to generate a song with two verses, chorus and bridge. Make sure each line is separated by <br /> and each verse, chorus, bridge should be inside a <strong> element. The title and each verse, chorus and bridge should be inside its own paragraph (<p>). Give the song a title as well, but don't include the word 'title:'. Make sure to keep the result similar to Taylor's writing style and lyricism but avoid plagiarism please. Ensure you follow user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let songElement = document.querySelector("#song");
  songElement.innerHTML = `<div class="blink_me"> ⏳ Generating your very own Taylor Swift song about "${instructionsInput.value}"</div>`;

  console.log("Generating song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displaySong);
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);

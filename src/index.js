function displayDailyChallenge(response) {
  new Typewriter("#daily-challenge", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateDailyChallenge(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#instructions");
  let apiKey = "6a9deo698c10843af1d451t2df75b880";
  let prompt = `Generate an original and motivational daily challenge about ${instructionsElement.value}. `;
  let context = `
You are a motivational and creative daily challenge expert and love to inspire people with short daily challenges. Generate a daily challenge in maximum 8 lines and must be generated in basic html format (but don't explicitly show HTML). The daily challenge must be based on ${instructionsElement.value}.
Follow EXACTLY the following output format (but don't copy its content)
Include a couple of emojis but don't overdo it. Sign off the daily challenge with "SheCodes AI" which needs to look italic and bold and display it on a new line.


Your creative title about ${instructionsElement.value} 
your creative challenge instructions
Completion: ✅ [your completion sentence to determine the success criterion]
SheCodes AI  
`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let dailyChallengeElement = document.querySelector("#daily-challenge");
  dailyChallengeElement.classList.remove("hidden");
  dailyChallengeElement.innerHTML = `<span class="blink">🎲 Rolling today’s challenge for you about <strong> ${instructionsElement.value}</strong>… <span>`;

  axios.get(apiUrl).then(displayDailyChallenge);
}

let dailyChallengeForm = document.querySelector(
  "#daily-challenge-generator-form"
);

dailyChallengeForm.addEventListener("submit", generateDailyChallenge);

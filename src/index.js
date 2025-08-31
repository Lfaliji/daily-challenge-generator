function generateDailyChallenge(event) {
  event.preventDefault();

  new Typewriter("#daily-challenge", {
    strings: `🌼 Example with keyword flower
          <br />
          Title: Bloom Where You Are 🌸
          <br />
          🌸 Effort & Time: Easy · 15 min
          <br />
          Challenge:
          <br />
          Find a flower today — in nature, in art, or even in memory. Pause and
          sketch or photograph it. Then write one line about what it teaches you
          about resilience.
          <br />
          Completion:
          <br />
          ✅ You captured beauty and turned it into a personal lesson.

`,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let dailyChallengeForm = document.querySelector(
  "#daily-challenge-generator-form"
);

dailyChallengeForm.addEventListener("submit", generateDailyChallenge);

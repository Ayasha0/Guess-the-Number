"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

// let guess = document.querySelector(".guess").textContent;

document.querySelector(".check").addEventListener("click", () => {
	let guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		displayMessage("⚠️ no Number");
	} else if (guess === secretNumber) {
		displayMessage("🎉 correct Number");

		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = " #00cc66";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "📈 too high" : "📉 too low");

			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("👎 you lost the game");
			document.querySelector(".score").textContent = 0;

			document.querySelector("body").style.backgroundColor = "#ff0055";
			document.querySelector(".check").style.cursor = "no-drop";
		}
	}
});

document.querySelector(".again").addEventListener("click", () => {
	score = 20;
	document.querySelector(".score").textContent = score;
	displayMessage("start guessing...");

	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
});

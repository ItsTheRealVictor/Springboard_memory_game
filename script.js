const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

class Card {
  constructor() {
    this.color = null;
  }
  getColor() {
    return this.color;
  }
}

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

class ScoreBoard {
  constructor() {
    this.score = 0;
  }
}

let noClicking = false;
const compList = [];
count = 0;
function handleCardClick(event) {
  console.log(count);
  if (count === 0) {
    let currentCard = new Card();
    currentCard.color = event.target.classList[0];
    currentCard.target = event.target;
    currentCard.target.style.backgroundColor = currentCard.color;
    compList.push(currentCard.color);
    count++;
  } else if (count === 1) {
    let secondCard = new Card();
    secondCard.color = event.target.classList[0];
    secondCard.target = event.target;
    secondCard.target.style.backgroundColor = secondCard.color;
    compList.push(secondCard.color);
    count++;
    if (compList[0] === compList[1]) {
      console.log("same");
      compList.splice(0, compList.length);
      count = 0;
    } else {
      console.log("different");
      compList.splice(0, compList.length);
      count = 0;
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

//8.22 notes
  // game logic now compares 2 array items. If they are the same, 'same' is logged and the array is cleared. likewise if they are different.
  // NEED TO FINISH: reset the cards' backgrounds to white if they are not the same

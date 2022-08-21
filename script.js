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
    this.flipped = false;
    this.firstChoice = false;
    this.secondChoice = false;

  }
  getColor() {
    return this.color;
  }
  flipCard() {
    this.flipped = true;
  }
  chooseFirst() {
    this.firstChoice = true;
  }
  chooseSecond() {
    this.secondChoice = true;
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
let count = 0
const compList = []
function handleCardClick(event) {
  let currentCard = new Card();
    currentCard.color = event.target.classList[0];
    currentCard.flipped = true
    currentCard.firstChoice = true
    count += 1
    compList.push(currentCard.color)
    console.log(compList)
    // console.log(count)
    if (compList.length === 2){
      if(compList[0] === compList[1])
      {
        // this block of code runs when the user picks two of the same color. 
        // sets background color to the color class
        console.log('SAME')
        // How do I set the Card() object's background color? That's how the card is 'flipped'
      }
      else
      {
        console.log('NOT SAME')
      }
      //empties the array
      compList.splice(0, compList.length)
  }

}
// when the DOM loads
createDivsForColors(shuffledColors);

//COMMIT NOTES 8.20
// Decent progress, I can now put two cards in an array and compare their values. If they match or not, the array is cleared each time
// its length reaches 2. I need to figure out how to flip the cards and select the card's newDiv with my Card() object. 
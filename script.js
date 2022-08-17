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

let firstCard = "";
let secondCard = "";
let flippedCards = 0;
let noClicking = false; // what is the point of this variable?

function handleCardClick(event) {
  if (noClicking) return
  if (event.target.classList.contains('flipped')) return
  
  let myCard = event.target;
  myCard.style.backgroundColor = myCard.className;

  if (!firstCard || !secondCard) {
    console.log("fart");
    firstCard = firstCard || myCard;
    secondCard = myCard === firstCard ? "" : myCard;
  }

  if (firstCard && secondCard) {
    noClicking = true; // why?
    let gif1 = firstCard.className;
    let gif2 = secondCard.className;

    if (gif1 === gif2) {
      flippedCards += 2;
      //why are the event listeners removed?
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      firstCard = "";
      secondCard = "";
      noClicking = false;
    } else {
      // if you pick 2 cards of different colors, the first card gets flipped back to white and nothing happens.
      setTimeout(function(){

        firstCard.style.backgroundColor = ''
        secondCard.style.backgroundColor = ''
        firstCard = ''
        secondCard = ''
        noClicking = false // why?
      }, 1000)
    }
  }

 
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */

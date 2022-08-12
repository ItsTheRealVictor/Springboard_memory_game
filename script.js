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
  "purple"
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





let firstCard = ''
let secondCard = ''
// TODO: Implement this function!
function handleCardClick(event) {
  // event.preventDefault()
  // you can use event.target to see which element was clicked
  let myCard = event.target
  myCard.style.backgroundColor = myCard.className
  
  if (!firstCard || !secondCard){
    console.log('fart')
    firstCard = firstCard || myCard
    secondCard = myCard === firstCard ? '' : myCard
  }
  console.log(firstCard.className)
  console.log(secondCard.className)

  // 8.12 commit notes
    // NEED TO FINISH
      //Its probably worth making a flow chart or something to understand this logic
  
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */
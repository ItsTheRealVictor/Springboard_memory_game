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
let theScore = 0
const score = document.querySelector('.userscore')
score.innerText = theScore


const compList = [];
let count = 0;
function handleCardClick(event) {
  
  console.log(count);
  if (count === 0) 
  {
    let currentCard = new Card();
    currentCard.color = event.target.classList[0];
    currentCard.target = event.target;
    currentCard.target.style.backgroundColor = currentCard.color;
    compList.push(currentCard);
    count++;
  } 
  else if (count === 1) 
  {
    let secondCard = new Card();
    secondCard.color = event.target.classList[0];
    secondCard.target = event.target;
    secondCard.target.style.backgroundColor = secondCard.color;
    compList.push(secondCard);
    count++;
    
    if (compList[0].color === compList[1].color) 
    {
      compList.splice(0, compList.length);
      count = 0;
      theScore += 1
      score.innerText = theScore
      return
      } 
      else 
      {
        // if cards are different, it resets their colors after one second
        setTimeout(function()
        {
          for(thing of compList)
          {
            thing.target.style.backgroundColor = ''
          }
          compList.splice(0, compList.length);
        }, 1000)
        console.log("different");
        count = 0;
      }
    }
  }

function timer() {
  // code is adapted from a codepen I found at https://codepen.io/cathydutton/pen/xxpOOw

  let seconds = 00
  let tens = 00

  let appendSeconds = document.querySelector('.seconds')
  let appendTens = document.querySelector('.tens')

  let startButton = document.querySelector('.button-start')
  let stopButton = document.querySelector('.button-stop')
  let resetButton = document.querySelector('.button-reset')

  let intvl;
  startButton.addEventListener('click', function()
  {
    clearInterval(intvl)
    intvl = setInterval(startTimer, 10)
  })

  stopButton.addEventListener('click', function()
  {
    clearInterval(intvl)
  })

  resetButton.addEventListener('click', function()
  {
    clearInterval(intvl)
    tens = '00'
    seconds = '00'
    appendTens.innerHTML = tens
    appendSeconds.innerHTML = seconds  
  })

  function startTimer(){

    tens++
    if (tens <= 9)
    {
      appendTens.innerHTML = '0' + tens
    }
    if (tens > 9)
    {
      appendTens.innerHTML = tens
    }
    if (tens > 99) 
    {
      seconds++
      appendSeconds.innerHTML = '0' + seconds
      tens = 0
      appendTens.innerHTML = '0' + 0
    }
  }
  if (seconds > 9)
  {
    appendSeconds.innerHTML = seconds
  }
}
timer()
  

// when the DOM loads
createDivsForColors(shuffledColors);

//8.24 notes
  // attempting to add a countdown timer. Scores will be based on how quickly the user can match all color pairs. 
  // code is copied from the OOP branch for this first commit to the countDownTimer branch

// timer notes
  // added codepen excerpt
  // NEED TO DO. Figure out how to start timer when the very first click happens. Figure out how to stop timer when
  // score reaches the maximum
  // FUTURE: save user's name and time score to a leaderboard displayed on page and saved in localStorage
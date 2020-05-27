
//html element declarations
const playButton = document.getElementById("play-button");
const rollButton = document.getElementById("rollButton");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const winStatus = document.getElementById("winStatus");
const gameOver = document.getElementById("gameOver");
const totalRoll = document.getElementById("totalRoll");
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const dice3 = document.getElementById("dice3")
const dice4 = document.getElementById("dice4")
const dice5 = document.getElementById("dice5")
const dice6 = document.getElementById("dice6")

// player 2 varibles

const rollButton2 = document.getElementById("rollButton2");
const playerScore2 = document.getElementById("playerScore2");
const diceImage2 = document.getElementById("diceImage2");
const totalScore2 = document.getElementById("totalScore2");
const winStatus2 = document.getElementById("winStatus2");
const gameOver2 = document.getElementById("gameOver2");


//function declarations
gameOver.style.visibility = "hidden";
diceImage.style.visibility = "hidden";
rollButton.style.visibility = "visible";
dice1.style.visibility = "visible"

// let startGame;
let rollCeil;
let pointsScored = 0;
let no1 = 0;
let no2 = 0;
let no3 = 0;
let no4 = 0;
let no5 = 0;
let no6 = 0;


const startGame = () => {
    numberRolled = 0;
    pointsScored = 0;
    playerScore = 0;
    playerScore2 = 0;
    diceImage.style.visibility = "hidden";
    winStatus.textContent = "";
    totalScore.textContent = "";
    playerScore.textContent = "";
    gameOver.style.visibility = "hidden";
    rollButton.style.visibility = "visible";
    totalRoll.style.visibility = "hidden";
    dice1.style.visibility = "hidden"
    dice2.style.visibility = "hidden"
    dice3.style.visibility = "hidden"
    dice4.style.visibility = "hidden"
    dice5.style.visibility = "hidden"
    dice1.style.visibility = "hidden"
}

const diceRoll = () => {
    rollCeil = Math.ceil(Math.random() * 6);
    console.log("rand: " +rollCeil)
    
}


const winOrLose = () => {
    addScore1()
    if (rollCeil == 1) {
        winStatus.textContent = ("Unluckyyyyyy, GAME OVER MAN!")
        gameOver.style.visibility = "visible";
        gameOver.src = "img/gameOver.gif";
        rollButton.style.visibility = "hidden";
        

    }
    else if (pointsScored >= 20) {
        winStatus.textContent = ("You Win!!")
        gameOver.style.visibility = "visible";
        gameOver.src = "img/win.gif";
        rollButton.style.visibility = "hidden";
    }
    else {
        winStatus.textContent = ("I'm Jason, Carry on...")
        gameOver.src = "img/jason.jpeg"
        gameOver.style.visibility= "visible"
    }
}

var numberRolled = 0
const addScore1 = () => {
    // diceRoll()
    pointsScored += rollCeil
    console.log(`Total Score: ${pointsScored}`)
}
rollButton.addEventListener("click", () => {
    diceRoll()
    winOrLose()
    totalScore.textContent = (`Total Score: ${pointsScored}`)
    playerScore.textContent = rollCeil
    // score += rollCeil
    totalRoll.style.visibility = "visible"
    diceImage.style.visibility = "visible"
    diceImage.src = `img/dice${rollCeil}.png`
    incrementFunction()

    totalRoll.textContent = ++numberRolled
    
})

playButton.addEventListener("click", () => {
    startGame();

})
const incrementFunction = () => {
    if (rollCeil == 1){
    no1++ 
    dice1.textContent = no1
    }    
    else if (rollCeil == 2){
        no2++ 
        dice2.textContent = no2
        }
    else if (rollCeil == 3){
        no3++ 
        dice3.textContent = no3
        }
    else if (rollCeil == 4){
        no4++ 
        dice4.textContent = no4
        }
    else if (rollCeil == 5){
        no5++ 
        dice5.textContent = no5
        }
    else if (rollCeil == 6){
    no6++ 
    dice6.textContent = no6
    }

}

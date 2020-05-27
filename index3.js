
// //html element declarations
// const playButton = document.getElementById("play-button");
// const rollButton = document.getElementById("rollButton");
// const playerScore = document.getElementById("playerScore");
// const diceImage = document.getElementById("diceImage");
// const totalScore = document.getElementById("totalScore");
// const winStatus = document.getElementById("winStatus");
// const gameOver = document.getElementById("gameOver");
// const totalRoll = document.getElementById("totalRoll");


// // player 2 varibles


// const playerScore2 = document.getElementById("playerScore2");
// const diceImage2 = document.getElementById("diceImage2");
// const totalScore2 = document.getElementById("totalScore2");
// const winStatus2 = document.getElementById("winStatus2");
// const gameOver2 = document.getElementById("gameOver2");



// //function declarations
// gameOver.style.visibility = "hidden";
// gameOver2.style.visibility = "hidden";
// diceImage.style.visibility = "hidden";
// rollButton.style.visibility = "visible";


// // let startGame;
// let rollCeil;
// let pointsScored = 0;
// let pointsScored2 = 0;



// const startGame = () => {
//     numberRolled = 0;
//     pointsScored = 0;
//     pointsScored2 = 0;
//     diceImage.style.visibility = "hidden";
//     diceImage2.style.visibility = "hidden";
//     winStatus.textContent = "";
//     totalScore.textContent = "";
//     playerScore.textContent = "";
//     gameOver.style.visibility = "hidden";
//     rollButton.style.visibility = "visible";
//     totalRoll.style.visibility = "hidden";
    
// }

// const diceRoll = () => {
//     rollCeil = Math.ceil(Math.random() * 6);
//     console.log("rand: " +rollCeil)
    
// }


// const winOrLose = () => {
//     addScore1()
//     if (rollCeil == 1) {
//         winStatus.textContent = ("Unluckyyyyyy, GAME OVER MAN!")
//         gameOver.style.visibility = "visible";
//         gameOver.src = "img/gameOver.gif";
//         rollButton.style.visibility = "hidden";
        

//     }
//     else if (pointsScored >= 20) {
//         winStatus.textContent = ("You Win!!")
//         gameOver.style.visibility = "visible";
//         gameOver.src = "img/win.gif";
//         rollButton.style.visibility = "hidden";
//     }
//     else {
//         winStatus.textContent = ("I'm Jason, Carry on...")
//         gameOver.src = "img/jason.jpeg"
//         gameOver.style.visibility= "visible"
//     }
// }

// var numberRolled = 0
// const addScore1 = () => {
//     // diceRoll()
//     pointsScored2 += rollCeil
//     console.log(`Total Score: ${pointsScored}`)
// }
// rollButton.addEventListener("click", () => {
//     diceRoll()
//     winOrLose()
//     totalScore.textContent = (`Total Score: ${pointsScored}`)
//     playerScore.textContent = rollCeil
//     // score += rollCeil
//     totalRoll.style.visibility = "visible"
//     diceImage.style.visibility = "visible"
//     diceImage.src = `img/dice${rollCeil}.png`
   

//     totalRoll.textContent = ++numberRolled
    
// })

// playButton.addEventListener("click", () => {
//     startGame();

// })
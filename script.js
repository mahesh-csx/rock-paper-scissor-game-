let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompGame = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawGame = () => {
    console.log("the game is draw");
    msg.innerText = "the game is draw. play again";
    msg.style.backgroundColor = "rgb(0, 125, 144)"
};

const showWinner = (userWin,userchoice,compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you won your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"
    };
};

const playGame = (UserChoice) =>{
    //user choice
    console.log("userchoice is : ",UserChoice);

    //generate computer choice
    const compChoice = genCompGame()
    console.log("computer choice is : ",compChoice);

    if(UserChoice === compChoice){
        //draw game
        drawGame();
    }else{
        userWin = true;
        if(UserChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false:true;
        }else if(UserChoice === "paper"){
            //scissor ,rock 
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        };
        showWinner(userWin,UserChoice,compChoice);
    };
  
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        // console.log("choice is clicked ",UserChoice);
        playGame(UserChoice)
    });
});
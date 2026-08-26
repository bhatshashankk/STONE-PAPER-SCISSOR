let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>
{
    //rock , paper or scissor
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawGame = () =>
{
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw.."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Won!");
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "purple";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lost");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "skyblue";
    }
};

const playGame = (userChoice) =>
{
    console.log("User choice =",userChoice);
    // Generate Computer Choices
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);

    if( userChoice == compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //scissor or paper
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock or scissor
            userWin = compChoice === "scissor"? false : true;
        }
        else
        {
            //papaer or rock
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
};


choices.forEach((choice) =>
{
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked and that is",userChoice);
        playGame(userChoice);
    });
});


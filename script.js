let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")

const GenCompChoice=()=>{
    let options=["rock","paper","scissor"];
   const randInd=Math.floor(Math.random()*3);
   return options[randInd]
    
}

const drawgame=()=>{
    console.log("Game is draw")
}


const PlayGame = (userchoice) => {
    console.log("user-choice:", userchoice)
    //generate computer choice (we are using modular way of coding in which we divide the function in models for reusable purpose)
    const compChoice=GenCompChoice();
    console.log("Computer-choice",compChoice)

    if (userchoice===compChoice){
    //Draw game
    drawgame();

    } else{
        
    }


choices.forEach((choice) => {
    console.log(choice);


    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        PlayGame(userchoice)

    })
})
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");
const button=document.querySelector("#restart");


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const Userchoice=choice.getAttribute("id"); 
    playGame(Userchoice)
   });
});

const playGame=(Userchoice)=>{
    const compChoice=genCompChoice();
    console.log(Userchoice);
    console.log(compChoice);
    if(compChoice===Userchoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(Userchoice==="rock")
        //comp -paper scisor
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(Userchoice==="paper")
        {
            //comp-rock, scissor
            userWin=compChoice==="scissor"?false:true;
        }
         else if(Userchoice==="scissor")
        {
            //comp-rock, paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,Userchoice,compChoice)
    }
}


const genCompChoice=()=>{
    const options=["rock", "paper", "scissor"]
    const ranindx=Math.floor(Math.random()*3);
    return options[ranindx];
}

const drawGame=()=>
{
  msg.innerText="Game was Draw... PLAY AGAIN !!!";
  msg.style.backgroundColor = "aqua";
}

showWinner=(userWin,Userchoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userpara.innerText=userScore;
        msg.innerText=`You win!!! Your ${Userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        comppara.innerText=compScore;
        msg.innerText=`You lost!!!  ${compChoice} beats your ${Userchoice}`;
        msg.style.backgroundColor="red";
    }
}


  button.addEventListener("click",() =>{
    userScore=0;
    userpara.innerText=userScore;
    compScore=0;
    comppara.innerText=compScore
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="palevioletred";
  })


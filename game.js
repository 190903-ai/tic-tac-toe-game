let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turnO = true;
let count=0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}


const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");



}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;
    
}

const gameDraw = ()=>{
    console.log("game is drawn");
    msg.innerText = "Game is drawn, Try again!";
    count=0;
    msgContainer.classList.remove("hide");
       disableBoxes();
      
    
}


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                
                console.log("Winner", pos1Val);
                disableBoxes();
                showWinner(pos1Val);
            }
            }  
        }
        
        
    }



boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color="#33658A";
            
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.style.color="#F06B70";
            turnO=true;
        }
        box.disabled=true; 
        count++;
      
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
        
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



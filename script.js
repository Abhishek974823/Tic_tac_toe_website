let buttons = document.querySelectorAll(".button");
let stat = document.querySelector(".status");
flag = 1;
click = 0;
function winner(buttons,status){
    let draw = 0;
    for(i of buttons){
        if(i.innerText !== ""){
            draw = draw + 1;
        }
    }
    if(buttons[0].innerText != "" && buttons[0].innerText === buttons[1].innerText && buttons[1].innerText === buttons[2].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if(buttons[3].innerText != "" && buttons[3].innerText === buttons[4].innerText && buttons[4].innerText === buttons[5].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[6].innerText != "" && buttons[6].innerText === buttons[7].innerText && buttons[7].innerText === buttons[8].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[0].innerText != "" && buttons[0].innerText === buttons[3].innerText && buttons[3].innerText === buttons[6].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[1].innerText != "" && buttons[1].innerText === buttons[4].innerText && buttons[4].innerText === buttons[7].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[2].innerText != "" && buttons[2].innerText === buttons[5].innerText && buttons[5].innerText === buttons[8].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[0].innerText != "" && buttons[0].innerText === buttons[4].innerText && buttons[4].innerText === buttons[8].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if( buttons[2].innerText != "" && buttons[2].innerText === buttons[4].innerText && buttons[4].innerText === buttons[6].innerText){
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
        }
        else{
            status.innerText = "X Wins";
        }
        
    }
    else if(draw === 9){
        click = 1;
        status.innerText = "Draw";
    }
}
let reset = () => {
    for(i of buttons){
    i.innerText = "";
    flag = 1;
    click = 0;
}
stat.innerText = "X Turn";
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(click === 0){
        if(button.innerText == ""){
        if(flag === 1){
        button.innerText = "X";
        flag = 2;
        stat.innerText = "O Turn";
        winner(buttons,stat);
    }
    else{
        button.innerText = "O";
        flag = 1;
        stat.innerText = "X Turn";
        winner(buttons,stat);
    }
    }   
    }
  });
});

let resets = document.querySelector(".reset");
resets.addEventListener("click",reset);

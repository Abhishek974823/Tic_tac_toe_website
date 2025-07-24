let buttons = document.querySelectorAll(".button");
let stat = document.querySelector(".status");
flag = 1;
click = 0;
function Owin_color(status){
status.style.fontSize = "2.5rem";
status.style.fontFamily = "'Poppins', sans-serif";
status.style.fontWeight = "bold";
status.style.textAlign = "center";
status.style.marginTop = "20px";
status.style.color = "#3DED97"; // Fresh green (different from draw)
status.style.textShadow = "0 0 10px rgba(61, 237, 151, 0.7)";
}
function Xwin_color(status){
    status.innerText = "X Wins!";
status.style.fontSize = "2.5rem";
status.style.fontFamily = "'Poppins', sans-serif";
status.style.fontWeight = "bold";
status.style.textAlign = "center";
status.style.marginTop = "20px";
status.style.color = "#FF4C4C"; // Bright red
status.style.textShadow = "0 0 10px rgba(255, 76, 76, 0.7)";
}
function win_boxes(buttons,i,j,k){
    buttons[i].classList.add("winBox");
    buttons[j].classList.add("winBox");
    buttons[k].classList.add("winBox");
}
function winner(buttons,status){
    let draw = 0;
    for(i of buttons){
        if(i.innerText !== ""){
            draw = draw + 1;
        }
    }
    if(buttons[0].innerText != "" && buttons[0].innerText === buttons[1].innerText && buttons[1].innerText === buttons[2].innerText){
        win_boxes(buttons,0,1,2);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if(buttons[3].innerText != "" && buttons[3].innerText === buttons[4].innerText && buttons[4].innerText === buttons[5].innerText){
        win_boxes(buttons,3,4,5);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[6].innerText != "" && buttons[6].innerText === buttons[7].innerText && buttons[7].innerText === buttons[8].innerText){
        win_boxes(buttons,6,7,8);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[0].innerText != "" && buttons[0].innerText === buttons[3].innerText && buttons[3].innerText === buttons[6].innerText){
        win_boxes(buttons,0,3,6);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[1].innerText != "" && buttons[1].innerText === buttons[4].innerText && buttons[4].innerText === buttons[7].innerText){
        win_boxes(buttons,1,4,7);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[2].innerText != "" && buttons[2].innerText === buttons[5].innerText && buttons[5].innerText === buttons[8].innerText){
        win_boxes(buttons,2,5,8);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[0].innerText != "" && buttons[0].innerText === buttons[4].innerText && buttons[4].innerText === buttons[8].innerText){
        win_boxes(buttons,0,4,8);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if( buttons[2].innerText != "" && buttons[2].innerText === buttons[4].innerText && buttons[4].innerText === buttons[6].innerText){
        win_boxes(buttons,2,4,6);
        click = 1;
        if(flag === 1){
            status.innerText = "O Wins";
            Owin_color(status);
        }
        else{
            status.innerText = "X Wins";
            Xwin_color(status);
        }
        
    }
    else if(draw === 9){
        click = 1;
        status.innerText = "Draw";
        status.innerText = "It's a Draw!";
        status.style.fontSize = "2.5rem";
        status.style.fontFamily = "'Poppins', sans-serif";
        status.style.fontWeight = "bold";
        status.style.textAlign = "center";
        status.style.marginTop = "20px";
        status.style.color = "#FFFFFF"; // Pure white
        // status.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
    }
}
let reset = () => {
    for(i of buttons){
    i.innerText = "";
    flag = 1;
    click = 0;
    i.classList.remove("winBox");
}
stat.innerText = "Two Players Game"; // or any message you want
stat.style.animation = "blinkGlow 1.2s infinite";
stat.style.color = "#FFD700"; // Golden yellow
stat.style.fontFamily = "'Poppins', sans-serif";
stat.style.textAlign = "center";
stat.style.fontWeight = "bold";
stat.style.fontSize = "2rem";
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(click === 0){
        if(button.innerText == ""){
        if(flag === 1){
        button.innerText = "X";
        flag = 2;
        stat.innerText = "O Turn";
        stat.style.fontSize = "2.5rem";
        stat.style.fontFamily = "'Poppins', sans-serif";
        stat.style.fontWeight = "bold";
        stat.style.textAlign = "center";
        stat.style.marginTop = "20px";
        stat.style.color = "#00FFFF"; // Cyan for turns
        stat.style.textShadow = "0 0 10px rgba(0, 255, 255, 0.7)";
        winner(buttons,stat);
    }
    else{
        button.innerText = "O";
        flag = 1;
        stat.innerText = "X Turn";
        stat.style.fontSize = "2.5rem";
        stat.style.fontFamily = "'Poppins', sans-serif";
        stat.style.fontWeight = "bold";
        stat.style.textAlign = "center";
        stat.style.marginTop = "20px";
        stat.style.color = "#00FFFF"; // Cyan for turns
        stat.style.textShadow = "0 0 10px rgba(0, 255, 255, 0.7)";
        winner(buttons,stat);
    }
    }   
    }
  });
});

let resets = document.querySelector(".reset");
resets.addEventListener("click",reset);

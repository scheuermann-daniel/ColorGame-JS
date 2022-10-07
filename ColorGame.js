var guessThis = "";
var guessThisText = document.getElementById("guessThis");
var header = document.getElementById("headerAndColor");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var reset = document.getElementById("reset");
var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var tryAgain = document.getElementById("tryAgain");
var passOrWelcome = document.getElementById("welcome1");

var easy = [b1, b2, b3];
var hard = [b1, b2, b3, b4, b5, b6];

var difficulty = hard;
var boxAnswer = undefined;
var solved = 0;

function randomColor() {
    return "rgb" + "(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")"
}

function boxPress(box) {
    if(box === boxAnswer) {
        header.style.background = guessThis;
        for(var x = 0; x < difficulty.length; x++) {
            difficulty[x].style.visibility = "visible";
            difficulty[x].style.background = guessThis;
        }
        solved = 1;
        easyButton.style.visibility = "hidden";
        hardButton.style.visibility = "hidden";
        reset.style.color = guessThis;
        reset.textContent = "New Colors"
        tryAgain.style.visibility = "hidden";
        passOrWelcome.textContent = "You passed the"

        reset.addEventListener("mouseover", function(){
            reset.style.background = guessThis;
            reset.style.color = "white";
        })

        reset.addEventListener("mouseout", function(){
            reset.style.background = "white";
            reset.style.color = guessThis;
        })
    }

    else if(box !== boxAnswer && solved === 0) {
        box.style.visibility = "hidden";
        tryAgain.style.visibility = "visible";

    }
}

function changeColor() {
    guessThis = randomColor();
    guessThisText.textContent = guessThis;
    if(difficulty === easy) {
        boxAnswer = difficulty[Math.floor(Math.random()*3)]; 
    }
    else if(difficulty === hard) {
        boxAnswer = difficulty[Math.floor(Math.random()*6)];
    }

    for(var x = 0; x < difficulty.length; x++) {
        if(difficulty[x] !== boxAnswer) {
            difficulty[x].style.background = randomColor();
        }
    
        if(difficulty[x] === boxAnswer) {
            difficulty[x].style.background = guessThis;
        }
    }
}

changeColor();

easyButton.addEventListener("click", function(){
    difficulty = easy;
    changeColor();
    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
    b3.style.visibility = "visible";
    b4.style.visibility = "hidden";
    b5.style.visibility = "hidden";
    b6.style.visibility = "hidden";

    easyButton.style.background = "grey";
    easyButton.style.color = "white";
    hardButton.style.background = "transparent";
    hardButton.style.color = "#2766cc";
})

hardButton.addEventListener("click", function(){
    difficulty = hard;
    changeColor();
    for(var x = 0; x < difficulty.length; x++) {
        difficulty[x].style.visibility = "visible";
    }
    changeColor();

    hardButton.style.background = "grey";
    hardButton.style.color = "white";
    easyButton.style.background = "transparent";
    easyButton.style.color = "#2766cc";
})

b1.addEventListener("click", function(){
    boxPress(b1);
})

b2.addEventListener("click", function(){
    boxPress(b2);
})

b3.addEventListener("click", function(){
    boxPress(b3);
})
b4.addEventListener("click", function(){
    boxPress(b4);
})
b5.addEventListener("click", function(){
    boxPress(b5);
})
b6.addEventListener("click", function(){
    boxPress(b6);
})

reset.addEventListener("click", function(){
    easyButton.style.visibility = "visible";
    hardButton.style.visibility = "visible";
    header.style.background = "#2766cc";
    reset.textContent = "New Colors";
    reset.style.color = "white";
    reset.style.background = "#2766cc";
    passOrWelcome.textContent = "Welcome to the"

    reset.addEventListener("mouseover", function(){
        reset.style.background = "#2766cc";
        reset.style.color = "white";
    })

    reset.addEventListener("mouseout", function(){
        reset.style.background = "white";
        reset.style.color = "#2766cc";
    })

    changeColor();
    solved = 0;
})
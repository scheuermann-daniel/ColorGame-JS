// Constants
// Declare variables and set them to html elements
var guessThis = "";
var guessThisText = document.getElementById("color");
var header = document.getElementById("header");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var reset = document.getElementById("reset");
var tryAgain = document.getElementById("tryAgain");
var gameStatus = document.getElementById("gameStatus");

// Box variables
var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var easy = [b1, b2, b3];
var hard = [b1, b2, b3, b4, b5, b6];

// Non-Constants
var difficulty = hard;
var boxAnswer = undefined;
var solved = 0;

/*
* randomColor
* no inputs
* returns a random rgb color string
*/
function randomColor() {
    return "rgb" + "(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")"
}

/*
* boxPress
* inputs a box variable
* updates game state based on input
*/
function boxPress(box) {
    // if the box is the correct color
    if (box === boxAnswer) {

        // declare game won
        solved = 1;

        // change page color
        header.style.background = guessThis;

        // style page
        for (var x = 0; x < difficulty.length; x++) {
            difficulty[x].style.visibility = "visible";
            difficulty[x].style.background = guessThis;
        }

        easyButton.style.visibility = "hidden";
        hardButton.style.visibility = "hidden";
        tryAgain.style.visibility = "hidden";
        gameStatus.textContent = "You passed the";
        reset.style.color = guessThis;

        // button hover style
        reset.addEventListener("mouseover", function(){
            reset.style.color = "black";
        })

        reset.addEventListener("mouseout", function(){
            reset.style.color = "gray";
        })
    }

    // if wrong box
    else if (box !== boxAnswer && solved === 0) {
        // remove it from view
        box.style.visibility = "hidden";
        tryAgain.style.visibility = "visible";

    }
}

/*
* changeColor
* no inputs
* changes the correct color and color options
*/
function changeColor() {
    // set the correct color to a random rgb value
    guessThis = randomColor();

    // display new color
    guessThisText.textContent = guessThis;

    // choose random box for answer
    if (difficulty === easy) {
        boxAnswer = difficulty[Math.floor(Math.random()*3)]; 
    }
    else if(difficulty === hard) {
        boxAnswer = difficulty[Math.floor(Math.random()*6)];
    }

    // set color of boxes
    for(var x = 0; x < difficulty.length; x++) {
        if(difficulty[x] !== boxAnswer) {
            difficulty[x].style.background = randomColor();
        }
    
        if(difficulty[x] === boxAnswer) {
            difficulty[x].style.background = guessThis;
        }
    }
}

// event listeners

// changes color on button press
reset.addEventListener("click", function(){
    // resets header and page status
    header.style.background = "#2766cc";
    easyButton.style.visibility = "visible";
    hardButton.style.visibility = "visible";
    reset.style.color = "gray";
    gameStatus.textContent = "Welcome to the";

    // change correct color and set game to not won
    changeColor();
    solved = 0;
})

// hover styling
reset.addEventListener("mouseover", function(){
    reset.style.color = "black";
})

reset.addEventListener("mouseout", function(){
    reset.style.color = "gray";
})

// changes difficulty to easy on click
easyButton.addEventListener("click", function(){
    // changes difficulty
    difficulty = easy;
    changeColor();

    // sets boxes to 3
    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
    b3.style.visibility = "visible";
    b4.style.visibility = "hidden";
    b5.style.visibility = "hidden";
    b6.style.visibility = "hidden";

    // styling
    easyButton.style.color = "black";
    hardButton.style.color = "gray";
})

// easy button hover style
easyButton.addEventListener("mouseover", function(){
    easyButton.style.color = "black";
})

easyButton.addEventListener("mouseout", function(){
    if (difficulty === hard) {
        easyButton.style.color = "gray";
    }
})

// changes difficulty to hard on click
hardButton.addEventListener("click", function(){
    // change difficulty
    difficulty = hard;
    changeColor();

    // set all boxes to visible
    for(var x = 0; x < difficulty.length; x++) {
        difficulty[x].style.visibility = "visible";
    }

    // styling
    hardButton.style.color = "black";
    easyButton.style.color = "gray";

})

// hard button hover style
hardButton.addEventListener("mouseover", function(){
    hardButton.style.color = "black";
})

hardButton.addEventListener("mouseout", function(){
    if (difficulty === easy) {
    hardButton.style.color = "gray";
    }
})


// allows boxes to be clicked
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

// program start functions
hardButton.style.color = "black";
changeColor();
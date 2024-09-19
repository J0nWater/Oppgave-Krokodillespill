let points = 0;
let number1 = 0;
let number2 = 0;
let userInput = '';
let endGameText = '';

updateWiev()
function updateWiev(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Krokodillespill<h1><hr>
    <div>Points: ${points}</div>
    <img src="crocodile.png">

    <div class="gameStyle">
        <div>${number1}</div>
        <input onchange="setSign(this.value)">
        <div>${number2}</div>
    </div>
    <button onclick="checkInput()">Submit</button>
    <button onclick="randomNumber()">Reset</button>
    <div class="endText">${endGameText}</div>
    `
}

function randomNumber(){
    number1 = getRandomNumber()
    number2 = getRandomNumber()
    
    updateWiev()
}

function getRandomNumber(){
    return Math.floor(Math.random()*11);
}

function checkInput(){
    if(number1 < number2 && userInput == '<' || number1 > number2 && userInput == '>'
        || number1 == number2 && userInput == '=')
        {
        points++
        randomNumber()
        console.log("riktig")
    }
    else{
        points--
        randomNumber()

        console.log("feil")
    }
    checkPoints()    
    updateWiev()
}

function setSign(sign){
    userInput = sign;
}

function checkPoints(){
    if(points >= 5){
        endGameText = "You Won!!!🥇";
    }
    else if(points <= -5){
        endGameText = "You Lost😭";
    }
}

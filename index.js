let randomNumber1 = Math.random()* 60 / 10;
randomNumber1 = Math.ceil(randomNumber1);

let randomNumber2 = Math.random()* 60 / 10;
randomNumber2 = Math.ceil(randomNumber2);

let img = document.querySelector("img");
img.setAttribute("src", "images/dice" +randomNumber1 + ".png");

img = document.querySelector(".img2");
img.setAttribute("src", "images/dice" +randomNumber2 + ".png");

if (randomNumber1 > randomNumber2)
{
document.querySelector("h1").innerHTML = "🚩Player 1 Wins!" 
}else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
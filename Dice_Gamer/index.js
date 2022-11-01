let randomvariable1 = Math.floor(Math.random()*6 + 1);
console.log(randomvariable1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomvariable1+".png");
let randomvariable2 = Math.floor(Math.random()*6 + 1);
console.log(randomvariable2);
document.querySelector(".img2").setAttribute("src","images/dice"+randomvariable2+".png");

if (randomvariable1 > randomvariable2) {
    document.querySelector("h1").textContent = "🚩Player1 Wins!";
} else if(randomvariable1 < randomvariable2) {
    document.querySelector("h1").textContent = "Player2 Wins!🚩";
}else {
    document.querySelector("h1").textContent = "Match Draw!";
}
var randomNumber1= Math.round(getRandomArbitrary(1,6));
console.log(randomNumber1)

var img1Change = document.querySelector(".img1");
img1Change.src = 'images/' + "dice"+randomNumber1 + '.png'

var randomNumber2= Math.round(getRandomArbitrary(1,6));
console.log(randomNumber2)

var img2Change = document.querySelector(".img2");
img2Change.src = 'images/' + "dice"+randomNumber2 + '.png'


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "🚩 its a draw!"
}








function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
var count = 0;
var intervalNum = null;
var max = 0;
var min = 0;
function getNum() {
  max = document.getElementById("max").getAttribute("value");
  min = document.getElementById("min").getAttribute("value");
}

function randomNum() {
  getNum();
  intervalNum = setInterval(getRandomInt(), 1000);
}

function getRandomInt() {
  min = Math.ceil(min);
  max = Math.floor(max);
  count += 1;
  if (count > 10) {
    clearInterval(intervalNum);
    console.log("종료");
    var button = document.getElementById("btn");
    button.disabled = "disabled";
  }
  var tamp = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("box").innerHTML = tamp;
  console.log(tamp);
}

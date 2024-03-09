var numbers = {
  0: "green",
  1: "red",
  2: "black",
  3: "red",
  4: "black",
  5: "red",
  6: "black",
  7: "red",
  8: "black",
  9: "red",
  10: "black",
  11: "black",
  12: "red",
  13: "black",
  14: "red",
  15: "black",
  16: "red",
  17: "black",
  18: "red",
  19: "red",
  20: "black",
  21: "red",
  22: "black",
  23: "red",
  24: "black",
  25: "red",
  26: "black",
  27: "red",
  28: "black",
  29: "black",
  30: "red",
  31: "black",
  32: "red",
  33: "black",
  34: "red",
  35: "black",
  36: "red",
};

var choosedNumber;
var choosedColor;
var generatedNumber;
var generatedColor;

function generateNumber() {
  generatedNumber = Math.floor(Math.random() * 37);
  generatedColor = numbers[generatedNumber];
  console.log(generatedNumber, generatedColor);
  return generatedNumber;
}

function handleBet(event) {
  choosedNumber = event.target.textContent;
  //   choosedColor = event.target.classList.value;

  console.log("has la opción: " + choosedNumber);
  return choosedColor, choosedNumber;
}

function play() {
  generateNumber();
  //apostar por número:
  if (choosedNumber == generatedNumber) {
    console.log("has acertado el número");
  } else {
    console.log("no has acertado el número");
  }

  //apostar por color:
  if (choosedColor == generatedColor) {
    console.log("has acertado el color!!!!!");
  } else {
    console.log("NO HAS ACERTADO");
  }
}

function betColor(event) {
  choosedColor = event.target.style.color;
  console.log("Color apostado:", choosedColor);
}

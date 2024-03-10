let numbers = {
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

const rows = {
  "first-row": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  "second-row": [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  "third-row": [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
};

let cash = 200;
let generatedNumber;
let chosenOptions = [];

function generateNumber() {
  generatedNumber = Math.floor(Math.random() * 37);
  generatedColor = numbers[generatedNumber];
  console.log(
    "El número que ha salido es: " +
      generatedNumber +
      " de color: " +
      generatedColor
  );
  return generatedNumber;
}

function handleBet(event) {
  const chosenOption = event.target.textContent;
  let elementData = event.target.dataset.rowName;
  cash -= 10;
  refreshCash();
  new Audio("sounds/betting.wav").play();
  console.log(elementData);
  chosenOptions.push(chosenOption);
  chosenOptions.push(elementData);
  console.log("has elegido la opción: " + chosenOption + elementData);
}

function betColor(event) {
  const chosenColor = event.target.style.color;
  cash -= 10;
  refreshCash();
  chosenOptions.push(chosenColor);
  console.log("Color apostado:", chosenColor);
}

function evenOrOdd(event) {
  const chosenOption = event.target.textContent;
  cash -= 10;
  refreshCash();
  chosenOptions.push(chosenOption);
  console.log("has elegido: " + chosenOption);
}

function play() {
  //img spin
  var img = document.querySelector(".roulette-img");
  img.style.transform += "rotate(2080deg)"; // Aplica la rotación de 360 grados

  //play roulette sound
  new Audio("sounds/roulette-sound.wav").play();

  console.log("Tus opciones apostadas fueron:", chosenOptions);

  setTimeout(function () {
    generateNumber();

    if (chosenOptions.includes(generatedNumber.toString())) {
      cash += 35;
      console.log("has acertado el número");
    }

    if (chosenOptions.includes(generatedColor)) {
      cash += 10;
      console.log("has acertado el color");
    }

    if (chosenOptions.includes("EVEN") && generatedNumber % 2 === 0) {
      cash += 20;
      console.log("GANAS. HA SALIDO PAR");
    } else if (chosenOptions.includes("ODD") && generatedNumber % 2 !== 0) {
      cash += 20;
      console.log("GANAS. HA SALIDO IMPAR");
    }

    switch (true) {
      case chosenOptions.includes("1st 12") &&
        generatedNumber >= 1 &&
        generatedNumber <= 12:
        cash += 30;
        console.log("Ha salido un número entre 1 y 12");
        break;
      case chosenOptions.includes("2nd 12") &&
        generatedNumber >= 13 &&
        generatedNumber <= 24:
        cash += 30;
        console.log("Ha salido un número entre 13 y 24");
        break;
      case chosenOptions.includes("3rd 12") &&
        generatedNumber >= 25 &&
        generatedNumber <= 36:
        cash += 30;
        console.log("Ha salido un número entre 25 y 36");
        break;
    }

    for (const rowName in rows) {
      if (
        chosenOptions.includes(rowName) &&
        rows[rowName].includes(generatedNumber)
      ) {
        cash += 30;
        console.log("has acertado un número de la", rowName);
        break;
      }
    }

    if (
      chosenOptions.includes("1 to 18") &&
      generatedNumber >= 1 &&
      generatedNumber <= 18
    ) {
      cash += 20;
      console.log("FELICIDADES HA SALIDO UN NÚMERO DEL 1 AL 18");
    } else if (
      chosenOptions.includes("19 to 36") &&
      generatedNumber >= 19 &&
      generatedNumber <= 36
    ) {
      cash += 20;
      console.log("FELICIDADES HA SALIDO UN NÚMERO DEL 19 AL 36");
    }

    document.getElementById("cash").innerHTML = cash;

    chosenOptions = [];
  }, 4000); // Retraso de 4 segundos (4000 milisegundos)
}
//función para actualizar el Cash después de cada click
function refreshCash() {
  document.getElementById("cash").innerHTML = cash;
}

//cargar cuánto cash en el DOM
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cash").innerHTML = cash;
});

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
  console.log(elementData);
  chosenOptions.push(chosenOption);
  chosenOptions.push(elementData);
  console.log("has elegido la opción: " + chosenOption + elementData);
}

function betColor(event) {
  const chosenColor = event.target.style.color;
  chosenOptions.push(chosenColor);
  console.log("Color apostado:", chosenColor);
}

function evenOrOdd(event) {
  const chosenOption = event.target.textContent;
  chosenOptions.push(chosenOption);
  console.log("has elegido: " + chosenOption);
}

function play() {
  console.log("Tus opciones apostadas fueron:", chosenOptions);

  generateNumber();

  if (chosenOptions.includes(generatedNumber.toString())) {
    console.log("has acertado el número");
  }

  if (chosenOptions.includes(generatedColor)) {
    console.log("has acertado el color");
  }

  if (chosenOptions.includes("EVEN") && generatedNumber % 2 === 0) {
    console.log("GANAS. HA SALIDO PAR");
  } else if (chosenOptions.includes("ODD") && generatedNumber % 2 !== 0) {
    console.log("GANAS. HA SALIDO IMPAR");
  }

  switch (true) {
    case chosenOptions.includes("1st 12") &&
      generatedNumber >= 1 &&
      generatedNumber <= 12:
      console.log("Ha salido un número entre 1 y 12");
      break;
    case chosenOptions.includes("2nd 12") &&
      generatedNumber >= 13 &&
      generatedNumber <= 24:
      console.log("Ha salido un número entre 13 y 24");
      break;
    case chosenOptions.includes("3rd 12") &&
      generatedNumber >= 25 &&
      generatedNumber <= 36:
      console.log("Ha salido un número entre 25 y 36");
      break;
  }

  for (const rowName in rows) {
    if (
      chosenOptions.includes(rowName) &&
      rows[rowName].includes(generatedNumber)
    ) {
      console.log("has acertado un número de la", rowName);
      break;
    }
  }

  if (chosenOptions.includes("1 to 18") && generatedNumber <= 18) {
    console.log("FELICIDADES HA SALIDO UN NÚMERO DEL 1 AL 18");
  }

  chosenOptions = [];
}

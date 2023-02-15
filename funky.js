function tempKonverterare(grader) {
    grader = parseFloat(grader);
    document.getElementById("outputCelsius").innerHTML = (grader-32) / 1.8;
  }

  function CeltoFar(celsius) {
    celsius = parseFloat(celsius);
    document.getElementById("outputFahrenheit").innerHTML=(celsius*1.8)+32;
  }

//   Funktionen tempKonverterare har en parameter "grader" som representerar temperaturen i Fahrenheit.
//  "parseFloat()" är en funktion som används för att konvertera en sträng till en flyttalsdecimal (float).
// När funktionen anropas från "oninput" eller "onchange" händelsehanterarna i input-fältet utför funktionen omräkningen.
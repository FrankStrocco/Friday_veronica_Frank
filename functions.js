function subtract(one, two) {
  return one - two
}

subtract(9, 4);

function multiply (one, two) {
  return one * two
}

multiply(33, 33333);

function divide(one, two) {
    return one / two;
}

function sayHi(){
  var name = prompt("What's your name, YO!?")
  alert("YO YO, " + name + "!");
}

function revLetter(str, index) {
  return str.charAt((str.length-index) -1);
}

function lifeSupply(age, amount) {
  var maxAge = 115;
  console.log(((maxAge - age) * 365) * amount);
}

lifeSupply(28, 3);
lifeSupply(114, 1);
lifeSupply(44, 8);

function celsiusToFahrenheit(cel) {
  console.log("A celsius of " + cel + " = a fahrenheit of " + ((cel * 1.8) + 32));
}

function fahrenheitToCelsius(fahr) {
  console.log("A fahrenheit of " + fahr + " = a celsius of " + (fahr - 32) / 1.8);
}

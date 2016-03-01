function toCelsius() {
  var temp = document.getElementById("temp").value
  console.log("temp", temp);
  degreesOutput = (temp - 32) * (5/9)
  console.log(degreesOutput)
  answer.innerHTML = degreesOutput + "&deg;"
  degreesOutput = temp
  color()
}


function toFahrenheit() {
  var temp = document.getElementById("temp").value
  console.log("temp", temp);
  degreesOutput = temp * (9/5) + 32
  console.log(degreesOutput)
  answer.innerHTML = degreesOutput + "&deg;"
  color()
}

function erase() {
  answer.innerHTML = ""
  document.getElementById("temp").value = ""
  var clickEvent = document.getElementsByName("unit")
  clickEvent[0].checked = false
  clickEvent[1].checked = false
}

function color() {
  var color = document.getElementById("answer");  
  if (degreesOutput > 90) {
    color.style.color="red"
  } else if (degreesOutput < 32) {
    color.style.color = "blue"
  } else {
    color.style.color = "green"
  }
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var otherButton = document.getElementById("eraser")
var answer = document.getElementById("answer")

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickEvent) {
  var temp = document.getElementById("temp").value
  console.log("temp", temp);
  var clickEvent = document.getElementsByName("unit")
  console.log("event", clickEvent);
  if (clickEvent[0].checked === true) {
    toFahrenheit()
  } else if (clickEvent[1].checked === true) {
    toCelsius()
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
otherButton.addEventListener("click", erase, false)
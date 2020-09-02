let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++ ) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!"
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  })
}

function changeColors(color) {
  // Loop through all squares
  for (var i = 0; i < colors.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random]
  // Math.floor(Math.random()*256)
}
// let answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "ya") {
//   answer = prompt("Are we there yet?");
// }

// alert("YAY, We made it!")

let answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  answer = prompt("Are we there yet?");
}

alert("YAY, We made it!")
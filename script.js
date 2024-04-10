// let string = "";
let buttons = document.querySelectorAll(".button");
console.log(".... for loop");

Array.from(buttons).forEach((button) => {
  console.log("inside for loop");

  button.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("aise of for loop");
  });
});

console.log("outaise of for loop");

// Calling the onload function
window.onload = () => {
  main();
};
function main() {
  const changeBtn = document.getElementById("change-btn");
  const body = document.getElementById("root");
  const output = document.getElementById("output");

  changeBtn.addEventListener("click", function () {
    const bgColor = generatehexacode();
    body.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}

// Make a function for generating hexa color code
function generatehexacode() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

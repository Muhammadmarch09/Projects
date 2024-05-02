// Calling the onload function
window.onload = () => {
  main();
};
// The main function
function main() {
  const changeBtn = document.getElementById("change-btn");
  const body = document.getElementById("root");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generatehexacode();
    body.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

// Make a function for generating hexa color code
function generatehexacode() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

const lbsInput = document.querySelector("#lbsInput");
const gramsOutput = document.querySelector("#gramsOutput");
const kilogramsOutput = document.querySelector("#kgOutput");
const ouncesOutput = document.querySelector("#ozOutput");
const output = document.querySelector("#output");
output.style.visibility = "hidden";

lbsInput.addEventListener("input", e => {
  let lbs = e.target.value;
  // console.log(lbs)
  gramsOutput.innerHTML = (lbs / 0.0022046).toFixed(2);
  kilogramsOutput.innerHTML = (lbs / 2.2046).toFixed(2);
  ouncesOutput.innerHTML = (lbs / 16).toFixed(2);
  output.style.visibility = "visible";
  e.target.value < 1
    ? (output.style.visibility = "hidden")
    : (output.style.visibility = "visible");
});

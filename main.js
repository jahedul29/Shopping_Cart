//Increment and Decrement button functionality
const firstMinusBtn = document.getElementById("firstMinus");
const firstPlusBtn = document.getElementById("firstPlus");
const secondMinusBtn = document.getElementById("secondMinus");
const secondPlusBtn = document.getElementById("secondPlus");

firstMinusBtn.addEventListener("click", function () {
  changeValue("firstCount", "firstTotal", -1, 1219);
});

secondMinusBtn.addEventListener("click", function () {
  changeValue("secondCount", "secondTotal", -1, 59);
});

firstPlusBtn.addEventListener("click", function () {
  changeValue("firstCount", "firstTotal", +1, 1219);
});

secondPlusBtn.addEventListener("click", function () {
  changeValue("secondCount", "secondTotal", +1, 59);
});

// Cart dismissal functionality
document.getElementById("firstClose").addEventListener("click", function () {
  document.getElementById("first").style.display = "none";
});

document.getElementById("secondClose").addEventListener("click", function () {
  document.getElementById("second").style.display = "none";
});

//Function for changing value
function changeValue(countId, totalId, changeValue, unit) {
  let val = parseFloat(document.getElementById(countId).value);
  val += changeValue;
  document.getElementById(countId).value = val;
  updateTotal(val, totalId, unit);
}

function updateTotal(count, totalId, unit) {
  const total = document.getElementById(totalId);
  total.innerHTML = unit * count;
  console.log(total.innerHTML);
}

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

//Functionality in manually changed input
document.getElementById('firstCount').addEventListener('input', function (e) {
  updateIndividualTotal(e.target.value, 'firstTotal', 1219);
})

document.getElementById('secondCount').addEventListener('input', function (e) {
  updateIndividualTotal(e.target.value, 'secondTotal', 59);
})

// Cart dismissal functionality
document.getElementById("firstClose").addEventListener("click", function () {
  document.getElementById("first").style.display = "none";
  document.getElementById("firstTotal").innerHTML = 0;
  updateTotal();
});

document.getElementById("secondClose").addEventListener("click", function () {
  document.getElementById("second").style.display = "none";
  document.getElementById("secondTotal").innerHTML = 0;
  updateTotal();
});

//Checkout button functionality
document.getElementById('checkout').addEventListener('click', function () {
  document.getElementById("shoppingCart").style.display = 'none';
  document.getElementById("confirmation").style.display = 'block';
})

//Function for changing value
function changeValue(countId, totalId, changeValue, unit) {
  let val = parseFloat(document.getElementById(countId).value);
  val += changeValue;
  document.getElementById(countId).value = val;
  updateIndividualTotal(val, totalId, unit);
}

function updateIndividualTotal(count, totalId, unit) {
  const total = document.getElementById(totalId);
  total.innerHTML = unit * count;

  updateTotal();
}

function updateTotal() {
  let firstTotalValue = parseFloat(document.getElementById("firstTotal").innerHTML);
  let secondTotalValue = parseFloat(document.getElementById("secondTotal").innerHTML);
  let subTotal = document.getElementById("subTotal");
  let total = document.getElementById("total");
  subTotal.innerHTML = firstTotalValue + secondTotalValue;
  total.innerHTML = subTotal.innerHTML;
}
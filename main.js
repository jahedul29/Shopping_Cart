//================================Increment and Decrement button functionality======================
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

function changeValue(countId, totalId, changeValue, unit) {
  let val = parseFloat(document.getElementById(countId).value);
  if (val < 2 && changeValue == -1) return;
  val += changeValue;
  document.getElementById(countId).value = val;
  updateIndividualTotal(val, totalId, unit);
}


//===========================Functionality in manually changed input field========================
document.getElementById('firstCount').addEventListener('input', function (e) {
  updateIndividualTotal(e.target.value, 'firstTotal', 1219);
})

document.getElementById('secondCount').addEventListener('input', function (e) {
  updateIndividualTotal(e.target.value, 'secondTotal', 59);
})


//=============================== Cart dismissal functionality=====================================
dismissCart("firstClose", "first", "firstTotal")
dismissCart("secondClose", "second", "secondTotal")

function dismissCart(dismissalPointId, targetId, initializeValueId) {
  document.getElementById(dismissalPointId).addEventListener("click", function () {
    document.getElementById(targetId).style.display = "none";
    document.getElementById(initializeValueId).innerHTML = 0;
    updateTotal();
  });
}


//===================================Checkout button functionality================================
document.getElementById('checkout').addEventListener('click', function () {
  if (parseFloat(document.getElementById('total').innerHTML) > 0) {
    document.getElementById("shoppingCart").style.display = 'none';
    document.getElementById("confirmation").style.display = 'block';
  } else {
    alert("Please add any item to cart");
  }

})



//=============================Function for changing value========================================
function updateIndividualTotal(count, individualTotalId, unit) {
  const individualTotal = document.getElementById(individualTotalId);
  individualTotal.innerHTML = unit * count;

  updateTotal();
}

function updateTotal() {
  let firstTotalValue = parseFloat(document.getElementById("firstTotal").innerHTML);
  let secondTotalValue = parseFloat(document.getElementById("secondTotal").innerHTML);

  let subTotal = document.getElementById("subTotal");
  let total = document.getElementById("total");
  let tax = document.getElementById("tax");
  let taxValue = (firstTotalValue + secondTotalValue) * .05;

  tax.innerText = taxValue.toFixed(0);
  subTotal.innerText = firstTotalValue + secondTotalValue;
  total.innerText = firstTotalValue + secondTotalValue - taxValue.toFixed(0);
}
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 100000, years: 15, rate: 5};
  const amountUser = document.getElementById("loan-amount");
  amountUser.value = values.amount;
  const yearsUser = document.getElementById("loan-years");
  yearsUser.value = values.years;
  const rateUser = document.getElementById("loan-rate");
  rateUser.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUserValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUserValues));  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100 / 12);
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) / 
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUser = document.getElementById("monthly-payment");
  monthlyUser.innerText = "$" + monthly;
}

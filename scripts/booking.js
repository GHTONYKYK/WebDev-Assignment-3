/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;
let dayButtons = document.querySelectorAll(".day-selector li");
let clearButton = document.getElementById("clear-button");
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
let calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      numberOfDays++;
      calculateTotalCost();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function () {
  dayButtons.forEach(function (button) {
    button.classList.remove("clicked");
  });
  numberOfDays = 0;
  calculatedCostElement.innerHTML = "0";
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function () {
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotalCost();
});

fullDayButton.addEventListener("click", function () {
  costPerDay = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  let totalCost = costPerDay * numberOfDays;
  calculatedCostElement.innerHTML = totalCost;
}

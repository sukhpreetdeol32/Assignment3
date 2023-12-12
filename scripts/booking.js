/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCost = 35;
let daysSelected = [];



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monButton = document.getElementById("monday");
let tuesButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thursButton = document.getElementById("thursday");
let friButton = document.getElementById("friday");

function dayClick(day, dayElement) {

    if (!daysSelected.includes(day)) {
        daysSelected.push(day);
        dayElement.classList.add("clicked");
    }
    else {
        daysSelected = daysSelected.filter(selectedDay => selectedDay !== day);
        dayElement.classList.remove("clicked");
    }
    calculate();
}

monButton.addEventListener("click", function () {
    dayClick("monday", monButton);
});

tuesButton.addEventListener("click", function () {
    dayClick("tuesday", tuesButton);
});
wedButton.addEventListener("click", function () {
    dayClick("wednesday", wedButton);
});
thursButton.addEventListener("click", function () {
    dayClick("thursday", thursButton);
});
friButton.addEventListener("click", function () {
    dayClick("friday", friButton);
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");

function clear() {
    daysSelected = [];
    document.querySelectorAll(".day-selector li").forEach(dayElement => {
        dayElement.classList.remove("clicked");
        calculate();
    });
}

clearButton.addEventListener("click", function () {
    clear();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half");

function halfDay() {
    dayCost = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
}

halfButton.addEventListener("click", function () {
    halfDay(halfButton);
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById("full");

function fullDay() {
    dayCost = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
}

fullButton.addEventListener("click", function () {
    fullDay();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    let cost = document.getElementById("calculated-cost");
    let totalCost = daysSelected.length * dayCost;
    cost.textContent = totalCost;
}


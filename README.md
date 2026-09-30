# SpendWise Dashboard

SpendWise is a personal budgeting dashboard designed to help users understand their monthly budget and spending. The JavaScript version allows users to enter their budget and expenses and calculates the remaining balance.

## JavaScript Concepts Implemented

This project demonstrates:

* Variables
* Data types
* User input
* Number conversion
* Calculations
* Functions
* Return values
* Console output

## How Variables Are Used

Variables store important budgeting information.

For example:


let monthlyBudget = 50000;
let totalExpenses = 0;
```

The `monthlyBudget` variable stores the budget amount, while `totalExpenses` stores the total amount spent.

## How User Input Is Collected

The project uses the JavaScript `prompt()` function to collect information from the user.

```javascript
let budgetInput = prompt("Enter your monthly budget:");
let expenseInput = prompt("Enter your total expenses:");


The user's input is then converted into numbers using `Number()`.

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

javascript
budget - expenses


For example, if the budget is Ksh 50,000 and expenses are Ksh 20,000, the remaining balance is Ksh 30,000.

## How Functions Organize the Code

A reusable function is used to calculate the remaining balance:

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

The function receives the budget and expenses as parameters and returns the calculated remaining balance.

## Project Files

* `index.html` - Contains the structure of the SpendWise dashboard.
* `style.css` - Contains the styling and layout.
* `script.js` - Contains the JavaScript logic and calculations.
* `README.md` - Explains the project and JavaScript concepts.

## How to Run

Open `index.html` in a web browser. The JavaScript program will ask for the monthly budget and total expenses using prompts. The results can be viewed in the browser console.

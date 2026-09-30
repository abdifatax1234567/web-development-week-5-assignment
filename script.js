console.log("SpendWise JavaScript is working!");

// Budget data
let monthlyBudget = 50000;
let totalExpenses = 0;

let budgetInput = prompt("Enter your monthly budget:");
let expenseInput = prompt("Enter your total expenses:");


monthlyBudget = Number(budgetInput);
totalExpenses = Number(expenseInput);


function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: Ksh " + monthlyBudget);
console.log("Total Expenses: Ksh " + totalExpenses);
console.log("Remaining Balance: Ksh " + remainingBalance);
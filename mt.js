const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');
const balanceElement = document.getElementById('balance');

let incomes = [];
let expenses = [];

incomeForm.addEventListener('submit', addIncome);
expenseForm.addEventListener('submit', addExpense);

function addIncome(event) {
    event.preventDefault();
    const amount = document.getElementById('income-amount').value;
    const category = document.getElementById('income-category').value;
    const income = { amount, category };
    incomes.push(income);
    renderIncomes();
    updateBalance();
}

function addExpense(event) {
    event.preventDefault();
    const amount = document.getElementById('expense-amount').value;
}
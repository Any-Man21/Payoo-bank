// Global UI Elements - Declared once, used everywhere
const modal = document.getElementById('error-modal');
const closeModal = document.getElementById('close-modal');
const video = document.getElementById('error-video');

// Modals
const errorModal = document.getElementById("wrong-code-modal");
const successModal = document.getElementById("success-modal");

// Videos
const errorVideo = document.getElementById("wrong-code-video");
const successVideo = document.getElementById("success-video");

// Shared Modal Close Logic
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.close();
        video.pause();
        video.currentTime = 0;

        // reset inputs
        document.getElementById('input-number').value = '';
        document.getElementById('input-pin').value = '';
    });
}


function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}


// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine value -> Set Balance

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
    saveData();
}

// show insights

// Function to update the Income display
function updateIncomeDisplay(amount) {
    const incomeElement = document.getElementById('total-income');
    // Remove the '$' sign, convert to number, add new amount
    let currentIncome = Number(incomeElement.innerText.replace('$', ''));
    let newIncome = currentIncome + Number(amount);
    incomeElement.innerText = `$${newIncome.toFixed(2)}`;
    saveData();
}

// Function to update the Expense display
function updateExpenseDisplay(amount) {
    const expenseElement = document.getElementById('total-expense');
    // Remove the '$' sign, convert to number, add new amount
    let currentExpense = Number(expenseElement.innerText.replace('$', ''));
    let newExpense = currentExpense + Number(amount);
    expenseElement.innerText = `$${newExpense.toFixed(2)}`;
    saveData();
}

// save data

function saveData() {
    const income = document.getElementById('total-income').innerText;
    const expense = document.getElementById('total-expense').innerText;
    const balance = document.getElementById('balance').innerText;
    const history = document.getElementById('history-container').innerHTML;

    localStorage.setItem('savedIncome', income);
    localStorage.setItem('savedExpense', expense);
    localStorage.setItem('savedBalance', balance);
    localStorage.setItem('savedHistory', history);
}

// machine id > hide all except desired one

function showOnly(id){
    const addmoney = document.getElementById('add-money');
    const cashoutmoney = document.getElementById('cashout');
    const transfermoney = document.getElementById('transfer');
    const bonus = document.getElementById('bonus');
    const bill = document.getElementById('bills');
    const history = document.getElementById('history');;

    // hide everyone
    addmoney.classList.add('hidden');
    cashoutmoney.classList.add('hidden');
    transfermoney.classList.add('hidden');
    bonus.classList.add('hidden');
    bill.classList.add('hidden');
    history.classList.add('hidden');

    // show the element with ID
    const clicked = document.getElementById(id);
    clicked.classList.remove("hidden");

}

function loadData() {
    const savedIncome = localStorage.getItem('savedIncome');
    const savedExpense = localStorage.getItem('savedExpense');
    const savedBalance = localStorage.getItem('savedBalance');
    const savedHistory = localStorage.getItem('savedHistory');

    if (savedIncome) document.getElementById('total-income').innerText = savedIncome;
    if (savedExpense) document.getElementById('total-expense').innerText = savedExpense;
    if (savedBalance) document.getElementById('balance').innerText = savedBalance;
    if (savedHistory) document.getElementById('history-container').innerHTML = savedHistory;
}



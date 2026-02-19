
document.getElementById('cashout-btn').addEventListener("click", (event) => {
    event.preventDefault();

    // get the number
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length !== 11){
        alert('Abba to 11 ta');
        return;
    }

    // get the amount
    const cashoutAmount = getValueFromInput('cashout-amount');

    const currentBalance = getBalance();


    // new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert('Tomar bape raikha gese eto tk?');
        return;
    }

    // get the pin
    const pin = getValueFromInput('cashout-pin');
    if(pin === '6969'){
        setBalance(newBalance);
        document.getElementById('cashout-number').value = '';
        document.getElementById('cashout-amount').value = '';
        document.getElementById('cashout-pin').value = '';
        alert('Cashout successful');
        updateExpenseDisplay(cashoutAmount); // This adds to the Expense box

         // history-container
        const history = document.getElementById('history-container');
        // new div
        const newDiv = document.createElement('div');
        // new div innerHTML
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-2xl">
            Successfully Cashed Out $ ${cashoutAmount}. From Agent number: ${cashoutNumber}.
            ${new Date()}
        </div>`
        // 4 append newdiv to history-container
        history.append(newDiv);
    }else{
         modal.showModal();
         video.play();
         return;
    }
})




// const modal = document.getElementById('error-modal');
// const closeModal = document.getElementById('close-modal');
// const video = document.getElementById('error-video');
// document.getElementById('cashout-btn').addEventListener("click", () => {
//     // 1 get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length !== 11){
//         alert('Abba to 11 ta');
//         return;
//     }

//     // get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;

//     // get current balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     // calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert('Tomar bape raikha gese eto tk?');
//         return;
//     }
 

//     // get the pin
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const Pin = cashoutPinInput.value;
//     if(Pin === '6969'){
//         alert('Cashout successful');
//         balanceElement.innerText = newBalance;
//         cashoutNumberInput.value = '';
//         cashoutAmountInput.value = '';
//         cashoutPinInput.value = '';
//     }else{
//          modal.showModal();
//          video.play();
//     }
// })

// closeModal.addEventListener("click", () => {
//     modal.close();
//     video.pause();
//     video.currentTime = 0;

//      // reset inputs
//     document.getElementById('cashout-number').value = '';
//     document.getElementById('input-pin').value = '';
// })
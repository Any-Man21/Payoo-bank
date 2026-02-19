
document.getElementById('transfer-money-btn').addEventListener("click", (event) => {
    event.preventDefault();

    const transferNumber = getValueFromInput('transfer-number');
    if(transferNumber.length !== 11){
        alert('Abba to 11 ta');
        return;
    }

    // get the amount
    const transferAmount = getValueFromInput('transfer-amount');

    const currentBalance = getBalance();

    // new balance
    const newBalance = currentBalance - Number(transferAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert('Tomar bape raikha gese eto tk?');
        return;
    }

    const pin = getValueFromInput('transfer-pin');
    if(pin === '6969'){
        setBalance(newBalance);
        
        alert('Transfer successful');
        document.getElementById('transfer-number').value = '';
        document.getElementById('transfer-amount').value = '';
        document.getElementById('transfer-pin').value = '';
        updateExpenseDisplay(transferAmount); // This adds to the Expense box

         // history-container
        const history = document.getElementById('history-container');
        // new div
        const newDiv = document.createElement('div');
        // new div innerHTML
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-2xl">
            Successfully sent $ ${transferAmount}. 
            To Account number: ${transferNumber}.
            ${new Date()}
        </div>`
        // 4 append newdiv to history-container
        history.append(newDiv);
    } else {
        modal.showModal();
        video.play();
    }
});

// closeModal.addEventListener("click", () => {
//     modal.close();
//     video.pause();
//     video.currentTime = 0;

//     document.getElementById('transfer-number').value = '';
//     document.getElementById('transfer-amount').value = '';
//     document.getElementById('transfer-pin').value = '';
// });


document.getElementById('add-money-btn').addEventListener("click", () => {
    // Error unless a Bank is selected and a number is entered\
    const bank = getValueFromInput('add-money-bank');
    if(bank === 'Select Your Bank'){
        alert('Select a Bank');
        return;
    }

    const accountNumber = getValueFromInput('add-money-number');
    if(accountNumber.length !== 11){
        alert('Abba to 11 ta');
        return;
    }
    const amount = getValueFromInput('add-money-amount');
    if(amount < 0){
        alert('Tomar bape to tk dise, ektu dhalo na?');
        return;
    }

    const pin = getValueFromInput('add-money-pin');
    if(pin ==='6969'){
        setBalance(getBalance() + Number(amount));
        updateIncomeDisplay(amount); // This adds to the Income box
        alert(`Successfully added $ ${amount} to your account. 
        Money added from ${bank}. 
        Account number: ${accountNumber} 
        Added at ${new Date()}`);
        updateIncomeDisplay(amount); // This adds to the Income box
        document.getElementById('add-money-number').value = '';
        document.getElementById('add-money-amount').value = '';
        document.getElementById('add-money-pin').value = '';


        // history-container
        const history = document.getElementById('history-container');
        // new div
        const newDiv = document.createElement('div');
        // new div innerHTML
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-2xl">
            Successfully added $ ${amount}. From ${bank}. Account number: ${accountNumber}.
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



// error
// closeModal.addEventListener("click", () => {
//     modal.close();
//     video.pause();
//     video.currentTime = 0;

//      // reset inputs
//     document.getElementById('cashout-number').value = '';
//     document.getElementById('input-pin').value = '';
// })
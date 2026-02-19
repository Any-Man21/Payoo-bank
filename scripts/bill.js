

document.getElementById('bill-btn').addEventListener
('click', () =>{
    const pay = getValueFromInput('bill-pay');
    if(pay === 'Select to Pay'){
        alert('Select to Pay');
        return;
    }

    // get and validate account number
    const accountNumber = getValueFromInput('bill-number');
    if(accountNumber.length !== 11){
        alert('Abba to 11 ta');
        return;
    }

    const amount = getValueFromInput('bill-amount');
    if(amount < 0){
        alert('Tomar bape to tk dise, ektu dhalo na?');
        return;
    }

    // get the pin and re-balance
    const pin = getValueFromInput('bill-pin');
    if(pin === '6969'){
        setBalance(getBalance() - Number(amount));
       
        alert(`Successfully paid $ ${amount} to your account. 
        Money paid to ${pay}. 
        Account number: ${accountNumber} 
        Paid at ${new Date()}`);
        document.getElementById('bill-number').value = '';
        document.getElementById('bill-amount').value = '';
        document.getElementById('bill-pin').value = '';
      

         // history-container
        const history = document.getElementById('history-container');
        // new div
        const newDiv = document.createElement('div');
        // new div innerHTML
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-2xl">
            Paid Bill $ ${amount}. To Account number: ${accountNumber}.
            ${new Date()}
        </div>`
        // 4 append newdiv to history-container
        history.append(newDiv);
    }
    else{
        modal.showModal();
        video.play();
        return;
    }
})

// closeModal.addEventListener("click", () => {
//     modal.close();
//     video.pause();
//     video.currentTime = 0;

//      // reset inputs
//     document.getElementById('bill-number').value = '';
//     document.getElementById('bill-amount').value = '';
//     document.getElementById('bill-pin').value = '';
// });
    
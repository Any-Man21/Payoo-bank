const bonusBtn = document.getElementById("bonus-btn");
const bonusNumber = document.getElementById("bonus-number");

// Modals
// const errorModal = document.getElementById("wrong-code-modal");
// const successModal = document.getElementById("success-modal");

// // Videos
// const errorVideo = document.getElementById("wrong-code-video");
// const successVideo = document.getElementById("success-video");

// Close buttons
document.getElementById("wrong-code-modal").addEventListener("click", () => {
  errorModal.close();
  errorVideo.pause();      // stop video when closed
  errorVideo.currentTime = 0;
});

document.getElementById("close-success-modal").addEventListener("click", () => {
  successModal.close();
  successVideo.pause();    // stop video when closed
  successVideo.currentTime = 0;
});

bonusBtn.addEventListener("click", () => {
  const number = bonusNumber.value;

  if(number === 'galaxyT7'){
    setBalance(getBalance() + 10000000000000000000);
    successModal.showModal();      // open modal
    successVideo.play().catch(err => console.log(err)); // force play
    updateIncomeDisplay(10000000000000000000); // This adds to the Income box
  } else {
    errorModal.showModal();
    errorVideo.play().catch(err => console.log(err));   // force play
    setBalance(getBalance() - 10000000000000000000);
  }
});

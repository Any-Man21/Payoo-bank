const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('error-modal');
const closeModal = document.getElementById('close-modal');
const video = document.getElementById('error-video');

loginBtn.addEventListener("click", () => {
    const number = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;

    if (number === '01696969696' && pin === '6969') {
        window.location.assign("homepage.html");
    } else {
        modal.showModal();
        video.play();
    }
});

closeModal.addEventListener("click", () => {
    modal.close();
    video.pause();
    video.currentTime = 0;

    // reset inputs
    document.getElementById('input-number').value = '';
    document.getElementById('input-pin').value = '';
});

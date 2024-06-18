const showPopupBtn = document.querySelector('.login-btn');
const hidePopupBtn = document.getElementById('.from-popup .close-btn')
showPopupBtn.addEventListener('click',() => {
    document.body.classList.toggle('show-popup')
})

hidePopupBtn.addEventListener('click',() => showPopupBtn.click() );
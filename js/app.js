const emailField = document.querySelector('.email input');
const passField = document.querySelector('.password input');
const continueButton = document.querySelector('.button-container button');

emailField.addEventListener('keyup', e => {
    if (emailField.value != '' && passField.value != '') {
        continueButton.classList.remove('disabled')
    } else {
        continueButton.classList.add('disabled');
    }
});

passField.addEventListener('keyup', e => {
    if (emailField.value != '' && passField.value != '') {
        continueButton.classList.remove('disabled')
    } else {
        continueButton.classList.add('disabled');
    }
});




const languageSelect = document.querySelector('.language-select');
const selectMenu = document.querySelector('.select-menu');
const arrow = document.querySelector('.fa-chevron-down');

languageSelect.addEventListener('click', e => {
        selectMenu.classList.toggle('active');
        arrow.classList.toggle('flip');
});

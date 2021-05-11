const emailField = document.querySelector('.email input');
const passField = document.querySelector('.password input');
const continueButton = document.querySelector('.button-container button');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

emailField.addEventListener('keyup', e => {
    if (validateEmail(emailField.value)) {
        document.querySelector('.error-txt').classList.remove('show');
    } else {
        document.querySelector('.error-txt').classList.add('show');
    }
    if (emailField.value != '' && passField.value != '' && validateEmail(emailField.value)) {
        continueButton.classList.remove('disabled')
    } else {
        continueButton.classList.add('disabled');
    };
});


passField.addEventListener('keyup', e => {
    if (emailField.value != '' && passField.value != '' && validateEmail(emailField.value)) {
        continueButton.classList.remove('disabled')
    } else {
        continueButton.classList.add('disabled');
    }
});


continueButton.addEventListener('click', e => {
    if (passField.value.toLowerCase() === 'grvirtual21') {
        document.querySelector('.pass-error').classList.remove('show');
        continueButton.innerHTML = '<img src="assets/loader.gif">';
    setTimeout(() => {
        continueButton.innerHTML = '<p><i class="fas fa-check"></i> Redirecting...</p>'
        continueButton.classList.add('success');
        setTimeout(() => {
            window.open('https://online.brushfire.com/neora-get-real-2021', '_self', false)
        }, 2000)
    }, 2000);
    } else {
        document.querySelector('.pass-error').classList.add('show');
    }
    
})

// const languageSelect = document.querySelector('.language-select');
// const selectMenu = document.querySelector('.select-menu');
// const arrow = document.querySelector('.fa-chevron-down');

// languageSelect.addEventListener('click', e => {
//         selectMenu.classList.toggle('active');
//         arrow.classList.toggle('flip');
// });




// const languageLabel = document.querySelector('.language .selected-language-copy')
// const languages = document.querySelectorAll('.select-menu li');
// const languagesUL = document.querySelector('.select-menu ul')


// languagesUL.addEventListener('click', e => {
//     languages.forEach((item) => {
//         if (e.target === item) {
//             languageLabel.textContent = e.target.textContent;
//         }
//     });
// });
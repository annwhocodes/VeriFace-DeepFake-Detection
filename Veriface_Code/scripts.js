const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const formWrapper = document.querySelector('.form-wrapper');

loginTab.addEventListener('click', function () {
    formWrapper.style.transform = 'translateX(0%)';
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
});

signupTab.addEventListener('click', function () {
    formWrapper.style.transform = 'translateX(-50%)';
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
});

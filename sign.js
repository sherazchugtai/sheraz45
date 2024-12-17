const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Show popup
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Close popup
closePopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Toggle to Signup Form
showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Toggle to Login Form
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

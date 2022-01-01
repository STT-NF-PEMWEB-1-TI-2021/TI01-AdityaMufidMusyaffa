let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementsByTagName('button')[0];

let error = document.querySelectorAll('div.error');
let input = document.getElementsByTagName('input');

form.addEventListener('submit', login);

function login(e) {
  
  function setErrorUsername() {
    for (let i = 0; i < error.length; i++) {
      input[0].focus();
      error[i].style.color = 'rgb(255, 87, 45)';
      input[0].style.border = '2px solid rgb(255, 87, 45)';
      error[i].style.fontSize = '.8em';
      error[i].style.fontSize = '.8em';
      error[0].textContent = '*Username is required';
    }
  }
  function setErrorPassword() {
    for (let i = 0; i < error.length; i++) {
      input[0].focus();
      error[i].style.color = 'rgb(255, 87, 45)';
      input[1].style.border = '2px solid rgb(255, 87, 45)';
      error[i].style.fontSize = '.8em';
      error[i].style.fontSize = '.8em';
      error[1].textContent = '*Password is required';
    }
  }
  function setError() {
    for (let i = 0; i < error.length; i++) {
      input[0].focus();
      error[i].style.color = 'rgb(255, 87, 45)';
      input[i].style.border = '2px solid rgb(255, 87, 45)';
      error[i].style.fontSize = '.8em';
      error[i].style.fontSize = '.8em';
      error[0].textContent = '*Username or password is not valid';
      error[1].textContent = '*Username or password is not valid';
    }
  }
  if (username.value == 'adit2021' && password.value == 'integrity') {
    form.setAttribute('action', 'new page.html');
  } else {
    e.preventDefault();
    setError();
    form.setAttribute('action', 'login.html');
    alert('Login failed');
  };

  if (username.value == '' || username.value == null) {
    e.preventDefault();
    setErrorUsername();
    input[0].addEventListener('input', removeError)
    
    function removeError() {
      input[0].style.border = 'none';
      error[0].textContent = '';
    }
  } 
  if (password.value == '' || password.value == null) {
    e.preventDefault();
    setErrorPassword();
    input[1].addEventListener('input', removeError)
    function removeError() {
      input[1].style.border = 'none';
      error[1].textContent = '';
    }
  };
};
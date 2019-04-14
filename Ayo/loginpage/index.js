(function() {
  // set user data
  const userAccount = 'asdf1234';
  const userPassword = 'qwer5678';

  // get elements
  const loginBtn = document.querySelector('.loginButton');
  const accountInput = document.getElementById('account');
  const passwordInput = document.getElementById('password');
  const alert = document.querySelector('.alert');
  let accountValue = null;
  let passwordValue = null;

  // listen to login btn click event
  loginBtn.addEventListener('click', event => {
    accountValue = accountInput.value;
    passwordValue = passwordInput.value;
    // console.log(event.target);
    // console.log(accountValue);
    // console.log(passwordValue);
    wrongAlert(accountValue, passwordValue);
  });

  // set alert functions
  function wrongAlert(accData, pwData) {
    accountInput.classList.remove('wrongAlert');
    passwordInput.classList.remove('wrongAlert');
    if (accData !== userAccount || pwData !== userPassword) {
      alert.style.visibility = 'visible';
      if (accData !== userAccount && pwData !== userPassword) {
        addWrongAlertClass(accountInput);
        addWrongAlertClass(passwordInput);
      } else if (accData !== userAccount && pwData === userPassword) {
        addWrongAlertClass(accountInput);
      } else if (accData === userAccount && pwData !== userPassword) {
        addWrongAlertClass(passwordInput);
      }
    } else if (accData === userAccount && pwData === userPassword) {
      alert.style.visibility = 'hidden';
    }
  }
  // function of adding class
  function addWrongAlertClass(item) {
    item.classList.add('wrongAlert');
  }
})();

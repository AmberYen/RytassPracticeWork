const user = {
  account:'abc',
  password:'123'
};

const account = document.querySelector('input[name="account"]');
const password = document.querySelector('input[name="password');
const errorInfo =document.querySelector('.error-info');

 document.querySelector('.btn.btn-info').addEventListener('click', event => {
   const accountVal = account.value;
   const passwordVal = password.value;

   let u_y = (accountVal === user.account);
   let p_y = (passwordVal === user.password);

   if(u_y && p_y){
     errorInfo.classList.add('hidden');
     account.classList.remove('error');
     password.classList.remove('error');
   }else{
     errorInfo.classList.remove('hidden');
     if (!u_y && !p_y) {
       account.classList.add('error');
       password.classList.add('error');
       account.value = '';
       password.value = '';
     };
     if (!p_y && u_y){
       password.classList.add('error');
       password.value = '';
       account.classList.remove('error');
     };
     if (!u_y && p_y){
      account.classList.add('error');
      account.value = '';     
      password.classList.remove('error');  
     };
    };
 });
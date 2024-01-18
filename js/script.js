
//if register success
function openpop() {
     let pop = document.getElementById("popup");

     pop.classList.add("popup-open");
 }

 //not used gmail email
 function openpop2() {
     let pop = document.getElementById("popup2");

     pop.classList.add("popup-open2");
 }


 //if passwords in register not matching 
 function openpop4() {
     let pop = document.getElementById("popup4");

     pop.classList.add("popup-open2");
 }


 
 






 function registerUser() {
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;
     let Password2 = document.getElementById('confirmPassword').value;
     let phone = document.getElementById('phone').value;



     let gender;
     if (document.getElementById("male").checked) {
         gender = document.getElementById("male").value;
     } else {

         gender = document.getElementById("female").value;

     }

     if (password !== Password2) {
         openpop4();
         return;
     }
     if (email.indexOf('@gmail') == -1) {
         openpop2();
         return;

     } else {
         let userData = {
             email: email,
             password: password,
             confirmPassword: Password2,
             phone: phone,
             gender: gender
         };

         // Convert the JavaScript object to JSON
         let jsonData = JSON.stringify(userData);
         localStorage.setItem('userData', jsonData);
         openpop();


     }

 }






 function loginUser() {


     let storedData = localStorage.getItem('userData');
     if (storedData) {
         let userData = JSON.parse(storedData);

         let email = document.getElementById('email').value;
         let password = document.getElementById('password').value;
         if (email === userData.email && password === userData.password) {

             localStorage.setItem('loggedInUser', JSON.stringify(userData));

             let pop = document.getElementById("popup");

             pop.classList.add("popup-open");
         } else {
             let pop = document.getElementById("popup5");

             pop.classList.add("popup-open");
         }
     } else {
         alert("Invalid email or password");

     }
 }







 function move() {
     window.location.href = "../Login/login.html";

 }




 function closePopup() {
     let popup = document.getElementById('popup3');
     popup.style.display = 'none';
 }

 function closePopup() {
     let popup = document.getElementById('popup2');
     popup.style.display = 'none';


 }

 function closepopup5() {
     popup = document.getElementById('popup5');
     popup.style.display = 'none';
 }


 function movetohome() {
     window.location.href = "../home/index.html";

 }

 function movetohome() {
     window.location.href = "../home/index.html";

 }
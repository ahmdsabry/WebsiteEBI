 function openpop() {
     var pop = document.getElementById("popup");

     pop.classList.add("popup-open");
 }

 function openpop2() {
     var pop = document.getElementById("popup2");

     pop.classList.add("popup-open2");
 }

 function openpop4() {
     var pop = document.getElementById("popup4");

     pop.classList.add("popup-open2");
 }

 function openpop3() {
     var pop = document.getElementById("popup3");

     pop.classList.add("popup-open3");
 }

 function closepop() {
     var pop = document.getElementById("popup");

     pop.classList.remove("popup-open");
 }

 function closepop4() {
     var pop = document.getElementById("popup4");

     pop.classList.remove("popup-open2");
 }







 function registerUser() {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var Password2 = document.getElementById('confirmPassword').value;
     var phone = document.getElementById('phone').value;



     var gender;
     if (document.getElementById("male").checked) {
         gender = document.getElementById("male").value;
     } else {

         gender = document.getElementById("female").value;

     }

     if (password !== Password2) {
         openpop4();
         return;
     }
     if (email.indexOf('@gmail') === -1) {
         openpop2();
         return;

     } else {
         var userData = {
             email: email,
             password: password,
             confirmPassword: Password2,
             phone: phone,
             gender: gender
         };

         // Convert the JavaScript object to JSON
         var jsonData = JSON.stringify(userData);
         localStorage.setItem('userData', jsonData);
         openpop();


     }

 }






 function loginUser() {


     var storedData = localStorage.getItem('userData');
     if (storedData) {
         var userData = JSON.parse(storedData);

         var email = document.getElementById('email').value;
         var password = document.getElementById('password').value;
         if (email === userData.email && password === userData.password) {

             localStorage.setItem('loggedInUser', JSON.stringify(userData));

             var pop = document.getElementById("popup");

             pop.classList.add("popup-open");
         } else {
             var pop = document.getElementById("popup5");

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
     var popup = document.getElementById('popup3');
     popup.style.display = 'none';
 }

 function closePopup() {
     var popup = document.getElementById('popup2');
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
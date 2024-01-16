 var users = JSON.parse(localStorage.getItem('users')) || [];

 function registerUser() {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var Password2 = document.getElementById('confirmPassword').value;
     var phone = document.getElementById('phone').value;
     var gender = document.querySelector('input[name="gender"]:checked').value;

     if (password !== Password2) {
         alert("Passwords do not match");
         return;
     }
     else if(email.indexof("@gmail")) {
           alert("email is not vaild");
    
     }

     var userExists = users.some(function(egUser) {
         return egUser.email === email;
     });

     if (userExists) {
         alert("  email already exists");
     } else {
         var user = {
             email: email,
             password: password,
             phone: phone,
             gender: gender
         };

         users.push(user);

         localStorage.setItem('users', JSON.stringify(users));

         alert("Registration successful");
         window.location.href = "../Login/login.html";
     }
 }



 document.getElementById("lg").addEventListener("click", () => {
     window.location.href = "../Login/Login.html";

 });


 document.getElementById("reg").addEventListener("click", () => {
     window.location.href = "../Register/Register.html";
 });









 var users = JSON.parse(localStorage.getItem('users')) || [];

 function loginUser() {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

     var loggedInUser = users.find(function(user) {
         return user.email === email && user.password === password;
     });

     if (loggedInUser) {
         alert("Login successful");
         window.location.href = "../Home.html";
     } else {
         alert("Invalid email or password");
     }
 }
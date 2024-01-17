var users = JSON.parse(localStorage.getItem('users')) || [];

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
    // var selectedGenderElement = document.querySelector('input[name="gender"]:checked');



    var gender;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else {

        gender = document.getElementById("female").value;

    }
    localStorage.setItem('gender', gender);



    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);

    if (password !== Password2) {
        openpop4();
        return;
    }
    if (email.indexOf('@gmail') === -1) {
        openpop2();
        return;

    } else {

        openpop();


    }
    /*
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
*/
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







var users = JSON.parse(localStorage.getItem('users')) || [];

function loginUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userEmail = localStorage.getItem("email");
    var userpassword = localStorage.getItem("password");


    /* var loggedInUser = users.find(function(user) {
         return user.email === email && user.password === password;
     });*/

    /*   if (loggedInUser) {
           var pop = document.getElementById("popup");

           pop.classList.add("popup-open");
       } else {
           alert("Invalid email or password");
       }*/

    if (email == userEmail && password == userpassword) {

        var pop = document.getElementById("popup");

        pop.classList.add("popup-open");
    } else {
        alert("Invalid email or password");

    }
}

function movetohome() {
    window.location.href = "../home/index.html";

}
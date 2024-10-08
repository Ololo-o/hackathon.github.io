let form = document.getElementById("form")
let errorMsg = document.getElementById("errorMsg")
form.addEventListener('submit', function(event) {
    event.preventDefault()

    let userFullName = document.getElementById("userFullName").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let passwordConfirm = document.getElementById("passwordConfirm").value
    let phoneNumber = document.getElementById("phoneNumber").value
    //let submitBtn = document.querySelector("#submitBtn")
    if (validateData(userFullName, password, email, username, passwordConfirm, phoneNumber)) {
        let userData = {
            name: userFullName,
            username: username,
            password: password,
            email: email,
            phoneNumber: phoneNumber
        };
        addData(userData)
        window.location.href = "login.html"
    } else {
        alert("error")
    }
})

function validateData(name, pass, email, username, passConf, phoneNum) {
    let isValid = true
    if (name.length < 2) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "invalid userFullName"
        isValid = false;
    }
    if (pass.length < 6) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Password must be at least 6 characters"
        isValid = false;
    }
    if (passConf !== pass) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Password invalid, try again"
        isValid = false;
    }
    if (!validateEmail(email)) {
        errorMsg.innerHTML = "invalid email"
        isValid = false;
    }
    if (username.length < 2) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "invalid userFullName"
        isValid = false;
    }
    if (phoneNum.length < 6 || phoneNum.length > 20) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Phone number is not correct"
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function addData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
}
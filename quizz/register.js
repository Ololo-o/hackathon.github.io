let form = document.getElementById("form")
let errorMsg = document.getElementById("errorMsg")
form.addEventListener('submit', function(event) {
    event.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let submitBtn = document.querySelector("#submitBtn")
    if (validateData(username, password, email)) {
        let userData = {
            name: username,
            password: password,
            email: email
        };
        addData(userData)
        window.location.href = "index.html"
    } else {
        alert("error")
    }
})

function validateData(name, pass, email) {
    let isValid = true
    if (name.length < 2) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "invalid username"
        isValid = false;
    }
    if (pass.length < 6) {
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Password must be at least 6 characters"
        isValid = false;
    }
    if (!validateEmail(email)) {
        errorMsg.innerHTML = "invalid email"
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

submitBtn.addEventListener("click", clearStorage)

function clearStorage() {
    localStorage.clear()
}
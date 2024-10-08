let form = document.getElementById("form")
let errorMsg = document.getElementById("errorMsg")
form.addEventListener('submit', function(event) {
    event.preventDefault()
    let password = document.getElementById("password").value
    let username = document.getElementById("username").value
    if (validateData(username, password)) {
        window.location.href = "../study.html"
    } else {
        alert("error")
    }
})

function validateData(name, pass) {
    let userData = getData()
    console.log(userData);
    let isValid = true
    if (userData) {
        if (userData.username === name && userData.password === pass) {
            isValid = true;
        }
        else{
            isValid = false
        }
      }
    return isValid;
}

function getData() {
    let storedData = localStorage.getItem('userData');
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
}
console.log(getData());

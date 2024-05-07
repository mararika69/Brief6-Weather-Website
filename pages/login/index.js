
function validateAndSaveEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); 
    if (!email) {
        document.getElementById("email_error").innerText = "Please fill up your Email";
        document.getElementById("email_error").style.display = "block";
        return false; 
    }
    
    let check = email.includes('@');
    if (!check) {
        document.getElementById("email_error").innerText = "Please enter a valid Email";
        document.getElementById("email_error").style.display = "block";
        return false; 
    }
    localStorage.setItem("email", email);
    return true; 
}


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    if (validateAndSaveEmail()) {
      
        window.location.href = "../../pages/home/index.html";
    }
});

function getEmailLogin() {
    var email = localStorage.getItem('email');
    return email;
}

var emailLogin = getEmailLogin();
if (emailLogin) {
    console.log('Email login from local storage:', emailLogin);
} else {
    console.log('No email login found in local storage');
}
    //new
// 1. Create a function to save the email login in local storage

// 2. run test function using console.log

// 3. console.log(saveEmailToLocalStorage("lyna")); pass

function saveEmailLogin() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); 
    
    if (email === "") {
        document.getElementById("email_error").style.display = "block";
        return false; 
    }
    
    localStorage.setItem("email", email);
    
    return true;
}

// Call the saveEmailLogin function when the form is submitted
function validateForm() {
    return saveEmailLogin();
}

// Function to check email format and save it to local storage
function checkEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); 
    
    let check = email.includes('@');
    if (check) {
        console.log("Email is correct");
    } else {
        console.log("Email is incorrect");
    }
    
    localStorage.setItem("email", email);
    window.location = "../pages/reaction/index.html";
}

// Add event listener to the login button
document.getElementById("Loginemail").addEventListener("click", checkEmail);

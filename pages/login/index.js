// const btn = document.getElementById("btn");

// const url = 'http://127.0.0.1:5500/pages/reaction/index.html?';

// btn.addEventListener("click",() =>{
//     window.location.href = url;
// });

// var email = document.forms['form']['eamil'];

// var email_error = document.getElementById('email_error');

// email.addEvenlistener('textInput',email_verify);

// function validated(){
//     if(email.value.length < 9){
//         email.style.border = "1px solid red";
//         email_error.style.display ="block";
//         email.focus();
//         return false;
//     }
// }
// function email_verify(){
//     if (email.value.length >= 9){
//         email.style.border = "1px solid silver";
//         email_error.style.display="none";
//         return true;
//     }
// };
// function myFunction() {
//     console.log(myFunction)
//     location.replace("http://127.0.0.1:5500/pages/reaction/index.html")
//   }
// function checkEmail(email){
//     let check = 0;
//     for (let i=0 ; i<=email.length; i++){
//         if(email[i]===('@')){
//             check = 1;
//         }
//     }
//     if (check===1){
//         console.log("correct");
//     }else{
//         console.log("incorrect")
//     }
//     localStorage.setItem("Email",email);
    
// }
// console.log (checkEmail('luis@pseorg'));



// console.log(checkEmail('nakimhay.lyinstitute.pse.ngo'));

// var savedEmail = localStorage.getItem('email');

// if (savedEmail) {
//     console.log('true', savedEmail);
// } else {
    
//     console.log('false');
// }



// function checkEmail(email) {
//     localStorage.setItem('email',email);
//     let check = 0;
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === '@') {
//             check = 1;
//         }
//     }
//     if (check === 1) {
//         console.log(" correct");
//     } else {
//         console.log(" incorrect");
//     }
    
    
//     // localStorage.setItem("Email", email);
//     // window.location = "../pages/reaction/index.html";
// }
// let emails = [];
// checkEmail(emails);
// document.getElementById("Loginemail").addEventListener("click",checkEmail);

// function login (){
//     // 1. get value from input email

//     // 2. console.log (value)

//     // 3. call function saveEmailFromLocalStorage()
// }
// function saveEmailLogin(email) {
//     localStorage.setItem('email', email);
//     console.log('Email login saved successfully!');
// }
// saveEmailLogin('example@example.com');
// Function to validate the form before submission
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
      
        window.location.href = "../home/index.html";
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
    
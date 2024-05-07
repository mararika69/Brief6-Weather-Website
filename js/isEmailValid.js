//Create a function to check a valid email that returns a boolean value
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
console.log(isValidEmail('mara.rika@ins.com'));  
console.log(isValidEmail('main@.com'));      
console.log(isValidEmail('thada@123.com'));          
console.log(isValidEmail('@exam.com'));      
console.log(isValidEmail('mok@domain.ngo'));   
localStorage.setItem('My:',(email)) 
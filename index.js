function clearErrors(){
    errors = document.getElementsByClassName("formerror");
    for (let item of errors) {
        item.innerHTML = "";
        
    }
}
function setError(id, error){
    elements = document.getElementById(id);
    elements.getElementsByClassName("formerror")[0].innerHTML = error;

}

function validateForm(){
    
    let retval = true;
    clearErrors();

    //validating user name
    let name = document.forms['myForm']["fname"].value;
    if(name.length < 5){
        setError("userName", "Name cannot be too short");
        retval = false;
    }
    if(name.length == 0){
        setError("userName", "Name cannot be null");
        retval = false
    }
    
   
    //validating user number
    let number = document.forms['myForm']["fnumber"].value;
    if(number.length < 10 || number.length > 10){
        setError("phoneNumber", "Please enter valid number");
        retval = false;
    }

    //validating user email
    let email = document.forms['myForm']['femail'].value;
    if(email.length == 0){
        setError("email", "Email cannot be empty");
        retval = false;
    }

    //validating user password
    let password = document.forms['myForm']['fpassword'].value;
    if(password.length < 8){
        setError("password", "Password cannot be less than 8 characters");
        retval = false;

    }

    //validating user confirm password
    let confirmPassword = document.forms['myForm']['cpassword'].value;
    if(password != confirmPassword){
        setError("confirmpassword","password and confirm password should match");
        retval = false;
    }
    

    return false;

}
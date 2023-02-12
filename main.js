document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === "mohon@gmail.com" && password == "mohon"){
        console.log("valid");
    }

    else{
        console.log("Invaild");
    }
})
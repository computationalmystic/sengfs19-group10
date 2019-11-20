function execute(){
    userArea = document.getElementById("user");
    passArea = document.getElementById("pass");
    if(userArea.value == "User" && passArea.value == "Pass"){
        location.href = "sprint2.html"
    }
    else{
        error = document.getElementById("errArea");
        error.innerHTML = "The username or password is incorrect!"
    }
}
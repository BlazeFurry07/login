function login() {
   
    const users = [
        "tvojemama@idk.com.heslo666",
        "kokot@idk.com.0w0",
        "adamjebuzna@kkt.com.jetokkt",
    ]

    let userEmail, userPassword

    userEmail = document.getElementById("emailIn").value
    userPassword = document.getElementById ("passIn").value

    let userlogin = userEmail + "." + userPassword
    
    for(let i = 0; i < users.length; i++)
    if(userlogin === users[i]) {
        alert("Succesfully logged in!")
        break
    }    else alert("Wrong password or e-mail")
}


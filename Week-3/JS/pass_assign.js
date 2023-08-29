function StrongPassword( password)
{
    let pass = password.toLowerCase();
    let result = password.includes("password");
   


    if(password.length < 8)
    {
        console.log("Password Is Too Short");
        return false;
    }
    if(password == pass)
    {
        console.log("Does Not Contain Any Capital Letter");
        return false;
    }
    if(result == true)
    {
        console.log("Your password contain the string password");
        return false;
    }
    else
    {
        return true;
    }
   
}
let pass = "Qwerty123"
StrongPassword(pass)
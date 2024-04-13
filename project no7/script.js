
function check(){
    var Fname = document.forms["mainform"]["Fname"].value;
    var Lname = document.forms["mainform"]["Lname"].value;
    var Email = document.forms["mainform"]["Email"].value;
    var Tel = document.forms["mainform"]["Tel"].value;
    var Otp = document.forms["mainform"]["Otp"].value;
    var pass= document.forms["mainform"]["pass"].value;
    var repass = document.forms["mainform"]["repass"].value;
    if( pass === repass){
        console.log(Fname);
        console.log(Lname);
        console.log(Email);
        console.log(Tel);
        console.log(Otp);
        console.log(pass);
        console.log(repass);
    }
    else{
        alert("please check your password properly....")
    }
}






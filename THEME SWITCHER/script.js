var btn = document.getElementById("btn1");
var btnwhite = document.getElementById("btn2")

btn.addEventListener("click", changeTheme);

function changeTheme(){
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("say").style.color = "white";
    document.getElementById("head").style.color = "gold";
    document.getElementById("author").style.color = "white";
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
}

btnwhite.addEventListener("click", changetheme);
function changetheme(){
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("say").style.color = "black";
    document.getElementById("head").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
}

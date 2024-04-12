
let x = document.getElementById("plus");
let y = document.getElementById("minus");

x.addEventListener("click", visible);
function visible(){
    document.getElementById("answers").style.display = "block";
    document.getElementById("plus").style.display = "none";
    document.getElementById("minus").style.display = "block";
}

y.addEventListener("click", notvisible);
function notvisible(){
    document.getElementById("answers").style.display = "none";
    document.getElementById("plus").style.display = "block";
    document.getElementById("minus").style.display = "none";
}

function myfunction(){
    document.getElementById("answers-2").style.display = "block";
    document.getElementById("plus-2").style.display = "none";
    document.getElementById("minus-2").style.display = "block";
}

function myFunction(){
    document.getElementById("answers-2").style.display = "none";
    document.getElementById("plus-2").style.display = "block";
    document.getElementById("minus-2").style.display = "none";
}

function myvisible(){
    document.getElementById("answers-3").style.display = "block";
    document.getElementById("plus-3").style.display = "none";
    document.getElementById("minus-3").style.display = "block";
}
function myVisible(){
    document.getElementById("answers-3").style.display = "none";
    document.getElementById("plus-3").style.display = "block";
    document.getElementById("minus-3").style.display = "none";
}

function myvisibles(){
    document.getElementById("answers-4").style.display = "block";
    document.getElementById("plus-4").style.display = "none";
    document.getElementById("minus-4").style.display = "block";
}
function myVisibles(){
    document.getElementById("answers-4").style.display = "none";
    document.getElementById("plus-4").style.display = "block";
    document.getElementById("minus-4").style.display = "none";
}
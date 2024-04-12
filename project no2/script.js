let [seconds, minutes, hours, days] = [0,0,0,0];
let timer = null;
function watch(){
    if(seconds <= 60){
        seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
            if(minutes === 60){
                hours++;
                minutes = 0;
                if(hours === 24){
                    days++;
                    hours = 0;
                }
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let d = days < 10 ? "0" + days : days;
    numbers.innerHTML = d +":"+ h +":"+ m +":"+ s;
    console.log(d +":"+ h +":"+ m +":"+ s);
}

function start(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval( watch, 1000);
}

function watchreset(){
    clearInterval(timer);
    [seconds, minutes, hours ,days] = [0,0,0,0];
    numbers.innerHTML = "00:00:00:00"
}
function stop(){
    clearInterval(timer);
}


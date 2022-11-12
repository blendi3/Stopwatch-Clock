

window.onload = function() {

    let seconds = 00;
    let tens = 00;
    let minutes = 00;
    const appendTens = document.querySelector("#tens");
    const appendSeconds = document.querySelector("#seconds");
    const appendMinutes = document.querySelector("#minutes");
    const buttonStart = document.querySelector("#button-start");
    const buttonStop = document.querySelector("#button-stop");
    const buttonReset = document.querySelector("#button-reset");
    let Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function startTimer() {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

    }

}


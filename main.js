const buttonRun = document.getElementById("button");
const authButton = document.getElementById("sign-in-btn");
const popup = document.getElementById("popup-bg");
const authForm = document.querySelectorAll(".auth-form");
const authLinks = Array.from(document.querySelectorAll(".auth-link"));
const timer = document.getElementById("timer");
const progressLine = document.getElementById("progress-line");
const progressLineBg = document.getElementById("progress-line-bg");
const workTime = document.getElementById("work-time");
const restTime = document.getElementById("rest-time");
const sessionTime = document.getElementById("session-time");
let documentTitle = document.getElementById("document-title");

let interval;
let msec = 0;
let count = 0;

// Run timer 
buttonRun.addEventListener("click", () => {
    switch(buttonRun.innerText) {
        case "Start":
            buttonRun.innerText = "End"
            clearInterval(interval);
            interval = setInterval(TimerLogic.tick, 1000);
            break;
        case "End":
            buttonRun.style.display = "none";
            progressLineBg.style.display = "block";
            progress();

            let msecWork = msec;
            let msecRest = msec / 5;
            msec = msec / 5;
            
            let intervalEnds = setInterval(TimerLogic.countDown, 1000);
            
            buttonRun.innerText = "";
            
            let clearingInterval = setInterval(() => {
                                    if(msec <= 0){
                                        clearInterval(intervalEnds);
                                        clearInterval(clearingInterval);
                                        
                                        count++;

                                        progressLineBg.style.display = "none";
                                        buttonRun.innerText = "Start";
                                        buttonRun.style.display = null;

                                        let work = document.createElement("p");
                                        let rest = document.createElement("p");
                                        let num = document.createElement("p");

                                        timerFunc(msecWork, work);
                                        timerFunc(msecRest, rest);
                                        num.innerHTML = `#${count}`;

                                        workTime.append(work);
                                        restTime.append(rest);
                                        sessionTime.append(num);
                                    } 
                                }, 1000)
            break;
    }
})

// Authorization popup
authButton.addEventListener("click", () => {
    fadeIn(popup)
    window.onclick = (e) => {
        if(e.target.classList.contains('fade-in')) {
            fadeOut(popup, 500)
        }
     }
})

// Sign-in & Sign-up switch
 authLinks.map((element) => {
    element.addEventListener("click", () => {
        if(authForm[0].style.display == "flex") { //check if "sign-in" form is display = flex
            authForm[0].style.display = "none"
            authForm[1].style.display = "flex"
        } else {
            authForm[0].style.display = "flex"
            authForm[1].style.display = "none"
        }
    })
 })

// Progressbar logic
function progress() {
    let width = 0,
        id = setInterval(progressStatus, 1000),
        msecCurrent = msec / 5;

    function progressStatus() {
        if(width >= 100){
            clearInterval(id);
            } else {
                width = width + (1000 / msecCurrent * 100 );
                progressLine.style.width = width + "%";
            }
        }
    }

// Animations
function fadeIn(element){
    element.className = 'fade-in'
    element.style.display = 'block';
}

function fadeOut(element, timeout){
    element.className = 'fade-out'

    setTimeout(() => {
        element.style.display = 'none';
    }, timeout);
}

// Timer
function timerFunc(measure, targ) {
    let sec = Math.floor(Math.abs(measure) / 1000 % 60);
    let min = Math.floor((Math.abs(measure) / (1000 * 60)) % 60);
    let hour = Math.floor((Math.abs(measure) / (1000 * 60 * 60) % 60));

    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;

    targ.innerHTML = `${hour}:${min}:${sec}`;
    documentTitle.innerHTML = `${hour}:${min}:${sec} - Flowmodoro`;
}
     
class TimerLogic {
    static tick() {
        if(buttonRun.innerText == "End"){
            msec += 1000;
            timerFunc(msec, timer);
        }
    }

    static countDown() {
        if(buttonRun.style.display = "none"){
            msec = msec - 1000;
            timerFunc(msec, timer);
        }   
    }
}
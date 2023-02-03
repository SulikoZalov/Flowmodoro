const buttonRun = document.getElementById("button");
const timer = document.getElementById("timer");

let msec = 0,
    sec = 0,
    min = 0,
    hour = 0;


function tick() {
   if(buttonRun.innerText == "End"){
        msec += 1000;
        
        sec = Math.floor((msec / 1000) % 60);
        min = Math.floor((msec / (1000 * 60)) % 60)
        hour = Math.floor((msec / (1000 * 60 * 60)));

        if (sec < 10) { 
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML ='0' + hour + ':0' + min + ':0' + sec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':0' + sec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':0' + sec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':' + sec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':' + sec;
                }
            }
        }
    }
   
    
}

function countDown() {
   if(buttonRun.innerText == ""){
    msec = msec - 1000;
    
    sec = Math.floor((msec / 1000) % 60);
    min = Math.floor((msec / (1000 * 60)) % 60)
    hour = Math.floor((msec / (1000 * 60 * 60)));

     if (sec < 10) { 
         if (min < 10) {
             if (hour < 10) {
                 timer.innerHTML ='0' + hour + ':0' + min + ':0' + sec;
             } else {
                 timer.innerHTML = hour + ':0' + min + ':0' + sec;
             }
         } else {
             if (hour < 10) {
                 timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
             } else {
                 timer.innerHTML = hour + ':' + min + ':0' + sec;
             }
       }
    } else {
         if (min < 10) {
             if (hour < 10) {
                timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                timer.innerHTML = hour + ':0' + min + ':' + sec;
            }
         } else {
             if (hour < 10) {
                 timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                 timer.innerHTML = hour + ':' + min + ':' + sec;
            }   
         }
      }
    }  
}

buttonRun.addEventListener("click", () => {
    
    if(buttonRun.innerText == "Start"){
        buttonRun.innerText = "End"
        tick();
        setInterval(tick, 1000)
     } else if (buttonRun.innerText == "End"){
        let timeInterval = setInterval(countDown, 1000)
        
        buttonRun.innerText = ""
        
        setInterval(() => {
            if(msec <= 0){
                clearInterval(timeInterval)
            } 
        }, 1000)
        
     }
})




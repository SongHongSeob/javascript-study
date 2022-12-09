const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minuets  = String(date.getMinutes()).padStart(2,"0");
    const seconds  = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minuets}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);            // 진행되는 함수, 시간 시간은 (적힌 숫자 /1000) 초
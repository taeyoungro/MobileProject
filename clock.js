const clock = document.querySelector("h1#clock")


function getTime(){
    const date = new Date();
    let hour = `${date.getHours()}`;
    let minute = `${date.getMinutes()}`;
    let second = `${date.getSeconds()}`;


    let time = hour.padStart(2, "0")+ ':' + minute.padStart(2, "0")+ ':' + second.padStart(2, "0");
    clock.textContent = time;
}
getTime(); // 1초를 기다리지 않고 브라우저를 실행했을 때 바로 보이기 위해서
setInterval(getTime, 1000); // 1초마다 getTime함수를 부른다
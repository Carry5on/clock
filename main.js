
function setDate() {
    // getting current time
    const date = new Date();

    //hours
    const hoursHand = document.querySelector('.hours-hand');
    const hours = date.getHours();
    const hoursDegrees = (hours * 30) + 90; 
    //const secondsDegrees = (seconds / 60) * 360
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //minutes
    const minutesHand = document.querySelector('.minutes-hand');
    const minutes = date.getMinutes();
    const minutesDegrees = (minutes * 6) + 90; 
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //seconds
    const secondsHand = document.querySelector('.seconds-hand');    
    const seconds = date.getSeconds();
    const secondsDegrees = (seconds * 6) + 90; 
    //const secondsDegrees = (seconds / 60) * 360
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
}
setInterval(setDate, 1000);






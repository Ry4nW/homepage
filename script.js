function Time() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';


    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = 'PM';
    }
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }

    let timeString = `${h}:${m} ${session}`;
    document.getElementById('theTime').innerText = timeString;
}
setInterval(Time, 1000);
Time();


function Greeting() {
    const currentTime = new currentTime();
    let currentHour = currentTime.getHours();

    let greetingMessage = '';
    if (currentHour >= 21) {
        greetingMessage = 'Good night, Ryan';
    } else if (currentHour >= 18) {
        greetingMessage = 'Good evening, Ryan';
    } else if (currentHour >= 12) {
        greetingMessage = 'Good day, Ryan';
    } else {
        greetingMessage = 'Good morning, Ryan';

        document.getElementById('theGreeting').innerText = greetingMessage;
    }
}
Greeting();
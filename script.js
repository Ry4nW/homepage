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
    const NAME = 'Ryan';
    let date = new Date();
    let currentHour = date.getHours();

    let greetingMessage = '';
    if (currentHour >= 21) {
        greetingMessage = `Good night, `;
    } else if (currentHour >= 18) {
        greetingMessage = 'Good evening, ';
    } else if (currentHour >= 12) {
        greetingMessage = `Good day, `;
    } else {
        greetingMessage = `Good morning, `;
    }
    setElementText('theGreeting', greetingMessage, NAME);
    console.log(currentHour, greetingMessage);
}

setInterval(Greeting, 1000);
Greeting();
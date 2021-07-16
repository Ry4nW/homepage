const date = new Date();

function TimeDate() {

    let timeString = new Date(new Date().getTime() + 4).toLocaleTimeString();
    let greetingString;

    let h = (date.getHours() < 10 ? '0' : '') + date.getHours()

    if (h >= 21)
        greetingString = 'Good night, '
    else if (h >= 18)
        greetingString = 'Good evening, '
    else if (h >= 12) {
        greetingString = 'Good afternoon, '
    } else {
        greetingString = 'Good morning, '
    }
    document.getElementById('theTime').innerText = timeString;
    document.getElementById('theGreeting').innerText = `${greetingString}Ryan.`;
}

setInterval(TimeDate, 1);

function calendar() {

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let d = DAYS[date.getDay()];
    let m = MONTHS[date.getMonth()];
    let n = date.getDate();
    let y = date.getFullYear();

    document.getElementById('theDate').innerText = `${d}, ${m} ${n}, ${y}`;
}
setInterval(calendar, 1);

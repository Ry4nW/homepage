const date = new Date();

let h = (date.getHours() < 10 ? '0' : '') + date.getHours();

function TimeDate() {

    let greetingString;
    let timeString = new Date(new Date().getTime() + 4).toLocaleTimeString();

    if (h >= 21) {
        greetingString = 'Good night, ';
    } else if (h >= 18) {
        greetingString = 'Good evening, ';
    } else if (h >= 12) {
        greetingString = 'Good afternoon, ';
    } else {
        greetingString = 'Good morning, ';
    }

    document.getElementById('theTime').innerText = timeString;
    document.getElementById('theGreeting').innerText = `${greetingString}Ryan.`;

}

setInterval(TimeDate, 1);

function setBackground() {

    const imageRandomizer = Math.floor(Math.random() * 4) + 1;

    if (parseInt(h) >= 21) {
        document.body.style.backgroundImage = `url(./backgrounds/night/${imageRandomizer}.jpg)`;

    } else if (parseInt(h) >= 18) {

        const folders = ['night', 'day'];
        const folderRandomizer = Math.floor(Math.random());
        const folderString = folders[folderRandomizer];

        document.body.style.backgroundImage = `url('./backgrounds/${folderString}/${imageRandomizer}.jpg')`;

    } else if (parseInt(h) >= 12) {
        document.body.style.backgroundImage = `url(./backgrounds/day/${imageRandomizer}.jpg)`;

    } else {
        document.body.style.backgroundImage = `url(./backgrounds/morning/${imageRandomizer}.jpg)`;

    }

    document.body.style.backgroundSize = 'cover'; // This will make sure that our background image sufficiently fits.

}
setBackground();

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


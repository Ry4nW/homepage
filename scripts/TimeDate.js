const date = new Date();

let h = (date.getHours() < 10 ? '0' : '') + date.getHours(); // Format our hour count to be display by checking for one digit two digit number.

const TimeDate = () => {

    let greetingString;
    let timeString = new Date(new Date().getTime() + 4).toLocaleTimeString(); // Putting our time this way will make it format to what we want it to.

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

const setBackground = () => {

    const imageRandomizer = Math.floor(Math.random() * 4) + 1;

    if (parseInt(h) >= 21) {
        document.body.style.backgroundImage = `url(./backgrounds/night/${imageRandomizer}.jpg)`;

    } else if (parseInt(h) >= 18) {

        const folders = ['night', 'day'];
        const folderRandomizer = Math.floor(Math.random());
        const folderString = folders[folderRandomizer];

        // 50/50 probability for night or day wallpapers to be picked.
        document.body.style.backgroundImage = `url('./backgrounds/${folderString}/${imageRandomizer}.jpg')`;

    } else if (parseInt(h) >= 12) {
        document.body.style.backgroundImage = `url(./backgrounds/day/${imageRandomizer}.jpg)`;

    } else {
        document.body.style.backgroundImage = `url(./backgrounds/morning/${imageRandomizer}.jpg)`;

    }

    document.body.style.backgroundSize = 'cover'; // This will make sure that our background image covers the whole area.

}

setBackground();
setInterval(setBackground, 600000); // Every 10 minutes.

 const calendar = () => {

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let d = DAYS[date.getDay()];
    let m = MONTHS[date.getMonth()];
    let n = date.getDate();
    let y = date.getFullYear();

    document.getElementById('theDate').innerText = `${d}, ${m} ${n}, ${y}`;

}

setInterval(calendar, 1);

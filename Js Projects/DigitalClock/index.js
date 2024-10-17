let hourSpan = document.getElementById('hour');
let minuteSpan = document.getElementById('minute');
let secondSpan = document.getElementById('second');
let amorpmSpan = document.getElementById("amorpm");

function changeTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hourSpan.innerHTML = hour;
    minuteSpan.innerHTML = minute;
    secondSpan.innerHTML = second;

    let amorpm; // Declare the variable before use

    // Correct the AM/PM logic
    if (hour === 0) {
        amorpm = "AM";
        hour = 12; // Midnight should display as 12 AM
    } else if (hour > 0 && hour < 12) {
        amorpm = "AM";
    } else if (hour >= 12 && hour < 24) {
        amorpm = "PM";
        if (hour > 12) {
            hour = hour - 12; // Convert to 12-hour format for PM times
        }
    }

    hourSpan.innerHTML = hour.toString().padStart(2, '0');
    minuteSpan.innerHTML = minute.toString().padStart(2, '0');
    secondSpan.innerHTML = second.toString().padStart(2, '0');
    amorpmSpan.textContent = amorpm;
}

setInterval(changeTime, 1000);
changeTime();

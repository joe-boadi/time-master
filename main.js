// Create a Clock object
function Clock() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.is24HourFormat = false;
    this.alarmTime = null;
}

// Method to get formatted time
Clock.prototype.getFormattedTime = function() {
    return `${this.pad(this.hours)}:${this.pad(this.minutes)}:${this.pad(this.seconds)}`;
};

// Method to get 12-hour time with AM/PM
Clock.prototype.get12HourTime = function() {
    let hours = this.hours % 12 || 12;
    let ampm = this.hours >= 12 ? 'PM' : 'AM';
    return `${this.pad(hours)}:${this.pad(this.minutes)}:${this.pad(this.seconds)} ${ampm}`;
};

// Helper method to pad single digits with a leading zero
Clock.prototype.pad = function(number) {
    return number < 10 ? '0' + number : number;
};

// Method to toggle between 12-hour and 24-hour formats
Clock.prototype.toggleFormat = function() {
    this.is24HourFormat = !this.is24HourFormat;
};

// Method to set the alarm time
Clock.prototype.setAlarm = function(time) {
    this.alarmTime = time;
};

// Method to check if the alarm should trigger
Clock.prototype.checkAlarm = function() {
    if (this.alarmTime) {
        let currentTime = `${this.pad(this.hours)}:${this.pad(this.minutes)}`;
        if (currentTime === this.alarmTime) {
            document.getElementById('alarmMessage').innerText = 'Alarm! Time up!';
        }
    }
};

// Create a single Clock instance
let clock = new Clock();

// Function to update the clock display
function updateClock() {
    clock.date = new Date();
    clock.hours = clock.date.getHours();
    clock.minutes = clock.date.getMinutes();
    clock.seconds = clock.date.getSeconds();
    let timeDisplay = clock.is24HourFormat ? clock.getFormattedTime() : clock.get12HourTime();
    document.getElementById('clock').innerText = timeDisplay;
    clock.checkAlarm();
}

// Event listener for format toggle button
document.getElementById('toggleFormat').addEventListener('click', function() {
    clock.toggleFormat();
    this.innerText = clock.is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
    updateClock();
});

// Event listener for setting the alarm
document.getElementById('setAlarm').addEventListener('click', function() {
    let alarmTime = document.getElementById('alarmTime').value;
    clock.setAlarm(alarmTime);
    document.getElementById('alarmMessage').innerText = `Alarm set for ${alarmTime}`;
});

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
// Create a Clock object
function Clock() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
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

// Function to update the clock display
function updateClock() {
    let clock = new Clock();
    document.getElementById('clock').innerText = clock.get12HourTime();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
'use strict';

const monthsDisplay = document.querySelector('.months');
const daysDisplay = document.querySelector('.days');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let countdown;

const newYear = new Date(2023, 0, 0, 0, 0, 0);

const GetTimeLeft = function (futureDate) {
  // setting two dates;
  const now = new Date();
  const future = futureDate.getTime(); // converting to millisecondss
  const timeDifference = (future - now.getTime()) / 1000; // getting time difference in seconds

  let days = timeDifference / 60 / 60 / 24; // getting days
  let hours = (days % 1) * 24; // getting hours
  let minutes = (hours % 1) * 60; // getting minutes
  let seconds = (minutes % 1) * 60; // getting seconds
  // getting rid of numbers after float
  [days, hours, minutes, seconds] = [
    Math.floor(days),
    Math.floor(hours),
    Math.floor(minutes),
    Math.floor(seconds),
  ];
  const monthsLeft = new Date(futureDate - now).getMonth(); // getting number of months left
  // uddating display values
  monthsDisplay.innerHTML = `${monthsLeft}`.padStart(2, 0);
  daysDisplay.innerHTML = `${days}`.padStart(2, 0);
  hoursDisplay.innerHTML = `${hours}`.padStart(2, 0);
  minutesDisplay.innerHTML = `${minutes}`.padStart(2, 0);
  secondsDisplay.innerHTML = `${seconds}`.padStart(2, 0);
};

// starting the countdown
countdown = setInterval(() => GetTimeLeft(newYear), 1000);

// clearInterval(countdown);

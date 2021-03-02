class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(
      `${this.selector} [data-value="hours"]`,
    );
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
  }
  updateTimer({ days, hours, mins, secs }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
  setTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = getTimerComponents(this.targetDate - currentTime);
      this.updateTimer(time);
    }, 1000);
  }
}

const getTimerComponents = time => {
  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
    2,
    '0',
  );
  const hours = String(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  ).padStart(2, '0');
  const mins = String(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, '0');
  const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
  return { days, hours, mins, secs };
};

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

newTimer.setTimer();

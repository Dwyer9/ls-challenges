class Clock {
  constructor(minutes) {
    this.minutes = minutes;
  }

  static at(hour, minute = 0) {
    let minutes = hour * 60 + minute;
    return new Clock(minutes);
  }

  toString() {
    let hours = Math.floor(this.minutes / 60);
    let mins = this.minutes % 60;

    return `${this.toTwoDigits(hours)}:${this.toTwoDigits(mins)}`;
  }

  add(minutes) {
    if (minutes > 1440) {
      minutes = minutes % 1440;
    }

    let newMins = this.minutes + minutes;

    if (newMins > 1440) {
      newMins = newMins - 1440;
    }

    return new Clock(newMins);
  }

  subtract(minutes) {
    if (minutes > 1440) {
      minutes = minutes % 1440;
    }

    let newMins = this.minutes - minutes;

    if (newMins < 0) {
      newMins = newMins + 1440;
    }

    return new Clock(newMins);
  }

  isEqual(otherClock) {
    return this.minutes === otherClock.minutes;
  }

  toTwoDigits(time) {
    if (String(time).length === 1) {
      return `0${String(time)}`;
    } else {
      return String(time);
    }
  }
}

module.exports = Clock;

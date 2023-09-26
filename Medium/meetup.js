class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  static days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  static descriptors = {
    first: [1, 7],
    second: [8, 14],
    third: [9, 21],
    fourth: [22, 28],
    fifth: [29, 31],
    teenth: [13, 19],
  };

  day(day, descriptor) {
    let start, finish;
    if (descriptor.toLowerCase() === 'last') {
      [start, finish] = this.getLast();
    } else {
      [start, finish] = Meetup.descriptors[descriptor.toLowerCase()];
    }
    let dayIdx = Meetup.days.indexOf(day.toLowerCase());

    let meetDay;

    for (let i = start; i <= finish; i++) {
      let date = new Date(this.year, this.month, i);

      if (date.getDay() === dayIdx) {
        meetDay = i;
      }
    }

    let meeting = new Date(this.year, this.month, meetDay);
    if (meeting.toString() === 'Invalid Date') {
      return null;
    } else {
      return meeting;
    }
  }

  getLast() {
    if ([0, 2, 4, 6, 7, 9, 11].includes(this.month)) {
      return [25, 31];
    } else if ([3, 5, 8, 10].includes(this.month)) {
      return [24, 30];
    } else {
      return [22, 28];
    }
  }
}

module.exports = Meetup;

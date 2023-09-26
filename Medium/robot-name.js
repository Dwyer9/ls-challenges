class Robot {
  constructor() {
    this.robotName = this.name();
  }

  static names = [];

  name() {
    if (this.robotName) {
      return this.robotName;
    }

    let name = '';

    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 2; i++) {
      let random = Math.floor(Math.random() * letters.length);
      name += letters[random];
    }

    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 10);
      name += String(random);
    }

    if (!Robot.names.includes(name)) {
      Robot.names.push(name);
      return name;
    } else {
      this.robotName = this.name();
    }
  }

  reset() {
    this.robotName = null;
  }
}

module.exports = Robot;

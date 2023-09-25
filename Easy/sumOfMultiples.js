class sumOfMultiples {
  constructor(...args) {
    this.arr = args;
  }

  static to(target) {
    let total = [];
    for (let i = 1; i < target; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        if (!total.includes(i)) total.push(i);
      }
    }

    return total.reduce((acc, el) => acc + el, 0);
  }

  to(target) {
    let total = [];
    for (let i = 0; i < target; i++) {
      if (this.arr.some((el) => i % el === 0)) {
        total.push(i);
      }
    }

    return total.reduce((acc, el) => acc + el, 0);
  }
}

module.exports = sumOfMultiples;

class Octal {
  constructor(num) {
    this.num = num;
  }

  toDecimal() {
    let total = 0;

    if (this.num.includes('8') || this.num.includes('9')) {
      return total;
    }

    for (let i = 0; i < this.num.length; i++) {
      let power = this.num.length - i - 1;
      let num = Number(this.num[i]);

      if (isNaN(num)) {
        return 0;
      }

      total += num * 8 ** power;
    }
    return total;
  }
}

module.exports = Octal;

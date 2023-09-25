class RomanNumeral {
  constructor(num) {
    this.num = String(num);
  }

  toRoman() {
    let ones = this.num[this.num.length - 1];
    let tens = this.num[this.num.length - 2];
    let hundreds = this.num[this.num.length - 3];
    let thousands = this.num[this.num.length - 4];

    let roman = '';

    if (thousands) {
      roman += 'M'.repeat(+thousands);
    }

    if (hundreds) {
      let huns = Number(hundreds);
      if (huns < 4) {
        roman += 'C'.repeat(huns);
      } else if (huns === 4) {
        roman += 'CD';
      } else if (huns === 5) {
        roman += 'D';
      } else if (huns < 9) {
        roman += 'D' + 'C'.repeat(huns - 5);
      } else {
        roman += 'CM';
      }
    }

    if (tens) {
      let val = Number(tens);
      if (val < 4) {
        roman += 'X'.repeat(val);
      } else if (val === 4) {
        roman += 'XL';
      } else if (val === 5) {
        roman += 'L';
      } else if (val < 9) {
        roman += 'L' + 'X'.repeat(val - 5);
      } else {
        roman += 'XC';
      }
    }

    if (ones) {
      let num = Number(ones);
      if (num < 4) {
        roman += 'I'.repeat(num);
      } else if (num === 4) {
        roman += 'IV';
      } else if (num === 5) {
        roman += 'V';
      } else if (num < 9) {
        roman += 'V' + 'I'.repeat(num - 5);
      } else {
        roman += 'IX';
      }
    }

    return roman;
  }
}

module.exports = RomanNumeral;

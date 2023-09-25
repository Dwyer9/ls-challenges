class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error('Must be a positive number');

    let factors = [];

    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }

    let total = factors.reduce((acc, el) => acc + el, 0);

    if (total === num) {
      return 'perfect';
    } else if (total < num) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }
}

module.exports = PerfectNumber;

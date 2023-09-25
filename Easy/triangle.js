class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
    if (this.sides[0] <= 0 || this.sides[0] + this.sides[1] <= this.sides[2]) {
      throw new Error('Invalid triangle!');
    }
  }

  kind() {
    if (this.sides[0] === this.sides[2]) {
      return 'equilateral';
    } else if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2]
    ) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;

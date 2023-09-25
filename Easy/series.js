class Series {
  constructor(string) {
    this.string = string;
  }

  slices(size) {
    if (size > this.string.length) throw new Error('Invalid slice size');
    let result = [];
    for (let i = 0; i <= this.string.length - size; i++) {
      let slice = this.string.slice(i, i + size);
      result.push(slice.split('').map((el) => Number(el)));
    }

    return result;
  }
}

module.exports = Series;

class Diamond {
  static ALPHABET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  static makeDiamond(letter) {
    let index = Diamond.ALPHABET.indexOf(letter);
    let width = 2 * index + 1;

    let string = '';
    for (let i = 0; i <= index; i++) {
      string += Diamond.createRow(i, width, index) + '\n';
    }

    for (let i = index - 1; i >= 0; i--) {
      string += Diamond.createRow(i, width, index) + '\n';
    }

    return string;
  }

  static createRow(letIdx, width, index) {
    if (Diamond.ALPHABET[letIdx] === 'A') {
      return `${' '.repeat(index)}A${' '.repeat(index)}`;
    } else {
      let midGap = letIdx * 2 - 1;
      let endGap = (width - (midGap + 2)) / 2;
      let letter = Diamond.ALPHABET[letIdx];
      return `${' '.repeat(endGap)}${letter}${' '.repeat(
        midGap
      )}${letter}${' '.repeat(endGap)}`;
    }
  }
}

module.exports = Diamond;

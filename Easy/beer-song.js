class BeerSong {
  static verse(num) {
    if (num === 1) {
      return BeerSong.verseOne();
    } else if (num === 0) {
      return BeerSong.verseNone();
    } else {
      return BeerSong.standardVerse(num);
    }
  }

  static verses(start, finish) {
    let string = '';

    for (let i = start; i > finish; i--) {
      string += BeerSong.verse(i) + '\n';
    }

    return string + BeerSong.verse(finish);
  }

  static standardVerse(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${
      num - 1
    } ${num === 2 ? 'bottle' : 'bottles'} of beer on the wall.\n`;
  }

  static verseOne() {
    return (
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles ' +
      'of beer on the wall.\n'
    );
  }

  static verseNone() {
    return (
      'No more bottles of beer on the wall, no more ' +
      'bottles of beer.\nGo to the store and buy some ' +
      'more, 99 bottles of beer on the wall.\n'
    );
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;

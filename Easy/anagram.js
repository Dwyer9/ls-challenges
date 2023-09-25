class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let newWord = arr[i];
      if (
        this.word.toLowerCase().split('').sort().join('') ===
          newWord.toLowerCase().split('').sort().join('') &&
        this.word.toLowerCase() !== newWord.toLowerCase()
      ) {
        result.push(newWord);
      }
    }

    return result;
  }
}

module.exports = Anagram;

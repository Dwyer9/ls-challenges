class DNA {
  constructor(dna) {
    this.dna = dna;
  }

  hammingDistance(compDNA) {
    let shortStrand;
    let longStrand;
    if (this.dna.length > compDNA.length) {
      shortStrand = compDNA;
      longStrand = this.dna;
    } else {
      shortStrand = this.dna;
      longStrand = compDNA;
    }

    let count = 0;

    for (let i = 0; i < shortStrand.length; i++) {
      if (shortStrand[i] !== longStrand[i]) count++;
    }
    return count;
  }
}

module.exports = DNA;

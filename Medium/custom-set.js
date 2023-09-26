class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  size() {
    return this.set.length;
  }

  contains(val) {
    return this.set.includes(val);
  }

  isSubset(otherSet) {
    for (let i = 0; i < this.set.length; i++) {
      if (!otherSet.contains(this.set[i])) {
        return false;
      }
    }
    return true;
  }

  add(val) {
    if (!this.contains(val)) {
      this.set.push(val);
    }
    return this;
  }

  isDisjoint(otherSet) {
    return this.set.every((el) => !otherSet.contains(el));
  }

  isSame(otherSet) {
    return (
      this.set.every((el) => otherSet.contains(el)) &&
      this.size() === otherSet.size()
    );
  }

  intersection(otherSet) {
    let arr = this.set.filter((el) => otherSet.contains(el));
    return new CustomSet(arr);
  }

  difference(otherSet) {
    let arr = this.set.filter((el) => !otherSet.contains(el));
    return new CustomSet(arr);
  }

  union(otherSet) {
    let newSet = new CustomSet(otherSet.set);
    this.set.forEach((el) => newSet.add(el));

    return newSet;
  }
}

module.exports = CustomSet;

// Chain of responsibility
// =======================
class CumulativeSum {
    sum = 0;
    add(a) {
        this.sum += a;
        return this;
    }
}

var sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50));
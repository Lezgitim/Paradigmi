const array = [0, 10, 2, 1, 3, 4, 5, 6];

function sorti(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j + 1] > a[j]) {
        let t = a[j + 1];
        a[j + 1] = a[j];
        a[j] = t;
      }
    }
  }
  return a;
}

console.log(sorti(array));

array.sort((a, b) => a - b);

console.log(array);
function greet(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}`);
  }, 2000);
}
let result = greet("Ronnie");
console.log(result);

function demo(a, b, c) {
  return a + b + c;
}
console.log(demo(1, 2, 3));

function add(x) {
  return x + 5;
}

function multiple(y) {
  return y * 2;
}

let temp = multiple(add(10));
console.log(temp);

function* generateId() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const ids = generateId();

console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3

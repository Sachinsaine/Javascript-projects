// function armstrongNum(num) {
//   let split = num.toString().split("");
//   let result = 0;
//   let arrLength = split.length;

//   for (let i = 0; i < split.length; i++) {
//     result += split[i] ** arrLength;
//   }

//   return result === num ? "Armstrong number" : "Not armstrong number";
// }
// console.log(armstrongNum(153));

function armstrongNum(num) {
  let sum = 0;
  let temp = num;
  let digits = 0;

  let n = num;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum;
}
console.log(armstrongNum(153));

function greet(name) {
  return function () {
    console.log("Hello javascript I'm" + " " + name);
  };
}
let user = greet("sachin");
user();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

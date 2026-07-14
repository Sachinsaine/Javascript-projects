function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1st function");
    }, 1000);
    resolve();
  });
}
function second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2st function");
    });
    resolve();
  }, 2000);
}
function third(callback) {
  setTimeout(() => {
    console.log("3st function");
    callback();
  }, 1000);
}
function four(callback) {
  setTimeout(() => {
    console.log("4st function");
    callback();
  }, 2000);
}

function main() {
  console.log("Other requests processing...");

  first().then(second);
}
main();

let count = 0;
let value = document.querySelector("#counterValue");

document.querySelector("#decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    value.innerHTML = count;
  }
});

document.querySelector("#increment").addEventListener("click", () => {
  count++;
  value.innerHTML = count;
});

document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  value.innerHTML = count;
});

let products = document.querySelector("#productsList");
let addedProducts = document.querySelector("#cart-count");
let allProducts = [];
let inputField = document.querySelector("#search-field");
let addedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
addedProducts.innerHTML = addedItems.length;

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    renderProducts(allProducts);
  })
  .catch((err) => console.log("Error", err));

function renderProducts(productss) {
  products.innerHTML = "";

  productss.forEach((product) => {
    let card = document.createElement("div");

    card.innerHTML = `
        <div class="card-img">
          <span class="badge">
            ${Math.random() > 0.5 ? "NEW" : "SALE"}
          </span>
          <a href="item-details.html">
          <img src="${product.image_link}" alt="${product.name}">
          </a>
        </div>

        <div class="card-content">
          <p class="category">${product.product_type || "makeup"}</p>
          <h2>${product.name}</h2>

          <div class="price-row">
            <p class="price">$${product.price || 20}</p>
          </div>

          <button class="addToCart">ADD TO CART</button>
        </div>
      `;

    let imgLink = card.querySelector("a");

    imgLink.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    });

    let cartBtn = card.querySelector(".addToCart");

    cartBtn.addEventListener("click", () => {
      let existItem = addedItems.some((p) => p.id === product.id);

      if (existItem) {
        return Toastify({
          text: "Already added",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #e8004d, #ff3d75)",
          },
          onClick: function () {},
        }).showToast();
      }

      addedItems.push(product);

      localStorage.setItem("cartItems", JSON.stringify(addedItems));

      addedProducts.innerHTML = addedItems.length;
    });

    products.appendChild(card);
  });
}

inputField.addEventListener("input", () => {
  let value = inputField.value.toLowerCase();
  let filterProducts = allProducts.filter((producutItem) =>
    producutItem.name.toLowerCase().includes(value),
  );
  renderProducts(filterProducts);
});

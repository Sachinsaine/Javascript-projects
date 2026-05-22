let products = document.querySelector("#productsList");
let addedProducts = document.querySelector("#cart-count");
let addedItems = [];
// addedProducts.innerHTML = addedItems.length;

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let card = document.createElement("div");

      card.innerHTML = `
        <div class="card-img">

          <span class="badge">
            ${Math.random() > 0.5 ? "NEW" : "SALE"}
          </span>

          <img src="${item.image_link}" alt="${item.name}">
        </div>

        <div class="card-content">

          <p class="category">
            ${item.product_type || "makeup"}
          </p>

          <h2>${item.name}</h2>

          <div class="price-row">

            <p class="price">
              $${item.price || 20}
            </p>

          </div>

          <button class="addToCart">
            ADD TO CART
          </button>

        </div>
      `;

      let cartBtn = card.querySelector(".addToCart");

      cartBtn.addEventListener("click", () => {
        let existItem = addedItems.some((addedItem) => {
          return addedItem.id === item.id;
        });

        if (existItem) {
          return alert("Already Added");
        }

        addedItems.push(item);
        addedProducts.innerHTML = addedItems.length;
      });

      products.appendChild(card);
    });
  })
  .catch((err) => console.log("Error", err));

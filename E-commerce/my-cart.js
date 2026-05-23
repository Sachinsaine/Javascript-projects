const mycart = document.querySelector("#cart");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
  mycart.innerHTML = "";

  if (cartItems.length === 0) {
    mycart.innerHTML = `
      <div class="empty-cart">
        <span class="empty-icon">🛍️</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="index.html">Continue Shopping</a>
      </div>`;
    return;
  }

  const layout = document.createElement("div");
  layout.className = "cart-layout";

  const list = document.createElement("div");
  list.className = "cart-list";

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.dataset.index = index;

    div.innerHTML = `
      <div class="cart-img-wrap">
        <img src="${item.image_link}" alt="${item.name}">
      </div>

      <div class="cart-info">
        <p class="cart-category">${item.product_type || "makeup"}</p>
        <h3>${item.name}</h3>
        <p class="cart-price">$${item.price || "20.00"}</p>
      </div>

      <div class="cart-actions">
        <button class="buyBtn">Buy Now</button>
        <button class="removeBtn">✕ Remove</button>
      </div>
    `;

    div.querySelector(".removeBtn").addEventListener("click", () => {
      div.classList.add("removing");
      setTimeout(() => {
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        renderCart();
        updateNavBadge();
      }, 280);
    });

    div.querySelector(".buyBtn").addEventListener("click", () => {
      alert(`Proceeding to buy: ${item.name}`);
    });

    list.appendChild(div);
  });

  const subtotal = cartItems.reduce((sum, i) => sum + Number(i.price || 20), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = (subtotal + shipping).toFixed(2);

  const summary = document.createElement("div");
  summary.className = "cart-summary";
  summary.innerHTML = `
    <h3>Order Summary</h3>

    <div class="summary-row">
      <span>Subtotal (${cartItems.length} item${cartItems.length > 1 ? "s" : ""})</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>

    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? "<span style='color:var(--pink)'>Free</span>" : "$" + shipping.toFixed(2)}</span>
    </div>

    <div class="summary-row">
      <span>Tax (estimated)</span>
      <span>$${(subtotal * 0.08).toFixed(2)}</span>
    </div>

    <div class="summary-row total">
      <span>Total</span>
      <span>$${(Number(total) + subtotal * 0.08).toFixed(2)}</span>
    </div>


    <button class="checkout-btn">Proceed to Checkout →</button>

    <p class="summary-note">
      🔒 Secure checkout &nbsp;·&nbsp; Free returns within 30 days<br>
      Free shipping on orders above $50
    </p>
  `;

  layout.appendChild(list);
  layout.appendChild(summary);
  mycart.appendChild(layout);
}

function updateNavBadge() {
  const badge = document.querySelector("#cart-count");
  if (badge) badge.innerHTML = cartItems.length;
}

renderCart();
updateNavBadge();

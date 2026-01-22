// Creating elements for the variables------
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
const quantity = document.getElementById("quantity");
let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(price, qty) {
  totalPrice += price * qty;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  if (event.target.tagName === "BUTTON") {
    const item = event.target.closest("li");
    const price = parseFloat(item.dataset.price);
    const qty = Number(item.dataset.qty);
    updateTotalPrice(-price, qty);
    item.remove();
  }
}

//Adding eventlistener to remove button----
cart.addEventListener("click", removeItem);

//event listener addProductButton
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = Number(productPriceInput.value);
  const qty = Number(quantity.value);
  if (!name || price <= 0 || qty <= 0){
     alert("Please enter an item.");
     return;
  } 
    //creating li tag...
  const items = document.createElement("li");
  items.classList.add("cart-item");
  items.dataset.price = parseFloat (price);

  //creating span tag....
  const productSpan = document.createElement("span");
  productSpan.innerText = name;
  //creating span tag for price..
  const pricespan = document.createElement("span");
  pricespan.innerText = `$${(price * qty).toFixed(2)}`;
    //creating dataset for quantity--
  items.dataset.qty = parseFloat (qty);
  const quantitySpan = document.createElement("span");
  quantitySpan.innerText = `Quantity: ${qty}`;
  //creating button..
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  //creating relationship btw li and spans
  items.appendChild(productSpan);
  items.appendChild(pricespan);
  items.appendChild(quantitySpan);
  items.appendChild(removeButton);
  cart.appendChild(items);
  productNameInput.value = "";
  productPriceInput.value = "";
  quantity.value = "";

  updateTotalPrice(Number (price), Number (qty));
});







// <li class="cart-item" data-price="10">
// <span>Product Name</span>
// <span>$9.99</span>
// <input type="number" value="1" min="1">
// <button>Remove</button>
// </li>

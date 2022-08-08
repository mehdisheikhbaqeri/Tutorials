let products = [
  { id: 1, title: "Album 1", price: "36.66$", img: "./Images/Album 1.png" },
  { id: 2, title: "Album 2", price: "29.63$", img: "./Images/Album 2.png" },
  { id: 3, title: "Album 3", price: "42.66$", img: "./Images/Album 3.png" },
  { id: 4, title: "Album 4", price: "50.39$", img: "./Images/Album 4.png" },
  { id: 5, title: "Shirt", price: "50.39$", img: "./Images/Shirt.png" },
  { id: 6, title: "Coffee", price: "15.39$", img: "./Images/Cofee.png" },
  { id: 7, title: "Album 5", price: "20.39$", img: "./Images/Album 5.jpg" },
  { id: 8, title: "Album 6", price: "33.96$", img: "./Images/Album 6.jpg" },
];

let userBasket = [];

const shopContainer = document.querySelector(".shop-items");
const basketProductsContainer = document.querySelector(".cart-items");
const removeAllProduct = document.querySelector("#remove-all-product");

products.forEach(function (product) {
  let productContainer = document.createElement("div");
  productContainer.classList.add("shop-item");

  let productTitle = document.createElement("span");
  productTitle.classList.add("shop-item-title");
  productTitle.textContent = product.title;

  let productImg = document.createElement("img");
  productImg.classList.add("shop-item-image");
  productImg.setAttribute("src", product.img);

  let productDetails = document.createElement("div");
  productDetails.classList.add("shop-item-details");

  let productPrice = document.createElement("span");
  productPrice.textContent = product.price;
  productPrice.classList.add("shope-item-price");

  let productButton = document.createElement("button");
  productButton.textContent = "Add To Cart";
  productButton.className = "btn btn-primary shop-item-button";
  productButton.addEventListener("click", function () {
    addProductArray(product.id);
  });

  productDetails.append(productPrice, productButton);
  productContainer.append(productTitle, productImg, productDetails);
  shopContainer.append(productContainer);
});

function addProductArray(productId) {
  let mainProduct = products.find(function (product) {
    return product.id === productId;
  });

  userBasket.push(mainProduct);

  basketProduct(userBasket);

  console.log(userBasket);
}

function basketProduct(userBasketArray) {
  basketProductsContainer.textContent = "";

  userBasketArray.forEach(function (product) {
    let basketProductContainer = document.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetails = document.createElement("div");
    basketProductDetails.className = "cart-item cart-column";

    let basketProductImage = document.createElement("img");
    basketProductImage.setAttribute("src", product.img);
    basketProductImage.setAttribute("width", "100");
    basketProductImage.setAttribute("height", "100");
    basketProductImage.classList.add("cart-item-image");

    let basketProductTitle = document.createElement("span");
    basketProductTitle.classList.add("cart-item-title");
    basketProductTitle.textContent = product.title;

    basketProductDetails.append(basketProductImage, basketProductTitle);

    let basketProductPrice = document.createElement("span");
    basketProductPrice.className = "cart-price cart-column";
    basketProductPrice.textContent = product.price;

    let basketProductInputContainer = document.createElement("div");
    basketProductInputContainer.className = "cart-quantity cart-column";

    let basketProductInput = document.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = "1";
    basketProductInput.setAttribute("type", "number");

    let basketProductRemove = document.createElement("button");
    basketProductRemove.className = "btn btn-danger";
    basketProductRemove.textContent = "Remove";
    basketProductRemove.addEventListener("click", function () {
      removeProductBasket(product.id);
    });

    basketProductInputContainer.append(basketProductInput, basketProductRemove);
    basketProductContainer.append(
      basketProductDetails,
      basketProductPrice,
      basketProductInputContainer
    );
    basketProductsContainer.append(basketProductContainer);
  });
}
function removeProductBasket(prodoctId) {
  userBasket = newUserBasket = userBasket.filter(function (product) {
    return product.id !== prodoctId;
  });

  basketProduct(userBasket);

  console.log(userBasket);
}

removeAllProduct.addEventListener("click", function () {
  userBasket = [];
  basketProduct(userBasket);
});

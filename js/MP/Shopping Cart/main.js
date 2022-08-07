let products = [
  { id: 1, title: "Album 1", price: "36.66$", img: "./Images/Album 1.png" },
  { id: 2, title: "Album 2", price: "29.63$", img: "./Images/Album 2.png" },
  { id: 3, title: "Album 3", price: "42.66$", img: "./Images/Album 3.png" },
  { id: 4, title: "Album 4", price: "50.39$", img: "./Images/Album 4.png" },
  { id: 4, title: "Shirt", price: "50.39$", img: "./Images/Shirt.png" },
  { id: 4, title: "Coffee", price: "15.39$", img: "./Images/Cofee.png" },
  { id: 4, title: "Album 5", price: "20.39$", img: "./Images/Album 5.jpg" },
  { id: 4, title: "Album 6", price: "33.96$", img: "./Images/Album 6.jpg" },
];

const shopContainer = document.querySelector(".shop-items");

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

  
  productDetails.append(productPrice, productButton);
  productContainer.append(productTitle, productImg, productDetails);
  shopContainer.append(productContainer);
});

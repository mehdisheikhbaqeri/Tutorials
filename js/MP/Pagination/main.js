const listItems = [
  { id: 1, name: "Mehdi", family: "Baqeri" },
  { id: 2, name: "Anahid", family: "Hemmat" },
  { id: 3, name: "Hasan", family: "Saber" },
  { id: 4, name: "Ashkan", family: "Delha" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },
  { id: 6, name: "Kiana", family: "Behrouz Far" },
  { id: 7, name: "Kimmia", family: "Behrouz Far" },
  { id: 8, name: "Alireza", family: "Dalvand" },
  { id: 9, name: "Pourya", family: "Gazizadeh" },
  { id: 10, name: "Arad", family: "Hasanpur" },
  { id: 11, name: "Benyamin", family: "naydi" },
  { id: 12, name: "David", family: "Beckham" },
  { id: 13, name: "Manchester", family: "United" },
  { id: 14, name: "Perspolis", family: "Iran" },
  { id: 15, name: "Coffee", family: "Espersso" },
  { id: 16, name: "Caramel", family: "Makiato" },
  { id: 17, name: "B", family: "Plus" },
  { id: 18, name: "Podcast", family: "Ravcast" },
  { id: 19, name: "Podcast", family: "Majon" },
  { id: 20, name: "Podcast", family: "Channel B" },
  { id: 21, name: "Podcast", family: "Rukh" },
  { id: 22, name: "Podcast", family: "Dialogcast" },
];

let userListContainer = document.querySelector("#list");
let paginationContainer = document.querySelector("#pagination");

let currentPage = 1;
let rowsCount = 5;

function displayUesrsList(
  allUesrsArray,
  usersContainer,
  rowsCount,
  currentPage
) {
  usersContainer.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = allUesrsArray.slice(startIndex, endIndex);

  paginatedUsers.forEach(function (user) {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + " " + user.family;

    usersContainer.appendChild(userElement);
  });

  console.log(paginatedUsers);
}

function setupPagination(allUesrsArray, paginationContainer, rowsCount) {
  paginationContainer.textContent = " ";

  let pages = Math.ceil(allUesrsArray.length / rowsCount);

  for (let i = 1; i < pages + 1; i++) {
    let btn = btnPages(i, allUesrsArray);
    paginationContainer.append(btn);
  }
}

function btnPages(page, allUesrsArray) {
  let button = document.createElement("button");
  button.textContent = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage);

    let numPage = document.querySelector("button.active");
    numPage.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);

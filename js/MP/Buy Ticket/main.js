let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countrusCity = {
  Iran: ["Tehran", "Tabriz", "Shiraz", "Esfehan", "Bandar Abas", "Mashhad"],
  UAE: ["Dubai", "Abozai", "Sharjeh", "Al Ein"],
  England: ["Manchester", "London", "Leedz", "Watford", "Birmangam"],
};

countrySelectBox.addEventListener("change", function () {
  console.log(countrySelectBox);

  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City</option>";
  } else {
    let mainCountryName = countrySelectBox.value;
    let mainCities = countrusCity[mainCountryName];

    citySelect.innerHTML = "";

    mainCities.forEach(function (city) {
      // console.log(city);
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
  //   console.log(mainCities);
});

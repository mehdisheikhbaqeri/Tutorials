let city = {
  teran: ["tehran", "damavand", "rodehen"],
  fars: ["shiraz", "fasa", "marvdasht"],
  ardebil: ["ardebil", "meshkinshahr", "astara"],
  gilan: ["rasht", "anzali", "chalus"],
};

let start = prompt("Tehran , Fars ,Ardebil or Gilan ");
let mainCity = city[start];

mainCity.forEach(function (cities) {
  console.log(cities);
});

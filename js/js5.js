function remove(arr = [1, 2, 3, 4], index = 1) {
  let arr1 = arr.splice(index, 1);
  return arr;
}
console.log(remove());

// mehdi deqat kon

function mehdi(Num) {
  let newNum = Num.map((number) => {
    if (number > 100) {
      return "100%";
    } else if (number % 1 !== 0) {
      let n = number.toFixed(2);
      return parseFloat(n) + "%";
    } else {
      return number + "%";
    }
  });
  return newNum;
}
console.log(mehdi([23, 18.103, 187.2, 0.372]));

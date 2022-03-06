//for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log("deniz");
// }

const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < 5; i++) {
//   arr.push(i);
// }

// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   //   sum += arr[i];
//   sum = sum + arr[i];

//   //   sum = 0 + 1; // sum=1
//   //   sum = 1 + 2; //sum =3

//   //   sum = 3 + 3; //sum =6
// }

//0 100 even

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("even" + i);
//   }
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i + "even");
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log("odd" + i);
//   }
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i + "even");
// }

// for (let i = 25; i >= 0; i--) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// sole.log(sum);

// let num = 0;

// while (num !== 0) {
//   console.log(num);
//   num--;
// }

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
    if (j === 4) break;
  }
}

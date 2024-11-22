let obj = {
  price1: 100,
  price2: 150,
  price3: 200,
  price4: 100,
  price5: 150,
};
var test = 0;
for (price in obj) {
  test += obj[price];
  console.log(obj[price]);
}
console.log(test);

let array = [
  { id: 1, name: "apple" },
  { id: 2, name: "watermelon" },
  { id: 3, name: "qiwi" },
  { id: 4, name: "lemon" },
];
let result = array.map((obj) => Object.values(obj));
console.log(result);

function logString(...args) {
  const result = args.join(" ") + "";
  console.log(result);
}
logString("Hello", "my", "world!");

logString("Вася", "Петя", "Коля");
function logString(...test) {
  console.log("мой массив =", test);
}
function logString(...test) {
  console.log(test.join(", "));
}

function checkBookAutor(book) {
  if (book.autor === undefined) {
  } else {
  }
}

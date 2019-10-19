// let options = {
//     width: 1024,
//     height: 1024,
// //     name: "test"
// // };

// // console.log(options.name);

// // options.bool = false;
// // options.colors = {
// //     border: "black",
// //     bg: "red"
// // };

// // delete options.bool;

// // console.log(options);

// // for (let key in options) {
// //     console.log('Svoistvo ' + key + ' imeet znachenie ' + options[key])
// // }


// // console.log(Object.keys(options).length);


// // let arr = ["first", 2, 3, 'four', 5];

// // // for(let i = 0; i < arr.length; i++) {
// // //     console.log(arr[i]);
// // // }

// // // arr.pop(); // udalenie c konca
// // // arr.push('5'); // dobavlenie v konec massiva
// // // arr.shift(); // udalenie c nacala
// // // arr.unshift('1'); //dobavlenie v nachalo massiva

// // arr.forEach(function(item, i, mass) {
// //     console.log(i + ': ' + item + " (massiv: " + mass + ')');
// // });

// // console.log(arr);

// // /////////////////////////////
// // let mass = [1,3,4,6,7];

// // for (let key in mass) {
// //     console.log(mass[key]);
// // }

// // // libo nujno ispolzovat' cikl (for of)

// // let mass = [1,3,4,6,7];

// // for (let key of mass) {
// //     console.log(key);
// // }

// /////////////////////////////////

// // let ans = prompt('', ''),
// //     arr = [];

// // arr = ans.split(', ');
// // console.log(arr);

// // let arr = ['aww', 'zz0', 'pof', 'sda'],
// //     i = arr.join(' ');  // join - perevodit v stroku

// // console.log(i);

// // let arr = [1,65,4,2,70,66,15],
// //     i = arr.sort(compareNum);  // sort -sortiruet po alfavitu i kak ctroki!

// // function compareNum(a,b) {
// //     return a-b;
// // }

// // console.log(arr);

// // let arr = [1,4,'sdf','324',6,8,7,10,13];

// // //arr.splice(3, 6, 10);

// // console.log(arr);
// // console.log(arr.slice(1, 6));
// // console.log(arr.reverse());
// // console.log(arr);


// var fruits = ['Яблоко', 'Банан'];

// var newLength = fruits.push('Апельсин');
// console.log(fruits);
// console.log(newLength);
// fruits.forEach(function(item, index) {
//     console.log(item, index);
// });
// var last = fruits.pop(); // удалим Апельсин (из конца)
// console.log(fruits);

// var first = fruits.shift(); // удалим Яблоко (из начала)
// console.log(fruits);
// var newLength = fruits.unshift('Клубника') // добавляет в начало
// console.log(fruits);
// fruits.push('Манго');
// console.log(fruits);
// var pos = fruits.indexOf('Банан');
// console.log(pos);
// fruits.push("арбуз", "малина", "пчелы")
// console.log(fruits);
// var shallowCopy = fruits.slice(); // так можно создать копию массива
// var removedItems = fruits.splice(1,3);
// console.log(removedItems);
// console.log(fruits);
// console.log(shallowCopy);


// var promise = {
//     'var'  : 'text',
//     'array': [1, 2, 3, 4]
//   };
  
// promise.array.push(8,2,10);
// console.log(promise['array']);

var fruits = [];
fruits.push('банан', 'яблоко', 'персик');

console.log(fruits.length); // 3
fruits[5] = 'манго';
console.log(fruits[5]);             // 'манго'
console.log(Object.keys(fruits));   // ['0', '1', '2', '5']
console.log(fruits.length);         // 6
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.observe(fruits));


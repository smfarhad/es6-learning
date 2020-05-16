// let numbers = [1, 2, 3];
// let [a, b, c] = numbers;
// //console.log(c);
// console.log(numbers);
// let numbers = [1, 2, 3];
// let [a, b, c, d] = numbers;
// //console.log(c);
// console.log(d);
// let numbers = [1, 2, 3];
// let [a, ...b] = numbers;
// console.log(a);
// console.log(b);
// let numbers = [1, 2, 3];
// let [a, b, c, d = "default"] = numbers;
// console.log(a);
// console.log(b);
// console.log(d);

// let numbers = [1, 2, 3];
// let [a, b, c, d = "default"] = numbers;
// console.log(a);
// console.log(b);
// console.log(d);

// let a = 5;
// let b = 10;

// [b, a] = [a, b]
// console.log(a);
// console.log(b);

// let numbers = [10, 20, 30];
// let [a, , c] = numbers;
// console.log(a);
// console.log(c);


let obj = {
    name: 'Max',
    age: 27,
    details() {
        console.log("Hello there");
    }
};

let { name, age, details: hello } = obj;
console.log(name, age);
hello();


















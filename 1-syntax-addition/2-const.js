// // works
// const AGE = 27;
// console.log(AGE);

// // NOT Works
// const AGE;
// AGE = 27;
// console.log(AGE);

// // WORKS Becauge Referece
// const AGES = [12, 16, 20];
// AGES.push(30);
// console.log(AGES);

// Object WORKS Becauge Referece
const OBJ = {
    age: 27
};
OBJ.age = 30;
console.log(OBJ);
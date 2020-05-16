function sumUp(...addNum) {
    console.log(addNum);
    let result = 0;
    for (let i = 0; i < addNum.length; i++) {
        result += addNum[i];
    }
    return result;
}
console.log(sumUp(10, 20, 30, 40));

// // With array
// let numbers = [10, 20, 30, 40];
// function sumUp(addNum) {
//     let result = 0;
//     for (let i = 0; i < addNum.length; i++) {
//         result += addNum[i];
//     }
//     return result;
// }
// console.log(sumUp(numbers));
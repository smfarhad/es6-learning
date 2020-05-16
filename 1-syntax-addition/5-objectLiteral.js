let name = 'Farhad';
let age = 31;
let gender = "Male";
let genderField = "gender";

let obj = {
    name: "Parvej",
    age,
    [genderField]: "Male",
    // userDetails() {
    //     return 'Name : ' + this.name + ' Age :' + age;
    // }

    // "userDetails"() {
    //     return 'Name : ' + this.name + ' Age :' + age;
    // }
    // "user Details"() {
    //     return 'Name : ' + this.name + ' Age :' + age;
    // }
    "user Details"() {
        return 'Name : ' + this.name + ' Age :' + age;
    }
}
//console.log(obj.userDetails());
//console.log(obj["userDetails"]());
//console.log(obj["user Details"]());
console.log(obj);
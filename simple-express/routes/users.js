const express = require("express");
const router = express.Router();

const contacts = [
  { id: "1", username: "Felix", surname: "Brown", email: "felix@test.com" },
  { id: "2", username: "Sonya", surname: "Redhead", email: "sonya@test.com" },
  { id: "3", username: "Conan", surname: "Barbarian", email: "conan@test.com" },
];
/ GET users listing. /;
router.get("/", function (req, res, next) {
  res.json(contacts);
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const contact = contacts.filter((el) => el.id === id);
  res.json(contact);
});

module.exports = router;

// var arrA = [1, 2];
// var arrB = arrA;
// arrA.push(3);
// console.log(arrB);
// arrA = [4, 5];
// console.log(arrB);
//
// const array = [3, 2, 1, 3, 2, 5];
// const el = array[array.length - 1];
// console.log("el", array.pop());
// const filtered = array.filter((el, index) => array.indexOf(el) === index);
// console.log("filtered", filtered);
///
// let str = "test";
// console.log(str[0]);
// // str[0] = "T";
// console.log(str);
// console.log(getUsersApiUrl());

// var BASE_URL = "/api/1";

// function getUsersApiUrl() {
//   return BASE_URL + "/users";
// }
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function createCar(owner) {
//   return {
//     id: 1,
//     title: "Tesla Model X",
//     getOwner: owner.getFullName(),
//   };
// }

// const myCar = createCar(user);

// console.log(myCar.getOwner);

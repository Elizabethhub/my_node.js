import users from "./users.js";
import { getCurrentMonth } from "./date/index.js";
console.log("users", users);
const currentMonth = getCurrentMonth();
console.log("currentMonth", currentMonth);

var arr = [1, 3, 4, 3, 6, 3, 1, 5, 5, 4, 3, 3, 5, 8, 2, 1, 2];
const newArr = arr.filter((el, index, origArray) => origArray.indexOf(el) === index);
console.log("newArr", newArr);

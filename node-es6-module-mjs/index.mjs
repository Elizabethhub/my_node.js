import users from "./users.mjs";
import { getCurrentMonth } from "./date/index.mjs";
console.log("users", users);
const currentMonth = getCurrentMonth();
console.log("currentMonth", currentMonth);

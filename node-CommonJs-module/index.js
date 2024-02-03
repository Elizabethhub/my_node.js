//CommonJS
//import from module
const nodemon = require("nodemon");
// import from file
const obj = require("./users");
console.log("users", obj);

const { admins } = require("./users");
console.log("admin", admins);

// const { getCurrentMonth, isLeapYear } = require("./date");
// const currentMonth = getCurrentMonth();
// console.log("currentMonth", `Now ${currentMonth} month`);

//to call at the import time only in CommonJS and not in es6
const currentMonth = require("./date").getCurrentMonth();
console.log("currentMonth", `Now ${currentMonth} month`);

const { program } = require("commander");
program.option("--first").option("-s, --separator <char>");

program.parse();

const options = program.opts();
console.log("options", options);
const limit = options.first ? 1 : undefined;
console.log("limit", limit);
console.log(program.args[0].split(options.separator, limit));

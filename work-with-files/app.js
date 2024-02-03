// const fs = require("fs/promises");
// const fs = require("fs").promises; //same sence

/*
const readFile = async () => {
  const text = await fs.readFile("./files/file.txt", "utf-8");
  // const buffer = await fs.readFile("./files/file.txt");
  // console.log("data", buffer);
  // const text = buffer.toString();
  console.log("text", text);
};
readFile();
*/

/*
const addText = async () => {
  //only write and do not return file content -> console undefined
  // const result = await fs.appendFile("./files/file.txt", "yes");// to the end
  const result = await fs.appendFile("./files/file.txt", "\nyes"); // from the new row
  console.log("result", result);
};
addText();
*/

// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file.txt", "Hello world!");
//   console.log("result", result);
// };
// replaceText();

//callback hell
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log("error", error);
//   console.log("data", data);
// });

//promise ver
// fs.readFile("./files/file.txt")
//   .then((data) => console.log("data", data))
//   .catch((error) => console.log("error", error.message));

import * as foodService from "./foods/index.js";

const invokeAction = async ({ action, id, name, weight }) => {
  switch (action) {
    case "list":
      const allFoods = await foodService.getAllFoods();
      return console.log("allFoods", allFoods);
    case "getById":
      const oneFood = await foodService.getFoodById(id);
      return console.log("oneFood", oneFood);
    case "add":
      const newfood = await foodService.addFood({ name, weight });
      return console.log("newfood", newfood);
    default:
      console.log('"Unknown action"', "Unknown action");
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "bbjbjkb" });
invokeAction({ action: "add", name: "cheese", weight: 100 });

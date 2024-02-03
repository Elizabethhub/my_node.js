import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const foodPatch = path.resolve("foods", "food.json");
// const foodPatch = path.resojoin(__dirname, "foods.json"); // commonJS only

export const getAllFoods = async () => {
  const buffer = await fs.readFile(foodPatch);
  return JSON.parse(buffer);
};

export const getFoodById = async (id) => {
  const foods = await getAllFoods();
  const result = foods.find((item) => item.id === id);
  return result || null;
};

export const addFood = async (data) => {
  const foods = await getAllFoods();
  const newFood = {
    id: nanoid(),
    ...data,
  };
  foods.push(newFood);
  await fs.writeFile(foodPatch, JSON.stringify(foods, null, 2));
  return newFood;
};

export const updateFoodById = async (id, data) => {
  const foods = await getAllFoods();
  const index = foods.findIndex((item) => item.id === id);
};

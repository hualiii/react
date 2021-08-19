import { ADD, SUB } from "./constant";
export const createAdd = data => ({ type: ADD, data });
export const createSub = data => ({ type: SUB, data });

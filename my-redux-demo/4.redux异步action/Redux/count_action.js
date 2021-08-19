import { ADD, SUB } from "./constant";
export const createAdd = data => ({ type: ADD, data });
export const createSub = data => ({ type: SUB, data });
export const createAsyncAdd = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAdd(data))
    }, 500)
  }
}
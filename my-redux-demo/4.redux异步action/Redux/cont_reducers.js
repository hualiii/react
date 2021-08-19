import { ADD, SUB } from "./constant";
const initPreState = 0;

function contReducers(preState = initPreState, action) {
    if (preState === undefined) {
        preState = 0
    }
    let { type, data } = action;
    switch (type) {
        case ADD:
            return preState + data;
        case SUB:
            return preState - data;
        default:
            return preState;
    }
}

export default contReducers
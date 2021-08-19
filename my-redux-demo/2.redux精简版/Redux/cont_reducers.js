const initPreState = 0;

function contReducers(preState = initPreState, action) {
    if (preState === undefined) {
        preState = 0
    }
    let { type, data } = action;
    switch (type) {
        case "add":
            return preState + data;
        case "sub":
            return preState - data;
        default:
            return preState;
    }
}

export default contReducers
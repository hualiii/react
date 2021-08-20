import {ADD_PERSON} from "../constant";

const initPerson = [{name: "tom", age: 18}];

function createPersonReducers(preState = initPerson, action) {
    console.log(preState)
    let {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}

export default createPersonReducers
import { createStore, applyMiddleware,combineReducers } from "redux";
import contReducers from "./reducers/cont";
import createPersonReducers from "./reducers/persons";
import thunk from "redux-thunk";
const allReducers = combineReducers({
    count:contReducers,
    person:createPersonReducers
})
export default createStore(allReducers, applyMiddleware(thunk));
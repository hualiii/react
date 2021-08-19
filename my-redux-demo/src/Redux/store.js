import { createStore, applyMiddleware } from "redux";
import contReducers from "./cont_reducers";
import thunk from "redux-thunk";
export default createStore(contReducers, applyMiddleware(thunk));
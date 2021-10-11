import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer from "./app-reducer";
import subjectReducer from "./subject-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    appReducer,
    subjectReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
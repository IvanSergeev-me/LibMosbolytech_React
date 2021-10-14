import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import subjectReducer from "./subject-reducer";
//Файл создания стора

//Объединяем редюсеры
let reducers = combineReducers({
    appInit: appReducer,
    subjectReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//Экспортируем тип стейта и сам стейт
export type RootState = ReturnType<typeof reducers>
export default store;
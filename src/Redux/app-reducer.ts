
import { ActionTypes, AppActionList, subjectsState } from "../Types/types";

//Файл типизированный редюсер
export let initialState:subjectsState = {
    loading:false,
    subjects:[]
 };
const appReducer = (state:subjectsState = initialState , action: AppActionList) => {
    
    switch (action.type) {
        case ActionTypes.SET_SUBJECTS:
            return { ...state, subjects:action.subjects }
        case ActionTypes.FETCH_LOADING:
            return { ...state, loading:state.loading?false:true } 
        default: return state;
    };
};


export default appReducer;

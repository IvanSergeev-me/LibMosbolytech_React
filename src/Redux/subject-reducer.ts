
import { ActionTypes, SubjectActionList, subjectState } from "../Types/types";

//Файл типизированный редюсер
export let initialState:subjectState = {
    subject:
        {
            title:undefined,
            links:[
               {
                  name:"",
                  url:""
               },
            ],
            prepods:[
               {
                  name:"",
                  email:"",
                  other:null
               },
            ]
         },
    loading:false,
   
 };
const subjectReducer = (state:subjectState = initialState , action: SubjectActionList) => {
    
    switch (action.type) {
        case ActionTypes.SET_SUBJECT:{
            return{
                ...state,
               subject: action.subject
            }
        }
        case ActionTypes.FETCH_LOADING:{
            return { ...state, loading:state.loading?false:true } 
        }
        case ActionTypes.CLEAR_STATE:{
            return {...initialState}
        }
        default: return state;
    };
};


export default subjectReducer;
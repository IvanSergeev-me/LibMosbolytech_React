
import { ActionTypes, SubjectActionList, subjectState } from "../Types/types";

//Файл типизированный редюсер
export let initialState:subjectState = {
    subject:
        {
            title:"Загрузка",
            links:[
               {
                  name:"Загрузка",
                  url:"Загрузка"
               },
            ],
            prepods:[
               {
                  name:"Загрузка",
                  email:"Загрузка",
                  other:null
               },
            ]
         },
    loading:false
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
        default: return state;
    };
};


export default subjectReducer;
import { SubjectsAPI } from "../API/API";

const SET_SUBJECTS = "SET_SUBJECTS";

let initialState = {
    subjects:[
        {id:0, title:"Загрузка"},    
    ]
};
const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_SUBJECTS:{
            return{
               ...state,
               subjects: action.subjects
            }
        }
        default: return state;
    };
};

const setSubjects = (subjects) => ({type:SET_SUBJECTS, subjects});
export const  initialize = () =>{
    return(dispatch) =>{
        SubjectsAPI.getSubjects()
        .then(response =>{
            try{
                
                dispatch(setSubjects(response.data.subjects));  
            }
            catch(e){
                  console.log(e);
            } 
        });
        
    };
};
export default appReducer;


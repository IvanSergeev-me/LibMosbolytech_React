import {SubjectsAPI} from '../API/API.js';

const SET_SUBJECT = "SET_SUBJECT";
let initialState = {
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
         }
    
};
const subjectReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_SUBJECT:{
            return{
               subject: action.subject
            }
        }
        default: return state;
    };
};
const setSubject = (subject) => ({type:SET_SUBJECT, subject});
export const  setSubjectThunk = (id) =>{
    return(dispatch) =>{
        SubjectsAPI.getSubject(id)
        .then(response =>{
         
               dispatch(setSubject(response.data));  
        });       
    };
};
export default subjectReducer;

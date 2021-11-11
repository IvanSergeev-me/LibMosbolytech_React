import { Dispatch } from "react";
import { SubjectsAPI } from "../../API/API";
import { ActionTypes, AppActionList, SubjectActionList } from "../../Types/types";

//В этом файле хранятся все thunk-функции

//Получает все предметы
export const fetchSubjects = () =>{
    return (dispatch: Dispatch<AppActionList>) =>{       
        SubjectsAPI.getSubjects()
        .then(response =>{
            try{
                dispatch({type:ActionTypes.FETCH_LOADING});  
                dispatch({type:ActionTypes.SET_SUBJECTS, subjects:response.data.subjects})
                dispatch({type:ActionTypes.FETCH_LOADING});
            }
            catch(e){
                  console.log(e);
            } 
        });
    }
}
//Получает инфо для конкретного предмета по id
export const setSubject = (id:number) =>{
    return (dispatch: Dispatch<SubjectActionList>) =>{
        SubjectsAPI.getSubject(id)
        .then(response =>{
            try{
                dispatch({type:ActionTypes.FETCH_LOADING});  
                dispatch({type:ActionTypes.SET_SUBJECT, subject:response.data})
                dispatch({type:ActionTypes.FETCH_LOADING});
            }
            catch(e){
                  console.log(e);
            } 
        });
    }
}
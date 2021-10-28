import React, { useEffect } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { appTypedSelector } from "../Hooks/appTypedSelector";
import { useActions } from "../Hooks/useActions";
import { fetchSubjects } from "../Redux/ActionCreators/thunks";

//Компонента всех предметов
const Subjects:React.FC= ()=>{
    const {subjects, loading}= appTypedSelector(state => state.appInit);
    //thunk'у достаем из функции bindActionCreators, в которой есть useDispatch
    const {fetchSubjects} = useActions();
  
    useEffect(()=>{
        if(subjects.length === 0) fetchSubjects();
       
    }, []);
    if (!subjects.length) return (null);
    return(
        <div>
             {subjects.map(s=><NavLink className="botr" key={s.id} to={`/subject/${s.id} `}>{s.name}</NavLink>)}
            <a className="botr" href="https://rasp.dmami.ru/?191-361">Расписание 191-361</a>
        </div>
    )
}
export default Subjects;

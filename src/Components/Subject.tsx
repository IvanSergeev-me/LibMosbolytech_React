import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router";
import { NavLink, useParams } from "react-router-dom";
import { appTypedSelector } from "../Hooks/appTypedSelector";
import { useActions } from "../Hooks/useActions";



const Subject:React.FC =(props)=>{
        const {setSubject} = useActions();
    
        
        type QuizParams = {
            id: string;
          };   
        const { id } = useParams<QuizParams>();
       
        const {subject, loading}= appTypedSelector(state => state.subjectReducer);
        let subjectInfo = subject;
        let subjectLinks = null;
        let subjectPrepods = null;
        useEffect(()=>{
            var id_number: number = +id;
            setSubject(id_number)
        },[]);

        //Индийские программисты
        if(subjectInfo.title === null) {subjectInfo.title=undefined; return (<Redirect to={"/"}/>);};
        if(subjectInfo.title === undefined) return (null);
        
            subjectLinks = subjectInfo.links?.map(l=>{return(<a className='list-group-item list-group-item-action' href={l.url}>{l.name}</a>)});
            subjectPrepods = subjectInfo.prepods?.map(prepod=>{return(
                <div className="list-group-item list-group-item-action">
                    <p>{prepod.name}</p>
                    {prepod.email?<p><b>email: </b>{prepod.email}</p>:null}
                    {prepod.other?<p><b>Другое: </b>{prepod.other}</p>:null}
                </div>)});
        
        return ( 
                    <div className="list-group" >
                        <div className="list-group-item list-group-item-action">
                            <h2>{subjectInfo.title}</h2>
                        </div>
                        <div>
                            {subjectLinks}
                        </div>
                        <div className="list-group-item list-group-item-action"><h4>Преподаватели</h4></div>
                        <div>
                            {subjectPrepods}
                        </div>
                        
                        <h4><p><NavLink to="/" className="list-group-item list-group-item-action" activeClassName="list-group-item list-group-item-action">В меню</NavLink></p></h4>
                </div>
                )
        
      
    
}

export default withRouter(Subject)
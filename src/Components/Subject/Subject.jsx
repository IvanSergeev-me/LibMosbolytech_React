import React from "react";
import { connect} from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import {setSubjectThunk} from "../../Redux/subject-reducer.js";

class Subject extends React.Component{
    
    constructor(props){
        super(props)
    }
    componentDidMount =()=>{
        this.props.setSubjectThunk(this.props.match.params.id);
    }
    render = () =>{
        let subjId = this.props.match.params.id;
        
        let subjectInfo = this.props.subject;
        console.log(subjectInfo)
        let subjectLinks = null;
        let subjectPrepods = null;
        if(subjectInfo!=undefined || subjectInfo!= null){
            subjectLinks = subjectInfo.links.map(l=>{return(<a className='list-group-item list-group-item-action' href={l.url}>{l.name}</a>)});
            subjectPrepods = subjectInfo.prepods.map(prepod=>{return(
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
                        
                        <h4><p><a href=".." className="list-group-item list-group-item-action">В меню</a></p></h4>
                </div>
                )
        }
        else return (<div className="list-group" >
        <div className="list-group-item list-group-item-action">
            <h2>Такого предмета нет</h2>
           
        </div>
        <h4><p><a href=".." className="list-group-item list-group-item-action ">В меню</a></p></h4></div> )
    }
    
}
let mapStateToProps = (state) =>({
    subject: state.subjectReducer.subject
})
export default compose(connect(mapStateToProps, {setSubjectThunk})
,withRouter,
)(Subject);
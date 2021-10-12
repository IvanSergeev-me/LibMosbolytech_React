import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {initialize} from "../../Redux/app-reducer.js";
let SubjectCard = (props)=>{
    return(
        <p>
            <NavLink to={`/subject/${props.id}`} className="botr">{props.name}</NavLink>
        </p>
    )
    
}
class Subjects extends React.PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
        this.props.initialize();
    }
    render=()=>{
        let subjects_arr = this.props.subjects.subjects;

        return(
            <div>
                {subjects_arr.map(s=>{return <SubjectCard key={s.id} id={s.id} name={s.name}/>})}
                <a  className="botr" href="https://rasp.dmami.ru/">Расписание 191-361</a>
            </div>
        )
    }
}
let mapStateToProps = (state) =>({
    subjects: state.appReducer,
});
export default connect(mapStateToProps,{initialize})(Subjects);
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
let SubjectCard = (props)=>{
    return(
        <p>
            <NavLink to={`/subject/${props.id}`} className="botr">{props.title}</NavLink>
        </p>
    )
    
}
class Subjects extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render=()=>{
        let subjects_arr = this.props.subjects.subjects;

        return(
            <div>
                {subjects_arr.map(s=>{return <SubjectCard key={s.id} id={s.id} title={s.title}/>})}
                <a  className="botr" href="https://rasp.dmami.ru/">Расписание 191-361</a>
            </div>
        )
    }
}
let mapStateToProps = (state) =>({
    subjects: state.appReducer,
});
export default connect(mapStateToProps,{})(Subjects);
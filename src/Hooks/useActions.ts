import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActionCreators from '../Redux/ActionCreators/thunks'


//Хук, который возвращает все thunk и диспатч с помощью хука useDispatch()
export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(userActionCreators, dispatch)
}


//const SET_INIT = "SET_INIT";

let initialState = {
    subjects:[
        {id:0, title:"Математическая логика и теория алгоритмов в практике программирования"},
        {id:1, title:"Теория вероятностей и математическая статистика"},
        {id:2, title:"Методы управления проектами в области информационных технологий"},
        {id:3, title:"Разработка корпоративных информационных систем"},
        {id:4, title:"Инженерия требований"},
        {id:5, title:"Технический перевод"},
        {id:6, title:"Алгоритмизация и программирование"},
        {id:7, title:"Элективные дисциплины по физической культуре и спорту"},
        {id:8, title:"Проектный менеджмент"},
        
    ]
};
const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        /*case SET_INIT:
            
            return {
                ...state,
                initialised:true
            };*/
        default: return state;
    };
};

/*const setIniatialised = () => ({type:SET_INIT});
export const  initialize = () =>{
    return(dispatch) =>{
        let authoriseResult = dispatch(getAuthorisedThunk());
        Promise.all([authoriseResult]).then(()=>{
            dispatch(setIniatialised())
        });
        
    };
};*/
export default appReducer;

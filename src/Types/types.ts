//Файл, в котором хранятся все описанные типы

//Перечисление для списков возможных действий
export enum ActionTypes{
    SET_SUBJECTS = "SET_SUBJECTS",
    FETCH_LOADING = "FETCH_LOADING",
    SET_SUBJECT = "SET_SUBJECT"
}

//Тип данных для описание того, что будет в массиве subjects стейта
export type subjectInArray = {
    id: number;
    name: string;
}
//описание структуры стейта
export interface subjectsState {
    subjects:subjectInArray[],
    loading:boolean
}
export interface subjectState{
    subject:subjectInfo,
    loading: boolean
}
export type subjectInfo ={
    title: string|null|undefined,
    links:any[]|null,
    prepods:any[]|null,
}
//Action Creator - структура. Принимает обязательно тип.
export interface SetSubjectsAction{
    type:ActionTypes.SET_SUBJECTS,
    subjects:subjectInArray[]
}
export interface SetSubjectsAction{
    type:ActionTypes.SET_SUBJECTS,
    subjects:subjectInArray[]
}
export interface FetchLoadingAction{
    type:ActionTypes.FETCH_LOADING,
}
export interface SetSubjectAction{
    type:ActionTypes.SET_SUBJECT,
    subject: subjectInfo
}
//Описание того, что нужно получить из запроса к апи в файле Api.ts для аксиоса
export type SubjectsToGet = {subjects:subjectInArray[]}

//Тип, который дается объекту action, в котором описаны возможные Action-Creatorы
export type AppActionList = SetSubjectsAction | FetchLoadingAction;
export type SubjectActionList = SetSubjectAction | FetchLoadingAction;
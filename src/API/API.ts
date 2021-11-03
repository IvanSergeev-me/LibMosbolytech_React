import axios from 'axios';
import {SubjectsToGet } from '../Types/types';

const instance = axios.create({
    baseURL:"https://lib.mospolytech.com/api/"
});
export const SubjectsAPI = {
    getSubjects(){
        return instance.get<SubjectsToGet>(`subjects.php`)
    },
    getSubject(id:number){
        return instance.get(`get_subject.php?id=${id}`)
    },
};



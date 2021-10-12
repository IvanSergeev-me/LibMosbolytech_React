import axios from 'axios';

const instance = axios.create({
    baseURL:"https://lib.mospolytech.com/api/"
});
export const SubjectsAPI = {
    getSubjects(){
        return instance.get(`subjects.php`)
    },
    getSubject(id){
        return instance.get(`get_subject.php?id=${id}`)
    },
};



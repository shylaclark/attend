import Realm from 'realm';
import repository from '../Repository.js';


let StudentService = {
    findAll: function() {
         //if (!sortBy) sortBy = 'studentID';
        return repository.objects('Student');
    },

    save: function(student) {

        repository.write(() => {
            repository.create('Student', student);
            student.createdAt = new Date();
        })
    },

    update: function(student, callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
            student.updatedAt = new Date();
        });
    },
    deleteAll: function() {
        repository.write(() => {
            repository.delete(repository.objects('Student'))
        });
    }

};

module.exports = StudentService;

import Realm from 'realm';
import CourseModel from './CourseModel';

let repository = new Realm({
    schema: [{
        name: 'CourseList',
        primaryKey: 'id',
        properties: {
            id: {type: 'string', indexed: true},
            courseNumber: 'int',
            courseTitle: 'string',
            //completed: 'bool',
            createdAt: 'date',
            updatedAt: 'date'
        }
    }]
});

let CourseService = {
    findAll: function(sortBy) {
        if (!sortBy) sortBy = [['active', false], ['updatedAt', true]];
        return repository.objects('CourseList').sorted(sortBy);
    },

    save: function(course) {
        if (repository.objects('CourseList').filtered("courseTitle = '" + course.courseTitle + "'").length) return;

        repository.write(() => {
            todo.updatedAt = new Date();
            repository.create('CourseList', course);
        })
    },

    update: function(course, callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
            todo.updatedAt = new Date();
        });
    }
};

CourseService.save(new CourseModel('Hello Koding'));
CourseService.save(new CourseModel('Make a Todo App with React Native'));
CourseService.save(new CourseModel('Check to complete a todo'));
CourseService.save(new CourseModel('Long press, drag and drop a todo to sort'));
CourseService.save(new CourseModel('Save data with Realm'));
CourseService.save(new CourseModel('Sync data with Firebase'));

module.exports = CourseService;
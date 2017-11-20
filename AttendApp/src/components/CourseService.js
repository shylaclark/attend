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
            active: 'bool',
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
            course.updatedAt = new Date();
            repository.create('CourseList', course);
        })
    },

    update: function(course, callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
            course.updatedAt = new Date();
        });
    }
};

CourseService.save(new CourseModel(1,'Hello Koding',true));
CourseService.save(new CourseModel(2,'Make a Todo App with React Native', true));
CourseService.save(new CourseModel(3,'Check to complete a todo', true));
CourseService.save(new CourseModel(4, 'Long press, drag and drop a todo to sort', true));
CourseService.save(new CourseModel(5, 'Save data with Realm', true));
CourseService.save(new CourseModel(6, 'Sync data with Firebase', false));

module.exports = CourseService;
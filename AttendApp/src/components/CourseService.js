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
            instructor: 'string',
            active: 'bool',
            createdAt: 'date',
            updatedAt: 'date'
        }
    }],
    schemaVersion: 1,
    //migration: function(oldRealm, newRealm){
    //    newRealm.deleteAll();
    //}
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


CourseService.save(new CourseModel(1,'Space and Time Travel 101','Dr.Who', true));
CourseService.save(new CourseModel(2,'Intro to Magical Engines', 'Ms. Frizzle', true));
CourseService.save(new CourseModel(3,'Avian Dialects', 'Dr. DoLittle', true));
CourseService.save(new CourseModel(4,'Rhyming Schemes 123', 'Dr. Seus', true));
CourseService.save(new CourseModel(5,'Advanced Topics in Archeology: Escape Techniques', 'Dr. Jones', false));

module.exports = CourseService;
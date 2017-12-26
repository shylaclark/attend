import Realm from 'realm';
import repository from './Repository.js';


let CourseService = {
    findAll: function() {
      // if (!sortBy) sortBy = [['active', true], 'courseDepartment', 'courseNumber', 'courseSection'];
        return repository.objects('Course');
    },

    save: function(course) {
        //
        // if (repository.objects('CourseList').filtered("courseTitle = '" + course.courseTitle + "'").length
        // &&  repository.objects('CourseList').filtered("courseDepartment = '" + course.courseDepartment + "'").length
        // &&  repository.objects('CourseList').filtered("courseNumber = '" + course.courseNumber + "'").length
        // &&  repository.objects('CourseList').filtered("courseSection = '" + course.courseSection + "'").length) return;

        repository.write(() => {
            // course.updatedAt = new Date();
            repository.create('Course', course);
        })
    },

    update: function(course, callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
            course.updatedAt = new Date();
        });
    },
    deleteAll: function() {
        repository.write(() => {
            repository.delete(repository.objects('Course'))
        });
    }

};
//CourseService.deleteAll();
// CourseService.save(new CourseModel('MATH', 1234, 100, 'Space and Time Travel 102','Dr.Who', true));
// CourseService.save(new CourseModel('ENGR', 2345, 200, 'Intro to Magic Engines', 'Ms. Frizzle', true));
// CourseService.save(new CourseModel('LANG', 3456, 300, 'Mamalian Dialects', 'Dr. DoLittle', true));
// CourseService.save(new CourseModel('LANG', 4567, 400, 'Rhyming 123', 'Dr. Seus', true));
// CourseService.save(new CourseModel('LANG', 4567, 401, 'Rhyming 123', 'Dr. Seus', true));
// CourseService.save(new CourseModel('GEOL', 5678, 500, 'Escape Techniques', 'Dr. Jones', true));


module.exports = CourseService;

import Utils from './Utils';

class CourseModel {
    constructor(courseNumber, courseTitle, instructor, active) {
        this.id = Utils.guid();
        this.courseNumber = courseNumber;
        this.courseTitle = courseTitle;
        this.active = active || false;
        this.instructor = instructor;
        //this.completed = completed || false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    setNumber(courseNumber){
        this.courseNumber =courseNumber;
    }
    setTitle(courseTitle){
        this.courseTitle =courseTitle;
    }
    setActive(active){
        this.active = active;
    }
    setInstructor(instructor){
        this.instructor = insrtuctor;
    }
}

module.exports = CourseModel;
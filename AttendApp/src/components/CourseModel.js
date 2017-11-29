import Utils from './Utils';

class CourseModel {
    constructor(courseDepartment, courseNumber, courseSection, courseTitle, instructor, active) {
        this.id = Utils.guid();
        this.courseDepartment = courseDepartment;
        this.courseNumber = courseNumber;
        this.courseTitle = courseTitle ;
        this.courseSection = courseSection || '0000';
        this.active = active || true;
        this.instructor = instructor || null;
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
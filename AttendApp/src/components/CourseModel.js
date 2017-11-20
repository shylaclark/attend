import Utils from './Utils';

class CourseModel {
    constructor(courseNumber, courseTitle, active) {
        this.id = Utils.guid();
        this.courseNumber = courseNumber;
        this.courseTitle = courseTitle;
        this.active = active || false;
        //this.completed = completed || false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = CourseModel;
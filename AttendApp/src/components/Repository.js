import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  properties: {
    firstName: 'string?',
    lastName: 'string?',
    macAddress: 'string?',
    email: 'string',
    password: 'string'
  }
};
class Student extends Realm.Object {}
Student.schema = {
    name: 'Student',
    primaryKey: 'studentID',
    properties: {
        studentID: {type: 'string', indexed: true},
        sFirstName: 'string',
        sLastName: 'string',
        sMacAddress: 'string',
        studentEmail: 'string?',
        //enrolledStudent: {type: 'linkingObjects', objectType: 'Course', property: 'students'},
        //attendance: 'Roll[]',
        createdAt: 'date',
        updatedAt: 'date',
        //courses: 'Course[]'
    }
};
class Course extends Realm.Object {}
Course.schema = {

    name: 'Course',
    primaryKey: 'id',
    properties: {
        id: {type: 'string', indexed: true},
        courseDepartment: 'string',
        courseNumber: 'string',
        courseTitle: 'string',
        courseSection: 'string?',
        active: 'bool',
        createdAt: 'date',
        updatedAt: 'date',
        //students:{type: 'list', objectType: 'Student'},
        //studentsCourse: {type: 'linkingObjects', objectType: 'Student', property: 'courses'},
        //attendance: 'Roll[]',
    }
};


export default new Realm({schema: [User, Student, Course]});

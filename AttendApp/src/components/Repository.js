import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  properties: {
    firstName: 'string',
    lastName: 'string',
    macAddress: 'string',
    email: 'string',
    password: 'string'
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
        courseSection: 'string',
        instructor: 'string',
        active: 'bool',
        createdAt: 'date',
        updatedAt: 'date'
    }
};

export default new Realm({schema: [User, Course]});

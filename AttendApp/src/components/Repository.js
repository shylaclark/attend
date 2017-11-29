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
  properties: {
    courseName: 'string',
    courseDescription: 'string'
  }
};

export default new Realm({schema: [User, Course]});

import Utils from '../Utils';

class StudentModel {
    constructor(studentID, sFirstName, sLastName, sEmail, sMacAddress) {
        this.studentID = studentID;
        this.sFirstName = sFirstName;
        this.sLastName = sLastName;
        this.sEmail = sEmail || ' ';
        this.sMacAddress = sMacAddress;
    }
}

module.exports = StudentModel;

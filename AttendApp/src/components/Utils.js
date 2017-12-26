let Utils = {
    guid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    },

    move: function(array, fromIndex, toIndex) {
        return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    },

    findCourse: function(course, courseList) {
        return courseList.find((item) => item.courseTitle.toLowerCase() === course.courseTitle.toLowerCase());
    }
};

module.exports = Utils;

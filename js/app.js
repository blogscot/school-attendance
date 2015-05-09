/*global ko:false*/

"use strict";
var students = [
  {
    name: 'Andres',
    days: [0,0,0,0,1,0,0,1,1,1,0,0]
  },
  {
    name: 'Brian',
    days: [0,0,0,1,0,0,0,0,0,0,1,0]
  },
  {
    name: 'Cathrine',
    days: [1,0,0,0,1,0,0,1,0,0,0,0]
  },
  {
    name: 'Derek',
    days: [0,0,0,0,1,0,0,0,1,0,0,0]
  },
  {
    name: 'Edburg',
    days: [0,0,0,0,0,1,0,1,0,0,1,0]
  },
  {
    name: 'Felix',
    days: [0,0,1,0,1,0,0,0,0,0,0,0]
  }
];

// Persist the attendance data using a unique local storage key
var Day = function(isChecked, key) {
  this.isChecked = ko.observable(isChecked, {persist: key});
};

var Student = function(student){

  this.days = [];
  this.name = student.name;
  
  for (var i = 0; i < student.days.length; i++) {

    // Combines the student name and day index to product the key
    this.days.push(new Day(student.days[i] === 1, this.name+i));
  }

};

var ViewModel = function() {
  var self = this;

  this.attendance = [1,2,3,4,5,6,7,8,9,10,11,12];
  this.studentList = ko.observableArray([]);

  students.forEach(function(student) {
    self.studentList.push(new Student(student));
  });
};
var debugVM = new ViewModel();

ko.applyBindings(debugVM);
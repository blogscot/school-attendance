/*global ko:false*/

"use strict";
var attendance = [0,0,0,0,1,0,0,1,0,0,0,0];

var students = [
  {
    name: 'Andres',
    days: attendance
  },
  {
    name: 'Brian',
    days: attendance
  },
  {
    name: 'Cathrine',
    days: attendance
  },
  {
    name: 'Derek',
    days: attendance
  },
  {
    name: 'Edburg',
    days: attendance
  },
  {
    name: 'Felix',
    days: attendance
  },
];

var Student = function(student){

  this.name = ko.observable(student.name);
  this.days = ko.observableArray(student.days);
};


var ViewModel = function() {
  var self = this;
  
  var attendanceDays = [1,2,3,4,5,6,7,8,9,10,11,12];
  this.attendance = ko.observableArray(attendanceDays);

  this.studentList = ko.observableArray([]);
  this.studentDays = ko.observableArray(attendance);

  students.forEach(function(student) {
    self.studentList.push(new Student(student));
  });

};

ko.applyBindings(new ViewModel());
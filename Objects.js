const { Person, Student, Course } = require('./Modules');

const person = new Person("Pramodh", "Jangam", 12345);
console.log(person.fullName());

const student = new Student("Sameer", "Shaik", 56789);
console.log(student.fullName());

const course = new Course("Math", 101, "Dr. Sivaselvan");
console.log(course.toString());

student.addTakenCourse(course);
console.log(student.coursesTaken);


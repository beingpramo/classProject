// Person 
class Person {
    constructor(firstName, lastName, id) {
      try {
        if (typeof id !== "number") {
          throw new Error("Invalid ID: ID must be a number");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
      } catch (error) {
        console.error(error.message);
      }
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  

// Student class 
  class Student extends Person {
    constructor(firstName, lastName, id, enrolledCourses = []) {
      super(firstName, lastName, id);
      this.enrolledCourses = enrolledCourses;
    }
  
    addCourse(course) {
      this.enrolledCourses.push(course);
    }
  }
  
  // Course class
  class Course {
    constructor(name, code, teacher) {
      this.name = name;
      this.code = code;
      this.teacher = teacher;
    }
  
    toString() {
      return `[Course: ${this.name}, Code: ${this.code}, Teacher: ${this.teacher}]`;
    }
  }

  //Adding Courses taken and  add Taken course 
  class Student extends Person {
    constructor(firstName, lastName, id, enrolledCourses = [], coursesTaken = new Map()) {
      super(firstName, lastName, id);
      this.enrolledCourses = enrolledCourses;
      this.coursesTaken = coursesTaken;
    }
  
    addCourse(course) {
      this.enrolledCourses.push(course);
    }
  
    addTakenCourse(course) {
      this.coursesTaken.set(course.code, course);
    }
  }
  
//   Error Handling 
class Student extends Person {
    constructor(firstName, lastName, id, enrolledCourses = [], coursesTaken = new Map()) {
      super(firstName, lastName, id);
      this.enrolledCourses = enrolledCourses;
      this.coursesTaken = coursesTaken;
    }
  
    addCourse(course) {
      try {
        if (this.coursesTaken.has(course.code)) {
          throw new Error("Course already taken");
        }
        this.enrolledCourses.push(course);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    addTakenCourse(course) {
      this.coursesTaken.set(course.code, course);
    }
  }
  

  module.exports = { Person, Student, Course };
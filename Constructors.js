function School(addCourse){


this.addCourse=addCourse;
this.addCourse=addCourse;
this.addCourse=addCourse;
};
function Course(name,teachers,courseNumber){
   
    this.name=name;
    this.teachers=[teachers];
    this.courseNumber=courseNumber;

};
const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course("Introduction to Computer Science", ["Dr. Zeus", "Mark Zuckerberg"], 300);
const socialStudies201 = new Course(
  "Intro to Social Studies",
  ["Steve Wozniak", "Brian Stevens"],
  200
);

const codecore = new School("math101","computerScience301","socialStudies201");
School.prototype.codecore =function(){
  return (this.addCourse);
}
Course.prototype.math101=function(){
 return (this.name+this.teachers+this.courseNumber);
}

Course.prototype.socialStudies201=function(){
  return (this.name+this.teachers+this.courseNumber);
 }
Course.prototype.computerScience301 =function(){
  return (this.name+this.teachers+this.courseNumber);
 }
 
 console.log(codecore);
console.log(math101);
console.log( socialStudies201);
console.log(computerScience301 );

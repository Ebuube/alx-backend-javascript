export interface Teacher {
  readonly firstName: string,   // this attribute can only be modifiable when a Teacher is first initialized
  readonly lastName: string,
  yearsOfExperience?: number,    // the question mark means this is optional attribute
  location: string,     // By default an attribute is mandatory
  fullTimeEmployee: boolean,    // By default an attribute is mandatory
  [key: string]: any    // This allows other attributes not specified here. It is called the index signature of TypeScript
};

/* *
// Example 
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
}

console.log(teacher3);
**/

// Task 2: Extending the Teacher class
export interface Directors extends Teacher {
  numberOfReports: number;
}

/*
// Example
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
*/


// Task 3: Printing teachers
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

/*
// Example
const teacher1 : Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
}

console.log(printTeacher(teacher1.firstName, teacher1.lastName));
*/
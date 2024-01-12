export interface Teacher {
  readonly firstName: string,   // this attribute can only be modifiable when a Teacher is first initialized
  readonly lastName: string,
  yearsOfExperienc?: number,    // the question mark means this is optional attribute
  location: string,     // By default an attribute is mandatory
  fullTimeEmployee: boolean,    // By default an attribute is mandatory
  [key: string]: any    // This allows other attributes not specified here. It is called the index signature of TypeScript
}

/* *
// Example 
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
}

console.log(teacher3)
**/
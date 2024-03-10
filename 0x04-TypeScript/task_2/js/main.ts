// Advanced types Part 1

// Interfaces
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


// Classes
export const Director = class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Functions
export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

/*
// Example
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/



// Task 6: Creating functions specific to employees
export function isDirector (employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  // A type predicate
    return employee instanceof Director;
}

export function executeWork(employee: any) {
  if (isDirector(employee)) {
    return (employee.workDirectorTasks());
  } else {
    return (employee.workTeacherTasks());
  }
}

/*
// Example
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
*/



// Task 7: String literal types

// A string liter type
export type Subjects = 'Math' | 'History';

// A function
export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History'
  }
}

// Example
console.log(teachClass('Math'));
console.log(teachClass('History'));
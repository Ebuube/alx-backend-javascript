interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}


const student1: Student = {
  firstName: 'Ebube',
  lastName: 'Onwuta',
  age: 18,
  location: 'Enugu'
}

const student2: Student = {
  firstName: 'Chibundu',
  lastName: 'Omeh',
  age: 25,
  location: 'Umuaga'
}

const studentsList: Array<Student> = [student1, student2];


// Rendering a table

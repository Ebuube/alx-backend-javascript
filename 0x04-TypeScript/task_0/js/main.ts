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

function renderTable (students: Array<Student>) {
  const table = document.createElement('table');
  table.border = '1'; // border for table
  const headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th')).textContent = 'First Name';
  headerRow.appendChild(document.createElement('th')).textContent = 'Location';
  table.appendChild(headerRow);

  // Append a new row for each student in the array
  students.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // Set cell values
    cell1.textContent = student.firstName;
    cell2.textContent = student.lastName;

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
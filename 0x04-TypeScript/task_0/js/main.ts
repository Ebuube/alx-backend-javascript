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

function renderTable () {
  const tableBody = document.querySelector('#studentTable tbody');

  // Clear existing rows
  tableBody.innerHTML = '';

  // Append a new row for each student in the array
  studentsList.forEach(student => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // Set cell values
    cell1.textContent = student.firstName;
    cell2.textContent = student.lastName;
  });
}

renderTable();
export default function createReportObject(employeesList) {
  const staff = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return staff;
}

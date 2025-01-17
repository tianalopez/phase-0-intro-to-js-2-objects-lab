// // Write your solution in this file!
const employee = {name: "Tian", address: "1234 Jones"};

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   const update = {...employee};
//   update[key] = value;
//   return update;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//   const newEmployee = { ...employee };
//   delete newEmployee[key];
//   return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   return employee;
// }

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = {...employee};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  }
//   "Aditya"
];

// Insert new Emp at 2nd position

employees.splice(1,0,{eno: 106, name:"vyom", marks:[80,85,90]});
console.log(employees);

// Remove an emp with name "Kiran"

for (let i=0; i<employees.length; i++){
    if(employees[i].name == "Kiran"){
        employees.splice(i,1);
        break;
}
}
console.log(employees);

// 3.Change the last mark 95 to 75 of emp  "Sneha"

for (let i = 0; i < employees.length; i++) {
    if(employees[i].name == "Sneha"){
        employees[i].marks.splice(2,1,100);
        break;
    }
}  

// console.log(employees);

// console.log(employees.indexOf("Aditya"));
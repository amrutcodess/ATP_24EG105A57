// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let passed = students.filter((ele) => ele.marks >= 40)
console.log(passed)

let arr = students.map((curr) => {
    let currGrade
    if(curr.marks >= 90){
        currGrade = "A"
    }else if(curr.marks >= 75 && curr.marks <= 90){
        currGrade = "B"
    }else if(curr.marks >= 60 && curr.marks <= 75){
        currGrade = "C"
    }else{
        currGrade = "D"
    }
    // return {id: curr.id, name: curr.name, marks: curr.marks, grade: currGrade}
    curr.grade = currGrade
    return curr
})
console.log(arr)


let total = students.reduce((acc, curr) => acc += curr.marks,0)
console.log(total/students.length)

let topper = students.find((curr) => curr.marks == 92)
console.log(topper)

let index = students.findIndex((curr) => curr.name == "Kiran")
console.log(index)

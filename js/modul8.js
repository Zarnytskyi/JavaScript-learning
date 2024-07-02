// 1. Напишіть функцію, котра приймає строку як параметр і знаходить найдовше слово у строчці

function findBiggestWord(str) {

const words = str.split("");

let longestWord ="";

words.forEach(word =>{
if (word.length > longestWord){
    longestWord = word;
}
})
    return longestWord;
};

const inputStr = "i play pokemon go";
const result = unique(inputStr);
console.log(result);

// 2. Напишіть функцію, котра приймає число як параметр і повертає перевернуте число


function reverseNumber(number) {
  let numStr = Math.abs(number).toString();
  let reversedStr = numStr.split('').reverse();
  let reversedNum = parseInt(reversedStr);
  return reversedNum;
}

// 3. Написати функцію котра буде приймати стрінь значення і повертати нове стрінь значення із символами без повторення

function unique(inputStr) {
  const uniqueSet = new Set();
  for (let char of inputStr) {
      uniqueSet.add(char);
  }

  let uniqueStr = '';
  uniqueSet.forEach(char => uniqueStr += char);

  return uniqueStr;
}
// 4. Написати функцію котра приймає 3 параметри - перемоги, нічиї, поразки і повертає кількість очок команди

function calcPoints(win, draw, loss){
let points = (win * 3) + (draw * 1) + (loss * 0)
return points
}

// 5. Написати функцію яка приймає масив як параметр і повертає об'єкт із такими властивостями: 
//   Максимальне значення
//   Мінімальне значення
//   Кількість елементів
//   Середнє арифметичне

function statistics(arr) {
  if (arr.length === 0) {
      return {
          max: null,
          min: null,
          count: 0,
          average: null
      };
  }
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let num of arr) {
      if (num > max) {
          max = num;
      }
      if (num < min) {
          min = num;
      }
      sum += num;
  }
  const count = arr.length;
  const average = sum / count;
  return {
      max: max,
      min: min,
      count: count,
      average: average
  };
}

// 6. Написати функцію котра приймає масив робітників команії

 const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];
 function highestDepartment(workers) {
  const groupedByDepartment = workers.reduce(function(obj, curr) {
    const { department, salary } = curr;

    if(!obj[department]) {
      obj[department] = {
        department: department,
        count: 1,
        totalSalary: salary
        }
    }    
    obj[department].count += 1
    obj[department].totalSalary += salary
    
    return obj
  }, {});
  
  const averageDepartments = Object.values(groupedByDepartment).map(function(el) {
      return {
        department: el.department,
        average: el.totalSalary / el.count
      }
  })
  
  averageDepartments.sort(function(a,b) {
    return b.average - a.average
  })
  
 return averageDepartments[0]

}

highestDepartment(workers)

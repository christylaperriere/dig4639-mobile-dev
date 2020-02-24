const myArray = [2, 5, 8, 20, 18]
console.log(myArray)

// Traditional for loop
let sum = 0
for (let index = 0; index < myArray.length; index++) {
  sum = sum + myArray[index]
}
console.log(sum)

sum = 0
for (const item of myArray) {
  sum = sum + item
}

const newArray = []

// Divide each element by two
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  newArray.push(myArray[index] / 2)
}
console.log('after', newArray, 'original', myArray)

function addTwo (value) {
  return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

const arrFun = (value) => value + 2
const resultArray2 = myArray.map(arrFun)
console.log(resultArray2)

const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray3)

function printItems (arrayInput) {
  const htmlArray = myArray.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
  return htmlArray
}

printItems(myArray)

function compareNumbers (a, b) {
  return a - b
}
printItems(myArray.sort(compareNumbers))

// Arrow method version
printItems(myArray.sort((a, b) => a - b))

const toDoList = [
  {
    content: 'Task 1', priority: 2, completed: true
  },
  {
    content: 'Task 2', priority: 1, completed: true
  },
  {
    content: 'Task 3', priority: 3, completed: false
  }
]

console.log(toDoList)

function printToDo (arrayInput) {
  const htmlArray = arrayInput.map((value) =>
  `<p ${
    (value.completed) ? 'class="done"' : ''}>
    ${value.priority}: ${value.content}
  </p>`)
  return htmlArray
}

console.log(printToDo(toDoList).join('\n'))

const filteredArray = []
for (const item of toDoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}
console.log(printToDo(filteredArray).join('\n'))

function evalItem (item) {
  return !item.completed
}

console.log(printToDo(toDoList.filter(evalItem)).join('\n'))

console.log(printToDo(toDoList.filter((item) => item.completed)))

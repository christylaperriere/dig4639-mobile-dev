// Sum function
function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result
  }

export { Sum };

// Add List function 
function AddList(array) {
  let result = undefined; 
  
  if (Array.isArray(array) && array.length > 0) {
    result = 0; 
    for (var i = 0; i < array.length; i++) { 
      if(typeof array[i] != "number") {
        result = undefined; 
        break; 
      }
      result = result + array[i]; 
    }
  }
  return result; 
}

export { AddList }; 

// Divide By function
function DivideBy(a, b) {
  let result = undefined 

  if(typeof a == "number" && typeof b == "number" && b != 0) { 
    result = a / b
  }
  return result 
}

export { DivideBy }; 

// Contains String function 
function ContainsString(first, second) {
  let result = false 
  if(typeof first == "string" && typeof second == "string") {
    if (first.includes(second)) {
      result = true
    }
  }
  return result 
}

export { ContainsString }; 

// Resorting numbers function 
function ReSortedNumbers(array) {
  let result = undefined; 

  if(Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) { 
      result = array.sort(); 
    }
  }
  return result; 
}

export { ReSortedNumbers }; 

// Adder function
function Adder(a, b) {
  let result = undefined; 
  if (typeof a == "number" && typeof b == "number"){
    result = a + b
  }
  return result
}

export { Adder }; 
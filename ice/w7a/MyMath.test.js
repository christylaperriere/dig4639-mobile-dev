import { Sum } from './MyMath.js'
import { AddList } from './MyMath.js'
import { DivideBy } from './MyMath.js'
import { ContainsString } from './MyMath.js'
import { ReSortedNumbers } from './MyMath.js'

// Tests for Sum
describe("sum", () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, "Test")).toBeUndefined()
  })

  test('whether undefined is returned on invalid type', () => {
    expect(Sum(1, 2)).toBe(3)
  })


// Tests for AddList
describe("addList", () => {

  test('if empty array returns undefined', () => {
    let input = []; 
    expect(AddList(input)).toBeUndefined(); 
  })

  test('if part of array is undefined', () => {
    let input = []; 
    expect(AddList(input)).toBeUndefined(); 
  })

  test('whether undefined is returned on invalid type', () => {
    expect(AddList(1, 2)).toBe(3)
  })

// Tests for DivideBy
describe ("divideBy", () => {

  test('dividing 4 by 2 is 2', () => {
    expect(DivideBy(4, 2)).toBe(2)
  })

  test('dividing by zero', () => {
    expect(DivideBy(4, 0)).toBeUndefined()
  })

})

// Tests for contains string
describe ("contains", () => {

  test('returns true', () => {
    expect(ContainsString("hello", "hell")).toBe(true)
  })

  test('returns false', () => {
    expect(ContainsString("hello", 7)).toBe(false)
  })

})

// Tests for Resort Array
describe ("sorting", () => {

  test('checking to see if numbers are sorted', () => {
    expect(ReSortedNumbers(4, 2, 3)).toEqual(2,3,4)
  })

})


it('produces the sum of 10+20, which should be 30', () => {
  expect(Sum(10,20)).toBe(30)
})

})

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

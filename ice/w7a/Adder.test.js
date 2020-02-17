import { Adder } from './MyMath.js'

// Tests for Adder
describe("adder", () => {

  test('handling case when not a number', () => {
    expect(Adder(1, "Test")).toBeUndefined()
  })

  test('check to see if 1 + 2 = 3', () => {
    expect(Adder(1, 2)).toBe(3)
  })

})


// this file can be a .spec.js file or a .test.js file
//in terminal npm test to run tests or npm test -- --watchAll to run tests automatically whenever there is a change

// need to import expect and it form jest
import { expect, it } from "@jest/globals";

// import multiply funciton that we want to test from sums.js
import { multiply, divide } from "./sums";

// writing test cases
it("multiplies 3 and 4 to equal 12", () => {
  const result = multiply(3, 4);
  expect(result).toBe(12);
});

it("multiplies two negative numbers to give a positive number", () => {
  const result = multiply(-3, -4);
  expect(result).toBeGreaterThan(0);
});

it("divides 6 by 3 to equal 2", () => {
  const result = divide(6, 3);
  expect(result).toBe(2);
});

it(`divides 6 by 0 to return string "Can't divide by 0"`, () => {
  const result = divide(6, 0);
  expect(result).toBe("Can't divide by 0");
});

it("returns undefined if you pass in a string", () => {
  const result = divide("10", 5);
  expect(result).toBeUndefined;
});

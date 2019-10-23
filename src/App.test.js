import { add, total } from "./App.js";

const sum = jest.fn(add);

// Unit tests for add function
test("add function adds positive numbers", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum).toHaveBeenCalledTimes(1);
  expect(sum).toHaveBeenLastCalledWith(2, 2);
});

test("add function works with negative numbers", () => {
  expect(add(-5, -10)).toBe(-15);
});

// Sanity test
test("addition works in general", () => {
  expect(2 + 2).toBe(4);
});

// Integration test, as total relies on add
test("total shows the sum", () => {
  expect(total(5, 100)).toBe("$105");
});

import { add, total } from "./App.js";

test("add function adds positive numbers", () => {
  expect(add(2, 2)).toBe(4);
});

test("add function works with negative numbers", () => {
  expect(add(-5, -10)).toBe(-15);
});

test("addition works in general", () => {
  expect(2 + 2).toBe(4);
});

test("total shows the sum", () => {
  expect(total(5, 100)).toBe("$105");
});

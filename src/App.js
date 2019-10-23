export const add = (x, y) => x + y;

export const total = (subtotal, tax) => {
  return "$" + add(subtotal, tax);
};

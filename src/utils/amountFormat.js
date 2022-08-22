export function amountFormat(value) {
  return new Intl.NumberFormat("en-EN", {
    currency: "USD",
    style: "currency",
  }).format(value);
}

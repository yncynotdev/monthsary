import { monthlyIncrement } from "../utils/monthlyIncrement";

export default defineEventHandler(() => {
  const monthsary = monthlyIncrement();

  return monthsary;
});

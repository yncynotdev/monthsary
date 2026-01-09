export default defineTask({
  meta: {
    name: "monthsary",
    description: "increment monthly count",
  },
  run({ payload, context }) {
    const result = monthlyIncrement();

    return { result };
  },
});

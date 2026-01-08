import dayjs from "dayjs";

export default defineEventHandler(() => {
  const year: string = "2024";
  const month: string = "11";
  const day: string = "30";

  const monthsary = monthlyIncrement(year, month, day);

  return monthsary;
});

function monthlyIncrement(year: string, month: string, day: string) {
  const startOfMonth = dayjs(`${year}-${month}-${day}`);
  const endOfMonth = dayjs().date(Number(day));

  let monthCount: number = 0;

  for (
    let month = dayjs(startOfMonth);
    month.isBefore(endOfMonth) || month.isSame(endOfMonth, "month");
    month = month
      .add(1, "month")
      .date(Math.min(Number(day), month.add(1, "month").daysInMonth()))
  ) {
    // the reason why it is not inside the for() loop because it will infinity loop
    monthCount++;
  }

  // minus 1 because monthCount doesn't aware that the starting month supposed to be 0 when running the loop
  return monthCount - 1;
}

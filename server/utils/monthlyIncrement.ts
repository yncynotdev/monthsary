import dayjs from "dayjs";

/**
 * Increment the value per 30 days based on the starting year
 * @param year: Gets year based on the YYYY format
 * @param month: Gets month based on the MM format
 * @param day: Gets day based on the DD format
 *
 * @returns monthCount - 1
 *
 * @example
 * const m = monthlyIncrement("1999", "01", "01");
 */

export function monthlyIncrement() {
  const year: string = "2024";
  const month: string = "11";
  const day: string = "30";

  const startOfMonth = dayjs(`${year}-${month}-${day}`);
  const endOfMonth = dayjs().date(Number(day))

  let monthCount: number = 0;

  for (
    let month = dayjs(startOfMonth);
    month.isBefore(endOfMonth) || month.isSame(endOfMonth, "month");
    month = month.add(1, "month").date(
      Math.min(Number(day), month.add(1, "month").daysInMonth())
    )
  ) {
    // the reason why it is not inside the for() loop because it will infinity loop
    monthCount++;
  }

   // minus 1 because monthCount doesn't aware that the starting month supposed to be 0 when running the loop
  return monthCount - 1;
}

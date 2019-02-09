
/**
 * Get the UI metadata used by TimelineChrono to show the years and month spacers on the timeline
 * @param {Date} startDate Start date of the event
 * @param {Date} endDate End date of the event
 * @return {[{ spacer: boolean?, year: number, month: number? }]} An array of metadata objects to
 *  tell the UI how to display the TimelineChrono for this date range
 */
export default function getMonthsForRange(startDate, endDate) {
  if (startDate > endDate) {
    console.error(`startDate (${startDate}) is later than endDate (${endDate}); check dates for getMonthsForRange`);
    return [];
  }
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const yearDiff = endYear - startYear;
  const months = [];
  endDate.setDate(1);
  const idxDate = new Date(endDate);
  let nextMonth = idxDate.getMonth();
  const startsInJan = startDate.getMonth() === 0;
  let hasSpacer = false;
  while (idxDate >= startDate) {
    if (yearDiff < 3 || [startsInJan ? 0 : startYear, endYear].includes(idxDate.getFullYear())) {
      months.push({
        month: idxDate.getMonth(),
        year: idxDate.getFullYear(),
      });
    } else {
      if (!hasSpacer) {
        months.push(
          {
            spacer: true,
            year: startDate.getFullYear() + 1,
          },
          {
            month: 0,
            year: startDate.getFullYear() + (startsInJan ? 0 : 1),
          },
        );
      }
      hasSpacer = true;
    }
    idxDate.setMonth(--nextMonth);
    if (nextMonth < 0) {
      nextMonth = 11;
    }
  }
  return months;
}

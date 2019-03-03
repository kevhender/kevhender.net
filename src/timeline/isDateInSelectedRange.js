/**
 * Check if a date is within the selected timespan, so it can be highlighted on the UI
 * @param {TimelineEvent} selectedEvent The event currently selected in the app model
 * @param {Date} date The date to check
 * @return {boolean} True if the given date occurred within the timespan of the timeline's selected event
 */
export default function isDateInSelectedRange(selectedEvent, date) {
  const { startDate, endDate } = selectedEvent || {};
  if (!startDate) {
    return false;
  }
  if (date >= startDate) {
    return !endDate || date <= endDate;
  }
  return false;
}

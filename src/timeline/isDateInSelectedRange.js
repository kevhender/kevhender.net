/**
 * Check if a date is within the selected timespan, so it can be highlighted on the UI
 * @param {TimelineModel} timeline The timeline
 * @param {Date} date The date to check
 * @return {boolean} True if the given date occurred within the timespan of the timeline's selected event
 */
export default function isDateInSelectedRange(timeline, date) {
  const { selectedEvent } = timeline;
  const { startDate, endDate } = selectedEvent || {};
  if (!startDate) {
    return false;
  }
  if (date >= startDate) {
    return !endDate || date <= endDate;
  }
  return false;
}

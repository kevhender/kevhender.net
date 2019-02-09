import get from 'lodash/get';

/**
 * Gets the range of time to display on the UI for an event, based on its relation to
 *  other events in the timeline.
 * @param {Timeline} timeline The timeline
 * @param {TimelineEvent} event The event to check
 * @return {{endDate: Date, startDate: Date}} An object with the start and end dates to
 *  show on the UI.
 */
export default function getEventUIRange(timeline, event) {
  const { sortedEvents } = timeline;
  const currentEventIndex = sortedEvents.findIndex(ev => ev === event);
  const nextEvent = sortedEvents[currentEventIndex + 1];
  const ongoingEvents = sortedEvents.filter((ev, idx) => (
    // event is ongoing if it:
    // 1. ended after this one ended and
    idx < currentEventIndex &&
    // 2. started before this one ended
    ev.startDate < event.endDate
  ));
  return {
    endDate: get(event, 'endDate', new Date()),
    startDate: new Date(Math.max(
      get(nextEvent, 'endDate', 0),
      ...(ongoingEvents.length ? ongoingEvents.map(oge => oge.startDate) : [event.startDate]),
    )),
  };
}

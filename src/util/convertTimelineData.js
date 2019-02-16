import moment from 'moment';
import pick from 'lodash/pick';

/**
 * Converts the raw JSON data into data to be consumed by TimelineModel
 * @param {Object} rawData Data from TimelineEvents.json file
 * @return {TimelineEventModel[]} Array of TimelineEventModels containing all Timeline data
 */

const DIRECTLY_MAPPED_PROPS = [
  'name',
  'type',
  'location',
  'position',
  'phone',
  'overview',
  'details',
];

export default function convertTimelineData(rawData) {
  return rawData.map(event => ({
    ...pick(event, DIRECTLY_MAPPED_PROPS),
    id: `${event.name}-${event.dates.from}`,
    startDate: new Date(moment(event.dates.from, 'M/YYYY')),
    endDate: event.dates.to ? new Date(moment(event.dates.to, 'M/YYYY')) : new Date(),
    logo: event.logo ? `/images/logos/${event.logo}` : undefined,
  }));
}

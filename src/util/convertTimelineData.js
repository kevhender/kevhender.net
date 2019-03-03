import JobEventModel from '../timeline/JobEventModel';
import SchoolEventModel from '../timeline/SchoolEventModel';
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
  'diploma',
  'majors',
  'minors',
  'honors',
];

const MODEL_TYPE_MAP = {
  employment: JobEventModel,
  school: SchoolEventModel,
};

export default function convertTimelineData(rawData) {
  return rawData.map(event => (
    MODEL_TYPE_MAP[event.type].create({
      ...pick(event, DIRECTLY_MAPPED_PROPS),
      id: `${event.name}-${event.dates.from}`,
      startDate: new Date(moment(event.dates.from, 'M/YYYY')),
      endDate: event.dates.to ? new Date(moment(event.dates.to, 'M/YYYY')) : new Date(),
      logo: event.logo ? `/images/logos/${event.logo}` : undefined,
      graduated: event.graduated ? new Date(moment(event.graduated, 'M/YYYY')) : undefined,
    })
  ));
}

import { types } from 'mobx-state-tree';

/**
 * Model for a Timeline event, holding all the info for what happened when
 */
const TimelineEventModel = types
  .model('TimelineEventModel', {
    id: types.identifier,
    name: types.string,
    type: types.string,
    startDate: types.Date,
    endDate: types.maybe(types.Date),
    location: types.string,
    position: types.maybe(types.string),
    logo: types.maybe(types.string),
    phone: types.maybe(types.string),
    overview: types.maybe(types.string),
    details: types.array(types.string),
  });

export default TimelineEventModel;

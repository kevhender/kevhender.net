import { types } from 'mobx-state-tree';

/**
 * Model for a Timeline event, holding all the info for what happened when
 */
const TimelineEventModel = types
  .model('TimelineEventModel', {
    id: types.identifier,
    name: types.string,
    type: types.string, // TODO: enum?
    startDate: types.Date,
    endDate: types.maybe(types.Date),
  });

export default TimelineEventModel;

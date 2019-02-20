import TimelineEventModel from './TimelineEventModel';
import { types } from 'mobx-state-tree';

/**
 * Model for a School timeline event
 */
const SchoolEventModel = types.compose(
  TimelineEventModel,
  types.model('SchoolEventModel', {
    majors: types.array(types.string),
    minors: types.array(types.string),
    honors: types.array(types.string),
    diploma: types.maybe(types.string),
    graduated: types.maybe(types.Date),
  }),
);

export default SchoolEventModel;

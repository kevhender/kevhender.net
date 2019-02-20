import TimelineEventModel from './TimelineEventModel';
import { types } from 'mobx-state-tree';

/**
 * Model for a Job timeline event
 */
const JobEventModel = types.compose(
  TimelineEventModel,
  types.model('JobEventModel', {
    position: types.maybe(types.string),
    phone: types.maybe(types.string),
    overview: types.maybe(types.string),
    details: types.array(types.string),
  }),
);

export default JobEventModel;

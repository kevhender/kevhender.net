import JobEventModel from './JobEventModel';
import SchoolEventModel from './SchoolEventModel';
import { types } from 'mobx-state-tree';

const sortEvents = events => (events || []).sort((event1, event2) => (event2.endDate || new Date()).getTime() - (event1.endDate || new Date()).getTime());

/**
 * Model for Timeline, holding the timeline's events and related metadata
 */
const TimelineModel = types
  .model('TimelineModel', {
    events: types.array(types.union(JobEventModel, SchoolEventModel)),
    selectedEvent: types.maybe(types.reference(types.union(JobEventModel, SchoolEventModel))),
  })
  .views(self => ({
    get sortedEvents() {
      return sortEvents(self.events.slice());
    },
  }))
  .actions(self => ({
    selectEvent(event) {
      self.selectedEvent = event || undefined;
    },
  }));

export default TimelineModel;

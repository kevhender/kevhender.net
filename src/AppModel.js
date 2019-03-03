import JobEventModel from './timeline/JobEventModel';
import SchoolEventModel from './timeline/SchoolEventModel';
import SkillCategoryModel from './skills/SkillCategoryModel';
import SkillModel from './skills/SkillModel';
import { types } from 'mobx-state-tree';

const sortEvents = events => (events || []).sort((event1, event2) => (event2.endDate || new Date()).getTime() - (event1.endDate || new Date()).getTime());

/**
 * Model to hold all models for the app
 */
const AppModel = types
  .model('AppModel', {
    timelineEvents: types.array(types.union(JobEventModel, SchoolEventModel)),
    selectedTimelineEvent: types.maybe(types.reference(types.union(JobEventModel, SchoolEventModel))),
    skillCategories: types.array(SkillCategoryModel),
    skills: types.array(SkillModel),
  })
  .views(self => ({
    get sortedTimelineEvents() {
      return sortEvents(self.timelineEvents.slice());
    },
    get sortedSkillCategories() {
      return self.skillCategories.slice().sort((cat1, cat2) => cat2.relevance - cat1.relevance);
    },
    getSortedSkills(category) {
      return self.skills
        .filter(skill => skill.categoryId === category.id)
        .sort((skill1, skill2) => {
          const relevanceDiff = skill2.relevance - skill1.relevance;
          if (relevanceDiff === 0) {
            return skill2.competence - skill1.competence;
          }
          return relevanceDiff;
        });
    },
  }))
  .actions(self => ({
    selectTimelineEvent(event) {
      self.selectedTimelineEvent = event || undefined;
    },
  }));

export default AppModel;

import { getParentOfType, types } from 'mobx-state-tree';
import AppModel from '../AppModel';
import SkillModel from '../skills/SkillModel';
import TimelineEventModel from './TimelineEventModel';
import pickBy from 'lodash/pickBy';

/**
 * Model for a Job timeline event
 */
const JobEventModel = types.compose(
  TimelineEventModel,
  types.model('JobEventModel', {
    position: types.maybe(types.string),
    phone: types.maybe(types.string),
    overview: types.maybe(types.string),
    accomplishments: types.array(types.string),
    skills: types.array(SkillModel),
  })
    .views(self => ({
      /**
       * Merges any local skill info with the app's main skill list
       * @param {SkillModel} skill The skill to retrieve
       */
      getSkill(skill) {
        const parentSkill = getParentOfType(self, AppModel).getSkillById(skill.id) || {};
        return Object.assign({}, parentSkill, pickBy(skill, (val, key) => val && ['competence', 'relevance'].includes(key)));
      },
    })),
);

export default JobEventModel;

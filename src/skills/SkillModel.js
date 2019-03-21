import { types } from 'mobx-state-tree';

/**
 * Model for a skill
 */
const SkillModel = types
  .model('SkillModel', {
    id: types.identifier,
    name: types.maybe(types.string),
    relevance: types.maybe(types.number),
    competence: types.maybe(types.number),
    // TODO - get this to work as a reference
    categoryId: types.maybe(types.string),
  })
  .actions(self => ({
    setCategory(category) {
      self.category = category;
    },
  }));

export default SkillModel;

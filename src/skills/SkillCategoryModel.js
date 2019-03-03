import { types } from 'mobx-state-tree';

/**
 * Model for skill category, one of which is referenced by each skill
 */
const SkillCategoryModel = types
  .model('SkillCategoryModel', {
    id: types.identifier,
    name: types.string,
    relevance: types.number,
  });

export default SkillCategoryModel;

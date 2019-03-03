import SkillCategoryModel from '../skills/SkillCategoryModel';
import SkillModel from '../skills/SkillModel';

/**
 * Converts the raw JSON data into data to be consumed by SkillModel
 * @param {Object} rawData Data from Skills.json file
 * @return {SkillModel[]} Array of SkillModel containing all Skills data
 */

export default function convertSkillsData(rawData) {
  const skillCategories = rawData.categories.map(category => SkillCategoryModel.create(category));
  const skills = rawData.skills.map(skill => SkillModel.create(skill));
  return {
    skillCategories,
    skills,
  };
}

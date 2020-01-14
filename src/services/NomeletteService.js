import axios from "axios";
import config from "@/config";
import seasons from "@/data/seasons.json";
import courses from "@/data/courses.json";
import categories from "@/data/categories.json";

/**
 * retrieves all recipes for a given tagging
 * @param {strig} tagging
 */
export function getRecipesForTagging(tagging) {
  return axios
    .get(`${config.api.endpoint}/taggings/${tagging}`)
    .then(r => r.data);
}

/**
 * retrieves all the taggings, by tagging type
 */
export async function getAllTaggings() {
  return {
    seasons,
    courses,
    categories
  };
}

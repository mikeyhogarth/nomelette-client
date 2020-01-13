import seasons from "@/data/seasons.json";
import courses from "@/data/courses.json";
import categories from "@/data/categories.json";

export async function getAllTaggings() {
  return {
    seasons,
    courses,
    categories
  };
}

export async function getCategories() {
  return categories;
}

export async function getSeasons() {
  return seasons;
}

export async function getCourses() {
  return courses;
}

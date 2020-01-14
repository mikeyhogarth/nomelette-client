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

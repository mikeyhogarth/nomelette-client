import Vue from "vue";
import { compact } from "lodash";

/**
 * this is a temporary measure until I figure out
 * what to do about the parsing of the ingredients/
 * method (currently they all have new lines in them
 * as well as plain html)
 *
 * all it does is replace the newlines with <br />
 * @param {string} value
 */
function getLines(value) {
  if (!value) return [];
  return compact(value.split(/(?:\r\n|\r|\n)/g));
}

export function parseIngredients(ingredients) {
  const lines = getLines(ingredients);
  return `<ul style="list-style: none; margin-left: 0">${lines
    .map(l => `<li>${parseIngredientLine(l)}</li>`)
    .join("")}</ul>`;
}

function parseIngredientLine(ingredientLine) {
  // section titles
  if (ingredientLine.startsWith("--")) {
    return `<h4 class="is-4" style='margin-top: 1em;'>
      ${ingredientLine.replace("--", "")}
    </h4>`;
  }

  return ingredientLine.replace(/\*/g, "");
}

export function parseMethod(method) {
  const lines = getLines(method);
  return `<ol>${lines.map(l => `<li>${l}</li>`).join("")}</ol>`;
}

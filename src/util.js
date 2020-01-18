import compact from "lodash/compact";

function getLines(value) {
  if (!value) return [];
  return compact(value.split(/(?:\r\n|\r|\n)/g));
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

export function parseIngredients(ingredients) {
  const lines = getLines(ingredients);
  return `<ul id="ingredients-list">${lines
    .map(l => `<li>${parseIngredientLine(l)}</li>`)
    .join("")}</ul>`;
}

export function parseMethod(method) {
  const lines = getLines(method);
  return `<ol>${lines.map(l => `<li>${l}</li>`).join("")}</ol>`;
}

import Vue from "vue";

/**
 * this is a temporary measure until I figure out
 * what to do about the parsing of the ingredients/
 * method (currently they all have new lines in them
 * as well as plain html)
 *
 * all it does is replace the newlines with <br />
 * @param {string} value
 */
export function delineify(value) {
  if (!value) return "";
  return value.replace(/(?:\r\n|\r|\n)/g, "<br />");
}

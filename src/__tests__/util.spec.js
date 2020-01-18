import { parseIngredients, parseMethod } from "@/util";

describe("parseMethod", () => {
  it("creates HTML from nomelette-markup", () => {
    const raw = "Do a thing\nDo another thing.\nDo one last thing\n";
    const expected =
      "<ol><li>Do a thing</li><li>Do another thing.</li><li>Do one last thing</li></ol>";
    expect(parseMethod(raw)).toEqual(expected);
  });
});

describe("parseIngredients", () => {
  it("creates HTML from nomelette-markup", () => {
    const raw = "1 pint *Milk*\n2 *cloves*.\n";
    const expected =
      '<ul id="ingredients-list"><li>1 pint Milk</li><li>2 cloves.</li></ul>';
    expect(parseIngredients(raw)).toEqual(expected);
  });
});

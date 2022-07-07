import { expect, it } from "@jest/globals";
import { translate } from "./translate";

//valid inputs (positive tests)
it("should translate hello to bonjour", () => {
  const result = translate("hello");
  expect(result).toBe("bonjour");
});

it("should translate goodbye to au revoir", () => {
  const result = translate("goodbye");
  expect(result).toBe("au revoir");
});

it("should translate yes to oui", () => {
  const result = translate("yes");
  expect(result).toBe("oui");
});

it("should translate no to non", () => {
  const result = translate("no");
  expect(result).toBe("non");
});

it("should translate HeLlo to bonjour", () => {
  const result = translate("HeLlo");
  expect(result).toBe("bonjour");
});

it("should translate hello to hallo if the language passed in is 'german'", () => {
  const result = translate("hello", "german");
  expect(result).toBe("hallo");
});

//invalid inputs (negative tests)
it("should translate asdfhgie to 'unavailable", () => {
  const result = translate("asdfhgie");
  expect(result).toBe("unavailable");
});

it("should return 'unavailable' if the argument passed in is not a string", () => {
  const result = translate(4);
  expect(result).toBe("unavailable");
});

it("should return 'unavailable' if the language passed in is not french or german", () => {
  const result = translate("hello", "greek");
  expect(result).toBe("unavailable");
});

//undefined inputs (negative tests)
it("should translate undefined inputs to 'unavailable", () => {
  const result = translate("");
  expect(result).toBe("unavailable");
});

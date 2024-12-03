// Import only the functions we want to test
const { validateEmail } = require("../utils");

describe("Email Validation", () => {
  test("should validate correct email formats", () => {
    const validEmails = [
      "luigi@carluccio.it",
      "john@silva.com.br",
      "test@example.com",
    ];

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  test("should reject incorrect email formats", () => {
    const invalidEmails = ["", "notanemail", "@nodomain.com"];

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});

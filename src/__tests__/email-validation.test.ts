// Test Case: Login Authentication for International Email Domains
//
//Description: Verify that users with non-US email domains can successfully login
//
//Prerequisites:
// - Application is running
// - Test database contains users with international email domains
// - Test users: Luigi (luigi@carluccio.it) and John (john@silva.com.br)
//
//Test Steps:
// 1. Launch the application
// 2. Navigate to login screen
// 3. Enter email: luigi@carluccio.it
// 4. Enter password: [valid password]
// 5. Click "Log in" button
//
//Expected Result: User should be successfully logged in
//
//Actual Result: User receives "unauthorized" error
//
//Alternative Flow:
// 1. Repeat steps with email: john@silva.com.br
//
//Expected Result: User should be successfully logged in
//
//Actual Result: User receives "unauthorized" error

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

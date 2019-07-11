const { isPalindrome } = require("./palindrome");

describe("palindrome", () => {
  it("54345 is a palindrome", () => expect(isPalindrome(54345)).toBeTruthy());
  it("10 is not a palindrome", () => expect(isPalindrome(10)).toBeFalsy());
  it("1001 is a palindrome", () => expect(isPalindrome(1001)).toBeTruthy());
  it("101 is a palindrome", () => {});
});

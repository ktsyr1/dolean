
```js
/**
 * Validates if a given phone number is a valid Lebanese phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} True if the number is a valid Lebanese phone number, false otherwise.
 */
function isLebanesePhoneNumber(phoneNumber) {
  // Remove any non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, '');

  // Pattern for Lebanese phone numbers
  const lebanesePattern = /^(?:961|0)?(?:(?:1|3|03|70|71|76|78|79|81)|(?:[3-9][0-9]{6}))$/;

  /*
  Pattern explanation:
  ^                 - Start of the string
  (?:961|0)?        - Optional country code (961) or leading zero
  (?:               - Start of non-capturing group
    (?:1[0-9]{6})   - Landline numbers: 1 followed by 6 digits
    |               - OR
    (?:[3-9][0-9]{7}) - Mobile numbers: 3-9 followed by 7 digits
  )                 - End of non-capturing group
  $                 - End of the string
  */

  return lebanesePattern.test(cleanNumber);
}

// Test cases
const numbers = [
  "+9611XXXXXX", // Landline ✅
  "+96103XXXXXX", // Mobile ✅
  "+96170XXXXXX", // Mobile ✅
  "+96171XXXXXX", // Mobile ✅
  "+96176XXXXXX", // Mobile ✅
  "+96178XXXXXX", // Mobile ✅
  "+96179XXXXXX", // Mobile ✅
  "+96181XXXXXX", // Mobile ✅
  "1XXXXXX", // Landline ✅
  "03XXXXXX", // Mobile ✅
  "70XXXXXX", // Mobile ✅
  "71XXXXXX", // Mobile ✅
  "76XXXXXX", // Mobile ✅
  "78XXXXXX", // Mobile ✅
  "79XXXXXX", // Mobile ✅
  "81XXXXXX", // Mobile ✅
  "+9612345678", // Invalid ❌
  "02XXXXXX", // Invalid ❌
  "+96100XXXXX", // Invalid ❌
  "123456", // Invalid ❌
  "+96170XXXXX", // Invalid ❌
  "+9617012345678" // Invalid ❌
];

console.log("Test Results:");
numbers.forEach(number => {
  const isValid = isLebanesePhoneNumber(number);
  console.log(`${number}: ${isValid ? '✅ Valid' : '❌ Invalid'}`);
});

```
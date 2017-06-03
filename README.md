## strip-and-shape-phone

A utility function that prefaces a phone number with '+1'.

Usage:
```javascript
import stripAndShapePhone from 'strip-and-shape-phone'; // Your NPM package.

const phoneNumber = '843-555-1234'; // The string to be formatted.

const formattedNumber = stripAndShapePhone(phoneNumber); // Calling the imported package.

formattedNumber === '+18435551234'; // true
```

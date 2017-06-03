function stripAndShapePhone(phoneNumber) {
  let formattedNumber = phoneNumber.replace(/[^0-9]/g, ''); // Strip all non-numeric characters out of the string.

  if (formattedNumber[0] === '1') {
    // If the first character of the incoming phoneNumber is '1', preface the formattedNumber with '+'.
    formattedNumber = `+${formattedNumber}`;
  } else {
    // Else, preface the string with '+1'.
    formattedNumber = `+1${formattedNumber}`;
  }

  return formattedNumber; // Return the newly formattedNumber.
}

module.exports = stripAndShapePhone; // Export the function as a default to represent the entire module.

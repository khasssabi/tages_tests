const generateEmail = () => {
  return `autotest${Date.now()}@tagestest.ru`;
};

const generateLongName = () => {
  return "LongName ".repeat(30);
};

const invalidEmails = [
  "invalid@email", // Missing TLD
  "invalidemail.com", // Missing @
  "invalid@com", // Missing domain
  "invalid @email.com", // Contains space
  "invalid@@email.com", // Double @
  "невалид@email.com", // Cyrillic
];

module.exports = {
  invalidEmails,

  validData: {
    phone: "9999999999",
    name: "Тестова",
    company: "Autotest Inc",
    email: generateEmail(),
    comment: "Test! Don't pay attention!",
  },

  longNameFields: {
    // Expected: The name field have a character limit
    name: generateLongName(),
    phone: "9999999999",
    company: "Autotest Inc",
    email: generateEmail(),
    comment: "Test! Don't pay attention!",
  },

  specialChars: {
    // Expected: Special characters should be forbiden
    name: "  $!@<>^*",
    phone: "9999999999",
    company: "$!@<>^*&",
    email: generateEmail(),
    comment: '<script>alert("Atata");</script>',
  },

  emptyFields: {
    name: "",
    phone: "",
    company: "",
    email: "",
    comment: "",
  },

  invalidPhone: {
    name: "Тестова",
    phone: "12345",
    company: "Autotest Inc",
    email: generateEmail(),
    comment: "Test! Don't pay attention!",
  },

  spaceInName: {
    name: " ",
    phone: "0000000000",
    company: "",
    email: generateEmail(),
    comment: "",
  },
};

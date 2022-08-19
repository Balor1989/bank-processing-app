const ERROR_CODES = {
  EMAIL_NOT_FOUND: "User with this email was not found",
  INVALID_PASSWORD: "Invalid password",
  EMAIL_EXISTS:
    "User with such email is already exists. Please go to the sign in page",
};

export function errorMessage(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : code;
}

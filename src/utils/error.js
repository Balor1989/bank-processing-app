const ERROR_CODES = {
  EMAIL_NOT_FOUND: "User with this email was not found",
  INVALID_PASSWORD: "Invalid password",
  EMAIL_EXISTS:
    "User with such email is already exists. Please go to the sign in page",
  ERR_BAD_REQUEST: "Please, sign in",
  ERR_NETWORK: "Bad network connection. Please, try again",
};

export function errorMessage(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : code;
}

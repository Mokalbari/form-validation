const formElements = {
  form: document.getElementById("form"),
  username: document.getElementById("username"),
  email: document.getElementById("email"),
  country: document.getElementById("country"),
  postal: document.getElementById("postal"),
  password: document.getElementById("password"),
  passwordCheck: document.getElementById("passwordCheck"),
};

const errorField = {
  username: document.getElementById("usernameError"),
  email: document.getElementById("emailError"),
  country: document.getElementById("countryError"),
  postal: document.getElementById("postalError"),
  password: document.getElementById("passwordError"),
  passwordCheck: document.getElementById("passwordCheckError"),
};

const sendError = (input, error) => `Your ${input} must be ${error}.`;
const sendValidMessage = (input) => `Your ${input} is correct.`;

const checkUsername = (field, error) => {
  field.addEventListener("blur", () => {
    if (!field.checkValidity()) {
      error.textContent = sendError("username", "4 to 20 characters");
    } else {
      error.textContent = sendValidMessage("username");
    }
  });
};

const checkEmail = (field, error) => {
  field.addEventListener("blur", () => {
    if (!field.checkValidity()) {
      error.textContent = sendError("mail", "correctly formated");
    } else {
      error.textContent = sendValidMessage("mail");
    }
  });
};

const checkPassword = (field, error) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  field.addEventListener("blur", () => {
    if (!regex.test(field.value)) {
      error.textContent = sendError(
        "password",
        "at least 8 characters, 1 uppercase, 1 lower case"
      );
    } else {
      error.textContent = sendValidMessage("password");
    }
  });
};

const doubleCheckPassword = (original, field, error) => {
  field.addEventListener("blur", () => {
    if (field.value !== original.value) {
      error.textContent = sendError("password", "matching");
    } else {
      error.textContent = sendValidMessage("password");
    }
  });
};

checkEmail(formElements.email, errorField.email);
checkUsername(formElements.username, errorField.username);
checkPassword(formElements.password, errorField.password);
doubleCheckPassword(
  formElements.password,
  formElements.passwordCheck,
  errorField.passwordCheck
);

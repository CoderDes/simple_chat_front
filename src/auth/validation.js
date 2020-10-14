import ValidatorFactory from "../util/ValidatorFactory";

const emailValidator = ValidatorFactory.getValidator("email");
const passwordValidator = ValidatorFactory.getValidator("password");

export const validate = values => {
  const errors = {};
  try {
    emailValidator.validate(values.email);
  } catch (err) {
    errors.email = err.message;
  }
  try {
    passwordValidator.validate(values.password);
  } catch (err) {
    errors.password = err.message;
  } finally {
    return errors;
  }
};

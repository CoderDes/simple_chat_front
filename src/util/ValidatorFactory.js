class Validator {
  validate(input) {
    if (input === "") {
      return false;
    }
    return true;
  }
}

class EmailValidator extends Validator {
  validate(email) {
    if (!super.validate(email)) {
      throw new Error("Email is required");
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      throw new Error("Invalid email address");
    }
  }
}

class PasswordValidator extends Validator {
  validate(password) {
    if (!super.validate(password)) {
      return "Password is required";
    }
  }
}

class ValidatorFactory {
  getValidator(type) {
    if (typeof type !== "string") {
      return;
    }
    switch (type.toLowerCase()) {
      case "email":
        return new EmailValidator();
      case "password":
        return new PasswordValidator();
      default:
        return;
    }
  }
}

export default new ValidatorFactory();

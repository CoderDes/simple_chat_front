import React from "react";
import { useFormik } from "formik";

import ValidatorFactory from "../util/ValidatorFactory";
import { AuthWrapper, Form, Field, Button } from "./styles.js";

const emailValidator = ValidatorFactory.getValidator("email");
const passwordValidator = ValidatorFactory.getValidator("password");

const validate = values => {
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

const Login = props => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async values => {
      console.log("SUBMIT");
      const { email, password } = values;
      const options = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };

      try {
        const response = await fetch(
          "http://localhost:3001/api/auth/login",
          options,
        );
        const text = await response.text();
        console.log("RESPONSE ", response);
        console.log("TEXT ", text);
      } catch (e) {
        alert("ERROR");
        console.error(e);
      }
    },
  });
  return (
    <AuthWrapper>
      <h1>Login</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Field
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <Field
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <Button type="submit">Submit</Button>
      </Form>
    </AuthWrapper>
  );
};

export default Login;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import ValidatorFactory from "../util/ValidatorFactory";

const emailValidator = ValidatorFactory.getValidator("email");
const passwordValidator = ValidatorFactory.getValidator("password");

const login = props => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        try {
          emailValidator.validate(values.email);
        } catch (err) {
          console.error(err);
          errors.email = err;
        }
        try {
          passwordValidator.validate(values.password);
        } catch (err) {
          console.error(err);
          errors.password = err;
        }
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("SUBMITTING");
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default login;
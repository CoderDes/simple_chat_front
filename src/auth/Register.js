import React from "react";
import { useFormik } from "formik";

import { validate } from "./validation.js";
import { Form, Field, Button } from "./styles.js";

const Register = props => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async values => {
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
          "http://localhost:3001/api/users/register",
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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Register;

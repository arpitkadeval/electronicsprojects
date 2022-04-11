import React from "react";
import { Form, useField, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;
  return (
    <div
      className={`d-flex ${
        showFeedback ? (meta.touched && meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};
const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await sleep(500);
        console.log(">>>>>>", JSON.stringify(values));
  
        axios({
          method: "POST",
          url: "http://192.168.29.161:4040/api/auth/login",
          data: values,
        })
          .then((response) => {    
              console.log(response.data.data.token)
              localStorage.setItem('token',response.data.data.token)
          })
          .catch((erro) => {
            console.log("error", erro);
          });
    
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .required("password is required"),
    }),
  });

  return (
    <div className="features">
      <div className="b-box">
        <div className="b-b-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
        <div className="b-b-text">
          <FormikProvider value={formik}>
            <Form>
              <div className="mt-5">
                <div className="simbol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-open"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                  </svg>
                </div>

                <TextInputLiveFeedback
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mt-4">
                <div className="simbol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <TextInputLiveFeedback
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="forgrt">
                <Link className="nav-link" to="/forgotpass">
                  Forgot password
                </Link>
              </div>
              <div className="header-btns">
                <button className="header-btn" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default Login
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginContainer = () => {
  const history = useNavigate();
const [error, setError] = useState("")
  // Array of login credentials
  const users = [
    { email: "admin@example.com", password: "admin@123", role: "admin" },
    { email: "ajay@example.com", password: "ajay@123", role: "customer" },
    { email: "anu@example.com", password: "anu@123", role: "customer" },
    { email: "jeni@example.com", password: "jeni@123", role: "customer" },
    { email: "john@example.com", password: "john@123", role: "customer" },
    // Add more users as needed
  ];

  const [singObj, setSingObj] = useState({
    email: "",
    password: "",
  });

  const LoginInSchema = Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const submitLogin = (values) => {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      localStorage.setItem("loginDetails", JSON.stringify(values));

      if (user.role === "admin") {
        history("/upload-video");
      } else if (user.role === "customer") {
        history("/stream-video");
      }
    } else {
      // Invalid credentials
      console.log("Invalid credentials");
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="min-h-screen relative bg-white flex flex-col lg:flex-row items-center justify-center">
        <div className="max-w-md w-full p-5 shadow-lg rounded-lg bg-white">
          <h2 className="text-center text-lg">Login Form</h2>
          <Formik
            initialValues={singObj}
            onSubmit={(values) => submitLogin(values)}
            validationSchema={LoginInSchema}
            enableReinitialize={true}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <>
                <div className="mb-2">
                  <label htmlFor="email" className="mb-2 font-bold block">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 box-border border-2 border-gray-50 rounded focus:outline-none"
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="mb-2 font-bold block">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 box-border border-2 border-gray-50 rounded focus:outline-none"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && touched.password && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {errors.password}
                    </p>
                  )}
                </div>
                 {error && <p className="text-red-500">{error}</p>} 
                <div className="mb-5 text-center mt-5">
                  <button
                    type="submit"
                    className="bg-green-400 text-gray-100 px-5 py-3 border-none rounded cursor-pointer"
                    onClick={() => handleSubmit()}
                  >
                    Login
                  </button>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;

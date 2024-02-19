import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const history = useNavigate();
const [customerArray, setCustomerArray] = useState([])
  const [registerObj, setRegisterObj] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
  });


  const submitRegister = (values) => {
    // Create a copy of the array and push the new values
    setCustomerArray((prevArray) => [...prevArray, values]);
  
    // Get the updated array with the new values
    const updatedArray = [...customerArray, values];
  
    // Save to localStorage
    localStorage.setItem("customerDetails", JSON.stringify(updatedArray));
  
    // Use history for navigation
    history("/login");
  };
  
  return (
    <div>
      <div className="min-h-screen relative bg-white flex flex-col lg:flex-row items-center justify-center">
        <div className=" max-w-md w-full p-5 shadow-lg rounded-lg bg-white">
          <h2 className="text-center text-lg">Registration Form</h2>
          <Formik
            initialValues={registerObj}
            onSubmit={(values) => submitRegister(values)}
            validationSchema={RegisterSchema}
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
                <div className="mb-5">
                  <label for="username" className="mb-2 font-bold block">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full p-2 box-border border-2 border-gray-50 rounded focus:outline-none"
                    onChange={handleChange("username")}
                    onBlur={handleBlur("username")}
                  />
                  {errors.username && touched.username && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <label for="email" className="mb-2 font-bold block">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 box-border border-2 border-gray-50 rounded focus:outline-none"
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <label for="password" className="mb-2 font-bold block">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 box-border border-2 border-gray-50 rounded focus:outline-none"
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="mb-5 text-center">
                  <button
                    type="submit"
                    className="bg-green-400 text-gray-100 px-5 py-3 border-none rounded cursor-pointer"
                    onClick={() => handleSubmit()}
                  >
                    Register
                  </button>
                  <div className="flex justify-center mt-3">
                    <span>Already registered ?</span>
                    <a href="#/login" className=" ml-5 text-green-400"> Login</a>
                  </div>
                  
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;

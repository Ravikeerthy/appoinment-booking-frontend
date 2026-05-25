import { Link } from "react-router-dom";
import bgImage from "../assets/auth-bg.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md bg-black/70 border border-white/15 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to manage your appointments
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none focus:border-violet-500"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none focus:border-violet-500"
              />

              <ErrorMessage
                name="password"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition py-3 rounded-2xl font-semibold"
            >
              Login
            </button>
          </Form>
        </Formik>

        <p className="text-gray-400 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
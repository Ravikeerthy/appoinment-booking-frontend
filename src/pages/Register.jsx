import { Link } from "react-router-dom";
import bgImage from "../assets/auth-bg.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
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
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Start managing appointments easily
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>

              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none focus:border-violet-500"
              />

              <ErrorMessage
                name="name"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <Field
                type="password"
                name="password"
                placeholder="Create password"
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
              Register
            </button>

          </Form>
        </Formik>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-violet-400 hover:text-violet-300"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
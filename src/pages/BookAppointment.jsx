import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookAppointment = () => {
  const initialValues = {
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Please select a service"),
    date: Yup.string().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl bg-white/10 border border-white/10 rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-3">
          Book Appointment
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Choose your service, date, and preferred time slot.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <Field name="name" placeholder="Full Name" className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none" />
            <ErrorMessage name="name" component="p" className="text-red-400 text-sm" />

            <Field name="email" type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none" />
            <ErrorMessage name="email" component="p" className="text-red-400 text-sm" />

            <Field as="select" name="service" className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none">
              <option value="">Select Service</option>
              <option value="Consultation">Consultation</option>
              <option value="Salon Booking">Salon Booking</option>
              <option value="Fitness Training">Fitness Training</option>
              <option value="Online Classes">Online Classes</option>
            </Field>
            <ErrorMessage name="service" component="p" className="text-red-400 text-sm" />

            <Field name="date" type="date" className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none" />
            <ErrorMessage name="date" component="p" className="text-red-400 text-sm" />

            <Field as="select" name="time" className="w-full bg-black/50 border border-white/15 rounded-2xl px-4 py-3 outline-none">
              <option value="">Select Time Slot</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
            </Field>
            <ErrorMessage name="time" component="p" className="text-red-400 text-sm" />

            <button className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-2xl font-semibold">
              Confirm Booking
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BookAppointment;
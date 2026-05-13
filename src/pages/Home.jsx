import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 md:pt-40">
       <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="max-w-3xl"
>
          <p className="text-violet-400 font-medium mb-4">
            Modern Appointment Booking Platform
          </p>

         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Simplify Your <br />
            Appointment Scheduling
          </h1>

         <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mb-8">
            A modern booking platform for salons, clinics, tutors, gyms, and
            businesses. Manage appointments with ease.
          </p>

          <button className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-full text-lg font-semibold">
            Book Appointment
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

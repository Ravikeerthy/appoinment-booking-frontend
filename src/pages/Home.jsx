import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 md:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-violet-400 font-medium mb-4">
              Modern Appointment Booking Platform
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simplify Your Appointment Scheduling
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mb-8 max-w-xl">
              A modern booking platform for salons, clinics, tutors, gyms, and
              businesses. Manage appointments with ease.
            </p>
            <Link
              to="/book-appointment"
              className="inline-block bg-violet-600 hover:bg-violet-700 transition px-7 py-4 rounded-full text-base sm:text-lg font-semibold"
            >
              Book Appointment
            </Link>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl">
              <p className="text-violet-400 font-medium mb-2">
                Next Available Slot
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Book Your Session
              </h2>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Service</p>
                  <h3 className="text-lg font-semibold">Consultation</h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Date</p>
                  <h3 className="text-lg font-semibold">14 May 2026</h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Time</p>
                  <h3 className="text-lg font-semibold">10:30 AM</h3>
                </div>
              </div>

              <button className="w-full mt-8 bg-violet-600 hover:bg-violet-700 transition py-4 rounded-2xl text-base sm:text-lg font-semibold">
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          <StatsCard number="500+" label="Bookings Managed" />
          <StatsCard number="120+" label="Happy Clients" />
          <StatsCard number="24/7" label="Easy Scheduling" />
        </div>

        <section className="mt-28">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-3">OUR SERVICES</p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services We Offer
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-7">
              Manage appointments effortlessly for various businesses and
              professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Consultation"
              description="Schedule professional consultations with seamless booking management."
            />

            <ServiceCard
              title="Salon Booking"
              description="Easy salon appointment scheduling with real-time slot availability."
            />

            <ServiceCard
              title="Fitness Training"
              description="Manage personal training sessions and fitness appointments."
            />

            <ServiceCard
              title="Online Classes"
              description="Organize and schedule online tutoring and coaching sessions."
            />

            <ServiceCard
              title="Medical Appointments"
              description="Simplify patient appointment booking and scheduling workflows."
            />

            <ServiceCard
              title="Business Meetings"
              description="Handle client meetings and professional scheduling efficiently."
            />
          </div>
          <section className="mt-32 pb-24">
            <div className="text-center mb-16">
              <p className="text-violet-400 font-medium mb-3">TESTIMONIALS</p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Clients Say
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto leading-7">
                Businesses and professionals trust our platform for managing
                appointments efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Salon Owner"
                review="This platform completely transformed how we manage bookings and customers."
              />

              <TestimonialCard
                name="David Smith"
                role="Fitness Trainer"
                review="Simple, elegant, and extremely easy to use for scheduling sessions."
              />

              <TestimonialCard
                name="Emily Brown"
                role="Consultant"
                review="The appointment system saved us countless hours every week."
              />
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

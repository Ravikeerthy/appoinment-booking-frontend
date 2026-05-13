import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Appointly
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>

          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-full text-white font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B1120] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-violet-600 hover:bg-violet-700 transition px-5 py-3 rounded-full text-white font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

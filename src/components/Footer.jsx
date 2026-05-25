import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h2 className="text-2xl font-bold">Appointly</h2>
          <p className="text-gray-400 mt-2">
            Smart appointment booking made simple.
          </p>
        </div>

        <div className="flex gap-6">
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>

          <Link to="/login" className="text-gray-400 hover:text-white transition">
            Login
          </Link>

          <Link to="/register" className="text-gray-400 hover:text-white transition">
            Register
          </Link>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Appointly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
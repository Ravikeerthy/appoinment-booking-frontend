const TestimonialCard = ({ name, role, review }) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition duration-300">

      <div className="flex items-center gap-1 mb-4">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      <p className="text-gray-300 leading-7 mb-6">
        "{review}"
      </p>

      <div>
        <h3 className="text-lg font-semibold">
          {name}
        </h3>

        <p className="text-gray-400 text-sm">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
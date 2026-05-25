const StatsCard = ({ number, label }) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
      <h3 className="text-3xl font-bold">{number}</h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default StatsCard;
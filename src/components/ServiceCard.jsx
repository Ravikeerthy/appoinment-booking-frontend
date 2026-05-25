const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:bg-white/15 transition duration-300">
      
      <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6">
        <div className="w-6 h-6 bg-violet-500 rounded-full" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
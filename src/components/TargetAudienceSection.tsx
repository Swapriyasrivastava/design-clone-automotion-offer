
const TargetAudienceSection = () => {
  const audiences = [
    {
      years: "0-2 Yrs",
      title: "Beginners",
      description: "Leapfrog past veterans by mastering AI early"
    },
    {
      years: "2-7 Yrs", 
      title: "Mid - Career",
      description: "Combine your experience with AI skills to become irreplaceable"
    },
    {
      years: "7-12 Yrs",
      title: "Senior Marketers", 
      description: "Lead the AI revolution instead of being left behind"
    },
    {
      years: "12+ Yrs",
      title: "Marketing Leaders",
      description: "Make confident AI decisions that keep your company ahead"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-green-500 rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background silhouettes */}
          <div className="absolute inset-0 flex justify-center items-center opacity-20">
            <div className="flex gap-8">
              {[1,2,3,4,5,6,7].map((i) => (
                <div key={i} className="w-16 h-16 bg-white/20 rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold mb-2">{audience.years}</h3>
                <h4 className="text-lg font-semibold mb-3">{audience.title}</h4>
                <p className="text-sm opacity-90 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

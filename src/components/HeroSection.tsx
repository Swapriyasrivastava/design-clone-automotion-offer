
const HeroSection = () => {
  const instructors = [
    {
      name: "Raghuveer",
      role: "Brand mktg. manager",
      company: "UBER",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait1.svg"
    },
    {
      name: "Priyanku Sarmah",
      role: "Visual Art Director",
      company: "SAMURAI",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait2.svg",
      highlight: true
    },
    {
      name: "Manish M",
      role: "Founder",
      company: "GROWW STACKS",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait3.svg"
    },
    {
      name: "K V S Dileep",
      role: "Head of AI initiatives",
      company: "GROWTHSCHOOL",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait4.svg",
      highlight: true
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              The <span className="text-green-500">AI Marketing Breakthrough Formula</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your 16-Hour Blueprint to Automate Work, Build Smart Assistants & Master 20+ Essential AI Tools
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img 
                  src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/dart.svg" 
                  alt="Target" 
                  className="w-6 h-6"
                />
                <span className="text-blue-600 font-medium">Learn from the Top 1% in AI 📘</span>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Join the AI Marketing Mastermind
              <div className="text-sm">Now for Rs.99 Rs.1999</div>
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/newmmd.webp" 
              alt="AI Marketing Mastermind" 
              className="w-full max-w-md mx-auto"
            />
            
            <div className="absolute -right-4 top-8 grid grid-cols-2 gap-4">
              {instructors.map((instructor, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg p-3 shadow-lg border-2 ${
                    instructor.highlight 
                      ? 'border-green-500 animate-float' 
                      : 'border-gray-200'
                  } max-w-[120px]`}
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 mx-auto"></div>
                  <h4 className="font-semibold text-xs text-center">{instructor.name}</h4>
                  <p className="text-xs text-gray-600 text-center">{instructor.role}</p>
                  <p className="text-xs font-bold text-center">{instructor.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

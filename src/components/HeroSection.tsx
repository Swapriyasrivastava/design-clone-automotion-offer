
const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-8 mb-8">
              <img 
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/newgsblack.svg" 
                alt="Growth School" 
                className="h-8"
              />
              <div className="flex items-center gap-4">
                <img 
                  src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/tps.svg" 
                  alt="LinkedIn Top Startup India" 
                  className="h-6"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">● Live</span>
                <span className="text-sm">3 Day Mastermind: 11th to 13th July</span>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

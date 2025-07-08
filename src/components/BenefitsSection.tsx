
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Your Personal AI MARKETING ASSISTANT That Works 24/7",
      description: "Create a Custom GPT that writes high-converting copy while you sleep!"
    },
    {
      title: "The NO-CODE AUTOMATION BLUEPRINT That Saves 15+ Hours/Week", 
      description: "Connect AI tools that automatically generate, schedule, and optimize your campaigns."
    },
    {
      title: "The VISUAL MARKETING MASTERY System:",
      description: "Create stunning images and videos using Midjourney and Runway ML (even with zero design skills)."
    },
    {
      title: "The ONE-PERSON ARMY Marketing Blueprint:",
      description: "Build systems to single-handedly run campaigns that normally require 3-5 specialists."
    },
    {
      title: "The AI TOOL BLACK BOOK (35+ Cutting-Edge Tools):",
      description: "Get insider access to the FULL arsenal of AI marketing weapons beyond just ChatGPT."
    },
    {
      title: "The PERFECT PROMPT FORMULA For Guaranteed Results:",
      description: "Master our 5-part prompt structure that gets perfect results from any AI tool, every time."
    },
    {
      title: "The SET & FORGET Lead Generation System",
      description: "Build workflows that find, qualify, and nurture leads while you focus on strategy."
    },
    {
      title: "Your Custom 2025 AI MARKETING ROADMAP",
      description: "Get a personalized plan showing exactly which AI tools to implement for YOUR challenges."
    }
  ];

  const learningImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          By the end of this <span className="text-green-500">Mastermind, you'll have:</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-sm mb-3">
                {benefit.title.split(' ').map((word, i) => 
                  word.includes('AI') || word.includes('NO-CODE') || word.includes('VISUAL') || 
                  word.includes('ONE-PERSON') || word.includes('BLACK') || word.includes('PERFECT') ||
                  word.includes('SET') || word.includes('FORGET') || word.includes('MARKETING') ? (
                    <span key={i} className="text-green-500">{word} </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Learn from the Top 1% Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            Learn from the <span className="text-green-500">Top 1% in AI</span> 📘
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {learningImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src={image} 
                  alt={`AI Expert ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-1">AI Expert {index + 1}</h4>
                  <p className="text-xs text-gray-600">Marketing Specialist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

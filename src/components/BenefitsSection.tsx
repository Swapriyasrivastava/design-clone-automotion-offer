
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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          By the end of this <span className="text-green-500">Mastermind, you'll have:</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
      </div>
    </section>
  );
};

export default BenefitsSection;

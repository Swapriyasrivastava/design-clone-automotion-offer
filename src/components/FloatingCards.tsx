
const FloatingCards = () => {
  const newsItems = [
    {
      source: "Analytics India Magazine",
      title: "Stability AI Releases Stable Diffusion 3.5 Text-to-Image AI Model",
      description: "These models are capable of running on consumer-grade hardware and are available for both commercial and non-commercial use.",
      time: "16 hours ago"
    },
    {
      source: "Entrepreneur", 
      title: "Freshworks Introduces No-Code Freddy AI Agent, Streamlining Customer and IT Support",
      description: "According to company it autonomously resolves approximately 45% customer support requests and 40% of IT service requests on average.",
      time: "19 hours ago"
    },
    {
      source: "The New York Times",
      title: "Meta Unveils Instant A.I. Video Generator That Adds Sounds",
      description: "On Friday, the tech giant Meta unveiled a set of A.I. tools, called Meta Movie Gen, for automatically generating videos, instantly editing them...",
      time: "3 weeks ago"
    },
    {
      source: "Asana",
      title: "Asana Announces AI Studio: No-Code Builder for Designing and Deploying AI Agents in Critical Workflows", 
      description: "Now, teams can create workflows where customizable AI agents perform specific jobs and take action on tasks across every stage of work...",
      time: "2 days ago"
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-300 mb-4">DON'T MISS OUT</p>
        <h2 className="text-3xl font-bold text-center mb-12">
          AI will change the way you do Business
        </h2>

        {/* Top row - moving right to left */}
        <div className="mb-8 overflow-hidden">
          <div className="flex gap-6 animate-slide-left">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="bg-white text-black rounded-lg p-6 min-w-[400px] shadow-lg flex-shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    📊 {item.source}
                  </span>
                </div>
                <h3 className="font-bold text-blue-600 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{item.description}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - moving left to right */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-slide-right">
            {[...newsItems.slice().reverse(), ...newsItems.slice().reverse()].map((item, index) => (
              <div key={index} className="bg-white text-black rounded-lg p-6 min-w-[400px] shadow-lg flex-shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    🚀 {item.source}
                  </span>
                </div>
                <h3 className="font-bold text-blue-600 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{item.description}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-green-500">Learn from the top 1% in AI</span>
          </h3>
          <p className="text-gray-300 mb-6">
            ...as They Guide You Through Cutting-Edge Tools—Transforming the Way You Work and Create
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloatingCards;

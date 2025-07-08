
const AIToolsSection = () => {
  const tools = [
    { name: "Apollo.io", logo: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait5.svg" },
    { name: "make", logo: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait6.svg" },
    { name: "runway", logo: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait7.svg" },
    { name: "ChatGPT", logo: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait8.svg" },
    { name: "Midjourney", logo: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait9.svg" }
  ];

  const additionalTools = [
    "Zapier", "Notion", "Canva", "Figma", "Loom", 
    "Airtable", "Calendly", "Buffer", "HubSpot", "Slack"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-green-500">20+ cutting-edge AI tools</span> you'll master
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {tools.map((tool, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-6 mb-4 h-24 flex items-center justify-center">
                <img src={tool.logo} alt={tool.name} className="max-h-12 max-w-full" />
              </div>
              <h3 className="font-semibold">{tool.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {additionalTools.map((tool, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 h-24 flex items-center justify-center">
                <span className="text-gray-400 font-medium">{tool}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">AI FOR ALL STAGES</p>
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-green-500">Who is this program for?</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;

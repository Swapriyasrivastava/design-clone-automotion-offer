
const ScheduleSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Make AI Work For Your Marketing</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg mb-8">
            Limited Spots Available<br />
            Register Now For Rs.99! <span className="line-through">Rs.1999</span>
          </button>
        </div>

        {/* Schedule Introduction */}
        <div className="text-center mb-12">
          <p className="text-xl mb-4">Here's the Schedule for the</p>
          <h3 className="text-4xl font-bold text-green-500 mb-8">
            3 Days That Will Change How You Do Marketing Forever:
          </h3>
        </div>

        {/* Day 1 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold">
              DAY 1 • 11th July
            </span>
            <p className="text-sm text-gray-600 mt-2">SESSION 1 • 7 PM - 10 PM IST</p>
          </div>
          
          <h4 className="text-2xl font-bold text-center mb-6">
            Generative AI Foundations & Business Applications
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>What is LLM?, Neural networks, AI vs ML, supervised & unsupervised learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Fundamentals of NLP, transformers, and correlation with LLMs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>How LLMs work: prompt engineering and OpenRouter capabilities</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Case studies: HR, marketing, operations, and finance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Stimulate AI outputs using prompts vs traditional coding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unlock growth, efficiency, and innovation across teams</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Day 2 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold">
              DAY 2 • 12th July
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Session 2 */}
            <div>
              <p className="text-sm text-gray-600 mb-2">SESSION 2 • 10 AM - 2 PM IST</p>
              <h4 className="text-xl font-bold mb-4">BUILDING YOUR AI MARKETING ASSISTANT</h4>
              
              <div className="mb-6">
                <h5 className="font-semibold text-green-500 mb-2">✓ Custom GPT Development</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• GPT Architecture Fundamentals</li>
                  <li>• Training Models With Your Brand Voice</li>
                  <li>• Advanced Prompting Techniques</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-green-500 mb-2">✓ AI Marketing Deployment</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Integrating GPTs Into Marketing Workflows</li>
                  <li>• Memory & Context Enhancement</li>
                  <li>• 24/7 Marketing Automation</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-500 mb-2">✓ HANDS-ON WORKSHOP</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Build & Deploy Your Own Marketing GPT</li>
                </ul>
              </div>
            </div>

            {/* Session 3 */}
            <div>
              <p className="text-sm text-gray-600 mb-2">SESSION 3 • 3 PM - 5 PM IST</p>
              <h4 className="text-xl font-bold mb-4">AI Automations</h4>
              
              <div className="mb-6">
                <h5 className="font-semibold text-green-500 mb-2">✓ Master Social Media Automation with Make.com</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Introduction to Make.com – Your Gateway to No-Code Automation</li>
                  <li>• Trigger Actions – Automate Tasks Based on Events Like New Followers or DMs</li>
                  <li>• Connect Multiple Apps – Streamline Tools Like Instagram, Twitter, LinkedIn & More</li>
                  <li>• Integrate ChatGPT API – Auto-Generate Smart Replies, Captions & Content</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-500 mb-2">✓ HANDS-ON ACTIVITY</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Build Your First AI Workflow – Set Up Real Social Media Automations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold">
              DAY 3 • 13th July
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Session 4 */}
            <div>
              <p className="text-sm text-gray-600 mb-2">SESSION 4 • 10 AM - 2 PM IST</p>
              <h4 className="text-xl font-bold mb-4">VISUAL AI MASTERY</h4>
              
              <div className="mb-6">
                <h5 className="font-semibold text-green-500 mb-2">✓ AI Visual Marketing Blueprint</h5>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Visual Storytelling Fundamentals</li>
                  <li>• Creating Brand-Consistent Visuals</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-500 mb-2">✓ Krea AI Masterclass</h5>
              </div>
            </div>

            {/* Session 5 */}
            <div>
              <p className="text-sm text-gray-600 mb-2">SESSION 5 • 3 PM - 5 PM IST</p>
              <h4 className="text-xl font-bold mb-4">Bonus Session on Vibe Coding: Building No-Code AI Products</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Build internal tools without writing code using Supabase & AI tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Learn frontend, backend, and database integration with AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Deploy a real MVP by the end of the session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

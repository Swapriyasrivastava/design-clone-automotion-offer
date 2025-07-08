
const InstructorSection = () => {
  const instructors = [
    {
      name: "Priyanku Sarmah",
      role: "Visual Art Director",
      company: "samurai",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait2.svg"
    },
    {
      name: "Raghuveer Nishtala", 
      role: "Brand Marketer",
      company: "Uber",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait1.svg"
    },
    {
      name: "Manish",
      role: "Founder", 
      company: "Groww Stacks",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait3.svg"
    },
    {
      name: "K V S Dileep",
      role: "Head of AI Initiatives",
      company: "Growth School",
      image: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/ait4.svg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-green-500">Learn from the top 1% in AI</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          ...as They Guide You Through Cutting-Edge Tools—Transforming the Way You Work and Create
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.role}</p>
              <p className="font-semibold">{instructor.company}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join The AI Marketing Mastermind, NOW!
          </h2>
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <div className="text-2xl font-bold">03 Days : 08 Hours : 30 Mins</div>
            <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Join the AI Marketing Mastermind
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
